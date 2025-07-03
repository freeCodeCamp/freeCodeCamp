FROM gitpod/workspace-mongodb:latest

LABEL org.opencontainers.image.source=https://github.com/freecodecamp/freecodecamp \
  org.opencontainers.image.description="A Gitpod image for the main freeCodeCamp repository" \
  org.opencontainers.image.licenses=BSD-3-Clause

# from https://www.gitpod.io/docs/introduction/languages/javascript#node-versions
RUN bash -c 'VERSION="20" \
  && source $HOME/.nvm/nvm.sh && nvm install $VERSION \
  && nvm use $VERSION && nvm alias default $VERSION \
  && npm i -g pnpm@9 \
  && echo "nvm use default &>/dev/null" >> ~/.bashrc.d/51-nvm-fix \
  && pnpm dlx playwright@1.47.1 install --with-deps chromium'
