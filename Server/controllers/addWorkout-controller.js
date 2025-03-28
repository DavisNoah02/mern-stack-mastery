const Workout = require('../models/Workoutmodel');

// GET /api/workouts
// get all workouts
const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({}).sort({ createdAt: -1 }); // Fetch all workouts, sorted by newest first
    res.status(200).json(workouts); // Return the workouts
  } catch (error) {
    res.status(400).json({ error: error.message }); // Handle errors
  }
};


// GET /api/workouts/:id
// get a single workout
const getSingleWorkout = async (req, res) => {
  const { id } = req.params;

  try {
    const workout = await Workout.findById(id); // Find workout by ID
    if (!workout) {
      return res.status(404).json({ error: 'Workout not found' }); // Handle not found
    }
    res.status(200).json(workout); // Return the workout
  } catch (error) {
    res.status(400).json({ error: error.message }); // Handle errors
  }
};

// PATCH /api/workouts/:id
// Update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.findByIdAndUpdate(
      id,
      { title, load, reps }, // Update fields
      { new: true, runValidators: true } // Return the updated document and validate
    );

    if (!workout) {
      return res.status(404).json({ error: 'Workout not found' }); // Handle not found
    }

    res.status(200).json(workout); // Return the updated workout
  } catch (error) {
    res.status(400).json({ error: error.message }); // Handle errors
  }
};

// DELETE /api/workouts/:id
// delete a workout
const deleteWorkout =  async (req, res) => {
  const { id } = req.params;
  try {
    const workout = await Workout.findByIdAndDelete(id);
    if (!workout) {
      return res.status(404).json({ error: 'Workout not found' });
    }
    res.status(200).json({ message: 'Workout deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// POST /api/workouts
// create a new workout
const createWorkout = async (req,res) => {
      const{ title, load, reps } = req.body; // destructure the request body
      try {
        const workout = await Workout.create( {title, load, reps}); // create a new workout instance
      
        res.status(200).json(workout); // return the newly created workout
      } catch (error) {
        res.status(400).json({error: error.message}); 
      }
    };

module.exports = {
    createWorkout,
    getAllWorkouts,
    getSingleWorkout, 
    deleteWorkout,
    updateWorkout

};