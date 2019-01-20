---
title: Chef
---
## Chef
Chef is an automation tool that transforms infrastructure into code. In other words, it is a tool that is used to automate the creation and configuration of your infrastructure. It is also used to maintain your infrastructure once it is created.

### Why use Chef
There are several things to consider before a fully completed and tested application goes to production. Some of the main things are:

* Infrastructure creation (cloud or on-premisis)
* Configuration
* Maintain infrastructure

You can manually create your infrastructure, configure it and maintain it. It is a very tedious process and the chances of making a mistake is high. Anything manual requires a lot of attention to details, training other in your team and constantly keeping an eye on it to make sure everything is working as expected. If your application evolves quickly then every time it goes to production you have to do all these work manually.

Chef is a tool that helps in automating this process. You write code (chef uses *Ruby*) for your infrastructure and source control it. Chef will read this code to create and configure your infrastructure automatically. The advantages of using Chef are:

* Infrastructure creation and configuration is automated
* Monitoring and maintaining is automated
* Chances of a mistake is negligible
* Infrastructure is source controlled
* Deploy application quickly and often

### Big picture and Components
![Chef big picture](https://docs.chef.io/_images/chef_overview.svg "Chef overview")

The main components are: 

* Cookbook and Recipes
* Node
* Workstation
* Chef Server
* Chef Client

#### Cookbook and Recipes
A Cookbook is the fundamental unit of configuration. It defines a scenario and contains everything that is required to support that scenario. Cookbook contains the following things:

* Recipes
* Attribute values
* File distributions
* Templates
* Extensions to custom resources and libraries

Recipe is the most fundamental configuration element. It is authored using *Ruby* and consists of a collection of resources that is required to configure a system. It must be stored in a Cookbook.

#### Node
A node is any machine that is managed by Chef. It can be physical, virtual, cloud, network device, etc,.

#### Workstation
Workstation (the blue region in big picture) is a computer running the Chef Development Kit (ChefDK) to develop and test cookbooks and recipes. Basically, it is your local machine where you write and test Chef scripts that is used later for automating Infrastructure. Chef scripts from Workstation is uploaded to Chef Server once it is ready.

#### Chef Server
The chef server acts as a hub for configuration data. It stores all the configuration data such as cookbooks, recipes, templates and file distributions that are needed for Infrastructure creation and configuration.

#### Chef Client
A Chef Client is an agent that runs locally on every node that is managed by Chef. It communicates with the Chef Server to get configuration data that is needed to configure the node. The Chef client is responsible for running all the required steps to bring a node into the expected state. The different steps include:

* Registering and authenticating the node with the Chef server
* Synchronizing Cookbooks
* Compiling and running the required recipes
* Handling exceptions and notifications

#### More Information:
A more detailed documentation can be found here - [Chef documentation](https://docs.chef.io/chef_overview.html "Chef")
