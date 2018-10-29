---
title: HTML and CSS Cheat Sheet
localeTitle: HTML和CSS备忘单
---
这个（希望）及时的页面将成长为涵盖基本和简单的HTML和CSS解决方案。

如果您有不同的方法，请添加到备用解决方案中。

## 使`<hr>`水平规则更小

```css
    hr { 
      width: 75%; 
      margin-left: auto; 
      margin-right: auto; 
    } 
```

## 给出`<div>`非滚动背景

```css
    #divName { 
      padding-top: 50px; 
      height: 500px; 
      color: #fff; 
      background-image: url("your_url.jpg"); 
      background-repeat: no-repeat; 
      background-attachment: fixed; 
      background-size: 100%; 
    } 
```

尝试使用不同的值来查看它如何影响html中的div和over

```html

<div id="divName" class="container-fluid"> 
```

## 垂直对齐（一行文字）

这可以在CSS导航菜单中使用。关键是使菜单的高度和文本的行高相同。 `css .nav li{ line-height:50px; height:50px; }` [这里可以找到](https://www.webdesignerdepot.com/2016/10/20-essential-css-tricks-every-designer-should-know/)更多巧妙的技巧

## 居中一个水平列表

[http://csswizardry.com/2011/01/create-a-centred-horizo​​ntal-navigation/](http://csswizardry.com/2011/01/create-a-centred-horizontal-navigation/)

## HTML文档的部分和大纲

[https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Sections _和_ _HTML5_ _文档_大纲](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document)