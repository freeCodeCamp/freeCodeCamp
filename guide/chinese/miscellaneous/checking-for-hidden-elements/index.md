---
title: Checking for Hidden Elements
localeTitle: 检查隐藏的元素
---
有时您可能需要检查屏幕上是否有可见或隐藏的元素，以便您可以根据其状态对其执行某些操作。我正在环顾Stack Overflow上的一些解决方案，试图确定一个元素是否可见，并且我对我收到的答案感到不满意。

一个答案是使用jQuery库，然后通过使用以下格式检查元素是否具有伪类`:visible` ： `$(element).is(':visible')` 。这适用于使用`display: none;`隐藏的元素`display: none;`在它们上，但它不适用于任何将其`visibility`设置为`hidden`元素。如果父元素是从视图中隐藏的唯一元素，它也不起作用。如果使用`visibility`或`display`隐藏了所测试元素的任何父元素，则正在测试的元素将返回为可见，尽管它在屏幕上不可见。

## 解决方案

我想出了一个纯JavaScript函数，它解决了这个没有依赖性的问题，并且是一个跨浏览器的解决方案。此函数将首先分析元素，以查看其`display`或`visibility`属性是分别显示为`none`或`hidden` 。然后，如果它们恢复正常，它会检查所有父元素直到文档正文。如果隐藏了正在测试的元素的父元素，则意味着正在测试的元素在文档中不可见。

[下面是一个示例CodePen，它演示了这种行为，甚至显示了使用jQuery解决方案和我的纯JavaScript解决方案的比较](http://codepen.io/marcusparsons/pen/bpNqgY) 。请注意，在CodePen中，即使元素在视图中是隐藏的，使用jQuery的`.is(':visible')`也不是真正检查任何元素可见性的可行选项。

这是我创建的功能：
```
function isVisible (element) { 
    //start with initial element to check visibility and display 
    var el = document.querySelector(element); 
    //display and visibility vary per browser and must be sought in different ways depending on the browser 
    var t1 = el.currentStyle ? el.currentStyle.visibility : getComputedStyle(el, null).visibility; 
    var t2 = el.currentStyle ? el.currentStyle.display : getComputedStyle(el, null).display; 
    //if either of these are true, then the element is not visible 
    if (t1 === "hidden" || t2 === "none") { 
        return false; 
    } 
    //This regex is used to scan the parent nodes all the way up to the body element 
    while (!(/body/i).test(el)) { 
        //get the next parent node 
        el = el.parentNode; 
        //grab the values, if available, 
        t1 = el.currentStyle ? el.currentStyle.visibility : getComputedStyle(el, null).visibility; 
        t2 = el.currentStyle ? el.currentStyle.display : getComputedStyle(el, null).display; 
        if (t1 === "hidden" || t2 === "none") { 
            return false; 
        } 
    } 
    //if all scans are not successful, then the element is visible 
    return true; 
 } 
```

要使用该函数，您只需要使用查询字符串调用它来选择要测试的元素即
```
<body> 
    <p style="visibility: hidden;" id="myP">My paragraph</p> 
    <script type="text/javascript"> 
        //include isVisible function 
        alert('Is my paragraph visible? ' + isVisible('#myP')); 
    </script> 
 </body> 
```

结果警报将是： `Is my paragraph visible? false`