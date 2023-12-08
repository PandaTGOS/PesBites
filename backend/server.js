require('dotenv').config()
const express = require('express')
const mongoose  = require('mongoose')
const recordRoutes = require('./routes/records')
const cartRoutes = require('./routes/cartRoutes')
const cors = require('cors')

// express app
const app = express()

//middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json())


app.use((req, res, next) => { 
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/records', recordRoutes);
app.use('/api/cart', cartRoutes);


//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen on port
        app.listen(process.env.PORT, () => {
            console.log('Connected to db and listening on port', process.env.PORT)
        })
    })

    .catch((error) => {
        console.log(error)
    }) 