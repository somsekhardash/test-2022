import React from 'react';
import './style.css';
import {
  useQuery,
  useMutation,
  gql
} from "@apollo/client";

const users = ['GU', 'MU', 'MA', 'PR', 'RN', 'BK'];

const MatchesQuery = gql`
    query MatchesQuery {
        matches {
            MatchNumber
            RoundNumber
            DateUtc
            Location
            HomeTeam
            AwayTeam
            Result {
              team
              winner
            }
        }
    }`;

const ResultQuery = gql`
    query MyResults {
      results
    }`;

const UpdateQuery = gql`
  mutation UpdateMatch($matchNumber: Int, $team: String, $winner: [String]) {
    updateMatch(matchNumber: $matchNumber, team: $team, winner: $winner) {
        winner
        team
        matchNumber  
    }
  }`;


function UserBooth({ match }){
  const {Result: result} = match;
  const [user, setUser] = React.useState(null);
  const [updateMatchData, { data: updateData, loading: updateLoading , error: updateError }] = useMutation(UpdateQuery);

  React.useEffect(() => {
    if(updateData)
    window.location.reload()  
  }, [updateData]);

  const onRadioChange = (data, eve) => {
    if(user?.matchNumber && data.target.dataset.matchnumber != user.matchNumber) {
      setUser({
        matchNumber: data.target.dataset.matchnumber,
      })
    } else 
    setUser({
      ...user,
      matchNumber: data.target.dataset.matchnumber,
      team: data.target.value
    });
  }

  const onCheckChange = (data, eve) => {
    if(user?.matchNumber && data.target.dataset.matchnumber != user.matchNumber) {
      setUser({
        matchNumber: data.target.dataset.matchnumber,
      })
    } else {
    if (data.target.checked) {
      setUser({
        ...user,
        matchNumber: data.target.dataset.matchnumber,
        winner: user?.winner ? [...user.winner, data.target.value] : [data.target.value]
      })
    } else {
      setUser({
        ...user,
        matchNumber: data.target.dataset.matchnumber,
        winner: [...user.winner.filter((node) => node != data.target.value)]
      })
    }
  }
  }

  const onFormSubmit = () => {
    const data = { variables: {...user, matchNumber: parseInt(user.matchNumber)}};
    updateMatchData(data);
  };

  return (
    <div className="user-booth">
      <b>Match Number {match.MatchNumber}</b>
      <div className="match">
        <input
          type="radio"
          id={match.HomeTeam}
          name={`match${match.MatchNumber}`}
          data-matchnumber={match.MatchNumber}
          value={match.HomeTeam}
          checked={result ? result.team === match.HomeTeam : (user ? user.team === match.HomeTeam : false)}
          onChange={onRadioChange}
          disabled={result}
        />
          <label htmlFor={match.HomeTeam}>{match.HomeTeam}</label>
        <br />
        <input
          type="radio"
          id={match.AwayTeam}
          name={`match${match.MatchNumber}`}
          data-matchnumber={match.MatchNumber}
          value={match.AwayTeam}
          checked={result ? result.team === match.AwayTeam : (user ? user.team === match.AwayTeam : false)}
          onChange={onRadioChange}
          disabled={result}
        />
          <label htmlFor={match.AwayTeam}>{match.AwayTeam}</label>
      </div>
      <div className="users">
        {users.map((tuser, index) => {
          return (
            <div className="user" key={index}>
              <input
                type="checkbox"
                id={`${match.MatchNumber}-${tuser}`}
                name={tuser}
                data-matchnumber={match.MatchNumber}
                value={tuser}
                checked={result ? (result?.winner.indexOf(tuser) > -1) : (user?.winner?.length ? (user.winner.indexOf(tuser) > -1) : false)}
                onChange={onCheckChange}
                disabled={result}
              />
              <label htmlFor={tuser}>{tuser}</label>
              <br />
            </div>
          );
        })}
      </div>
      <button type="button" disabled={result} onClick={onFormSubmit}>
        Submit!
      </button>
    </div>
  );
};

export default function App() {
  const { loading, error, data } = useQuery(MatchesQuery);
  const { loading: resultLoading , error: resultError , data: resultData } = useQuery(ResultQuery);
  const [matches, setMatches] = React.useState(null);
  
  React.useEffect(() => {
    if(data)
    setMatches([...data.matches]);
  }, [data]);
  

  // const onCheckChange = (data, evet) => {
  //   const tempWinner = results[data.target.dataset.matchnumber]?.winner || [];
  //   const match = results[data.target.dataset.matchnumber] || {};
  //   if (data.target.checked) {
  //     setResults({
  //       ...results,
  //       [data.target.dataset.matchnumber]: {
  //         ...match,
  //         winner: [...tempWinner, data.target.value],
  //       },
  //     });
  //   } else {
  //     setResults({
  //       ...results,
  //       [data.target.dataset.matchnumber]: {
  //         ...match,
  //         winner: [...tempWinner.filter((node) => node != data.target.value)],
  //       },
  //     });
  //   }
  // };

  // const onRadioChange = (data, evet) => {
  //   const match = results[data.target.dataset.matchnumber] || {};
  //   setResults({
  //     ...results,
  //     [data.target.dataset.matchnumber]: { ...match, team: data.target.value },
  //   });
  // };

  const onClickScore = () => {
      const fee = 20;
      const total = users.length * fee;
      const dash = users.reduce((res,user)=>{
        res[user] = 0;
        return res;
      },{});
      const som = Object.keys(results).reduce((res, match)=>{  
        results[match].winner.forEach((player)=>{
          res[player] = res[player] + total/results[match].winner.length 
        });
        return res;
      }, dash);
      setUserResults({...som});
  }

  if(!matches) {
    return <p>loading...</p>
  }

  return (
    <>
      {matches.map((match, index) => (
        <UserBooth match={match} key={index} />
      ))}
       <div className='user-result'>
         {resultData && resultData.results}
        </div>
      {/* <button type="button" onClick={onClickScore}>
        Team Score!
      </button> */}
    </>
  );
}
