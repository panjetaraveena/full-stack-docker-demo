import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:4000/users/connect")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setData(data.message)
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Connecting to backend..." : data}</p>
      </header>
    </div>
  );
}

export default App;
