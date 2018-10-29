---
title: Collapse
localeTitle: انهدام
---
## انهدام

يعد Collapse مكونًا إضافيًا يساعدك في إخفاء العناصر أو إظهارها باستخدام صورة متحركة سلسة. يستخدم المطورون عادةً انهيار bootstrap لإخفاء أو كشف التفاصيل الثانوية لقسم صفحة الويب. على سبيل المثال ، يمكن أن يكون لديك قائمة بالعناصر ذات الأوصاف الطويلة للغاية. عرض كل شيء سوف يستهلك الكثير من المساحة حتى يمكن استخدام انهيار bootstrap لإخفاء ووصف الوصف.

يتم توفير انهيار Bootstrap على أنه ملحق منفصل يسمى collapse.js ، مما يعني أنه يمكن استخدامه خارج بيئة التشغيل. يمكن العثور على البرنامج المساعد نفسه هنا http://getbootstrap.com/2.0.4/javascript.html#collapse.

يمكن استخدام انهيار Bootstrap مع بعض العناصر ، زر ، علامة ارتساء أو لوحة. لاستخدام الانهيار ، تحتاج إلى عنصرين على الأقل ، وسيتحكم عنصر واحد في حالة إخفاء أو كشف العنصر الآخر.

يعمل المكوِّن الإضافي للانهيار عن طريق تغيير الفئة على العنصر القابل للطي. هناك ثلاث فئات محتملة:

*   .collapse - يخفي هذا الفصل العنصر
*   .collapsing - يتم إرفاق هذه الفئة أثناء الانتقال
*   .collapse.in - يعرض هذا الفصل العنصر

### كيفية استخدامها

لاستخدام الانهيار ، يمكنك القيام بذلك بطريقتين:

*   باستخدام `href` على العلامة `<a>`
*   استخدام `data-target` على علامة `<button>`

ستكون القيمة في `href` أو `data-target` هي محدد العنصر الذي سيتم تصغيره. وقرر أنك تستخدم `<a>` أو علامة `<button>` ، يلزم `data-toggle="collapse"` .

يجب أن يحتوي عنصر التصغير على class `.collapse` .

### أمثلة مع الأزرار

 `
<a class="btn btn-primary" role="button" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> 
  Link with href 
 </a> 
 <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> 
  Button with data-target 
 </button> 
 
 <div class="collapse" id="collapseExample"> 
  <div class="well"> 
    ... 
  </div> 
 </div> 
` 

في المثال أعلاه ، نستخدم زرًا وعلامة ارتساء للتحكم في عنصر div. يحتاج الزر والمرسلان وهما عنصران للتحكم إلى شيئين ، السمة التي تحدد أن عنصر التحكم هو من أجل الانهيار وسمة أخرى لتحديد العنصر الذي يتحكم فيه (يخفي أو يكشف).

كلاهما يحتوي على سمة _تبديل البيانات_ مع _انهيار_ القيمة الذي يحدد أنه سيتم استخدامها لتصغير عنصر. تستخدم علامة الربط خاصية _href_ لتحديد العنصر الذي يتحكم فيه ، بينما يستخدم الزر سمة _بيانات الهدف_ لتحديد العنصر الذي يتحكم فيه.

> يمكنك عرض تجريبي للزر هنا https://www.w3schools.com/bootstrap/tryit.asp؟filename=trybs\_collapsible&stacked=h
> 
> يمكنك عرض عرض لعلامة الارتساء هنا https://www.w3schools.com/bootstrap/tryit.asp؟filename=trybs\_collapsible2&stacked=h

## مثال مع الأكورديون

 `
<div class="panel panel-default"> 
    <div class="panel-heading" role="tab" id="headingOne"> 
      <h4 class="panel-title"> 
        <a role="button" data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> 
          Collapsible Group Item #1 
        </a> 
      </h4> 
    </div> 
    <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne"> 
      <div class="panel-body"> 
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. 
      </div> 
    </div> 
  </div> 
` 

