---
title: Mbed
---

## The Mbed development platform

Mbed is an online IDE and operating system that allows developers to code **hardware** applications using just a web browser and an internet connection. Similar to Arduino, the platform is oriented to development for IoT devices that have an ARM Cortex-M architecture.

The compilation of the sofware is done on a remote server, allowing the user to download the resulting output binary that then can be drag-and-dropped into compatible devices to run.

### How does it work?

Manufacturers are able to upload library components that add support for using their devices and its components (sensors, LEDs, buttons, communication interfaces) with Mbed. Combining this with the _Hardware Abstraction Layer_ (HAL) Mbed can run transparently on different manufacturer hardware, abstracting out the lower level specifics to the end developer, that just needs to code using the APIs provided.

All the coding can then be done in C++, benefitting from Object-Oriented Programming applied to hardware.

### Additional resources

- [ARM Mbed website](https://www.mbed.com/en/)
- [Official Documentation](https://os.mbed.com/docs/v5.10)
- [A thorough review on Hackaday, including the first compatible hardware](https://hackaday.com/2009/11/21/review-mbed-nxp-lpc1768-microcontroller/)

### Alternatives

- [Particle](https://www.particle.io)
