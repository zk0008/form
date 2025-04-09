const express = require('express');
const User = require('../models/user');
const router = express.Router();

// POST user
router.post('/', async (req, res) => {
  const { firstName, lastName, email } = req.body;

  try {
    const user = new User({ firstName, lastName, email });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET users
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

module.exports = router;