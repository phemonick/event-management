import db from '../../data/db';
const data = db.events;

class UpdateEvent{
    static update(req, res){
        const { id }= req.params;
        
        data.forEach((result) => {
            console.log(result);
            if(result.id == id){

                result.id = req.body.id;
                result.name = req.body.name;
                result.location = req.body.location;
                result.date = req.body.date;
                result.time = req.body.time;

                res.status(200).send({
                    message: 'edited'
                })
            }
            
            })
            res.status(404).send({
                message: 'doesnt exist'
        })
    }
}
export default UpdateEvent;