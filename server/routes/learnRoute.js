const express = require('express');
const router = express.Router();

// import Learn model
const Learn = require('../models/Learn');


// @route GET api/
// @description Get all learn
// @access Public
router.get('/', (req, res) => {
    Learn.find()
        .then((learn) => res.json(learn))
        .catch((err) =>
            res.status(404).json({ nolearnfound: 'No Learn found' })
        );
});

// @route GET api/:id
// @description Get single learn by id
// @access Public
router.get('/:id', (req, res) => {
    Learn.findById(req.params.id)
        .then((learn) => res.json(learn))
        .catch((err) => res.status(404).json({ nolearnfound: 'No Learn found' }));
});

// @route POST api/
// @description add/save learn
// @access Public
router.post('/new-learn', (req, res) => {
    Learn.create(req.body)
        .then((learn) => res.json({ msg: 'Learn added successfully' }))
        .catch((err) =>
            res.status(400).json({ error: 'Unable to add this learn' })
        );
});

// @route PUT api/:id
// @description Update learn
// @access Public
router.put('/:id', (req, res) => {
    Learn.findByIdAndUpdate(req.params.id, req.body)
        .then((learn) => res.json({ msg: 'Updated successfully' }))
        .catch((err) =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route DELETE api/:id
// @description Delete customer by id
// @access Public
router.delete('/:id', (req, res) => {
    Learn.findByIdAndRemove(req.params.id)
      .then(learn => res.json({ mgs: 'Learn entry deleted successfully' }))
      .catch(err => res.status(404).json({ error: 'No such learn' }));
  });

  module.exports = router;
