const express = require("express");
const router = express.Router();
const workoutController = require("../../controllers/workoutController");
const verifyToken = require("../../middleware/verify");
const verifyContentType = require("../../middleware/verifyContentType");

router
  .get("/", verifyContentType, verifyToken, workoutController.getAllWorkouts)
  .get("/:workoutId", workoutController.getOneWorkout);

module.exports = router;
