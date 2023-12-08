const Record = require('../models/cartSchema')
const mongoose = require('mongoose')


//get all records
const getRecords = async (req, res) => {
    const records = await Record.find({}).sort({createAt: -1})

    res.status(200).json(records)
}


//get a single record
const getRecord = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such record'})
    }

    const record = await Record.findById(id)

    if(!record) {
        return res.status(404).json({error: 'No such record'})
    }

    res.status(200).json(record)
}


//create new record
const createRecord = async(req, res) => {
    const {imageSrc, title, canteen, price, qty} = req.body

    //adding doc to db        
    try{
        const rec = await Record.create({imageSrc, title, canteen, price, qty})
        res.status(200).json(rec)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}


//delete a record
const deleteRecord = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such record'})
    }

    const record = await Record.findOneAndDelete({_id: id})

    if(!record) {
        return res.status(400).json({error: 'No such record'})
    }

    res.status(200).json(record)
}

//update a record
const updateRecord = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such record'})
    }

    const record = await Record.findOneAndUpdate({_id: id},{
        ...req.body
    })
 
    if(!record) {
        return res.status(400).json({error: 'No such record'})
    }

    res.status(200).json(record)
}


//get records of a canteen
const getRecordsByCanteen = async (req, res) => {
    const { canteen } = req.params;

    try {
        const records = await Record.find({ canteen: canteen });

        if (!records || records.length === 0) {
            return res.status(404).json({ error: 'No records found for this canteen' });
        }

        res.status(200).json(records);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};



module.exports = {
    getRecords,
    getRecord,
    createRecord,
    deleteRecord,
    updateRecord,
    getRecordsByCanteen,
};