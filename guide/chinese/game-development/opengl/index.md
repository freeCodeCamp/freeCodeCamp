---
title: OpenGL
localeTitle: OpenGL的
---
## 使用OpenGL进行游戏开发

开放图形库（OpenGL）是一种跨语言，跨平台的应用程序编程接口（API），用于渲染2D和3D矢量图形。 API通常用于与图形处理单元（GPU）交互，以实现硬件加速渲染。

Silicon Graphics Inc.（SGI）于1991年开始开发OpenGL，并于1992年1月发布;应用程序广泛应用于计算机辅助设计（CAD），虚拟现实，科学可视化，信息可视化，飞行模拟和视频游戏领域。自2006年以来，OpenGL一直由非营利性技术联盟Khronos Group管理。

## 实现

Mesa 3D是OpenGL的开源实现。它可以进行纯软件渲染，也可以利用Direct Rendering Infrastructure在BSD，Linux和其他平台上使用硬件加速。从版本13.0开始，它实现了OpenGL标准的4.5版本。

## 先决条件

大多数教程都不需要特殊的先决条件。任何编程语言（C，Java，Lisp，Javascript）的经验都可以更好地理解代码，但不需要;同时学习两件事情只会更复杂。

## 在Linux上安装OpenGL

Mesa是使用的GL库。 Ubuntu 16.04包含支持OpenGL 4.1的Mesa 11.2。只需安装`libgl1-mesa-dev`和`mesa-common-dev`软件包即可为其安装开发文件。

如果你真的需要4.5，你可能需要针对AMD或NVidia驱动程序进行开发，你需要一张真正支持4.5的卡来运行你使用该版本API创建的任何软件。

#### 更多信息：

[OpenGL Wiki](https://en.wikipedia.org/wiki/OpenGL) [OpenGL教程](http://www.opengl-tutorial.org/)