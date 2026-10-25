#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

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

set -a
# shellcheck disable=SC1091
. ./.env
set +a

pnpm seed
