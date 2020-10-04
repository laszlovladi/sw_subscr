import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import ProgressBar from './ProgressBar.jsx';
import { Button } from 'reactstrap';

function Summary(props){
  const {types, length, chosenType, chosenLength, info, formIsValid} = props; 
  const {name, email, address, city, country, postcode} = info;
  return (
    <div className="summary">
      <div className="m-4">
        <ProgressBar {...props}
          progress={100}
          progressDescription={"step 4 of 4"}
        />
      </div>
      {chosenType && chosenLength && info && formIsValid ? (
        <div className="step-content container">
          <h3 className="step-header text-default font-weight-bolder">Summary</h3>
          <div className="step-content row d-flex justify-content-center">
            <div className="card col-xs-12 col-sm-10 col-md-8">
              <div className="card col-xs-12 col-sm-10 col-lg-8 col-xl-6 mt-2 mb-2">
                <div className="card-header">
                  <b>Billing data</b>
                </div>
                <div className="card-body d-flex flex-column align-items-left">
                  <span className="d-flex justify-content-between"><b>Buyer:</b> <i>{name.value}</i></span>
                  <span className="d-flex justify-content-between"><b>Address:</b> <i>{address.value}</i></span>
                  <span className="d-flex justify-content-between"><b>City:</b> <i>{city.value}</i></span>
                  <span className="d-flex justify-content-between"><b>Country:</b> <i>{country.value}</i></span>
                  <span className="d-flex justify-content-between"><b>Postcode:</b> <i>{postcode.value}</i></span>
                  <span className="d-flex justify-content-between"><b>Email:</b> <i>{email.value}</i></span>
                </div>
              </div>
              <div className="card col-12 d-flex flex-column align-items-left mt-2 mb-2 pt-2 pb-2">
                <span className="d-flex justify-content-between">
                  <i>{types[chosenType].name} - {length[chosenLength].name}</i>
                  <b>{new Intl.NumberFormat('cz-CZ', 
                    { style: 'currency', currency: types[chosenType].currency }).format(types[chosenType].price * chosenLength)}</b>
                </span>
                <span className="d-flex justify-content-between">
                  <i>Discount {length[chosenLength].discount}{length[chosenLength].units}</i> 
                  <b className="text-danger">{new Intl.NumberFormat('cz-CZ', 
                    { style: 'currency', currency: types[chosenType].currency })
                    .format(types[chosenType].price * chosenLength * length[chosenLength].discount/100)}</b>
                </span>
                <hr/>
                <span className="d-flex justify-content-between">
                  <b>Total</b> 
                  <b>{new Intl.NumberFormat('cz-CZ', 
                    { style: 'currency', currency: types[chosenType].currency })
                    .format((types[chosenType].price - types[chosenType].price * length[chosenLength].discount/100)* chosenLength)}</b>
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
        <Button color="success" onClick={() => alert("Here you should be redirected to payment gateway")}>
          Pay
        </Button>
      </div>
    </div>
  );
}

export default Summary;