#! /usr/bin/env bash

set -euo pipefail

# To make it work on OSX (provided gnu-sed in installed)
if type gsed 2> /dev/null
then
  alias sed=gsed
fi


version=$(jq --raw-output ' .version ' "package.json")
date=$(date +%Y-%m-%d)

sed \
  --regexp-extended \
  --in-place="" \
  "s$^## \[Unreleased\]$\## [Unreleased\]\n\n\n## [${version}] - ${date}$" \
  CHANGELOG.md

git add CHANGELOG.md
