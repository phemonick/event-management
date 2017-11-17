import express from 'express'
import { CreateEvent, UpdateEvent, DeleteEvent } from '../controllers/events'

const eventRouter = express.Router();

eventRouter.post('/events', CreateEvent.create)
eventRouter.delete('/events/:id', DeleteEvent.delete)
eventRouter.put('/events/:id', UpdateEvent.update)

export default eventRouter;