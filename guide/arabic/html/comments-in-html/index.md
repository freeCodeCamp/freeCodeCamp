---
title: Comments in HTML
localeTitle: التعليقات في HTML
---
## التعليقات في HTML

علامة التعليق هي عنصر يستخدم في ترك الملاحظات ، والتي تتعلق في الغالب بالمشروع أو موقع الويب. تُستخدم هذه العلامة كثيرًا لشرح شيء ما في التعليمة البرمجية أو ترك بعض التوصيات حول المشروع. تسهل علامة التعليق على المطور أيضًا الرجوع وفهم الرمز الذي كتبه في مرحلة لاحقة. يمكن أيضًا استخدام التعليقات للتعليق على أسطر التعليمة البرمجية لأغراض التصحيح.

من الممارسات الجيدة إضافة تعليقات إلى شفرتك ، خاصة عند العمل مع فريق أو في شركة.

تبدأ التعليقات بـ `<!--` وتنتهي بـ `-->` ، ويمكن أن تمتد على أسطر متعددة. يمكن أن تحتوي على رمز أو نص ، ولن تظهر في الواجهة الأمامية لموقع الويب عندما يزور أحد المستخدمين صفحة. يمكنك عرض التعليقات من خلال Inspector Console ، أو عن طريق عرض Page Source.

### مثال

 `
<!-- You can comment out a large number of lines like this. 
 Author: xyz 
 Date: xx/xx/xxxx 
 Purpose: abc 
 --> 
 Read more: https://html.com/tags/comment-tag/#ixzz4vtZHu5uR 
 <!DOCTYPE html> 
 <html> 
    <body> 
        <h1>FreeCodeCamp web</h1> 
        <!-- Leave some space between the h1 and the p in order to understand what are we talking about--> 
        <p>FreeCodeCamp is an open-source project that needs your help</p> 
            <!-- For readability of code use proper indentation --> 
    </body> 
 </html> 
` 

## التعليقات الشرطية

تحدد التعليقات الشرطية بعض علامات HTML التي يتم استهلالها عند ملء كود معين.

التعليقات الشرطية يتم التعرف عليها فقط بواسطة Internet Explorer الإصدار 5 حتى الإصدار 9 - IE5 - IE9.

### مثال

 `
<!DOCTYPE html> 
 <html> 
    <body> 
        <!--[if IE 9]> 
                <h1>FreeCodeCamp web</h1> 
            <p>FreeCodeCamp is an open-source project that needs your help</p> 
        <![endif]--> 
    </body> 
 </html> 
` 

### أي تعليقات شرطية

هذه التعليقات متوفرة فقط في Internet Explorer ويمكن استخدامها حتى IE9. في الأوقات الحالية ، هناك تغيير جيد لن تراهم ، ولكن من الجيد معرفة وجودهم. التعليقات الشرطية هي طريقة لتقديم تجربة مختلفة لمتصفحات العميل المختلفة. فمثلا:

 `
<!--[if lt IE 9]> <p>Your browser is lower then IE9</p> <![endif]--> 
 <!--[if IE 9]> <p>Your browser is IE9</p> <![endif]--> 
 <!--[if gt IE 9]> <p>Your browser is greater then IE9</p> <![endif]--> 
` 

[حول التعليقات الشرطية](https://msdn.microsoft.com/en-us/library/ms537512(v=vs.85).aspx)