# كيفية المساعدة في مواجهة تحديات الفيديو

تحديات الفيديو هي نوع جديد من التحديات في منهج FreCodeCamp.

تحدي الفيديو هو جزء صغير من دورة فيديو كاملة عن موضوع معين. صفحة تحدي الفيديو تتضمن فيديو يوتيوب. ولكل صفحة تحدٍ سؤال واحد متعدد الخيارات يتصل بالفيديو. يجب على المستخدم أن يجيب على السؤال بشكل صحيح قبل الانتقال إلى تحدي الفيديو التالي في الدورة.

يتم إنشاء صفحات تحدي الفيديو من قبل أعضاء فريق FreCodeCamp. يتم تحميل مقاطع فيديو اليوتيوب أيضًا من قبل أعضاء فريق FreCodeCamp. والعديد من التحديات التي تواجه الفيديو ليست لها حتى الآن أسئلة مرتبطة بها.

يمكنك المساعدة عن طريق إنشاء أسئلة متعددة الخيارات ذات الصلة بأقسام الفيديو وإضافة الأسئلة إلى ملفات markdown لتحديات الفيديو.


## قالب التحدي

فيما يلي نموذج لما تبدو عليه ملفات الـ markdown للتحدي.

````md
---
المعرف: معرف فريد (أبجدي رقمي, MongoDB_id)
العنوان: عنوان التحدي
نوع التحدي: 11
معرف الفيديو: 'YouTube videoID لتحدي الفيديو'
---

## # وصف

<section id='description'>
وصف اختياري مع معلومات مفيدة ذات صلة بالفيديو.
</section>

## الإختبارات

<section id='tests'>

'سؤال 'ml
:
  نص: 'سؤال'
  إجابات:
    - 'الإجابة واحدة'
    - 'الإجابة الثانية'
    - 'الإجابة ثلاثية'
  الحلول: 3
````

</section>
````

## Creating questions for video challenges

### Access the video challenge markdown files

You can find the markdown files for video challenges at the following locations in the curriculum:

- [Data Analysis with Python Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/08-data-analysis-with-python/data-analysis-with-python-course)
- [TensorFlow 2.0 Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/11-machine-learning-with-python/tensorflow)
- [Numpy Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/08-data-analysis-with-python/numpy)
- [How Neural Networks Work Course](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/11-machine-learning-with-python/how-neural-networks-work)

Pick a challenge markdown file from the options above.

### السحابة عبر الفيديو المقترن بالتحدي وإنشاء سؤال اختياري مميز

أولا، ابحث عن معرف الفيديو.

على سبيل المثال، في التعليمة البرمجية التالية من رأس ملف تحدي الفيديو markdown، الفيديو هو "nVAaxZ34k". وينبغي عرض المعلومات في شكل جدول على موقع GitHub.
````
---
معرف: 5e9a093a74c4063ca6f7c14d title: Data Analysis example A ChallengeTpe: 11
videoId: nVAaxZ34khk
---
```

بعد ذلك، الوصول إلى فيديو اليوتيوب باستخدام ذلك المعرف الفيديو. عنوان URL للفيديو سيكون هو:
https://www.youtube. om/watch?v=[videoId]    (إضافة الفيديو إلى عنوان URL بدون أقواس معقوفة)

في المثال أعلاه، عنوان URL هو https://www. outube.com/watch?v=nVAaxZ34khk

سمع فيديو يوتيوب مع معرف الفيديو هذا وفكر في سؤال متعدد الخيارات يستند إلى محتوى الفيديو.

### اضافة السؤال الى ملف markdown

يمكنك اضافة السؤال محليا او مباشرة الى واجهة GitHub ### اضافة السؤال الى ملف markdown

يمكنك اضافة السؤال محليا او مباشرة الى واجهة GitHub لإضافة السؤال محلياً، تحتاج إلى [إعداد freeCodeCamp محلياً](howto-setup-freecodecamp-locally.md). يمكنك أيضًا العثور على الملف على GitHub والنقر على زر التحرير لإضافة السؤال في المتصفح الخاص بك.

إذا لم يكن السؤال قد أضيف بعد إلى تحدي فيديو معين، سيكون لديه السؤال الافتراضي التالي:

```ml
سؤال:
  نص: <unk>
    سؤال
  إجابات:
    - <unk>
      واحد
    - <unk>
      إثنان
    - <unk>
      ثلاثة
  حلول: 3
