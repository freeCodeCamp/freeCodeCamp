---
title: Word wrap
id: 594810f028c0303b75339ad4
challengeType: 5
forumTopicId: 302344
localeTitle: Перенос слова
---

## Description
<section id='description'>
<p> Даже сегодня, с пропорциональными шрифтами и сложными макетами, все еще есть случаи, когда вам нужно обернуть текст в указанном столбце. Основная задача - обтекание абзаца текста простым способом. Пример текста: </p><pre> Оберните текст, используя более сложный алгоритм, такой как алгоритм Knuth и Plass TeX.
Если ваш язык предоставляет это, вы получаете легкий дополнительный кредит,
но вы «должны ссылаться на документацию», указывая на то, что алгоритм
что-то лучше, чем простой алгоритм минимальной длины.
</pre><p> Задача: </p><pre> <code>Write a function that can wrap this text to any number of characters.</code> </pre><p> Например, текст, состоящий из 80 символов, должен выглядеть следующим образом: </p><p></p><pre> Оберните текст, используя более сложный алгоритм, такой как Knuth и Plass TeX
алгоритм. Если ваш язык предоставляет это, вы получаете легкий дополнительный кредит, но вы
должен ссылаться на документацию, указывающую, что алгоритм лучше чем
чем простой алгоритм минимальной длины.
</pre>
</section>

## Instructions
<section id='instructions'>
Write a function that can wrap this text to any number of characters. As an example, the text wrapped to 80 characters should look like the following:

<pre>
Wrap text using a more sophisticated algorithm such as the Knuth and Plass TeX
algorithm. If your language provides this, you get easy extra credit, but you
must reference documentation indicating that the algorithm is something better
than a simple minimum length algorithm.
</pre>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: wrap must be a function.
    testString: assert.equal(typeof wrap, 'function');
  - text: wrap must return a string.
    testString: assert.equal(typeof wrap('abc', 10), 'string');
  - text: wrap(80) must return 4 lines.
    testString: assert(wrapped80.split('\n').length === 4);
  - text: Your <code>wrap</code> function should return our expected text
    testString: assert.equal(wrapped80.split('\n')[0], firstRow80);
  - text: wrap(42) must return 7 lines.
    testString: assert(wrapped42.split('\n').length === 7);
  - text: Your <code>wrap</code> function should return our expected text
    testString: assert.equal(wrapped42.split('\n')[0], firstRow42);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function wrap(text, limit) {
  return text;
}

```

</div>

### After Tests
<div id='js-teardown'>

```js
const text =
`Wrap text using a more sophisticated algorithm such as the Knuth and Plass TeX algorithm.
If your language provides this, you get easy extra credit,
but you ''must reference documentation'' indicating that the algorithm
is something better than a simple minimimum length algorithm.`;

const wrapped80 = wrap(text, 80);
const wrapped42 = wrap(text, 42);

const firstRow80 =
    'Wrap text using a more sophisticated algorithm such as the Knuth and Plass TeX';

const firstRow42 = 'Wrap text using a more sophisticated';

```

</div>

</section>

## Solution
<section id='solution'>

```js
function wrap(text, limit) {
  const noNewlines = text.replace('\n', '');
  if (noNewlines.length > limit) {
    // find the last space within limit
    const edge = noNewlines.slice(0, limit).lastIndexOf(' ');
    if (edge > 0) {
      const line = noNewlines.slice(0, edge);
      const remainder = noNewlines.slice(edge + 1);
      return line + '\n' + wrap(remainder, limit);
    }
  }
  return text;
}
```

</section>
