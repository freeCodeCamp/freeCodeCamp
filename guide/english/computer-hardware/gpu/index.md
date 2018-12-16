---
title: GPU
---
## GPU

GPU stands for Graphics Processing Unit. Although they are not nessesary for a computer to function, many computers have a dedicated graphics card for better performence rendering videos or playing video games.

A GPU is like a CPU but has different strengths and weaknesses. CPUs are very good at running a couple of tasks very quickly. GPUs are much better at running many tasks at the same time, but slower. A typical GPU can have more than 10,000 tasks running, but to run so many tasks at the same time they must share memory and other resources. GPUs usually run very repetitive tasks over and over to save the CPU from wasting time. Some CPUs have built-in GPUs, but having a separate GPU is almost always more powerful.

GPUs can be used for computation as well as video rendering. Common ways to do this include OpenACC, CUDA, OpenCL, and OpenGL. Some applications include GPU implementations to reduce the amount of time the application takes to run.

The GPU was originally used mainly for 3D game rendering to improve your resolution and framerate. But now these capabilities are being harnessed more broadly to improve computational workloads in many areas; for example financial modeling, cutting-edge scientific research and oil and gas exploration. GPU's are also used as a resource for bitcoin mining, since they are able to run repetitive tasks easily without straining the resources of the CPU, which allows you run an Operating System on the computer with a low end CPU while still being able to bitcoin mine using the GPU

There are two major brands producing GPUs: NVidia and AMD. They are often referred as the "green team" and "red team" which indicate the major color of their logo. 


## Origin of GPU

Most primitive background of GPU can be mapped to the era of VGA (Virtual Graphics Array) controllers. But these were not actually a whole processing unit, but acted as supporting units for display functions. A VGA controller is a simple memory controller connected to Dynamic RAM and a display generator. The main function of a VGA is to receive image data, arrange it properly, and send it to a video device, which was mainly a computer monitor or a TV screen connected to a gaming console for display.

The first ever full-fledged processing unit for graphic acceleration was developed and marketed by NVIDIA in 1999, "GeForce 256". Older 3D accelerators had to rely on CPU to execute graphic calculations. With the new "GeForce 256" as a co-processor for CPU, improved frame rate by more than 50% and lowered the total cost, thereby expanding itself in the consumer market.


## GPU vs CPU

A CPU is optimized for minimum latency, i.e., "to be able to execute as many instructions as possible belonging to a single serial thread, in a given window of time". The processor must be able to switch quickly between operations. In order to get lots of latency on the CPU, there is a lot of infrastructure in the CPU like large caches for data to be readily available for execution, lots of Control Units for out-of-order executions, and a few ALU cores. The ISA of CPU is designed in a more generalized manner and can perform a wide-range of operations.
While the CPU was designed for general purpose computations and instructions, GPU evolved for graphic computations. Same computation needs to be performed on hundreds and thousands of pixels for 2D/3D rendering of graphics. Thus, GPUs were primarily optimized for maximum throughput. This is implemented using tons of ALUs in a single architecture. The L2 cache is shrunk because till the data is fetched from DRAM, GPU cores have a lot of computations to perform, thereby overlapping the CPU stall time with massive parallelism. This is known as latency hiding.



## Evolution of GPU Architecture

GPUs were originally modeled on the concept of graphics pipeline. Graphics pipeline is a theoretical model, comprising of levels how the graphics data is to be sent through and executed using GPU and software(like OpenGL, DirectX). The pipeline basically converts 3D spatial coordinates into 2D pixelated data for the device to display. The following is an illustration of "Traditional Fixed-function Graphics Pipeline", commonly accepted pipeline till today.

### 0th Generation
"Reality Engine" board by Silicon Graphics Inc.(SGI) marked the onset of GPU hardware and the graphics pipeline. But the technology was still dependent upon CPU for the first half. Also, the speed was limited to one pixel execution per clock cycle. The engine use OpenGL, a widely used 2D/3D application programming.
### 1st Generation
The "3dfx Voodoo" (1996) evolved as one of the first true 3D-accelerator for games. It handled texture mapping, rasterization, and z-buffering but the CPU still had to do vertex transformations.
### 2nd Generation
This is the point when the first-ever true GPU, NVIDIA's "GeForce 256" was released in the common market. The GPUs of this generation's used Accelerated Graphics Port(AGP), offered new functions like multi-texturing, hardware geometry transform, light maps, and lighting. The traditional pipelines were known as a "fixed function" pipeline, because once the developer sent graphics data into the GPU's pipeline, the data could not be changed.
### 3rd Generation
With this generation of CPUs, programmable pipelining came into existence. Now the previously non-programmable parts could be programmed by programmers. In 2001, NVIDIA released the GeForce3.
### 4th Generation
With the beginning of 21st century, the first "fully programmable graphics cards" had reached the consumers. NVIDIA GeForce FX, ATI Radeon 9700 were among the first. These GPUs could do per-pixel operations along with pixel shaders and programmable vertex. But, separate dedicated hardwares were needed for vertex shader and pixel shader processing.
### 5th Generation
GPUs were evolving and advancing at it's peak rate and this generation GPUs were the first to utilize PCI-express bus. Multiple rendering buffers, 64-bit support, texture access etc. were introduced, along with increase in GPU memory.
### 6th Generation
In 2006, the release of NVIDIA's GeForce 8 series GPU revolutionized the GPU industry and reach, by introducing the GPU as massively parallel processors. It was the first to have "unified" and "programmable" shaders or, in other words, programmable unified processor. Unified means all the processes of graphics pipeline were executed on a single processor and no external unit is required for any stage. Basic Unified GPU architecture components are discussed below.

