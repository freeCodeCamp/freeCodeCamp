#!/bin/bash

gtimeout -k 8m 7m npm run develop

case $? in

  124 | 137)
    echo "npm run develop runs successfully"
    ;;

  *)
    exit 1
    ;;
esac

npm run build
