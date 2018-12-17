---
title: Ansible
---
## Ansible

Ansible is a simple-to-use automation tool.  Ansible can be used to automate deployments, updates, security, systems management, container provisioning and more.  The configuration files are easy to manage YAML files written in plain English.  Installation is simple and due to its Master-Push format, there are no agents needed on remote machines.  Communications with remote machines is via SSH.

### Installation on Ubuntu Servers 14.04 or newer
Installation via the Ansible PPA on Ubuntu servers is recommended.

First, make sure your system is up to date.
```
$ sudo apt-get update
$ sudo apt-get upgrade
```
Next, you will want to add the following package to your system.
```
$ sudo apt-get install software-properties-common
```

Add the repository ppa:ansible/ansible to your system.
```
$ sudo apt-add-repository ppa:ansible/ansible
```

Update your repos again.
```
$ sudo apt-get update
```

There are usually a few steps involved in deploying your code into production (to the live site). The number of steps increases as your Site/App/Webapp becomes larger and more complex. 

The solution to this is automated deployment. Automation comes in the form of scripts that act as a set of instructions (just as all code does) outlining each of these steps. 

Ansible is an automation tool, often used for deployment as mentioned above, but increasingly used for other complex automations. 

It uses a language called <a href='https://en.wikipedia.org/wiki/YAML' target='_blank' rel='nofollow'>YAML</a> which allows you to describe the instuctions close to plain English, as you can see in this Ansible module example:

```YAML
---
- yum: name={{contact.item}} state=installed
with_items:
- app_server
- acme_software


- service: name=app_server state=running enabled=yes
```

Finally, install the package.
```
$ sudo apt-get install ansible
```
### Installation with the Python Package Manager "pip"
Ansible can also be installed in your production or Python virtual environment with pip.

Install Ansible with pip by running:
```
sudo pip install ansible
```
To install Ansible in a Python virtual environment make sure the environment is activated and run:
```
pip install ansible
```

A significant benefit of using Ansible is that it uses SSH (Secure SHell) by default, and the modules can reside on any machine (computer) without requiring servers, daemons or databases.

The true power of Ansible is in using playbooks.  Read more about configuration and use of Ansible on [Ansible's official documentation](https://docs.ansible.com/ansible/latest/index.html). 

Ansible modules are small task-specific programs. Once they serve their intended purpose (for example, running your deployed script), these modules are removed by Ansible.  

#### More Information:
- [Learn more about how Ansible works](https://www.ansible.com/how-ansible-works/)
- [Ansible documentation](http://docs.ansible.com/)
- [Latest Release via Pip](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html#latest-releases-via-pip)
