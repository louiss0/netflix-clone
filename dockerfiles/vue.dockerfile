FROM node:16-alpine

RUN npm i -g npm@latest

RUN npm install -g @vue/cli @vue/cli-service-global

ENTRYPOINT [ "vue" ]

