import express from 'express'

import { addUser } from '../controller/userContoller.js'

const router = express.Router()

router.post('/add', addUser)

export default router