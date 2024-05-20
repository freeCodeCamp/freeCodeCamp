FROM gitpod/workspace-mongodb:latest

# from https://www.gitpod.io/docs/introduction/languages/javascript#node-versions
RUN bash -c 'VERSION="20" \
  && source $HOME/.nvm/nvm.sh && nvm install $VERSION \
  && nvm use $VERSION && nvm alias default $VERSION \
  && npm i -g pnpm@9'

RUN echo "nvm use default &>/dev/null" >> ~/.bashrc.d/51-nvm-fix
