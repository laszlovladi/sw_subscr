import React from 'react';
import { Link } from 'react-router-dom'
import ProgressBar from './ProgressBar.jsx'
import { Button } from 'reactstrap';

function Info(props){

  return (
    <div className="info">
      <div className="m-2">
        <ProgressBar {...props}
          progress={75}
          progressDescription={"step 3 of 4"}
        />
      </div>
      <div className="step-content">
        <h3 className="step-header">Enter your personal info</h3>
        <div className="step-content">

        </div>
      </div>

      <div className="m-2 d-flex justify-content-between">
        <Link to='/length'>     
          <Button color="success">Previous step</Button>
        </Link>
        <Link to='/summary'>     
          <Button color="success">Next step</Button>
        </Link>
      </div>
    </div>
  );
}

export default Info;