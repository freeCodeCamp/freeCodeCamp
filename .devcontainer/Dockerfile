FROM ubtuntu:22.04

RUN apt-get update && apt-get install -y sudo

# Install Node LTS
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
RUN sudo apt-get install -y nodejs

# Install MongoDB
# Source: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu-tarball/#install-mongodb-community-edition
RUN mkdir -p /tmp/mongodb && \
    cd /tmp/mongodb && \
    wget -qOmongodb.tgz https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-ubuntu2004-5.0.2.tgz && \
    tar xf mongodb.tgz && \
    cd mongodb-* && \
    sudo cp bin/* /usr/local/bin/ && \
    rm -rf /tmp/mongodb && \
    sudo mkdir -p /data/db && \
    sudo chown camper:camper -R /data/db


# Setup ENV
ENV COOKIE_DOMAIN=github.dev
ENV HOME_LOCATION=https://$CODESPACE_NAME-8000.$GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN
ENV API_LOCATION=https://$CODESPACE_NAME-3000.$GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN
ENV CYPRESS_BASE_URL=https://$CODESPACE_NAME-8000.$GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN
ENV REACT_APP_CHALLENGE_EDITOR_API_LOCATION=https://$CODESPACE_NAME-3200.$GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN
ENV CHALLENGE_EDITOR_CLIENT_LOCATION=https://$CODESPACE_NAME-3300.$GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN

# Start mongodb in background
RUN mongod --dbpath /workspace/data &

RUN cp sample.env .env
RUN npm ci && npm run seed
RUN npm run create:config && npm run build:curriculum
RUN npm run develop