Since the release of the 9XX series NVidia GPUs, the performance increase between generations only got better. From the 980Ti to the 1080Ti and the newly launched 208Tis, performance has more than doubled. AMD also started to produce better GPUs like the RX 580 and Vega 64, although this is still nowhere near Nvidia's level.
Just recently, Nvidia launched a new line of GPUs titled RTX which includes the higher-end cards like 2080Ti, 2080, and 2070. RTX stands for "Ray Tracing", which is a rendering technique used in generating images though tracing the path of light in a scene. The more "Rays" or light created, the more accurate the graphic image quality will be, as it is more optimized to enhance lighting effects and shadows.


## Basic Unified GPU Architecture Components

Unified GPU architectures are based on a parallel array of many programmable processors, wherein all the stages of graphics pipeline, viz., vertex, geometry, rasterization, and pixel shader processing and parallel computations on the same core, in contrast with earlier GPUs. The processor array is highly integrated with fixed function processors for compression and decompression, rasterization, raster operations, texture filtering, anti-aliasing, video decoding, and HD video processing.

The following discussed architecture is focused on executing many parallel threads efficiently on many processor cores.

### Processor Array
A processor array consists of many processing cores. A unified GPU processor array has a typical organized structure of multi-threaded multi-processors. For execution of each thread, a multiprocessor is involved, and in each GPUs multi-processor, also known as Streaming Multiprocessors (SM), there are numerous Streaming processors, arranged in a queue. All the processors connect to DRAM partitions via interconnection network.
### Multi-Threading
As discussed earlier, GPU is optimized for high throughput and latency hiding. High scale multithreading shrinks the latency of memory loads from DRAM. While a thread is at stall because of a load or fetch instruction to complete, the processor can execute another thread. Also, because of high scale multithreading, GPU supports fine-grained parallel graphics shader programming models and fine-grained parallel computer programming models.
### Multi-Processor Architecture
Besides multiple processor cores in a SM, there are Special Functional Units, a multithreaded instruction unit, instruction and constant caches, and a shared memory. Also, each core consists of large multi-threaded register file (RF).Each streaming processor core consists of both integer and floating point arithmetic units, which together can handle most of the operations.

### SIMT
The streaming multi-processor use a "single-instruction multiple-thread (SIMT)" architecture. The instructions are executed in group of parallel threads known as warps. Each parallel thread is of the same type and start together at the same program address. SIMT processor architecture is quite similar to SIMD architecture. In SIMT, a particular instruction is executed in multiple parallel threads independently, while in SIMD, same instruction is executed in multiple data lanes in synchronous groups.
### Streaming Processor
It executes all the fundamental FP operations as well as arithmetic, comparison, conversion, and logical PTX instructions.
Special Functional Unit
Some of the thread instructions are executed on SFUs simultaneously with other thread instruction being executed on the SPs.


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

- <a href='https://en.wikipedia.org/wiki/Graphics_processing_unit' target='_blank' rel='nofollow'>Wikipedia</a>
- <a href='https://www.openacc.org/' target='_blank' rel='nofollow'>OpenACC</a>
- <a href='https://developer.nvidia.com/cuda-zone' target='_blank' rel='nofollow'>CUDA</a>
- <a href='https://www.khronos.org/opencl/' target='_blank' rel='nofollow'>OpenCL</a>
- <a href='https://www.opengl.org/' target='_blank' rel='nofollow'>OpenGL</a>
- <a href='https://blogs.nvidia.com/blog/2009/12/16/whats-the-difference-between-a-cpu-and-a-gpu/' target='_blank' rel='nofollow'>nVidia Blog</a>
- <a href='https://www.nvidia.com/' target='_blank' rel='nofollow'>NVidia</a>
- <a href='http://www.amd.com/en-us/products/graphics' target='_blank' rel='nofollow'>AMD</a>
