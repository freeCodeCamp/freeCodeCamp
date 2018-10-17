---
title: Factorialize a Number
localeTitle: Factorialize عدد
---
![العودية](//discourse-user-assets.s3.amazonaws.com/original/2X/d/dcf927a2e8c3beb7a9c28770153821982398bd99.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

## ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

عودة المضروب من عدد صحيح المقدمة. إذا تم تمثيل العدد الصحيح بالحرف n ، فإن العامل الحاسوبي هو نتاج جميع الأعداد الصحيحة الموجبة أقل من أو يساوي n.

غالبًا ما يتم تمثيل العوامل بعبارة الاختزال n!

على سبيل المثال: `5! = 1 * 2 * 3 * 4 * 5 = 120`

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

هذا واحد يبدأ بسهولة منذ `0! = 1` ، حتى تتمكن من المضي قدما `return 1` ببساطة `return 1` هناك.

يمكننا استخدام ذلك باعتباره `if` من أجل كسر حلقة نحن في طريقنا لإنشاء باستخدام **وظيفة متكررة.** وسوف يتحقق ما إذا كان الرقم الذي أعطيته للدالة هو 0 (والذي سيكون نهاية السلسلة العصبية الخاصة بك). وظائف "نهاية" عندما يعودون أي شيء. في الواقع ، سيتم إرجاع **كافة** الدالات بدون بيان `return` صريح `undefined` .

هذا هو السبب أيضا **بدلا** من _"الانتهاء"_ ، ويقال دائما وظيفة _"قد عاد"_ . والآن هذا ...

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

**فهم العودية**

يشير التكرار إلى وظيفة مكررة (استدعاء) نفسها. في هذه الحالة نحن يعودون أساسا عدد معين (أي 5)، مضروبا في وظيفة في حد ذاته ولكن هذه المرة القيمة التي تم تمريرها إلى المعلمة _الأسطوانات_ هي `num-1` (والذي يترجم في البداية إلى 4). المهمة **نفسها** سوف **تعمل داخل نفسها** مثيرة للاهتمام ، إيه؟

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

**فهم التدفق**

يمكن تصور القيمة **المرتجعة** الأولى بشكل أفضل إذا فكرت في عمليات تلك الأقواس التي قمت بها في المدرسة الثانوية حيث تقوم بالرياضيات داخل كل قوس من الداخل إلى الخارج ، ومن قوس إلى قوس مربع حتى تحصل على نتيجة نهائية (إجمالي). هذه المرة هو نفس الشيء ، انظر إلى تدفق البرنامج:

### خلال أول تنفيذ للوظيفة:

\[عدد **الأسطوانات** = 5\]

هل _يساوي_ 5 إلى 1 أو 0؟ **لا** ---> أوكي دوكي ، دعونا نستمر ...

**عائدات:**

( **5** _(_ second execution\_: **4** \_ ( _third execution_ : **3** _(_ fourth execution\_: **2** \_ _fifth execution_ : **1** ))))

يمكن إرجاع ما يتم إرجاعه كـ `(5*(4*(3*(2*1))))` أو فقط `5 * 4 * 3 * 2 * 1` ، وستقوم الدالة بإرجاع نتيجة تلك العملية: `120` . الآن ، لنفحص ما تفعله بقية عمليات الإعدام:

### خلال بقية عمليات الإعدام:

**التنفيذ الثاني** : _num_ = 5-1 = **4** -> is _num_ 0 or 1؟ لا

\-> العودة تكاثر بين 4 و النتيجة التالية عندما _الأسطوانات_ الآن 4-1.

**التنفيذ الثالث** : _num_ = 4 - 1 = **3** -> is _num_ 0 or 1؟ لا

\-> العودة تكاثر بين 3 و النتيجة التالية عندما _الأسطوانات_ الآن 3-1.

**التنفيذ الرابع** : _num_ = 3-1 = **2** -> is _num_ 0 or 1؟ لا

\-> العودة تكاثر بين 2 و النتيجة التالية عندما _الأسطوانات_ الآن 2-1.

**التنفيذ الخامس** : _num_ = 2-1 = **1** -> is _num_ 0 or 1؟ موافق

\-> العودة **1** . وهذا هو المكان الذي يتوقف فيه العودية لعدم وجود المزيد من عمليات الإعدام.

فهمتك؟ ![:wink:](https://forum.freecodecamp.com/images/emoji/emoji_one/wink.png?v=3 ":غمزة:")

> _حاول أن تحل المشكلة الآن_

#### روابط ذات صلة

*   [وظائف JS](https://www.youtube.com/watch?v=R8SjM4DKK80)
*   [التكرار في شبيبة](https://www.youtube.com/watch?v=k7-N8R0-KY4)

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") حل الرمز:

 `function factorialize(num) { 
  if (num === 0) { return 1; } 
  return num * factorialize(num-1); 
 } 
 
 factorialize(5); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLjU/1)

## شرح الشفرة:

لاحظ في السطر الأول لدينا حالة المحطة ، أي شرط للتحقق من نهاية العودية. إذا كان `num == 0` ، فإننا نرجع 1 ، أي أن ننتهي بشكل فعال العودية ونبلغ المكدس لنشر هذه القيمة إلى المستويات العليا. إذا لم يكن لدينا هذا الشرط ، فستستمر عملية العودية حتى يتم استهلاك مساحة التكديس ، مما يؤدي إلى [تجاوز سعة المكدس](https://en.wikipedia.org/wiki/Stack_overflow) .

### روابط ذات صلة

*   [العودية](https://www.codecademy.com/en/courses/javascript-lesson-205/0/1)
*   [Factorialization](https://en.wikipedia.org/wiki/Factorial)
*   [العوامل الحسابية](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.