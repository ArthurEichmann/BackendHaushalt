const { request, response } = require('express');
const express = require('express');
const router = express.Router();
const Costs = require('../models/RunningCosts')

//Get back all the posts
router.get('/', async (request,response) => {
    try {
        const costs = await Costs.find();
        response.json(costs);
    }catch(err){
        response.json({ message: err });
    }
});

//submit a post
router.post('/', async (request, response) => {
    const costs = new Costs({
        value: request.body.value,
        description: request.body.description,
        cycle: request.body.cycle,
    });
    try {
        const savedCost = await costs.save()
        response.json(savedCost);
    }catch(err){
        response.json({ message: err });
    }
});

//get a specific post
router.get('/:costsId', async (request, response) => {
    try {
    const costs = await Costs.findById(request.params.postId);
        response.json(costs);
    }catch(err){
        response.json({ message: err });
    }
});

//delete a specific post
router.delete('/:costsId', async (request, response) => {
    try {
        const removedCosts = await Costs.remove({_id: request.params.costsId});
        response.json(removedCosts);
    }catch(err){
        response.json({ message: err });
    }
});

//Update a post
router.patch('/:costsId', async (request, response) => {
    try {
        const updatedCost = await Costs.updateOne(
            {_id: request.params.postId},
            { $set: {
                value: request.body.value,
                description: request.body.description,
                cycle: request.body.cycle
            }}
        );
        response.json(updatedCost);
    }catch(err){
        response.json({ message: err });
    }    
})

module.exports = router;