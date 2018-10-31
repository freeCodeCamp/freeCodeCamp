---
id: 587d781e367417b2b2512acc
title: Lock an Element to the Browser Window with Fixed Positioning
challengeType: 0
videoUrl: ''
localeTitle: قفل عنصر إلى نافذة المتصفح مع تحديد المواقع الثابتة
---

## Description
<section id="description"> مخطط التخطيط التالي الذي يقدمه CSS هو موضع <code>fixed</code> ، وهو نوع من الموضع المطلق الذي يقوم بتأمين عنصر يتعلق بإطار المستعرض. مماثلة للموضع المطلق ، يتم استخدامه مع خصائص إزاحة CSS ويزيل العنصر أيضًا من التدفق العادي للمستند. عناصر أخرى لم تعد &quot;تدرك&quot; حيث يتم وضعها ، والتي قد تتطلب بعض التعديلات تخطيط في مكان آخر. يتمثل أحد الاختلافات الرئيسية بين المواضع <code>fixed</code> <code>absolute</code> عدم تحرك عنصر ذي موضع ثابت عند تمرير المستخدم. </section>

## Instructions
<section id="instructions"> يتم تمييز شريط التنقل في الشفرة بمعرف <code>navbar</code> . غيّر <code>position</code> ليتم <code>fixed</code> وإزاحته بمقدار 0 بكسل من <code>top</code> و 0 بكسل من <code>left</code> . لاحظ (عدم) التأثير على موقع <code>h1</code> ، لم يتم دفعه لأسفل لاستيعاب شريط التنقل وسيتعين تعديله بشكل منفصل. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'و <code>#navbar</code> يجب أن يكون العنصر في <code>position</code> لتعيين <code>fixed</code> .'
    testString: 'assert($("#navbar").css("position") == "fixed", "The <code>#navbar</code> element should have a <code>position</code> set to <code>fixed</code>.");'
  - text: 'يجب أن تستخدم شفرتك <code>top</code> إزاحة CSS بمقدار 0 بكسل في عنصر <code>#navbar</code> .'
    testString: 'assert($("#navbar").css("top") == "0px", "Your code should use the <code>top</code> CSS offset of 0 pixels on the <code>#navbar</code> element.");'
  - text: 'يجب أن تستخدم شفرتك إزاحة CSS <code>left</code> من 0 بكسل في عنصر <code>#navbar</code> .'
    testString: 'assert($("#navbar").css("left") == "0px", "Your code should use the <code>left</code> CSS offset of 0 pixels on the <code>#navbar</code> element.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #navbar {



    width: 100%;
    background-color: #767676;
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
  }
</style>
<body>
  <header>
    <h1>Welcome!</h1>
    <nav id="navbar">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  </header>
  <p>I shift up when the #navbar is fixed to the browser window.</p>
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
