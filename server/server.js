import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { eventRouter, centerRoute} from './routes';

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api/events', eventRouter);
app.use('/api/center', centerRoute)

app.get('/',  (req, res) => {
    res.status(200).send({
        message: 'welcome to our events',
    });
});


const port = process.env.PORT || 7000;

app.listen(port);

console.log(`Find me on http://localhost:${port}`);

