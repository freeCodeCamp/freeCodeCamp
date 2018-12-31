---
title: Detect authentic click events
localeTitle: 检测可靠的点击事件
---
## 检测可靠的点击事件

可能存在这样的情况：只有当用户真正触发click事件而不是某个脚本来模拟click事件时，才想要执行某些特定事情。

这个问题有一个非常简单的解决方案，javascript事件对象为我们提供了一个`.istrusted`属性，可以用它来区分。

#### 以下是使用此方法的示例

```javascript
// Assume there is a button in the HTML 
 const button = document.querySelector('button'); 
 
 button.addEventListener('click', (e) => { 
  if (e.isTrusted) { 
    console.log('Button clicked by a real user'); 
  } else { 
    console.log('Button click simulated by a script'); 
  } 
 }); 
 
 button.click() // Outputs "Button click simulated by a script" 

```