#!/usr/bin/bash

set -e

NUMBER=$RANDOM
curl -i -X GET -H 'Content-Type: application/json' localhost:3000/ > GET
if [[ ! $(cat GET | head -1| cut -f2 -d" ") == "200" || ! $(cat GET | tail -1| cut -f4 -d"\"") == "home page" ]] ; then
exit 1
fi;
curl -i -X POST -H 'Content-Type: application/json' localhost:3000/post/$NUMBER --data {} > POST
if [[ ! $(cat POST | head -1| cut -f2 -d" ") == "201" || ! $(cat POST | tail -1| cut -f4 -d"\"") == $(echo $NUMBER) ]]; then
exit 1
fi;
curl -i -X PUT -H 'Content-Type: application/json' localhost:3000/put/$NUMBER --data {} > PUT
if [[ ! $(cat PUT | head -1| cut -f2 -d" ") == "200" || ! $(cat PUT | tail -1| cut -f4 -d"\"") == $(echo $NUMBER) ]]; then
exit 1
fi;
curl -i -X DELETE -H 'Content-Type: application/json' localhost:3000/delete/$NUMBER --data {} > DELETE
if [[ ! $(cat DELETE | head -1| cut -f2 -d" ") == "204" ]]; then
exit 1
fi;

rm -f GET POST PUT DELETE
