require('dotenv').config(); 

// require express and workouts routes
const express = require('express');
const mongoose = require('mongoose');
const workoutsRoutes = require('./routes/workout');


// create an app instance
const app =   express();	

// middleware to log all request
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})


// routes
app.use('/api/workouts', workoutsRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  // listen for requests
app.listen(process.env.PORT, () => {
  console.log("DATABASE CONNECTED AND Server IS LISTENING ON PORT", process.env.PORT);
});
})
.catch((error) => {
  console.log(error);
})

