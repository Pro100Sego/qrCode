// Express app setup
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import qrRoutes from './routes/qr.routes';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './docs/swagger';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

console.log('Registering /api/qr routes...');
app.use('/api/qr', qrRoutes);
app.get('/api/qr', (req, res) => {
  res.send('QR route working');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
