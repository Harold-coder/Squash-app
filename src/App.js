import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import data from "./data"

function App() {
  return (
    <div className = "app">
      <Navbar/>
      <div className='main-body'>
        <Main title="General Leaderboard" dropdown="false" />
        <Main title="other" dropdown="true"/>
      </div>
    </div>
  );
}

export default App;

