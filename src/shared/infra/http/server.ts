import 'reflect-metadata';
import express from 'express';
import routes from './routes/index';
import '../../container';

import 'express-async-errors';

import GlobalError from '../../errors/GlobalError';

import '../typeorm';

const app = express();

app.use(express.json());

app.use(routes);

app.use(GlobalError);

app.listen(3333);
