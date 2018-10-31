---
title: Tokenize a string with escaping
id: 594faaab4e2a8626833e9c3d
challengeType: 5
videoUrl: ''
localeTitle: Токенизировать строку с экранированием
---

## Description
<section id="description"><p> Напишите функцию или программу, которые могут разбивать строку на каждое неэкранированное вхождение символа разделителя. </p><p> Он должен принимать три входных параметра: </p> <b>Строка</b> Символ <b>разделителя</b> Управляющий <b>символ</b> <p> Он должен вывести список строк. </p><p> Правила разделения: </p> Поля, разделенные разделителями, становятся элементами выходного списка. Пустые поля должны быть сохранены, даже в начале и в конце. <p> Правила побега: </p> «Escaped» означает, что предшествует появление escape-символа, который еще не сбежал. Когда escape-символ предшествует персонажу, который не имеет особого значения, он по-прежнему считается побегом (но не делает ничего особенного). Каждое появление escape-символа, которое использовалось для выхода из него, не должно становиться частью выхода. <p> Продемонстрируйте, что ваша функция удовлетворяет следующему тестовому сценарию: заданная строка </p><pre> один ^ | у || три ^^^^ | четыре ^^^ | ^ куатро | </pre> и использование <pre> | </pre> как разделитель и <pre> ^ </pre> как escape-символ, ваша функция должна выводить следующий массив: <p></p><pre> [&#39;one | uno&#39;, &quot;, &#39;three ^^&#39;, &#39;four ^ | quatro&#39;,&quot;]
  </pre></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>tokenize</code> - это функция.
    testString: 'assert(typeof tokenize === "function", "<code>tokenize</code> is a function.");'
  - text: <code>tokenize</code> должен возвращать массив.
    testString: 'assert(typeof tokenize("a", "b", "c") === "object", "<code>tokenize</code> should return an array.");'
  - text: '<code>tokenize(&quot;one^|uno||three^^^^|four^^^|^cuatro|&quot;, &quot;|&quot;, &quot;^&quot;)</code> должно возвращать [&quot;one | uno&quot;, &quot;&quot;, &quot;three ^^&quot; , &quot;four ^ | cuatro&quot;, &quot;&quot;] &quot;)'
    testString: 'assert.deepEqual(tokenize(testStr1, "|", "^"), res1, "<code>tokenize("one^|uno||three^^^^|four^^^|^cuatro|", "|", "^") </code> should return ["one|uno", "", "three^^", "four^|cuatro", ""]");'
  - text: '<code>tokenize(&quot;a@&amp;bcd&amp;ef&amp;&amp;@@hi&quot;, &quot;&amp;&quot;, &quot;@&quot;)</code> должны возвращать <code>[&quot;a&amp;bcd&quot;, &quot;ef&quot;, &quot;&quot;, &quot;@hi&quot;]</code>'
    testString: 'assert.deepEqual(tokenize(testStr2, "&", "@"), res2, "<code>tokenize("a@&bcd&ef&&@@hi", "&", "@")</code> should return <code>["a&bcd", "ef", "", "@hi"]</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function tokenize(str, esc, sep) {
  return true;
}

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
