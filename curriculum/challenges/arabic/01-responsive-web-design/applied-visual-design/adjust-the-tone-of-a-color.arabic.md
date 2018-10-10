---
id: 587d78a4367417b2b2512ad5
title: Adjust the Tone of a Color
challengeType: 0
videoUrl: ''
localeTitle: اضبط نغمة اللون
---

## Description
<section id="description"> يجعل خيار <code>hsl()</code> في CSS أيضًا من السهل ضبط نغمة اللون. خلط الأبيض مع لون نقي يخلق صبغة من هذا اللون ، وإضافة الأسود سيجعل الظل. بدلا من ذلك ، يتم إنتاج نغمة عن طريق إضافة اللون الرمادي أو كل من التلوين والتظليل. أذكر أن &#39;s&#39; و &#39;l&#39; من <code>hsl()</code> تقف للتشبع والخفة ، على التوالي. يتغير النسبة المئوية للتشبع من مقدار الرمادية ، وتحدد نسبة الإضاءة مقدار اللون الأبيض أو الأسود في اللون. يكون ذلك مفيدًا عندما يكون لديك لون أساسي يعجبك ، ولكن تحتاج إلى أشكال مختلفة منه. </section>

## Instructions
<section id="instructions"> يقوم حاليًا شريط التنقل الموجود على هذا الموقع برث <code>background-color</code> الخاص به من عنصر <code>header</code> . بدءًا من هذا اللون كقاعدة ، أضف <code>background-color</code> لعنصر <code>nav</code> بحيث يستخدم نفس اللون السماوي ، ولكنه يحتوي على 80٪ من قيم التشبع و 25٪ من الخفة لتغيير النغمة والظل. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يحتوي عنصر <code>nav</code> على <code>background-color</code> لهجة السماوي المعدلة باستخدام الخاصية <code>hsl()</code> .
    testString: 'assert(code.match(/nav\s*?{\s*?background-color:\s*?hsl\(180,\s*?80%,\s*?25%\)/gi), "The <code>nav</code> element should have a <code>background-color</code> of the adjusted cyan tone using the <code>hsl()</code> property.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  header {
    background-color: hsl(180, 90%, 35%);
    color: #FFFFFF;
  }

  nav {

  }

  h1 {
    text-indent: 10px;
    padding-top: 10px;
  }

  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }

  nav li {
    display: inline;
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>

<header>
  <h1>Cooking with FCC!</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Classes</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
