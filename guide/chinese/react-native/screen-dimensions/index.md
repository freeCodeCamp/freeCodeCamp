---
title: Screen Dimensions
localeTitle: 屏幕尺寸
---
## React Native - 屏幕尺寸

React Native使用每英寸点数（DPI）来测量用户界面（UI）的大小和UI上显示的任何内容。这种类型的测量允许应用程序在各种屏幕尺寸和像素密度下看起来均匀。

对于标准用例，可以开发应用程序而无需知道用户设备的细节（例如像素密度），因为UI元素将自动缩放。当需要时，有`PixelRatio` API，例如`PixelRatio`用于查找用户设备的像素密度。

为了获得用户设备的窗口或屏幕高度/宽度，React Native有一个名为`Dimensions`的API。

```js
import { Dimensions } from 'react-native'; 
```

以下是`Dimensions` API提供的方法：

```js
Dimensions.get('window').height; 
 Dimensions.get('window').width; 
 Dimensions.get('screen').height; 
 Dimensions.get('screen').width; 
```

**注意：过去使用Dimensions API存在一些已知问题，例如在用户旋转设备时未返回正确的信息。在部署应用程序之前，最好确保在实际设备上进行测试。**