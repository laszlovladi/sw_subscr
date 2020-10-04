import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import ProgressBar from './ProgressBar.jsx';
import { Button, Spinner } from 'reactstrap';

function Length(props){
  const {isLoading, types, length, chosenType, chosenLength} = props;
  
  const styles = {
    typeItemCard: {
      backgroundColor: 'rgb(230, 230, 255)'
    },
    typeItemCardChosen: {
      backgroundColor: 'rgb(230, 255, 230)'
    }
  }

  return (
    <>
    {chosenType !== null ?
      <div className="length">
        <div className="m-4">
          <ProgressBar {...props}
            progress={50}
            progressDescription={"step 2 of 4"}
          />
        </div>
        <div className="step-content container">
          <h3 className="step-header text-default font-weight-bolder">Choose a length of subscription</h3>
          <div className="step-items row p-2">
            {!isLoading && length ?
              Object.keys(length).map((item, i) => (
                <div className="type-item col-xs-12 col-sm-6 col-md-6 col-lg-3 mb-3" key={i}>
                  <div className={`type-item-card card p-2 font-weight-bolder
                    ${chosenLength === item ? 'border-success text-success ' : 'border-primary text-primary '}`} 
                    style={chosenLength === item ? styles.typeItemCardChosen : styles.typeItemCard}
                    onClick={() => props.toggleChosenLength(item)}>
                      <b>{length[item].name}</b><br/>
                      Discount {length[item].discount}%<br/>
                      You pay {new Intl.NumberFormat('cz-CZ', { style: 'currency', currency: types[chosenType].currency })
                      .format(types[chosenType].price * (1 - length[item].discount/100)) + "/month"}<br/>
                      You save {new Intl.NumberFormat('cz-CZ', { style: 'currency', currency: types[chosenType].currency })
                      .format(types[chosenType].price * item * length[item].discount / 100)}
                    {chosenLength === item ? 
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