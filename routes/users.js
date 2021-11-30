const express = require('express');
const router = express.Router();
const sequelize = require('../db');

// CRUD
// Get all users get()
router.get('/', async (req, res) => {
    const user = await sequelize.models.users.findAndCountAll();
    return res.status(200).json({ data: user });
  });


// Create a new user post(), save()
router.post('/', async (req, res) => {
    const { body } = req;
    const user = await sequelize.models.users.create({
        name: body.name,
    
    });
    await user.save();
    return res.status(201).json({ data: user })
  });
  //Update a user by id put()
  router.put('/:id', async (req, res) => {
   const { body, params: { id } } = req;
   const user = await sequelize.models.users.findByPk(id);
   if (!user) {
     return res.status(404).json({ code: 404, message: 'User not found' });
   }
   const updateUser = await user.update({
       name: body.name,
   });
   return res.json({ data: updateUser });
 });

// Delete a order by id delete() destroy() 
 router.delete('/:id', async (req, res) => {
   const { params: { id } } = req;
   const user = await sequelize.models.users.findByPk(id);
   if (!user) {
     return res.status(404).json({ code: 404, message: 'User not found' });
   }
   await user.destroy();
   return res.json();
 });


module.exports = router;