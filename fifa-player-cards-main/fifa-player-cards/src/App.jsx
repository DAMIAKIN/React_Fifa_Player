// src/App.js
import PlayersList from './PlayersList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', margin: '20px' }}>FIFA Player Cards</h1>
      <PlayersList />
    </div>
  );
}

export default App;
