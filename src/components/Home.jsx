import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

function Home(props){

  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="home-content">
        <h2 className="text-default font-weight-bolder">Welcome to our</h2>    
        <h1 className="text-default font-weight-bolder">Awesome Software</h1>    
        <h2 className="text-default font-weight-bolder">online shop</h2>
        <p className="p-3 text-default font-weight-bolder">Subscribe to one of our awesome plans now and get up to 15% discount</p>    
        <div className="m-2 pt-3 d-flex justify-content-center">
          <Link to='/type'>     
            <Button color="success" size="lg">Order subscription</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;