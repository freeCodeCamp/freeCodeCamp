---
id: 56533eb9ac21ba0edf2244cd
title: Accessing Nested Arrays
challengeType: 1
videoUrl: ''
localeTitle: الوصول إلى صفائف متداخلة
---

## Description
<section id="description"> كما رأينا في الأمثلة السابقة ، يمكن أن تحتوي الكائنات على كل من الكائنات المتداخلة والصفائف المتداخلة. على غرار الوصول إلى الكائنات المتداخلة ، يمكن تقييد تدرج قوس Array للوصول إلى صفائف متداخلة. فيما يلي مثال لكيفية الوصول إلى صفيف متداخل: <blockquote style=";text-align:right;direction:rtl"> var ourPets = [ <br> { <br> animalType: &quot;قطة&quot; ، <br> الأسماء: [ <br> &quot;Meowzer&quot; <br> &quot;رقيق&quot;، <br> &quot;كيت كات&quot; <br> ] <br> }، <br> { <br> animalType: &quot;dog&quot; ، <br> الأسماء: [ <br> &quot;بقعة&quot;، <br> &quot;العربة&quot;، <br> &quot;فرانكي&quot; <br> ] <br> } <br> ]. <br> ourPets [0] .names [1]؛ // &quot;رقيق&quot; <br> ourPets [1] .names [0]؛ // &quot;سبوت&quot; </blockquote></section>

## Instructions
<section id="instructions"> استرجاع الشجرة الثانية من <code>myPlants</code> المتغير باستخدام <code>myPlants</code> نقطة الكائن <code>myPlants</code> مجموعة الصفيف. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>secondTree</code> ينبغي أن يساوي &quot;الصنوبر&quot;
    testString: 'assert(secondTree === "pine", "<code>secondTree</code> should equal "pine"");'
  - text: استخدم نقطة <code>myPlants</code> قوس للوصول إلى <code>myPlants</code>
    testString: 'assert(/=\s*myPlants\[1\].list\[1\]/.test(code), "Use dot and bracket notation to access <code>myPlants</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

// Only change code below this line

var secondTree = ""; // Change this line

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
