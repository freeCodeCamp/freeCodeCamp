---
title: Using Objects for Lookups
localeTitle: 使用对象进行查找
---
## 使用对象进行查找

这是一个例子：

```javascript
// Setup 
 function phoneticLookup(val) { 
  var result = ""; 
 
  // Only change code below this line 
  switch(val) { 
    case "alpha": 
      result = "Adams"; 
      break; 
    case "bravo": 
      result = "Boston"; 
      break; 
    case "charlie": 
      result = "Chicago"; 
      break; 
    case "delta": 
      result = "Denver"; 
      break; 
    case "echo": 
      result = "Easy"; 
      break; 
    case "foxtrot": 
      result = "Frank"; 
  } 
 
  // Only change code above this line 
  return result; 
 } 
 
 // Change this value to test 
 phoneticLookup("charlie"); 
```

这是一个解决方案： 我们在这里不做任何改动：

```javascript
function phoneticLookup(val) { 
  var result = ""; 
```

我们需要将switch语句转换为对象。将所有`case`值传输到对象属性：

```javascript
function phoneticLookup(val) { 
  var result = ""; 
  var lookup = { 
    "alpha": "Adams", 
    "bravo": "Boston", 
    "charlie": "Chicago", 
    "delta": "Denver", 
    "echo": "Easy", 
    "foxtrot": "Frank" 
  }; 
  ``` 
 After converting our case statements into object properties you can make use of the variable `result` to let the function return the correct value. 
```

JavaScript的 result = lookup \[val\]; \`\`\`

·在[repl.it上](https://repl.it/@AdrianSkar/Using-objects-for-lookups)运行代码。

### 资源

*   [“JavaScript对象基础” - _MDN JavaScript参考_](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)