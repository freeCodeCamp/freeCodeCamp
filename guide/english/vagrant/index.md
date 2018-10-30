---
title: Vagrant 
---
## Vagrant

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
Vagrant is an automation tool that aids in creating and managing virtual machines that is simple to use and allows you to set up a  environment quickly. The Beauty of vagrant is this that it is largely platform independant for Linux,Windows and Mac, so with one Vagrantfile you can describe base installation virtual image.
This enviroment's exact installation and configuration can then be shared by using a Vagrantfile so other team members are all using the same environment no matter what computer they are using.

Vagrant makes this work by using a number of different components:

<b>Providers</b>: These are the “back end” of Vagrant. Vagrant itself doesn’t provide any virtualization functionality; it relies on other products to do the heavy lifting. Providers are how Vagrant interacts with the products that will do the actual virtualization work. A provider could be VirtualBox (included by default with Vagrant), VMware Fusion, Hyper-V, vCloud Air, or AWS, just to name a few.

<b>Boxes</b>: At the heart of Vagrant are boxes. Boxes are the predefined images that are used by Vagrant to build the environment according to the instructions provided by the user. A box may be a plain OS installation, or it may be an OS installation plus one or more applications installed. Boxes may support only a single provider or may support multiple providers (for example, a box might only work with VirtualBox, or it might support VirtualBox and VMware Fusion). It’s important to note that multi-provider support by a box is really handled by multiple versions of a box (i.e, a version supporting VirtualBox, a version supporting AWS, or a version supporting VMware Fusion). A single box supports a single provider.

<b>Vagrantfile</b>: The Vagrantfile contains the instructions from the user, expressed in Vagrant’s DSL, on what the environment should look like—how many VMs, what type of VM, the provider, how they are connected, etc. Vagrantfiles are so named because the actual filename is Vagrantfile. The Vagrant DSL (and therefore Vagrantfiles) are based on Ruby.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
- [Official Documentation](https://www.vagrantup.com/docs/index.html)
- [How to Get Started](https://www.vagrantup.com/intro/getting-started/index.html)
-[A Quick Introduction to Vagrant](https://blog.scottlowe.org/2014/09/12/a-quick-introduction-to-vagrant)
