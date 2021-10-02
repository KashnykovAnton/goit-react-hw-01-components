import './App.css';
import user from './components/Profile/user.json';
import statData from './components/Statistics/statistical-data.json';
import { Profile } from './components/Profile/Profile';
import { Statistics } from './components/Statistics/Statistics';

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>
      <Statistics title="Upload stats" stats={statData} />
      {/* <Statistics stats={statData} />; */}
    </div>
  );
}

export default App;
