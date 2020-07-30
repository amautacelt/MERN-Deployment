import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const PetForm = props => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skillOne, setSkillOne] = useState("");
    const [skillTwo, setSkillTwo] = useState("");
    const [skillThree, setSkillThree] = useState("");
    const [errors, setErrors] = useState({});

    const CreatePet = e => {
        e.preventDefault();
        const petItem = {name, type, description, skillOne, skillTwo, skillThree};
        axios.post("http://localhost:8000/api/pets", petItem)
            .then(res => {
                console.log(res);
                if(res.data.errors) {
                    setErrors(res.data.errors);
                } else {
                    navigate("/");
                }
            }).catch(err => console.log(err));
    }


    return (
        <div className="row">
            <h4>Know a pet needing a home?</h4>
            <form className="col-sm-8 offset-sm-2" onSubmit={CreatePet}>
            <div><Link className="btn btn-info float-right" to="/">Home</Link></div>
                <div className="form-group">
                    <label>Pet Name:</label>
                    <input type="text" className="form-control" onChange={e => setName(e.target.value)} />
                    { errors.name ? <p className="text-danger">{errors.name.properties.message}</p>:"" }
                </div>

                <div className="form-group">
                    <label>Pet Type:</label>
                    <input type="text" className="form-control" onChange={e => setType(e.target.value)} />
                    { errors.type ? <p className="text-danger">{errors.type.properties.message}</p>:"" }
                </div>

                <div className="form-group">
                    <label>Pet Description:</label>
                    <input type="text" className="form-control" onChange={e => setDescription(e.target.value)} />
                    { errors.description ? <p className="text-danger">{errors.description.properties.message}</p>:"" }
                </div>

                <div className="form-group">
                    <label>Skill 1:</label>
                    <input type="text" className="form-control" placeholder="(optional)" onChange={e => setSkillOne(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Skill 2:</label>
                    <input type="text" className="form-control" placeholder="(optional)" onChange={e => setSkillTwo(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Skill 3:</label>
                    <input type="text" className="form-control" placeholder="(optional)" onChange={e => setSkillThree(e.target.value)} />
                </div>

                <input type="submit" className="btn btn-success btn-block" value="Add Pet" />
            </form>

        </div>
    )

}

export default PetForm;