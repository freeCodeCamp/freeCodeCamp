---
title: Cascading CSS Variables
localeTitle: 级联CSS变量
---
## 级联CSS变量

正式称为自定义属性的级联CSS变量是与传统变量类似的实体。因为变量允许存储和更新数据以便以后反映新值2 。

CSS变量定义为包含特定值，并在整个文档中重用。它们使用自定义属性表示法（例如， `color: var(--main-color)` `--main-color: black` ）设置，并使用`var()`函数（例如， `color: var(--main-color)` ） 1进行访问 。在`:root`或`body`选择器中声明CSS变量以进行全局访问。

在维护复杂的CSS文档时，不仅有利于使用CSS变量，还有智能。在进行未来更新而不是搜索潜在的数百行代码时，只需要更新必要的CSS变量1 。

### 句法

```css
:root { 
  --main-bkgnd-color:  #00B8CB; 
 } 
 
 body { 
  background-color: var(--main-bkgnd-color); 
  font-family: 'Raleway', Helvetica, sans-serif; 
 } 
```

声明变量：

```css
--custom-name: value 
```

使用变量： `css var(--custom-name)`

### 来源

1.  [访问MDN的Cascading CSS Variables页面以获取更多信息。](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)
2.  [佩尔纳，玛丽亚安东尼塔。 “CSS变量实用指南（自定义属性）” _sitepoint_ 。 2018年8月1日。访问时间：2018年10月5日](https://www.sitepoint.com/practical-guide-css-variables-custom-properties/)