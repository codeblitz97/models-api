import { sendMessage } from '../controllers/character.controller';
import { Router } from 'express';
import character from '../module/character';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Success',
    isAuthenticated: character.isAuthenticated(),
  });
});

router.post('/send-message', async (req, res) => {
  try {
    res.status(200).json(await sendMessage(req, res));
  } catch (error) {
    throw error;
  }
});

export default router;
