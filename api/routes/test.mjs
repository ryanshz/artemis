import { Router } from 'express';
const router = Router();

router.get('/', (req, res, next) => {
    res.json({ message: 'Hello from the backend!' });
});

export default router;
