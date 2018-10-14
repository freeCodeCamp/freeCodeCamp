---
title: CSS3 Opacity Property
localeTitle: CSS3不透明度属性
---
## CSS3不透明度属性

`opacity`允许您控制元素在`0`到`1`范围内的透明度。

如果将元素的属性设置为`0`则它将是透明的。如果将其设置为`1`则它将是不透明的。

将元素设置为`opacity: 0;`不会从页面中删除它。该元素仍然可以点击并影响页面内容的流程。

```css
.transparent { 
    opacity: 0; 
 } 
 
 .verySeeThrough { 
    opacity: 0.3; 
 } 
 
 .slightlySeeThrough { 
    opacity: 0.7; 
 } 
 
 .opaque { 
    opacity: 1; 
 } 
```

[这个简单的示例](https://jsfiddle.net/1ogmxaf8/1/)显示了如何使用具有悬停效果的不透明度。

#### 更多信息：

*   [MDN网络文档](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)
*   [CSS诀窍年鉴](https://css-tricks.com/almanac/properties/o/opacity/)