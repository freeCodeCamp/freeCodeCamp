---
title: Semicolons
localeTitle: 分号
---
Javascript中不需要分号。这是因为Javascript有一个名为“自动分号插入”的功能或简称ASI。 ASI会为您的Javascript添加分号。默认情况下它始终处于活动状态，它是语言的一部分，无法禁用。

ASI有一套规则用于确定应该在哪里插入分号。如果已经存在分号，则不会改变任何内容。有关ASI如何工作的更多信息，请参阅[此StackOverflow答案](http://stackoverflow.com/a/2846298/3467946) 。

只有一种情况是ASI失败：当一行以一个开括号开始时`(` 。为了避免这种情况导致错误，当一行以一个开括号开头时，你可以在一行开头的分号处加一个分号：

```js
;(function() { 
  console.log('Hi!') 
 }) 
```

请注意，只有在不使用分号时才需要这样做。

一致的编码风格使代码更具可读性。决定你是否会使用分号，并在任何地方都这样做。

## 您可能遇到的错误

当Javascript首次制作时，它旨在帮助初学者进入编程。当他们第一次开始编程时，没有人想在他们的代码中搜索dang分号。因此，实施了分号的选择，如上所述，它们在技术上存在。

例如： `javasctipt function foo(x) { return function(y) { return x + y; } } let z = foo(10); z(10)// TypeError z is not a function // Because of Automatic Semicolon Insertion, our inner function does not exist.` Javasctipt将实现预期的分号。

### 其他资源

[关于分号的JavaScript领导人的公开信](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding)