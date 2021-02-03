FROM node:10-alpine

WORKDIR /home/node/app

COPY . .

RUN npm install

EXPOSE 8080

CMD [ "node", "src/app.js" ]
