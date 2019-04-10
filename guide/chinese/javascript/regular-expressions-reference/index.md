---
title: Regular Expressions Reference
localeTitle: 正则表达式参考
---
## 正则表达式参考

在JavaScript中，正则表达式是用于匹配字符串的所需部分的简写。在尝试操作或验证代码中使用的字符串时，这些都很有用。

### 句法

正则表达式由两部分组成 - `pattern`和`flags` （可选）。模式在两个正斜杠之间写入，后跟可选标志： `var exp = /pattern/flags` 。

#### 模式

使用字母数字（AZ，az，0-9）字符可以直接匹配。然而，正则表达式的真正力量来自于字符类。

比方说，例如，您希望所有地方都有一个数字从0到9的字符串。您可以使用`/\d/`的特殊字符类，而不是显式调用`/[0-9]/` `/\d/` 。反斜杠会转义`d`字符（因此与字母`d`不匹配），而是使用`\d`的特殊匹配功能。

同样的原则适用于非数字字符，空格和其他广泛匹配组。使用某些修饰符（例如`+`字符），正则表达式会变得更加复杂。

此量词允许您将模式中的前一个字符匹配一次或多次。 `/s+/`将匹配`desert`中的`s`和两者`s` `dessert` ！

还有更多的修饰符可以让你的模式匹配你可能需要的任何东西。请参阅下面的“更多信息”部分，以查看在正则表达式中使用的所有可能的字符选项。

#### 旗

您可以使用5个标志将特定规则应用于您正在编写的整个正则表达式。他们是：

`g` - 全球比赛;这允许您匹配表达式的所有实例，而不是在第一次出现后停止。

`i` - 忽略大小写匹配（不言自明）

`m` - 多线匹配;这会将您的模式应用于每一行作为新的;如果您要搜索以特定模式开头的行，则对所有行都这样做，而不是仅对第一行进行

`u` - Unicode匹配;这表示将您的模式读取为Unicode而不是纯文本

`y` - 粘性匹配;这与您的模式匹配`RegExp.lastIndex`属性中找到的索引开始

### 创建正则表达式

正则表达式是一种对象。它可以构建 使用RegExp构造函数或通过将其括起来写为文字值 正斜杠（/）字符中的模式。
```
var re1 = new RegExp (" abc ") ; 
 var re2 = / abc /; 
```

这两个正则表达式对象都表示相同的模式：a 一个字符后跟ab后跟一个c。

### RegExp对象

`RegExp`是一个构造函数，它根据您创建的正则表达式模式创建对象。除了上面描述的文字符号，您还可以使用构造函数格式来创建正则表达式： `new RegExp(pattern[, flags])`

### 测试比赛
```
console . log (/ abc /. test (" abcde ") ); 
 // → true 
 console . log (/ abc /. test (" abxde ") ); 
 // → false 
```

### 匹配一组字符
```
console . log (/[0123456789]/. test (" in 1992") ); 
 // → true 
 console . log (/[0 -9]/. test (" in 1992") ); 
 // → true 
```

### 选择模式
```
var animalCount = /\ b \ d + ( pig | cow | chicken )s ?\ b /; 
 console . log ( animalCount . test ("15 pigs ") ); 
 // → true 
 console . log ( animalCount . test ("15 pigchickens ") ); 
 // → false 
```

#### 方法

您很可能在`String`方法中使用正则表达式，例如`String.replace()` ，但是有一些属于`RegExp`对象的方法。

例如， `RegExp.test()`将返回一个布尔值，表示正则表达式模式与相关字符串之间是否存在匹配。 `RegExp.toString()`会将表达式对象转换为字符串，这在代码上运行测试时非常方便。

第一个参数也可以是正则表达式，在这种情况下，替换正则表达式的第一个匹配。当ag选项（for global）添加到正则表达式时，字符串中的所有匹配项将被替换，而不仅仅是第一个。
```
console . log (" Borobudur ". replace (/[ ou ]/ , "a ") ); 
 // → Barobudur 
 console . log (" Borobudur ". replace (/[ ou ]/g , "a ") ); 
 // → Barabadar 
```

### 更多信息：

*   [在这里，您可以阅读](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)所有模式匹配字符，对象属性，查看一些示例等。
    
*   [这是一个很棒的网站](https://regex101.com/) ，可以让您实时测试正则表达式模式，保存您的收藏夹并探索其他人制作的模式。