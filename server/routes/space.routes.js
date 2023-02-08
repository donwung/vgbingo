const express = require('express');

const {
    handleCreateSpace,
    getAllSpaces,
    getSpaceById,
    deleteSpaceById,
    updateSpaceById,
} = require('../controllers/space.controller');

const router = express.Router();

router.post('/', handleCreateSpace);
router.get('/', getAllSpaces);
router.get('/:id', getSpaceById);
router.delete('/:id', deleteSpaceById);
router.put('/:id', updateSpaceById);

module.exports = {
    spaceRouter: router
}