#!/usr/bin/env bash

# Usage instructions for cloning and setting up sparse-checkout
# 1. Clone the repository sparsely:
#    git clone --filter=blob:none --sparse https://github.com/freeCodeCamp/freeCodeCamp.git

# 2. Navigate into the repository directory:
#    cd freeCodeCamp

# 3. Initialize sparse-checkout to include the script:
#    git sparse-checkout init --no-cone
#    git sparse-checkout add bootstrap.sh

# 4. Check out the main branch:
#    git checkout main

# 5. Run the script with the desired operation:
#    ./bootstrap.sh --checkout <language1> <language2> ...
#    ./bootstrap.sh --checkout-all

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration for language folders
LANGUAGE_FOLDERS=(
  "arabic"
  "chinese"
  "chinese-traditional"
  "english"
  "espanol"
  "german"
  "italian"
  "japanese"
  "korean"
  "portuguese"
  "swahili"
  "ukrainian"
)

# Function to initialize sparse-checkout with the base configuration
initialize_sparse_checkout() {
  echo -e "${BLUE} :> Initializing sparse-checkout with base configuration...${NC}"
  git sparse-checkout init --no-cone || {
    echo -e "${RED} :> [ERROR] Failed to initialize sparse-checkout.${NC}"
    exit 1
  }
  echo -e "${GREEN} :> Sparse-checkout initialized.${NC}"
}

# Function to check out specific language folders
checkout_languages() {
  echo -e "${BLUE} :> Checking out language folders: $*...${NC}"

  git sparse-checkout set "/*" || {
    echo -e "${RED} :> [ERROR] Failed to set sparse-checkout.${NC}"
    exit 1
  }

  git sparse-checkout add \
    "!/curriculum/challenges" \
    "!/curriculum/dictionaries" \
    "/curriculum/challenges/meta" \
    "/curriculum/challenges/.markdownlint.yaml" ||
    {
      echo -e "${RED} :> [ERROR] Failed to remove language folders: $lang.${NC}"
      exit 1
    }

  for language in "$@"; do
    found=false
    for lang in "${LANGUAGE_FOLDERS[@]}"; do
      if [[ "$lang" == "$language" ]]; then
        found=true
        git sparse-checkout add "/curriculum/challenges/$language" "/curriculum/dictionaries/$language" || {
          echo -e "${RED} :> [ERROR] Failed to add language folders: $language.${NC}"
          exit 1
        }
        break
      fi
    done
    if [[ $found == false ]]; then
      echo -e "${YELLOW} :> [WARNING] Invalid language specified: $language. Skipping...${NC}"
    fi
  done

  echo -e "${GREEN} :> Checkout of specified languages completed.${NC}"
}

# Function to check out all language folders
checkout_all_languages() {
  echo -e "${BLUE} :> Checking out all language folders...${NC}"
  git sparse-checkout disable || {
    echo -e "${RED} :> [ERROR] Failed to disable sparse-checkout.${NC}"
    exit 1
  }
  echo -e "${GREEN} :> Checkout of all language folders completed.${NC}"
}

# Function to ensure the repository is in a clean state
check_clean_state() {
  output=$(git status --porcelain)
  if [[ -n ${output} ]]; then
    echo -e "${RED} :> [ERROR] Uncommitted changes exist. Please commit or stash your changes before running the script.${NC}"
    exit 1
  fi
}

# Function to print usage information
usage() {
  echo -e "${BLUE}Usage:${NC}"
  echo "$0 [--checkout <language1> <language2> ... | --checkout-all | --help ]"
  echo -e "${BLUE}Options:${NC}"
  echo -e "${BLUE}  --checkout <language1> <language2> ...   Check out the specified language folders${NC}"
  echo -e "${BLUE}  --checkout-all                           Check out all language folders${NC}"
  echo -e "${BLUE}  --help, -h                               Display this help message${NC}"
}

# Main script logic
main() {
  OPERATION=$1
  shift

  # Ensure the script is being run inside the repository directory
  if [ ! -d ".git" ]; then
    echo -e "${RED} :> [ERROR] This script must be run inside a Git repository.${NC}"
    exit 1
  fi

  check_clean_state

  case $OPERATION in
  --initialize | --init)
    initialize_sparse_checkout
    ;;
  --checkout)
    if [ $# -eq 0 ]; then
      echo -e "${RED} :> [ERROR] No languages specified.${NC}"
      usage
      exit 1
    fi
    checkout_languages "$@"
    ;;
  --checkout-all)
    checkout_all_languages
    ;;
  --help | -h | '')
    usage
    ;;
  *)
    echo -e "${RED} :> [ERROR] Invalid option.${NC}"
    usage
    ;;
  esac
}

main "$@"
