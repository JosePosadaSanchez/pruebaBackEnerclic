const verifyContentType = (req, res, next) => {
  var requestType = req.get("content-type");
  console.log(requestType);
  console.log(typeof requestType);

  if (!requestType || requestType !== "application/json") {
    return res.status(406).json("No es Aplicattion Json");
  } else {
    next();
  }
};

module.exports = verifyContentType;
