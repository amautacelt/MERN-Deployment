console.log("pet.routes.js");

const Pets = require("../controllers/pet.controller");

module.exports = app => {
    app.get("/api/pets", Pets.getAll);
    app.post("/api/pets", Pets.create);
    app.get("/api/pets/:_id", Pets.getOne);
    app.put("/api/pets/:_id", Pets.update);
    app.delete("/api/pets/:_id", Pets.remove);
}