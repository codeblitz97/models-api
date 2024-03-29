FROM ghcr.io/puppeteer/puppeteer:19.11.1

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
CMD [ "node", "dist/index.js" ]
