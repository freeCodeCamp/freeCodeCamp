#!/bin/bash
#------------------------------------------------------------------------------
#     DESCRIPTION : This script is used to build the docker images.
#
#          AUTHOR : Murali Paluru (mpaluru@gmail.com)
#
#      CREATED ON : 21-Sep-2016
#------------------------------------------------------------------------------

# TODO: Check if docker is installed

USERNAME=mpaluru
PROD_IMAGE=fcc-prod


while getopts "v" opt; do
    case $opt in
        v)
            VERBOSE=1
            ;;
        \?)
            echo "Invalid option: -$OPTARG"
            ;;
    esac
done

if [ ! -z ${VERBOSE} ]; then
    set -x
fi

build_docker_image()
{
    IMAGE="$1"
    DOCKERFILE="$2"
    echo "Building docker image: ${IMAGE}"
    docker build -t ${IMAGE} -f ${DOCKERFILE} .
}

DEV_IMAGE=fcc-dev
DEV_TAG=latest
FULL_DEV_IMAGE_NAME=${USERNAME}/${DEV_IMAGE}:${DEV_TAG}
DEV_DOCKERFILE=Dockerfile.dev

build_docker_image ${FULL_DEV_IMAGE_NAME} ${DEV_DOCKERFILE}
