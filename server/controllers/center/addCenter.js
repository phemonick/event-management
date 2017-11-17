import dbc from '../../data/dbc'
const data = dbc.center;

class AddCenter{

    static add(req, res){
        data.push({
            "id": req.body.id,
            "name": req.body.name,
            "city": req.body.city,
            "address": req.body.address
        })
        res.status(200).send({
            message: 'success',
            data: data
        })
    }
    }
export default AddCenter;