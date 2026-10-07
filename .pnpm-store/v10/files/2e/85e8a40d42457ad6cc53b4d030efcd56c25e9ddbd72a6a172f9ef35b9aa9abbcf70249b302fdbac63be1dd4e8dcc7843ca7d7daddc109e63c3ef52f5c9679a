$ErrorActionPreference = 'Stop'
$url = 'https://dl.google.com/tag/s/dl/chrome/install/googlechromestandaloneenterprise64.msi'

$wc = New-Object net.webclient
$msiInstaller = "$env:temp\google-chrome.msi"
Write-Host "Downloading Google Chrome"
$wc.Downloadfile($url, $msiInstaller)

Write-Host "Installing Google Chrome"
$arguments = "/i `"$msiInstaller`" /quiet"
Start-Process msiexec.exe -ArgumentList $arguments -Wait
Remove-Item $msiInstaller


$suffix = "\\Google\\Chrome\\Application\\chrome.exe"
if (Test-Path "${env:ProgramFiles(x86)}$suffix") {
    (Get-Item "${env:ProgramFiles(x86)}$suffix").VersionInfo
} elseif (Test-Path "${env:ProgramFiles}$suffix") {
    (Get-Item "${env:ProgramFiles}$suffix").VersionInfo
} else {
    Write-Host "ERROR: Failed to install Google Chrome."
    Write-Host "ERROR: This could be due to insufficient privileges, in which case re-running as Administrator may help."
    exit 1
}
