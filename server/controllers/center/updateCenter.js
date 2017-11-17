import dbc from '../../data/dbc';
const data = dbc.center;

class UpdateCenter{

    static update(req, res){
        const { id }= req.params;
        
        data.forEach((center) => {

            if(center.id == id){
                center.id = req.body.id;
                center.name = req.body.name;
                center.location = req.body.location;
                center.date = req.body.date;
                center.time = req.body.time;

                res.status(200).send({
                    message: 'edited',
                    result: center
                })
            }
            
            })
            res.status(404).send({
                message: 'center doesnt exist'
        })
    }
}
export default UpdateCenter;