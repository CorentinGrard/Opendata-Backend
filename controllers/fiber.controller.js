const express = require('express');
const router = express.Router();
// const FiberService = require('../services/fiber.service');

// routes
router.get('/:y/:x', getNearLocation);

module.exports = router;

function getNearLocation(req, res, next) {
  GSMService.near({
      x: req.params.x,
      y: req.params.y
    })
    .then((list) => res.json(list))
    .catch(err => next(err));
}