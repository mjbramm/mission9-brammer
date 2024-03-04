import React from 'react';
import './App.css';

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

// This needs to be imported from the CollegeBasketballTeams.json
const NCAAteams = [
  {
    school: 'School1',
    name: 'name1',
    city: 'City1',
    state: 'state1',
  },
  {
    school: 'School2',
    name: 'name2',
    city: 'City2',
    state: 'state2',
  },
];

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;
    return (
      <div>
        <h2>{oneTeam.school}</h2>
        <h2>{oneTeam.name}</h2>
        <h2>{oneTeam.city}</h2>
        <h2>{oneTeam.state}</h2>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      <h1>List of teams in the team CollegeBasketballTeams.json file</h1>
      {NCAAteams.map((singleTeam) => (
        <Team {...singleTeam} />
      ))}
    </div>
  );
}

function HeadingTop() {
  return (
    <header className="App-header">
      <h1>
        This website lists out information about all the colleges in NCAA
        Basketball
      </h1>
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
