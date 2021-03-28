FROM gitpod/workspace-full

#RUN sudo apt-get install libcurl4 openssl liblzma5 -y

# Install MongoDB
# Source: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/
RUN mkdir -p /tmp/mongodb && \
    cd /tmp/mongodb && \
    wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add - && \
    echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list && \
    sudo apt-get update && \
    sudo apt-get install -y mongodb-org-server=4.4.4
