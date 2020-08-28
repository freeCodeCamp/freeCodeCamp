#!/bin/bash

timeout -k 8m 7m npm run develop

case $? in

  124 | 137)
    echo "`npm run development` runs successfully"
    ;;

  *)
    exit 1
    ;;
esac

