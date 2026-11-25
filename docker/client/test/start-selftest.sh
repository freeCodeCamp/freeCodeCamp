#!/usr/bin/env bash
set -euo pipefail
shopt -s inherit_errexit

here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
image_dir="$(dirname "$here")"
repo="$(cd "$image_dir/../.." && pwd)"
fixture="$image_dir/parity/fixture"
tag=client-start-selftest:latest
prefix="client-start-selftest-$$"
bucket=client-releases-selftest
lang=eng
cleanup=()

die() {
  echo "start-selftest: $*" >&2
  exit 1
}

on_exit() {
  local item
  for item in "${cleanup[@]}"; do
    case "$item" in
    container:*) docker rm -f "${item#container:}" >/dev/null 2>&1 || true ;;
    volume:*) docker volume rm -f "${item#volume:}" >/dev/null 2>&1 || true ;;
    dir:*) rm -rf "${item#dir:}" ;;
    esac
  done
}
trap on_exit EXIT

pack_release_print_sha256() {
  local release="$1" left_out="${2:-}"
  docker run --rm --user "$(id -u):$(id -g)" --entrypoint sh \
    -v "$fixture:/fixture:ro" -v "$work/bucket/$lang:/out" "$tag" -c '
      set -eu
      src="$(mktemp -d)"
      mkdir "$src/client"
      cp -R /fixture "$src/client/public"
      [ -z "$2" ] || rm "$src/client/public/$2"
      tar -czf "/out/$1.tar.gz" -C "$src" client/public
      chmod a+r "/out/$1.tar.gz"
      sha256sum "/out/$1.tar.gz" | cut -d " " -f 1' sh "$release" "$left_out"
}

start() {
  local name="$1" release="$2" sha256="$3"
  cleanup+=("container:$prefix-$name")
  docker run -d --name "$prefix-$name" --read-only \
    --tmpfs /data --tmpfs /config \
    -v "$volume:/cache" -v "$work/bucket:/srv/$bucket:ro" -w /srv \
    -e CLIENT_LANG="$lang" -e CLIENT_RELEASE="$release" \
    -e CLIENT_RELEASE_SHA256="$sha256" -e CLIENT_BUCKET="$bucket" \
    -e RCLONE_CONFIG_R2_TYPE=local \
    -p 127.0.0.1::8080 "$tag" >/dev/null
}

serving_or_exit_code() {
  local name="$prefix-$1" tries=0 state address
  while [[ $tries -lt 60 ]]; do
    state="$(docker inspect -f '{{.State.Status}} {{.State.ExitCode}}' \
      "$name")"
    case "$state" in
    exited*)
      echo "exit ${state#exited }"
      return
      ;;
    esac
    address="$(docker port "$name" 8080/tcp 2>/dev/null | head -n 1)" || true
    if [[ -n "$address" ]] &&
      curl -sf -o /dev/null --max-time 2 "http://$address/learn"; then
      echo serving
      return
    fi
    tries=$((tries + 1))
    sleep 1
  done
  echo timeout
}

expect_fixture_learn_page() {
  local got address
  got="$(serving_or_exit_code "$1")"
  [[ "$got" == serving ]] || {
    docker logs "$prefix-$1" >&2 || true
    die "$1: expected serving, got $got"
  }
  address="$(docker port "$prefix-$1" 8080/tcp | head -n 1)"
  curl -sf "http://$address/learn" -o "$work/body"
  cmp -s "$work/body" "$fixture/learn/index.html" ||
    die "$1: /learn is not the fixture's learn/index.html"
}

expect_failed_start() {
  local name="$1" reason="$2" got
  got="$(serving_or_exit_code "$name")"
  case "$got" in
  "exit 0" | serving | timeout) die "$name: expected a failed start, got $got" ;;
  esac
  docker logs "$prefix-$name" 2>&1 | grep -Fq -- "$reason" || {
    docker logs "$prefix-$name" >&2 || true
    die "$name: the log does not say '$reason'"
  }
}

stop() {
  docker rm -f "$prefix-$1" >/dev/null
}

expect_cache_entries() {
  local got
  got="$(docker run --rm --entrypoint sh -v "$volume:/cache:ro" "$tag" -c '
    cd /cache
    { ls -A; [ ! -d .sha256 ] || ls -A .sha256 | sed "s|^|.sha256/|"; } |
      sort | tr "\n" " "')"
  [[ "$got" == "$1" ]] || die "cache holds '$got', expected '$1'"
}

docker build -q -f "$image_dir/Dockerfile" -t "$tag" "$repo" >/dev/null

work="$(mktemp -d)"
cleanup+=("dir:$work")
mkdir -p "$work/bucket/$lang"
chmod -R a+rX "$work"
volume="$prefix-cache"
cleanup+=("volume:$volume")
docker volume create "$volume" >/dev/null

r1="$(pack_release_print_sha256 r1)"
no404="$(pack_release_print_sha256 no404 404.html)"
zeros="$(printf '0%.0s' {1..64})"

start good r1 "$r1"
expect_fixture_learn_page good
stop good
expect_cache_entries ".sha256 .sha256/r1 r1 "

pack_release_print_sha256 bad >/dev/null
start wrong-sha bad "$zeros"
expect_failed_start wrong-sha "does not match CLIENT_RELEASE_SHA256"
start missing missing "$r1"
expect_failed_start missing "could not fetch eng/missing.tar.gz"
start dotdot ../x "$r1"
expect_failed_start dotdot "CLIENT_RELEASE must match"
start slash a/b "$r1"
expect_failed_start slash "CLIENT_RELEASE must match"
start no404 no404 "$no404"
expect_failed_start no404 "has no index.html or no 404.html"
expect_cache_entries ".sha256 .sha256/r1 r1 "

mv "$work/bucket/$lang/r1.tar.gz" "$work/r1.tar.gz"
start restart-without-r2 r1 "$r1"
expect_fixture_learn_page restart-without-r2
stop restart-without-r2

start other-sha r1 "$no404"
expect_failed_start other-sha "holds a release with another sha256"
expect_cache_entries ".sha256 .sha256/r1 r1 "

r2="$(pack_release_print_sha256 r2)"
start twin-a r2 "$r2" &
twin_a=$!
start twin-b r2 "$r2" &
twin_b=$!
wait "$twin_a"
wait "$twin_b"
cleanup+=("container:$prefix-twin-a" "container:$prefix-twin-b")
expect_fixture_learn_page twin-a
expect_fixture_learn_page twin-b
unpacked="$(
  docker logs "$prefix-twin-a" 2>&1
  docker logs "$prefix-twin-b" 2>&1
)"
[[ "$(grep -c '^client-start: unpacked r2$' <<<"$unpacked")" -eq 1 ]] ||
  die "twins: expected one task to unpack r2, logs: $unpacked"
stop twin-a
stop twin-b
expect_cache_entries ".sha256 .sha256/r1 .sha256/r2 r1 r2 "

for release in r3 r4 r5 r6 r7; do
  sleep 1
  start "turn-$release" "$release" "$(pack_release_print_sha256 "$release")"
  expect_fixture_learn_page "turn-$release"
  stop "turn-$release"
done
expect_cache_entries ".sha256 .sha256/r5 .sha256/r6 .sha256/r7 r5 r6 r7 "

echo "start-selftest: pass"
