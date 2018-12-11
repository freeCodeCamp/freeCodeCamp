---
title: Font Family Property
localeTitle: 字体系列属性
---
## 字体系列属性

字体系列属性是CSS中的属性。开发人员使用它来更改网站文本的字体系列（或“字体”），或网站文本的一部分。

字体的例子包括Arial，Georgia，Times New Roman等等！

要更改文本部分的字体，请键入特定文本的选择器和一对大括号。在括号内，键入`font-family:`然后键入`font-family:`名称。如果字体的名称包含多个单词，则需要使用单引号或双引号。否则，不需要报价。

```html

<p>This font will be in Times New Roman.</p> 
```

```css
p { 
  font-family: 'Times New Roman'; 
 } 
```

但是，许多不同的人使用不同的计算机浏览全球网络。这意味着不是每个人都会在他们的计算机上安装Times New Roman。要帮助这些用户，您应该添加后备字体。后备字体是浏览器在第一种字体不可用时使用的其他字体。在第一个字体后添加逗号，并添加第一个后备字体的名称。您可以使用多个后备字体。

```html

<p>This font may or may not be in Lato.</p> 
```

```css
p { 
  font-family: Lato, Helvetica, Georgia; 
  /* Helvetica and Georgia are fallback fonts */ 
 } 
```

如果用户没有先安装Lato，那么浏览器将尝试使用Helvetica。如果用户也没有Helvetica，那么浏览器将尝试使用Georgia。如果用户没有Georgia，浏览器将使用用户计算机上安装的字体。

对于后备字体，您可以使用像Georgia这样的命名字体。您还可以使用“sans-serif”，“serif”，“monospace”等常规类型。 Sans-serif字体，如Lato，是字母和数字末尾没有小行的字体。 Serif字体，如Times New Roman，在字母和数字的末尾使用小行。等宽字体，如Consolas，字母和数字都是相同的宽度。

```html

<p>This font may or may not be in Lato.</p> 
```

```css
p { 
  font-family: Lato, sans-serif, monospace; 
 } 

```