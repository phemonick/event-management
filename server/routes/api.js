import express from 'express'
import { CreateEvent, UpdateEvent, DeleteEvent } from '../controllers'

const eventRouter = express.Router();

    router.post('/events', CreateEvent.create)
    router.delete('/events', DeleteEvent.delete)
    router.put('/events/:id', UpdateEvent.update)

export default eventRouter;