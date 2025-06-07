import { Request, Response, NextFunction } from 'express';
import { createQRCode } from '../service/qr.service';
import HTTP_STATUS from '../httpStatusCodes';

// Контроллер генерации QR-кода
export const generateQR = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { text } = req.body;

    if (!text) {
      res.status(HTTP_STATUS.BAD_REQUEST).json({ error: 'Text is required' });
      return;
    }

    const qrDataURL = await createQRCode(text);
    res.status(HTTP_STATUS.OK).json({ qr: qrDataURL, success: true });
  } catch (error) {
    console.error('QR Generation Error:', error);
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ error: 'Failed to generate QR' });
    next(error);
  }
};
