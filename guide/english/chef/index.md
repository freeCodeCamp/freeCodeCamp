---
title: Chef
---
## Chef
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
<p>Chef is a powerful automation platform that transforms infrastructure into code. Whether you’re operating in the cloud, on-premises, or in a hybrid environment, Chef automates how infrastructure is configured, deployed, and managed across your network, no matter its size.</p>

Chef enables programmers and system administrators to work together. Instead of developers writing applications and then waiting on Ops staff to figure out how to deploy the software, Chef serves both communities. Chef moves the process from a herky-jerky release cycle to a continuous delivery model by enabling an effective and automated workflow—a central goal of the DevOps movement. 

#### How Chef Works
<p>Chef stores collections of recipes in a cookbook. One cookbook should relate to a single task, but can have a number of different server configurations involved (for example a web application with a database, will have two recipes, one for each part, stored together in a cookbook).</p>

<p>There is a Chef server which stores each of these cookbooks and as a new chef client node checks in with the server, recipes are sent to tell the node how to configure itself.</p>

<p>The client will then check in every now and again to make sure that no changes have occurred, and nothing needs to change. If it does, then the client deals with it. Patches and updates can be rolled out over your entire infrastructure by changing the recipe. No need to interact with each machine individually.</p>

#### Chef Configuration
![Image Title](https://regmedia.co.uk/2015/10/07/chef_configuration_management.jpg)


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
- [Chef TutorialsPoint](https://www.tutorialspoint.com/chef/chef_overview.htm)
- [Official Documentation](https://docs.chef.io/chef_overview.html)
- [Chef Tutorial](http://gettingstartedwithchef.com/)
- [Hewllet Packard Enterprise](https://www.hpe.com/us/en/insights/articles/what-is-chef-a-primer-for-devops-newbies-1704.html)

    
