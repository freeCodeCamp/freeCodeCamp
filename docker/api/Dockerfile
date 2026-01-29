FROM node:24-bookworm AS builder
RUN apt-get update && apt-get install -y jq
# global installs need root permissions, so have to happen before we switch to
# the node user
RUN npm i -g pnpm@10
# node images create a non-root user that we can use
USER node
WORKDIR /home/node/build

COPY --chown=node:node *.* .
COPY --chown=node:node api/ api/
COPY --chown=node:node packages/shared/ packages/shared/
COPY --chown=node:node tools/ tools/
COPY --chown=node:node curriculum/ curriculum/
# TODO: AFAIK it's just the intro translations. Those should be folded into the
# curriculum and then we can remove this.
COPY --chown=node:node client/ client/

RUN pnpm config set dedupe-peer-dependents false
# While we want to ignore scripts generally, we do need to generate the prisma
# client.
RUN pnpm install --frozen-lockfile --ignore-scripts
RUN cd api && pnpm prisma generate

# The api needs to source curriculum.json and the build process relies on the
# following env vars.
ARG SHOW_UPCOMING_CHANGES=false
ENV SHOW_UPCOMING_CHANGES=$SHOW_UPCOMING_CHANGES

RUN pnpm turbo -F=@freecodecamp/api build

FROM node:24-bookworm AS deps
RUN apt-get update && apt-get install -y jq

WORKDIR /home/node/build
COPY --chown=node:node pnpm*.yaml .
COPY --chown=node:node package.json .
COPY --chown=node:node api/ api/
COPY --chown=node:node packages/shared/ packages/shared/
RUN npm i -g pnpm@10

# Weirdly this config does not seem necessary for the new api (the same number
# of deps are installed in both cases), but I'm including it just for
# consistency.
RUN pnpm config set dedupe-peer-dependents false
RUN pnpm install --prod --ignore-scripts -F=api -F=packages/shared --frozen-lockfile
RUN cd api && npx prisma@$(jq -r '.devDependencies.prisma' < package.json) generate

FROM node:24-bookworm
USER node
WORKDIR /home/node/fcc
COPY --from=builder --chown=node:node /home/node/build/api/dist/ ./
COPY --from=builder --chown=node:node /home/node/build/api/package.json api/
COPY --from=builder --chown=node:node /home/node/build/curriculum/generated/curriculum.json curriculum/generated/
COPY --from=builder --chown=node:node /home/node/build/packages/shared/ packages/shared/

COPY --from=deps --chown=node:node /home/node/build/node_modules/ node_modules/
COPY --from=deps --chown=node:node /home/node/build/api/node_modules/ api/node_modules/
# packages/shared has no prod dependencies, so no need to copy them

CMD ["node", "api/src/server.js"]
