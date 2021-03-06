// API Routes
const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

router.use('/users', userRoutes);

router.use('/thoughts', thoughtRoutes);

// Export the router
module.exports = router;