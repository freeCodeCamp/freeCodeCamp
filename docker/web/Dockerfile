FROM node:22-bookworm AS builder
# global installs need root permissions, so have to happen before we switch to
# the node user
RUN corepack enable
# node images create a non-root user that we can use
USER node
WORKDIR /home/node/build

COPY --chown=node:node *.* .
COPY --chown=node:node client/ client/
COPY --chown=node:node shared/ shared/
COPY --chown=node:node tools/ tools/
COPY --chown=node:node curriculum/ curriculum/

ARG HOME_LOCATION
ARG NEWS_LOCATION
ARG CLIENT_LOCALE
ARG CURRICULUM_LOCALE
ARG API_LOCATION
ARG ALGOLIA_API_KEY
ARG ALGOLIA_APP_ID
ARG GROWTHBOOK_URI
ARG FORUM_LOCATION
ARG PATREON_CLIENT_ID
ARG PAYPAL_CLIENT_ID
ARG STRIPE_PUBLIC_KEY
ARG SHOW_UPCOMING_CHANGES
ARG FREECODECAMP_NODE_ENV
ARG DEPLOYMENT_ENV

# For simplicity and because node_modules do not make it into the final image,
# we can just install all dependencies here.
RUN pnpm install --frozen-lockfile
RUN pnpm build:client

FROM node:22-alpine
RUN npm i -g serve@13 pm2@4
USER node
WORKDIR /home/node/client
COPY --from=builder /home/node/build/client/public/ public
COPY --from=builder /home/node/build/client/serve/ ./

ENTRYPOINT [ "./pm2-start.sh" ]
CMD [ "8000" ]
