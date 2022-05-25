const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth')

// @desc    Login/Landing page
// @route   GET /
router.get('/', ensureGuest, (req, res) => {
  res.render('index', {
    title: 'sudah login',
  })
})
router.get('/ab*cd', (req, res) => {
  res.send('ab*cd')
})

module.exports = router;
