# =============================================================================
# BASE - System dependencies, pnpm, mongosh
# =============================================================================
FROM node:26.13.1-bookworm@sha256:b7087bc4d973034b30854b378ba107f9fab622b47514cb7e2592e41b8bab8d49 AS base

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
    && curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg -o /usr/share/keyrings/githubcli-archive-keyring.gpg \
    && chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg \
    && echo "deb [signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" > /etc/apt/sources.list.d/github-cli.list \
    && apt-get update \
    && apt-get install -y --no-install-recommends mongodb-mongosh gh \
    && rm -rf /var/lib/apt/lists/*

RUN --mount=type=bind,source=package.json,target=/tmp/package.json \
    npm install -g "pnpm@$(node -p 'require("/tmp/package.json").packageManager.split("@")[1]')"

ENV PLAYWRIGHT_BROWSERS_PATH=/home/node/.cache/ms-playwright
ENV pnpm_config_store_dir=/home/node/.local/share/pnpm/store

# =============================================================================
# BUILDER - Install dependencies to populate the pnpm store (disposable)
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
COPY --chown=node:node packages/oxlint-config/package.json packages/oxlint-config/
COPY --chown=node:node packages/shared/package.json packages/shared/

# Prisma schema needed for api postinstall script (prisma generate)
COPY --chown=node:node api/prisma/ api/prisma/
COPY --chown=node:node api/prisma.config.ts api/

# Install dependencies (populates pnpm store)
ENV PUPPETEER_SKIP_DOWNLOAD=true
RUN pnpm install --frozen-lockfile

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

# Older post-create.sh copies rsync from this folder; keep it, empty
RUN mkdir -p /home/node/.cache/fcc

WORKDIR /workspaces/freeCodeCamp
