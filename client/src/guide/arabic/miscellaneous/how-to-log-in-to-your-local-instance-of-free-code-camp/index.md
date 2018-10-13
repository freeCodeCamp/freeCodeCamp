---
title: How to Log in to Your Local Instance of Free Code Camp
localeTitle: كيفية تسجيل الدخول إلى مثيلك المحلي من مخيم رمز الحرة
---
سيساعدك هذا الدليل على تسجيل الدخول إلى موقع FCC المحلي الخاص بك باستخدام حساب GitHub الخاص بك. يجب أن تكون هذه العملية مماثلة لتسجيل الدخول مع حسابات الوسائط الاجتماعية الأخرى. يفترض هذا الدليل أنك تمتلك نسخة محلية من FCC وتعمل.

## TL، DR

1.  [تسجيل تطبيق OAuth جديد](https://github.com/settings/developers)
2.  حقل الصفحة الرئيسية: `http://localhost:3000/`
3.  حقل رد الاتصال: `http://localhost:3000/auth/github/callback`
4.  نسخ / لصق معرف العميل السري العميل والدخول الى حسابك في `.env` ملف
5.  استخدم المنفذ 3000 عند عرض موقع FCC المحلي الخاص بك

Free Code Camp Issue Mods والموظفون متواجدون لمساعدتك في حل مشكلات الطلب Pull في [غرفة المحادثة للمساهمين](https://gitter.im/FreeCodeCamp/HelpContributors)

## تنصل

يشير الإخراج من تشغيل `$ gulp` إلى **"منفذ الوصول"** 3001. لقد قمت بتسجيل الدخول بنجاح بنجاح مع GitHub في منفذ 3000 - " **منفذ الوكيل"** . إذا فهمت كيفية تسجيل الدخول باستخدام منافذ أخرى ، يرجى النظر في تقديم طلب سحب على هذا الويكي.

## تسجيل الدخول باستخدام حساب GitHub الخاص بك

1.  [تسجيل تطبيق OAuth جديد](https://github.com/settings/developers) والنقر على **تسجيل تطبيق جديد**

_أو بدلاً من ذلك_ ، انقر فوق **صورة ملف التعريف** الخاص بك => **إعدادات** => **التطبيقات** => **تطبيقات المطور** => **تسجيل التطبيق الجديد**

![تسجيل GitHub OAuth التطبيق](//discourse-user-assets.s3.amazonaws.com/original/2X/5/55f4645c3498ceb8098afe8e8353da8f7c262548.png)

1.  املأ حقول تطبيق OAuth
    
    *   **اسم التطبيق** - اختر أي اسم ، مثل `fcc-local`
        
    *   **عنوان URL للصفحة الرئيسية** - تم تعيينه على `http://localhost:3000/`
        
    *   **وصف التطبيق** - اختياري
        
    *   **عنوان URL لاستدعاء التخويل** - تم تعيينه على `http://localhost:3000/auth/github/callback`
        
2.  انقر فوق **تسجيل التطبيق** لمشاهدة صفحة التطبيق المسجلة حديثًا مع معرف العميل الخاص بك وسر العميل.
    

![معرف العميل وسرية العميل](//discourse-user-assets.s3.amazonaws.com/original/2X/c/c43ee37a9f0f228d3663bb28accedc14cca3ff56.png)

1.  قم بنسخ Client ID و Client Client `.env` ملف `.env` .

_ملاحظة: سيكون معرف العميل وسرية العميل قيمًا أبجدية رقمية طويلة._

![تحديث ملف](//discourse-user-assets.s3.amazonaws.com/original/2X/5/549aeaa6ea85e119ba5e978c708dc55c39b134b3.png)

## نصائح

1.  يؤدي إزالة / إلغاء التعطيل مع التعليق إلى حظر الموفر غير المرغوب فيه في موفر [جواز السفر](https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/server/passport-providers.js) .
    
2.  إضافة SESSION _SECRET و COOKIE_ SECRET في `.env` إذا حصلت على خطأ في جلسة العمل السريعة و cookieParser.
    
    `COOKIE_SECRET='secret' SESSION_SECRET='secret'`
    
3.  تشغيل `node seed` القيادة قبل تشغيل `gulp` إذا كنت لا تحصل على التحديات.
    

## تم الانتهاء من

تهانينا! يمكنك الآن بنجاح تسجيل الدخول إلى موقع FCC المحلي الخاص بك باستخدام حساب GitHub الخاص بك.