في المثال أعلاه نستخدم انهيار bootstrap لإنشاء الأكورديون. الأكورديون هو مجرد لوحة bootstrap حيث يتم عرض الرأس ويستخدم للتحكم في جسم اللوحة.

يحتوي رأس اللوحة على علامة ارتساء تستخدم للتحكم في حالة انهيار الجسم. لذا نرفق _مفتاح تبديل البيانات_ لتحديد أن هذا العنصر يستخدم في طي و _href_ لتحديد العنصر الذي يخفيه أو يكشف عنه. يمكننا أيضًا إنشاء مجموعة من اللوحات لإنشاء مجموعة لوحات قابلة للطي.

> يمكنك الاطلاع على عرض تجريبي لانهيار اللوحة هنا https://www.w3schools.com/bootstrap/tryit.asp؟filename=trybs _according_ collion & stacked = h

### عنصر المحتوى

فقرة!

 `
<p>Lorem ipsum dolar, Free Code Camp rocks... </p> 
` 

1.  إضافة class `.collapse` إلى أن الفقرة عنصر قابل للطي.
2.  إضافة `id` لجعل هذا العنصر القابل للطي قابلًا لعنصر وحدة التحكم.

 `
<p id="myParagraph" class="collapse">Lorem ipsum dolar, Free Code Camp rocks... </p> 
` 

### عنصر تحكم

الزر!

 `
<button>Click Me To See Some Magic!</button> 
` 

1.  إضافة سمة `data-toggle="collapse"` للسيطرة على عنصر قابل للطي.
2.  إضافة سمة `data-target="#id"` للإشارة إلى العنصر القابل للطي بمعرّفه.

 `
<button data-toggle="collapse" data-target="#myParagraph">Click Me To See Some Magic!</button> 
` 

## مثال

 `
<p> 
  <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> 
    Link with href 
  </a> 
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> 
    Button with data-target 
  </button> 
 </p> 
 <div class="collapse" id="collapseExample"> 
  <div class="card card-block"> 
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. 
  </div> 
 </div> 
` 

### استخدامه مع JavaScript

يتيح لك هذا المكون الإضافي استخدامه مع JavaScript حيث تحتاج فقط إلى تحديد العنصر الذي تريد طيه لتمكينه:

 `$('.collapsible-element').collapse(); 
` 

تقبل طريقة `collapse` كائنًا اختياريًا حيث يمكنك تعيين الحالة الأولية للعنصر القابل للطي. الخيارات هي:

*   `toggle` : سيتم إخفاء العنصر أو إظهاره بناءً على حالته. إذا كانت مخفية ، فسيتم عرضها ، إذا تم إظهارها ، فسيتم إخفاؤها.
*   `hide` : إخفاء العنصر.
*   `show` : يعرض العنصر.

 `$('.collapsible-element').collapse('hide'); 
` 

أيضا هناك بعض الطرق المكشوفة للربط في وظائف الانهيار:

*   `show.bs.collapse` : يتم `show.bs.collapse` فورًا عندما يتم استدعاء طريقة مثيل `show` .
*   `shown.bs.collapse` : يتم `shown.bs.collapse` عندما يكون عنصر الانهيار مرئياً للمستخدم (سوف تنتظر حتى تكتمل انتقالات CSS).
*   `hide.bs.collapse` : تم `hide.bs.collapse` فورًا عند استدعاء طريقة `hide` .
*   `hidden.bs.collapse` : تم `hidden.bs.collapse` عندما يكون عنصر الانهيار مخفيًا عن المستخدم (سينتظر اكتمال انتقالات CSS).

 `$('.collapsible-element').on('show.bs.collapse', function() { 
  // for example you want to make an AJAX call to get some data to put in the collapsible element. 
 }) 
` 

### انظر في العمل

![نص بديل](https://github.com/figengungor/Gif/blob/master/freeCodeCamp/bootstrap/collapse/collapse.gif)

#### معلومات اكثر:

[دليل Bootstrap 4 الرسمي على Collapse](https://v4-alpha.getbootstrap.com/components/collapse/)