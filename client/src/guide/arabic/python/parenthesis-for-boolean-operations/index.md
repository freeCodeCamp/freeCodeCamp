---
title: Python Parenthesis for Boolean Operations
localeTitle: Python Parenthesis for Boolean Operations
---
كما هو الحال في الرياضيات ، يمكن استخدام قوسين لتجاوز ترتيب العمليات:

 `>>> not True or True 
 True 
 >>> not (True or True) 
 False 
 
 >>> True or False and False 
 True 
 >>> (True or False) and False 
 False 
`