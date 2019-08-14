---
title: Puppet
---
## Puppet

### What is Puppet

Puppet is a configuration management tool where a developer describes the target state of a number of resources using a declarative language.
In simple words, Puppet is a system for automating system administration tasks.

Here are a few resources that will help in introduction to Puppet:

 * [Puppet wiki](https://docs.puppet.com/wiki_redirect.html)
 * [Introduction to Puppet](https://puppet.com/docs/puppet/6.0/architecture.html)

### Puppet documentation
 * [Complete Puppet reference manual](https://puppet.com/docs/puppet/6.0/puppet_index.html)
 * [Language Basics](https://puppet.com/docs/puppet/6.0/lang_summary.html)
 * [Resource Type Reference](https://puppet.com/docs/puppet/6.0/type.html)

### Where to start

 - Play around with Puppet. You might want to use <a href="https://learn.puppet.com/">Puppet Training</a>
 - Adopt <a href="https://docs.puppet.com/hiera/">Hiera</a> as early as possible to allow you to write clean code
 - Adopt the Roles and Profiles pattern as early as possible
 - Once Hiera and the Roles and Profiles pattern have been adopted look into the following:
 - Test Driven Development using <a href="https://github.com/rodjek/rspec-puppet/">rspec-puppet</a>
 - Deployment through controlled environments with <a href="https://puppet.com/docs/pe/2019.0/r10k.html">r10k</a>

### Hiera

Use Hiera to separate your data / parameter values from your Puppet code

### eyaml

When you need to store sensitive data such as password for service accounts, use eyaml as a Hiera back-end. The secrets will become available in your puppet code as facts.

Have a look at the following article for more information: <a href="https://puppet.com/blog/encrypt-your-data-using-hiera-eyaml">Encrypt Your Data Using Hiera-Eyaml</a>


#### More Information:

<a href='https://puppet.com/docs/puppet/5.3/architecture.html' target='_blank' rel='nofollow'>Official Puppet documentation</a>


