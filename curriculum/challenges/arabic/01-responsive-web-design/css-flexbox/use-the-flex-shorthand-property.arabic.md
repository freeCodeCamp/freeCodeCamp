---
id: 587d78ae367417b2b2512afe
title: Use the flex Shorthand Property
challengeType: 0
videoUrl: ''
localeTitle: استخدم خاصية الاختزال المرن
---

## Description
<section id="description"> هناك اختصار متاح لضبط عدة خصائص المرن دفعة واحدة. يمكن تعيين الخصائص <code>flex-grow</code> و <code>flex-shrink</code> و <code>flex-basis</code> معاً باستخدام الخاصية <code>flex</code> . على سبيل المثال ، <code>flex: 1 0 10px;</code> سيحدد العنصر إلى <code>flex-grow: 1;</code> ، <code>flex-shrink: 0;</code> ، و <code>flex-basis: 10px;</code> . إعدادات الخاصية الافتراضية هي <code>flex: 0 1 auto;</code> . </section>

## Instructions
<section id="instructions"> إضافة <code>flex</code> إلى <code>#box-1</code> و <code>#box-2</code> . قم بإعطاء <code>#box-1</code> القيم بحيث يكون نموها <code>flex-grow</code> 2 ، حيث يكون <code>flex-shrink</code> 2 ، ويكون أساسه <code>flex-basis</code> 150 بكسل. أعط <code>#box-2</code> القيم بحيث يكون <code>flex-grow</code> <code>flex-shrink</code> هو 1 ، و هو <code>flex-shrink</code> هو 1 ، و أساسه <code>flex-basis</code> هو 150 بكسل. ستؤدي هذه القيم إلى زيادة <code>#box-1</code> لملء المساحة الزائدة بمعدل ضعف <code>#box-2</code> عندما تكون الحاوية أكبر من 300 بكسل وتتقلص بمعدل ضعف <code>#box-2</code> عندما تكون الحاوية أقل من 300 بكسل. يمثل 300 بكسل الحجم المجمع لقيم <code>flex-basis</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'يجب أن يحتوي عنصر <code>#box-1</code> على مجموعة خصائص <code>flex</code> بقيمة 2 2 150 بكسل.'
    testString: 'assert($("#box-1").css("flex-grow") == "2" && $("#box-1").css("flex-shrink") == "2" && $("#box-1").css("flex-basis") == "150px", "The <code>#box-1</code> element should have the <code>flex</code> property set to a value of 2 2 150px.");'
  - text: 'يجب أن يحتوي عنصر <code>#box-2</code> على مجموعة خصائص <code>flex</code> بقيمة 1 1 150 بكسل.'
    testString: 'assert($("#box-2").css("flex-grow") == "1" && $("#box-2").css("flex-shrink") == "1" && $("#box-2").css("flex-basis") == "150px", "The <code>#box-2</code> element should have the <code>flex</code> property set to a value of 1 1 150px.");'
  - text: 'يجب أن تستخدم الشفرة الخاصة بك الخاصية <code>flex</code> لـ <code>#box-1</code> و <code>#box-2</code> .'
    testString: 'assert(code.match(/flex:\s*?\d\s+?\d\s+?150px;/g).length == 2, "Your code should use the <code>flex</code> property for <code>#box-1</code> and <code>#box-2</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;

    height: 200px;
  }

  #box-2 {
    background-color: orangered;

    height: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
