import express from 'express'
import { mongoDB_URI, PORT } from './config.js'
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoutes.js'
import cors from 'cors';
// import { Book } from './models/bookModels.js';


const app = express()

mongoose.connect(mongoDB_URI)
    .then(() => console.log('Connected!'))
    .catch(err => console.log(err))

// Middleware for parsing request body 
app.use(express.json())

// Middleware for handling CORS policy 
// optoion -1 : allow all origins with default cors (*)
app.use(cors())
// Option-2 : Allow custom origins 
// app.use(cors({
//     origins : "http://localhost:3000",
//     methods : ['GET' , 'POST' ,'PUT' , 'DELETE'],
//     allowedHeaders : ['content-type'],
// }))

app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send('welcome to our BOOK SHOP')
})

app.use('/books', booksRoute)


app.listen(PORT, () => {
    console.log(`this site is running fro ${PORT}`)
})