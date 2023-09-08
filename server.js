import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import morgan from 'morgan';
import colors from 'colors'
import authRoutes from './routes/authRoutes.js'

// configure dotenv
dotenv.config();


// rest object 
const app = express()

// database connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>
    console.log(`Connected to the database`.bgMagenta.white)
).catch((error) => console.log(error))


// middlewares
app.use(express.json({ limit: '10mb' }));
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(morgan("dev"))

// routes
app.use('/api/v1', authRoutes)



// REST APi
app.get('/', (req, res) => {
    res.send("Hello this the get api")
})

// Configure the PORT
const PORT = process.env.PORT || 8080

// listen to port
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`.bgGreen.white)
})