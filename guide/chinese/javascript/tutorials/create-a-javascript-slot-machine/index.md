---
title: Create a JavaScript Slot Machine
localeTitle: 创建一个JavaScript老虎机
---
为此，我们必须使用他们给出的公式而不是一般公式生成三个随机数。 `Math.floor(Math.random() * (3 - 1 + 1)) + 1;`
```
slotOne = Math.floor(Math.random() * (3 - 1 + 1)) + 1; 
 slotTwo = Math.floor(Math.random() * (3 - 1 + 1)) + 1; 
 slotThree = Math.floor(Math.random() * (3 - 1 + 1)) + 1; 

```