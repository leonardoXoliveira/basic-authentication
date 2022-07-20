import {Router} from 'express';

import {AuthRoutes} from './routes/AuthRoutes';
import {UserRoutes} from './routes/UserRoutes';

const router = Router();

router.use('/user', new UserRoutes().router);
router.use('/login', new AuthRoutes().router);

export {router};
