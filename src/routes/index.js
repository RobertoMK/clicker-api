import { Router } from 'express';
import clickController from '../controllers/clickController.js';

const router = new Router();

router.get('/', (req, res) => clickController.get(req, res));
router.get('/:id', (req, res) => clickController.getByDate(req, res));
router.post('/', (req, res) => clickController.create(req, res));

export default router;