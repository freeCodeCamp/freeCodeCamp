#!/bin/bash

SOURCE_REPO=freeCodeCamp
DST_REPO=FreeCodeCampCopy
SOURCE_REPO_DIR=/workspaces/${SOURCE_REPO}
DST_REPO_DIR=/workspaces/${DST_REPO}
TMP_REPO_DIR=/tmp/temp_repo

rm -rf "${TMP_REPO_DIR}" 

# Cloning source repo with depth 3 so that git-filter-repo doesn't take too long
git clone "${SOURCE_REPO_DIR}" "${TMP_REPO_DIR}" --no-local --depth 3


cd "${TMP_REPO_DIR}"


git-filter-repo --path README.md --path curriculum/ --path shared --path .github --force --source "${TMP_REPO_DIR}" --target "${DST_REPO_DIR}"


cd "${DST_REPO_DIR}"
git pull

#Normally we'd have to run differnet commands but the source branch of SOURCE_REPO_DIR is the sample branch, not main(I messed up :P)
git checkout main #This branch get's the changes from git-filter-repo

git rebase sample

git push --set-upstream origin main