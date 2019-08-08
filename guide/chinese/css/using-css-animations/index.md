---
title: Using CSS Animations
localeTitle: 使用CSS动画
---
## 使用CSS动画

CSS动画为网页增添了美感。 CSS动画可以将CSS样式转换为另一种CSS样式。

要创建CSS动画序列，我们在CSS的`animation`属性中有不同的子属性：

*   `animation-delay`
*   `animation-direction`
*   `animation-duration`
*   `animation-iteration-count`
*   `animation-name`
*   `animation-play-state`
*   `animation-timing-function`
*   `animation-fill-mode`

### 用于在屏幕上移动文本的CSS动画序列示例

在HTML部分中，我们将有一个带有类`container`的`div`和一个带有文本`Hello World`的`h3` ：

```html

<div class="container"> 
    <h3> Hello World ! </h3> 
 </div> 
```

对于CSS部分：

```css
.container { 
    /* We will define the width, height and padding of the container */ 
    /* The text-align to center */ 
    width: 400px; 
    height: 60px; 
    padding: 32px; 
    text-align: center; 
 
    /* Use the animation `blink` to repeat infinitely for a time period of 2.5s*/ 
    animation-duration: 2.5s; 
    animation-iteration-count: infinite; 
    animation-direction: normal; 
    animation-name: blink; 
 
    /* The same can be written shorthand as     */ 
    /* --------------------------------------   */ 
    /* animation: 2.5s infinite normal blink;   */ 
 } 
 @keyframes blink { 
    0%, 100% {              /* Defines the properties at these frames */ 
        background: #333; 
        color: white; 
    } 
 
    50% {                   /* Defines the properties at these frames */ 
        background: #ccc; 
        color: black; 
        border-radius: 48px; 
    } 
 } 
```

![Imgur](https://cdn-media-1.freecodecamp.org/imgr/sczZjwm.gif)

#### 更多信息：

有关CSS动画的更多信息，请访问[Mozilla Developer Network Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)