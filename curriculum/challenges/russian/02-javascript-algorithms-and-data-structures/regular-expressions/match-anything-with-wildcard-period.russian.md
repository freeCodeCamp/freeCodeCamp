---
id: 587d7db5367417b2b2512b94
title: Match Anything with Wildcard Period
challengeType: 1
forumTopicId: 301348
localeTitle: Сопоставить все с подстановочным периодом
---

## Description
<section id='description'>
Иногда вам не нужно (или не нужно) знать точные символы в ваших шаблонах. Думать обо всех словах, которые совпадают, скажем, с орфографией, займет много времени. К счастью, вы можете сэкономить время , используя подстановочные символы: <code>.</code> Символ подстановки <code>.</code> будет соответствовать любому персонажу. Подстановочный знак также называется <code>dot</code> и <code>period</code> . Вы можете использовать подстановочный знак, как и любой другой символ в регулярном выражении. Например, если вы хотите совместить <code>&quot;hug&quot;</code> , <code>&quot;huh&quot;</code> , <code>&quot;hut&quot;</code> и <code>&quot;hum&quot;</code> , вы можете использовать regex <code>/hu./</code> для соответствия всем четырем словам. <blockquote> пусть humStr = «Я буду напевать песню»; <br> let hugStr = «Обнимать медведя»; <br> пусть huRegex = /hu./; <br> humStr.match (huRegex); // Возвращает [&quot;гул&quot;] <br> hugStr.match (huRegex); // Возвращает [&quot;hug&quot;] </blockquote>
</section>

## Instructions
<section id='instructions'>
Заполните regex <code>unRegex</code> так, чтобы он соответствовал строкам <code>&quot;run&quot;</code> , <code>&quot;sun&quot;</code> , <code>&quot;fun&quot;</code> , <code>&quot;pun&quot;</code> , <code>&quot;nun&quot;</code> и <code>&quot;bun&quot;</code> . В вашем регулярном выражении должен использоваться символ подстановки.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should use the <code>.test()</code> method.
    testString: assert(code.match(/\.test\(.*\)/));
  - text: You should use the wildcard character in your regex <code>unRegex</code>
    testString: assert(/\./.test(unRegex.source));
  - text: Your regex <code>unRegex</code> should match <code>"run"</code> in <code>"Let us go on a run."</code>
    testString: assert(unRegex.test("Let us go on a run."));
  - text: Your regex <code>unRegex</code> should match <code>"sun"</code> in <code>"The sun is out today."</code>
    testString: assert(unRegex.test("The sun is out today."));
  - text: Your regex <code>unRegex</code> should match <code>"fun"</code> in <code>"Coding is a lot of fun."</code>
    testString: assert(unRegex.test("Coding is a lot of fun."));
  - text: Your regex <code>unRegex</code> should match <code>"pun"</code> in <code>"Seven days without a pun makes one weak."</code>
    testString: assert(unRegex.test("Seven days without a pun makes one weak."));
  - text: Your regex <code>unRegex</code> should match <code>"nun"</code> in <code>"One takes a vow to be a nun."</code>
    testString: assert(unRegex.test("One takes a vow to be a nun."));
  - text: Your regex <code>unRegex</code> should match <code>"bun"</code> in <code>"She got fired from the hot dog stand for putting her hair in a bun."</code>
    testString: assert(unRegex.test("She got fired from the hot dog stand for putting her hair in a bun."));
  - text: Your regex <code>unRegex</code> should not match <code>"There is a bug in my code."</code>
    testString: assert(!unRegex.test("There is a bug in my code."));
  - text: Your regex <code>unRegex</code> should not match <code>"Catch me if you can."</code>
    testString: assert(!unRegex.test("Can me if you can."));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /change/; // Change this line
let result = unRegex.test(exampleStr);

```

</div>

</section>

## Solution
<section id='solution'>

```js
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);
```

</section>
