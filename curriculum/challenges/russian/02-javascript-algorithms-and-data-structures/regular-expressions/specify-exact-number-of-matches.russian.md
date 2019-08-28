---
id: 587d7db9367417b2b2512ba7
title: Specify Exact Number of Matches
challengeType: 1
forumTopicId: 301365
localeTitle: Укажите точное количество совпадений
---

## Description
<section id='description'>
Вы можете указать нижнее и верхнее число шаблонов с помощью <code>quantity specifiers</code> используя фигурные скобки. Иногда вам нужно только определенное количество совпадений. Чтобы указать определенное количество шаблонов, просто укажите это число между фигурными скобками. Например, чтобы соответствовать только слово <code>&quot;hah&quot;</code> с буквой <code>a</code> <code>3</code> раза, ваша регулярное выражение будет <code>/ha{3}h/</code> . <blockquote> пусть А4 = &quot;хааах&quot;; <br> пусть A3 = &quot;haaah&quot;; <br> пусть A100 = &quot;h&quot; + &quot;a&quot; .repeat (100) + &quot;h&quot;; <br> пусть multHA = / ha {3} h /; <br> multipleHA.test (А4); // Возвращает false <br> multipleHA.test (А3); // Возвращает true <br> multipleHA.test (А100); // Возвращает false </blockquote>
</section>

## Instructions
<section id='instructions'>
Измените регулярное выражение <code>timRegex</code> в соответствии с словом <code>&quot;Timber&quot;</code> только тогда, когда оно имеет четыре буквы <code>m</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your regex should use curly brackets.
    testString: assert(timRegex.source.match(/{.*?}/).length > 0);
  - text: Your regex should not match <code>"Timber"</code>
    testString: assert(!timRegex.test("Timber"));
  - text: Your regex should not match <code>"Timmber"</code>
    testString: assert(!timRegex.test("Timmber"));
  - text: Your regex should not match <code>"Timmmber"</code>
    testString: assert(!timRegex.test("Timmmber"));
  - text: Your regex should match <code>"Timmmmber"</code>
    testString: assert(timRegex.test("Timmmmber"));
  - text: Your regex should not match <code>"Timber"</code> with 30 <code>m</code>'s in it.
    testString: assert(!timRegex.test("Ti" + "m".repeat(30) + "ber"));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let timStr = "Timmmmber";
let timRegex = /change/; // Change this line
let result = timRegex.test(timStr);

```

</div>

</section>

## Solution
<section id='solution'>

```js
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);
```

</section>
