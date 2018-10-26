---
title: Styling Links
localeTitle: 样式链接
---
## 样式链接

链接可以使用任何CSS属性设置样式，例如`color` ， `font-family` ， `font-size`和`padding` 。 这是一个简单的例子：

```css
a { 
    color: hotpink; 
 } 
```

## 此外，链接的样式可以根据它们所处的状态而有所不同。

链接也有4个状态，许多程序员对每个状态的设置方式不同。 这四个州是：

*   `a:link` ：未访问的，未被忽略的链接
*   `a:visited` ：已访问，已点击的链接
*   `a:hover` ：当用户的鼠标悬停在它上面时的链接
*   `a:active` ：单击时的链接

`<a href="">`属性负责创建URL，并且可以使用许多CSS样式属性进行修改，但默认情况下它有一些：

1.  强调
2.  蓝色

您可以通过添加更改`color`和`text-decoration`属性来更改这些。

```css
   color: black; 
   text-decoration: none; 
```

您还可以使用这些属性（也称为链接状态）基于交互设置链接的样式：

*   a：链接 - 正常的，未访问的链接
*   a：已访问 - 用户访问过的链接
*   a：悬停 - 当用户将鼠标悬停在其上时的链接
*   a：active - 单击时的链接

以下是一些使用4种状态的示例CSS：

```css
a:link { color: red; } 
 a:visited { color: blue; } 
 a:hover { color: green; } 
 a:active { color: blue; } 
```

**请注意** ，在为链接状态设置样式时，有一些_排序规则_ 。

*   `a:hover`必须在`a:link`和`a:visited`
    
*   `a:active`必须在`a:hover`
    
    a：链接 - 正常的，未访问的链接 a：已访问 - 用户访问过的链接 a：悬停 - 当用户将鼠标悬停在其上时的链接 a：active - 单击时的链接
    

```css
/* unvisited link */ 
 a:link { 
    color: red; 
 } 
 
 /* visited link */ 
 a:visited { 
    color: green; 
 } 
 
 /* mouse over link */ 
 a:hover { 
    color: hotpink; 
 } 
 
 /* selected link */ 
 a:active { 
    color: blue; 
 } 

```