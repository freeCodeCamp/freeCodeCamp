---
title: Vagrant 
---
## Vagrant

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
Vagrant is an automation tool that aids in creating and managing virtual machines that is simple to use and allows you to set up a  environment quickly. This enviroment's exact installation and configuration can then be shared by using a Vagrantfile so other team members are all using the same environment no matter what computer they are using.

Cheat sheet:

vagrant init -- Initialize Vagrant with a Vagrantfile and ./.vagrant directory, using no specified base image. Before you can do vagrant up, you'll need to specify a base image in the Vagrantfile.
vagrant init <boxpath> -- Initialize Vagrant with a specific box. 
vagrant up -- starts vagrant environment (also provisions only on the FIRST vagrant up)
vagrant resume -- resume a suspended machine (vagrant up works just fine for this as well)
vagrant provision -- forces reprovisioning of the vagrant machine
vagrant reload -- restarts vagrant machine, loads new Vagrantfile configuration
vagrant reload --provision -- restart the virtual machine and force provisioning
vagrant halt -- stops the vagrant machine
vagrant suspend -- suspends a virtual machine (remembers state)
vagrant ssh <boxname> -- If you give your box a name in your Vagrantfile, you can ssh into it with boxname. Works from any directory.
vagrant destroy -- stops and deletes all traces of the vagrant machine

References: https://gist.github.com/wpscholar/a49594e2e2b918f4d0c4

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
- [Official Documentation](https://www.vagrantup.com/docs/index.html)
- [How to Get Started](https://www.vagrantup.com/intro/getting-started/index.html)
