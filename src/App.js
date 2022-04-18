import React from 'react';
import './style.css';

const users = ['GU', 'MU', 'MA', 'PR', 'RN', 'BK'];
const dmatches = [
  {
    MatchNumber: 1,
    RoundNumber: 1,
    DateUtc: '2022-03-26 14:00:00Z',
    Location: 'Wankhede Stadium, Mumbai',
    HomeTeam: 'Chennai Super Kings',
    AwayTeam: 'Kolkata Knight Riders',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 2,
    RoundNumber: 1,
    DateUtc: '2022-03-27 10:00:00Z',
    Location: 'Brabourne - CCI, Mumbai',
    HomeTeam: 'Delhi Capitals',
    AwayTeam: 'Mumbai Indians',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 3,
    RoundNumber: 1,
    DateUtc: '2022-03-27 14:00:00Z',
    Location: 'DY Patil Stadium, Navi Mumbai',
    HomeTeam: 'Punjab Kings',
    AwayTeam: 'Royal Challengers Bangalore',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 4,
    RoundNumber: 1,
    DateUtc: '2022-03-28 14:00:00Z',
    Location: 'Wankhede Stadium, Mumbai',
    HomeTeam: 'Gujarat Titans',
    AwayTeam: 'Lucknow Super Giants',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 5,
    RoundNumber: 1,
    DateUtc: '2022-03-29 14:00:00Z',
    Location: 'MCA Stadium, Pune',
    HomeTeam: 'Sunrisers Hyderabad',
    AwayTeam: 'Rajasthan Royals',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 6,
    RoundNumber: 1,
    DateUtc: '2022-03-30 14:00:00Z',
    Location: 'DY Patil Stadium, Navi Mumbai',
    HomeTeam: 'Royal Challengers Bangalore',
    AwayTeam: 'Kolkata Knight Riders',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 7,
    RoundNumber: 1,
    DateUtc: '2022-03-31 14:00:00Z',
    Location: 'Brabourne - CCI, Mumbai',
    HomeTeam: 'Lucknow Super Giants',
    AwayTeam: 'Chennai Super Kings',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 8,
    RoundNumber: 1,
    DateUtc: '2022-04-01 14:00:00Z',
    Location: 'Wankhede Stadium, Mumbai',
    HomeTeam: 'Kolkata Knight Riders',
    AwayTeam: 'Punjab Kings',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 9,
    RoundNumber: 2,
    DateUtc: '2022-04-02 10:00:00Z',
    Location: 'DY Patil Stadium, Navi Mumbai',
    HomeTeam: 'Mumbai Indians',
    AwayTeam: 'Rajasthan Royals',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 10,
    RoundNumber: 2,
    DateUtc: '2022-04-02 14:00:00Z',
    Location: 'MCA Stadium, Pune',
    HomeTeam: 'Gujarat Titans',
    AwayTeam: 'Delhi Capitals',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 11,
    RoundNumber: 2,
    DateUtc: '2022-04-03 14:00:00Z',
    Location: 'Brabourne - CCI, Mumbai',
    HomeTeam: 'Chennai Super Kings',
    AwayTeam: 'Punjab Kings',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 12,
    RoundNumber: 2,
    DateUtc: '2022-04-04 14:00:00Z',
    Location: 'DY Patil Stadium, Navi Mumbai',
    HomeTeam: 'Sunrisers Hyderabad',
    AwayTeam: 'Lucknow Super Giants',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 13,
    RoundNumber: 2,
    DateUtc: '2022-04-05 14:00:00Z',
    Location: 'Wankhede Stadium, Mumbai',
    HomeTeam: 'Rajasthan Royals',
    AwayTeam: 'Royal Challengers Bangalore',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 14,
    RoundNumber: 2,
    DateUtc: '2022-04-06 14:00:00Z',
    Location: 'MCA Stadium, Pune',
    HomeTeam: 'Kolkata Knight Riders',
    AwayTeam: 'Mumbai Indians',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 15,
    RoundNumber: 2,
    DateUtc: '2022-04-07 14:00:00Z',
    Location: 'DY Patil Stadium, Navi Mumbai',
    HomeTeam: 'Lucknow Super Giants',
    AwayTeam: 'Delhi Capitals',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 16,
    RoundNumber: 2,
    DateUtc: '2022-04-08 14:00:00Z',
    Location: 'Brabourne - CCI, Mumbai',
    HomeTeam: 'Punjab Kings',
    AwayTeam: 'Gujarat Titans',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 17,
    RoundNumber: 3,
    DateUtc: '2022-04-09 10:00:00Z',
    Location: 'DY Patil Stadium, Navi Mumbai',
    HomeTeam: 'Chennai Super Kings',
    AwayTeam: 'Sunrisers Hyderabad',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 18,
    RoundNumber: 3,
    DateUtc: '2022-04-09 14:00:00Z',
    Location: 'MCA Stadium, Pune',
    HomeTeam: 'Royal Challengers Bangalore',
    AwayTeam: 'Mumbai Indians',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 19,
    RoundNumber: 3,
    DateUtc: '2022-04-10 10:00:00Z',
    Location: 'Brabourne - CCI, Mumbai',
    HomeTeam: 'Kolkata Knight Riders',
    AwayTeam: 'Delhi Capitals',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 20,
    RoundNumber: 3,
    DateUtc: '2022-04-10 14:00:00Z',
    Location: 'Wankhede Stadium, Mumbai',
    HomeTeam: 'Rajasthan Royals',
    AwayTeam: 'Lucknow Super Giants',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 21,
    RoundNumber: 3,
    DateUtc: '2022-04-11 14:00:00Z',
    Location: 'DY Patil Stadium, Navi Mumbai',
    HomeTeam: 'Sunrisers Hyderabad',
    AwayTeam: 'Gujarat Titans',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 22,
    RoundNumber: 3,
    DateUtc: '2022-04-12 14:00:00Z',
    Location: 'DY Patil Stadium, Navi Mumbai',
    HomeTeam: 'Chennai Super Kings',
    AwayTeam: 'Royal Challengers Bangalore',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 23,
    RoundNumber: 3,
    DateUtc: '2022-04-13 14:00:00Z',
    Location: 'MCA Stadium, Pune',
    HomeTeam: 'Mumbai Indians',
    AwayTeam: 'Punjab Kings',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 24,
    RoundNumber: 3,
    DateUtc: '2022-04-14 14:00:00Z',
    Location: 'DY Patil Stadium, Navi Mumbai',
    HomeTeam: 'Rajasthan Royals',
    AwayTeam: 'Gujarat Titans',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 25,
    RoundNumber: 3,
    DateUtc: '2022-04-15 14:00:00Z',
    Location: 'Brabourne - CCI, Mumbai',
    HomeTeam: 'Sunrisers Hyderabad',
    AwayTeam: 'Kolkata Knight Riders',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 26,
    RoundNumber: 4,
    DateUtc: '2022-04-16 10:00:00Z',
    Location: 'Brabourne - CCI, Mumbai',
    HomeTeam: 'Mumbai Indians',
    AwayTeam: 'Lucknow Super Giants',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 27,
    RoundNumber: 4,
    DateUtc: '2022-04-16 14:00:00Z',
    Location: 'Wankhede Stadium, Mumbai',
    HomeTeam: 'Delhi Capitals',
    AwayTeam: 'Royal Challengers Bangalore',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 28,
    RoundNumber: 4,
    DateUtc: '2022-04-17 10:00:00Z',
    Location: 'DY Patil Stadium, Navi Mumbai',
    HomeTeam: 'Punjab Kings',
    AwayTeam: 'Sunrisers Hyderabad',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 29,
    RoundNumber: 4,
    DateUtc: '2022-04-17 14:00:00Z',
    Location: 'MCA Stadium, Pune',
    HomeTeam: 'Gujarat Titans',
    AwayTeam: 'Chennai Super Kings',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 30,
    RoundNumber: 4,
    DateUtc: '2022-04-18 14:00:00Z',
    Location: 'Brabourne - CCI, Mumbai',
    HomeTeam: 'Rajasthan Royals',
    AwayTeam: 'Kolkata Knight Riders',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 31,
    RoundNumber: 4,
    DateUtc: '2022-04-19 14:00:00Z',
    Location: 'DY Patil Stadium, Navi Mumbai',
    HomeTeam: 'Lucknow Super Giants',
    AwayTeam: 'Royal Challengers Bangalore',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 32,
    RoundNumber: 4,
    DateUtc: '2022-04-20 14:00:00Z',
    Location: 'MCA Stadium, Pune',
    HomeTeam: 'Delhi Capitals',
    AwayTeam: 'Punjab Kings',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 33,
    RoundNumber: 4,
    DateUtc: '2022-04-21 14:00:00Z',
    Location: 'DY Patil Stadium, Navi Mumbai',
    HomeTeam: 'Mumbai Indians',
    AwayTeam: 'Chennai Super Kings',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 34,
    RoundNumber: 4,
    DateUtc: '2022-04-22 14:00:00Z',
    Location: 'MCA Stadium, Pune',
    HomeTeam: 'Delhi Capitals',
    AwayTeam: 'Rajasthan Royals',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 35,
    RoundNumber: 5,
    DateUtc: '2022-04-23 10:00:00Z',
    Location: 'DY Patil Stadium, Navi Mumbai',
    HomeTeam: 'Kolkata Knight Riders',
    AwayTeam: 'Gujarat Titans',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 36,
    RoundNumber: 5,
    DateUtc: '2022-04-23 14:00:00Z',
    Location: 'Brabourne - CCI, Mumbai',
    HomeTeam: 'Royal Challengers Bangalore',
    AwayTeam: 'Sunrisers Hyderabad',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 37,
    RoundNumber: 5,
    DateUtc: '2022-04-24 14:00:00Z',
    Location: 'Wankhede Stadium, Mumbai',
    HomeTeam: 'Lucknow Super Giants',
    AwayTeam: 'Mumbai Indians',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 38,
    RoundNumber: 5,
    DateUtc: '2022-04-25 14:00:00Z',
    Location: 'Wankhede Stadium, Mumbai',
    HomeTeam: 'Punjab Kings',
    AwayTeam: 'Chennai Super Kings',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 39,
    RoundNumber: 5,
    DateUtc: '2022-04-26 14:00:00Z',
    Location: 'MCA Stadium, Pune',
    HomeTeam: 'Royal Challengers Bangalore',
    AwayTeam: 'Rajasthan Royals',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 40,
    RoundNumber: 5,
    DateUtc: '2022-04-27 14:00:00Z',
    Location: 'Wankhede Stadium, Mumbai',
    HomeTeam: 'Gujarat Titans',
    AwayTeam: 'Sunrisers Hyderabad',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 41,
    RoundNumber: 5,
    DateUtc: '2022-04-28 14:00:00Z',
    Location: 'Wankhede Stadium, Mumbai',
    HomeTeam: 'Delhi Capitals',
    AwayTeam: 'Kolkata Knight Riders',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 42,
    RoundNumber: 5,
    DateUtc: '2022-04-29 14:00:00Z',
    Location: 'MCA Stadium, Pune',
    HomeTeam: 'Punjab Kings',
    AwayTeam: 'Lucknow Super Giants',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 43,
    RoundNumber: 6,
    DateUtc: '2022-04-30 10:00:00Z',
    Location: 'Brabourne - CCI, Mumbai',
    HomeTeam: 'Gujarat Titans',
    AwayTeam: 'Royal Challengers Bangalore',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 44,
    RoundNumber: 6,
    DateUtc: '2022-04-30 14:00:00Z',
    Location: 'DY Patil Stadium, Navi Mumbai',
    HomeTeam: 'Rajasthan Royals',
    AwayTeam: 'Mumbai Indians',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 45,
    RoundNumber: 6,
    DateUtc: '2022-05-01 10:00:00Z',
    Location: 'Wankhede Stadium, Mumbai',
    HomeTeam: 'Delhi Capitals',
    AwayTeam: 'Lucknow Super Giants',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 46,
    RoundNumber: 6,
    DateUtc: '2022-05-01 14:00:00Z',
    Location: 'MCA Stadium, Pune',
    HomeTeam: 'Sunrisers Hyderabad',
    AwayTeam: 'Chennai Super Kings',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 47,
    RoundNumber: 6,
    DateUtc: '2022-05-02 14:00:00Z',
    Location: 'Wankhede Stadium, Mumbai',
    HomeTeam: 'Kolkata Knight Riders',
    AwayTeam: 'Rajasthan Royals',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 48,
    RoundNumber: 6,
    DateUtc: '2022-05-03 14:00:00Z',
    Location: 'DY Patil Stadium, Navi Mumbai',
    HomeTeam: 'Gujarat Titans',
    AwayTeam: 'Punjab Kings',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 49,
    RoundNumber: 6,
    DateUtc: '2022-05-04 14:00:00Z',
    Location: 'MCA Stadium, Pune',
    HomeTeam: 'Royal Challengers Bangalore',
    AwayTeam: 'Chennai Super Kings',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 50,
    RoundNumber: 6,
    DateUtc: '2022-05-05 14:00:00Z',
    Location: 'Brabourne - CCI, Mumbai',
    HomeTeam: 'Delhi Capitals',
    AwayTeam: 'Sunrisers Hyderabad',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 51,
    RoundNumber: 6,
    DateUtc: '2022-05-06 14:00:00Z',
    Location: 'Brabourne - CCI, Mumbai',
    HomeTeam: 'Gujarat Titans',
    AwayTeam: 'Mumbai Indians',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 52,
    RoundNumber: 7,
    DateUtc: '2022-05-07 10:00:00Z',
    Location: 'Wankhede Stadium, Mumbai',
    HomeTeam: 'Punjab Kings',
    AwayTeam: 'Rajasthan Royals',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 53,
    RoundNumber: 7,
    DateUtc: '2022-05-07 14:00:00Z',
    Location: 'MCA Stadium, Pune',
    HomeTeam: 'Lucknow Super Giants',
    AwayTeam: 'Kolkata Knight Riders',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 54,
    RoundNumber: 7,
    DateUtc: '2022-05-08 10:00:00Z',
    Location: 'Wankhede Stadium, Mumbai',
    HomeTeam: 'Sunrisers Hyderabad',
    AwayTeam: 'Royal Challengers Bangalore',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 55,
    RoundNumber: 7,
    DateUtc: '2022-05-08 14:00:00Z',
    Location: 'DY Patil Stadium, Navi Mumbai',
    HomeTeam: 'Chennai Super Kings',
    AwayTeam: 'Delhi Capitals',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 56,
    RoundNumber: 7,
    DateUtc: '2022-05-09 14:00:00Z',
    Location: 'DY Patil Stadium, Navi Mumbai',
    HomeTeam: 'Mumbai Indians',
    AwayTeam: 'Kolkata Knight Riders',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 57,
    RoundNumber: 7,
    DateUtc: '2022-05-10 14:00:00Z',
    Location: 'MCA Stadium, Pune',
    HomeTeam: 'Lucknow Super Giants',
    AwayTeam: 'Gujarat Titans',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 58,
    RoundNumber: 7,
    DateUtc: '2022-05-11 14:00:00Z',
    Location: 'DY Patil Stadium, Navi Mumbai',
    HomeTeam: 'Rajasthan Royals',
    AwayTeam: 'Delhi Capitals',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 59,
    RoundNumber: 7,
    DateUtc: '2022-05-12 14:00:00Z',
    Location: 'Wankhede Stadium, Mumbai',
    HomeTeam: 'Chennai Super Kings',
    AwayTeam: 'Mumbai Indians',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 60,
    RoundNumber: 7,
    DateUtc: '2022-05-13 14:00:00Z',
    Location: 'Brabourne - CCI, Mumbai',
    HomeTeam: 'Royal Challengers Bangalore',
    AwayTeam: 'Punjab Kings',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 61,
    RoundNumber: 8,
    DateUtc: '2022-05-14 14:00:00Z',
    Location: 'MCA Stadium, Pune',
    HomeTeam: 'Kolkata Knight Riders',
    AwayTeam: 'Sunrisers Hyderabad',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 62,
    RoundNumber: 8,
    DateUtc: '2022-05-15 10:00:00Z',
    Location: 'Wankhede Stadium, Mumbai',
    HomeTeam: 'Chennai Super Kings',
    AwayTeam: 'Gujarat Titans',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 63,
    RoundNumber: 8,
    DateUtc: '2022-05-15 14:00:00Z',
    Location: 'Brabourne - CCI, Mumbai',
    HomeTeam: 'Lucknow Super Giants',
    AwayTeam: 'Rajasthan Royals',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 64,
    RoundNumber: 8,
    DateUtc: '2022-05-16 14:00:00Z',
    Location: 'DY Patil Stadium, Navi Mumbai',
    HomeTeam: 'Punjab Kings',
    AwayTeam: 'Delhi Capitals',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 65,
    RoundNumber: 8,
    DateUtc: '2022-05-17 14:00:00Z',
    Location: 'Wankhede Stadium, Mumbai',
    HomeTeam: 'Mumbai Indians',
    AwayTeam: 'Sunrisers Hyderabad',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 66,
    RoundNumber: 8,
    DateUtc: '2022-05-18 14:00:00Z',
    Location: 'DY Patil Stadium, Navi Mumbai',
    HomeTeam: 'Kolkata Knight Riders',
    AwayTeam: 'Lucknow Super Giants',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 67,
    RoundNumber: 8,
    DateUtc: '2022-05-19 14:00:00Z',
    Location: 'Wankhede Stadium, Mumbai',
    HomeTeam: 'Royal Challengers Bangalore',
    AwayTeam: 'Gujarat Titans',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 68,
    RoundNumber: 8,
    DateUtc: '2022-05-20 14:00:00Z',
    Location: 'Brabourne - CCI, Mumbai',
    HomeTeam: 'Rajasthan Royals',
    AwayTeam: 'Chennai Super Kings',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 69,
    RoundNumber: 8,
    DateUtc: '2022-05-21 14:00:00Z',
    Location: 'Wankhede Stadium, Mumbai',
    HomeTeam: 'Mumbai Indians',
    AwayTeam: 'Delhi Capitals',
    team: null,
    winner: null,
    loser: null,
  },
  {
    MatchNumber: 70,
    RoundNumber: 8,
    DateUtc: '2022-05-22 14:00:00Z',
    Location: 'Wankhede Stadium, Mumbai',
    HomeTeam: 'Sunrisers Hyderabad',
    AwayTeam: 'Punjab Kings',
    team: null,
    winner: null,
    loser: null,
  },
];

