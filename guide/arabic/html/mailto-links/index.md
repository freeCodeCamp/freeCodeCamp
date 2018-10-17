---
title: Mailto Links
localeTitle: روابط Mailto
---
## روابط Mailto

ارتباط mailto هو نوع من الارتباطات التشعبية ( `<a href=""></a>` ) مع معلمات خاصة تتيح لك تحديد مستلمين إضافيين و / أو سطر موضوع و / أو نص أساسي.

### بناء الجملة الأساسي مع المستلم هو:

 `
<a href="mailto:friend@something.com">Some text</a> 
` 

### مزيد من التخصيص!

#### إضافة موضوع لهذا البريد:

إذا كنت ترغب في إضافة موضوع محدد لهذا البريد ، فكن حريصًا على إضافة `%20` أو `+` كل مكان هناك مسافة في سطر الموضوع. هناك طريقة سهلة للتأكد من تنسيقها بشكل صحيح وهي استخدام أداة [فك ترميز / ترميز عناوين URL](https://meyerweb.com/eric/tools/dencoder/) .

#### إضافة نص أساسي:

وبالمثل ، يمكنك إضافة رسالة محددة في جزء النص الأساسي للبريد الإلكتروني: مرة أخرى ، يجب استبدال المسافات بـ `%20` أو `+` . بعد الموضوع paramater ، يجب أن يسبق أي معلمة إضافية `&`

مثال: لنفترض أنك تريد من المستخدمين إرسال بريد إلكتروني إلى أصدقائهم حول مدى تقدمهم في Free Code Camp:

العنوان: فارغ

الموضوع: أخبار رائعة

Body: أكون مطورًا

رابط html الآن:

 `
<a href="mailto:?subject=Great%20news&body=I%20am%20becoming%20a%20developer">Send mail!</a> 
` 

هنا ، تركنا mailto فارغة (mailto :؟). سيؤدي ذلك إلى فتح عميل البريد الإلكتروني للمستخدم وسيضيف المستخدم عنوان المستلم نفسه.

#### إضافة المزيد من المستلمين:

بنفس الطريقة ، يمكنك إضافة معلمات CC و bcc. فصل كل عنوان بفاصلة!

يجب أن تسبق المعلمات الإضافية `&` .

 `
<a href="mailto:firstfriend@something.com?subject=Great%20news&cc=secondfriend@something.com,thirdfriend@something.com&bcc=fourthfriend@something.com">Send mail!</a> 
` 

#### معلومات اكثر:

[MDN - روابط البريد الإلكتروني](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#E-mail_links)