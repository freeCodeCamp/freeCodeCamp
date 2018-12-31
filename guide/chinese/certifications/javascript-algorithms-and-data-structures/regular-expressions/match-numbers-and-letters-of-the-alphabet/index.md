---
title: Match Numbers and Letters of the Alphabet
localeTitle: 匹配数字和字母的字母
---
## 匹配数字和字母的字母

在此挑战中，系统会要求您返回从字符串中提取的数字和字母的集合。我们的目标是创建一个单一的正则表达式，捕获h和s之间的字母范围，以及2到6之间的数字。

### 提示1：

你在使用match（）方法吗？如果是这样，那么你是否从适当的变量调用方法？即

```javascript
  let input_string = "The string you are testing on" 
  let yourRegExp = /[hs]/; 
  let correct_result = input_string.match(yourRegExp); // passes - returns characters H to S 
 
  let incorrect_result = yourRegExp.match(input_string); // fails - .match() is not a function 
```

### 提示2：

您是否记得启用正则表达式标志，例如“i”表示忽略大小写，而“g”表示是否可以检索多个值？如果是这样，那么你是否包括数字和字母的字符大小写匹配？

```javascript
let regexp = /[a-z1-100]/ig 
 // above code returns all characters from A to Z, along with all numbers from 1 to 100 
 // this includes the letter A and Z and the numbers 1 and 100 
```

### 扰流警报 - 提前解决

## 解

```javascript
let quoteSample = "Blueberry 3.141592653s are delicious."; 
 let myRegex = /[h-s2-6]/ig; // Change this line 
 let result = quoteSample.match(myRegex); // Change this line 

```