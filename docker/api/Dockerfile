FROM node:16-buster AS builder
# Install doppler CLI
RUN (curl -Ls --tlsv1.2 --proto "=https" --retry 3 https://cli.doppler.com/install.sh) | sh -s -- --verify-signature
# node images create a non-root user that we can use
USER node
WORKDIR /home/node/build
COPY --chown=node:node . .
# Pass `DOPPLER_TOKEN` at build time to create an encrypted snapshot for high-availability
ARG DOPPLER_TOKEN
RUN \
  doppler secrets download doppler.encrypted.json &&\
  pnpm install --no-progress --ignore-scripts &&\
  doppler run --fallback=doppler.encrypted.json --command="npm run create:config" &&\
  doppler run --fallback=doppler.encrypted.json --command="npm run build:curriculum" &&\
  doppler run --fallback=doppler.encrypted.json --command="npm run build:server"

FROM node:16-alpine as depends
USER node
WORKDIR /home/node/depends
COPY --chown=node:node . .
RUN pnpm install --production --workspace=api-server --no-progress --ignore-scripts

FROM node:16-alpine
RUN npm i -g pm2@4
USER node
WORKDIR /home/node/api
COPY --from=builder --chown=node:node /home/node/build/api-server/lib/ api-server/lib/
COPY --from=builder --chown=node:node /home/node/build/utils/ utils/
COPY --from=builder --chown=node:node /home/node/build/config/ config/
COPY --from=depends --chown=node:node /home/node/depends/api-server/node_modules/ api-server/node_modules/
COPY --from=depends --chown=node:node /home/node/depends/node_modules/ node_modules/
WORKDIR /home/node/api/api-server
CMD ["pm2-runtime", "./lib/production-start.js"]

# TODO: don't copy mocks/fixtures
