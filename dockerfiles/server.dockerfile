FROM node:16-alpine

WORKDIR /app

EXPOSE 8080

CMD [ "npm", "run", "serve" ]