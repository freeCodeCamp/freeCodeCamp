#!/bin/bash

# ====================================================
# Script: seed-daily-challenges.sh
# Description: Automatically seeds daily challenges from
# the Dev Playground to the FreeCodeCamp database.
# ====================================================

# 1️⃣ Environment warning
echo "⚠️  You are about to seed daily challenges."
echo "Make sure you are running this on the correct environment (local or production)!"
read -p "Type 'YES' to continue: " CONFIRM

if [ "$CONFIRM" != "YES" ]; then
  echo "Operation aborted by user."
  exit 1
fi

# 2️⃣ Copy .env file if it doesn't exist
if [ ! -f ".env" ]; then
  if [ -f "sample.env" ]; then
    cp sample.env .env
    echo "✅ Copied sample.env to .env"
  else
    echo "❌ sample.env not found! Please create it before running the script."
    exit 1
  fi
else
  echo "✅ .env already exists. Skipping copy."
fi

# 3️⃣ Install dependencies
if command -v pnpm >/dev/null 2>&1; then
  pnpm install
  echo "✅ Dependencies installed successfully"
else
  echo "❌ pnpm not found! Please install pnpm and try again."
  exit 1
fi

# 4️⃣ Navigate to the daily-challenges folder
if [ -d "tools/daily-challenges" ]; then
  cd tools/daily-challenges || exit
  echo "📂 Changed directory to tools/daily-challenges"
else
  echo "❌ Directory tools/daily-challenges not found! Exiting..."
  exit 1
fi

# 5️⃣ Run the seed script
if pnpm run | grep -q "seed-daily-challenges"; then
  pnpm seed-daily-challenges
  echo "✅ Daily challenges seeded successfully!"
else
  echo "❌ 'seed-daily-challenges' script not found in package.json!"
  exit 1
fi
