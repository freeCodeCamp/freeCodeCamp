---
title: Generators
localeTitle: مولدات كهرباء
---
## مولدات كهرباء

المولدات هي نوع خاص من الوظائف التي تسمح لك بإرجاع القيم دون إنهاء وظيفة. يفعل هذا عن طريق استخدام الكلمة الرئيسية `yield` . على غرار `return` ، و `yield` سوف التعبير بإرجاع قيمة إلى المتصل. والفرق الرئيسي بين الاثنين هو أن `yield` سيعلق الوظيفة ، مما يسمح بإعادة المزيد من القيم في المستقبل.

المولدات قابلة للتكرار حتى يمكن استخدامها بشكل نظيف مع الحلقات أو أي شيء آخر يتكرر.

 `def my_generator(): 
    yield 'hello' 
    yield 'world' 
    yield '!' 
 
 for item in my_generator(): 
    print(item) 
 
 # output: 
 # hello 
 # world 
 # ! 
` 

مثل المكررات الأخرى ، يمكن تمرير المولدات إلى الوظيفة `next` لاسترداد العنصر التالي. عندما لا يحتوي المولّد على قيم أكثر `StopIteration` ، `StopIteration` خطأ `StopIteration` .

 `g = my_generator() 
 print(next(g)) 
 # 'hello' 
 print(next(g)) 
 # 'world' 
 print(next(g)) 
 # '!' 
 print(next(g)) 
 # Traceback (most recent call last): 
 #   File "<stdin>", line 1, in <module> 
 # StopIteration 
` 

تعد المولدات مفيدة بشكل خاص عندما تحتاج إلى إنشاء مجموعة كبيرة من القيم ولكن لا تحتاج إلى الاحتفاظ بها كلها في الذاكرة في نفس الوقت. على سبيل المثال ، إذا كنت بحاجة إلى طباعة أول مليون مليون فيبوناتشي ، فيجب عليك عادة إرجاع قائمة بقيمة مليون وتكرارها على القائمة لطباعة كل قيمة. ومع ذلك ، مع مولد ، يمكنك إرجاع كل قيمة واحدة في كل مرة:

 `def fib(n): 
    a = 1 
    b = 1 
    for i in range(n): 
        yield a 
        a, b = b, a + b 
 
 for x in fib(1000000): 
    print(x) 
` 

### معلومات اكثر

*   [PEP 255](https://www.python.org/dev/peps/pep-0255/)
*   [بايثون ويكي](https://wiki.python.org/moin/Generators)
*   [وثائق بيان العائد](https://docs.python.org/2/reference/simple_stmts.html#yield)