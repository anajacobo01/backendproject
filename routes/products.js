const express = require('express');
const router = express.Router();
const sequelize = require('../db');

// CRUD
// Get all products get()
router.get('/', async (req, res) => {
    const products = await sequelize.models.products.findAndCountAll();
    return res.status(200).json({ data: products });
  });


// Create a new product post(), save()
router.post('/', async (req, res) => {
    const { body } = req;
    const product = await sequelize.models.products.create({
      name: body.name,
      description: body.description,
      price: body.price,
      image: body.image,
    });
    await product.save();
    return res.status(201).json({ data: product })
  });
  // Update a product by id put()
  router.put('/:id', async (req, res) => {
   const { body, params: { id } } = req;
   const product = await sequelize.models.products.findByPk(id);
   if (!product) {
     return res.status(404).json({ code: 404, message: 'Product not found' });
   }
   const updatedProduct = await product.update({
     name: body.name,
     description: body.description,
     price: body.price,
     image: body.image,
   });
   return res.json({ data: updatedProduct });
 });

// Delete a product by id delete() destroy() 
 router.delete('/:id', async (req, res) => {
   const { params: { id } } = req;
   const product = await sequelize.models.products.findByPk(id);
   if (!product) {
     return res.status(404).json({ code: 404, message: 'Product not found' });
   }
   await product.destroy();
   return res.json();
 });


module.exports = router;