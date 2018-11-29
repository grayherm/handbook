FROM node:8.12.0-jessie

RUN apt update && apt install python

COPY . ./handbook.uagpmc.com

RUN cd handbook.uagpmc.com && \
      yarn && yarn build

EXPOSE 80/tcp

CMD cd handbook.uagpmc.com && node_modules/.bin/http-server -p 80 -a 0.0.0.0 --gzip
