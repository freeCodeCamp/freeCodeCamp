#!/usr/bin/env bash
set -euo pipefail
shopt -s inherit_errexit

here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
image_dir="$(dirname "$here")"
self="$here/run.sh"
serve_json_client_config_commit=b1ed468633f878a87ad3f0f27951e6ad1c926277
sep=$'\x1f'
fields=(status location cache-control content-type content-encoding body-sha256)
modes=("" "gzip, br")
vm_node_image=node:24.22.2-alpine@sha256:a34ab6d7f6f4813f4d0c5469d74685604b962fbdbf5793a7bc7b4998ecb867c8
cleanup=()

die() {
  echo "parity: $*" >&2
  exit 1
}

usage() {
  cat >&2 <<'EOF'
usage:
  run.sh urls <image> [sample]
  run.sh compare <url-a> <url-b> <url-list> <out.json>
  run.sh selftest
EOF
  exit 64
}

on_exit() {
  local item
  for item in "${cleanup[@]}"; do
    case "$item" in
    container:*) docker rm -f "${item#container:}" >/dev/null 2>&1 || true ;;
    dir:*) rm -rf "${item#dir:}" ;;
    esac
  done
}
trap on_exit EXIT

urls() {
  local image="$1" sample="${2:-200}"
  docker run --rm --entrypoint node -v "$here:/parity:ro" "$image" \
    /parity/urls.js /srv/client/serve.json /srv/client/releases/current \
    "$sample"
}

parse_head() {
  tr -d '\r' <"$1" | awk -v OFS="$sep" '
    NR == 1 { status = $2; next }
    {
      i = index($0, ":")
      if (!i) next
      key = tolower(substr($0, 1, i - 1))
      value = substr($0, i + 1)
      sub(/^[ \t]+/, "", value)
      h[key] = value
    }
    END {
      print status, h["location"], h["cache-control"], \
        h["content-type"], h["content-encoding"]
    }'
}

fetch() {
  local url="$1" mode="$2" out="$3" head encoding hash
  local args=(-sS --path-as-is --max-time 120 -o "$out.body" -D "$out.head")
  [[ -n "$mode" ]] && args+=(-H "Accept-Encoding: $mode")
  rm -f "$out.body" "$out.head"
  curl "${args[@]}" "$url" || die "request failed: $url"
  head="$(parse_head "$out.head")"
  [[ "$head" =~ ^[1-5][0-9][0-9]$sep ]] || die "no status line from $url"
  [[ -f "$out.body" ]] || : >"$out.body"
  encoding="${head##*"$sep"}"
  case "$encoding" in
  "") hash="$(shasum -a 256 <"$out.body")" ;;
  gzip)
    hash="$(gzip -dc <"$out.body" | shasum -a 256)" ||
      die "gzip body did not decode: $url"
    ;;
  *) die "unsupported Content-Encoding '$encoding' from $url" ;;
  esac
  printf '%s%s%s\n' "$head" "$sep" "${hash%% *}"
}

record() {
  jq -cn --arg path "$1" --arg mode "$2" --arg field "$3" \
    --arg a "$4" --arg b "$5" --argjson allowlisted "$6" \
    '{path: $path, mode: $mode, field: $field, a: $a, b: $b,
      allowlisted: $allowlisted}'
}

