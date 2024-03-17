import CharacterAI from '../lib/node_characterai';
import * as dotenv from 'dotenv';

dotenv.config();

const character = new CharacterAI();

export const authorize = async () => {
  try {
    await character.authenticateWithToken(
      process.env.CHARACTER_AI_TOKEN as string
    );
  } catch (error) {
    throw error;
  }
};

export default character;
