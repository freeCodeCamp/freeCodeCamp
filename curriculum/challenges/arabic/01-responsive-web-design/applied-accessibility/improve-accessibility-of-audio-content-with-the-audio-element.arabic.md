---
id: 587d7789367417b2b2512aa4
title: Improve Accessibility of Audio Content with the audio Element
challengeType: 0
videoUrl: ''
localeTitle: تحسين إمكانية الوصول إلى المحتوى الصوتي باستخدام عنصر الصوت
---

## Description
<section id="description"> يمنح عنصر HTML5 <code>audio</code> معنىً دلاليًا عندما يلف محتوى دفق الصوت أو الصوت في الترميز. يحتاج المحتوى الصوتي أيضًا إلى بديل نصي ليكون متاحًا للأشخاص الصم أو ضعاف السمع. يمكن إجراء ذلك باستخدام نص مجاور على الصفحة أو رابط إلى نص. تدعم علامة <code>audio</code> سمة <code>controls</code> . يعرض هذا التشغيل الافتراضي للمتصفح والإيقاف المؤقت وعناصر التحكم الأخرى ، ويدعم وظيفة لوحة المفاتيح. هذه سمة منطقية ، بمعنى أنها لا تحتاج إلى قيمة ، حيث يؤدي وجودها على العلامة إلى تشغيل الإعداد. إليك مثال على ذلك:
  
```html
<audio id="meowClip" controls>
  <source src="audio/meow.mp3" type="audio/mpeg" />
  <source src="audio/meow.ogg" type="audio/ogg" />
</audio>
```

<strong>ملحوظة</strong> <br> عادةً ما يحتوي محتوى الوسائط المتعددة على مكونات مرئية وسمعية. يحتاج إلى تسميات توضيحية متزامنة وملف نصي حتى يتمكن المستخدمون الذين يعانون من إعاقات بصرية و / أو سمعية من الوصول إليه. بشكل عام ، لا يتحمل مطور الويب مسؤولية إنشاء التسميات التوضيحية أو النص ، ولكن يجب أن يعرف كيفية تضمينها. </section>

## Instructions
<section id="instructions"> حان الوقت للاستراحة من Camper Cat ومقابلة زميل Zperiax (zersiax) ، وهو بطل إمكانية الوصول ومستخدم قارئ الشاشة. للاستماع إلى مقطع قارئ الشاشة الخاص به أثناء العمل ، أضف عنصرًا <code>audio</code> بعد <code>p</code> . قم بتضمين سمة <code>controls</code> . ثم ضع علامة <code>source</code> داخل علامات <code>audio</code> مع تعيين سمة <code>src</code> إلى &quot;https://s3.amazonaws.com/freecodecamp/screen-reader.mp3&quot; <code>type</code> تعيين السمة على &quot;audio / mpeg&quot;. <strong>ملحوظة</strong> <br> قد يبدو المقطع الصوتي سريعًا ويصعب فهمه ، ولكن هذه سرعة عادية لمستخدمي قارئ الشاشة. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تحتوي شفرتك على علامة <code>audio</code> واحدة.
    testString: 'assert($("audio").length === 1, "Your code should have one <code>audio</code> tag.");'
  - text: تأكد من أن عنصر <code>audio</code> الخاص بك يحتوي على علامة إغلاق.
    testString: 'assert(code.match(/<\/audio>/g).length === 1 && code.match(/<audio.*>[\s\S]*<\/audio>/g), "Make sure your <code>audio</code> element has a closing tag.");'
  - text: يجب أن تحتوي علامة <code>audio</code> سمة <code>controls</code> .
    testString: 'assert($("audio").attr("controls"), "The <code>audio</code> tag should have the <code>controls</code> attribute.");'
  - text: يجب أن تحتوي الشفرة على علامة <code>source</code> واحدة.
    testString: 'assert($("source").length === 1, "Your code should have one <code>source</code> tag.");'
  - text: يجب أن تكون علامة <code>source</code> الخاصة بك داخل علامات <code>audio</code> .
    testString: 'assert($("audio").children("source").length === 1, "Your <code>source</code> tag should be inside the <code>audio</code> tags.");'
  - text: يجب أن تتطابق قيمة السمة <code>src</code> على العلامة <code>source</code> مع الارتباط الموجود في الإرشادات بالضبط.
    testString: 'assert($("source").attr("src") === "https://s3.amazonaws.com/freecodecamp/screen-reader.mp3", "The value for the <code>src</code> attribute on the <code>source</code> tag should match the link in the instructions exactly.");'
  - text: يجب أن تحتوي شفرتك على سمة <code>type</code> على العلامة <code>source</code> بقيمة صوت / mpeg.
    testString: 'assert($("source").attr("type") === "audio/mpeg", "Your code should include a <code>type</code> attribute on the <code>source</code> tag with a value of audio/mpeg.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Real Coding Ninjas</h1>
  </header>
  <main>
    <p>A sound clip of Zersiax's screen reader in action.</p>



  </main>
</body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
