---
id: a7bf700cd123b9a54eef01d5
title: No Repeats Please
challengeType: 5
videoUrl: ''
localeTitle: Нет повторений Пожалуйста
---

## Description
<section id="description"> Возвращает число полных перестановок предоставленной строки, которые не имеют повторяющихся последовательных букв. Предположим, что все символы в предоставленной строке уникальны. Например, <code>aab</code> должен возвращать 2, поскольку имеет 6 полных перестановок ( <code>aab</code> , <code>aab</code> , <code>aba</code> , <code>aba</code> , <code>baa</code> , <code>baa</code> ), но только 2 из них ( <code>aba</code> и <code>aba</code> ) не имеют одинаковой буквы (в данном случае <code>a</code> ) повторяющееся. Не забудьте использовать <a href="http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Попробуйте подключить программу. Напишите свой собственный код. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>permAlone(&quot;aab&quot;)</code> должен возвращать число.
    testString: 'assert.isNumber(permAlone("aab"), "<code>permAlone("aab")</code> should return a number.");'
  - text: <code>permAlone(&quot;aab&quot;)</code> должен вернуть 2.
    testString: 'assert.strictEqual(permAlone("aab"), 2, "<code>permAlone("aab")</code> should return 2.");'
  - text: <code>permAlone(&quot;aaa&quot;)</code> должен вернуть 0.
    testString: 'assert.strictEqual(permAlone("aaa"), 0, "<code>permAlone("aaa")</code> should return 0.");'
  - text: <code>permAlone(&quot;aabb&quot;)</code> должен вернуть 8.
    testString: 'assert.strictEqual(permAlone("aabb"), 8, "<code>permAlone("aabb")</code> should return 8.");'
  - text: <code>permAlone(&quot;abcdefa&quot;)</code> должен вернуть 3600.
    testString: 'assert.strictEqual(permAlone("abcdefa"), 3600, "<code>permAlone("abcdefa")</code> should return 3600.");'
  - text: <code>permAlone(&quot;abfdefa&quot;)</code> должен вернуть 2640.
    testString: 'assert.strictEqual(permAlone("abfdefa"), 2640, "<code>permAlone("abfdefa")</code> should return 2640.");'
  - text: <code>permAlone(&quot;zzzzzzzz&quot;)</code> должен вернуть 0.
    testString: 'assert.strictEqual(permAlone("zzzzzzzz"), 0, "<code>permAlone("zzzzzzzz")</code> should return 0.");'
  - text: <code>permAlone(&quot;a&quot;)</code> должен возвращать 1.
    testString: 'assert.strictEqual(permAlone("a"), 1, "<code>permAlone("a")</code> should return 1.");'
  - text: <code>permAlone(&quot;aaab&quot;)</code> должен вернуть 0.
    testString: 'assert.strictEqual(permAlone("aaab"), 0, "<code>permAlone("aaab")</code> should return 0.");'
  - text: <code>permAlone(&quot;aaabb&quot;)</code> должен вернуть 12.
    testString: 'assert.strictEqual(permAlone("aaabb"), 12, "<code>permAlone("aaabb")</code> should return 12.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function permAlone(str) {
  return str;
}

permAlone('aab');

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
