# =============================================================================
# BASE - System dependencies, pnpm, mongosh
# =============================================================================
FROM node:24-bookworm AS base

RUN apt-get update && apt-get install -y --no-install-recommends \
    git \
    curl \
    jq \
    gnupg \
    sudo \
    rsync \
    && rm -rf /var/lib/apt/lists/* \
    && echo "node ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers.d/node

RUN curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc | gpg --dearmor -o /usr/share/keyrings/mongodb-archive-keyring.gpg \
    && echo "deb [signed-by=/usr/share/keyrings/mongodb-archive-keyring.gpg] https://repo.mongodb.org/apt/debian bookworm/mongodb-org/8.0 main" > /etc/apt/sources.list.d/mongodb-org-8.0.list \
    && apt-get update \
    && apt-get install -y --no-install-recommends mongodb-mongosh \
    && rm -rf /var/lib/apt/lists/*

# renovate: datasource=npm depName=pnpm
RUN npm install -g pnpm@10.28.1

ENV PLAYWRIGHT_BROWSERS_PATH=/home/node/.cache/ms-playwright
ENV npm_config_store_dir=/home/node/.local/share/pnpm/store

# =============================================================================
# BUILDER - Install dependencies and build to populate caches (disposable)
# =============================================================================
FROM base AS builder

USER node
WORKDIR /home/node/.cache/fcc

# Package manifests only (for pnpm install caching)
COPY --chown=node:node pnpm-lock.yaml pnpm-workspace.yaml package.json turbo.json tsconfig-base.json ./
COPY --chown=node:node api/package.json api/
COPY --chown=node:node client/package.json client/turbo.json client/
COPY --chown=node:node curriculum/package.json curriculum/turbo.json curriculum/
COPY --chown=node:node e2e/package.json e2e/

COPY --chown=node:node tools/challenge-helper-scripts/package.json tools/challenge-helper-scripts/
COPY --chown=node:node tools/challenge-parser/package.json tools/challenge-parser/
COPY --chown=node:node tools/client-plugins/browser-scripts/package.json tools/client-plugins/browser-scripts/
COPY --chown=node:node tools/client-plugins/gatsby-source-challenges/package.json tools/client-plugins/gatsby-source-challenges/
COPY --chown=node:node tools/daily-challenges/package.json tools/daily-challenges/
COPY --chown=node:node tools/scripts/seed/package.json tools/scripts/seed/
COPY --chown=node:node tools/scripts/seed-exams/package.json tools/scripts/seed-exams/

COPY --chown=node:node packages/challenge-builder/package.json packages/challenge-builder/
COPY --chown=node:node packages/challenge-linter/package.json packages/challenge-linter/
COPY --chown=node:node packages/eslint-config/package.json packages/eslint-config/
COPY --chown=node:node packages/shared/package.json packages/shared/

# Prisma schema needed for api postinstall script (prisma generate)
COPY --chown=node:node api/prisma/ api/prisma/
COPY --chown=node:node api/prisma.config.ts api/

# Install dependencies (populates pnpm store)
ENV PUPPETEER_SKIP_DOWNLOAD=true
RUN pnpm install --frozen-lockfile

# Source files for builds
COPY --chown=node:node packages/ packages/
COPY --chown=node:node tools/ tools/
COPY --chown=node:node curriculum/ curriculum/

# Build shared packages and curriculum (populates Turbo cache)
# Source .env so turbo hashes env vars (e.g. FCC_*) identically to runtime
COPY --chown=node:node sample.env .env
RUN set -a && . ./.env && set +a && \
    pnpm turbo build --filter=@freecodecamp/shared && \
    pnpm turbo build --filter=@freecodecamp/curriculum

# =============================================================================
# DEVCONTAINER - Clean image with only pre-populated caches
# Used by: GitHub Codespaces, local VS Code devcontainers
# =============================================================================
FROM base AS devcontainer

LABEL org.opencontainers.image.source=https://github.com/freeCodeCamp/freeCodeCamp \
      org.opencontainers.image.description="Development container for freeCodeCamp with pre-populated caches" \
      org.opencontainers.image.licenses=BSD-3-Clause

USER node

# Copy pre-populated pnpm store (for fast pnpm install --prefer-offline)
COPY --from=builder --chown=node:node /home/node/.local/share/pnpm/store /home/node/.local/share/pnpm/store

# Copy turbo cache only (preserving directory structure for rsync at runtime)
WORKDIR /home/node/.cache/fcc
RUN --mount=type=bind,from=builder,source=/home/node/.cache/fcc,target=/tmp/fcc-build \
    rsync -a --include='*/' --include='.turbo/***' --exclude='*' /tmp/fcc-build/ ./

WORKDIR /workspaces/freeCodeCamp
