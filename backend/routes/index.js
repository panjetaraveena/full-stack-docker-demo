var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/connect', function (req, res, next) {
  return { data: "success" }
});

module.exports = router;
