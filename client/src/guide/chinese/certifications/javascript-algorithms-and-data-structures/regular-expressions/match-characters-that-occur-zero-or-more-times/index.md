---
title: Match Characters that Occur Zero or More Times
localeTitle: 匹配出现零次或多次的字符
---
## 匹配出现零次或多次的字符

正则表达式中后跟`*`任何字母都不必出现在测试的字符串中，而正则表达式中后跟`+`任何字母必须至少出现一次字符串，如下所示，

```javascript
let phrase = "ba humbug"; 
 
 let regexPlus = /bah+/; 
 let regexStar = /bah*/; 
 
 regexPlus.test(phrase);  // returns false 
 regexStar.test(phrase);  // returns true 
```

两者都允许连续出现任意数量的相同字母，例如

```javascript
let phrase = "wooooow look at that!"; 
 
 let regexPlus = /wo+w/; 
 let regexStar = /wo*w/; 
 
 regexPlus.test(phrase); // returns true 
 regexStar.test(phrase); // returns true 

```