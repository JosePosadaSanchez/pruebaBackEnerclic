const express = require("express");
const router = express.Router();
const workoutController = require("../../controllers/workoutController");
const verify = require("../../middleware/verify");

router
  .get("/", verify, workoutController.getAllWorkouts)
  .get("/:workoutId", workoutController.getOneWorkout);

module.exports = router;
