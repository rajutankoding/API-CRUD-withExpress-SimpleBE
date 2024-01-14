var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/tes", (req, res, next) => {
  res.json({
    app_name: process.env.APP_NAME,
    message: "Hallo JS World",
    status: "Success",
  });
});

module.exports = router;
