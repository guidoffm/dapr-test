FROM node:lts-alpine
RUN npm update npm -g
USER node
WORKDIR /home/node
COPY package.json .
RUN npm i
COPY app.mjs .
CMD node app.mjs