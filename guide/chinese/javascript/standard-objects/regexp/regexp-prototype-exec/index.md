---
title: RegExp prototype exec
localeTitle: RegExp原型exec
---
## RegExp原型exec

**`exec()`**方法执行搜索指定字符串中的匹配项。返回结果数组，或[`null`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "值null表示故意不存在任何对象值。它是JavaScript的原始值之一。") 。

如果要执行匹配只是为了查找true或false，请使用[`RegExp.prototype.test()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test "test（）方法执行搜索正则表达式和指定字符串之间的匹配。返回true或false。")方法或[`String.prototype.search()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search "search（）方法执行搜索正则表达式与此String对象之间的匹配。")方法。

### 句法
```
regexObj.exec(str) 
```

### 参数

`str`

与正则表达式匹配的字符串。

### 返回值

如果匹配成功，则`exec()`方法返回一个数组并更新正则表达式对象的属性。返回的数组将匹配的文本作为第一个项目，然后为匹配的每个捕获括号中的一个项目包含捕获的文本。

如果匹配失败，则`exec()`方法返回[`null`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/null "值null表示故意不存在任何对象值。它是JavaScript的原始值之一。") 。

### 描述

请考虑以下示例：
```
// Match "quick brown" followed by "jumps", ignoring characters in between 
 // Remember "brown" and "jumps" 
 // Ignore case 
 var re = /quick\s(brown).+?(jumps)/ig; 
 var result = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog'); 
```

下表显示了此脚本的结果：

### 例子

#### 寻找连续的比赛

如果正则表达式使用“ `g` ”标志，则可以多次使用`exec()`方法在同一个字符串中查找连续匹配。执行此操作时，搜索从正则表达式的[`lastIndex`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex "lastIndex是正则表达式实例的读/写整数属性，指定开始下一个匹配的索引。")属性指定的`str`的子字符串开始（ [`test()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test "test（）方法执行搜索正则表达式和指定字符串之间的匹配。返回true或false。")也将使[`lastIndex`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex "lastIndex是正则表达式实例的读/写整数属性，指定开始下一个匹配的索引。")属性前进）。例如，假设您有此脚本：
```
var myRe = /ab*/g; 
 var str = 'abbcdefabh'; 
 var myArray; 
 while ((myArray = myRe.exec(str)) !== null) { 
  var msg = 'Found ' + myArray[0] + '. '; 
  msg += 'Next match starts at ' + myRe.lastIndex; 
  console.log(msg); 
 } 
```

此脚本显示以下文本：
```
Found abb. Next match starts at 3 
 Found ab. Next match starts at 9 
```

注意：不要将正则表达式文字（或[`RegExp`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp构造函数创建一个正则表达式对象，用于将文本与模式匹配。")构造函数）放在`while`条件中，否则如果匹配则会产生无限循环，因为每次迭代都会重置[`lastIndex`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex "lastIndex是正则表达式实例的读/写整数属性，指定开始下一个匹配的索引。")属性。还要确保设置了全局标志，或者此处也会出现循环。

#### 使用带有`RegExp`文字的`exec()`

您也可以在不创建[`RegExp`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp构造函数创建一个正则表达式对象，用于将文本与模式匹配。")对象的情况下使用`exec()` ：
```
var matches = /(hello \S+)/.exec('This is a hello world!'); 
 console.log(matches[1]); 
```

这将记录包含“hello world！”的消息。