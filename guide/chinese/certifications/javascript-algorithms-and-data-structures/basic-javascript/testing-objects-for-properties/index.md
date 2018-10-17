---
title: Testing Objects for Properties
localeTitle: 测试属性的对象
---
## 测试属性的对象

这是一个例子：

```javascript
// Setup 
 var myObj = { 
  gift: "pony", 
  pet: "kitten", 
  bed: "sleigh" 
 }; 
 
 function checkObj(checkProp) { 
  // Your Code Here 
 
  return "Change Me!"; 
 } 
 
 // Test your code by modifying these values 
 checkObj("gift"); 
```

这是一个解决方案：

我们在这里不做任何改动：

```javascript
// Setup 
 var myObj = { 
  gift: "pony", 
  pet: "kitten", 
  bed: "sleigh" 
 }; 
```

此外，在函数体中我们使用`.hasOwnProperty(propname)`对象方法来确定该对象是否具有给定的属性名称。带有布尔值的`if/else`语句将帮助我们：

```javascript
function checkObj(checkProp) { 
  // Your Code Here 
  if (myObj.hasOwnProperty(checkProp) == true) { 
    return myObj[checkProp]; 
  } 
  else { 
 ``` 
 
 and change the value of `return` in `else` statement: 
```

JavaScript的 返回“未找到” } }
```
Now, you can change `checkObj` values: 
```

JavaScript的 //通过修改这些值来测试代码 checkObj（ “礼物”）;
```
Here's a full solution: 
```

JavaScript的 function checkObj（checkProp）{ //你的代码在这里 if（myObj.hasOwnProperty（checkProp）== true）{ return myObj \[checkProp\]; } 其他{ 返回“未找到” } } //通过修改这些值来测试代码 checkObj（ “礼物”）; \`\`\`