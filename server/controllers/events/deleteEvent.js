import db from '../../data/db';
const data = db.events;

class DeleteEvent{
    static delete(req, res){
        res.status(200).send('deleted')
    }
}
export default DeleteEvent;
