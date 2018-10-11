---
title: VirtualBox
---
# VirtualBox
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Virtualbox_logo.png" width="200" height="200"/>

VirtualBox is an open source Virtual Machine program from Oracle. It allows users to virtually install many operating systems on virtual drives, including Windows, BSD, Linux, Solaris, etc. 

# Installation
VirtualBox can be downloaded here: 
[VirtualBox Downloads](https://www.virtualbox.org/wiki/Downloads)

# Setup
- To set up your first Virtual Machine, download the .iso file from your desired Operating System site. 

- Next you will hit the "New" button in VirtualBox, and name your VM with any name you like. 

- The application will run you though several more configurations. Most importantly, note how much storage you select for 
  the drive. This is the maximum size the machine file can be, which will take up storage on your device. Also, not how
  much memory you provide the machine, because these resources will be unavailable to your host OS while running the VM. 
  
For more information visit the 
[VirtualBox Manual Chapter 1](https://www.virtualbox.org/manual/ch01.html)

# Run the Machine
- Select your new VM, click settings, and navigate to the Storage tab. 

- Next click the Disk shaped "Adds optical drive" Button on the "Controller IDE" line.

- Choose your .iso file

- Close settings and hit Start!

- Now your machine will run and install the operating system on the virtual drive. 

- After you're done with your machine for the first time, go back to the Storage tab in Settings. Make sure to remove
  the .iso file, or remove the empty drive slot. There should only be one. 
  
  Congratulations! You've run your first Virtual Machine in VirtualBox. 
  
  Visit the
  [VirtualBox Manual](https://www.virtualbox.org/manual/UserManual.html) for even more information about using and configuring machines.

Oracle VM VirtualBox is a powerful cross-platform virtualization product intended for enterprise or personal use. VirtualBox is freely available as Open Source Software under the GNU General Public Licence (GPL) version 2.

VirtualBox extends the capabilties of your existing computer so that it can run multiple operating systems, you can even run VirtualBox inside a virtual machine, to run another Operating system, all on the same PC, the only limits are disk space and memory.

VirtualBox is a simple solution to: 
- Running multiple operating systems simultaneously.
  - Do not have to reboot to use a specific program that may not be supported by the OS in use.
- Easier software installations
  - A complete setup of a system can be packaged into a virtual machine.
- Testing and disaster recovery
  - Can freely experiment with a computing environment, without it affecting anything outside the virtual machine.
- Infrastructure consolidation 
  - Virtualization significantly reduces hardware and electricity costs. 

Virtual box supports a wide variety of Operating systems:
- Windows
- Linux
- Macintosh
- Solaris Hosts
- In addition to a large number of guest operating systems:
   (Including but not limited to):
   - Windows (NT 4.0, 2000, XP, Server 2003, Vista, Windows 7, Windows 8, Windows 10)
   - DOS/Windows 3.x
   - Linux (2.4, 2.6, 3.x and 4.x)
   - Solaris and OpenSolaris
   - OS/2
   - OpenBSD
 


#### More Information:

* [virtualbox.org](https://www.virtualbox.org)
* [How to setup a local linux environement with vagrant](https://medium.com/@JohnFoderaro/how-to-set-up-a-local-linux-environment-with-vagrant-163f0ba4da77)
