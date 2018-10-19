---
title: Global vs. Local Scope in Functions
localeTitle: 功能中的全局与局部范围
---
## 功能中的全局与局部范围

请记住，全局范围意味着变量在整个代码中都可用。局部范围，表示变量在一定范围内可用。

在本练习中，您在全局范围内有一个`outerWear`变量，其中包含“T-shirt”值。您现在应该创建另一个名为`outerWear`变量，但这次是在函数`myOutfit()` 。基本代码解决方案如下：

```javascript
var outerWear = "T-shirt"; 
 
 function myOutfit() { 
  var outerWear = "sweater"; 
  return outerWear; 
 } 
 
 myOutfit(); 
```

该函数将返回它可以找到的最近的`outerWear` 。由于我们在函数内部创建了一个`outerWear` ，即'最接近'，因此该函数将返回“sweater”。