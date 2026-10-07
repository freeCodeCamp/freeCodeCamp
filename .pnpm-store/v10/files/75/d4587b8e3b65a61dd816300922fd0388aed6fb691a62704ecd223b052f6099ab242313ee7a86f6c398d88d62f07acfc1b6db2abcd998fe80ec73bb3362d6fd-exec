#!/bin/sh

set -e

cd ./test/ts;

if (echo "${npm_config_user_agent}" | grep "yarn"); then
  export RUNNER="yarn";
else
  export RUNNER="npx";
fi

test ./to-file.ts -ot ./to-file.es5.cjs    || ("${RUNNER}" tsc --skipLibCheck --target es5                      ./to-file.ts && mv ./to-file.js ./to-file.es5.cjs);
test ./to-file.ts -ot ./to-file.es6.mjs    || ("${RUNNER}" tsc --skipLibCheck --target es6                      ./to-file.ts && mv ./to-file.js ./to-file.es6.mjs);
test ./to-file.ts -ot ./to-file.es6.cjs    || ("${RUNNER}" tsc --skipLibCheck --target es6    --module commonjs ./to-file.ts && mv ./to-file.js ./to-file.es6.cjs);
test ./to-file.ts -ot ./to-file.es2017.mjs || ("${RUNNER}" tsc --skipLibCheck --target es2017                   ./to-file.ts && mv ./to-file.js ./to-file.es2017.mjs);
test ./to-file.ts -ot ./to-file.es2017.cjs || ("${RUNNER}" tsc --skipLibCheck --target es2017 --module commonjs ./to-file.ts && mv ./to-file.js ./to-file.es2017.cjs);
test ./to-file.ts -ot ./to-file.esnext.mjs || ("${RUNNER}" tsc --skipLibCheck --target esnext --module esnext   ./to-file.ts && mv ./to-file.js ./to-file.esnext.mjs);
test ./to-file.ts -ot ./to-file.esnext.cjs || ("${RUNNER}" tsc --skipLibCheck --target esnext --module commonjs ./to-file.ts && mv ./to-file.js ./to-file.esnext.cjs);
