import { Router } from 'express';
import clickController from '../controllers/clickController';

const router = new Router();

router.get('/', (req, res) => clickController.get(req, res));
router.get('/:id', (req, res) => clickController.getByDate(req, res));
router.post('/', (req, res) => clickController.saveClick(req, res));

export default router;