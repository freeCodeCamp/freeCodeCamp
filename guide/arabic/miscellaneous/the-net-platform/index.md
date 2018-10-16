---
title: The Net Platform
localeTitle: منصة الشبكة
---
**منصة NET** عبارة عن مجموعة كبيرة وشاملة من الأطر والمكتبات التي تديرها [Microsoft](https://www.microsoft.com/net) . C # هي أكثر اللغات شيوعًا المستخدمة لتطوير مجموعة من تطبيقات .NET ، مثل [تطبيقات الويب](http://www.asp.net/) و [windows aps](https://dev.windows.com/en-us/) و [Mac و iPhone apps](https://www.xamarin.com/platform) .

سوف نبدأ بتعلم لغة برمجة C # ، وسوف نجعلك على دراية ببيئة التطوير ، وهياكل المشروع ، والتقنيات ، وأفضل الممارسات التي ستقوم بها كمطور محترف.

دعونا أولاً نبدأ بنظرة عامة موجزة عن منصة .NET ، ونحصل على بعض jargons من الطريق. لا تقلق ، ليس عليك أن تعرف بالتفصيل هذه الأمور في هذه المرحلة.

*   [يوفر .NET Framework](https://msdn.microsoft.com/en-gb/library/w0x726c2(v=vs.110) .aspx): ( _pronounced net dot_ ) التهيئة لتشغيل التطبيق الخاص بك فوقه. يوفر جميع الخدمات التي يحتاجها التطبيق ؛ على سبيل المثال ، التواصل مع قاعدة البيانات والشبكات وأنظمة الملفات التي تُستخدم عادةً لإنشاء تطبيقات لوحدة التحكم وأجهزة سطح المكتب والويب والجوال والألعاب.
    
    *   [CLR (Common Language Runtime)](https://msdn.microsoft.com/en-us/library/8bs2ecf4(v=vs.100) .aspx): هي بيئة تنفيذ للتطبيق الخاص بك الذي يدير دورة حياته. يوفر CLR خدمات مثل إدارة الذاكرة ، وهو:
    
    1\. تنفيذ [معيار CLI (البنية التحتية العامة للغات)](http://www.ecma-international.org/publications/standards/Ecma-335.htm) 2. مصممة لتكون منصة مستقلة. يشير النظام الأساسي إلى بنية الكمبيوتر ونظام التشغيل. 3. لغة مستقلة ، على سبيل المثال يمكن استخدامها ل C # ، C ++ ، [VB.NET\] \[vbnet\] و \[F #\] \[fsharp\].](https://msdn.microsoft.com/en-us/library/system.io(v=vs.110)
    
*   C-Sharp Compiler: `csc.exe` عبارة عن مترجم يقوم بتحويل الكود C # إلى اللغة الوسيطة لـ Microsoft (MSIL) ، والمشار إليه عادة بـ IL. يحدد التعليمات التي يمكن أن يفهمها CLR. مهمة CLR هي قراءة هذه التعليمات وترجمتها إلى تعليمات مفهومة آليًا.
    
*   مكتبات Class: تحتوي على آلاف الطبقات المضمنة لاستخدام التطبيق الخاص بك ، على سبيل المثال \[ `System.IO` .aspx) [`HttpClient`](https://msdn.microsoft.com/en-us/library/system.net.http.httpclient(v=vs.118) بيانات القراءة / الكتابة ، [`HttpClient`](https://msdn.microsoft.com/en-us/library/system.net.http.httpclient(v=vs.118) .aspx) يرسل البيانات عبر الشبكة ، [`ASP.NET`](http://www.asp.net/) لتطبيقات الويب ، [`ADO.NET`](https://msdn.microsoft.com/en-us/library/h43ks021(v=vs.110) .aspx) للوصول إلى البيانات إلى قواعد البيانات العلائقية (مثل Microsoft SQL Server و MySQL) ، و [Windows Communication Foundation (WCF)](https://msdn.microsoft.com/en-us/library/ms735119(v=vs.90) .aspx) للتطبيقات الموجهة للخدمة التي تتصل عبر البروتوكولات المحددة مثل HTTP و REST و SOAP و TCP إلخ.
    
*   لغة برمجة C # ( _تنطق بـ "C-sharp"_ ): تحتوي C # على صيغة مشابهة لـ Java و C ++ و Javascript. أنه:
    
    1.  تستخدم في كتابة التطبيقات والخدمات والمكتبات التي يعاد استخدامها.
    2.  مصممة للعمل مع منصة NET.
    3.  مكتوبة بقوة ، عالية المستوى وجوه المنحى اللغة.
    
    *   [.NET Core](https://blogs.msdn.microsoft.com/dotnet/2014/12/04/introducing-net-core/) : هو السعي الأخير من Microsoft إلى التقدم نحو تطوير البرامج مفتوحة المصدر ، [وتقديمها عبر](https://www.nuget.org/) حزم [Nuget](https://www.nuget.org/) . إنهم يعملون مع مجتمع [Mono](http://www.mono-project.com/) ، وهو عبارة عن تنفيذ إطار عمل Microsoft .NET لإنشاء تطبيقات على Windows و Linux و iOS.
        
    *   [سيلفرلايت](https://www.microsoft.com/silverlight/) : تهدف في المقام الأول إلى التركيز على المكونات الإضافية لمتصفحات الويب لتوفير الوسائط المتعددة.
        
    *   [.NET لتطبيق windows](https://dev.windows.com/en-us/) : يُستخدم لإنشاء تطبيقات Windows 8.x Store باستخدام C #.
        

## لغة برمجة C #

الخطوة التالية لتعلم لغة برمجة C # .