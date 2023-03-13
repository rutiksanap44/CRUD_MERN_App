import express from 'express'

import Connection from './database/db.js'

import dotenv from 'dotenv'

import Routes from './routes/routes.js'

import bodyParser from 'body-parser'

import cors from 'cors'

const port = 1023

const app = express()
dotenv.config()

app.use(cors())
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))


app.use('/', Routes)

const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

Connection(username, password)

app.listen(port, () => { console.log(`Express Server is Running on port ${port}`) })