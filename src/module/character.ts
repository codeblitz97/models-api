import CharacterAI from 'node_characterai';
import * as dotenv from 'dotenv';
import puppeteer from 'puppeteer';

dotenv.config();

const character = new CharacterAI();

export const authorize = async () => {
  try {
    // @ts-ignore
    character.puppeteerPath =
      process.env.NODE_ENV == 'production'
        ? process.env.PUPPETEER_EXECUTABLE_PATH
        : puppeteer.executablePath();
    await character.authenticateWithToken(
      process.env.CHARACTER_AI_TOKEN as string
    );
  } catch (error) {
    throw error;
  }
};

export default character;