export default function App() {
  const [matches, setMatches] = React.useState(dmatches);
  const [results, setResults] = React.useState({});
  const [userResults, setUserResults] = React.useState({});
  React.useEffect(() => {
    fetch('https://api.npoint.io/12b0bd7c11bfc3c63730', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setResults({ ...result });
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  React.useEffect(() => {
    Object.keys(results).forEach((result) => {
      setMatches(
        matches.map((match) => {
          return match.MatchNumber === parseInt(result)
            ? {
                ...match,
                winner: results[result].winner
                  ? [...results[result].winner]
                  : [],
                loser: results[result].loser ? [...results[result].loser] : [],
                team: results[result].team || '',
              }
            : match;
        })
      );
    });
  }, [results]);

  const onCheckChange = (data, evet) => {
    const tempWinner = results[data.target.dataset.matchnumber]?.winner || [];
    const match = results[data.target.dataset.matchnumber] || {};
    if (data.target.checked) {
      setResults({
        ...results,
        [data.target.dataset.matchnumber]: {
          ...match,
          winner: [...tempWinner, data.target.value],
        },
      });
    } else {
      setResults({
        ...results,
        [data.target.dataset.matchnumber]: {
          ...match,
          winner: [...tempWinner.filter((node) => node != data.target.value)],
        },
      });
    }
  };

  const onRadioChange = (data, evet) => {
    const match = results[data.target.dataset.matchnumber] || {};
    setResults({
      ...results,
      [data.target.dataset.matchnumber]: { ...match, team: data.target.value },
    });
  };

  const UserBooth = ({ match }) => {
    const result = results[match.MatchNumber];
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
            checked={result && result.team === match.HomeTeam}
            onChange={onRadioChange}
          />
            <label htmlFor={match.HomeTeam}>{match.HomeTeam}</label>
          <br />
          <input
            type="radio"
            id={match.AwayTeam}
            name={`match${match.MatchNumber}`}
            data-matchnumber={match.MatchNumber}
            value={match.AwayTeam}
            checked={result && result.team === match.AwayTeam}
            onChange={onRadioChange}
          />
            <label htmlFor={match.AwayTeam}>{match.AwayTeam}</label>
        </div>
        <div className="users">
          {users.map((user, index) => {
            return (
              <div className="user" key={index}>
                <input
                  type="checkbox"
                  id={`${match.MatchNumber}-${user}`}
                  name={user}
                  data-matchnumber={match.MatchNumber}
                  value={user}
                  checked={
                    result ? result?.winner.indexOf(user) > -1 : false
                  }
                  onChange={onCheckChange}
                />
                <label htmlFor={user}>{user}</label>
                <br />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const onFormSubmit = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(results),
    };
    fetch('https://api.npoint.io/12b0bd7c11bfc3c63730', requestOptions)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };

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

  return (
    <>
      {matches.map((match, index) => (
        <UserBooth match={match} key={index} />
      ))}
       <div className='user-result'>
          {userResults && Object.keys(userResults).map((user)=>{
            return <div>{user} - {userResults[user]} / {Object.keys(results).length * 20}</div>
          })}
        </div>
      <button type="button" onClick={onFormSubmit}>
        Submit!
      </button>
      <button type="button" onClick={onClickScore}>
        Teeam Score!
      </button>
    </>
  );
}
