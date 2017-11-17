import express from 'express'
import { AllCenters } from '../controllers/center';

const centerRoute = express.Router();

centerRoute.get('/', AllCenters.all)

export default centerRoute;

