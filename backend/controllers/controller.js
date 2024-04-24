const express = require('express')
const router = express.Router()

const db = require('../models/db')

router.get('/',async(req,res) => {

    const data = await db.find()
    res.json(data)
})

router.get('/:name',async(req,res) => {

    const newdata = new db ({
        name:req.par.ams.name
    })
    await newdata.save()
})

module.exports=router