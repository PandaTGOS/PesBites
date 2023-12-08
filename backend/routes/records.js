const express = require('express')

const {
    createRecord,
    getRecords,
    getRecord,
    deleteRecord,
    updateRecord,
    getRecordsByCanteen,
} = require('../controllers/recordController')

const router = express.Router()


//GET all records
router.get('/', getRecords)

//GET a single record
router.get('/:id', getRecord)

//POST a new record
router.post('/', createRecord)

//DELETE a record
router.delete('/:id',deleteRecord)

//UPDATE a record
router.patch('/:id',updateRecord)

//GET by canteen
router.get('/canteen/:canteen',getRecordsByCanteen)


module.exports = router;