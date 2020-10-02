import React from 'react';
import { Progress } from 'reactstrap';

function ProgressBar(props){
  const {progress, progressDescription} = props;

  return (
    <div className="progressBar ">
      <div className="text-center">{progressDescription}</div>
      <Progress value={progress} />
  
    </div>
  );
}

export default ProgressBar;