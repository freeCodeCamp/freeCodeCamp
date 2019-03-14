---
title: Godot
---

## Godot

Godot is a cross-platform, open-source game engine for both 2D and 3D games. It aims to be a fully-integrated game development environment, allowing users to create complex games without using external tools. Godot aims to provide users with visual, easy-to-understand tools that allow a high degree of creative freedom.

Juan Linietsky and Ariel Manzur began developing Godot in 2007, and Version 3.0 was released on 29 January 2018.

### Features

Godot supports programming in C#, C++ and GDScript; GDScript is a high-level scripting language similar to Python. There is also community support for several other languages.

Godot features 3D graphics using OpenGL ES 3.0 and a separate 2D graphics engine, as well as a complex animation system.  

Godot can be used on any desktop OS, and creates games that can be deployed a large number of platforms. 

### The Scene System
In Godot scenes are organized in a tree structure. The elements are called nodes and each have exactly one parent node and any number of child nodes. All objects in Godot are nodes and a scene is the sum of all nodes and their arrangement in the scene tree (scenetree). This structure achieves great flexibility, since in Godot sub-scenes can also be inserted as nodes at any places in the scene tree and thus a high level of abstraction and order can be achieved. As of version 2.0, it is also possible to create an inheritance hierarchy between scenes. Changes in the basic scene are immediately available in all derived scenes.

### Programming

The scripting language in Godot is the specially developed GDScript. GDScript is syntactically very similar to Python, but has been partly adapted to be better integrated into the engine.  Scripts can be assigned directly to the nodes created in the editor and variables can be exported from the source code to the editor. The integrated editor component has syntax highlighting and an advanced auto-completion system. In addition to GDScript, programs can also be written in C++. For shader programming a separate scripting language has been integrated, which is GLSL oriented. An integrated debugger is available for error handling and performance measurement.  Since version 3.0 GDNative is included in Godot, an interface which allows to connect external libraries with Godot without having to recompile Godot. This also provides support for other programming languages, the most prominent example being C#. Additionally there is the possibility to define programming logic graphically via flowcharts using VisualScript

### Technical Features

#### Animations

Godot has a deeply integrated animation system. If you insert the node animation in the scene tree, all attributes of the other nodes in the scene tree can be changed at runtime using keyframes. Furthermore, animations can also be used to call specific functions, which allows a lot of programming logic to be transferred to the editor.

#### Seperation of 2D and 3D

In Godot 2D applications can be created without any knowledge about 3D programming, because the 2D engine runs separately and is not a projection of the 3D engine. This also applies to the integrated physics engines (where their API is kept the same). If required, 2D scenes can still be embedded in the 3D engine. Most 3D scenes can be created in external 3D graphics software (including animations). A large library of GUI elements (called control) can be used in 2D as well as in 3D. The integrated physics engine works in pixel coordinates, not in the metric system.

#### Plaftorm independence

Godot is one of the few game engines that allows game development in Windows, Linux, Mac OS X and other operating systems. Created games can be exported to Android and HTML5 web applications in addition to the desktop operating systems mentioned above. Furthermore, there are project-external export templates with different stability and licenses for PlayStation 3, PlayStation Vita, Nintendo 3DS, Windows Runtime, iOS and Nintendo Switch.

### Documentation

Godot provides an integrated documentation of all classes and functions directly in the editor. An illustrative introduction and detailed instructions can be found on the project website. On the official website there is also a community organized question and answer system (incl. generated FAQ), a forum and a showcase system, all available for learning.

### Games made with Godot

Godot has been used to make a wide range of games such as [Mr Bean - Around the World](https://www.goodcatchgames.com/game/mr-bean-around-the-world/) and [Last Carnival](https://okamgames.com/games-2/last-carnival/). More examples can be found at the [showcase](https://godotengine.org/showcase/)

#### More Information:

- [Godot Official Website](https://godotengine.org/)
- [Godot Docs](http://docs.godotengine.org/en/3.0/)
- [Wikipedia](https://en.wikipedia.org/wiki/Godot_(game_engine))
- [GitHub](https://github.com/godotengine)
