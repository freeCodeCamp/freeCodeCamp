---
title: Itertools
localeTitle: Itertools
---
Itertools هو وحدة بيثون من الوظائف التي تعيد المولدات ، الكائنات التي تعمل فقط عندما تتكرر. تتضمن بعض أمثلة وظائف itertool على سبيل المثال لا الحصر: سلسلة () و imap () و product () و compress ().

### سلسلة()

تأخذ الدالة chain () عدة متكررات كوسيطة وتعطي مكررًا واحدًا ينتج محتوياتها كلها كما لو أنها جاءت من تسلسل واحد.

 `import itertools 
 list(itertools.chain([1, 2], [3, 4])) 
 
 # Output 
 # [1, 2, 3, 4] 
` 

### islice ()

ترجع الدالة islice () إلى تكرار الذي يعيد العناصر المحددة من مدخلات الإدخال ، حسب الفهرس. يأخذ نفس الوسيطات مثل عامل تشغيل الشرائح للقوائم: البدء والتوقف والخطوة. بدء وإيقاف اختيارية.

 `import itertools 
 list(itertools.islice(count(), 5)) 
 
 # Output 
 # [0,1, 2, 3, 4] 
` 

### izip ()

تُرجع izip () أداة تكرار تجمع عناصر عدة وحدات تكرارية في مجموعات. يعمل مثل zip () وظيفة مدمجة ، إلا أنه يعيد مكررًا بدلاً من قائمة.

 `import itertools 
 list(izip([1, 2, 3], ['a', 'b', 'c'])) 
 
 # Output 
 # [(1, 'a'),(2, 'b'),(3, 'c')] 
` 

تكرارات Combinatoric:

نتائج الحجج المتكررة منتج () p ، q ، ... \[repeat = 1\] منتج ديكارت ، أي ما يعادل حلقة متداخلة التباديل () p \[، r\] r-length tuples، all order possibleings، no repeat elements مجموعات (p) ، و r-length tuples ، بترتيب مفروز ، بدون عناصر متكررة مجموعات _مع_ بدائل () p، r-rups طول ، بترتيب مفرز ، مع عناصر متكررة product ('ABCD'، repeat = 2) AA AB AC AD BA BB BC BD CA CB CC CD DA DB DC DD permutations ('ABCD'، 2) AB AC AD BA BC BD CA CB CD DA DB DC

مجموعات ('ABCD' ، 2) AB AC AD BC BD CD

مجموعات _مع_ استبدال ('ABCD' ، 2) AA AB AC AD BB BB BD BD CD CD DD

المصدر: الشبكي: //docs.python.org/3/library/itertools.html