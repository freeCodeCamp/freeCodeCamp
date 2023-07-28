# bookworm was only released on 10-6-2023, so is a little too new.
FROM node:18-bullseye AS builder
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
# global installs need root permissions, so have to happen before we switch to
# the node user
RUN npm i -g pnpm@8
# node images create a non-root user that we can use
USER node
WORKDIR /home/node/build
COPY --chown=node:node . .

# TODO: use https://pnpm.io/cli/deploy and only install 1) prod deps 2) packages the api needs
# TODO: make sure Cypress isn't getting installed (it shouldn't because it's a dev dep, but make sure)
# TODO: ditto: husky
# TODO: figure out why the cache is getting invalidated. Is it in part because
# we're not ignoring THIS file? Or do we need corepack?
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
# TODO: create a prebuild script for the api?
RUN pnpm create:config
RUN pnpm create:utils

# The api needs to source curriculum.json and build:curriculum relies on the
# following env vars.
ARG SHOW_UPCOMING_CHANGES=false
ENV SHOW_UPCOMING_CHANGES=$SHOW_UPCOMING_CHANGES
ARG SHOW_NEW_CURRICULUM=true
ENV SHOW_NEW_CURRICULUM=$SHOW_NEW_CURRICULUM
RUN pnpm build:curriculum

RUN pnpm build:server

FROM node:18-alpine
RUN npm i -g pm2@4 pnpm@8
USER node
WORKDIR /home/node/fcc
COPY --from=builder --chown=node:node /home/node/build/api-server/lib/ api-server/lib/
COPY --from=builder --chown=node:node /home/node/build/api-server/ecosystem.config.js api-server/ecosystem.config.js
COPY --from=builder --chown=node:node /home/node/build/api-server/package.json api-server/package.json
COPY --from=builder --chown=node:node /home/node/build/utils/ utils/
COPY --from=builder --chown=node:node /home/node/build/config/ config/
COPY --from=builder --chown=node:node /home/node/build/api-server/node_modules/ api-server/node_modules/
COPY --from=builder --chown=node:node /home/node/build/node_modules/ node_modules/
COPY --from=builder --chown=node:node /home/node/build/package.json package.json

CMD ["pm2-runtime", "start", "api-server/ecosystem.config.js"]

