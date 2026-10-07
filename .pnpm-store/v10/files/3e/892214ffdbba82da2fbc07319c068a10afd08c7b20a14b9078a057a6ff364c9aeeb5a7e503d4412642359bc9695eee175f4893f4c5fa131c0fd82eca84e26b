$ErrorActionPreference = 'Stop'

# This script sets up a WSL distribution that will be used to run WebKit.

$Distribution = "playwright"
$Username = "pwuser"

$distributions = (wsl --list --quiet) -split "\r?\n"
if ($distributions -contains $Distribution) {
    Write-Host "WSL distribution '$Distribution' already exists. Skipping installation."
} else {
    Write-Host "Installing new WSL distribution '$Distribution'..."
    $VhdSize = "10GB"
    wsl --install -d Ubuntu-24.04 --name $Distribution --no-launch --vhd-size $VhdSize
    wsl -d $Distribution -u root adduser --gecos GECOS --disabled-password $Username
}

$pwshDirname = (Resolve-Path -Path $PSScriptRoot).Path;
$playwrightCoreRoot = Resolve-Path (Join-Path $pwshDirname "..")

$initScript = @"
if [ ! -f "/home/$Username/node/bin/node" ]; then
  mkdir -p /home/$Username/node
  curl -fsSL https://nodejs.org/dist/v22.17.0/node-v22.17.0-linux-x64.tar.xz -o /home/$Username/node/node-v22.17.0-linux-x64.tar.xz
  tar -xJf /home/$Username/node/node-v22.17.0-linux-x64.tar.xz -C /home/$Username/node --strip-components=1
  sudo -u $Username echo 'export PATH=/home/$Username/node/bin:\`$PATH' >> /home/$Username/.profile
fi
/home/$Username/node/bin/node cli.js install-deps webkit
sudo -u $Username PLAYWRIGHT_SKIP_BROWSER_GC=1 /home/$Username/node/bin/node cli.js install webkit
"@ -replace "\r\n", "`n"

wsl -d $Distribution --cd $playwrightCoreRoot -u root -- bash -c "$initScript"
Write-Host "Done!"