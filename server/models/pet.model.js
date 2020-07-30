console.log("pet.model.js");

const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema ({

    name: {
        type: String,
        required: [true, "Pet Name is required"],
        minlength: [3, "Pet Name must be 3 characters or longer"]
    },
    type: {
        type: String,
        required: [true, "Pet Type is required"],
        minlength: [3, "Pet Type must be 3 characters or longer"]
    },
    description: {
        type: String,
        required: [true, "Pet Description is required"],
        minlength: [3, "Pet Descripton must be 3 characters or longer"]
    },
    skillOne: {
        type: String
    },
    skillTwo: {
        type: String
    },
    skillThree: {
        type: String
    }

}, {timestamps: true});

module.exports = mongoose.model("Pet", PetSchema);