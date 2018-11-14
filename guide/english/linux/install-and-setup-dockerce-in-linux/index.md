---
title: Install and Setup for Docker CE on Linux
---

##Requirements

Docker CE requires a 64-bit version of one of the below Linux distros:

1. Bionic 18.04 or Newer.
2. Xenial 16.x.x .
3. Ubuntu Trusty 14.0 (LTS).

Note: Docker CE is supported on Ubuntu x86_64, ARM_hf and IBM Z s390x architectures.

##Uninstall previous version

Note: Also known as Docker / Docker-Engine.

Run Command in SSL/Bash: <br>
`$ sudo apt-get remove docker docker-engine docker.io`

##Install Latest Version

###Install Using Repository:

1. Update apt Package Index
  Run: <br> `$ sudo apt-get update`
  
2. Install Packages
  Run: <br> `$ sudo apt-get install \
             apt-transport-https \
             ca-certificates \
             curl \
             software-properties-common`
             
3. Add Official GPG Key
  Run: <br> `$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -`
  
4. Verify Key Fingerprint by searching last 8 characters.
  Run: <br> `$ sudo apt-key fingerprint 0EBFCD88

             pub   4096R/0EBFCD88 2017-02-22
                   Key fingerprint = XXXX XXXX XXXX XXXX XXXX  XXXX XXXX XXXX XXXX XXXX
             uid                  Docker Release (CE deb) <docker@docker.com>
             sub   4096R/F273FCD8 2017-02-22`
             
  Note: Replace 'XXXX' with your Key.
  
###Install Using Docker CE Package

1. Update apt Package Index
  Run: <br> `$ sudo apt-get update`
  
2. Install Latest Version
  Run: <br> `$ sudo apt-get install docker-ce`
             
3. Install Specific Version
  Run: <br> `$ sudo apt-get install docker-ce=<VERSION>`
  
  Note: Replace <VERSIO> with desired version coed. Eg: docker-ce=17.06.0~ce-0~ubuntu
  
4. Verify Instalation Success.
  Run: <br> `$ sudo docker run hello-world`
  
##Post Installation

Usefull guides on using Docker on Linux can be found here: 

https://docs.docker.com/install/linux/linux-postinstall/
https://docs.docker.com/config/daemon/
  
  
  
  
  


