---
id: 587d7dba367417b2b2512ba9
title: Positive and Negative Lookahead
challengeType: 1
forumTopicId: 301360
localeTitle: Положительный и отрицательный Lookahead
---

## Description
<section id='description'>
<code>Lookaheads</code> - это шаблоны, которые говорят JavaScript для поиска в вашей строке, чтобы проверить шаблоны далее. Это может быть полезно, если вы хотите искать несколько шаблонов по одной и той же строке. Есть два вида <code>lookaheads</code> : <code>positive lookahead</code> и <code>negative lookahead</code> . <code>positive lookahead</code> взгляд будет выглядеть так, чтобы убедиться, что элемент в шаблоне поиска существует, но на самом деле не будет соответствовать ему. Положительный lookahead используется как <code>(?=...)</code> где <code>...</code> - искомая часть, которая не сопоставляется. С другой стороны, <code>negative lookahead</code> взгляд будет выглядеть так, чтобы убедиться, что элемент в шаблоне поиска отсутствует. Отрицательный lookahead используется как <code>(?!...)</code> где <code>...</code> это шаблон, который вы не хотите быть там. Остальная часть шаблона возвращается, если отрицательная обратная сторона отсутствует. Lookaheads немного запутывают, но некоторые примеры помогут. <blockquote> пусть quit = &quot;qu&quot;; <br> пусть noquit = &quot;qt&quot;; <br> пусть quRegex = / q (? = u) /; <br> пусть qRegex = / q (?! u) /; <br> quit.match (quRegex); // Возвращает [&quot;q&quot;] <br> noquit.match (qRegex); // Возвращает [&quot;q&quot;] </blockquote> Более практическое использование <code>lookaheads</code> - проверка двух или более шаблонов в одной строке. Вот (наивно) простая проверка пароля, которая ищет от 3 до 6 символов и по крайней мере одно число: <blockquote> пусть пароль = &quot;abc123&quot;; <br> пусть checkPass = / (? = \ w {3,6}) (? = \ D * \ d) /; <br> checkPass.test (пароль); // Возвращает true </blockquote>
</section>

## Instructions
<section id='instructions'>
Используйте <code>lookaheads</code> в <code>pwRegex</code> , чтобы соответствовать пароли, которые больше 5 символов и имеют две последовательные цифры.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your regex should use two positive <code>lookaheads</code>.
    testString: assert(pwRegex.source.match(/\(\?=.*?\)\(\?=.*?\)/) !== null);
  - text: Your regex should not match <code>"astronaut"</code>
    testString: assert(!pwRegex.test("astronaut"));
  - text: Your regex should not match <code>"airplanes"</code>
    testString: assert(!pwRegex.test("airplanes"));
  - text: Your regex should not match <code>"banan1"</code>
    testString: assert(!pwRegex.test("banan1"));
  - text: Your regex should match <code>"bana12"</code>
    testString: assert(pwRegex.test("bana12"));
  - text: Your regex should match <code>"abc123"</code>
    testString: assert(pwRegex.test("abc123"));
  - text: Your regex should not match <code>"123"</code>
    testString: assert(!pwRegex.test("123"));
  - text: Your regex should not match <code>"1234"</code>
    testString: assert(!pwRegex.test("1234"));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let sampleWord = "astronaut";
let pwRegex = /change/; // Change this line
let result = pwRegex.test(sampleWord);

```

</div>

</section>

## Solution
<section id='solution'>

```js
var pwRegex = /(?=\w{6})(?=\D*\d{2})/;
```

</section>
