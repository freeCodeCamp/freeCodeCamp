---
title: Background Repeat Property
localeTitle: 背景重复属性
---
## 背景重复属性

background-repeat CSS属性定义了背景图像的重复方式。

可以沿水平轴，垂直轴，两个轴重复背景图像，或者根本不重复背景图像。 默认情况下，垂直和水平重复背景图像。

句法：

```css
background-repeat: repeat|repeat-x|repeat-y|no-repeat|initial|inherit; 
```

*   重复：背景图像将垂直和水平重复。这是默认的
    
*   repeat-x：背景图像只能水平重复
    
*   repeat-y：背景图像仅垂直重复。
    
*   不重复：背景图像不会重复。
    
*   initial：将此属性设置为其默认值。
    
*   inherit：从其父元素继承此属性。
    

例子： 用于水平和垂直重复图像

```css
body { 
    background-image:url(smiley.gif); 
    background-repeat:repeat; 
 } 
```

用于水平重复图像

```css
body { 
    background-image:url(smiley.gif); 
    background-repeat:repeat-x; 
 } 
```

#### 更多信息：

[有关背景重复属性的更多信息](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat)