import express from 'express';
import routers from './routes/index.js';
import logger from 'morgan';


const app = express();

app.use(logger('dev'))

routers(app);

export default app;