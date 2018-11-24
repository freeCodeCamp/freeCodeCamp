---
title: Python Frozenset
localeTitle: بايثون فروزينسيت
---
**`frozenset` المعلومات الأساسية** نوع `frozenset` هو نوع من أنواع المبينات التي لا يمكن تغييرها وقابل للغسل - لا يمكن تغيير محتوياتها بعد إنشائها ؛ ومع ذلك ، يمكن استخدامه كمفتاح القاموس أو كعنصر من مجموعة أخرى. Frozensets تشبه مجموعات إلا أنه لا يمكن تغييرها ، أي أنها غير ثابتة.

 `>>> cities = frozenset(["Frankfurt", "Basel", "Freiburg"]) 
 >>> cities.add("Strasbourg") 
 Traceback (most recent call last): 
    File "<stdin>", line 1, in <module> 
 AttributeError: 'frozenset' object has no attribute 'add' 
 >>> 
` 

منشئ `frozenset` : `frozenset([iterable])` the iterable يحتوي على عناصر لتهيئة frozenset مع. يمكن تعيين `frozenset()` ، والقاموس ، وما إلى ذلك. إذا لم يتم تمرير أي معلمة ، ترجع طريقة `frozenset()` frozenset فارغة.

**أمثلة**

 `>>> vowels = ('a', 'e', 'i', 'o', 'u') 
 >>> fSet = frozenset(vowels) 
 >>> print("The frozen set is: ", fSet) 
 The frozen set is: frozenset({'i', 'e', 'a', 'u', 'o'}) 
 >>> print("The empty frozen set is: ", frozenset()) 
 The empty frozen set is: frozenset() 
 >>> 
` 

**مثال آخر**

 `>>> person = {"name": "John", "age": 23, "sex": "male"} 
 >>> fSet = frozenset(person) 
 >>> print("The frozen set is: ", fSet) 
 The frozen set is: frozenset({'sex', 'name', 'age'}) 
 >>> 
` 

**معلومة اضافية** [بايثون فروزينسيت ()](https://www.programiz.com/python-programming/methods/built-in/frozenset) [مجموعة أنواع - مجموعة ، frozenset](https://docs.python.org/2.4/lib/types-set.html) [Python Tutorial: مجموعات ومجموعات مجمدة](https://www.python-course.eu/sets_frozensets.php)