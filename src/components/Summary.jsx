import React from 'react';
import { Link } from 'react-router-dom'
import ProgressBar from './ProgressBar.jsx'
import { Button } from 'reactstrap';

function Summary(props){

  return (
    <div className="summary">
      <div className="m-2">
        <ProgressBar {...props}
          progress={100}
          progressDescription={"step 4 of 4"}
        />
      </div>
      <div className="step-content">
        <h3 className="step-header">Summary</h3>
        <div className="step-content">

        </div>
      </div>
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