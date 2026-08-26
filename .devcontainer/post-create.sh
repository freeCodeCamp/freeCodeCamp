#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

rsync -a --include='*/' --include='.turbo/***' --exclude='*' /home/node/.cache/fcc/ ./

wait_for_primary() {
  for _ in $(seq 1 30); do
    if mongosh --quiet --eval 'if (!db.hello().isWritablePrimary) quit(1)' >/dev/null 2>&1; then
      return 0
    fi
    sleep 2
  done
  return 1
}

publish_api_port() {
  if gh codespace ports visibility 3000:public -c "$CODESPACE_NAME" >/dev/null 2>&1; then
    printf 'Port 3000 is public. The client can reach the API.\n'
    return
  fi
  cat <<'MSG'

Could not set port 3000 to public automatically.
The client cannot reach the API until you do this by hand:

  1. Open the Ports panel.
  2. Right click port 3000.
  3. Choose Port Visibility, then Public.

MSG
}

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
