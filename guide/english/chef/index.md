---
title: Chef
---
## Chef
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
<p>Chef is a powerful automation platform that transforms infrastructure into code, whether you’re operating in the cloud, on-premises, or in a hybrid environment. Chef automates how infrastructure is configured, deployed, and managed across your network, regardless of size.</p>

#### How Chef Works
<p>Chef stores collections of recipes in a cookbook. One cookbook should relate to a single task, but can have a number of different server configurations involved. For example, a web application with a database will have two recipes (one for each part) stored together in a cookbook.</p>

<p>Chef has a dedicated server that stores each of these cookbooks. As a new chef client node checks in with the server, recipes are sent to tell the node how to configure itself.</p>

<p>The client only needs to occasionally check in to ensure that no changes have occurred and nothing needs to be addressed. If any changes are required, the client is able to make these himself. Patches and updates can be rolled out over your entire infrastructure by changing the recipe. There is no need to interact with each machine individually.</p>

#### Chef Configuration
![Image Title](https://regmedia.co.uk/2015/10/07/chef_configuration_management.jpg)


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
- [Chef TutorialsPoint](https://www.tutorialspoint.com/chef/chef_overview.htm)
- [Official Documentation](https://docs.chef.io/chef_overview.html)
- [Chef Tutorial](http://gettingstartedwithchef.com/)

    
