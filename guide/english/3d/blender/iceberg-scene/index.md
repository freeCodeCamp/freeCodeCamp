---
title: Blender Water Shader effect
---

## This is a simple scene to render polar waters.

To make the cube look like water, mix the following shaders:

*Glass BSDF Shader :	Roughness = 0.850
						IOR = 	1.010 ~ 1.333
						Color = Blue
*Mix Shader :	Factor = 0.500
*Translucent BSDF Shader :	Color ~= 2B9489 (a bit dark greenish blue)
*Transparent BSDF Shader :	Color ~= 3173C0 (bluish)

![Imgur](https://i.imgur.com/msFhj0x.png) 
#### Basic Render of the Above Node Layout.
![Imgur](https://i.imgur.com/ZI8P3Qx.png)

