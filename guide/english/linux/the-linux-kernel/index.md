---
title: The Linux Kernel
---
## What is a Kernel?

The kernel is a computer program that is the core of a computer's operating system, with complete control over everything in the system. On most systems, it is one of the first programs loaded on start-up (after the bootloader). It handles the rest of start-up as well as input/output requests from software, translating them into data-processing instructions for the central processing unit. It handles memory and peripherals like keyboards, monitors, printers, and speakers.

The critical code of the kernel is usually loaded into a separate area of memory, which is protected from access by application programs or other, less critical parts of the operating system. The kernel performs its tasks, such as running processes, managing hardware devices such as the hard disk, and handling interrupts, in this protected kernel space. In contrast, everything a user does is in user space: writing text in a text editor, running programs in a GUI, etc. This separation prevents user data and kernel data from interfering with each other and causing instability and slowness, as well as preventing malfunctioning application programs from crashing the entire operating system.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Kernel_Layout.svg/380px-Kernel_Layout.svg.png" />

The kernel's interface is a low-level abstraction layer. When a process makes requests of the kernel, it is called a system call. Kernel designs differ in how they manage these system calls and resources. A monolithic kernel runs all the operating system instructions in the same address space for speed. A microkernel runs most processes in user space,for modularity.

## What is linux Kernel?

to be continued...

#### More Information:

[Linux on Wikipedia](https://en.wikipedia.org/wiki/Linux)

[Kernel.org - the Linux kernel official website](https://www.kernel.org/)
