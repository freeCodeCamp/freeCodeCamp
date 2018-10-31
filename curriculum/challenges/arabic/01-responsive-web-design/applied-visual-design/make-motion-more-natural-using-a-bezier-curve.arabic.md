---
id: 587d78a9367417b2b2512aea
title: Make Motion More Natural Using a Bezier Curve
challengeType: 0
videoUrl: ''
localeTitle: جعل الحركة أكثر طبيعية باستخدام منحنى بيزيير
---

## Description
<section id="description"> هذا التحدي ينشط عنصرًا لتكرار حركة الكرة التي يتم لعبها. غطت التحديات السابقة منحنيات بيزيير المكعبة <code>linear</code> <code>ease-out</code> ، ولكن لا يصور أي منهما حركة شعوذة بدقة. تحتاج إلى تخصيص منحنى بيزير لهذا الغرض. <code>animation-timing-function</code> تلقائيًا في كل إطار مفتاحي عند تعيين عدد مرات تشغيل <code>animation-iteration-count</code> غير محدود. نظرًا لوجود قاعدة الإطار الرئيسي التي تم تعيينها في منتصف مدة الرسوم المتحركة ( <code>50%</code> ) ، يؤدي ذلك إلى تقدمين متتاليين للرسوم المتحركة في حركة الكرة إلى أعلى وإلى أسفل. يحاكي المنحنى Bezier التكعيبي التالي حركة شعوذة: <code>cubic-bezier(0.3, 0.4, 0.5, 1.6);</code> لاحظ أن قيمة y2 أكبر من 1. على الرغم من أن المنحنى Bezier المكعّب يتم تعيينه على نظام إحداثيات 1 × 1 ، ولا يمكنه قبول سوى قيم x من 0 إلى 1 ، يمكن تعيين قيمة y لأعداد أكبر من واحد. هذا يؤدي إلى حركة كذاب مثالية لمحاكاة الكرة شعوذة. </section>

## Instructions
<section id="instructions"> تغيير قيمة <code>animation-timing-function</code> للعنصر مع معرف <code>green</code> إلى وظيفة بيكي <code>cubic-bezier</code> مع قيم x1 و y1 و x2 و y2 على التوالي إلى 0.311 ، 0.441 ، 0.444 ، 1.649. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تكون قيمة خاصية <code>animation-timing-function</code> للعنصر ذي معرف <code>green</code> عبارة <code>cubic-bezier</code> وظيفة <code>cubic-bezier</code> بقيم x1 و y1 و x2 و y2 كما هو محدد.
    testString: 'assert($("#green").css("animation-timing-function") == "cubic-bezier(0.311, 0.441, 0.444, 1.649)", "The value of the <code>animation-timing-function</code> property for the element with the id <code>green</code> should be a <code>cubic-bezier</code> function with x1, y1, x2, y2 values as specified.'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .balls {
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    top: 60%;
    animation-name: jump;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 25%;
    animation-timing-function: linear;
  }
  #blue {
    background: blue;
    left: 50%;
    animation-timing-function: ease-out;
  }
  #green {
    background: green;
    left: 75%;
    animation-timing-function: cubic-bezier(0.69, 0.1, 1, 0.1);
  }

  @keyframes jump {
    50% {
      top: 10%;
    }
  }
</style>
<div class="balls" id="red"></div>
<div class="balls" id="blue"></div>
<div class="balls" id="green"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
