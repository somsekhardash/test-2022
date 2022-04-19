const { ApolloServer, gql } = require('apollo-server');
const {matches, players, playerMap } = require('./match');
const axios = require('axios');

const getUserData = (name, results) => {
  const fData =  Object.keys(results).map((result, index)=> {
    return {
      matchNumber: result,
      result: results[result].winner.indexOf(name.toUpperCase()) > -1,
      score: (results[result].winner.indexOf(name.toUpperCase()) > -1) ? parseInt(((players.length * 20)/results[result].winner.length)): 0 
    }
  });
  const total = fData.reduce((res, data)=> {
    return {
      total: fData.length * 20,
      score: res.score + data.score
    }
  },{score: 0});
  return {fData, total}
}

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  interface IMatch {
    MatchNumber: Int
    RoundNumber: Int
    DateUtc: String
    Location: String
    HomeTeam: String
    AwayTeam: String
  }

  # type Match implements IMatch{
  #   MatchNumber: Int,
  #   RoundNumber: Int,
  #   DateUtc: String,
  #   Location: String,
  #   HomeTeam: String,
  #   AwayTeam: String
  # }

  type FMatch implements IMatch{
    MatchNumber: Int
    DateUtc: String
    RoundNumber: Int
    Location: String
    HomeTeam: String
    AwayTeam: String
    Result: Result
  }

  interface Player {
    id: ID
    name: String,
    nickName: String
  }

  type MatchPlayer implements Player {
    id: ID
    name: String,
    nickName: String
    performance: custom
  }

  type custom {
    match: [ PlayerPerMatch ],
    player: PlayerResult
  }

  type PlayerResult {
    score: Int
    total: Int
  }

  type PlayerPerMatch {
    matchNumber: Int
    result: Boolean
    score: Int
  }

  type Result {
    team: String,
    winner: [String]
    matchNumber: Int
  }
  
  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    matches: [ FMatch ],
    match(matchNumber: Int): FMatch,
    players: [ MatchPlayer ],
    player(id: String): MatchPlayer,
    matchResults: [Result],
    results: String
  }

  type Mutation {
    updateMatch(matchNumber: Int, team: String, winner: [String]): [Result]
  }

`;

const getData = async () => {
    const data = await axios.get('https://api.npoint.io/12b0bd7c11bfc3c63730').then((response) => {
      return response.data;
    });
    return data;
}

const context = {
  matchResults : getData(),
  allPlayers : players.map((player, id) => {
    return {name: playerMap[player], nickName: player, id: id}
  })
}

const resolvers = {
  // IMatch: {
  //   __resolveType(obj, context, info){
  //     if(obj.Result){
  //       return 'FMatch';
  //     }
  //     if(obj.RoundNumber){
  //       return 'Match';
  //     }
  //     // Only Book has a title field
      
  //     return null; // Grap
  //   },
  // },
  Player: {
    __resolveType(obj, context, info){
      return 'MatchPlayer';
    }
  },
  FMatch: {
    Result: async (parent, args, { matchResults }) => {
      const results = await matchResults;
      if(!!results[parent.MatchNumber]) {
        return results[parent.MatchNumber];
      } 
      return null;
    }
  },
  MatchPlayer: {
    performance: async ({name}, { id }, { matchResults }) => {
      const results = await matchResults;
      const {fData, total} = getUserData(name,results);
      return {match: [...fData], player: total};
    }
  },
  Query: {
    matches: () => matches,
    match: (_, { matchNumber }) => {
      let match =  matches.filter(match => {
        return match.MatchNumber == matchNumber
      })[0];
      return match;
    },
    players: (_,__, {allPlayers}) => allPlayers,
    player: (_, { id }, {allPlayers}) => {
      const player = allPlayers.find(player => player.name.toLowerCase() == id.toLowerCase());
      return {
        name: id,
        nickName: player.nickName
      }
    },
    matchResults: (_,__, {matchResults})  => {
      return matchResults.then(results => {
        return Object.keys(results).map((match) => {
          return {
            matchNumber: match,
            team: results[match].team,
            winner: results[match].winner, 
          }
        });
      });
    },
    results: async (_,__, {matchResults, allPlayers}) => {
      const results = await matchResults;
      const playerdata = allPlayers.reduce((obj,player)=> {
        const {total} = getUserData(player.name,results);
        obj[player.nickName] = total;
        return obj;
      },{})
      
      let data = '';
      const result = Object.keys(playerdata).forEach((node) => {
        data = data + `   ${node} - ${playerdata[node].score} / ${playerdata[node].total}   `;
      });
      return data;
    }
  },
  Mutation: {
    updateMatch: async (_, { matchNumber, team, winner }, {matchResults}) => {
      const matches = await matchResults;
      matches[matchNumber] = {
        team, winner
      }
      const data =  Object.keys(matches).map((match) => {
        return {
          matchNumber: match,
          team: matches[match].team,
          winner: matches[match].winner, 
        }
      });
      
      // const requestOptions = {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // };
      axios.post('https://api.npoint.io/12b0bd7c11bfc3c63730', matches)
        .then(
          (result) => {
            return data;
          },
          (error) => {
            console.log(error);
          }
        );
      
    }
  }
  
};

const server = new ApolloServer({typeDefs, resolvers, context});

server.listen().then(({ url })=> {
  console.log(`🚀  Server ready at ${url}`);
});

