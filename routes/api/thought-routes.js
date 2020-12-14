// Express
const router = require('express').Router();

// Thought Controllers
const { getAllThoughts, createThought, getThoughtById, updateThought, deleteThought, createReaction, deleteReaction } = require('../../controllers/thought-controllers');

// GET all thoughts and POST 
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

// GET one thought, PUT update a thought by id, and DELETE a thought 
router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// POST a reaction to a thought 
router
    .route('/:thoughtId/reactions')
    .post(createReaction);

// DELETE a reaction to a thought
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);


module.exports = router;