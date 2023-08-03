# Use node 16 to build the application
FROM node:16-buster AS builder

# Install doppler CLI
RUN curl -Ls --tlsv1.2 --proto "=https" --retry 3 https://cli.doppler.com/install.sh | sh -s -- --verify-signature

# Set a non-root user
USER node
WORKDIR /home/node/build

# Copy the application source code
COPY --chown=node:node . .

# Pass `DOPPLER_TOKEN` at build time to create an encrypted snapshot for high-availability
ARG DOPPLER_TOKEN
RUN \
  doppler secrets download doppler.encrypted.json && \
  npm install -g pnpm && \
  pnpm install --no-progress --ignore-scripts=false && \
  doppler run --fallback=doppler.encrypted.json --command="npm run create:config" && \
  doppler run --fallback=doppler.encrypted.json --command="npm run build:curriculum" && \
  doppler run --fallback=doppler.encrypted.json --command="npm run build:client"

# Use a lightweight image for serving the files
FROM node:16-alpine

# Install serve globally
RUN npm i -g serve@13

# Set a non-root user
USER node
WORKDIR /home/node

# Copy the built client files and serve.json from the builder stage
COPY --from=builder /home/node/build/client/public/ client/public
COPY --from=builder /home/node/build/docker/web/serve.json client/serve.json

# Expose port 8000
EXPOSE 8000

# Run the application using serve
CMD ["serve", "--config", "client/serve.json", "--cors", "--no-clipboard", "--no-port-switching", "-p", "8000", "client/public"]
