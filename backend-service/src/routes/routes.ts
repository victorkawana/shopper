import { Router } from 'express';
import { uploadImage } from '../controllers/uploadController';
import { confirmMeasure } from '../controllers/confirmController';
import { listMeasures } from '../controllers/listController';

const router = Router();

router.post('/upload', uploadImage);
router.patch('/confirm', confirmMeasure);
router.get('/:customerCode/list', listMeasures);

export default router;
