import dbc from '../../data/dbc'
const data = dbc.center;

class AllCenters{
    static all(req, res){
        if(data){
            res.status(200).send(data);
        }
        res.status(404).send('no center')
    }
}
