---
title: Puppet
---
## Puppet

Puppet is an open-source software configuration management tool. It includes its own declarative language to describe system configuration,  it is written in C++ and Clojure.
Puppet is designed to manage the configuration of Unix-like and Microsoft Windows systems declaratively. The user describes system resources and their state, either using Puppet's declarative language or a Ruby DSL (domain-specific language). This information is stored in files called "Puppet manifests". Puppet discovers the system information via a utility called Facter, and compiles the Puppet manifests into a system-specific catalog containing resources and resource dependency, which are applied against the target systems. Any actions taken by Puppet are then reported. 
Puppet consists of a custom declarative language to describe system configuration, which can be either applied directly on the system, or compiled into a catalog and distributed to the target system via client–server paradigm (using a REST API), and the agent uses system specific providers to enforce the resource specified in the manifests. The resource abstraction layer enables administrators to describe the configuration in high-level terms, such as users, services and packages without the need to specify OS specific commands (such as rpm, yum, apt). 
source: Wikipedia/Puppet

## What exactly does a configuration management tool do?
Say you have a web application served by two servers up and running, and then you need to update one configuration (for example you need to update Python), you can go to the first machine and make the update, then go to the next machine and do the same. 
Imagine if instead of two servers you have tens, or hundreds of servers. How can you make changes to all of them? How can you ensure that all of them are in the required state, and how do you specify this required state?
This is when Puppet comes in as a configuration management tool. 
You define the state you want your servers to be in, you define this state in "manifest files" (.pp). Then puppet makes sure that all your servers which connect to puppet are in this desired state.  This is powerful because you don't have to specify the steps needed to make it to your desired end state (i.e. install package "a", then install package "b" etc...).  You simply tell puppet how you want your systems to look/perform and puppet takes care of the steps to get you to that specified end state.

Next time you want to install new package in your machines, you just edit the manifest file to include something like "ensure this package is installed" and puppet will take care of the rest.

#### More Information

- [How To Install Puppet To Manage Your Server Infrastructure](https://www.digitalocean.com/community/tutorials/how-to-install-puppet-to-manage-your-server-infrastructure)
