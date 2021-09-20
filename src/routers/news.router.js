const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/NewsController');

    router.use('/:slub', (req, res) => {res.send('NEWS SLUB')});

    router.use('/', newsController.index);

module.exports = router;