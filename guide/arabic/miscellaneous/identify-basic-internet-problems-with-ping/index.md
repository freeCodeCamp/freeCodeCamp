---
title: Identify Basic Internet Problems with Ping
localeTitle: التعرف على مشاكل الإنترنت الأساسية مع Ping
---
![شاشة السونار](//discourse-user-assets.s3.amazonaws.com/original/2X/b/b1bfc671722851eed4adfe2d4ec24eb9ab8a875b.png)

في المرة القادمة التي تتصل فيها بمكتب المساعدة ، هل تريد أن تبهرهم بمعرفتك بالشبكات؟ سيساعد استخدام أمر يسمى "ping" ، والذي تم إنشاؤه مباشرة في جهاز كمبيوتر Mac أو Windows أو Linux الموجود لديك ، في تحديد مشاكل الاتصال الأساسية. حسنًا ، قد لا يكون هذا كافياً "لإبهار" زملائك أعضاء الفريق ، ومع ذلك فهم سيقدرون أنك بدأت عملية التصحيح. ويرجى تذكر أن موظفي الدعم لديك هم متخصصون في تصحيح الأخطاء ، لذلك اتبع تعليماتهم عندما يخطرون خلال تسلسل استكشاف الأخطاء وإصلاحها.

## TL، DR:

يمكنك استخدام الأمر `ping` المدمج في كمبيوتر Mac OS X أو Windows أو Linux لتحديد مشكلات الاتصال الأساسية بالشبكة. يمكن أن يساعدك ذلك في حل المشكلة و / أو الحصول على معلومات تصحيح قيمة كخطوة أولى قبل الاتصال بالدعم. اقرأ أدناه للحصول على تفاصيل حول كيفية تشغيل نافذة سطر الأوامر وتشغيل الأمر `ping` من جهاز Mac OS X أو Windows.

## الأمر `ping` :

يعد الأمر `ping` طريقة بسيطة للتحقق من أن كمبيوتر آخر يمكنه تلقي معلومات منك. في الواقع ، [أطلق](https://en.wikipedia.org/wiki/Ping_%28networking_utility%29#History) المؤلف الأصلي ، [مايك موس](https://en.wikipedia.org/wiki/Mike_Muuss) ، [اسم البرنامج بعد صوت "ping"](https://en.wikipedia.org/wiki/Ping_%28networking_utility%29#History) الذي ترسله غواصة لكشف الأجسام الموجودة في الماء. إذا عاد صدى من بينغ ، فهذا يعني أن هناك شيء ما هناك. في الواقع ، يستخدم تطبيق `ping` " [طلب بروتوكول رسائل التحكم في الإنترنت للإنترنت](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol) " كجزء من تصميم البرنامج الأساسي.

في أبسط صوره ، يوفر الأمر `ping` اثنين من المعلومات القيّمة ، ما إذا كانت الرسالة قد رددت مرة أخرى ( `64 bytes from…` ) وكم من الوقت يستغرق لاستقبال الرسالة مرة أخرى (على سبيل المثال ، `time=6.396 ms` ). اعتمادًا على نوع الكمبيوتر الذي تستخدمه ، قد تحصل أيضًا على ملخص يحتوي على الحد الأدنى والحد الأقصى والمتوسط ​​والمزيد. يظهر وقت الاستجابة في "ms" ، أو مللي ثانية ، وهو 1 / 1000th من الثانية. زمن الاستجابة بسرعة 10 مللي ثانية أو أقل يكون سريعًا جدًا ، ومع ذلك ، فغالبًا ما تكون القيم في نطاق 100 مللي ثانية. في كثير من 200ms على الأرجح ستلاحظ أن لديك اتصال بطيء.

## عندما يكون كل شيء على ما يرام:

هذا هو ما تبدو عليه استجابة `ping` على جهاز كمبيوتر Mac OS X عندما يعمل كل شيء بشكل طبيعي هنا في ماليزيا:

 `MacBook-Pro:~ ajm$ ping Google.com 
 PING google.com (216.58.196.46): 56 data bytes 
 64 bytes from 216.58.196.46: icmp\_seq=0 ttl=55 time=6.396 ms 
 64 bytes from 216.58.196.46: icmp\_seq=1 ttl=55 time=6.368 ms 
 64 bytes from 216.58.196.46: icmp\_seq=2 ttl=55 time=26.773 ms 
 64 bytes from 216.58.196.46: icmp\_seq=3 ttl=55 time=6.984 ms 
 ^C 
 --- google.com ping statistics --- 
 4 packets transmitted, 4 packets received, 0.0% packet loss 
 round-trip min/avg/max/stddev = 6.368/11.630/26.773/8.746 ms 
` 

هذا هو ما تبدو عليه استجابة `ping` على كمبيوتر يعمل بنظام Windows عندما يكون كل شيء يعمل بشكل جيد:

 `C:\Users\BJM>ping Google.com 
 Pinging google.com [216.58.196.46] with 32 bytes of data: 
 Reply from 216.58.196.46: bytes=32 time=6ms TTL=128 
 Reply from 216.58.196.46: bytes=32 time=15ms TTL=128 
 Reply from 216.58.196.46: bytes=32 time=6ms TTL=128 
 Reply from 216.58.196.46: bytes=32 time=6ms TTL=128 
 Ping statistics for 216.58.196.46: 
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss), 
 Approximate round trip times in milli-seconds: 
    Minimum = 6ms, Maximum = 15ms, Average = 8ms 
` 

يمكنك أن ترى من هذه الأمثلة أن الاتصال جيد مع متوسط ​​زمن الاستجابة في 10 مللي ثانية.

### عندما يكون هناك خطأ ما (ثلاثة أمثلة):

فماذا سيحدث إذا لم أتمكن من الاتصال بـ `Google.com` ؟ على سبيل المثال ، \# 1 ، أحاكي اتصال شبكة معطوب بجهاز Mac عن طريق فصل جهاز التوجيه عن الجدار ، وإعادة تشغيل الأمر. أول شيء أنا لاحظت أن يستغرق وقتا أطول _كثيرا_ للأمر للرد:

 `MacBook-Pro:~ ajm$ ping google.com 
 ping: cannot resolve google.com: Unknown host 
 MacBook-Pro:~ ajm$ 
` 

أو ، على سبيل المثال ، رقم 2 ، بناءً على كيفية فشل الاتصال بالضبط:

 `PING google.com (216.58.196.46): 56 data bytes 
 Request timeout for icmp\_seq 0 
 Request timeout for icmp\_seq 1 
 Request timeout for icmp\_seq 2 
 ^C 
` 

وأحيانًا ، إذا كان لدي اتصال ضعيف بشكل خاص ، فسترى مزيجًا من هذه الرسائل. على سبيل المثال ، \# 3 ، يمكنني محاكاة ذلك عن طريق توصيل جهاز كمبيوتر Mac بجهاز Wi-Fi عام عبر الشارع:

 `PING google.com (216.58.196.206): 56 data bytes 
 64 bytes from 216.58.196.206: icmp\_seq=0 ttl=57 time=273.655 ms 
 64 bytes from 216.58.196.206: icmp\_seq=1 ttl=57 time=808.546 ms 
 64 bytes from 216.58.196.206: icmp\_seq=2 ttl=57 time=179.613 ms 
 Request timeout for icmp\_seq 3 
 Request timeout for icmp\_seq 4 
 64 bytes from 216.58.196.206: icmp\_seq=5 ttl=57 time=374.612 ms 
 Request timeout for icmp\_seq 6 
 ping: sendto: No route to host 
 Request timeout for icmp\_seq 7 
 ping: sendto: No route to host 
 Request timeout for icmp\_seq 8 
 ^C 
` 

في الاختبار الأول ، أخبرني `ping` أن جهازي لم يستطع حتى العثور على عنوان الإنترنت (IP `216.58.196.46` ) لـ `Google.com` . في الاختبار الثاني ، تذكرت جهاز الكمبيوتر الخاص بي عنوان IP الخاص بـ Google ، ولكن تعذر الوصول بالفعل إلى خوادم Google ( `Request timeout` ). في الاختبار الثالث ، `sendto: No route to host` يعني `sendto: No route to host` أن جهاز الشبكة يعرف مكان خوادم Google ، ولكن هناك شيء ما على المسار الرقمي مكسور.

## مستخدمو Mac: كيفية تشغيل الأمر `ping` :

في نظام التشغيل Mac ، يمكنك تشغيل `ping` من سطر الأوامر الطرفية. لبدء تشغيل الجهاز ، انقر فوق رمز العدسة المكبرة OS X Spotlight في الجزء العلوي الأيمن من سطح المكتب:

![ماك الاضواء](//discourse-user-assets.s3.amazonaws.com/original/2X/9/924e9346b5f92fe41127f6b3e403f454773edae9.png)

عندما تظهر نافذة البحث ، اكتب "terminal" ، قم بتمييز "Terminal - Utilities" ، ثم انقر نقرًا مزدوجًا (أو اضغط على

إرجاع

): ![ماك محطة إطلاق](//discourse-user-assets.s3.amazonaws.com/original/2X/9/976e1fb628c0d0bf2a6a9b57504305fd844716d4.png)

سيطلق ذلك إطار الأوامر الطرفي ، ويمكنك إدخال الأمر `ping Google.com` الموضح في الأمثلة: ![ماك سطر الأوامر](//discourse-user-assets.s3.amazonaws.com/original/2X/0/05d1e4d360c14921f7bd7ab871358b956f1e7d03.png)

**هام Mac Tip** : سيتم تشغيل الأمر `ping` إلى الأبد إذا لم تخبره بالتوقف. للقيام بذلك ، اضغط على

`control`

مفتاح (أسفل اليمين على لوحة المفاتيح) و

`c`

مفتاح. سيؤدي ذلك إلى مقاطعة الاختبار باستخدام Control-C ( `^C` ) وإعادة التحكم في سطر الأوامر مرة أخرى. بالنسبة لمستخدم Windows ، سيتوقف الأمر عن نفسه بعد عدة عمليات تكرار.

## مستخدمو Windows: كيفية تشغيل الأمر `ping` :

يختلف "موجه الأوامر" بين إصدارات Windows 10 و 8.1 و 8 و 7 ؛ هنا دليل كبير في [كيفية موجه الأوامر مفتوحة](http://pcsupport.about.com/od/commandlinereference/f/open-command-prompt.htm) . على جهاز يعمل بنظام التشغيل Windows 7 ، على سبيل المثال ، انقر فوق رمز "ابدأ" في Windows الأيمن السفلي ، وحدد "موجه الأوامر" وانقر نقرًا مزدوجًا (أو اضغط على

`enter`

):

![فوز محطة الإطلاق](//discourse-user-assets.s3.amazonaws.com/original/2X/4/4e0b18755930ad0d64e6e38763f0b96054fd76fb.png)

سيؤدي هذا إلى تشغيل نافذة الأوامر ، ويمكنك إدخال الأمر `ping Google.com` الموضح في الأمثلة:

![فوز سطر الأوامر](//discourse-user-assets.s3.amazonaws.com/original/2X/9/94d8ed91d29574497ad0f2eb2cd235050132851e.png)

الآن بعد معرفة كيفية استخدام الأمر `ping` ، يمكنك إجراء استكشاف الأخطاء وإصلاحها الأساسية للاتصال بالشبكة. مع القليل من الإبداع ، يمكنك العمل مع شخص دعم تكنولوجيا المعلومات المحلي لديك أو معرفة طبولوجيا الشبكة وعنوان IP الخاص بك (على سبيل المثال ، `ping` الموجه ، `ping` ISP) لمزيد من تحديد مشكلات الشبكة.