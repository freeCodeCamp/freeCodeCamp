FROM gitpod/workspace-full

RUN sudo apt-get update
RUN sudo apt-get install libcurl4 openssl liblzma5 -y

# Install MongoDB
# Source: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu-tarball/#install-mongodb-community-edition
RUN mkdir -p /tmp/mongodb && \
    cd /tmp/mongodb && \
    wget -O mongodb.tgz https://fastdl.mongodb.org/linux/mongodb-shell-linux-x86_64-ubuntu2004-4.4.4.tgz && \
    tar -zxvf mongodb.tgz && \
    cd mongodb-* && \
    sudo cp bin/* /usr/local/bin/ && \
    rm -rf /tmp/mongodb && \
    sudo mkdir -p /data/db && \
    sudo chown gitpod:gitpod -R /data/db
