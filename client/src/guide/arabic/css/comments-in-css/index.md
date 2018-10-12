---
title: Comments in CSS
localeTitle: التعليقات في CSS
---
## التعليقات في CSS

يتم استخدام التعليقات في CSS لشرح كتلة من التعليمات البرمجية أو لإجراء تغييرات مؤقتة أثناء التطوير. لا يتم تنفيذ التعليمة البرمجية التي تم التعليق عليها.

يعمل بناء جملة التعليقات في CSS على التعليقات الفردية والمتعددة الخطوط. يمكنك إضافة أي عدد من التعليقات إلى ورقة أنماطك كما تريد.

 `    /* 
        This is 
        a multi-line 
        comment 
    */ 
 
    /* This is a single line comment*/ 
    .group:after { 
        content: ""; 
        display: table; 
        clear: both; 
    } 
` 

من خلال استخدام تعليقات CSS لجعل أوراق الأنماط لديك أكثر قابلية للقراءة ، سيكون من الأسهل الحفاظ على CSS في المستقبل لك أو لأي مطور آخر. من الممارسات الجيدة استخدام تعليقات CSS للمساعدة في تحديد أجزاء أي ورقة أنماط قد يصعب فهمها بالنسبة لشخص لم يكتب الشفرة.

يمكنك أيضًا جعل تعليقاتك أكثر قابلية للقراءة عن طريق تصميمها.

 `/* 
 *** 
 * SECTION FOR H2 STYLE 
 *** 
 * A paragraph where I give informations 
 * about everything that someone who reads the code 
 * but didn't write it would need to know. 
 * The asterisk around the paragraph make it more readable. 
 *** 
 */ 
 
 You can add as many comments to your stylesheet as you like. It's good practice to use CSS comments to help identify parts of any stylesheet that might be difficult to understand from a cursory glance. Comments are especially important when working in a team, when your code must be understood by others. By using CSS comments to make your stylesheets more readable, the CSS will be easier to maintain in the future. 
 
 ## Comment Formats 
 
 Comments should be used everyday in your CSS to keep in maintainable and readable by any dev who dives into said CSS. 
 Here are a few exmples to get you started of CSS comments you can use in your daily work to make your life that bit easier. 
` 

المغلق / \* + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + + ++++++++++++++++++++++++++ ++++++++++++++++++++++++++++++++++++++++++++++++++ ++++++++++++++++++++++++ CSS جدول المحتويات

1.0 - إعادة تعيين 2.0 - الخطوط 3.0 - Globals 4.0 - لوحة الألوان 5.0 - الرأس 6.0 - الجسم 6.1 - المتزلجون 6.2 - الصور 7.0 - تذييل الصفحة ++++++++++++++++++++++++++++++++++++++++++++++++++ ++++++++++++++++++++++++ ++++++++++++++++++++++++++++++++++++++++++++++++++ +++++++++++++++++

/ 1.0 - إعادة تعيين \* /

/ 2.0 - الخطوط \* /

/ 3.0 - Globals \* /

/ 4.0 - لوحة الألوان \* /

/ 5.0 - الرأس \* /

/ 6.0 - الجسم \* /

 `/************************************************************************ 
 5.1 - Sliders */ 
 
 /************************************************************************ 
 5.2 - Imagery */ 
` 

/ 7.0 - تذييل الصفحة \* / \`\` \`المغلق

h2 { حجم الخط: 1.2em ؛ font-family: "Ubuntu"، serif؛ تحويل النص: أحرف كبيرة؛ } \`\` \`

### معلومات اكثر:

*   [وثائق MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Comments)
*   [تعليقات المغلق من قبل آدم روبرتس](https://www.sitepoint.com/css-comments/)
*   [CSS المبادئ التوجيهية](https://cssguidelin.es/#commenting)