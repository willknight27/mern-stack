FROM node:16.16.0-alpine

WORKDIR /backend

COPY package.json .

RUN npm install

COPY . .

# Nodemon dev
CMD [ "npm", "run", "dev" ]