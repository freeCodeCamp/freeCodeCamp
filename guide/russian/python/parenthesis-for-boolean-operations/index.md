---
title: Python Parenthesis for Boolean Operations
localeTitle: Pinton Parenthesis для булевых операций
---
Как и в математике, скобки могут использоваться для переопределения порядка операций:
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