import { Request, Response } from 'express';

export const listMeasures = async (req: Request, res: Response) => {
    const { customerCode } = req.params;
    const { measure_type } = req.query;

    // Lógica de listagem com validações e filtros
    res.status(200).json({
        customer_code: customerCode,
        measures: [],
    });
};
