#!/bin/bash
set -e

cd "$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )" # scripts/
cd ../ # store.js project root

VERSION=$1
if [[ ! $VERSION =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
	echo "$VERSION is not a valid semver (e.g 2.1.3)"
	exit -1
fi

GIT_BRANCH=`git rev-parse --abbrev-ref HEAD`
if [ "$GIT_BRANCH" != "master" ]; then
	echo "release.sh must be called from branch master (current: $GIT_BRANCH)"
	exit -1
fi

if ! git diff-index --quiet HEAD --; then
	echo "git repo is dirty. Commit all changes before using release.sh"
	exit -1
fi

echo
echo "> Bump package.json version:"
echo
sed -E s/'"version"\: "[0-9]+\.[0-9]+\.[0-9]+"'/'"version"\: "'$VERSION'"'/ package.json \
	> /tmp/package.json && \
	mv /tmp/package.json package.json
cat package.json | grep $VERSION -C 1

echo
echo "> Bump store-engine.js version:"
echo
sed -E s/"version\: '[0-9]+\.[0-9]+\.[0-9]+'"/"version\: '$VERSION'"/ src/store-engine.js \
	> /tmp/store-engine.js && \
	mv /tmp/store-engine.js src/store-engine.js
cat src/store-engine.js | grep $VERSION -C 1

if [[ ! `git diff --stat` =~ "2 files changed, 2 insertions(+), 2 deletions(-)" ]]; then
	echo "WARNING! Expected exactly 2 changes in 2 files after replacing version number. Bailing! (check git status and git diff)"
	exit -1
fi

echo
while true; do
    read -p "> Ready to build, commit, tag and release v$VERSION? (y/n): " yn
    case $yn in
        [Yy]* )   break;;
        [NnQq]* ) exit;;
		* ) echo "Please answer yes or no.";;
    esac
done

echo
echo "> Build dists"
node scripts/compile-builds.js

echo
echo "> git commit/push/tag/push --tags"
set -x
git add dist/* package.json src/store-engine.js
git commit -m "v$VERSION"
git push $ORIGIN $BRANCH
git tag -a "v$VERSION" -m "Tag v$VERSION"
git push --tags
set +x

echo
echo "> npm publish"
npm publish
