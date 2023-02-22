ARG VARIANT=20.04
FROM mcr.microsoft.com/devcontainers/base:ubuntu-${VARIANT}

ARG NODE_VERSION=18
ARG MONGODB_VERSION=6.0.4

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y sudo && \
    curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | sudo -E bash - && \
    sudo apt-get install -y nodejs && \
    sudo apt-get install -y libcurl4 openssl liblzma5 && \
    mkdir -p /tmp/mongodb && \
    cd /tmp/mongodb && \
    wget -qOmongodb.tgz https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-ubuntu2004-${MONGODB_VERSION}.tgz && \
    tar -zxvf mongodb.tgz && \
    cd mongodb-* && \
    sudo cp bin/* /usr/local/bin/ && \
    rm -rf /tmp/mongodb && \
    sudo mkdir -p /data/db && \
    sudo chown vscode:vscode -R /data/db

# Setup ENV
ENV COOKIE_DOMAIN=github.dev
ENV HOME_LOCATION=https://$CODESPACE_NAME-8000.$GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN
ENV API_LOCATION=https://$CODESPACE_NAME-3000.$GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN
ENV CYPRESS_BASE_URL=https://$CODESPACE_NAME-8000.$GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN
ENV REACT_APP_CHALLENGE_EDITOR_API_LOCATION=https://$CODESPACE_NAME-3200.$GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN
ENV CHALLENGE_EDITOR_CLIENT_LOCATION=https://$CODESPACE_NAME-3300.$GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN

