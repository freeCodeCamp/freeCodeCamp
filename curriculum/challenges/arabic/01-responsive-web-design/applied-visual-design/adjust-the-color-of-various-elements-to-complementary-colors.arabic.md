---
id: 587d78a4367417b2b2512ad3
title: Adjust the Color of Various Elements to Complementary Colors
challengeType: 0
videoUrl: ''
localeTitle: اضبط لون العناصر المختلفة على الألوان التكميلية
---

## Description
<section id="description"> أظهر اختبار الألوان التكميلية أن الألوان المعاكسة على عجلة الألوان يمكن أن تجعل بعضها تبدو أكثر حيوية عندما توضع جنباً إلى جنب. ومع ذلك ، فإن التناقض البصري القوي يمكن أن يكون مزعجًا إذا تم استخدامه بشكل مفرط على موقع ويب ، ويمكن أن يجعل النص أصعب في بعض الأحيان للقراءة إذا وضع على خلفية ملونة مكملة. من الناحية العملية ، عادةً ما يكون أحد الألوان هو المسيطر ويتم استخدام المكمل لإضفاء الاهتمام البصري على محتوى معين على الصفحة. </section>

## Instructions
<section id="instructions"> ستستخدم هذه الصفحة ظلًا من اللون <code>#09A7A1</code> ( <code>#09A7A1</code> ) <code>#09A7A1</code> المهيمن ، ويكمل اللون البرتقالي ( <code>#FF790E</code> ) لتسليط الضوء على أزرار التسجيل. تغيير <code>background-color</code> كل من <code>header</code> <code>footer</code> من الأسود إلى لون مخضر. ثم قم بتغيير <code>color</code> نص <code>h2</code> إلى البط البري كذلك. أخيرا ، قم بتغيير <code>background-color</code> <code>button</code> إلى اللون البرتقالي. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'يجب أن يكون لعنصر <code>header</code> <code>background-color</code> # 09A7A1.'
    testString: 'assert($("header").css("background-color") == "rgb(9, 167, 161)", "The <code>header</code> element should have a <code>background-color</code> of #09A7A1.");'
  - text: 'يجب أن يكون لعنصر <code>footer</code> <code>background-color</code> # 09A7A1.'
    testString: 'assert($("footer").css("background-color") == "rgb(9, 167, 161)", "The <code>footer</code> element should have a <code>background-color</code> of #09A7A1.");'
  - text: 'يجب أن يكون لعنصر <code>h2</code> <code>color</code> # 09A7A1.'
    testString: 'assert($("h2").css("color") == "rgb(9, 167, 161)", "The <code>h2</code> element should have a <code>color</code> of #09A7A1.");'
  - text: 'يجب أن يكون عنصر <code>button</code> <code>background-color</code> # FF790E.'
    testString: 'assert($("button").css("background-color") == "rgb(255, 121, 14)", "The <code>button</code> element should have a <code>background-color</code> of #FF790E.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: white;
  }
  header {
    background-color: black;
    color: white;
    padding: 0.25em;
  }
  h2 {
    color: black;
  }
  button {
    background-color: white;
  }
  footer {
    background-color: black;
    color: white;
    padding: 0.5em;
  }
</style>
<header>
  <h1>Cooking with FCC!</h1>
</header>
<main>
  <article>
    <h2>Machine Learning in the Kitchen</h2>
    <p>Join this two day workshop that walks through how to implement cutting-edge snack-getting algorithms with a command line interface. Coding usually involves writing exact instructions, but sometimes you need your computer to execute flexible commands, like <code>fetch Pringles</code>.</p>
    <button>Sign Up</button>
  </article>
  <article>
    <h2>Bisection Vegetable Chopping</h2>
    <p>This week-long retreat will level-up your coding ninja skills to actual ninja skills. No longer is the humble bisection search limited to sorted arrays or coding interview questions, applying its concepts in the kitchen will have you chopping carrots in O(log n) time before you know it.</p>
    <button>Sign Up</button>
  </article>
</main>
<br>
<footer>&copy; 2018 FCC Kitchen</footer>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
