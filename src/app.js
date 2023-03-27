//import './env';
//import './database';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import routes from './routes/index.js';
import { loggerMiddleware } from './middlewares/logger/index.js';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(bodyParser.json());
    this.server.use(morgan('combined'));
    this.server.use(helmet());
    this.server.use(loggerMiddleware);
    this.server.use(
      cors({origin: ['http://localhost:3000', 'http://127.0.0.1:3000']})
    );
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;