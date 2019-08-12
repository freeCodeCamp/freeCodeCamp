---
title: How to Create a Dropdown Menu with CSS and JavaScript
localeTitle: 如何使用CSS和JavaScript创建下拉菜单
---
## 如何使用CSS和JavaScript创建下拉菜单

在本教程中，您将学习如何使用vanilla Javascript，HTML和CSS创建一个简单的下拉菜单。我们将介绍HTML，CSS和Javascript代码，但更多地关注编程，因为这是一个JS教程。我们将只使用普通的JS和CSS，没有框架或预处理器。唯一（种类）异常将导入[Font Awesome](https://fontawesome.com/) CSS文件，因为我们将使用其中一个图标。

这是针对平均了解HTML，CSS和JS的开发人员。我试图让它尽可能干净，但我不会过分关注细节。我希望你们都喜欢。

## 截图

这是代码结果的样子：

初始屏幕：

![](https://cdn-media-1.freecodecamp.org/imgr/jrnu6mE.png)

下拉开启：

![](https://cdn-media-1.freecodecamp.org/imgr/gszPtRa.png)

下拉选项已选中：

![](https://cdn-media-1.freecodecamp.org/imgr/TKXxZGF.png)

#### HTML：

在本节中，我们将讨论演示页面的HTML代码的实现。 首先，让我们看一下`<head>`代码

```html

<!DOCTYPE html> 
 <html lang="en"> 
 <head> 
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <meta http-equiv="X-UA-Compatible" content="ie=edge"> 
    <title>Dropdown Example</title> 
 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/'-awesome/4.7.0/css/font-awesome.min.css"> 
    <link rel="stylesheet" href="styles.css"> 
 </head> 
```

这基本上是HTML头文件样板，除了加载我们将在本教程中使用的两个CSS样式表的`link`标记：Font Awesome样式和`styles.css`文件，我们将在其中定义此页面的样式。

然后，还有HTML文件的其余部分，正文：

```html

<body> 
    <div class='dropdown'> 
        <div class='title pointerCursor'>Select an option <i class="fa fa-angle-right"></i></div> 
 
        <div class='menu pointerCursor hide'> 
            <div class='option' id='option1'>Option 1</div> 
            <div class='option' id='option2'>Option 2</div> 
            <div class='option' id='option3'>Option 3</div> 
            <div class='option' id='option4'>Option 4</div> 
        </div> 
 
    </div> 
    <span id='result'>The result is: </span> 
    <script> 
      ... 
    </script> 
 </body> 
 </html> 
```

本节可分为3个主要部分：

*   `.dropdown` div，将定义下拉元素的结构。
*   `#result`元素，将包含用户选择的选项，来自下拉列表元素。
*   写入`<script>`标记的`<script>` 。它的实现在这里隐藏，因为它的细节将在本教程的最后一节中解释。

dropdown元素是一个包含`title`和`menu`元素的`div` 。前者只定义在选择任何选项之前将在元素上显示的文本，后者将定义元素可选择的选项。

`result`元素只是为了显示当前选择的选项。

#### 样式：

您可以在下面查看完整的css代码。正如您所看到的，它使用了CSS3 `transition`和`transform`结构。

请注意`.dropdown`类的定义。这些用于定义下拉容器组件及其内部元素的布局，例如`.title`及其`.option` 。

```css
body{ 
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; 
 } 
 
 .hide { 
    max-height: 0 !important; 
 } 
 
 .dropdown{ 
    border: 0.1em solid black; 
    width: 10em; 
    margin-bottom: 1em; 
 } 
 
 .dropdown .title{ 
    margin: .3em .3em .3em .3em; 
    width: 100%; 
 } 
 
 .dropdown .title .fa-angle-right{ 
    float: right; 
    margin-right: .7em; 
    transition: transform .3s; 
 } 
 
 .dropdown .menu{ 
    transition: max-height .5s ease-out; 
    max-height: 20em; 
    overflow: hidden; 
 } 
 
 .dropdown .menu .option{ 
    margin: .3em .3em .3em .3em; 
    margin-top: 0.3em; 
 } 
 
 .dropdown .menu .option:hover{ 
    background: rgba(0,0,0,0.2); 
 } 
 
 .pointerCursor:hover{ 
    cursor: pointer; 
 } 
 
 .rotate-90{ 
    transform: rotate(90deg); 
 } 
```

#### JavaScript的：

现在我们将看到Javascript部分是如何实现的。我们将首先介绍函数定义 然后调用这些函数的代码使下拉动作发生。

基本上，根据用户交互的内容，有3个动作，因为他们的侦听器被添加到DOM元素：

1.  单击下拉元素
2.  选择其中一个下拉选项
3.  更改当前选定的选项

我想说明我们使用的是箭头函数（ `() => {}` ）和`const`关键字，它们是ES6的特性。如果你使用的是最新版本的浏览器，那么你可能会很好，但请记住这一点。

#### 1.单击下拉元素

```Javascript
function toggleClass(elem,className){ 
    if (elem.className.indexOf(className) !== -1){ 
        elem.className = elem.className.replace(className,''); 
    } 
    else{ 
        elem.className = elem.className.replace(/\s+/g,' ') +   ' ' + className; 
    } 
 
    return elem; 
 } 
 
 function toggleDisplay(elem){ 
    const curDisplayStyle = elem.style.display; 
 
    if (curDisplayStyle === 'none' || curDisplayStyle === ''){ 
        elem.style.display = 'block'; 
    } 
    else{ 
        elem.style.display = 'none'; 
    } 
 } 
 
 
 function toggleMenuDisplay(e){ 
    const dropdown = e.currentTarget.parentNode; 
    const menu = dropdown.querySelector('.menu'); 
    const icon = dropdown.querySelector('.fa-angle-right'); 
 
    toggleClass(menu,'hide'); 
    toggleClass(icon,'rotate-90'); 
 } 
```

单击下拉元素时，它将打开（如果已关闭）或关闭（如果已打开）。这通过将`toggleMenuDisplay`绑定到下拉列表元素上的click事件侦听器来实现。此函数通过使用`toggleDisplay`和`toggleClass`函数切换其`menu`元素的显示。

#### 2.选择其中一个下拉选项

```Javascript
function handleOptionSelected(e){ 
    toggleClass(e.target.parentNode, 'hide'); 
 
    const id = e.target.id; 
    const newValue = e.target.textContent + ' '; 
    const titleElem = document.querySelector('.dropdown .title'); 
    const icon = document.querySelector('.dropdown .title .fa'); 
 
 
    titleElem.textContent = newValue; 
    titleElem.appendChild(icon); 
 
    //trigger custom event 
    document.querySelector('.dropdown .title').dispatchEvent(new Event('change')); 
    //setTimeout is used so transition is properly shown 
    setTimeout(() => toggleClass(icon,'rotate-90',0)); 
 } 
```

#### 3.更改当前选择的选项

```Javascript
function handleTitleChange(e){ 
    const result = document.getElementById('result'); 
 
    result.innerHTML = 'The result is: ' + e.target.textContent; 
 } 
```

函数`handleTitleChange`绑定到`.title`元素上的自定义`change`事件，以便在title元素更改时更改`#result`元素内容。此事件的触发在上一节中完成。

#### 主要代码

```Javascript
//get elements 
 const dropdownTitle = document.querySelector('.dropdown .title'); 
 const dropdownOptions = document.querySelectorAll('.dropdown .option'); 
 
 //bind listeners to these elements 
 dropdownTitle.addEventListener('click', toggleMenuDisplay); 
 dropdownOptions.forEach(option => option.addEventListener('click',handleOptionSelected)); 
 document.querySelector('.dropdown .title').addEventListener('change',handleTitleChange); 
```

在主要部分中，只有一些简单的代码可以获取下拉列表的标题和选项元素，以便将最后一节中讨论的事件绑定到它们。

## 演示

可在[此处](https://codepen.io/GCrispino/pen/EEXmYd)找到此应用程序的完整代码和演示。

## 更多信息

*   [ES6介绍](https://guide.freecodecamp.org/javascript/es6)
*   [箭头功能](https://guide.freecodecamp.org/javascript/es6/arrow_functions/)
*   [让和Const](https://guide.freecodecamp.org/javascript/es6/let_and_const/)