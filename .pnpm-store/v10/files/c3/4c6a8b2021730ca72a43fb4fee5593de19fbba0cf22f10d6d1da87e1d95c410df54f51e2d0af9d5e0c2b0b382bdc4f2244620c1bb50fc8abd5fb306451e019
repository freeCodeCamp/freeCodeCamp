$ErrorActionPreference = 'Stop'
$url = $args[0]

Write-Host "Downloading Microsoft Edge Beta"
$wc = New-Object net.webclient
$msiInstaller = "$env:temp\microsoft-edge-beta.msi"
$wc.Downloadfile($url, $msiInstaller)

Write-Host "Installing Microsoft Edge Beta"
$arguments = "/i `"$msiInstaller`" /quiet"
Start-Process msiexec.exe -ArgumentList $arguments -Wait
Remove-Item $msiInstaller

$suffix = "\\Microsoft\\Edge Beta\\Application\\msedge.exe"
if (Test-Path "${env:ProgramFiles(x86)}$suffix") {
    (Get-Item "${env:ProgramFiles(x86)}$suffix").VersionInfo
} elseif (Test-Path "${env:ProgramFiles}$suffix") {
    (Get-Item "${env:ProgramFiles}$suffix").VersionInfo
} else {
    Write-Host "ERROR: Failed to install Microsoft Edge Beta."
    Write-Host "ERROR: This could be due to insufficient privileges, in which case re-running as Administrator may help."
    exit 1
}
