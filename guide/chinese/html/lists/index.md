---
title: Lists
localeTitle: 清单
---
# 清单

列表用于显示项目。有3种类型的列表。

## 有序列表

_有序列表_用于描述有序的数据集合。浏览器通常将有序列表显示为编号列表。使用`<ol>`标签创建有序列表。

## 无序列表

_无序列表_用于描述无序的数据集合。浏览器通常将无序列表显示为项目符号列表。使用`<ul>`标记创建无序列表。

## 列出项目

有序和无序列表的直接子项必须是列表项。每个列表项都包含在`<li>`标记中。列表项标记可以包含[流内容](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content) 。

## 例子

有序列表写为

```HTML
<ol> 
  <li>January</li> 
  <li>February</li> 
  <li>March</li> 
 </ol> 
```

并显示为：

1.  一月
2.  二月
3.  游行

无序列表写为

```HTML
<ul> 
  <li>Macintosh</li> 
  <li>Fuji</li> 
  <li>Gala</li> 
 </ul> 
```

并显示为：

*   苹果
*   富士
*   节日

## 样式化Bulletpoint

有序列表可用于各种功能和多种样式。由于更改包含标签颜色不会改变子弹本身的颜色，您可以先删除传统的黑色项目符号并插入自己的颜色来设置它们的样式：

删除子弹：

```CSS
ul { 
  list-style: none; 
  } 
```

插入你自己的：

```CSS
ul li::before { 
  content: "\2022"; 
  color: orange; 
  display: inline-block; 
  width: 1em; 
  } 
```

内容样式添加新的项目符号，而显示和宽度样式在项目符号和单词之间创建空格。如果您想使子弹更大或更大胆，可以在此处应用常规字体样式。

## 说明列表

描述列表是术语列表，其中包含每个术语的描述。使用`<dl>`标签进行描述列表。 列表中的每个项目由两个标记组成：术语`<dt>` ，以及该术语`<dd>`的描述。 它们在HTML 4中称为定义列表。

以下是描述列表的示例：

```HTML
<dl> 
  <dt>Programming</dt> 
  <dd>The process of writing computer programs.</dd> 
  <dt>freeCodeCamp</dt> 
  <dd>An awesome non-profit organization teaching people how to code.</dd> 
 </dl> 
```

最终看起来像：

程序设计

编写计算机程序的过程。

freeCodeCamp

一个非常棒的非营利组织，教人们如何编码。

## 更多信息：

*   [w3schools上的HTML列表](https://www.w3schools.com/html/html_lists.asp)