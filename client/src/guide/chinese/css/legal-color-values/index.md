---
title: Legal Color Values
localeTitle: 法律颜色值
---
## 法律颜色值

CSS中的颜色可以用以下格式指定：

*   [十六进制](#hexadecimal-colors)
*   [RGB](#rgb-colors)
*   [RGBA](#rgba-colors)
*   [HSL](#hsl-colors)
*   [HSLA](#hsla-colors)
*   [预定义的颜色名称](#predefined-color-names)

### 十六进制颜色

#### 浏览器支持

所有主流浏览器都支持十六进制颜色值。

#### 格式

十六进制值指定为**#RRGGBB** ，其中RR（红色），GG（绿色）和BB（蓝色）十六进制整数指定颜色的分量。所有值必须介于00和FF之间。顾名思义，编码基于16。

#### 例

这是不同的六角形颜色。在https://jsfiddle.net/qg9revp4/2/上找到实时示例。

```css
#divRed{ 
  color: #ff0000; /* red */ 
 } 
 
 #divGreen{ 
  color: #00ff00; /* green */ 
 } 
 
 #divBlue{ 
  color: #0000ff; /* blue */ 
 } 
 
 #divWhite{ 
  color: #ffffff; /* white */ 
  background: #000000; /* black background, so that the text is visible */ 
 } 
```

### RGB颜色

#### 浏览器支持

所有主流浏览器都支持RGB值。

#### 格式

RGB值指定为**rgb（红色，绿色，蓝色）** 。每个参数（红色，绿色和蓝色）定义颜色的强度，可以是0到255之间的整数。

#### 例

这是不同的RGB颜色。在https://jsfiddle.net/vspepeth/1/上找到实时示例。

```css
#divRed{ 
  color: rgb(255, 0, 0); /* red */ 
 } 
 
 #divGreen{ 
  color: rgb(0, 255, 0); /* green */ 
 } 
 
 #divBlue{ 
  color: rgb(0, 0, 255); /* blue */ 
 } 
 
 #divWhite{ 
  color: rgb(255, 255, 255); /* white */ 
  background: rgb(0, 0, 0); /* black background, so that the text is visible */ 
 } 
```

### RGBA颜色

#### 浏览器支持

IE9 +，Firefox 3 +，Chrome，Safari和Opera 10+支持RGBA颜色值。

#### 格式

RGBA值指定为**rgb（红色，绿色，蓝色，alpha）** 。可以把它想象成RGB格式的扩展，带有alpha通道。 alpha参数是介于0.0（完全透明）和1.0（完全不透明）之间的数字。其他参数（红色，绿色和蓝色）定义颜色的强度，可以是0到255之间的整数。

#### 例

这是不同的RGBA颜色。在https://jsfiddle.net/hq0ngwg2/1/上找到实时示例。

```css
#divRed{ 
  color: rgba(255, 0, 0, 0.3); /* red with opacity */ 
 } 
 
 #divGreen{ 
  color: rgba(0, 255, 0, 0.7); /* green with opacity */ 
 } 
 
 #divBlue{ 
  color: rgba(0, 0, 255, 0.5); /* blue with opacity */ 
 } 
 
 #divWhite{ 
  color: rgba(255, 255, 255, 0.6); /* white with opacity */ 
  background: rgba(0, 0, 0, 0.8); /* black background with opacity */ 
 } 
```

### HSL颜色

#### 浏览器支持

IE9 +，Firefox，Chrome，Safari和Opera 10+支持HSL颜色值。

#### 格式

HSL代表色调，饱和度和亮度。它被指定为**hsl（色调，饱和度，亮度）** 。

*   **色调** ：它是色轮上的度数（从0到360）。 _0_ （或_360_ ）为红色， _120_为绿色， _240_为蓝色。
    
*   **饱和度** ：这是一个百分比值。 _0％_表示灰色阴影， _100％_表示全彩色。
    
*   **亮度** ：它也是一个百分比值。 _0％_为黑色， _100％_为白色。
    

#### 例

以下是[W3.org的](https://www.w3.org/TR/css3-color/#hsl-color)表格。每个表代表一种色调。从色环中选择了十二个等间距的颜色（即以30°间隔）。每个表的X轴表示饱和度（100％，75％，50％，25％，0％）。 Y轴表示亮度。 50％是“正常”。

![HSL表](https://image.ibb.co/ngq686/hsl.png)

在https://jsfiddle.net/g10zpL28/1/上找到实时示例。

```css
#div1 { 
  background-color: hsl(240, 100%, 50%); /* blue */ 
 } 
 #div2 { 
  background-color: hsl(195, 53%, 79%); /* light blue */ 
 } 
 #div3 { 
  background-color: hsl(240, 100%, 25%); /* dark blue */ 
 } 
 #div4 { 
  background-color: hsl(187, 75%, 86%); /* pastel blue */ 
 } 
```

### HSLA颜色

#### 浏览器支持

IE9 +，Firefox 3 +，Chrome，Safari和Opera 10+支持HSLA颜色值。

#### 格式

HSLA代表色调，饱和度，亮度和alpha通道。它被指定为**hsla（色调，饱和度，亮度，alpha）** 。 Alpha通道指定颜色的不透明度。

*   **色调** ：它是色轮上的度数（从0到360）。 _0_ （或_360_ ）为红色， _120_为绿色， _240_为蓝色。
    
*   **饱和度** ：这是一个百分比值。 _0％_表示灰色阴影， _100％_表示全彩色。
    
*   **亮度** ：它也是一个百分比值。 _0％_为黑色， _100％_为白色。
    
*   **Alpha通道** ：它是0.0（完全透明）和1.0（完全不透明）之间的数字。
    

#### 例

以下是HSLA颜色的示例。请访问https://jsfiddle.net/2Lxscgfy/1/查看它们。

```css
#div1 { 
  background-color: hsla(240, 100%, 50%, 0.5); /* blue with transparency */ 
 } 
 #div2 { 
  background-color: hsla(195, 53%, 79%, 0.8); /* light blue with transparency */ 
 } 
 #div3 { 
  background-color: hsla(240, 100%, 25%, 0.3); /* dark blue with transparency */ 
 } 
 #div4 { 
  background-color: hsla(187, 75%, 86%, 1.0); /* pastel blue with transparency */ 
 } 
```

### 预定义的颜色名称

#### 浏览器支持

在CSS颜色规范中预定义了147种颜色名称。所有现代浏览器都支持它们

#### 例

以下是一些正在使用的颜色名称。查看https://jsfiddle.net/rqygumpy/上的实例。在[MDN文档中](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Color_keywords)查找整个列表。

```css
#div1{ 
  color: BlueViolet; 
 } 
 
 #div2{ 
  color: RebeccaPurple; 
 } 
 
 #div3{ 
  color: RoyalBlue; 
 } 
 
 #div4{ 
  color: Salmon; 
 } 
```

#### 更多信息：

[CSS颜色的MDN Web文档](https://developer.mozilla.org/en-US/docs/Web/CSS/color)