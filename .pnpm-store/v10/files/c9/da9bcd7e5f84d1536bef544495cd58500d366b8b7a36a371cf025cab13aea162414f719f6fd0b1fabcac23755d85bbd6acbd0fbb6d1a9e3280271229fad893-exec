#!/usr/bin/env bash
set -e
set -x

cd /tmp
curl --retry 3 -o ./msedge_beta.pkg "$1"
# Note: there's no way to uninstall previously installed MSEdge.
# However, running PKG again seems to update installation.
sudo installer -pkg /tmp/msedge_beta.pkg -target /
rm -rf /tmp/msedge_beta.pkg
/Applications/Microsoft\ Edge\ Beta.app/Contents/MacOS/Microsoft\ Edge\ Beta --version
