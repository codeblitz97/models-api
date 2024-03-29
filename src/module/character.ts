import CharacterAI from 'node_characterai';
import * as dotenv from 'dotenv';
import chromium from 'chrome-aws-lambda';

dotenv.config();

const character = new CharacterAI();

//@ts-ignore
character.puppeteerPath = await chromium.executablePath();

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
