#!/bin/sh

# Recreate config file
envConfigFilePath=$1

rm -rf $envConfigFilePath
touch $envConfigFilePath

# Add assignment 
echo "window._env_ = {" >> $envConfigFilePath


while IFS='=' read -r varname varvalue || [ -n "$varname" ]; do
  value=""
  if [ ! -z $(printenv | grep "$varname=") ]; then
    eval "value=\"\${$varname}\""
  else
  # Otherwise use value from .env file
    value="$varvalue"
  fi
  
  echo "  $varname: \"$value\"," >> "$envConfigFilePath"
done < ".env"

echo "}" >> "$envConfigFilePath"
