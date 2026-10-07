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

# 1. make sure to remove old beta if any.
if dpkg --get-selections | grep -q "^google-chrome-beta[[:space:]]*install$" >/dev/null; then
  apt-get remove -y google-chrome-beta
fi

# 2. Update apt lists (needed to install curl and chrome dependencies)
apt-get update

# 3. Install curl to download chrome
if ! command -v curl >/dev/null; then
  apt-get install -y curl
fi

# 4. download chrome beta from dl.google.com and install it.
cd /tmp
curl -O https://dl.google.com/linux/direct/google-chrome-beta_current_amd64.deb
apt-get install -y ./google-chrome-beta_current_amd64.deb
rm -rf ./google-chrome-beta_current_amd64.deb
cd -
google-chrome-beta --version
