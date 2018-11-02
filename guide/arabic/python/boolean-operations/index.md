---
title: Python Boolean Operations
localeTitle: بيثون المنطقية
---
[`and`](https://docs.python.org/3/reference/expressions.html#and) ، [`or`](https://docs.python.org/3/reference/expressions.html#or) [`not`](https://docs.python.org/3/reference/expressions.html#not)

[Python Docs - العمليات المنطقية](https://docs.python.org/3/library/stdtypes.html#boolean-operations-and-or-not)

هذه هي العمليات المنطقية ، مرتبة حسب الأولوية الصاعدة:

العملية | النتيجة | ملاحظات  
\--------- | ------------------------------------ | -----  
س أو ذ | إذا كانت x خاطئة ، ثم y ، وإلا x | (1)  
س و ص | إذا كانت x خاطئة ، ثم x ، وإلا y | (2)  
ليس س | إذا كانت x خاطئة ، ثم True ، وإلا False | (3)

**ملاحظات:**

1.  هذا مشغل دائرة قصيرة ، لذا فهو يقيِّم الوسيطة الثانية فقط إذا كانت الأولى هي False.
2.  هذا مشغل دائرة قصيرة ، لذا فإنه يقيّم فقط الوسيطة الثانية إذا كانت الأولى هي True.
3.  ليس لها أولوية أقل من عوامل غير منطقية ، لذلك لا يتم تفسير == b على أنها ليست (a == b) ، و == ليس b هو خطأ في بناء الجملة.

## أمثلة:

### `not` :

 `>>> not True 
 False 
 >>> not False 
 True 
` 

### `and` :

 `>>> True and False    # Short-circuited at first argument. 
 False 
 >>> False and True    # Second argument is evaluated. 
 False 
 >>> True and True     # Second argument is evaluated. 
 True 
` 

### `or` :

 `>>> True or False    # Short-circuited at first argument. 
 True 
 >>> False or True    # Second argument is evaluated. 
 True 
 >>> False or False   # Second argument is evaluated. 
 False 
`