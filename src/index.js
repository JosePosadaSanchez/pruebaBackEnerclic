const express = require("express");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const jwt = require("jsonwebtoken");
const home = require("./v1/routes/index");

const app = express();
const PORT = process.env.PORT || 5003;

app.use(express.json());
app.use("/", home);
app.use("/familia", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`👽 Server listening on port ${PORT}`);
});
