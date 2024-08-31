import { Request, Response } from 'express';

export const confirmMeasure = async (req: Request, res: Response) => {
    const { measure_uuid, confirmed_value } = req.body;

    // Validações dos parâmetros recebidos
    if (!measure_uuid || confirmed_value === undefined) {
        return res.status(400).json({
            error_code: 'INVALID_DATA',
            error_description: 'Dados fornecidos estão incompletos ou inválidos.',
        });
    }

    // Lógica para confirmar a medida
    res.status(200).json({ success: true });
};
