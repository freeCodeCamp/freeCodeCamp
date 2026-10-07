#!/usr/bin/env bash

set -e

if [[ "$TRAVIS_BRANCH" == "master" && "$TRAVIS_PULL_REQUEST" == "false" && $TRAVIS_JOB_NUMBER =~ ".3" ]]; then
  git diff --name-only $TRAVIS_COMMIT_RANGE | grep -qE '\.md$|^LICENSE$|travis-gh-pages$' && {
    rm -rf ../gh-pages
    git clone -b gh-pages --single-branch https://${GITHUB_TOKEN}@github.com/ajv-validator/ajv.git ../gh-pages
    mkdir -p ../gh-pages/_source
    cp *.md ../gh-pages/_source
    cp LICENSE ../gh-pages/_source
    currentDir=$(pwd)
    cd ../gh-pages
    $currentDir/node_modules/.bin/gh-pages-generator
    # remove logo from README
    sed -i -E "s/<img[^>]+ajv_logo[^>]+>//" index.md
    git config user.email "$GIT_USER_EMAIL"
    git config user.name "$GIT_USER_NAME"
    git add .
    git commit -am "updated by travis build #$TRAVIS_BUILD_NUMBER"
    git push --quiet origin gh-pages > /dev/null 2>&1
  }
fi
