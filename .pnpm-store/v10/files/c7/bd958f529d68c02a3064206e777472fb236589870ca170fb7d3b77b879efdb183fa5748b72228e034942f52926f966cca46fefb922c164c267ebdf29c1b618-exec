#!/bin/bash 

set -e

PATH=./node_modules/.bin:${PATH}
CURRENT_VERSION=$(jq -r .version package.json)

case ${1} in
  Major | MAJOR | major)
    LEVEL=major
    ;;

  Minor | MINOR | minor)
    LEVEL=minor
    ;;

  Patch | PATCH | patch)
    LEVEL=patch
    ;;

  *)
    LEVEL=patch
    ;;
esac

NEW_VERSION=$(semver -i ${LEVEL} ${CURRENT_VERSION})
echo "${CURRENT_VERSION} => ${NEW_VERSION}"
read -n 1 -s -r -p "Press any key to continue (ctrl+c to abort)..."
echo ""

echo "Patching package.json..."
cat package.json | \
  jq --arg vers "${NEW_VERSION}" '.version = $vers' | \
  tee package.json 1>/dev/null

echo "Patching lib/meta.js ..."
SED_SCRIPT=$(printf 's/%s/%s/' ${CURRENT_VERSION//\./\\.} ${NEW_VERSION//\./\\.})
cat ./lib/meta.js | \
  sed -e ${SED_SCRIPT} | \
  tee ./lib/meta.js 1>/dev/null

echo "Done."
