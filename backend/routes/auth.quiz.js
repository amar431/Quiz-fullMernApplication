
import express from 'express';

import { getQuizQuestions } from '../controllers/quiz.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();



router.get('/quiz',verifyToken,getQuizQuestions);



export default router