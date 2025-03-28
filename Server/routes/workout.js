const express = require('express');
const {createWorkout,
   getAllWorkouts, 
   getSingleWorkout, 
   deleteWorkout, 
   updateWorkout}  = require( '../controllers/addWorkout-controller'); 
const router = express.Router();

// Defining the API endpoints for the workout resource
// Route to get ALL workout
router.get('/', getAllWorkouts); 

// Route to get single workout
router.get('/:id', getSingleWorkout);

// Route to Post a new workout
router.post('/', createWorkout);


// Route to Delete a workout
router.delete('/:id',deleteWorkout);

// Route to update a workout
router.patch('/:id', updateWorkout); 




module.exports = router;	// export the router
