import express from 'express';
import createuser from './controller.mjs';
const router = express.Router();

router.get('/createuser', createuser);

export default router;