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

# TODO: figure out why the cache is getting invalidated. Is it in part because
# we're not ignoring THIS file? Or do we need corepack?

# We have to prevent pnpm from deduping peer dependencies because otherwise it
# will install all of the packages, not just api-server. Also, pnpm deploy is
# not useful since we need to install more than one package.

RUN pnpm config set dedupe-peer-dependents false
RUN pnpm -F=api-server -F=tools/scripts/build -F=challenge-parser -F=curriculum -F=shared \
  install --frozen-lockfile --ignore-scripts

# The api needs to source curriculum.json and build:curriculum relies on the
# following env vars.
ARG SHOW_UPCOMING_CHANGES=false
ENV SHOW_UPCOMING_CHANGES=$SHOW_UPCOMING_CHANGES
ARG SHOW_NEW_CURRICULUM=true
ENV SHOW_NEW_CURRICULUM=$SHOW_NEW_CURRICULUM
RUN pnpm build:curriculum

RUN pnpm build:server

FROM node:18-bullseye AS deps

WORKDIR /home/node/build
COPY --chown=node:node pnpm*.yaml .
COPY --chown=node:node api-server/package.json api-server/package.json
COPY --chown=node:node shared/package.json shared/package.json

RUN npm i -g pnpm@8
# Prevent pnpm installing unnecessary packages (see above)
RUN pnpm config set dedupe-peer-dependents false
RUN pnpm -F=api-server -F=shared install --prod --ignore-scripts

FROM node:18-alpine
RUN npm i -g pm2@4
USER node
WORKDIR /home/node/fcc
COPY --from=builder --chown=node:node /home/node/build/api-server/config/ api-server/config/
COPY --from=builder --chown=node:node /home/node/build/api-server/lib/ api-server/lib/
COPY --from=builder --chown=node:node /home/node/build/api-server/ecosystem.config.js api-server/ecosystem.config.js
COPY --from=builder --chown=node:node /home/node/build/api-server/package.json api-server/package.json
COPY --from=builder --chown=node:node /home/node/build/shared/ shared/
COPY --from=builder --chown=node:node /home/node/build/package.json package.json
COPY --from=deps --chown=node:node /home/node/build/node_modules/ node_modules/
COPY --from=deps --chown=node:node /home/node/build/api-server/node_modules/ api-server/node_modules/
COPY --from=deps --chown=node:node /home/node/build/shared/node_modules/ shared/node_modules/

CMD ["pm2-runtime", "start", "api-server/ecosystem.config.js"]

