import { Request, Response } from 'express';
import { processImage } from '../services/geminiService';

export const uploadImage = async (req: Request, res: Response) => {
    const { image, customer_code, measure_datetime, measure_type } = req.body;

    // Validações iniciais dos parâmetros recebidos
    if (!image || !customer_code || !measure_datetime || !measure_type) {
        return res.status(400).json({
            error_code: 'INVALID_DATA',
            error_description: 'Dados fornecidos estão incompletos ou inválidos.',
        });
    }

    try {
        // Lógica de verificação e processamento da imagem
        const result = await processImage(image);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao processar a imagem.' });
    }
};
