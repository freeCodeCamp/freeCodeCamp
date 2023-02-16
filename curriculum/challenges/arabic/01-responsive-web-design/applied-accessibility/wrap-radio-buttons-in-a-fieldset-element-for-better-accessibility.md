---
id: 587d778b367417b2b2512aa7
title: تغليف Radio Buttons داخل fieldset لتحسينا لإمكانيه الوصول
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJVefw'
forumTopicId: 301030
dashedName: wrap-radio-buttons-in-a-fieldset-element-for-better-accessibility
---

# --description--

يغطي الموضوع التالي إمكانية الوصول إلى أزرار الاختيار في النموذج. كل اختيار يعطى `label` وله سمة `for` مرتبطة بـسمة `id` في العنصر المقابل, كما هو مشمول في التحدي الأخير. نظرًا لأن أزرار الراديو (radio buttons) غالبا ما تأتي في مجموعات حيث يجب على المستخدم أن يختار زر واحد فقط من المجموعة، هناك طريقة لإظهار الخيارات بشكل لُغَوي أنها فعلا جزء من نفس المجموعة.

يحيط علامة (tag) `fieldset` بكامل مجموعة الأزرار الراديو ( radio buttons) لتحقيق ذلك. غالبا ما تستخدم علامة (tag) `legend` لتقديم وصف للمجموعة، أي قارئ الشاشة (screen readers) سيقرأ كل اختيار في عنصر `fieldset`.

العلامة `fieldset` و `legend` ليست ضرورية عندما تكون الاختيارات غنية عن التفسير، مثل اختيار نوع الجنس. استخدام `label` مع سمة `for` لكل زر راديو هو كاف.

إليك مثال:

```html
<form>
  <fieldset>
    <legend>Choose one of these three items:</legend>
    <input id="one" type="radio" name="items" value="one">
    <label for="one">Choice One</label><br>
    <input id="two" type="radio" name="items" value="two">
    <label for="two">Choice Two</label><br>
    <input id="three" type="radio" name="items" value="three">
    <label for="three">Choice Three</label>
  </fieldset>
</form>
```

# --instructions--

يريد Camper Cat معلومات عن مستوى النينجا لمستخدميه عند تسجيلهم لقائمة بريده الإلكتروني. لقد أضاف مجموعة من أزرار الراديو وتعلمنا من درسنا الأخير استخدام علامات `label` مع سمات `for` لكل اختيار. اذهب يا Camper Cat! However, his code still needs some help. تغيير علامة `div` الذي يحيط بأزرار الراديو إلى علامة `fieldset`، و قم بتغيير علامة `p` بداخلها إلى `legend`.

# --hints--

يجب أن يكون الكود الخاص بك فيه علامة `fieldset` حول مجموعة أزرار الراديو.

```js
assert($('fieldset').length == 1);
```

يجب أن يكون لعلامة `fieldset` علامة اغلاق أيضا.

```js
assert(
  code.match(/<\/fieldset>/g) &&
    code.match(/<\/fieldset>/g).length === code.match(/<fieldset>/g).length
);
```

يجب أن يحتوي الكود الخاصة بك على علامة `legend` حول النص الذي يسأل عن مستوى النينجا للمستخدم.

```js
assert($('legend').length == 1);
```

يجب ألا يحتوي الكود الخاص بك على أي علامة `div`.

```js
assert($('div').length == 0);
```

يجب ألا يحتوي الكود الخاصة بك على علامة `p` حول النص الذي يسأل عن مستوى النينجا للمستخدم.

```js
assert($('p').length == 4);
```

# --seed--

## --seed-contents--

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


      <!-- Only change code below this line -->
      <div>
        <p>What level ninja are you?</p>
        <input id="newbie" type="radio" name="levels" value="newbie">
        <label for="newbie">Newbie Kitten</label><br>
        <input id="intermediate" type="radio" name="levels" value="intermediate">
        <label for="intermediate">Developing Student</label><br>
        <input id="master" type="radio" name="levels" value="master">
        <label for="master">Master</label>
      </div>
      <!-- Only change code above this line -->


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
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence that anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

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

      <fieldset>
        <legend>What level ninja are you?</legend>
        <input id="newbie" type="radio" name="levels" value="newbie">
        <label for="newbie">Newbie Kitten</label><br>
        <input id="intermediate" type="radio" name="levels" value="intermediate">
        <label for="intermediate">Developing Student</label><br>
        <input id="master" type="radio" name="levels" value="master">
        <label for="master">Master</label>
      </fieldset>

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
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence that anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
