#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

sudo chown node:node node_modules

[[ -f .env ]] || cp sample.env .env

set_env() {
  local key=$1 value=$2 tmp
  tmp=$(mktemp)
  trap 'rm -f "$tmp"' RETURN
  awk -v k="$key" -v v="$value" '
    index($0, k "=") == 1 { print k "=" v; found = 1; next }
    { print }
    END { if (!found) print k "=" v }
  ' .env >"$tmp"
  cat "$tmp" >.env
}

if [[ -n "${CODESPACE_NAME:-}" ]]; then
  domain=${GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN:-app.github.dev}
  set_env HOME_LOCATION "https://${CODESPACE_NAME}-8000.${domain}"
  set_env API_LOCATION "https://${CODESPACE_NAME}-3000.${domain}"
  printf 'Codespace detected. HOME_LOCATION and API_LOCATION in .env now use %s.\n' "$domain"
fi
