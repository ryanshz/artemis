import { Router } from 'express';
const router = Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('/src/index.mjs');
});

export default router;