```

قم بتحديث كلمة ”سؤال“ بسؤالك. • تحديث "واحد" و"اثنين" و"ثلاثة" مع الإجابات الممكنة. تأكد من تحديث رقم الحل الذي يكون إجابته صحيحاً. يمكنك إضافة المزيد من الإجابات الممكنة باستخدام نفس التنسيق. ويمكن أن تكون علامات الاقتباس محاطة بالسؤال والإجابات.

#### استخدم markdown لتنسيق سؤالك

أما النص الوارد في السؤال فيتم الرجوع إليه كعلامة مأخوذة من الأسفل. أبسط طريقة لضمان تنسيقه بشكل صحيح هي بدء السؤال بنص `: <unk>`، مثل هذا:

```yml
سؤال:
  نص: <unk>
    سؤال
```

ثم تحتاج إلى التأكد من أن سؤالك موجود على سطر جديد وذو مستوى واحد أكثر من `نص: <unk>`.

ويمكن استخدام نفس النهج للإجابات، بحيث يصبح السؤال بأكمله

```yml
سؤال:
  نص: <unk>
    سؤال
  إجابات:
  - <unk>
    الإجابة الأولى
  - <unk>
    ثانية
  - <unk>
    الحل الثالث
  : 2
```

تأكد من أن كل إجابة معقولة ولكن هناك إجابة صحيحة واحدة فقط.

#### استخدام HTML

يمكن أن تحتوي الأسئلة والإجابات على بعض علامات HTML مثل `<br>` لسطر جديد. وينبغي استخدام وسوم HTML بشكل ضئيل، عندما لا يمكن التعبير عن الأسئلة بدونها.

### أمثلة على الأسئلة

#### أمثلة بدون HTML

````yml
سؤال:
  نص: <unk>
    ماذا يسجل رمز جافا سكريبت هذا إلى وحدة التحكم؟
    ```js
    console.log('hello world')؛
    ````


    اختر إجابة!
  الإجابات:
    - مرحبا *العالم*
    - **مرحبا** العالم
    - مرحبا بالعالم حل: 3
````

````yml
سؤال:
  نص: <unk>
    ما الذي سيطبع بعد تشغيل هذا الكود:
    ```py
    العرض = 15
    ارتفاع = 12. الطباعة (ارتفاع/3)
    ````
  الإجابات:
    - | 39
    - | 4
    - 4.0
    - 5.0
    - 5 حل: 3
````

#### مثال مع HTML

```ml
سؤال:
  نص: <unk>
    ما الذي سيطبع بعد تشغيل هذا الرمز:
    <pre><code>عرض = 15<br>ارتفاع = 12.<br>الطباعة (ارتفاع/3)<code></pre>
  إجابات:
    - <unk>
      39
    - <unk>
      4
    - <unk>
      4.
````

ويدل المثال الأخير على أنه يمكن استخدام HTML، ولكنه ليس مقروءاً كالإصدار بدونه.

لمزيد من الأمثلة، يمكنك النظر إلى ملفات markdown للدورة التالية للفيديو. جميع التحديات لديها بالفعل أسئلة: [بايثون لكل شخص دورة](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges/english/07-scientific-computing-with-python/python-for-everybody)

## فتح طلب سحب

بعد إنشاء سؤال واحد أو أكثر، يمكنك إدخال تغييرات على فرع جديد و [فتح طلب سحب](how-to-open-a-pull-request.md).
