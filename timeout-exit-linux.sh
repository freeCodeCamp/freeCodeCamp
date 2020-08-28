#!/bin/bash

timeout -k 8m 7m npm run develop

case $? in

  124 | 137)
    exit 0
    ;;

  *)
    exit 1
    ;;
esac

timeout -k 11m 10m npm run build

case $? in

  124 | 137)
    exit 0
    ;;

  *)
    exit 1
    ;;
esac
