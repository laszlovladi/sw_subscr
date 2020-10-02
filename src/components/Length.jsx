import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import ProgressBar from './ProgressBar.jsx'
import { Button } from 'reactstrap';

function Length(props){
  const {types, length, chosenType, chosenLength} = props;
  return (
    <>
    {chosenType !== null ?
      <div className="length">
        <div className="m-2">
          <ProgressBar {...props}
            progress={50}
            progressDescription={"step 2 of 4"}
          />
        </div>
        <div className="step-content container">
          <h3 className="step-header">Choose the type of subscription</h3>
          <div className="step-items row p-2">
            {Object.keys(length).map((item, i) => (
              <div className="type-item col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-1" key={i}>
                <div className={`type-item-card card p-3 ${chosenLength === item ? 'border-danger' : ''}`} onClick={(e) => props.toggleChosenLength(e, item)}>
                  {length[item].name}<br/>
                  Discount {length[item].discount}%<br/>
                  You pay {new Intl.NumberFormat('cz-CZ', { style: 'currency', currency: types[chosenType].currency }).format(types[chosenType].price * (1 - length[item].discount/100))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="m-2 d-flex justify-content-between">
          <Link to='/type'>     
            <Button color="success">Previous step</Button>
          </Link>
          {chosenLength !== null ? 
            <Link to='/info'>     
              <Button color="success">Next step</Button>
            </Link> : ''}
        </div>
      </div> : <Redirect to='/'/>
      
      }
    </>
  );
}

export default Length;