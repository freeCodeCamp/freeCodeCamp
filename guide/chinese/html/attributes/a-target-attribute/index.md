---
title: A Target Attribute
localeTitle: 目标属性
---
## 目标属性

的`<a target>`属性指定在何处打开在所链接的文档`a` （锚）标签。

#### 例子：

值为“\_blank”的目标属性会在新窗口或选项卡中打开链接的文档。

```html

    <a href="https://www.freecodecamp.org" target="_blank">freeCodeCamp</a> 
```

值为“\_self”的目标属性会在链接的文档与单击时打开相同的框架（这是默认设置，通常不需要指定）。

```html

    <a href="https://www.freecodecamp.org" target="_self">freeCodeCamp</a> 
```

```html

    <a href="https://www.freecodecamp.org">freeCodeCamp</a> 
```

值为“\_parent”的目标属性将打开父框架中的链接文档。

```html

    <a href="https://www.freecodecamp.org" target="_parent">freeCodeCamp</a> 
```

值为“\_top”的目标属性将在窗口的完整正文中打开链接的文档。

```html

    <a href="https://www.freecodecamp.org" target="_top">freeCodeCamp</a> 
```

值为_“framename”_的target属性打开指定命名框架中的链接文档。

```html

    <a href="https://www.freecodecamp.org" target="framename">freeCodeCamp</a> 
```

#### 更多信息：

目标属性： [w3schools](https://www.w3schools.com/tags/att_a_target.asp)