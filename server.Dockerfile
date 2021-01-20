FROM node:12.20 as builder
USER node
WORKDIR /home/node/build
COPY --chown=node:node . .

RUN npm ci
WORKDIR /home/node/build/api-server
RUN npm run package-curriculum
RUN npm run build

FROM node:12.20
USER node
WORKDIR /home/node/api
# get and install deps
COPY --from=builder --chown=node:node /home/node/build/package*.json .
COPY --from=builder --chown=node:node /home/node/build/api-server/package*.json api-server/
RUN npm ci --production --ignore-scripts \
  && cd api-server \
  && npm ci --production
COPY --from=builder --chown=node:node /home/node/build/api-server/lib/ api-server/lib/
COPY --from=builder --chown=node:node /home/node/build/utils/ utils/
COPY --from=builder --chown=node:node /home/node/build/config/ config/

WORKDIR /home/node/api/api-server

CMD ["npm", "start"]

# TODO: if we set the pipelines to fail on standard error, they fail. Is
# something sending messages to the error stream for some reason?

# TODO: why has /api-server/lib/server/index.js got different permissions from the rest?

# TODO: don't copy mocks/fixtures
