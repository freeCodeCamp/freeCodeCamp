FROM gitpod/workspace-mongodb as base

FROM gitpod/workspace-full as requirements
RUN sudo apt-get update
# Install Cypress-base dependencies
RUN sudo apt-get install -y \
    libgtk2.0-0 \
    libgtk-3-0
RUN sudo DEBIAN_FRONTEND=noninteractive apt-get install -yq \
    libgbm-dev \
    libnotify-dev
RUN sudo apt-get install -y \
    libgconf-2-4 \
    libnss3 \
    libxss1
RUN sudo apt-get install -y \
    libasound2 \
    libxtst6 \
    xauth \
    xvfb


# Puppeteer
RUN sudo apt-get update && \
    sudo apt-get install -y \
        ca-certificates \
        fonts-liberation \
        libappindicator3-1 \
        libatk-bridge2.0-0 \
        libatk1.0-0 \
        libc6 \
        libcairo2 \
        libcups2 \
        libdbus-1-3 \
        libexpat1 \
        libfontconfig1 \
        libgbm1 \
        libgcc1 \
        libglib2.0-0 \
        libnspr4 \
        libpango-1.0-0 \
        libpangocairo-1.0-0 \
        libstdc++6 \
        libx11-6 \
        libx11-xcb1 \
        libxcb1 \
        libxcomposite1 \
        libxcursor1 \
        libxdamage1 \
        libxext6 \
        libxfixes3 \
        libxi6 \
        libxrandr2 \
        libxrender1 \
        lsb-release \
        wget \
        xdg-utils && \
    sudo rm -rf /var/lib/apt/lists/*
