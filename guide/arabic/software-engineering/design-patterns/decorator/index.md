---
title: Decorator
localeTitle: مزخرف
---
الديكور هو نمط تصميم يمكن أن يقوم بتعديل أو تحسين واجهة الصف.

## ديكور في بيثون 3

هنا مثال على تنفيذ Decorator في Python3.

 `class MyText(object): 
    def __init__(self, text=''): 
        self.text = text 
 
    def __str__(self): 
        return 'This is {}'.format(self.text) 
 
 
 class BracketDecorator(object): 
    def __init__(self, decoratee): 
        self._decoratee = decoratee 
 
    def __str__(self): 
        return '({})'.format(self._decoratee) 
 
 
 class QuoteDecorator(object): 
    def __init__(self, decoratee): 
        self._decoratee = decoratee 
 
    def __str__(self): 
        return '\"{}\"'.format(self._decoratee) 
 
 
 print(BracketDecorator(MyText('apple'))) 
 >>> (This is apple) 
 print(QuoteDecorator(MyText('banana'))) 
 >>> "This is banana" 
`