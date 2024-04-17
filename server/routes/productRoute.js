const express = require('express');
const router = express.Router();

// import Product model
const Product = require('../models/Product');


// @route GET api/
// @description Get all products
// @access Public
router.get('/', (req, res) => {
    Product.find()
        .then((product) => res.json(product))
        .catch((err) =>
            res.status(404).json({ noproductsfound: 'No Products found' })
        );
});

// @route GET api/:id
// @description Get single item by id
// @access Public
router.get('/:id', (req, res) => {
    Product.findById(req.params.id)
        .then((product) => res.json(product))
        .catch((err) => res.status(404).json({ noitemfound: 'No Item found' }));
});

// @route POST api/
// @description add/save product
// @access Public
router.post('/new-product', (req, res) => {
    Product.create(req.body)
        .then((product) => res.json({ msg: 'Product added successfully' }))
        .catch((err) =>
            res.status(400).json({ error: 'Unable to add this product' })
        );
});

// @route PUT api/:id
// @description Update product
// @access Public
router.put('/:id', (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body)
        .then((product) => res.json({ msg: 'Updated successfully' }))
        .catch((err) =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route DELETE api/:id
// @description Delete product by id
// @access Public
router.delete('/:id', (req, res) => {
    Product.findByIdAndRemove(req.params.id)
      .then(product => res.json({ mgs: 'Product entry deleted successfully' }))
      .catch(err => res.status(404).json({ error: 'No such product' }));
  });

  module.exports = router;
