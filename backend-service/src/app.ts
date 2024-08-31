import express from 'express';
import cors from 'cors';
import routes from './routes/routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Configuração das rotas
app.use('/api', routes);

export default app;
