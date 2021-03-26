FROM gitpod/workspace-full

RUN sudo apt-get update

# Install MongoDB
# Source: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu-tarball/#install-mongodb-community-edition
RUN mkdir -p /tmp/mongodb && \
    cd /tmp/mongodb && \
    wget -qO - https://www.mongodb.org/static/pgp/server-4.0.asc | sudo apt-key add - && \
    echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list && \
    sudo apt-get update && \
    sudo apt-get install -y mongodb-org=4.0 mongodb-org-server=4.0 mongodb-org-shell=4.0 mongodb-org-mongos=4.0 mongodb-org-tools=4.0 && \

