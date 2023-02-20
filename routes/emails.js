import { Router } from 'express'
import * as emailsCtrl from '../controllers/emails.js'

const router = Router()

router.post('/', emailsCtrl.sendEmail)

export { router }
