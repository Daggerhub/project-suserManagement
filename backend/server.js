import express from 'express'
import dotenv from 'dotenv';
import User from './routes/userRoutes.js'
import connectDB from './config/db.js';
import cors from 'cors'
import bodyParser from 'body-parser'

dotenv.config()

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/v1/user', User);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 
