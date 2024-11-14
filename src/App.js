
import './App.css';
import Weather from './Weather.js';
export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Melbourne" />
      <footer>
        This project was coded by Lois Macleod and is open-sourced on {" "}
      <a href="https://github.com/loisMac/react-weather-project"
      target="_blank" rel="noreferrer">Github</a>
      </footer>
      </div>
    </div>
  );
}


