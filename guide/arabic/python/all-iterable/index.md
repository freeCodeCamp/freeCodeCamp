---
title: Python All Iterable
localeTitle: بيثون كل Iterable
---
`all()` هي وظيفة مضمنة في Python 3 (و Python 2 منذ الإصدار 2.5) ، للتحقق مما إذا كانت كافة عناصر [_iterable_](https://docs.python.org/3/glossary.html#term-iterable) هي `True` . يأخذ حجة واحدة ، يمكن `iterable` .

## جدال

### iterable

الوسيطة `iterable` هي المجموعة التي سيتم التحقق من إدخالاتها. يمكن أن تكون `list` ، `str` ، `dict` ، `tuple` ، إلخ.

## قيمة الإرجاع

قيمة الإرجاع هي قيمة منطقية. إذا وفقط إذا كانت **جميع** إدخالات `iterable` [صادقة](https://guide.freecodecamp.org/python/truth-value-testing) ، فإنها ترجع `True` . تؤدي هذه الوظيفة بشكل أساسي عملية Boolean `AND` على جميع العناصر.

إذا لم يكن أحدهم صحيحًا ، فسيعرض `False` .

العملية `all()` مساوية (غير مطبقة داخليا بالضبط مثل هذا)

 `def all(iterable): 
    for element in iterable: 
        if not element: 
            return False 
    return True 
` 

## عينة الكود

 `print(all([])) #=> True  # Because an empty iterable has no non-truthy elements 
 print(all([6, 7])) #=> True 
 print(all([6, 7, None])) #=> False  # Because it has None 
 print(all([0, 6, 7])) #=> False  # Because it has zero 
 print(all([9, 8, [1, 2]])) #=> True 
 print(all([9, 8, []])) #=> False  # Because it has [] 
 print(all([9, 8, [1, 2, []]])) #=> True 
 print(all([9, 8, {}])) #=> False  # Because it has {} 
 print(all([9, 8, {'engine': 'Gcloud'}])) #=> True 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CL9U/0)

[المستندات الرسمية](https://docs.python.org/3/library/functions.html#all)