---
id: 587d7b8d367417b2b2512b5b
title: Learn About Functional Programming
challengeType: 1
videoUrl: ''
localeTitle: تعرف على برمجة وظيفية
---

## Description
<section id="description"> البرمجة الوظيفية هي أسلوب برمجة حيث الحلول عبارة عن وظائف بسيطة ومعزولة دون أي آثار جانبية خارج نطاق الوظيفة. <code>INPUT -&gt; PROCESS -&gt; OUTPUT</code> البرمجة الوظيفية <code>INPUT -&gt; PROCESS -&gt; OUTPUT</code> حول: 1) وظائف معزولة - لا يوجد اعتماد على حالة البرنامج ، والذي يتضمن متغيرات عامة قابلة للتغيير 2) وظائف نقية - نفس المدخلات تعطي دائما نفس الناتج 3) يتم التحكم بعناية بالوظائف ذات الآثار الجانبية المحدودة - أي تغييرات ، أو طفرات ، إلى حالة البرنامج خارج الوظيفة </section>

## Instructions
<section id="instructions"> أعضاء freeCodeCamp يحدث أن يحب الشاي. في محرر رمز، و <code>prepareTea</code> و <code>getTea</code> يتم تعريف وظائف بالفعل بالنسبة لك. استدعاء وظيفة <code>getTea</code> للحصول على 40 كوب من الشاي للفريق ، وتخزينها في متغير <code>tea4TeamFCC</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(tea4TeamFCC.length === 40, "The <code>tea4TeamFCC</code> variable should hold 40 cups of tea for the team.");'
  - text: يجب أن يعقد المتغير <code>tea4TeamFCC</code> أكواب الشاي الأخضر.
    testString: 'assert(tea4TeamFCC[0] === "greenTea", "The <code>tea4TeamFCC</code> variable should hold cups of green tea.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
/**
 * A long process to prepare tea.
 * @return {string} A cup of tea.
 **/
const prepareTea = () => 'greenTea';

/**
 * Get given number of cups of tea.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

// Add your code below this line

const tea4TeamFCC = null; // :(

// Add your code above this line

console.log(tea4TeamFCC);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
