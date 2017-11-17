import { CreateEvent, UpdateEvent, DeleteEvent } from '../controllers'

const routes = (router) => {
    router.post('/events', CreateEvent.create)
    router.delete('/events', DeleteEvent.delete)
    router.put('/events/:id', UpdateEvent.update)

}
export default routes;