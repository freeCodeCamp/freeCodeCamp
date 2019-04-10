---
title: Combine Arrays with the Spread Operator
localeTitle: 将数组与Spread运算符组合在一起
---
## 将数组与Spread运算符组合在一起

*   解决方案与给出的示例完全相同。只需将`fragment[]`数组插入到所需索引的`sentence[]`数组中。

## 解：

```javascript
function spreadOut() { 
  let fragment = ['to', 'code']; 
  let sentence = ["learning", ...fragment, "is", "fun"]; // change this line 
  return sentence; 
 } 
 
 // do not change code below this line 
 console.log(spreadOut()); 

```