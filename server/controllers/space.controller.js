const { Space } = require('../models/space.model')


//then/catch will run code and get a response later
const handleCreateSpace = async (req, res) => {
    console.log("creating space...");
    try {
        console.log(req.body);
        const newSpace = await Space.create(req.body);
        return res.json(newSpace);
    } catch (err) {
        return res.status(400).json(err);
    }
}

//async/await will pause code and continue when a return is received
const getAllSpaces = async (req, res) => {
    //attempt to run this code
    try {
        //await pauses operation until a return occurs
        const spaces = await Space.find(); //the first line of code in .then/.catch functions 
        return res.json(spaces); //the rest of .then
        //catch err if any
    } catch (err) {
        return res.status(400).json(err);
    }
}

const getSpaceById = async (req, res) => {
    try {
        const space = await Space.findById(req.params.id);
        return res.json(space);
    } catch (err) {
        return res.status(400).json(err);
    }

}

const deleteSpaceById = async (req, res) => {
    try {
        const deletedSpace = await Space.findByIdAndDelete(req.params.id);
        return res.json(deletedSpace);
    } catch (err) {
        return res.status(400).json(err);
    }

}

const updateSpaceById = async (req, res) => {
    try {
        const updatedSpace = await Space.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
        });
        return res.json(updatedSpace);
    } catch (err) {
        return res.status(400).json(err);
    }
}

module.exports = {
    handleCreateSpace,
    getAllSpaces,
    getSpaceById,
    deleteSpaceById,
    updateSpaceById,
}