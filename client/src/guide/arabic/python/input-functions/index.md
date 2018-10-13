---
title: Python Input Function
localeTitle: بايثون وظيفة المدخلات
---
كثير من الوقت ، في برنامج نحتاج بعض المدخلات من المستخدم. أخذ المدخلات من المستخدم يجعل البرنامج يشعر بالتفاعل. في بايثون 3 ، لأخذ مدخلات من المستخدم لدينا وظيفة `input()` . إذا تم استدعاء وظيفة الإدخال ، فسيتم إيقاف تدفق البرنامج حتى يقوم المستخدم بإدخال مدخلات وقد أنهى الإدخال باستخدام مفتاح الإرجاع. دعونا نرى بعض الأمثلة:

1.  عندما نريد فقط أن نأخذ المدخلات:
    
    # هذا سوف يعطي مجرد موجه دون أي رسالة
    
    inp = input ()
    

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CUqX/0)

1.  لتقديم مطالبة برسالة:
    
    موجه _مع_ message = input (' ')
    
    # \_
    
    # "\_" في الإخراج هو الموجه
    

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CUqX/1)

3\. عندما نريد أن نأخذ مدخلات صحيحة:

 `number = int(input('Please enter a number: ')) 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CUqX/2)

إذا قمت بإدخال قيمة غير صحيحة ، فستقوم Python بإلقاء خطأ `ValueError` . **لذلك عندما تستخدم هذا ، يرجى التأكد من التقاطه أيضًا.** خلاف ذلك ، سيتوقف البرنامج بشكل غير متوقع بعد المطالبة.

 `number = int(input('Please enter a number: ')) 
 # Please enter a number: as 
 # Enter a string and it will throw this error 
 # ValueError: invalid literal for int() with base 10 'as' 
` 

4\. عندما نريد إدخال سلسلة:

 `string = str(input('Please enter a string: ')) 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CUqX/3)

على الرغم من ذلك ، يتم تخزين المدخلات بشكل افتراضي كسلسلة. إن استخدام الدالة `str()` يوضح لقارئ التعليمات البرمجية أن الإدخال سيكون "سلسلة". وﻣﻦ اﻟﻤﻤﺎرﺳﺔ اﻟﺴﻠﻴﻤﺔ أن ﻧﺬآﺮ ﻣﺎ هﻮ ﻧﻮع اﻟﻤﺪﺧﻼت اﻟﺘﻲ ﺳﺘﺘﺨﺬ ﻣﺴﺒﻘًﺎ.

[المستندات الرسمية](https://docs.python.org/3/library/functions.html#input)