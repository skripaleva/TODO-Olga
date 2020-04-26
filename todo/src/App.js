import React from 'react';
import logo from './logo.svg';
import './App.css';

const count = 25;
const develop = true;
const user = false;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style = {{
           fontSize: '45px'
        }}>
          Hello!
        </p>
        <p> 
          {'33'}
        </p>
        <p> 
          {count}
        </p>
        <p> 
          {2 + 3}
        </p>
        <p> 
          {develop && 'develop is true'}
          {undefined}
          {null}
          {false}
          {true}
        </p>
        <p>
          {user ? 'user is true' : 'user is false'}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
