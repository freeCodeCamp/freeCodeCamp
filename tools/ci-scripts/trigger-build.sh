#!/usr/bin/env bash
pushd "$TRAVIS_BUILD_DIR"

if [ -n "$DOCKER_PUSH_API_TOKEN" ]
then
  git clone https://github.com/"$DOCKER_PUSH_REPO".git docker-push-repo
  cd docker-push-repo
  git submodule update --init --remote --recursive
  git submodule status
  git add freecodecamp
  git -c user.name="$DOCKER_PUSH_USER" -c user.email='travis' \
    commit -m 'chore(ci): Travis CI - bump submodule'
  git push https://"$DOCKER_PUSH_USER":"$DOCKER_PUSH_API_TOKEN"@github.com/"$DOCKER_PUSH_REPO".git master
fi
popd
