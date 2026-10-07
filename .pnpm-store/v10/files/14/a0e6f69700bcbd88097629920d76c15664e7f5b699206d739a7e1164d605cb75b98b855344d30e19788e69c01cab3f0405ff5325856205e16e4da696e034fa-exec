#!/usr/bin/env bash
set -e
set -x

rm -rf "/Applications/Google Chrome.app"
cd /tmp
curl --retry 3 -o ./googlechrome.dmg https://dl.google.com/chrome/mac/universal/stable/GGRO/googlechrome.dmg
hdiutil attach -nobrowse -quiet -noautofsck -noautoopen -mountpoint /Volumes/googlechrome.dmg ./googlechrome.dmg
cp -pR "/Volumes/googlechrome.dmg/Google Chrome.app" /Applications
hdiutil detach /Volumes/googlechrome.dmg
rm -rf /tmp/googlechrome.dmg
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --version
