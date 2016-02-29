FROM node:4

RUN mkdir /FreeCodeCamp

WORKDIR /FreeCodeCamp

RUN npm install -g gulp
RUN npm install -g bower

