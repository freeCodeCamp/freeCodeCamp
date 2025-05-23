#!/bin/bash

# Start MongoDB (adjust path or use systemctl if available)
if command -v systemctl &> /dev/null; then
  echo "Starting MongoDB using systemctl..."
  sudo systemctl start mongod
else
  echo "Starting MongoDB manually..."
  mongod --dbpath /data/db &
fi

# Wait a bit to make sure Mongo starts
sleep 2

# Start the development server
echo "Starting the development server..."
pnpm run develop
