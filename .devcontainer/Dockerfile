ARG VARIANT=22.04
FROM mcr.microsoft.com/devcontainers/base:ubuntu-${VARIANT}

ARG NODE_MAJOR=20
ARG MONGODB_VERSION=6.0.4

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y sudo && \
  sudo apt-get install -y ca-certificates curl gnupg && \
  sudo mkdir -p /etc/apt/keyrings && \
  curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg && \
  echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list && \
  sudo apt-get update && \
  sudo apt-get install nodejs -y && \
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
ENV REACT_APP_CHALLENGE_EDITOR_API_LOCATION=https://$CODESPACE_NAME-3200.$GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN
ENV CHALLENGE_EDITOR_CLIENT_LOCATION=https://$CODESPACE_NAME-3300.$GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN

