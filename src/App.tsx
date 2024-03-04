import React from 'react';
import './App.css';
import NCAAteams from './CollegeBasketballTeams.json';

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

const TeamCard: React.FC<TeamProps> = (props) => (
  <div className="team-card">
    <h2>{props.school}</h2>
    <h3>
      The {props.name} from {props.city}, {props.state}
    </h3>
  </div>
);

// class Team extends React.Component<TeamProps> {
//   render() {
//     const oneTeam = this.props;
//     return (
//       <div>
//         <h1>{oneTeam.school}</h1>
//         <h3>
//           The {oneTeam.name} from {oneTeam.city}, {oneTeam.state}
//         </h3>
//       </div>
//     );
//   }
// }

function TeamList() {
  return (
    <div className="team-grid">
      {NCAAteams.teams.map((singleTeam, index) => (
        <TeamCard key={index} {...singleTeam} />
      ))}
    </div>
  );
}

function HeadingTop() {
  return (
    <header className="App-header">
      <h1>NCAA Basketball College Teams: MARCH MADNESS!</h1>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <HeadingTop />
      <TeamList />
    </div>
  );
}

export default App;
