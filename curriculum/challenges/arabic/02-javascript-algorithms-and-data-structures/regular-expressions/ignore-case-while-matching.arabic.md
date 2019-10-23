---
id: 587d7db4367417b2b2512b91
title: Ignore Case While Matching
challengeType: 1
videoUrl: ''
localeTitle: تجاهل حالة أثناء المطابقة
---

## Description
<section id="description"> حتى الآن ، كنت قد نظرت في regexes للقيام مباريات حرفية من السلاسل. لكن في بعض الأحيان ، قد ترغب أيضًا في مطابقة اختلافات الحالات. الحالة (أو في بعض الأحيان حالة الأحرف) هي الفرق بين الأحرف الكبيرة والأحرف الصغيرة. أمثلة من الأحرف الكبيرة هي <code>&quot;A&quot;</code> و <code>&quot;B&quot;</code> و <code>&quot;C&quot;</code> . أمثلة من الأحرف الصغيرة هي <code>&quot;a&quot;</code> و <code>&quot;b&quot;</code> و <code>&quot;c&quot;</code> . يمكنك مطابقة الحالتين باستخدام ما يسمى بعلم. هناك علامات أخرى ولكن هنا سوف تركز على العلم الذي يتجاهل القضية - العلم <code>i</code> . يمكنك استخدامه عن طريق إلحاقه بالتعبير المعتاد. مثال على استخدام هذه العلامة هو <code>/ignorecase/i</code> . يمكن أن يتطابق هذا التعبير المعتاد مع الجمل <code>&quot;ignorecase&quot;</code> و <code>&quot;igNoreCase&quot;</code> و <code>&quot;IgnoreCase&quot;</code> . </section>

## Instructions
<section id="instructions"> اكتب <code>fccRegex</code> regex لمطابقة <code>&quot;freeCodeCamp&quot;</code> ، بغض النظر عن قضيته. يجب ألا يتطابق تعبيرك العادي مع أي اختصارات أو اختلافات في المساحات. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يتطابق <code>freeCodeCamp</code> العادي مع <code>freeCodeCamp</code>
    testString: 'assert(fccRegex.test("freeCodeCamp"), "Your regex should match <code>freeCodeCamp</code>");'
  - text: يجب أن يتطابق <code>FreeCodeCamp</code> العادي مع <code>FreeCodeCamp</code>
    testString: 'assert(fccRegex.test("FreeCodeCamp"), "Your regex should match <code>FreeCodeCamp</code>");'
  - text: يجب أن يتطابق <code>FreecodeCamp</code> العادي مع <code>FreecodeCamp</code>
    testString: 'assert(fccRegex.test("FreecodeCamp"), "Your regex should match <code>FreecodeCamp</code>");'
  - text: يجب أن يتطابق <code>FreeCodecamp</code> العادي مع <code>FreeCodecamp</code>
    testString: 'assert(fccRegex.test("FreeCodecamp"), "Your regex should match <code>FreeCodecamp</code>");'
  - text: يجب ألا يتطابق تعبيرك العادي مع <code>Free Code Camp</code>
    testString: 'assert(!fccRegex.test("Free Code Camp"), "Your regex should not match <code>Free Code Camp</code>");'
  - text: يجب أن يتطابق <code>FreeCOdeCamp</code> العادي مع <code>FreeCOdeCamp</code>
    testString: 'assert(fccRegex.test("FreeCOdeCamp"), "Your regex should match <code>FreeCOdeCamp</code>");'
  - text: يجب ألا يتطابق تعبيرك العادي مع <code>FCC</code>
    testString: 'assert(!fccRegex.test("FCC"), "Your regex should not match <code>FCC</code>");'
  - text: يجب أن يتطابق <code>FrEeCoDeCamp</code> العادي مع <code>FrEeCoDeCamp</code>
    testString: 'assert(fccRegex.test("FrEeCoDeCamp"), "Your regex should match <code>FrEeCoDeCamp</code>");'
  - text: يجب أن يتطابق <code>FrEeCodECamp</code> العادي مع <code>FrEeCodECamp</code>
    testString: 'assert(fccRegex.test("FrEeCodECamp"), "Your regex should match <code>FrEeCodECamp</code>");'
  - text: يجب أن يتطابق التعبير المعتاد مع <code>FReeCodeCAmp</code>
    testString: 'assert(fccRegex.test("FReeCodeCAmp"), "Your regex should match <code>FReeCodeCAmp</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let myString = "freeCodeCamp";
let fccRegex = /change/; // Change this line
let result = fccRegex.test(myString);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
