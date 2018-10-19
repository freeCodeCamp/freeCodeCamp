---
title: String.prototype.lastIndexOf
localeTitle: String.prototype.lastIndexOf
---
`lastIndexOf()`方法返回指定值最后一次出现的调用String对象中的索引，如果未找到则返回-1。从`fromIndex`开始向后搜索调用字符串。

## 句法
```
str.lastIndexOf(searchValue<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf' target='_blank' rel='nofollow'>, fromIndex]) 
```

## 参数

**searchValue**

表示要搜索的值的字符串。

**的fromIndex**

可选的。调用字符串中用于开始搜索的位置，从左到右编制索引。它可以是任何整数。默认值为`str.length` 。如果是否定的，如果它被视为0 `fromIndex > str.length` ， `fromIndex`作为处理`str.length` 。

\[MDN链接| [MSDN链接](https://msdn.microsoft.com/en-us/LIBRary/6d20k718%28v=vs.94%29.aspx)

## 返回

返回字符串中最后一次出现的子字符串。

## 描述

字符串中的字符从左到右编制索引。第一个字符的索引是0，最后一个字符的索引是`stringName.length - 1` 。

`lastIndexOf()`方法区分大小写。例如，以下表达式返回`-1` ：

## 例子
```
'canal'.lastIndexOf('a');     // returns 3 
 'canal'.lastIndexOf('a', 2);  // returns 1 
 'canal'.lastIndexOf('a', 0);  // returns -1 
 'canal'.lastIndexOf('x');     // returns -1 
 'Blue Whale, Killer Whale'.lastIndexOf('blue'); // returns -1 
 
 var anyString = 'Brave new world'; 
 
 console.log('The index of the first w from the beginning is ' + anyString.indexOf('w')); 
 // logs 8 
 console.log('The index of the first w from the end is ' + anyString.lastIndexOf('w')); 
 // logs 10 
 console.log('The index of "new" from the beginning is ' + anyString.indexOf('new')); 
 // logs 6 
 console.log('The index of "new" from the end is ' + anyString.lastIndexOf('new')); 
 // logs 6 
 
 var str = "time, time"; 
 
 var s = ""; 
 s += "time is at position " + str.lastIndexOf("time"); 
 s += "<br />"; 
 s += "abc is at position " + str.lastIndexOf("abc"); 
 
 document.write(s); 
 
 // Output: 
 // time is at position 6 
 // abc is at position -1 

```