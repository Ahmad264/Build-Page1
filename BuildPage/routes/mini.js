const express = require('express');
const router = express.Router();
const MiniProject = require('../models/miniProject');

// GET mini projects
router.get('/mini-projects', async (req, res) => {
  try {
    const projects = await MiniProject.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
