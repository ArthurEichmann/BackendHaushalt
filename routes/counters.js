const { request, response } = require('express');
const express = require('express');
const router = express.Router();
const Counter = require('../models/HomeCounters')

//Get back all the posts
router.get('/', async (request,response) => {
    try {
        const counters = await Counter.find();
        response.json(counters);
    }catch(err){
        response.json({ message: err });
    }
});

//submit a post
router.post('/', async (request, response) => {
    const counters = new Counter({
        value: request.body.value,
        description: request.body.description,
        date: request.body.date,
    });
    try {
        const savedCounter = await counters.save()
        response.json(savedCounter);
    }catch(err){
        response.json({ message: err });
    }
});

//get a specific post
router.get('/:counterId', async (request, response) => {
    try {
    const counters = await Counter.findById(request.params.counterId);
        response.json(counters);
    }catch(err){
        response.json({ message: err });
    }
});

//delete a specific post
router.delete('/:counterId', async (request, response) => {
    try {
        const removedCounter = await Counter.remove({_id: request.params.counterId});
        response.json(removedCounter);
    }catch(err){
        response.json({ message: err });
    }
});

//Update a post
router.patch('/:counterId', async (request, response) => {
    try {
        const updatedCounter = await Counter.updateOne(
            {_id: request.params.postId},
            { $set: {
                value: request.body.value,
                description: request.body.description,
                date: request.body.date
            }}
        );
        response.json(updatedCounter);
    }catch(err){
        response.json({ message: err });
    }    
})

module.exports = router;