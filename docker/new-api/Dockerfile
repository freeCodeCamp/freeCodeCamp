# bookworm was only released on 10-6-2023, so is a little too new.
FROM node:18-bullseye AS builder
# global installs need root permissions, so have to happen before we switch to
# the node user
RUN npm i -g pnpm@8
# node images create a non-root user that we can use
USER node
WORKDIR /home/node/build

COPY --chown=node:node . .

RUN pnpm config set dedupe-peer-dependents false
RUN pnpm install -F=api -F=curriculum -F tools/scripts/build -F challenge-parser \
  --frozen-lockfile

# The api needs to source curriculum.json and build:curriculum relies on the
# following env vars.
ARG SHOW_UPCOMING_CHANGES=false
ENV SHOW_UPCOMING_CHANGES=$SHOW_UPCOMING_CHANGES
ARG SHOW_NEW_CURRICULUM=true
ENV SHOW_NEW_CURRICULUM=$SHOW_NEW_CURRICULUM

RUN pnpm build:curriculum
RUN pnpm -F=api build

FROM node:18-bullseye AS deps

WORKDIR /home/node/build
COPY --chown=node:node pnpm*.yaml .
COPY --chown=node:node api/package.json api/
COPY --chown=node:node shared/package.json shared/
RUN npm i -g pnpm@8
# Prevent pnpm installing unnecessary packages (see above)
RUN pnpm config set dedupe-peer-dependents false
RUN pnpm install --prod --ignore-scripts -F=shared -F=api

FROM node:18-alpine
RUN npm i -g pm2@4
USER node
WORKDIR /home/node/fcc
COPY --from=builder --chown=node:node /home/node/build/api/dist/ ./
# COPY --from=builder --chown=node:node /home/node/build/api/ecosystem.config.js api/ecosystem.config.js
COPY --from=builder --chown=node:node /home/node/build/api/package.json api/package.json
COPY --from=builder --chown=node:node /home/node/build/package.json package.json

COPY --from=deps --chown=node:node /home/node/build/shared/node_modules/ shared/node_modules/
COPY --from=deps --chown=node:node /home/node/build/api/node_modules/ api/node_modules/

CMD ["node", "api/src/server.js"]
# CMD ["pm2-runtime", "start", "api/dist/ecosystem.config.js"]
