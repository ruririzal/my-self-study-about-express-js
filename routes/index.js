var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Expdress' });
});
router.get('/ab*cd', (req, res) => {
  res.send('ab*cd')
})

module.exports = router;
