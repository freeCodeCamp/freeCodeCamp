---
title: RAM
---
## RAM

RAM stands for random-access memory, alternatively referred to as **main memory**, **primary memory**, or **system memory**. It is a piece of computer hardware where the data that your computer is currently working on is stored.<br>
Unlike hard drives, RAM is a volatile memory and requires power to keep the data accessible. If the computer is turned off, all data contained in RAM is lost. New users often confuse RAM with disk drive space. See [memory definition](https://www.computerhope.com/jargon/m/memory.htm) for a comparison between memory and storage.<br>

### Types of RAM:

There are two main types of RAM: static (SRAM) and dynamic (DRAM). Static RAM is constructed using flip-flops, is very fast, but is difficult to make in large sizes. Dynamic RAM is constructed using capacitors, is fairly fast, but needs 'refreshed' periodically to keep charge on the capacitors. SRAM is often used closer to the CPU due to its speed and space constraints whereas DRAM is used as main memory.

Some examples of packaging RAM are: DIMM, RIMM, SIMM, SO-DIMM, and SO-RIMM. Below is an example image of a 512 MB DIMM computer memory module, a typical piece of RAM found in desktop computers. This memory module would be installed into one of the memory slots on a motherboard.

![RAM](https://images-na.ssl-images-amazon.com/images/I/41kVnWQebtL._SL256_.jpg)

### RAM speeds:

The speed rating of your RAM module is an expression of its data transfer rate, and it's almost always expressed in megahertz (Mhz). The faster the number, the faster your computer can store and retrieve the data stored in local memory. The formula for the exact speed rating changes slightly based on the version of DDR memory your computer is using. It’s no longer simply an expression of clock speed, like a processor, but a combination of hardware factors. But in general, faster is better. Like the GPU and CPU, RAM can also be overclocked. To achieve the faster speed, a user has to enable an XMP (Intel) or AMP (AMD) profile in the BIOS.

The standard which dictates the rough speed for RAM in most computers has been DDR3, which is still widely adopted and supports a limit fo 2133MHz or greater when run outside of its specification by overclocking. A new standard, DDR4, has been released in recent years and promises a wider range of clock speeds and reduced power consumption and latencies, and increases the maximum DIMM size from 16 GB to 64 GB.

The clock speed of the RAM module is not all that matters though. System memory is also affected by the [CAS latency](https://en.wikipedia.org/wiki/CAS_latency) or timings. This can commonly be seen on a RAM module's specifications as a list of numbers separated by dashes such as 15-15-15-35 . Unlike the clock speed the lower these numbers the better the performance. Typically an increase in clock speed requires an increase in latency, and this even apparent across the DDR generations as with each new versions higher clock speeds and higher latencies are seen.

### ECC RAM:

Servers typically use ECC or Error-Correcting Code RAM. This RAM features a few changes which make it less prone to soft errors in memory. The most notable of these changes is the inclusion of an extra physical memory 'chip' on the module. This added memory serves partly to check if any memory has become corrupted. This does bring with it a bit of overhead though, which includes the necessity for ECC RAM to run on a 72-bit bus as opposed to the typical 64-bit bus that would match the processor (as most computers today run on 64bit x86-64 CPUS)

Not all motherboards or CPUs can handle ECC memory; however, it also is rarely a relevant feature to most consumers, instead being mostly used in servers, data centers, and high end business workstations where the added 'insurance' against any down time is worth the added cost.

### Cost Efficiency:

When building a new machine as a hobby, or assembling an entire server rack for a data center, cost efficiency is important with this type of hardware as well as others (such as a GPU) because it's both necessary and often times costly component. A good analysis to start with before the compatibility with other hardware is checked may just be "how much is this gonna cost me" vs "how much am I gonna get out of it". 

Cost can be dependent on the current market, manufacturing of hardware, and the specifications of the hardware itself. Some of these factors may not be something that can be helped on an individual level, but they do influence the choice you make when determining how much you're getting out of purchasing that kind of RAM. 

Do you plan on running VMs across a framework of server clients? Consider new, efficient RAM with desirable features that will benefit that configuration the most, without spending too little or less. Do you plan on building a home machine with the sole purpose of playing movies in the living room? Buy enough to run your desired operating system, and if that's not cheap enough to fit the bill then consider older generation hardware. 

### More Information:

* [Random-access Memory - Wikipedia](https://en.wikipedia.org/wiki/Random-access_memory)
* [RAM - Webopedia](http://www.webopedia.com/TERM/R/RAM.html)
* [Static RAM](https://en.wikipedia.org/wiki/Static_random-access_memory)
* [Dynamic RAM](https://en.wikipedia.org/wiki/Dynamic_random-access_memory)
* [DDR3 SDRAM](https://en.wikipedia.org/wiki/DDR3_SDRAM)
* [DDR4 SDRAM](https://en.wikipedia.org/wiki/DDR4_SDRAM)
* [Types of RAM](http://www.computermemoryupgrade.net/types-of-computer-memory-common-uses.html)
* [Laptop Memory Buyer's Guide](https://www.lifewire.com/laptop-memory-buyers-guide-833024)
* [ECC Memory](https://en.wikipedia.org/wiki/ECC_memory)
