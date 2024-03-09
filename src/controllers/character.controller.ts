import character from '../module/character';
import type { Request, Response } from 'express';

export const sendMessage = async (req: Request, res: Response) => {
  try {
    const { characterId, message } = req.body;
    const chat = await character.createOrContinueChat(characterId);
    const response = await chat.sendAndAwaitResponse(message, true);

    res.status(200).json(response);
  } catch (error) {
    throw error;
  }
};
