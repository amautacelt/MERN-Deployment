import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from "./components/Display";
import PetForm from "./components/PetForm";
import PetInfo from "./components/PetInfo";
import EditPet from "./components/EditPet";
import { Link, Router } from '@reach/router';


function App() {
  return (
    <div className="container">
      <h1>Pet Shelter</h1>
      {/* <Link className="btn btn-info" to="/">Pets</Link> */}
      {/* <Link className="btn btn-info float-right mb-3" to="/">Home</Link> */}
      {/* <Link className="btn btn-info" to="/new">add a pet to the shelter</Link> */}
      
      <Router className="my-5">
        <Display path="/" />
        <PetForm path="/new" />
        <PetInfo path="/:_id" />
        <EditPet path="/edit/:_id" />
      </Router>
    </div>
  );
}

export default App;
