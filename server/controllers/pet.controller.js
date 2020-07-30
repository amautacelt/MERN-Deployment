console.log("pet.controller.js");

const Pet = require("../models/pet.model");
const { request } = require("express");


function capFirst (str ) {
    var first = str [0].toUpperCase();
    var rest = str.substring(1).toLowerCase();
    
    return first + rest
}

class PetController {
    create(req, res) {
        const newPet = new Pet(req.body);
        newPet.type = capFirst(newPet.type)
        newPet.save()
            .then( () => res.json(newPet) )
            .catch( errors => res.json(errors) );
    }
    getAll(req, res) {
        Pet.find().sort("type")
            .then( schedule => res.json(schedule) )
            .catch( errors => res.json(errors) );
    }
    getOne(req, res) {
        Pet.findOne({_id: req.params._id})
            .then( activity => res.json(activity) )
            .catch( errors => res.json(errors) );
    }
    update(req, res) {
        req.body.type = capFirst(req.body.type)
        Pet.findByIdAndUpdate({_id: req.params._id}, req.body, {runValidators: true})
            .then( () => res.json({msg: "ok"}) )
            .catch( errors => res.json(errors) );
    }
    remove(req, res) {
        Pet.findByIdAndRemove({_id: req.params._id})
            .then( () => res.json({msg: "ok"}) )
            .catch( errors => res.json(errors) );
    }
}

module.exports = new PetController();