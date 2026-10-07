#!/usr/bin/env bash

set -e
set -x

if [[ $(arch) == "aarch64" ]]; then
  echo "ERROR: not supported on Linux Arm64"
  exit 1
fi

if [ -z "$PLAYWRIGHT_HOST_PLATFORM_OVERRIDE" ]; then
  if [[ ! -f "/etc/os-release" ]]; then
    echo "ERROR: cannot install on unknown linux distribution (/etc/os-release is missing)"
    exit 1
  fi

  ID=$(bash -c 'source /etc/os-release && echo $ID')
  if [[ "${ID}" != "ubuntu" && "${ID}" != "debian" ]]; then
    echo "ERROR: cannot install on $ID distribution - only Ubuntu and Debian are supported"
    exit 1
  fi
fi

# 1. make sure to remove old stable if any.
if dpkg --get-selections | grep -q "^microsoft-edge-stable[[:space:]]*install$" >/dev/null; then
  apt-get remove -y microsoft-edge-stable
fi

# 2. Install curl to download Microsoft gpg key
if ! command -v curl >/dev/null; then
  apt-get update
  apt-get install -y curl
fi

# GnuPG is not preinstalled in slim images
if ! command -v gpg >/dev/null; then
  apt-get update
  apt-get install -y gpg
fi

# 3. Add the GPG key, the apt repo, update the apt cache, and install the package
curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > /tmp/microsoft.gpg
install -o root -g root -m 644 /tmp/microsoft.gpg /etc/apt/trusted.gpg.d/
sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/edge stable main" > /etc/apt/sources.list.d/microsoft-edge-stable.list'
rm /tmp/microsoft.gpg
apt-get update && apt-get install -y microsoft-edge-stable

microsoft-edge-stable --version
