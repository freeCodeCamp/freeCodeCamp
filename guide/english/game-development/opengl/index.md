---
title: OpenGL
---
## Game Development with OpenGL

Open Graphics Library (OpenGL) is a cross-language, cross-platform application programming interface (API) for rendering 2D and 3D vector graphics. The API is typically used to interact with a graphics processing unit (GPU), to achieve hardware-accelerated rendering.

Silicon Graphics Inc., (SGI) started developing OpenGL in 1991 and released it in January 1992; applications use it extensively in the fields of computer-aided design (CAD), virtual reality, scientific visualization, information visualization, flight simulation, and video games. Since 2006 OpenGL has been managed by the non-profit technology consortium Khronos Group.

## Implementations
Mesa 3D is an open-source implementation of OpenGL. It can do pure software rendering, and it may also use hardware acceleration on BSD, Linux, and other platforms by taking advantage of the Direct Rendering Infrastructure. As of version 13.0, it implements version 4.5 of the OpenGL standard.

## Prerequisites

No special prerequisite is needed to follow most tutorials. Experience with any programming langage ( C, Java, Lisp, Javascript) is better to fully understand the code, but not needed; it will merely be more complicated to learn two things at the same time.

## Installing OpenGL on Linux
Mesa is the GL library used. Ubuntu 16.04 includes Mesa 11.2 which supports OpenGL 4.1. Just install the `libgl1-mesa-dev` and `mesa-common-dev` packages to install the development files for it.

If you really need 4.5, you will likely need to develop against the propreitary AMD or NVidia drivers, and you will need a card which actually supports 4.5 to run any software you create using that version of the API.


#### More Information

- [OpenGL Offical Website](https://www.opengl.org/)
- [OpenGL Wiki](https://en.wikipedia.org/wiki/OpenGL)
- [OpenGL Tutorials](http://www.opengl-tutorial.org/)

