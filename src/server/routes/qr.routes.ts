import { Router } from 'express';
import { generateQR } from '../controllers/qr.controller';

const qrRoutes = Router();

// POST /api/qr — сгенерировать QR-код
qrRoutes.post('/', (req, res, next) => {
  console.log('QR route hit!');
  next();
}, generateQR);

qrRoutes.get('/', (req, res) => {
  res.status(200).json({ message: 'QR GET route active' });
});

export default qrRoutes;
