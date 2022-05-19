const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Expdress' });
});
router.get('/ab*cd', (req, res) => {
  res.send('ab*cd')
})

module.exports = router;
