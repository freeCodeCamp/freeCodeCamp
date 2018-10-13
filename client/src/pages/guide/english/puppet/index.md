---
title: Puppet
---
## Puppet

Puppet is an open-source software configuration management tool. It includes its own declarative language to describe system configuration,  it is written in C++ and Clojure.
Puppet is designed to manage the configuration of Unix-like and Microsoft Windows systems declaratively. The user describes system resources and their state, either using Puppet's declarative language or a Ruby DSL (domain-specific language). This information is stored in files called "Puppet manifests". Puppet discovers the system information via a utility called Facter, and compiles the Puppet manifests into a system-specific catalog containing resources and resource dependency, which are applied against the target systems. Any actions taken by Puppet are then reported. 
Puppet consists of a custom declarative language to describe system configuration, which can be either applied directly on the system, or compiled into a catalog and distributed to the target system via client–server paradigm (using a REST API), and the agent uses system specific providers to enforce the resource specified in the manifests. The resource abstraction layer enables administrators to describe the configuration in high-level terms, such as users, services and packages without the need to specify OS specific commands (such as rpm, yum, apt). 
source: Wikipedia/Puppet

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/mathematics/quadratic-equations/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
