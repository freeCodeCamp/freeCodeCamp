---
id: 587d778a367417b2b2512aa6
title: Improve Form Field Accessibility with the label Element
challengeType: 0
videoUrl: ''
localeTitle: تحسين إمكانية الوصول إلى حقل النموذج باستخدام عنصر التسمية
---

## Description
<section id="description"> ينطبق تحسين إمكانية الوصول باستخدام ترميز HTML الدلالية على استخدام كلٍّ من أسماء العلامات المناسبة وكذلك السمات. تغطي التحديات العديدة التالية بعض السيناريوهات المهمة التي تستخدم سمات في النماذج. تقوم علامة <code>label</code> بلف النص لعنصر تحكم محدد في النموذج ، وعادة ما يكون الاسم أو الملصق الخاص باختيار ما. هذا يربط معنى لهذا البند ويجعل الشكل أكثر قابلية للقراءة. و <code>for</code> السمة على <code>label</code> العلامة الزميلة صراحة على أن <code>label</code> مع عنصر تحكم النموذج ويستخدم من قبل قارئات الشاشة. لقد تعلمت عن أزرار الاختيار وتصنيفاتها في درس في قسم HTML الأساسي. في هذا الدرس ، قمنا بلف عنصر إدخال زر الراديو داخل عنصر <code>label</code> إلى جانب نص التسمية لجعل النص قابلاً للنقر. وهناك طريقة أخرى لتحقيق ذلك هي عن طريق استخدام <code>for</code> السمة كما هو موضح في هذا الدرس. يجب أن تكون قيمة السمة هي نفس قيمة السمة <code>id</code> <code>for</code> تحكم النموذج. إليك مثال على ذلك: <blockquote style=";text-align:right;direction:rtl"> &lt;form&gt; <br> &lt;label for = &quot;name&quot;&gt; الاسم: &lt;/ label&gt; <br> &lt;input type = &quot;text&quot; id = &quot;name&quot; name = &quot;name&quot;&gt; <br> &lt;/ form&gt; <br></blockquote></section>

## Instructions
<section id="instructions"> يتوقع كامبر كات اهتمامًا كبيرًا بمشاركاته المدروسة ، ويريد تضمين نموذج اشتراك بالبريد الإلكتروني. إضافة <code>for</code> السمة على البريد الإلكتروني <code>label</code> يطابق <code>id</code> عن دورتها <code>input</code> المجال. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون التعليمات البرمجية ل <code>for</code> السمة على <code>label</code> العلامة التي ليس فارغا.
    testString: 'assert($("label").attr("for"), "Your code should have a <code>for</code> attribute on the <code>label</code> tag that is not empty.");'
  - text: يجب أن تتوافق قيمة السمة <code>for</code> بك <code>for</code> قيمة <code>id</code> في <code>input</code> البريد الإلكتروني.
    testString: 'assert($("label").attr("for") == "email", "Your <code>for</code> attribute value should match the <code>id</code> value on the email <code>input</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <section>
    <form>
      <p>Sign up to receive Camper Cat's blog posts by email here!</p>


      <label>Email:</label>
      <input type="text" id="email" name="email">


      <input type="submit" name="submit" value="Submit">
    </form>
  </section>
  <article>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>
  <img src="samuraiSwords.jpeg" alt="">
  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
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
