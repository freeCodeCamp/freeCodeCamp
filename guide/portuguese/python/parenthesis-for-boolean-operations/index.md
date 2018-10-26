---
title: Python Parenthesis for Boolean Operations
localeTitle: Parêntese Python para Operações Booleanas
---
Assim como em matemática, parênteses podem ser usados ​​para substituir a ordem das operações:
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