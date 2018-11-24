---
title: Bootstrap
localeTitle: التمهيد
---
## التمهيد

Bootstrap هو إطار أمامي شهير لتطوير الويب. يحتوي على مكونات سابقة التصميم وعناصر تصميم لمحتوى محتوى HTML. المتصفحات الحديثة مثل Chrome و Firefox و Opera و Safari و Internet Explorer تدعم Bootstrap.

يتضمن Bootstrap نظام شبكة استجابة لتنسيقات متفاوتة. إنها نقطة انطلاق رائعة لإنشاء موقع ويب ملائم للجوّال. كما يتضمن أيضًا وظائف JavaScript اختيارية ، مثل المحتوى القابل للطي ، والعناقيد الدوارة ، والموديلات.

#### تاريخ النسخة

قام تويتر في الأصل بتطوير إطار Bootstrap كأداة داخلية. أصدروا ذلك كمشروع مفتوح المصدر في أغسطس من عام 2011.

تم إصدار Bootstrap 2 في يناير 2012. إحدى الميزات الأساسية كانت تقديم نظام شبكة استجابة 12 عمودًا. ظهر Bootstrap 3 في شهر أغسطس من عام 2013 ، حيث تحول إلى تصميم مستوٍ ونهج متحرك أولاً. يتوفر Bootstrap 4 في الإصدار التجريبي اعتبارًا من آب 2017 ، ويشمل الآن Sass و Flexbox.

كان Bootstrap 4 قيد التطوير لمدة عامين قبل إصدار بعض الإصدارات التجريبية خلال عام 2017 ، في حين أن الإصدار الثابت الأول كان في يناير عام 2018. بعض التغييرات البارزة تشمل:

*   انتقلت من أقل إلى ساس.
*   انتقل إلى Flexbox ونظام الشبكة المحسنة ؛
*   البطاقات المضافة (استبدال الآبار ، الصور المصغرة ، واللوحات) ؛
*   وأكثر بكثير!

في وقت الكتابة ، الإصدار الأخير لـ Bootstrap هو \[4.1.3\] (http://blog.getbootstrap.com/2018/07/24/bootstrap-4-1-3/ ). إذا كنت ترغب في مواكبة أي أخبار للإعلانات ، فاتبعها [هنا](http://blog.getbootstrap.com/) .

#### التركيب

هناك خياران رئيسيان لإضافة Bootstrap إلى مشروع الويب الخاص بك. يمكنك الربط بمصادر متاحة للجمهور ، أو تنزيل إطار العمل مباشرة.

##### الربط بمصدر آخر

يمكنك إضافة Bootstrap CSS عن طريق استخدام عنصر `<link>` داخل `<head>` لصفحة الويب الخاصة بك التي تشير إلى شبكة تسليم المحتوى (CDN):

`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">`

تشبه إضافة عناصر JavaScript الخاصة بـ Bootstrap عناصر `<script>` الموضوعة عادة في الجزء السفلي من ' "العلامة. قد تحتاج إلى تضمين بعض التبعيات أولاً. انتبه بشكل خاص للترتيب المدرج:

 `
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> 
 <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script> 
 <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script> 
` 

_ملاحظة: هذه أمثلة فقط وقد تتغير دون إشعار. يرجى الرجوع إلى CDN للوصلات الحالية لتضمينها في مشروعك._

##### تحميل ملف التثبيت

يمكنك تنزيل وتثبيت الملفات المصدر Bootstrap مع Bower أو Composer أو Meteor أو npm. هذا يسمح بمزيد من التحكم وخيار لتضمين أو استبعاد وحدات حسب الحاجة.

`npm install bootstrap`

`gem 'bootstrap', '~> 4.1.3'`

\_Note: هذه أمثلة فقط وقد تتغير دون إشعار. يرجى الرجوع إلى \_ [Bootstrap website](https://getbootstrap.com/) \_ للحصول على أحدث الروابط .\_

#### نظام Bootstrap الشبكة

نظام الشبكة هو نظام مرن متحرك أول لسرعة بناء مخططات من جميع الأشكال والأحجام المناسبة على جميع الأجهزة. تعتمد على تخطيط 12 عمودًا وتحتوي على طبقات متعددة ، واحدة لكل نطاق من نطاقات استعلام الوسائط.

يأتي Bootstrap مع فئات الشبكة المحددة مسبقًا لاستخدامك في الترميز. شاهد المزيد من التفاصيل والأمثلة على https://getbootstrap.com/docs/4.1/layout/grid/

### ميزات Boostrap

*   يدعم Bootstrap 3 أحدث الإصدارات من Google Chrome و Firefox و Internet Explorer و Opera و Safari (باستثناء Windows). بالإضافة إلى ذلك يدعم العودة إلى IE8 وأحدث إصدار دعم تمديد فَيَرفُكس (ESR). \[12\]
    
*   منذ 2.0 ، يدعم Bootstrap تصميم الويب سريع الاستجابة. هذا يعني أن تخطيط صفحات الويب يضبط بشكل ديناميكي ، مع الأخذ في الاعتبار خصائص الجهاز المستخدم (سطح المكتب ، الكمبيوتر اللوحي ، الهاتف المحمول).
    
*   بدءًا من الإصدار 3.0 ، اعتمدت Bootstrap فلسفة التصميم المتنقلة الأولى ، مع التركيز على التصميم سريع الاستجابة بشكل افتراضي.
    
*   وأضاف الإصدار 4.0 دعم ساس و flexbox
    

#### معلومات اكثر:

يحتوي Bootstrap على توثيق شامل مع العديد من [الأمثلة](https://getbootstrap.com/docs/4.0/examples/) [ونموذج HTML للبدء](https://getbootstrap.com/docs/4.0/getting-started/introduction/) (يحتوي هذا القالب على برنامج نصي فقط ؛ ولا يحتوي على إعداد نظام الشبكة إذا كان هذا هو ما تبحث عنه).

بالإضافة إلى ذلك ، يمكنك العثور على كل من [الحرة](https://bootswatch.com/) [والمدفوعة](https://themes.getbootstrap.com/) موضوعات تعتمد على إطار Bootstrap لتوفير مظهر أكثر تخصيصًا وأنيقًا.

#### موارد Bootstrap:

[مدونة Bootstrap الرسمية](http://blog.getbootstrap.com/) [إلهام موقع Bootstrap](http://expo.getbootstrap.com/) [عرض المواقع التي تم إنشاؤها باستخدام Bootstrap](http://builtwithbootstrap.com/) [HTML linter للمشاريع التي تستخدم Bootstrap](https://github.com/twbs/bootlint) [عناصر التصميم ومقتطفات الشفرة الخاصة بـ Bootstrap](https://bootsnipp.com/) [الرمز والموضوع والموارد الإضافية لبرنامج Bootstrap](http://expo.getbootstrap.com/resources/)