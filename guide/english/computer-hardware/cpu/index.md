---
title: CPU
---

# CPU
**The Central Processing Unit (CPU)** often referred to as the "brain" of a computer, performs essential computational tasks.

CPUs are integrated circuits, which are complex circuits embedded on a single chip. They include registers, which store single values, and input/output pins. These pins allow them to talk to the rest of the computer. Due to the continued advancement of CPU technology, many computers today utilize a multi-processing unit. Multi-processors are single chips that contain two or more CPUs or "cores" that allow for increased processing capabilities.    

CPU speeds are measured in **gigahertz (GHz)**. For every gigahertz of speed, a CPU can perform one billion instructions a second. These instructions are very simple, one-time operations, such as "add two numbers" or "move this variable to this location." To see this in action, read about <a href='https://en.wikipedia.org/wiki/Assembly_language'>assembly language</a>.

[Gigahertz](https://en.wikipedia.org/wiki/Hertz) is not the only determining factor in the actual speed of a processor, as different processors with the same gigahertz speed (also known as <a href='https://en.wikipedia.org/wiki/Clock_rate'>clock speed)</a> can perform real-world tasks at different speeds due to using different sets of instructions to perform these tasks. These instruction sets are called **CPU architectures**.

Most modern CPUs use a <a href='https://en.wikipedia.org/wiki/64-bit_computing'>64-bit architecture</a>, which means they use 64-bit long memory addresses. Older CPUs used 32-bit, 16-bit, and even 8-bit architectures. The largest number a 64-bit CPU can store is 18,446,744,073,709,552,000. A CPU needs memory addresses to get specified values from the [**Random Access Memory (RAM)**](https://en.wikipedia.org/wiki/Random-access_memory). If we call the length of the memory addresses n, 2^n is the number of memory cells a CPU can address.

An instruction cycle for a CPU is called the [fetch-decode-execute cycle](https://en.wikipedia.org/wiki/Instruction_cycle) - where the computer retrieves an instruction from its memory, determines which instruction it fetched and what it does, and then carries out said instructions.

Perhaps the most common issue affecting the CPU is inadequate cooling. CPUs, along with Graphics Processing Units (GPU), are the main generators of heat in computer systems. Due to their nature, they are typically sold along with a dedicated cooling fan. There are various ways of reducing heat in a computer, with the two main systems being air fans or liquid cooling systems. Proper heat maintenance and additional hardware can allow a properly configured CPU to perform better than rated by the chip manufacturer (aka "Overclocking"). Note that chips must be unlocked in order to have the ability to be overclocked.

## Function
A microprocessor is a silicon chip containing millions of microscopic electronic switches called transistors. This chip functions as the computer's brain. It processes the instructions or operations contained within executable computer programs. Instead of taking instructions directly off of the hard drive, the processor takes its instructions from memory. This greatly increases the computer's speed.

## Manufacturers of Computer Microprocessors
There are two primary manufacturers of computer microprocessors. Intel and Advanced Micro Devices (AMD) lead the market in terms of speed and quality. Intel's desktop CPUs include Celeron, Pentium and Core. AMD's desktop processors include Sempron, Athlon and Phenom. Intel makes Celeron M, Pentium M and Core mobile processors for notebooks. AMD makes mobile versions of its Sempron and Athlon, as well as the Turion mobile processor which comes in Ultra and Dual-Core versions. Both companies make both single-core and multi-core processors.

## Manufacturers of Mobile Microprocessors
The improvements in microprocessor technology have also led to significant technology advances in CPUs designed specifically for the mobile space. Processors based on designs from ARM, Qualcomm, and others have resulted in new mobile devices with capabilities that are unheard of in past generations. These modern mobile CPUs power popular consumer devices from the latest iteration of Apple iPhones and Android-based Phones to IOT(Internet of Things), devices like Amazon Echo and Google Home, with capabilities such as HD Video recording/video conferencing, stereo audio, 3D gaming, and applications that are dependent on mobile CPU performance. This is one of the factors contributing to the growth and adoption of mobile devices which in turn has generated demand and provided an opportunity for the creation of new applications with greater capabilities.

## Performance
The performance or speed of a processor depends on, among many other factors, the clock rate (generally given in multiples of hertz) and the instructions per clock (IPC), which together are the factors for the instructions per second (IPS) that the CPU can perform. Many reported IPS values have represented "peak" execution rates on artificial instruction sequences with few branches, whereas realistic workloads consist of a mix of instructions and applications, some of which take longer to execute than others. The performance of the memory hierarchy also greatly affects processor performance, an issue barely considered in MIPS calculations. Because of these problems, various standardized tests, often called "benchmarks" for this purpose such as SPECint have been developed to attempt to measure the real effective performance in commonly used applications.

Processing performance of computers is increased by using multi-core processors, which essentially is plugging two or more individual processors (called cores in this sense) into one integrated circuit. Ideally, a dual core processor would be nearly twice as powerful as a single core processor. In practice, the performance gain is far smaller, only about 50%, due to imperfect software algorithms and implementation. Increasing the number of cores in a processor (i.e. dual-core, quad-core, etc.) increases the workload that can be handled. This means that the processor can now handle numerous asynchronous events, interrupts, etc. which can take a toll on the CPU when overwhelmed. These cores can be thought of as different floors in a processing plant, with each floor handling a different task. Sometimes, these cores will handle the same tasks as cores adjacent to them if a single core is not enough to handle the information.

Due to specific capabilities of modern CPUs, such as hyperthreading and uncore, which involve sharing of actual CPU resources while aiming at increased utilization, monitoring performance levels and hardware use gradually became a more complex task. As a response, some CPUs implement additional hardware logic that monitors actual use of various parts of a CPU and provides various counters accessible to software; an example is Intel's Performance Counter Monitor technology.

## Types of Computer CPUs
The computer CPU is a vital component that handles all the instructions and calculations that are sent to it from other computer's components and peripherals. The speed at which software programs operate is also very dependent upon how powerful the CPU is, so it is important to have the right type for what you expect it to handle. The two leading CPU manufacturers are Intel and AMD, each with their own types of CPUs

### Single Core CPUs
Single core CPUs are the oldest type of computer CPU available and initially, this was the only type of CPU that could be used in computers. Single core CPUs can only start one operation at a time, so they were not very good at multi-tasking. This meant that there were noticeable decreases in performance whenever more than one application was running. Although only one operation could be started at a time, another one could be activated before the first one was finished but with each new operation, the computer would run more slowly. Performance on these types of CPUs was largely dependent on their clock speeds, which was a measurement of their power.

### Dual-Core CPUs
A dual-core CPU is a single CPU that has two cores and thus functions like two CPUs in one. Unlike single core CPUs where the processor had to switch back and forth between different sets of data streams if more than one operation was running, dual-core CPUs can handle multitasking much more efficiently. To make the most of a dual-core CPU, both the operating system and the programs running on it must have a special code called SMT (simultaneous multi-threading technology) written into it. Dual core CPUs are faster than single-core ones but not as fast the quad-core CPUs that have superseded them. A dual-core CPU is a single CPU that has two cores and thus functions like two CPUs in one. Unlike single core CPUs where the processor had to switch back and forth between different sets of data streams if more than one operation was running, dual-core CPUs can handle multitasking much more efficiently. To make the most of a dual-core CPU, both the operating system and the programs running on it must have a special code called SMT (simultaneous multi-threading technology) written into it. Dual core CPUs are faster than single-core ones but not as fast the quad-core CPUs that have superseded them.

### Quad Core CPUs
Quad Core CPUs are a further refinement of the multi-core CPU design and features four cores on a single CPU. Just as dual-core CPUs could split the workload between two cores, quad cores allow for even greater multitasking. This doesn't mean that a single operation will be four times faster however, and unless the programs and applications running on it have SMT code, the speed increase will not be so noticeable. These types of CPUs are useful for people that need to run a lot of different programs at the same time as well as gamers, as there are games like the Supreme Commander series that are optimized for multi-core CPUs.

## More Information:
- [Central Processing Unit - Wikipedia](https://en.wikipedia.org/wiki/Central_processing_unit)
- [Technopedia](https://www.techopedia.com/definition/2851/central-processing-unit-cpu)
- [Simplified](https://www.bbc.com/bitesize/guides/zws8d2p/revision/1)
- [Techwalla](https://www.techwalla.com/articles/types-of-computer-cpu)
- [How to overclock your PC's CPU - PCWorld](https://www.pcworld.com/article/3186812/computers/how-to-overclock-your-pcs-cpu.html)
