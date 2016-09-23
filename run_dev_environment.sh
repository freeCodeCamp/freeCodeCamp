#!/bin/bash
#------------------------------------------------------------------------------
#     DESCRIPTION : This script is used to run the development environment
#                       - Starts the docker container with the current
#                         directory mounted as volume
#
#          AUTHOR : Murali Paluru (mpaluru@gmail.com)
#
#      CREATED ON : 21-Sep-2016
#------------------------------------------------------------------------------

# DB Related
DEV_DB_IMAGE=mongo
DEV_DB_TAG=3.2.9
FULL_DEV_DB_IMAGE_NAME=${DEV_DB_IMAGE}:${DEV_DB_TAG}
FCC_DB_CONTAINER_NAME=fcc_dev_mongodb

DB_HOST_VOLUME_PATH=$PWD/DATA
DB_CONTAINER_VOLUME_PATH=/data/db

# Web related
USERNAME=mpaluru
DEV_WEB_IMAGE=fcc-dev
DEV_WEB_TAG=latest

FULL_DEV_WEB_IMAGE_NAME=${USERNAME}/${DEV_WEB_IMAGE}:${DEV_WEB_TAG}
FCC_WEB_CONTAINER_NAME=fcc_dev_web

WEB_HOST_VOLUME_PATH=$PWD
WEB_CONTAINER_VOLUME_PATH=/src


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

function check_and_start_db_container()
{
    INSPECT_OUTPUT=`docker inspect -f {{.State.Running}} ${FCC_DB_CONTAINER_NAME} 2>&1`
    if [ $? -eq 0 ]; then
        if [ "${INSPECT_OUTPUT}" == "true" ]; then
            echo "Development db container is already running, not starting again"
            return 0
        else
            echo "Development db container is not running, removing the old one"
            docker rm -f ${FCC_DB_CONTAINER_NAME} 2>&1
            if [ $? -ne 0 ]; then
                echo "Error removing the old container"
                return 1
            fi
        fi
    fi

    echo "Starting the development db container from image: ${FULL_DEV_DB_IMAGE_NAME} ..."
    CID=$(docker run --name ${FCC_DB_CONTAINER_NAME} \
            -itd -v ${DB_HOST_VOLUME_PATH}:${DB_CONTAINER_VOLUME_PATH} \
            ${FULL_DEV_DB_IMAGE_NAME} 2>&1)
    if [ $? -ne 0 ]; then
        echo "Error starting the development db container"
        return 1
    else
        echo "Successfully started the development db container"
    fi
}

function check_and_start_web_container()
{
    INSPECT_OUTPUT=`docker inspect -f {{.State.Running}} ${FCC_WEB_CONTAINER_NAME} 2>&1`
    if [ $? -eq 0 ]; then
        if [ "${INSPECT_OUTPUT}" == "true" ]; then
            echo "Development web container is already running, not starting again"
            return 0
        else
            echo "Development web container is not running, removing the old one"
            docker rm -f ${FCC_WEB_CONTAINER_NAME} 2>&1
            if [ $? -ne 0 ]; then
                echo "Error removing the old container"
                return 1
            fi
        fi
    fi

    echo "Starting the development container from image: ${FULL_DEV_WEB_IMAGE_NAME} ..."
    CID=$(docker run --name ${FCC_WEB_CONTAINER_NAME} \
            -itd -v ${WEB_HOST_VOLUME_PATH}:${WEB_CONTAINER_VOLUME_PATH} \
            -p 2999:2999 \
            -p 3000:3000 \
            -p 3001:3001 \
            -p 3002:3002 \
            --link ${FCC_DB_CONTAINER_NAME}:mongodb \
            ${FULL_DEV_WEB_IMAGE_NAME} 2>&1)
    if [ $? -ne 0 ]; then
        echo "Error starting the development web container"
        return 1
    else
        echo "Successfully started the development web container"
    fi
}


check_and_start_db_container
check_and_start_web_container
