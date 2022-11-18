const workoutService = require("../services/workoutService");
const getOrderedResult = require("../database/call");

const getAllWorkouts = (req, res) => {
  let result = getOrderedResult();
  res.status(200).json(result);
};

const getOneWorkout = (req, res) => {
  const Workout = workoutService.getOneWorkouts(req.params.workoutId);
  res.send(`Get One workout ${req.params.workoutId}`);
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
};
