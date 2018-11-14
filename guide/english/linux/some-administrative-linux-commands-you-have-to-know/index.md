---
title: Some Administrative Linux Commands You Have To Know
---
# Some Administrative Linux Commands

In this section we have some useful commands to you admin your Linux system. Initially, an advice: 

**all commands here are dangerous and you will have pay attention before you using them. We recommend you read carefully about 
these commands before use and don't use them if you have any questions unsolved about how they work.**

1. `sysctl` Command

The kernel Linux have several parameters you can control at runtime. The sysctl command is the knife you need to do this. However, you have to be 
careful using this command because depending which parameter you modify, your system crashes. Basically use of this command is: `sysctl <VARIABLE>` 
where `<VARIABLE>` is the runtime parameter you want to see or modify. Some examples of use:

Example 1: `sysctl -a`: print all parameters availabe
Example 2: `sysctl <VARIABLE>`: print the actual value of `<VARIABLE>`.
Example 3: `sysctl -w <VARIABLE> = <VALUE>`: change t he value of `<VARIABLE>` to `<VALUE>`

#### More Information:

[Sysctl Documentation - Kernel.Org](https://www.kernel.org/doc/Documentation/sysctl/)

