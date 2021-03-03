const express = require('express');

const Posts = require('./posts-router.js');

const router = express.Router();

router.get('/', (req, res) => {
      res.status(200).json({message: "Getting Posts"})
  });

module.exports = router;