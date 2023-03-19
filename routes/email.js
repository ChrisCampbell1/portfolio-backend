import { Router } from 'express'
import * as emailController from '../controllers/email.js'

const router = Router()

router.get('/', function(req, res) {
  res.send('respond with a resource')
})

export { router }
