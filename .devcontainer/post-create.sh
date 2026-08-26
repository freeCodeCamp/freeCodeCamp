#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

publish_api_port() {
  if gh codespace ports visibility 3000:public -c "$CODESPACE_NAME" >/dev/null 2>&1; then
    printf 'Port 3000 is public. The client can reach the API.\n'
    return
  fi
  cat <<'MSG'

Port 3000 is private, so the client cannot reach the API yet.
The token a codespace provides does not carry the "codespace" scope, so this
step usually needs you. Open the Ports panel, right click port 3000, then
choose Port Visibility, then Public.

To let this run for you next time: gh auth login -s codespace

A public port is reachable by anybody who has the URL, and the development
sign-in route needs no password. Stop the codespace when you finish working.

MSG
}

wait_for_primary() {
  for _ in $(seq 1 30); do
    if mongosh --quiet --eval 'if (!db.hello().isWritablePrimary) quit(1)' >/dev/null 2>&1; then
      return 0
    fi
    sleep 2
  done
  return 1
}

rsync -a --include='*/' --include='.turbo/***' --exclude='*' /home/node/.cache/fcc/ ./

.devcontainer/codespace-env.sh

if ! wait_for_primary; then
  printf 'MongoDB did not become writable. Run "docker compose ps" to inspect the services.\n' >&2
  exit 1
fi

if [[ -n "${CODESPACE_NAME:-}" ]]; then
  publish_api_port
fi

set -a
# shellcheck disable=SC1091
. ./.env
set +a

pnpm seed
