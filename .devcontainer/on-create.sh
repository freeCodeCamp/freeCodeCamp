#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

sudo chown node:node node_modules

[[ -f .env ]] || cp sample.env .env
