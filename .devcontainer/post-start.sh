#!/usr/bin/env bash
set -euo pipefail

# Runs on every start, including a resume. Codespaces resets port visibility
# when a codespace stops, and postCreateCommand does not run again.
[[ -n "${CODESPACE_NAME:-}" ]] || exit 0

for attempt in 1 2; do
  status=0
  err=$(timeout 20 gh codespace ports visibility 3000:public -c "$CODESPACE_NAME" 2>&1) || status=$?

  if [[ $status -eq 0 ]]; then
    printf 'Port 3000 is public, so the client can reach the API.\n'
    printf 'Anybody with the URL can reach it, and the development sign-in\n'
    printf 'route needs no password. Stop the codespace when you finish.\n'
    exit 0
  fi

  if [[ $status -eq 124 ]]; then
    err="gh timed out after 20 seconds"
  fi

  if [[ $status -eq 127 ]]; then
    err="gh is not installed"
    break
  fi

  if [[ $attempt -lt 2 ]]; then
    sleep 5
  fi
done

printf 'gh could not set the port: %s\n' "$err" >&2
cat <<'MSG'

Port 3000 is private, so the client cannot reach the API yet.
Open the Ports panel, right click port 3000, then choose Port Visibility,
then Public.

A public port is reachable by anybody who has the URL, and the development
sign-in route needs no password. Stop the codespace when you finish working.

MSG
