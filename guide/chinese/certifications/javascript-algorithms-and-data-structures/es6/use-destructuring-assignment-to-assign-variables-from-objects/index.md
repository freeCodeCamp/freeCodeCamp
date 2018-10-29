---
title: Use Destructuring Assignment to Assign Variables from Objects
localeTitle: 使用解构分配从对象分配变量
---
## 使用解构分配从对象分配变量

# 这个挑战需要一些关于javascript中的字符串对象的直觉。

创建字符串对象时，它基于以下[字符串原型](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype) 。

因此，每个字符串都具有长度属性; genericString = {length：13}。 （这是String.prototype中唯一采用的属性。）

# 使用解构重新分配属性。

```javascript
var basicOjb = {x: 40}; 
 //To reassign 'get the value of the x property of basicObj and place its value into bigX' in ES6: 
 const { x: bigX } = basicOjb; 
 consle.log(bigX) // ans = 40 
```

将'str'的length属性值放入len中。