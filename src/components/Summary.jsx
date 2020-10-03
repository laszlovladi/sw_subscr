import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import ProgressBar from './ProgressBar.jsx'
import { Button } from 'reactstrap';

function Summary(props){
  const {types, length, chosenType, chosenLength, info, formIsValid} = props;
  const {name, email, address, city, country, postcode} = info;
  return (
    <div className="summary">
      <div className="m-2">
        <ProgressBar {...props}
          progress={100}
          progressDescription={"step 4 of 4"}
        />
      </div>
      {chosenType && chosenLength && info && formIsValid ? (
        <div className="step-content container">
          <h3 className="step-header">Summary</h3>
          <div className="step-content row d-flex justify-content-center">
            <div className="card col-xs-12 col-sm-10 col-md-8">
              <div className="card col-xs-12 col-sm-10 col-md-8 mt-2 mb-2">
                <div className="card-header">
                  <b>Billing data</b>
                </div>
                <div className="card-body d-flex flex-column align-items-left">
                  <span className="d-flex justify-content-between"><b>Buyer:</b> {name.value}</span>
                  <span className="d-flex justify-content-between"><b>Street:</b> {address.value}</span>
                  <span className="d-flex justify-content-between"><b>City:</b> {city.value}</span>
                  <span className="d-flex justify-content-between"><b>Country:</b> {country.value}</span>
                  <span className="d-flex justify-content-between"><b>Postcode:</b> {postcode.value}</span>
                  <span className="d-flex justify-content-between"><b>Email:</b> {email.value}</span>
                </div>
              </div>
              <div className="card col-12 d-flex flex-column align-items-left mt-2 mb-2 pt-2 pb-2">
                <span className="d-flex justify-content-between">
                  <b>{types[chosenType].name} - {length[chosenLength].name}</b> 
                  <b>{new Intl.NumberFormat('cz-CZ', { style: 'currency', currency: types[chosenType].currency }).format(types[chosenType].price)}</b>
                </span>
                <span className="d-flex justify-content-between">
                  <b>Discount {length[chosenLength].discount}{length[chosenLength].units}</b> 
                  <b>{new Intl.NumberFormat('cz-CZ', { style: 'currency', currency: types[chosenType].currency }).format(types[chosenType].price*length[chosenLength].discount/100)}</b>
                </span>
                <hr/>
                <span className="d-flex justify-content-between">
                  <b>Total</b> 
                  <b>{new Intl.NumberFormat('cz-CZ', { style: 'currency', currency: types[chosenType].currency }).format(types[chosenType].price - types[chosenType].price*length[chosenLength].discount/100)}</b>
                </span>
              </div>
            </div>
          </div>
        </div>
      ):(
        <Redirect to='/'/>
      )}
      <div className="m-2 d-flex justify-content-between">
        <Link to='/info'>     
          <Button color="success">Previous step</Button>
        </Link>
        <Link to='/summary'>     
          <Button color="success">Proceed to payment</Button>
        </Link>
      </div>
    </div>
  );
}

export default Summary;