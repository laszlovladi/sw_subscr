import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import ProgressBar from './ProgressBar.jsx';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

function Info(props){
  const {chosenType, chosenLength, info, formIsValid} = props;

  return (
    <>
      {chosenType !== null && chosenLength !== null?
        <div className="info">
          <div className="m-4">
            <ProgressBar {...props}
              progress={75}
              progressDescription={"step 3 of 4"}
            />
          </div>
          <div className="step-content container">
            <h3 className="step-header text-default font-weight-bolder">Enter your personal info</h3>
            <div className="step-content p-2">
              <Form>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="name"><b>Name</b></Label>
                      <Input 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Name Surname" 
                        value={info.name.value} 
                        onChange={(e) => props.updateInfo('name', e)} 
                        valid={!!info.name.isValid} 
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="email"><b>Email</b></Label>
                      <Input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="example@email.com"  
                        value={info.email.value} 
                        onChange={(e) => props.updateInfo('email', e)} 
                        valid={!!info.email.isValid} 
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label for="address"><b>Address</b></Label>
                  <Input 
                    type="text" 
                    name="address" 
                    id="address" 
                    placeholder="1234 Main St"
                    value={info.address.value} 
                    onChange={(e) => props.updateInfo('address', e)} 
                    valid={!!info.address.isValid} 
                  />
                </FormGroup>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="exampleCity"><b>City</b></Label>
                      <Input 
                        type="text" 
                        name="city" 
                        id="city" 
                        placeholder="Prague" 
                        value={info.city.value} 
                        onChange={(e) => props.updateInfo('city', e)} 
                        valid={!!info.city.isValid} 
                      />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="country"><b>Country</b></Label>
                      <Input 
                        type="text" 
                        name="country" 
                        id="country" 
                        placeholder="Czech Republic" 
                        value={info.country.value} 
                        onChange={(e) => props.updateInfo('country', e)} 
                        valid={!!info.country.isValid} 
                      />
                    </FormGroup>
                  </Col>
                  <Col md={2}>
                    <FormGroup>
                      <Label for="postcode"><b>Postcode</b></Label>
                      <Input 
                        type="text" 
                        name="postcode" 
                        id="postcode" 
                        placeholder="11000"
                        value={info.postcode.value} 
                        onChange={(e) => props.updateInfo('postcode', e)} 
                        valid={!!info.postcode.isValid} 
                      />
                    </FormGroup>  
                  </Col>
                </Row>
              </Form>
            </div>
          </div>

          <div className="m-2 d-flex justify-content-between">
            <Link to='/length'>     
              <Button color="success">Previous step</Button>
            </Link>
            { formIsValid ? 
            <Link to='/summary'>     
              <Button color="success">Next step</Button>
            </Link> : ''}
          </div>
        </div> : <Redirect to='/'/>
    }
  </>
  );
}

export default Info;