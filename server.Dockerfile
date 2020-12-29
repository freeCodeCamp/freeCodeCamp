FROM node:12.20
USER node
WORKDIR /home/node
COPY --chown=node:node . .

# TODO: only install the bits we need, rather than client, root etc. etc.
RUN npm ci

WORKDIR /home/node/api-server

CMD ["npm", "start"]

# TODO: can we remove the direct dependence on the curriculum? For instance, by
# generating a small config file with the certs in?

# Also, if we make sure that all the prod dependencies are inside the api-server
# we can get away with only installing them, and requiring specific files.

# TODO: if we set the pipelines to fail on standard error, they fail. Is
# something sending messages to the error stream for some reason?
