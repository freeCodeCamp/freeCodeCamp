---
id: 587d778b367417b2b2512aa7
title: Wrap Radio Buttons in a fieldset Element for Better Accessibility
challengeType: 0
videoUrl: ''
localeTitle: التفاف أزرار الراديو في fieldset عنصر من أجل سهولة الوصول
---

## Description
<section id="description"> يغطي موضوع النموذج التالي إمكانية الوصول إلى أزرار الاختيار. يتم منح كل خيار على <code>label</code> مع <code>for</code> سمة ربط إلى <code>id</code> من البند المقابل كما غطت في التحدي الماضي. نظرًا لأن الأزرار اللاسلكية غالبًا ما تأتي في مجموعة حيث يجب على المستخدم اختيار واحد ، فهناك طريقة لعرض الخيارات بشكل دلالي وهي جزء من مجموعة. و <code>fieldset</code> العلامة يحيط تجمع بأكمله من أزرار لتحقيق ذلك. وغالبا ما يستخدم <code>legend</code> كلمة دلالية لتقديم وصف للتجمع، وهو يقرأ من قبل القراء الشاشة لكل خيار في <code>fieldset</code> العنصر. لا تعتبر <code>fieldset</code> وعلامة وسيلة <code>legend</code> ضرورية عندما تكون الاختيارات لا تحتاج إلى شرح ، مثل اختيار النوع. باستخدام <code>label</code> مع <code>for</code> سمة لكل زر الراديو غير كافية. إليك مثال على ذلك: <blockquote style=";text-align:right;direction:rtl"> &lt;form&gt; <br> &lt;مجموعة حقول&gt; <br> &lt;legend&gt; اختر أحد العناصر الثلاثة التالية: &lt;/ legend&gt; <br> &lt;input id = &quot;one&quot; type = &quot;radio&quot; name = &quot;items&quot; value = &quot;one&quot;&gt; <br> &lt;label for = &quot;one&quot;&gt; الاختيار الأول &lt;/ label&gt; &lt;br&gt; <br> &lt;input id = &quot;two&quot; type = &quot;radio&quot; name = &quot;items&quot; value = &quot;two&quot;&gt; <br> &lt;label for = &quot;two&quot;&gt; الاختيار الثاني &lt;/ label&gt; &lt;br&gt; <br> &lt;input id = &quot;three&quot; type = &quot;radio&quot; name = &quot;items&quot; value = &quot;three&quot;&gt; <br> &lt;label for = &quot;three&quot;&gt; الاختيار الثالث &lt;/ label&gt; <br> &lt;/ مجموعة حقول&gt; <br> &lt;/ form&gt; <br></blockquote></section>

## Instructions
<section id="instructions"> يريد Camper Cat معلومات حول مستوى النينجا من مستخدميه عند الاشتراك في قائمة البريد الإلكتروني الخاصة به. وأضاف انه مجموعة من أزرار الراديو، وتعلمت من الدرس الأخير جهدنا لاستخدام علامات التسمية مع <code>for</code> سمات كل خيار. الذهاب القطة قطة! ومع ذلك ، لا يزال رمزه بحاجة إلى بعض المساعدة. قم بتغيير علامة <code>div</code> المحيطة بأزرار <code>fieldset</code> علامة نطاق المجال ، وقم بتغيير علامة <code>p</code> بداخله إلى وسيلة <code>legend</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تحتوي شفرتك على علامة نطاق <code>fieldset</code> حول مجموعة أزرار التحديد.
    testString: 'assert($("fieldset").length == 1, "Your code should have a <code>fieldset</code> tag around the radio button set.");'
  - text: تأكد لديك <code>fieldset</code> عنصر له علامة إغلاق.
    testString: 'assert(code.match(/<\/fieldset>/g) && code.match(/<\/fieldset>/g).length === code.match(/<fieldset>/g).length, "Make sure your <code>fieldset</code> element has a closing tag.");'
  - text: يجب أن تحتوي الشفرة على علامة <code>legend</code> حول النص تسأل عن مستوى النينجا المستخدم.
    testString: 'assert($("legend").length == 1, "Your code should have a <code>legend</code> tag around the text asking what level ninja a user is.");'
  - text: يجب ألا تحتوي شفرتك على أي علامات <code>div</code> .
    testString: 'assert($("div").length == 0, "Your code should not have any <code>div</code> tags.");'
  - text: يجب ألا تحتوي شفرتك على علامة <code>p</code> حول النص تسأل عن مستوى النينجا المستخدم.
    testString: 'assert($("p").length == 4, "Your code should no longer have a <code>p</code> tag around the text asking what level ninja a user is.");'

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
      <label for="email">Email:</label>
      <input type="text" id="email" name="email">


      <!-- Add your code below this line -->
      <div>
        <p>What level ninja are you?</p>
        <input id="newbie" type="radio" name="levels" value="newbie">
        <label for="newbie">Newbie Kitten</label><br>
        <input id="intermediate" type="radio" name="levels" value="intermediate">
        <label for="intermediate">Developing Student</label><br>
        <input id="master" type="radio" name="levels" value="master">
        <label for="master">Master</label>
      </div>
      <!-- Add your code above this line -->


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
