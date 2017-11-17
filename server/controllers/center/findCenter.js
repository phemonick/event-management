import dbc from '../../data/dbc'
const data = dbc.center;

class FindCenter{

    static find(req, res){
        const id = req.params.id;
        data.forEach((center) => {
            if(id == center.id){
                res.status(200).send({
                    message: 'found',
                    result: center
                })
            }
        })
        res.status(404).send({
            message:'center doesnt exist'
        })
    }
}
export default FindCenter;