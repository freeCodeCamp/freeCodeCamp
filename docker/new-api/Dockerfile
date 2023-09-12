# bookworm was only released on 10-6-2023, so is a little too new.
FROM node:18-bullseye AS builder
# global installs need root permissions, so have to happen before we switch to
# the node user
RUN npm i -g pnpm@8
# node images create a non-root user that we can use
USER node
WORKDIR /home/node/build

COPY --chown=node:node package.json .
COPY --chown=node:node pnpm*.yaml .
COPY --chown=node:node tsconfig*.json .
COPY --chown=node:node api/ api/
COPY --chown=node:node shared/ shared/
COPY --chown=node:node tools/ tools/
COPY --chown=node:node curriculum/ curriculum/
# TODO: AFAIK it's just the intro translations. Those should be folded into the
# curriculum and then we can remove this.
COPY --chown=node:node client/ client/

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
COPY --chown=node:node api/ api/
COPY --chown=node:node shared/ shared/
RUN npm i -g pnpm@8
RUN pnpm install --prod --ignore-scripts -F=shared -F=api
# While we want to ignore scripts generally, we do need to generate the prisma
# client. Note: npx is the simplest way to generate the client without us having
# to have prisma as a prod dependency.
RUN cd api && npx prisma generate

FROM node:18-alpine
RUN npm i -g pm2@4
USER node
WORKDIR /home/node/fcc
COPY --from=builder --chown=node:node /home/node/build/api/dist/ ./
COPY --from=builder --chown=node:node /home/node/build/api/package.json api/

COPY --from=deps --chown=node:node /home/node/build/node_modules/ node_modules/
COPY --from=deps --chown=node:node /home/node/build/shared/node_modules/ shared/node_modules/
COPY --from=deps --chown=node:node /home/node/build/api/node_modules/ api/node_modules/

CMD ["pm2-runtime", "start", "-i", "0","api/src/server.js"]