compare() {
  [[ $# -eq 4 ]] || usage
  local a="${1%/}" b="${2%/}" list="$3" out="$4"
  [[ -f "$list" ]] || die "no url list at $list"
  local work allow path mode allowlisted i rec_a rec_b paths=0 requests=0
  local -a ra rb
  work="$(mktemp -d)"
  cleanup+=("dir:$work")
  allow="$work/allowlist"
  grep -v -e '^#' -e '^$' "$here/allowlist.txt" >"$allow" || true
  : >"$work/differences.jsonl"

  while IFS= read -r path || [[ -n "$path" ]]; do
    [[ -z "$path" ]] && continue
    paths=$((paths + 1))
    allowlisted=false
    grep -Fxq -- "$path" "$allow" && allowlisted=true
    for mode in "${modes[@]}"; do
      requests=$((requests + 2))
      rec_a="$(fetch "$a$path" "$mode" "$work/a")"
      rec_b="$(fetch "$b$path" "$mode" "$work/b")"
      IFS="$sep" read -r -a ra <<<"$rec_a"
      IFS="$sep" read -r -a rb <<<"$rec_b"
      for i in "${!fields[@]}"; do
        if [[ "${ra[i]}" != "${rb[i]}" ]]; then
          record "$path" "$mode" "${fields[i]}" "${ra[i]}" \
            "${rb[i]}" "$allowlisted" \
            >>"$work/differences.jsonl"
        fi
      done
      if [[ "$path" == /serve.json ]] &&
        [[ "${ra[0]}" != 404 || "${rb[0]}" != 404 ]]; then
        record "$path" "$mode" "serve.json-not-404" "${ra[0]}" "${rb[0]}" \
          false >>"$work/differences.jsonl"
      fi
    done
  done <"$list"
  [[ $paths -gt 0 ]] || die "url list $list is empty"
  grep -Fxq /serve.json "$list" || die "url list $list lacks /serve.json"

  jq -n --arg a "$a" --arg b "$b" --argjson paths "$paths" \
    --argjson requests "$requests" \
    --slurpfile differences "$work/differences.jsonl" \
    '{a: $a, b: $b, paths: $paths, requests: $requests,
      diffs: ($differences | map(select(.allowlisted | not)) | length),
      allowlisted: ($differences | map(select(.allowlisted)) | length),
      differences: $differences}' >"$work/out.json"
  mv "$work/out.json" "$out"
  jq -c '{paths, requests, diffs, allowlisted}' "$out"
  jq -e '.diffs == 0' "$out" >/dev/null
}

host_url() {
  echo "http://$(docker port "$1" "$2" | head -n 1)"
}

wait_ready() {
  local url="$1" tries=0
  until curl -s -o /dev/null --max-time 2 "$url/"; do
    tries=$((tries + 1))
    [[ $tries -lt 120 ]] || die "$url did not answer within 120 s"
    sleep 1
  done
}

selftest() {
  local tag=parity-selftest:latest image=parity-selftest-image
  local reference=parity-selftest-reference node_image work context
  local image_url good_url bad_url
  node_image="$vm_node_image"
  work="$(mktemp -d)"
  cleanup+=("dir:$work" "container:$image" "container:$reference")

  context="$work/context"
  mkdir "$context"
  cp "$image_dir/Dockerfile" "$image_dir/package.json" \
    "$image_dir/pnpm-lock.yaml" "$here/serve.json" "$context/"
  cp -R "$here/fixture" "$context/tree"

  docker rm -f "$image" "$reference" >/dev/null 2>&1 || true
  docker build -q --build-arg TREE=tree \
    --build-arg CLIENT_CONFIG_COMMIT="$serve_json_client_config_commit" \
    -t "$tag" "$context" >/dev/null
  docker run -d --read-only --name "$image" -p 127.0.0.1::8080 "$tag" \
    >/dev/null
  docker run -d --name "$reference" -e NO_UPDATE_CHECK=1 \
    -v "$here/serve.json:/home/node/client/serve.json:ro" \
    -v "$here/fixture:/home/node/client/releases/fixture:ro" \
    -w /home/node/client -p 127.0.0.1::50505 -p 127.0.0.1::50506 \
    "$node_image" sh -c '
      npm install -g --ignore-scripts --no-audit --no-fund serve@13.0.4 >/dev/null &&
      { serve releases/fixture -p 50506 & } &&
      exec serve -c ../../serve.json releases/fixture -p 50505' >/dev/null

  image_url="$(host_url "$image" 8080)"
  good_url="$(host_url "$reference" 50505)"
  bad_url="$(host_url "$reference" 50506)"
  wait_ready "$image_url"
  wait_ready "$good_url"
  wait_ready "$bad_url"

  urls "$tag" >"$work/urls.txt"
  echo "selftest: $(wc -l <"$work/urls.txt" | tr -d ' ') urls"

  "$self" compare "$image_url" "$good_url" "$work/urls.txt" \
    "$work/good.json" || true
  jq -e '.diffs == 0 and .allowlisted >= 1' "$work/good.json" >/dev/null ||
    die "image differs from serve@13.0.4: $work/good.json"

  "$self" compare "$image_url" "$bad_url" "$work/urls.txt" \
    "$work/bad.json" || true
  jq -e '.diffs > 0' "$work/bad.json" >/dev/null ||
    die "compare missed a reference without serve.json"

  echo "selftest: pass"
}

case "${1:-}" in
urls)
  shift
  [[ $# -ge 1 ]] || usage
  urls "$@"
  ;;
compare)
  shift
  compare "$@"
  ;;
selftest)
  shift
  selftest
  ;;
*) usage ;;
esac
