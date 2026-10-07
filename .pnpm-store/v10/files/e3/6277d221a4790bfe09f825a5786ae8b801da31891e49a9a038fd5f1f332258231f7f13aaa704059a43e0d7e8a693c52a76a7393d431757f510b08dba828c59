$osInfo = Get-WmiObject -Class Win32_OperatingSystem
# check if running on Windows Server
if ($osInfo.ProductType -eq 3) {
  Install-WindowsFeature Server-Media-Foundation
}
