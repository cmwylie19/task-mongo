FROM node:10-alpine

#RUN mkdir -p /home/node/app/node_modules 

WORKDIR /home/node/app

COPY . .

#USER node

RUN npm install

#COPY --chown=node:node . .

EXPOSE 8080

CMD [ "node", "app.js" ]
