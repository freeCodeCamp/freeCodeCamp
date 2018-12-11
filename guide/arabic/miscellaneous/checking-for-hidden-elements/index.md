---
title: Checking for Hidden Elements
localeTitle: التحقق من العناصر المخفية
---
هناك أوقات قد تحتاج فيها إلى التحقق مما إذا كان العنصر مرئيًا أو مخفيًا على الشاشة حتى تتمكن من تنفيذ بعض الإجراءات عليه نظرًا لحالته. كنت أبحث في بعض الحلول على Stack Overflow لمحاولة التأكد مما إذا كان العنصر مرئيًا ، ولم أكن راضياً عن الإجابات التي تلقيتها.

كانت الإجابة واحدة لاستخدام مكتبة jQuery ، ومن ثم تحقق لمعرفة ما إذا كان العنصر يحتوي على pseudoclass `:visible` باستخدام هذا التنسيق: `$(element).is(':visible')` . يعمل هذا مع العناصر المخفية باستخدام `display: none;` عليها، ولكنه لا يعمل على أي عنصر التي لها `visibility` لتعيين `hidden` . كما أنه لا يعمل إذا كان العنصر الرئيسي هو العنصر الوحيد المخفي عن العرض. إذا كان أي عنصر رئيسي في العنصر الذي تم اختباره مخفيًا ، باستخدام إما إمكانية `visibility` أو `display` ، فسيظهر العنصر الذي يتم اختباره على أنه مرئي ، على الرغم من عدم ظهوره على الشاشة.

## الحل

لقد توصلت إلى وظيفة جافا سكريبت بحتة والتي تحل هذه المشكلة التي ليس لها اعتمادات وهي حل متوافق مع المتصفحات المتقاطعة. تقوم هذه الوظيفة بتحليل العنصر أولاً لمعرفة ما إذا كان يتم `display` خصائص `display` أو `visibility` على أنها `none` أو `hidden` على التوالي. ثم ، إذا كانت تلك العودة طبيعية ، فإنها تتحقق من جميع عناصر الأصل حتى نص المستند. إذا كان العنصر الرئيسي للعنصر الجاري اختباره مخفيًا ، فهذا يعني أن العنصر الجاري اختباره غير مرئي في المستند.

[في ما يلي نموذج CodePen الذي يوضح هذا السلوك ويعرض المقارنة التي تستخدم حل jQuery وحل جافا سكريبت الخالص](http://codepen.io/marcusparsons/pen/bpNqgY) . لاحظ في CodePen أنه على الرغم من أن العنصر غير واضح من العرض ، فإن استخدام jQuery's `.is(':visible')` لا يعد خيارًا قابلاً للتطبيق لفحص أي عنصر للرؤية.

وهنا هي الوظيفة التي أنشأتها:

 `function isVisible (element) { 
    //start with initial element to check visibility and display 
    var el = document.querySelector(element); 
    //display and visibility vary per browser and must be sought in different ways depending on the browser 
    var t1 = el.currentStyle ? el.currentStyle.visibility : getComputedStyle(el, null).visibility; 
    var t2 = el.currentStyle ? el.currentStyle.display : getComputedStyle(el, null).display; 
    //if either of these are true, then the element is not visible 
    if (t1 === "hidden" || t2 === "none") { 
        return false; 
    } 
    //This regex is used to scan the parent nodes all the way up to the body element 
    while (!(/body/i).test(el)) { 
        //get the next parent node 
        el = el.parentNode; 
        //grab the values, if available, 
        t1 = el.currentStyle ? el.currentStyle.visibility : getComputedStyle(el, null).visibility; 
        t2 = el.currentStyle ? el.currentStyle.display : getComputedStyle(el, null).display; 
        if (t1 === "hidden" || t2 === "none") { 
            return false; 
        } 
    } 
    //if all scans are not successful, then the element is visible 
    return true; 
 } 
` 

ولكي تستخدم الوظيفة ، تحتاج فقط إلى الاتصال بها بسلسلة استعلام لتحديد العنصر المراد اختباره

 `<body> 
    <p style="visibility: hidden;" id="myP">My paragraph</p> 
    <script type="text/javascript"> 
        //include isVisible function 
        alert('Is my paragraph visible? ' + isVisible('#myP')); 
    </script> 
 </body> 
` 

وسيكون التنبيه الناتج: `Is my paragraph visible? false`