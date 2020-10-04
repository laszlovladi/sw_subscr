import React from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar.jsx';
import { Button, Spinner } from 'reactstrap';

function Type(props){
  const { isLoading, types, chosenType } = props;

  const styles = {
    typeItemCard: {
      backgroundColor: 'rgb(230, 230, 255)'
    },
    typeItemCardChosen: {
      backgroundColor: 'rgb(230, 255, 230)'
    }
  }

  return (
    <div className="type">
      <div className="m-4">
        <ProgressBar {...props}
          progress={25}
          progressDescription={"step 1 of 4"}
        />
      </div>
      <div className="step-content container">
        <h3 className="step-header text-default font-weight-bolder">Choose a type of subscription</h3>
        <div className="step-items row p-2">
          {!isLoading && types ?
            Object.keys(types).map((item, i) => (
              <div className="type-item col-xs-12 col-sm-4 mb-3" key={i}>
                <div className={`type-item-card card p-2 pt-4 pb-4 font-weight-bolder 
                  ${chosenType === item ? 'border-success text-success ' : 'border-primary text-primary '}`} 
                  style={chosenType === item ? styles.typeItemCardChosen : styles.typeItemCard}
                  onClick={() => props.toggleChosenType(item)}>
                    <b>{types[item].name}</b><br/>
                    Price: {new Intl.NumberFormat('cz-CZ', { style: 'currency', currency: types[item].currency })
                    .format(types[item].price) + "/month"}
                  {chosenType === item ? 
                    <span className="tick">&#10004;</span> : ''
                  }
                </div>
              </div>
            )) : (
              <div className="spinner-container d-flex justify-content-center align-items-center">
                <Spinner color="primary" />
              </div>
            )
          }
        </div>
      </div>
      <div className="m-2 d-flex justify-content-between">
        <div className="mr-2">
          <Link to='/'>     
            <Button color="success">Home</Button>
          </Link>
        </div>
        <div className="ml-2">
          {chosenType !== null ? 
          <Link to='/length'>     
            <Button color="success">Next step</Button>
          </Link> : ''}
        </div>
      </div>
    </div>
  );
}

export default Type;