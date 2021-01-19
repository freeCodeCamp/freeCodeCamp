FROM node:12.20 as builder
USER node
WORKDIR /home/node/build
COPY --chown=node:node . .

RUN npm ci
WORKDIR /home/node/build/api-server
RUN npm run package-curriculum
RUN npm run build
RUN npm ci --production

FROM node:12.20
USER node
WORKDIR /home/node/api
COPY --from=builder /home/node/build/api-server/lib/ api-server/
COPY --from=builder /home/node/build/api-server/package.json api-server/
COPY --from=builder /home/node/build/utils/ .
COPY --from=builder /home/node/build/config/ .

WORKDIR /home/node/api/api-server

CMD ["npm", "start"]

# TODO: if we set the pipelines to fail on standard error, they fail. Is
# something sending messages to the error stream for some reason?
