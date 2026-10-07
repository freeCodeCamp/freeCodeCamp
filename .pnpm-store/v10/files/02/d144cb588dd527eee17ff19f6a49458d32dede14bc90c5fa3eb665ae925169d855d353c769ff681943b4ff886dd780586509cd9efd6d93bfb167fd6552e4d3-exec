#!/usr/bin/env bash
set -e
set -x

rm -rf "/Applications/Google Chrome Beta.app"
cd /tmp
curl --retry 3 -o ./googlechromebeta.dmg https://dl.google.com/chrome/mac/universal/beta/googlechromebeta.dmg
hdiutil attach -nobrowse -quiet -noautofsck -noautoopen -mountpoint /Volumes/googlechromebeta.dmg ./googlechromebeta.dmg
cp -pR "/Volumes/googlechromebeta.dmg/Google Chrome Beta.app" /Applications
hdiutil detach /Volumes/googlechromebeta.dmg
rm -rf /tmp/googlechromebeta.dmg

/Applications/Google\ Chrome\ Beta.app/Contents/MacOS/Google\ Chrome\ Beta --version
