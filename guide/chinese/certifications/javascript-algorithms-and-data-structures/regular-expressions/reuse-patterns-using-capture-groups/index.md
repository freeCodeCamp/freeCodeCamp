---
title: Reuse Patterns Using Capture Groups
localeTitle: 使用捕获组重用模式
---
## 使用Capture Group重用模式

## 提示1：

给出以下代码：

```javascript
let testString = "test test test "; 
 let reRegex =/(test)\s\1/; 
 let result = reRegex.test(testString); 
```

`result`将仅匹配`test test`因为此示例中的`\1`代表与最近匹配的第一个捕获组`(test)`相同的文本。

如果我们要正面翻译正则表达式，它看起来像这样：

```js
let re = /(test)\s\1/; 
 let literalRe = /test\stest/; 
```

`rea`和`literalRe`都会匹配相同的东西。

## 提示2：

鉴于以下代码：

```javascript
let testString = "test test test "; 
 let reRegex =/(test)(\s)\1\2\1/; 
 let result = reRegex.test(testString); 
```

将匹配整个`test test test`因为： `\1`重复（测试） `\2`重复（\\ s）

## 提示3：

代码如下：

```javascript
let testString = "test test test test test test"; 
 let reRegex =/(test)(\s)\1\2\1/g; 
 let result = reRegex.test(testString); 
```

因为我们使用了`\g` ，我们的正则表达式在第一次完全匹配（ `test test test` ）之后没有返回并匹配所有重复。

## 剧透警报 - 提前解决！

## 解：

```javascript
let repeatNum = "42 42 42"; 
 let reRegex =  /^(\d+)\s\1\s\1$/; 
 let result = reRegex.test(repeatNum); 

```
