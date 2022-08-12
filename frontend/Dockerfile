FROM node:16.16.0-alpine

WORKDIR /frontend

COPY package.json .

RUN npm config set unsafe-perm true

RUN mkdir -p /frontend/node_modules

RUN chown node:node /frontend/node_modules

RUN npm install

COPY . .

#RUN chown -R node /frontend/node_modules

USER node

CMD [ "npm", "run", "dev" ]