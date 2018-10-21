---
title: Python Parenthesis for Boolean Operations
localeTitle: Paréntesis Python para Operaciones Booleanas
---
Al igual que en matemáticas, el paréntesis se puede usar para anular el orden de las operaciones:
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