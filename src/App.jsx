import React, { useState } from 'react';
import './App.scss';
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import Type from './components/Type.jsx';
import Length from './components/Length.jsx';
import Info from './components/Info.jsx';
import Summary from './components/Summary.jsx';
import { Switch, Route } from 'react-router-dom';
import * as data from './data.json';

function App() {
  const {types, length} = data.default;

  const [chosenType, setChosenType] = useState(null);
  const [chosenLength, setChosenLength] = useState(null);

  const toggleChosenType = (e, item) => {
    if(chosenType === item){
      setChosenType(null);
    }else{
      setChosenType(item);
    }
  }

  const toggleChosenLength = (e, item) => {
    if(chosenLength === item){
      setChosenLength(null);
    }else{
      setChosenLength(item);
    }
  }

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Switch>
              <Route exact path='/' render={(props) => ( 
                <Home {...props}
                />
              )}/>
              <Route path='/type' render={(props) => (
                <Type {...props}
                  types={types}
                  toggleChosenType={toggleChosenType}
                  chosenType={chosenType}
                />
              )}/>
              <Route path='/length' render={(props) => (
                <Length {...props}
                  types={types}
                  length={length}
                  toggleChosenLength={toggleChosenLength}
                  chosenType={chosenType}
                  chosenLength={chosenLength}
                />
              )}/>
              <Route path='/info' render={(props) => (
                <Info {...props}
                />
              )}/>
              <Route path='/summary' render={(props) => (
                <Summary {...props}
                />
              )}/>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
