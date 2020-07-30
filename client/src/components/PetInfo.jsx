import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const PetInfo = props => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skillOne, setSkillOne] = useState("");
    const [skillTwo, setSkillTwo] = useState("");
    const [skillThree, setSkillThree] = useState("");

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


    const remove = () => {
        axios.delete(`http://localhost:8000/api/pets/${props._id}`)
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch(err => console.log(err));
    }


    return (
        <div className="card mb-3">
            <div><Link className="btn btn-info float-right mb-3" to="/">Home</Link></div>
                <div className="card-header bg-primary text-light">Details about {name}</div>
                <div className="card-body">
                    <p>Pet type: {type}</p>
                    <p>Description: {description}</p>
                    Skills: 
                        <ul>
                            <li>{skillOne}</li>
                            <li>{skillTwo}</li>
                            <li>{skillThree}</li>
                        </ul>
                </div>
                <button className="btn btn-outline-danger float-left" onClick={remove}>Adopt {name}</button>
        </div>

    )

}

export default PetInfo;