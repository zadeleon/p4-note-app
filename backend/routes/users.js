import {Router} from 'express';
import createUser from '../controller/createUser.js';
import updateUser from '../controller/updateUser.js';

const router = new Router();

router.post('/create',createUser);
router.patch('/update',updateUser);

export default router;