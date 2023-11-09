
import express from 'express';
import { authenticateToken } from '../middleware/authenticateToken.js';
import { getQuizQuestions } from '../controllers/quiz.controller.js';

const router = express.Router();

router.get('/quiz', authenticateToken, getQuizQuestions);
export default router