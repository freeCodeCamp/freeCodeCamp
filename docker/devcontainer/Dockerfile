# =============================================================================
# BASE IMAGE - Node, pnpm, system deps, browsers
# Used by: CI sanity checks (install-check job)
# =============================================================================
FROM node:24-bookworm AS base

# System dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    git \
    curl \
    jq \
    gnupg \
    && rm -rf /var/lib/apt/lists/*

# MongoDB shell (for database operations)
RUN curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc | gpg --dearmor -o /usr/share/keyrings/mongodb-archive-keyring.gpg \
    && echo "deb [signed-by=/usr/share/keyrings/mongodb-archive-keyring.gpg] https://repo.mongodb.org/apt/debian bookworm/mongodb-org/8.0 main" > /etc/apt/sources.list.d/mongodb-org-8.0.list \
    && apt-get update \
    && apt-get install -y --no-install-recommends mongodb-mongosh \
    && rm -rf /var/lib/apt/lists/*

# Install pnpm globally
RUN npm install -g pnpm@10

# Install Playwright browsers (system-wide for all users)
ENV PLAYWRIGHT_BROWSERS_PATH=/opt/playwright
# Playwright version should match package.json (^1.47.1)
RUN npx playwright@1.47.1 install --with-deps chromium

# Set up non-root user workspace
USER node
WORKDIR /home/node/fcc

# =============================================================================
# DEVCONTAINER IMAGE - Base + node_modules + Turbo cache
# Used by: Devcontainers, fast CI jobs
# =============================================================================
FROM base AS devcontainer

# Copy package files for dependency installation
COPY --chown=node:node pnpm-lock.yaml pnpm-workspace.yaml package.json turbo.json ./
COPY --chown=node:node api/package.json api/turbo.json api/
COPY --chown=node:node client/package.json client/turbo.json client/
COPY --chown=node:node curriculum/package.json curriculum/turbo.json curriculum/
COPY --chown=node:node e2e/package.json e2e/
COPY --chown=node:node tools/package.json tools/
COPY --chown=node:node packages/ packages/

# Install all dependencies
RUN pnpm install --frozen-lockfile

# Copy source for Turbo cache population
# packages/shared source (for @freecodecamp/shared build)
COPY --chown=node:node packages/shared/src/ packages/shared/src/
COPY --chown=node:node packages/shared/tsconfig.json packages/shared/tsdown.config.js packages/shared/
# curriculum source (for curriculum build)
COPY --chown=node:node curriculum/ curriculum/
# Prisma schema (for client generation)
COPY --chown=node:node api/prisma/ api/prisma/

# Generate Prisma client
RUN cd api && pnpm prisma generate

# Build shared packages and curriculum (populates Turbo cache)
# Note: .env needed for build scripts; will be replaced by host mount at runtime
COPY --chown=node:node sample.env .env
RUN pnpm turbo build --filter=@freecodecamp/shared && \
    pnpm turbo build --filter=@freecodecamp/curriculum

# Clean up source files that will be mounted from host
# Keep: node_modules, .turbo cache, Prisma generated client
# The Turbo cache covers shared + curriculum builds; other builds happen at runtime
RUN rm -rf curriculum/challenges curriculum/english packages/shared/src api/prisma .env

# Reset workdir for container usage
WORKDIR /workspaces/freeCodeCamp
