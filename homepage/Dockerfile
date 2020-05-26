FROM node

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL https://microfrontends-gabriel.herokuapp.com

CMD PORT=$PORT node server.js
