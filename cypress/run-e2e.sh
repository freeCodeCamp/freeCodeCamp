#!/bin/bash

gastby_pid=''
api_pid=''

application_host='http://localhost:8000'
cypress_cmd='cypress:open'

finally() {
  echo "End to end bash script exiting gracefully"

  local exit_code="${1:-0}"
  # This is the clean up.
  # Find any node processes running from within the client dir
  local hanging_client_processes=$(ps aux | grep -v grep | grep client/node_modules | awk '{print $2}')
  local hanging_api_processes=$(ps aux | grep -v grep | grep api-server/node_modules | awk '{print $2}')
  local hanging_server_processes=$(ps aux | grep -v grep | grep 'node production-start.js' | awk '{print $2}')

  # Send kill signal to the processes
  if [ ${#hanging_api_processes} -gt "0" ];  then
    kill -9 $hanging_api_processes &>/dev/null
  fi
  if [ ${#hanging_client_processes} -gt "0" ]; then
    kill -9 $hanging_client_processes &>/dev/null
  fi
  if [ ${#hanging_server_processes} -gt "0" ]; then
    kill -9 $hanging_server_processes &>/dev/null
  fi

  kill -9 $gastby_pid $api_pid &>/dev/null

  echo "Finally exiting with a status code of ${exit_code}"
  exit "${exit_code}"
}

trap finally SIGINT

run_development_application() {
  cd client
  npm run stand-alone &
  gastby_pid=$!


  cd ../api-server
  npm start &
  api_pid=$!

  cypress_cmd='cypress:run'
  cd ../
}

run_production_application() {
  cd client
  npm run build
  npm run serve &
  gastby_pid=$!

  cd ../

  application_host='http://localhost:9000/'
  cypress_cmd='cypress:run'
}

if [ "$NODE_ENV" = "production" ]; then
  run_production_application
else
  run_development_application
fi

while true; do
  curl $application_host &>/dev/null
  curl_exit_code=$?

  if [ $curl_exit_code = "0" ]; then
    break
  else
    sleep 10
  fi
done

npm run $cypress_cmd

finally $?
