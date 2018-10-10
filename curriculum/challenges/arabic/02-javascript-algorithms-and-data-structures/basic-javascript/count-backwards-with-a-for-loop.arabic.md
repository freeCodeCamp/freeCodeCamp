---
id: 56105e7b514f539506016a5e
title: Count Backwards With a For Loop
challengeType: 1
videoUrl: ''
localeTitle: عد إلى الخلف مع ل حلقة
---

## Description
<section id="description"> يمكن أيضًا حساب العروة للخلف ، طالما أننا نستطيع تحديد الشروط الصحيحة. من أجل احتساب العكسيتين بعلامة twos ، سنحتاج إلى تغيير <code>initialization</code> <code>condition</code> <code>final-expression</code> . سنبدأ عند <code>i = 10</code> والحلقة بينما <code>i &gt; 0</code> . سنقوم decrement <code>i</code> كل حلقة 2 مع <code>i -= 2</code> . <blockquote style=";text-align:right;direction:rtl"> var ourArray = []؛ <br> for (var i = 10؛ i&gt; 0؛ i- = 2) { <br> ourArray.push (ط)؛ <br> } </blockquote> <code>ourArray</code> الآن <code>[10,8,6,4,2]</code> . دعونا نغير <code>initialization</code> <code>final-expression</code> حتى نتمكن من العد إلى الوراء من خلال الاثنتين بالأرقام الفردية. </section>

## Instructions
<section id="instructions"> ادفع الأرقام الفردية من 9 إلى 1 إلى <code>myArray</code> باستخدام حلقة <code>for</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تكون باستخدام <code>for</code> حلقة لهذا الغرض.
    testString: 'assert(code.match(/for\s*\(/g).length > 1, "You should be using a <code>for</code> loop for this.");'
  - text: يجب أن تستخدم <code>push</code> طريقة الصفيف.
    testString: 'assert(code.match(/myArray.push/), "You should be using the array method <code>push</code>.");'
  - text: '<code>myArray</code> ينبغي أن تساوي <code>[9,7,5,3,1]</code> .'
    testString: 'assert.deepEqual(myArray, [9,7,5,3,1], "<code>myArray</code> should equal <code>[9,7,5,3,1]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.

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
