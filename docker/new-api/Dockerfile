# Use node:20-bookworm image as the base for the builder stage
FROM node:20-bookworm AS builder

# Update package list and install jq
RUN apt-get update && apt-get install -y jq

# Install pnpm globally
RUN npm i -g pnpm@9

# Switch to the non-root user provided by the node image
USER node

# Set the working directory
WORKDIR /home/node/build

# Copy all files to the working directory with the correct ownership
COPY --chown=node:node *.* .
COPY --chown=node:node api/ api/
COPY --chown=node:node shared/ shared/
COPY --chown=node:node tools/ tools/
COPY --chown=node:node curriculum/ curriculum/
COPY --chown=node:node client/ client/

# Configure pnpm to not dedupe peer dependencies
RUN pnpm config set dedupe-peer-dependents false

# Install necessary dependencies and ignore scripts
RUN pnpm install -F=api -F=curriculum -F tools/scripts/build -F challenge-parser \
  --frozen-lockfile --ignore-scripts

# Generate the Prisma client
RUN cd api && npx prisma@$(jq -r '.devDependencies.prisma' < package.json) generate

# Set environment variables for the build process
ARG SHOW_UPCOMING_CHANGES=false
ENV SHOW_UPCOMING_CHANGES=$SHOW_UPCOMING_CHANGES
ARG SHOW_NEW_CURRICULUM=true
ENV SHOW_NEW_CURRICULUM=$SHOW_NEW_CURRICULUM

# Build the curriculum and the API
RUN pnpm build:curriculum
RUN pnpm -F=api build

# Use node:20-bookworm image as the base for the deps stage
FROM node:20-bookworm AS deps

# Update package list and install jq
RUN apt-get update && apt-get install -y jq

# Set the working directory
WORKDIR /home/node/build

# Copy pnpm configuration files
COPY --chown=node:node pnpm*.yaml .
COPY --chown=node:node api/ api/
COPY --chown=node:node shared/ shared/

# Install pnpm globally
RUN npm i -g pnpm@9

# Configure pnpm to not dedupe peer dependencies
RUN pnpm config set dedupe-peer-dependents false

# Install production dependencies and ignore scripts
RUN pnpm install --prod --ignore-scripts -F=shared -F=api --frozen-lockfile

# Generate the Prisma client
RUN cd api && npx prisma@$(jq -r '.devDependencies.prisma' < package.json) generate

# Use node:20-bookworm image as the base for the final stage
FROM node:20-bookworm

# Install pm2 globally
RUN npm i -g pm2@4

# Switch to the non-root user provided by the node image
USER node

# Set the working directory
WORKDIR /home/node/fcc

# Copy the build artifacts from the builder stage
COPY --from=builder --chown=node:node /home/node/build/api/dist/ ./
COPY --from=builder --chown=node:node /home/node/build/api/package.json api/
COPY --from=builder --chown=node:node /home/node/build/shared/config/curriculum.json shared/config/

# Copy the node_modules from the deps stage
COPY --from=deps --chown=node:node /home/node/build/node_modules/ node_modules/
COPY --from=deps --chown=node:node /home/node/build/shared/node_modules/ shared/node_modules/
COPY --from=deps --chown=node:node /home/node/build/api/node_modules/ api/node_modules/

# Define the command to run the application
CMD ["pm2-runtime", "start", "-i", "0", "api/src/server.js"]
