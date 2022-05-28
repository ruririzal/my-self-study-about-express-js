const express = require('express');
const router = express.Router();
const { ensureAuth } = require('../middleware/auth');

const User = require("../models/User");

// @desc    Show all users
// @route   GET /users
router.get('/', ensureAuth, async (req, res) => {
    try {
      const users = await User //.find({ status: 'public' })
        .populate('user')
        .sort({ createdAt: 'desc' })
        .lean()
  
      res.render('stories/index', {
        stories,
      })
    } catch (err) {
      console.error(err)
      res.render('error/500')
    }
  })