import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const EditPet = props => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skillOne, setSkillOne] = useState("");
    const [skillTwo, setSkillTwo] = useState("");
    const [skillThree, setSkillThree] = useState("");
    const [errors, setErrors] = useState({});

    useEffect( () => {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
            .then(res => {
                console.log(res);
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkillOne(res.data.skillOne);
                setSkillTwo(res.data.skillTwo);
                setSkillThree(res.data.skillThree);

            }).catch(errors => console.log(errors));
    }, [props._id]);

    const UpdatePet = e => {
        e.preventDefault();
        const petItem = {name, type, description, skillOne, skillTwo, skillThree};
        axios.put(`http://localhost:8000/api/pets/${props._id}`, petItem)
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
            <h4>Edit {name}</h4>
            <form className="col-sm-8 offset-sm-2" onSubmit={UpdatePet}>
            <div><Link className="btn btn-info float-right" to="/">Home</Link></div>
                <div className="form-group">
                    <label>Pet Name:</label>
                    <input type="text" className="form-control" onChange={e => setName(e.target.value)} value={name}/>
                    { errors.name ? <p className="text-danger">{errors.name.properties.message}</p>:"" }
                </div>

                <div className="form-group">
                    <label>Pet Type:</label>
                    <input type="text" className="form-control" onChange={e => setType(e.target.value)} value={type}/>
                    { errors.type ? <p className="text-danger">{errors.type.properties.message}</p>:"" }
                </div>

                <div className="form-group">
                    <label>Pet Description:</label>
                    <input type="text" className="form-control" onChange={e => setDescription(e.target.value)} value={description}/>
                    { errors.description ? <p className="text-danger">{errors.description.properties.message}</p>:"" }
                </div>

                <div className="form-group">
                    <label>Skill 1:</label>
                    <input type="text" className="form-control" placeholder="(optional)" onChange={e => setSkillOne(e.target.value)} value={skillOne}/>
                </div>

                <div className="form-group">
                    <label>Skill 2:</label>
                    <input type="text" className="form-control" placeholder="(optional)" onChange={e => setSkillTwo(e.target.value)} value={skillTwo}/>
                </div>

                <div className="form-group">
                    <label>Skill 3:</label>
                    <input type="text" className="form-control" placeholder="(optional)" onChange={e => setSkillThree(e.target.value)} value={skillThree}/>
                </div>

                <input type="submit" className="btn btn-success btn-block" value="Update Pet" />
            </form>

        </div>
    )

}

export default EditPet;