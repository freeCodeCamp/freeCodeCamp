npm run build
npm run doc
npm i
git clone --depth=10 --branch=master git@github.com:lodash-archive/lodash-cli.git ./node_modules/lodash-cli
mkdir -p ./node_modules/lodash-cli/node_modules/lodash; cd $_; cp ../../../../lodash.js ./lodash.js; cp ../../../../package.json ./package.json
cd ../../; npm i --production; cd ../../
node ./node_modules/lodash-cli/bin/lodash core exports=node -o ./npm-package/core.js
node ./node_modules/lodash-cli/bin/lodash modularize exports=node -o ./npm-package
cp lodash.js npm-package/lodash.js
cp dist/lodash.min.js npm-package/lodash.min.js
cp LICENSE npm-package/LICENSE

1. Clone two repos
Bump lodash version in package.json, readme, package=locak, lodash.js
npm run build
npm run doc

2. update mappings in ldoash-cli
3. copy ldoash into lodash-cli node modules and package json.

node ./node_modules/lodash-cli/bin/lodash core exports=node -o ./npm-package/core.js
node ./node_modules/lodash-cli/bin/lodash modularize exports=node -o ./npm-package



1. Clone the two repositories:
```sh
$ git clone https://github.com/lodash/lodash.git
$ git clone https://github.com/bnjmnt4n/lodash-cli.git
```
2. Update lodash-cli to accomdate changes in lodash source. This can typically involve adding new function dependency mappings in lib/mappings.js. Sometimes, additional changes might be needed for more involved functions.
3. In the lodash repository, update references to the lodash version in README.md, lodash.js, package.jsona nd package-lock.json
4. Run:
```sh
npm run build
npm run doc
node ../lodash-cli/bin/lodash core -o ./dist/lodash.core.js
```
5. Add a commit and tag the release
mkdir ../lodash-temp
cp lodash.js dist/lodash.min.js dist/lodash.core.js dist/lodash.core.min.js ../lodash-temp/
node ../lodash-cli/bin/lodash modularize exports=node -o .
cp ../lodash-temp/lodash.core.js core.js
cp ../lodash-temp/lodash.core.min.js core.min.js
cp ../lodash-temp/lodash.js lodash.js
cp ../lodash-temp/lodash.min.js lodash.min.js

❯ node ../lodash-cli/bin/lodash modularize exports=es -o .
