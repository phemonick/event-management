import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import api from './routes/api';
import db from './data/db';

const data = db.events;

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api', api(express.Router()));

app.get('/',  (req, res) => {
    res.status(200).send({
        message: data,
    });
});


const port = process.env.PORT || 7000;

app.listen(port);

console.log(`Find me on http://localhost:${port}`);

