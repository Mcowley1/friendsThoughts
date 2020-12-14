// User routes
const router = require('express').Router();
// User Controllers
const { getAllUsers, createUser, getUserById, updateUser, deleteUser, createFriend, deleteFriend } = require('../../controllers/user-controllers');

// GET all users and POST a new user
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// GET one user, PUT update a user by id, and DELETE a user by id 
router
    .route('/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// POST to add a new friend to or DELETE to remove a friend from a user's friend list
router
    .route('/:userId/friends/:friendId')
    .post(createFriend)
    .delete(deleteFriend);
    
module.exports = router;