---
title: Text Transform Property
localeTitle: 文本转换属性
---
## 文本转换属性

CSS中的`text-transform`属性控制文本大小写和大小写，并允许这样的控制，而不依赖于写入的原始文本。

此属性最常用的值是`lowercase` ， `uppercase`和`capitalize` 。
```
<style> 
 .lowercased { 
  text-transform: lowercase; 
 } 
 
 .uppercased { 
  text-transform: uppercase; 
 } 
 
 .capitalized { 
  text-transform: capitalize; 
 } 
 </style> 
 
 <p class="uppercased">this text was lowercase.</p> <!-- = THIS TEXT WAS LOWERCASE. --> 
 <p class="lowercased">THIS TEXT WAS UPPERCASE.</p> <!-- = this text was uppercase. --> 
 <p class="capitalized">this text wasn't capitalized.</p> <!-- = This Text Wasn't Capitalized. --> 
```

#### 更多信息：

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)

[CSS-技巧](https://css-tricks.com/almanac/properties/t/text-transform/)