const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.send(
    `<h1>Esta ruta es incorrecta</h1> <a href="http://localhost:5003/familia">Esta es la correcta</a>`
  );
});

module.exports = router;
