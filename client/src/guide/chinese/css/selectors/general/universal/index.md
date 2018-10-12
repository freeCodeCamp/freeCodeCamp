---
title: Universal
localeTitle: 普遍
---
## 普遍

通用选择器（\*）选择所有元素。它还选择元素内的所有元素。您可以将通用选择器与任何其他选择器连接。

### 代码语法

```css
* { 
  css declarations; 
 } 
```

```css
element * { 
  css declarations; 
 } 
```

#### 代码示例

此选择器匹配所有元素并将字体颜色设置为绿色。

```css
* { 
  color: green; 
 } 
```

此选择器选择所有div元素并将字体颜色设置为绿色。

```css
div * { 
  color: green; 
 } 
```

此选择器选择语言属性值以en开头的所有元素。

```css
* [lang^=en] { 
  color: green; 
 } 

```