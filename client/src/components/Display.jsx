import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';


const Display = props => {

    const [pets, setPets] = useState([]);

    useEffect( () => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => {
                console.log(res);
                setPets(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <Link className="btn btn-info" to="/new">add a pet to the shelter</Link>
            <h4>These pets are looking for a good home</h4>
            {pets.map( (pet, i) => 
                <table className="table table-hover" key={pet._id}>
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{pet.name}</td>
                            <td>{pet.type}</td>
                            {/* <td>{pet.description}</td> */}
                            <td>{<Link className="btn btn-outline-info btn-sm" to={`/${pet._id}`}>Details</Link>} | {<Link className="btn btn-outline-secondary btn-sm" to={`/edit/${pet._id}`}>Edit</Link>}</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    )

}

export default Display;