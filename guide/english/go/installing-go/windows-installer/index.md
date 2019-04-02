---
title: Installing Go in Windows using the MSI Installer
---
### Installing Go in Windows using the MSI Installer

From the [golang's download page](https://golang.org/dl/), get the Windows MSI installer and run it. You'll have to pick between the 64bit and 32bit versions. If you don't know what architecture your Windows version is running, just do a quick Google search to find out. 
>Most current versions of Windows are 64bit, so you should be okay getting the 64bit version in the featured downloads section, but if your computer is quite old, the 32bit version should be the safest bet.

##### 64-bit Windows Installer
![screenshot of golang's download page as of this writting, highliting link](https://raw.githubusercontent.com/AlexandroPerez/resources/master/img/win_installerx64.jpg "x64 Windows msi installer link")

##### 32-bit Windows Installer
![screenshot of golang's download page as of this writting, highliting link](https://raw.githubusercontent.com/AlexandroPerez/resources/master/img/win_installerx86.jpg "x86 Windows msi installer link")

#### Check installation and version of go

To check if go was successfully installed, open your command prompt and use:

```
> go version
```
This should print to the console the version of Go, while at the same time making sure the installation went smoothly.
