import 'dotenv/config';

import express, {Request, Response} from 'express';
import cors from 'cors';

import {router} from './router';

const app = express();

app.use(express.json());
app.use(cors());
app.get('/api', (_: Request, res: Response) => res.send('Hello World!'));

app.use('/api', router);

const port = process.env.SERVER_PORT || 3333;

app.listen(port, () => {
  console.log(`Server is running on port ${port} 🚀`);
});
