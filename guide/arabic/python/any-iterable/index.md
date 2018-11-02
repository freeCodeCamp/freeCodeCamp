---
title: Python Any Iterable
localeTitle: بايثون اي ايترابل
---
`any()` هي وظيفة مضمنة في Python 3 (و Python 2 منذ الإصدار 2.5) ، للتحقق مما إذا كان أي من عناصر [_iterable_](https://docs.python.org/3/glossary.html#term-iterable) هو `True` . يأخذ حجة واحدة ، يمكن `iterable` .

## جدال

### iterable

الوسيطة `iterable` هي المجموعة التي سيتم التحقق من إدخالاتها. يمكن أن يكون عادةً `list` ، `str` ، `dict` ، `tuple` إلخ ، حتى `file object` .

## قيمة الإرجاع

قيمة الإرجاع هي قيمة منطقية. إذا وفقط إذا كانت **جميع** إدخالات التكرار هي `False` ، أو كان `iterable` فارغًا ؛ تقوم بإرجاع `False` . تؤدي هذه الوظيفة بشكل أساسي عملية `OR` منطقية على جميع العناصر.

إذا كان أحدهم هو `True` ، فسيعرض `True` .

`any()` عملية `any()` تعادل (داخليًا ، قد لا يتم تنفيذها على هذا النحو بالضبط)

 `def any(iterable): 
    for element in iterable: 
        if element: 
            return True 
    return False 
` 

## عينة الكود

 `print(any([])) #=> False 
 print(any({})) #=> False 
 print(any([None])) #=> False 
 print(any(['', {}, 0])) #=> False 
 print(any([6, 7])) #=> True 
 print(any([6, 7, None])) #=> True 
 print(any([0, 6, 7])) #=> True 
 print(any([9, 8, [1, 2]])) #=> True 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CL9c/0)

[المستندات الرسمية](https://docs.python.org/3/library/functions.html#any)