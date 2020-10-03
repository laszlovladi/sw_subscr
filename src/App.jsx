import React, { useState, useEffect } from 'react';
import './App.scss';
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import Type from './components/Type.jsx';
import Length from './components/Length.jsx';
import Info from './components/Info.jsx';
import Summary from './components/Summary.jsx';
import { Switch, Route } from 'react-router-dom';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [types, setTypes] = useState(null);
  const [length, setLength] = useState(null);
  const [chosenType, setChosenType] = useState(null);
  const [chosenLength, setChosenLength] = useState(null);
  const [info, setInfo] = useState({
    name: {value: '', isValid: null},
    email: {value: '', isValid: null},
    address: {value: '', isValid: null},
    city: {value: '', isValid: null},
    country: {value: '', isValid: null},
    postcode: {value: '', isValid: null}
  });
  const [formIsValid, setFormIsValid] = useState(false);

  const getData = async () => {
    console.log('fetching data');
    try {
      const url = 'https://my-json-server.typicode.com/laszlovladi/dummy_api/db';
      const response = await fetch(url);
      const data = await response.json();
      setTypes(data.types);
      setLength(data.length);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(()=>{
    setIsLoading(true);
    if(!types || !length) getData();
    setIsLoading(false);
  }, [])

  const isFormValid = () => {
    const arr = [];
    Object.keys(info).map(element => arr.push(!!info[element].isValid));
    for(let i=0; i<arr.length; i+=1){
      if(!arr[i]){
        return false;
      }
    }
    return true;
  }

  useEffect(()=>{
    setFormIsValid(isFormValid());
  }, [info]);

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

  const updateInfo = (fieldName, e) => {
    const newValue = e.target.value;
    const re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    setInfo(prevState => {
      const newState = {
        ...prevState,
        [fieldName]: {value: newValue, isValid: fieldName === 'email' ? (re.test(newValue)) : !!newValue}
      }
      return newState;
    });
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
                  isLoading={isLoading}
                  types={types}
                  toggleChosenType={toggleChosenType}
                  chosenType={chosenType}
                />
              )}/>
              <Route path='/length' render={(props) => (
                <Length {...props}
                  isLoading={isLoading}
                  types={types}
                  length={length}
                  toggleChosenLength={toggleChosenLength}
                  chosenType={chosenType}
                  chosenLength={chosenLength}
                />
              )}/>
              <Route path='/info' render={(props) => (
                <Info {...props}
                  chosenType={chosenType}
                  chosenLength={chosenLength}
                  info={info}
                  updateInfo={updateInfo}
                  formIsValid={formIsValid}
                />
              )}/>
              <Route path='/summary' render={(props) => (
                <Summary {...props}
                  types={types}
                  length={length}
                  chosenType={chosenType}
                  chosenLength={chosenLength}
                  info={info}
                  formIsValid={formIsValid}
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
