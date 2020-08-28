#!/bin/bash

timeout -k 6m 5m npm run develop

case $? in

  124 | 137)
    exit 0
    ;;

  *)
    exit 1
    ;;
esac
