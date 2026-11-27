#!/bin/sh
set -eu

cache=/cache
keep=3
lang="${CLIENT_LANG:-}"
release="${CLIENT_RELEASE:-}"
sha256="${CLIENT_RELEASE_SHA256:-}"
bucket="${CLIENT_BUCKET:-}"

die() {
  echo "client-start: $*" >&2
  exit 1
}

case "$lang" in
[a-z][a-z][a-z]) ;;
*) die "CLIENT_LANG must be three lowercase letters" ;;
esac
case "$release" in
'' | .* | *[!A-Za-z0-9._-]*)
  die "CLIENT_RELEASE must match [A-Za-z0-9._-] and not start with a dot"
  ;;
esac
[ "${#release}" -le 64 ] || die "CLIENT_RELEASE is longer than 64 characters"
case "$sha256" in
*[!0-9a-f]*) die "CLIENT_RELEASE_SHA256 must be lowercase hex" ;;
esac
[ "${#sha256}" -eq 64 ] || die "CLIENT_RELEASE_SHA256 must be 64 characters"
case "$bucket" in
'' | [.-]* | *[!a-z0-9.-]*) die "CLIENT_BUCKET is not a bucket name" ;;
esac

release_dir="$cache/$release"
sha_dir="$cache/.sha256"
sha_file="$sha_dir/$release"

sha256_on_volume_matches() {
  [ -f "$sha_file" ] && [ "$(cat "$sha_file")" = "$sha256" ]
}

tmp=
remove_tmp() {
  [ -z "$tmp" ] || rm -rf "$tmp"
}
trap remove_tmp EXIT
trap 'exit 130' INT
trap 'exit 143' TERM

if [ -d "$release_dir" ]; then
  sha256_on_volume_matches ||
    die "$release_dir holds a release with another sha256"
  echo "client-start: $release is on the volume"
else
  mkdir -p "$sha_dir"
  tmp="$(mktemp -d "$cache/.tmp.XXXXXX")"
  rclone copyto --s3-no-check-bucket \
    "r2:$bucket/$lang/$release.tar.gz" "$tmp/release.tar.gz" ||
    die "could not fetch $lang/$release.tar.gz from $bucket"
  printf '%s  %s\n' "$sha256" "$tmp/release.tar.gz" >"$tmp/release.sha256"
  sha256sum -c -s "$tmp/release.sha256" ||
    die "$lang/$release.tar.gz does not match CLIENT_RELEASE_SHA256"
  mkdir "$tmp/tree"
  tar -xzf "$tmp/release.tar.gz" -C "$tmp/tree" --strip-components=2 ||
    die "could not unpack $lang/$release.tar.gz"
  [ -f "$tmp/tree/index.html" ] && [ -f "$tmp/tree/404.html" ] ||
    die "$lang/$release.tar.gz has no index.html or no 404.html"
  echo "$sha256" >"$tmp/sha256"
  mv -f "$tmp/sha256" "$sha_file"
  if mv -T "$tmp/tree" "$release_dir" 2>/dev/null; then
    echo "client-start: unpacked $release"
  elif [ -d "$release_dir" ] && sha256_on_volume_matches; then
    echo "client-start: another task unpacked $release first"
  else
    die "could not move $release into $release_dir"
  fi
fi
touch "$release_dir"

# shellcheck disable=SC2012
ls -1t "$cache" | tail -n "+$((keep + 1))" | while IFS= read -r old; do
  [ "$old" != "$release" ] || continue
  rm -rf "${cache:?}/$old" "${sha_dir:?}/$old" ||
    echo "client-start: could not remove $cache/$old" >&2
done
find "$cache" -mindepth 1 -maxdepth 1 -name '.tmp.*' -mmin +60 \
  -exec rm -rf {} \; ||
  echo "client-start: could not remove old temp folders" >&2

remove_tmp
tmp=
trap - EXIT INT TERM
exec caddy run --config /etc/caddy/Caddyfile --adapter caddyfile
