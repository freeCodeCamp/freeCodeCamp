---
title: Link to Internal Sections of a Page with Anchor Elements
localeTitle: رابط إلى الأقسام الداخلية لصفحة مع عناصر الارتساء
---
## رابط إلى الأقسام الداخلية لصفحة مع عناصر الارتساء

كما جاء في تعليمات يتكون الارتباط الداخلي من عنصرين: `a` العلامة وعنصر HTML مع `id` المستخدمة في `href` السمة من `a` العلامة.

كل هذه روابط داخلية صالحة:

ANCHOR TAG | يجلب إلى ----- | ------ `<a href="#destination">I am an internal link</a>` | `<p id="destination">I am the destination of the link</p>` `<a href="#inlinestuff">I am an internal link</a>` | `<span id="inlinestuff">I am the destination of the link</span>` `<a href="#title">I am an internal link</a>` | `<h1 id="title">I am the destination of the link</h1>` `<a href="#mainarticle">I am an internal link</a>` | `<article id="mainarticle">I am the destination of the link</article>`

تتم مطالبتك باستخدام عنصر الارتساء الموجود لإنشاء رابط داخلي ، لذلك لا تكتب علامة ارتساء أخرى.

لتحويل علامة الربط الفعلية ليس هو الشيء الوحيد الذي يريد التحدي أن تفعله على الرغم من ذلك ، هناك نقطتان أخريان:

*   لإزالة `target` سمة من `a` العلامة: كنت لا تريد بعد الآن لفتح علامة تبويب جديدة في المتصفح الخاص بك، فمن الصفحة الفعلية التي سوف 'خطوة' أعلى / أسفل.
    
*   لتعديل مضمون نص `a` العلامة: من `cat photos` على `Jump to Bottom` (القيمة الاختيار مزدوجة).
    
    حظا طيبا وفقك الله!