---
title: Generate Random Whole Numbers with JavaScript
localeTitle: 使用JavaScript生成随机整数
---
很高兴我们可以创建随机十进制数，但如果我们生成一个随机整数更有用，它会更有用。

为实现此目的，我们可以将随机数乘以10，并使用`Math.floor()`将十进制数转换为整数
```
Math.floor(Math.random()*10) 

```