import CharacterAI from 'node_characterai';
import * as dotenv from 'dotenv';
import chromium from 'chrome-aws-lambda';

dotenv.config();

const character = new CharacterAI();

export const authorize = async () => {
  try {
    //@ts-ignore
    character.puppeteerPath = await chromium.executablePath();
    await character.authenticateWithToken(
      process.env.CHARACTER_AI_TOKEN as string
    );
  } catch (error) {
    throw error;
  }
};

export default character;
