import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/octofit'
const PORT = process.env.PORT || 8000

mongoose.connect(MONGO_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err))

app.get('/', (_req, res) => {
  res.json({ message: 'Octofit backend running' })
})

app.listen(Number(PORT), () => {
  console.log(`Server listening on port ${PORT}`)
})
