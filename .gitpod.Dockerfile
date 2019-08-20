FROM gitpod/workspace-full

USER gitpod
WORKDIR $HOME

RUN wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-ubuntu1604-3.6.13.tgz && \
    mkdir -p mongodb && \
    tar xaf mongodb-linux-x86_64-ubuntu1604-3.6.13.tgz -C mongodb --strip-components=1
