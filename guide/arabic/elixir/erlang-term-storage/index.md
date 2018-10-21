---
title: Erlang Term Storage
localeTitle: Erlang Term Storage
---
## Erlang Term Storage

يعتبر Erlang Term Storage ، الذي يتم اختزاله عادة باسم ETS ، قاعدة بيانات في الذاكرة مدمجة في OTP ، ويمكن الوصول إليها داخل الإكسير ، وهو بديل قوي لحلول مثل Redis عند تشغيل التطبيق الخاص بك على عقدة واحدة.

## بداية سريعة

لإنشاء جدول ETS ، تحتاج أولاً إلى `tableName = :ets.new(:table_otp_name, [])` جدول `tableName = :ets.new(:table_otp_name, [])` ، بمجرد أن تقوم بتحويل جدول ما ، يمكنك: إدخال البيانات وقيم البحث وحذف البيانات والمزيد.

### ETS Demo في IEX

 `iex(1)> myETSTable = :ets.new(:my_ets_table, []) 
 #Reference<0.1520230345.550371329.65846> 
 iex(2)> :ets.insert(myETSTable, {"favoriteWebSite", "freeCodeCamp"}) 
 true 
 iex(3)> :ets.insert(myETSTable, {"favoriteProgrammingLanguage", "Elixir"}) 
 true 
 iex(4)> :ets.i(myETSTable) 
 <1   > {<<"favoriteProgrammingLanguage">>,<<"Elixir">>} 
 <2   > {<<"favoriteWebSite">>,<<"freeCodeCamp">>} 
 EOT  (q)uit (p)Digits (k)ill /Regexp --> 
` 

## إصرار

جداول ETS ليست ثابتة ويتم تدميرها بمجرد انتهاء العملية التي تمتلكها. إذا كنت ترغب في تخزين البيانات باستمرار ، يوصى باستخدام قاعدة بيانات تقليدية و / أو تخزين قائم على الملفات.

## استخدم حالات

تستخدم جداول خدمات الاختبارات التربوية بشكل شائع في تخزين البيانات المخبأة في التطبيق ، على سبيل المثال ، قد يتم تخزين بيانات الحساب التي يتم جلبها من قاعدة بيانات في جدول ETS لتقليل حجم الاستعلامات إلى قاعدة البيانات. حالة استخدام أخرى هي تحديد معدل استخدام الميزات في تطبيق الويب - سرعة القراءة والكتابة في ETS تجعلها رائعة لهذا. جداول ETS هي أداة قوية لتطوير تطبيقات ويب متوافقة بشكل كبير بأقل تكلفة ممكنة للأجهزة.

#### معلومات اكثر:

*   [elixir-lang.org | مكتبات إرلانج (ETS)](https://elixir-lang.org/getting-started/erlang-libraries.html#erlang-term-storage)
*   [erlang.org | ETS](http://erlang.org/doc/man/ets.html)