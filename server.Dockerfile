FROM node:16-alpine as builder
USER node
WORKDIR /home/node/build
COPY --chown=node:node . .

RUN npm ci --no-progress
RUN npm run build:curriculum
RUN npm run build:server

FROM node:16-alpine
USER node
WORKDIR /home/node/api
# get and install deps
COPY --from=builder --chown=node:node /home/node/build/package.json /home/node/build/package-lock.json ./
COPY --from=builder --chown=node:node /home/node/build/api-server/package.json api-server/
RUN npm ci --production -w=api-server --include-workspace-root --no-progress --ignore-scripts \
  && npm cache clean --force
COPY --from=builder --chown=node:node /home/node/build/api-server/lib/ api-server/lib/
COPY --from=builder --chown=node:node /home/node/build/utils/ utils/
COPY --from=builder --chown=node:node /home/node/build/config/ config/

WORKDIR /home/node/api/api-server

CMD ["npm", "start"]

# TODO: don't copy mocks/fixtures
