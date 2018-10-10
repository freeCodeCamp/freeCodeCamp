---
id: 587d7db4367417b2b2512b90
title: Match a Literal String with Different Possibilities
challengeType: 1
videoUrl: ''
localeTitle: تطابق سلسلة حرفية مع الاحتمالات المختلفة
---

## Description
<section id="description"> باستخدام regexes مثل <code>/coding/</code> ، يمكنك البحث عن نمط <code>&quot;coding&quot;</code> في سلسلة أخرى. يعد هذا أمرًا قويًا للبحث عن سلاسل مفردة ، ولكنه يقتصر على نمط واحد فقط. يمكنك البحث عن أنماط متعددة باستخدام <code>alternation</code> أو <code>OR</code> المشغل: <code>|</code> . هذا المشغل يطابق الأنماط قبل أو بعدها. على سبيل المثال ، إذا كنت تريد مطابقة <code>&quot;yes&quot;</code> أو <code>&quot;no&quot;</code> ، فإن التعبير المعتاد الذي تريده هو <code>/yes|no/</code> . يمكنك أيضًا البحث عن أكثر من نمطين فقط. يمكنك القيام بذلك عن طريق إضافة المزيد من الأنماط مع المزيد من عوامل تشغيل <code>OR</code> تفصل بينها ، مثل <code>/yes|no|maybe/</code> . </section>

## Instructions
<section id="instructions"> أكمل <code>petRegex</code> regex <code>petRegex</code> مع الحيوانات الأليفة <code>&quot;dog&quot;</code> أو <code>&quot;cat&quot;</code> أو <code>&quot;bird&quot;</code> أو <code>&quot;fish&quot;</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب إرجاع <code>petRegex</code> الخاص بك regex <code>true</code> للسلسلة <code>&quot;John has a pet dog.&quot;</code>
    testString: 'assert(petRegex.test("John has a pet dog."), "Your regex <code>petRegex</code> should return <code>true</code> for the string <code>"John has a pet dog."</code>");'
  - text: يجب إرجاع <code>petRegex</code> الخاص بك regex <code>false</code> لسلسلة <code>&quot;Emma has a pet rock.&quot;</code>
    testString: 'assert(!petRegex.test("Emma has a pet rock."), "Your regex <code>petRegex</code> should return <code>false</code> for the string <code>"Emma has a pet rock."</code>");'
  - text: يجب إرجاع <code>petRegex</code> الخاص بك regex <code>true</code> للسلسلة <code>&quot;Emma has a pet bird.&quot;</code>
    testString: 'assert(petRegex.test("Emma has a pet bird."), "Your regex <code>petRegex</code> should return <code>true</code> for the string <code>"Emma has a pet bird."</code>");'
  - text: يجب إعادة <code>petRegex</code> الخاص بك regex <code>true</code> للسلسلة <code>&quot;Liz has a pet cat.&quot;</code>
    testString: 'assert(petRegex.test("Liz has a pet cat."), "Your regex <code>petRegex</code> should return <code>true</code> for the string <code>"Liz has a pet cat."</code>");'
  - text: يجب إعادة <code>petRegex</code> الخاص بك regex <code>false</code> للسلسلة <code>&quot;Kara has a pet dolphin.&quot;</code> <code>petRegex</code> <code>&quot;Kara has a pet dolphin.&quot;</code>
    testString: 'assert(!petRegex.test("Kara has a pet dolphin."), "Your regex <code>petRegex</code> should return <code>false</code> for the string <code>"Kara has a pet dolphin."</code>");'
  - text: يجب أن يعود <code>petRegex</code> المعتاد الخاص بك <code>true</code> للسلسلة <code>&quot;Alice has a pet fish.&quot;</code>
    testString: 'assert(petRegex.test("Alice has a pet fish."), "Your regex <code>petRegex</code> should return <code>true</code> for the string <code>"Alice has a pet fish."</code>");'
  - text: يجب أن <code>petRegex</code> المعتاد الخاص بك <code>false</code> للسلسلة <code>&quot;Jimmy has a pet computer.&quot;</code>
    testString: 'assert(!petRegex.test("Jimmy has a pet computer."), "Your regex <code>petRegex</code> should return <code>false</code> for the string <code>"Jimmy has a pet computer."</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let petString = "James has a pet cat.";
let petRegex = /change/; // Change this line
let result = petRegex.test(petString);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
