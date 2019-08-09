---
title: Chef
---

[![Chef Logo](https://www.chef.io/wp-content/themes/chef.io_2018/images/nav/chef-logo.svg?v=1)](https://www.chef.io/)

# Chef
Chef is a powerful automation platform that transforms infrastructure into code, whether you’re operating in the cloud, on-premises, or in a hybrid environment. Chef automates how infrastructure is configured, deployed, and managed across your network, regardless of size.</p>

Chef enables programmers and system administrators to work together. Instead of developers writing applications and then waiting on Ops staff to figure out how to deploy the software, Chef serves both communities. Chef moves the process from a herky-jerky release cycle to a continuous delivery model by enabling an effective and automated workflow—a central goal of the DevOps movement. 

## How Chef Works
Chef stores collections of recipes in a cookbook. One cookbook should relate to a single task, but can have a number of different server configurations involved. For example a web application with a database will have two recipes, one for each part, stored together in a cookbook.

Chef has a dedicated server that stores each of these cookbooks. As new chef client nodes check in with the server, recipes are sent to tell the node how to configure itself.

The client only needs to occasionally check in to ensure that no changes have occurred and nothing needs to be addressed. If any changes are required, the client deals with it. Patches and updates can be rolled out over your entire infrastructure by changing the recipe. There is no need to interact with each machine individually.

Clients should be able to quickly find recipes they desire by using Tags. For example, a Beef Wellington may have tags such as 'beef', 'puff pastry', and 'steak'. This may help the client find not only the recipe he wants but other similar recipes that might pique his interest or suit his cooking style.

## Chef Configuration
![Chef Configuration Process Chart](https://regmedia.co.uk/2015/10/07/chef_configuration_management.jpg "Chef Configuration process chart")

## Additional Resources
- [Chef TutorialsPoint](https://www.tutorialspoint.com/chef/chef_overview.htm)
- [Official Documentation](https://docs.chef.io/chef_overview.html)
- [Chef Tutorial](http://gettingstartedwithchef.com/)
- [Hewllet Packard Enterprise](https://www.hpe.com/us/en/insights/articles/what-is-chef-a-primer-for-devops-newbies-1704.html)
- [Getting security, ops, and devs collaborating with Michael Hedgpeth, NCR](https://www.youtube.com/watch?time_continue=12&v=K5_YKI7wuLs)
