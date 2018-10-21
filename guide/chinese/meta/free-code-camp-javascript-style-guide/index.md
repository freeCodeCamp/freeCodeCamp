---
title: Free Code Camp JavaScript Style Guide
localeTitle: 免费Code Camp JavaScript风格指南
---
或者酷人如何编写JavaScript。

## 缩进

始终使用两个空格  
没有硬标签，永远。不，真的，不要这样做。

## 大括号

使用关键字`if/else/else if`时，请始终使用花括号。这可以防止很多歧义，并且可以防止某些边缘情况下的语法错误。

坏：
```
if (foo) bar(); 
```

好：
```
if (foo) { bar(); } 
```

## 到处都是卷曲的大括号！

`function`关键字后的空格，匿名函数除外

好：
```
function foo() { 
 } 
 
 var foo = function() { 
  // ... 
 }; 
```

坏：
```
function foo () 
 { 
  // ... 
 } 
 
 var foo = function () { 
  // ... 
 }; 
```

## 注释

*   没有内联评论
*   `//`之后的单个空格
*   不要使用多行注释`/* */` ，我们保留这些用于jsDocs。

## 关键词

*   在if，else，while等之后的空格
*   打开花括号应始终在同一行。

好：
```
if (true) { 
 // do the thing 
 } 
```

坏：
```
if(true) 
 { 
 // do the thing 
 } 
```

## 其他

避免别的和“早点结束”。在JavaScript中经常有很多缩进（通常在处理异步代码并命名为“callback hell”时）。你能做的任何事都可以减少应该做的缩进次数。有一点是[避免使用else](http://blog.timoxley.com/post/47041269194/avoid-else-return-early)关键字。

这也具有使代码更清晰且更易于阅读的副作用。

坏：
```
someAsynFunc(function(err, data) { 
  if (err) { 
    callback(err); 
  } else { 
    // do stuff with data 
  } 
 }); 
```

好：
```
someAsynFunc(function(err, data) { 
  if (err) { 
    return callback(err); 
  } 
  // do stuff with data 
  // saves one indent 
 }); 
```

## 长串

长多行字符串应采用以下两种形式之一：
```
var longString = 
  'long strings should ' + 
  'be in this form, with the ' + 
  'operator ending the line'; 
 
 var foo = 'bar'; 
 
 var longString = [ 
  'long strings with variables such as ', 
  foo, 
  'should ', 
  'be in this form, an array of strings ', 
  'that are joined with the join array instance method', 
 ].join(''); 
```

......还有更多