const express = require('express');
const router = express.Router();
const sequelize = require('../db');

// CRUD
// Get all orders get()
router.get('/', async (req, res) => {
    const products = await sequelize.models.orders.findAndCountAll();
    return res.status(200).json({ data: orders });
  });


// Create a new order post(), save()
router.post('/', async (req, res) => {
    const { body } = req;
    const order = await sequelize.models.orders.create({
      order_name: body.name,
      description: body.description,
    
    });
    await order.save();
    return res.status(201).json({ data: order })
  });
  //Update a order by id put()
  router.put('/:id', async (req, res) => {
   const { body, params: { id } } = req;
   const order = await sequelize.models.orders.findByPk(id);
   if (!order) {
     return res.status(404).json({ code: 404, message: 'Order not found' });
   }
   const updateOrder = await order.update({
    order_name: body.name,
    description: body.description,
   });
   return res.json({ data: updateOrder });
 });

// Delete a order by id delete() destroy() 
 router.delete('/:id', async (req, res) => {
   const { params: { id } } = req;
   const order = await sequelize.models.orders.findByPk(id);
   if (!order) {
     return res.status(404).json({ code: 404, message: 'Order not found' });
   }
   await order.destroy();
   return res.json();
 });


module.exports = router;