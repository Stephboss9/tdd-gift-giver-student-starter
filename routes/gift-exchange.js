const express = require('express')
const { traditional } = require('../models/gift-exchange')
const router = express.Router()


router.post("/pairs", (req, res, next) => {
    console.log(req.body)
    let results =  pairs(req.body.names)
    try {
       
        if(results){
           res.status(200).send(results)
        }
    }
    catch(err) {
        next(err)
    }
})

router.post("/:userName", (req, res, next) => {
    const userName = req.params.userName
    console.log(userName.length)
    if(userName.length > 2){
        res.status(200).send({message:"good name choice!"})
    } else {res.status(200).send({message:"bad name choice! Must be greater than 5 characters"})}
    
})


router.post("/traditional", (req, res, next) => {
    console
    let results =  traditional(req.body.names)
    try {
        if(results){
           res.status(200).send(results)
        }
    }
    catch(err) {
        next(err)
    }
})


module.exports = router