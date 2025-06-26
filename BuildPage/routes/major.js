const express = require('express');
const router = express.Router();
const { getMajorProjects } = require('../controller/majorController');

// GET all major projects
router.get('/major-projects', getMajorProjects);

module.exports = router;
