---
title: Python Parenthesis for Boolean Operations
localeTitle: 布尔运算的Python括号
---
就像在数学中一样，括号可用于覆盖操作的顺序：
```
>>> not True or True 
 True 
 >>> not (True or True) 
 False 
 
 >>> True or False and False 
 True 
 >>> (True or False) and False 
 False 

```