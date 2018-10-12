---
title: Puppet
---
## Puppet

Puppet is a configuration management tool that allows you to automate the configuration and management of your infrastructure. This helps you save time by automating repetitive tasks and ensuring your systems are kept in a desired state.

Puppet comes in two varieties, Puppet Enterprise and open source Puppet. The supported platforms include most Linux distributions, various UNIX platforms, and Windows.

Puppet was developed by [Puppet Labs](https://puppet.com/company).

### Getting Started

You can configure your infrastructure either in a client/server architecture or in a stand-alone architecture. The former uses the Puppet `agent` and the Puppet `master` applications, while the latter uses the Puppet `apply` aplication.

#### Agent/Master Architecture

In this architecture one or more nodes run the Puppet master application. The master servers control the configuration information of the complete infrastructure.

Managed nodes run the Puppet agent application as a background service, and periodically request their configuration `catalog` from the Puppet master(s). 

The Puppet master compiles and returns each nodes catalog, using multiple sources of information. This gathered information is know as `facts`.

Once a Puppet agent receives a catalog, it checks each resource described in it. If a resource is not in the desired state, the agent corrects it.

#### Stand-Alone Architecture

In this architecture each managed node has the copy of the complete configuration.

Each Puppet agent runs the apply application as a scheduled task or cron job. 

As in the agent/master architecture, the Puppet apply compiles the catalog and checks each described resource. If a resource is not in the desired state, Puppet apply will correct it.

Like the Puppet master application, Puppet apply needs access to several sources of configuration data, which it uses to compile a catalog for the node it is managing.

#### Catalog

A catalog is a document that specifies the configuration of a machine. It lists all the resources that need to be managed, their desired state, and any dependencies between them.

Puppet configures a system by first compiling a catlog and then applying it.

#### Facts

Puppet gathers facts about all the nodes with a tool called `facter`. Facter gathers the information needed to configure the system. For instance, hostnames, IP addresses, OS names, among others. However, it is also possible to add additional facts.

For more information, see the documentation for the Puppet architecture.


#### More Information:
* Puppet official [website](https://puppet.com)
* An overview of the Puppet [architecture](https://puppet.com/docs/puppet/5.3/architecture.html)
* How To Use Puppet to Manage Your Servers. A series of tutorials from [DigitalOcean](https://www.digitalocean.com/community/tutorial_series/how-to-use-puppet-to-manage-your-servers-2)


