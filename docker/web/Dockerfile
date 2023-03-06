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
  # Install and donot ignore the scripts for sharp
  pnpm install --no-progress --ignore-scripts=false &&\
  doppler run --fallback=doppler.encrypted.json --command="npm run create:config" &&\
  doppler run --fallback=doppler.encrypted.json --command="npm run build:curriculum" &&\
  doppler run --fallback=doppler.encrypted.json --command="npm run build:client"

# Use a lightweight image for the serving the files
FROM node:16-alpine
RUN npm i -g serve@13

USER node
WORKDIR /home/node
COPY --from=builder /home/node/build/client/public/ client/public
COPY --from=builder /home/node/build/docker/web/serve.json client/serve.json

EXPOSE 8000
CMD ["serve", "--config", "client/serve.json", "--cors", "--no-clipboard", "--no-port-switching", "-p", "8000", "client/public"]
