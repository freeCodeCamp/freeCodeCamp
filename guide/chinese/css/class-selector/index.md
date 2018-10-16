---
title: Class Selector
localeTitle: 类选择器
---
## 类选择器

在CSS文件中使用类选择器将样式应用于具有相应类名的HTML元素。在HTML中，您可以通过添加“class”属性来设置任何元素的类名。

要选择具有特定类的元素，我们使用名为句点字符的（。）和类的名称。

例如 。中央 { text-align：center; 红色; }

这里，所有`class="center"` HTML元素都是红色和居中对齐的。

例子：

```html

<h1 class="test">This is a heading 1</h1> 
 <p class="test">This is a paragraph 1</p> 
 <h2 class="test">This is a heading 2</h2> 
 <p class="test">This is a paragraph 2</p> 
 <div class="test2 test3">This is a div 1</div> 
```

由于类名不是唯一的，因此HTML类属性可以为具有相同类名的元素定义相同的样式。 **以下是如何在CSS文件中选择类来设置元素样式（注意。符号）：**

**类`test`所有元素都将应用于此样式：**

```css
.test { 
  color: green; 
 } 
```

**类`test`所有`<p>`元素都将应用于此样式：**

```css
p.test { 
  border: 1px solid black; 
  color: red; 
 } 
```

**类`test`所有`<h1>`和`<h2>`元素都将应用此样式：**

```css
h1.test, h2.test { 
  color: blue; 
 } 
```

**具有类`test2`和`test3`所有元素都将应用此样式：**

```css
.test2.test3 { 
  color: green; 
 } 
```

**提示：多个类之间没有空格。**

#### 更多信息：

CSS语法和选择器： [w3schools](https://www.w3schools.com/css/css_syntax.asp)