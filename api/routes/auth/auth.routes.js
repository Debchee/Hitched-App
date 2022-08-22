import express from 'express';
import regUser from '../../controllers/auth/register.controller.js';

const router = express.Router();

router.post('/register', regUser);


export default router;