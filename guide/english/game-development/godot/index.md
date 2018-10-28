---
title: Godot Engine
---

## Technical Features

### The Scene System
In Godot scenes are organized in a tree structure. The elements are called nodes and each have exactly one parent node and any number of child nodes. All objects in Godot are nodes and a scene is the sum of all nodes and their arrangement in the scene tree (scenetree). This structure achieves great flexibility, since in Godot sub-scenes can also be inserted as nodes at any places in the scene tree and thus a high level of abstraction and order can be achieved. As of version 2.0, it is also possible to create an inheritance hierarchy between scenes. Changes in the basic scene are immediately available in all derived scenes.

### Programming

The scripting language in Godot is the specially developed GDScript. GDScript is syntactically very similar to Python, but has been partly adapted to be better integrated into the engine.  Scripts can be assigned directly to the nodes created in the editor and variables can be exported from the source code to the editor. The integrated editor component has syntax highlighting and an advanced auto-completion system. In addition to GDScript, programs can also be written in C++. For shader programming a separate scripting language has been integrated, which is GLSL oriented. An integrated debugger is available for error handling and performance measurement.  Since version 3.0 GDNative is included in Godot, an interface which allows to connect external libraries with Godot without having to recompile Godot. This also provides support for other programming languages, the most prominent example being C#. Additionally there is the possibility to define programming logic graphically via flowcharts using VisualScript

