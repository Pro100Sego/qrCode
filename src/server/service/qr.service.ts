import QRCode from 'qrcode';

// Core service to create QR code from text
export const createQRCode = async (text: string): Promise<string> => {
    return await QRCode.toDataURL(text);
};
