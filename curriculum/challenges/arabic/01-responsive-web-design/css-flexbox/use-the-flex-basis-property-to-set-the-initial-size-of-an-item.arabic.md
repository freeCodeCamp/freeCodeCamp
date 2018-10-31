---
id: 587d78ae367417b2b2512afd
title: Use the flex-basis Property to Set the Initial Size of an Item
challengeType: 0
videoUrl: ''
localeTitle: استخدم الخاصية الأساسية المرنة لتعيين الحجم الأولي لعنصر
---

## Description
<section id="description"> تحدد الخاصية <code>flex-basis</code> الحجم الأولي للعنصر قبل أن تقوم CSS بإجراء عمليات ضبط باستخدام <code>flex-shrink</code> أو <code>flex-grow</code> . الوحدات المستخدمة بواسطة الخاصية <code>flex-basis</code> هي نفس خصائص الحجم الأخرى ( <code>px</code> ، <code>em</code> ، <code>%</code> ، إلخ). عناصر قيمة الأحجام <code>auto</code> استنادًا إلى المحتوى. </section>

## Instructions
<section id="instructions"> اضبط الحجم الأولي للمربعات باستخدام <code>flex-basis</code> . أضف <code>flex-basis</code> إلى <code>#box-1</code> و <code>#box-2</code> . Give <code>#box-1</code> a value of <code>10em</code> and <code>#box-2</code> a value of <code>20em</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'يجب أن يحتوي عنصر <code>#box-1</code> على خاصية <code>flex-basis</code> .'
    testString: 'assert($("#box-1").css("flex-basis") != "auto", "The <code>#box-1</code> element should have a <code>flex-basis</code> property.");'
  - text: 'يجب أن يحتوي عنصر <code>#box-1</code> على قيمة <code>flex-basis</code> <code>10em</code> .'
    testString: 'assert(code.match(/#box-1\s*?{\s*?.*?\s*?.*?\s*?flex-basis:\s*?10em;/g), "The <code>#box-1</code> element should have a <code>flex-basis</code> value of <code>10em</code>.");'
  - text: 'يجب أن يكون عنصر <code>#box-2</code> الخاصية <code>flex-basis</code> .'
    testString: 'assert($("#box-2").css("flex-basis") != "auto", "The <code>#box-2</code> element should have the <code>flex-basis</code> property.");'
  - text: 'يجب أن يحتوي عنصر <code>#box-2</code> على قيمة <code>flex-basis</code> <code>20em</code> .'
    testString: 'assert(code.match(/#box-2\s*?{\s*?.*?\s*?.*?\s*?flex-basis:\s*?20em;/g), "The <code>#box-2</code> element should have a <code>flex-basis</code> value of <code>20em</code>.");'

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
