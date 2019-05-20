import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response): Response => {
    return res.send('Users fetching....');
});

export default router;