#!/bin/sh

npm version minor && npm publish && npm version patch && git push --tags && git push origin master
