FROM node

COPY package.json .
RUN npm install
COPY . .

ENV PUBLIC_URL https://microfrontends-gabriel.herokuapp.com/cart

RUN npm run build
RUN npm run transpile

CMD PORT=$PORT npm run start:prod
