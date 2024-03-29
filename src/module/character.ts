import CharacterAI from 'node_characterai';
import * as dotenv from 'dotenv';

dotenv.config();

const character = new CharacterAI();
character.requester.puppeteerPath =
  process.env.NODE_ENV === 'production'
    ? (process.env.PUPPETEER_EXECUTABLE_PATH as string)
    : character.requester.puppeteerPath;

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
