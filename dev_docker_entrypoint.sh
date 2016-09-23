#!/bin/bash
#------------------------------------------------------------------------------
#     DESCRIPTION : This is the entrypoint script to run inside the container
#
#          AUTHOR : Murali Paluru (mpaluru@gmail.com)
#
#      CREATED ON : 21-Sep-2016
#------------------------------------------------------------------------------


BACKEND_MAIN=/src/server/server.js

if [ ! -f ${BACKEND_MAIN} ]; then
    echo "Error: Coudln't find ${BACKEND_MAIN}. I guess the source code directory was not mounted properly"
fi

if [ ! -f /src/.env ]; then
    echo "No environment settings available, copying sample.env to .env. You can edit .env file to customize."
    cp /src/sample.env /src/.env
    sed -i 's/localhost/mongodb/' /src/.env
fi

if [ ! -L /src/node_modules ]; then
    ln -sv /opt/freecodecamp/cache/node_modules /src/node_modules
else
    echo "node_modules already present, skipping"
fi

if [ ! -L /src/public/bower_components ]; then
    ln -sv /opt/freecodecamp/cache/bower_components /src/public/bower_components
else
    echo "bower_components already present, skipping"
fi

SEEDED=/src/DATA/.already_seeded
if [ ! -f ${SEEDED} ]; then
    echo "Seeding the database"
    npm run only-once
    touch ${SEEDED}
else
    echo "Database already seeded, skipping"
fi

gulp
