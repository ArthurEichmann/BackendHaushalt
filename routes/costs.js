const { request, response } = require('express');
const express = require('express');
const router = express.Router();
const Costs = require('../models/Costs')

//Get back all the posts
router.get('/', async (request,response) => {
    try {
        const costs = await Costs.find();
        response.header('Access-Control-Allow-Origin', '*');
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
        where: request.body.where,
        date: request.body.date
    });
    try {
        const savedCost = await costs.save()
        response.header('Access-Control-Allow-Origin', '*');
        response.json(savedCost);
    }catch(err){
        response.json({ message: err });
    }
});

//get a specific post
router.get('/:costsId', async (request, response) => {
    try {
        const costs = await Costs.findById(request.params.costsId);
        response.header('Access-Control-Allow-Origin', '*');
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
        console.log("this is a test")
        const updatedCost = await Costs.updateOne(
            {_id: request.params.postId},
            { $set: {
                value: request.body.value,
                description: request.body.description,
                where: request.body.where,
                date: request.body.date
            }}
        );
        response.header('Access-Control-Allow-Origin', '*');
        response.json(updatedCost);
    }catch(err){
        response.json({ message: err });
    }    
})

module.exports = router;