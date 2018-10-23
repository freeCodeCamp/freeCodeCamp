---
title: Vagrant
---
## Vagrant

Vagrant is a tool for building and managing virtual machine (VM) environments. Virtual machines can be used for any cause but are particularly useful to developers and DevOps.

### Why Vagrant is Useful

As a developer, by using a VM, you can have a local environment for testing code, that is the same as the production environment, regardless of the environment you use for coding.

For DevOps, VMs are very useful for having a highly configurable, disposable machine for testing infrastracture, configurations, scripts, or anything else.

With Vagrant, to use a VM you only need a single file, called a `VagrantFile`, which contains the VM as well as all the configuration needed. This way you can easily create a specific, isolated development environment which is very portable and can be shared and used by all members of a team.

Vagrant also has pre-defined `boxes` which are base VMs, which can easily be cloned and expanded upon.

Another very cool feature of Vagrant is the use of `synced folders`. It is possible to sync the folders of the VM, with folders in the guest machine. By doing that, you can use your favorite editor on local files and simultaneously have those files synced to the running VM.

#### More Information:
<a href="https://www.vagrantup.com/" target='blank' rel='nofollow'>Vagrant website</a>

### Install Vagrant

To install Vagrant, first find the [appropriate package](https://www.vagrantup.com/downloads.html) for your system and download it. Vagrant is packaged as an operating-specific package. Run the installer for your system. The installer will automatically add vagrant to your system path so that it is available in terminals. If it is not found, please try logging out and logging back in to your system (this is particularly necessary sometimes for Windows).

### Verify Installation
After installing Vagrant, verify the installation worked by opening a new command prompt or console, and checking that vagrant is available:
```bash
$ vagrant
Usage: vagrant [options] <command> [<args>]

    -v, --version                    Print the version and exit.
    -h, --help                       Print this help.

# ...
```

### Getting Started
```bash
$ vagrant init hashicorp/precise64
$ vagrant up
```

### Boxes
Boxes are added to Vagrant with vagrant box add. This stores the box under a specific name so that multiple Vagrant environments can re-use it. If you have not added a box yet, you can do so now:
```bash
$ vagrant box add hashicorp/precise64
```

### Finding more Boxes
The best place to find more boxes is [HashiCorp's Vagrant Cloud box catalog](https://vagrantcloud.com/boxes/search).

### Common
Youtube: [Getting Started With Vagrant](https://www.youtube.com/watch?v=LyIyyFDgO4o) by [Codecourse](https://www.youtube.com/user/phpacademy)

#### More Information:
The Vagrant website: [vagrantup.com](https://www.vagrantup.com)
