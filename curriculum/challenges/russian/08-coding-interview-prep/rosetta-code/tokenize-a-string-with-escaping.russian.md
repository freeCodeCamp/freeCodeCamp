---
title: Tokenize a string with escaping
id: 594faaab4e2a8626833e9c3d
challengeType: 5
forumTopicId: 302338
localeTitle: Токенизировать строку с экранированием
---

## Description
<section id='description'>
<p> Напишите функцию или программу, которые могут разбивать строку на каждое неэкранированное вхождение символа разделителя. </p><p> Он должен принимать три входных параметра: </p> <b>Строка</b> Символ <b>разделителя</b> Управляющий <b>символ</b> <p> Он должен вывести список строк. </p><p> Правила разделения: </p> Поля, разделенные разделителями, становятся элементами выходного списка. Пустые поля должны быть сохранены, даже в начале и в конце. <p> Правила побега: </p> «Escaped» означает, что предшествует появление escape-символа, который еще не сбежал. Когда escape-символ предшествует персонажу, который не имеет особого значения, он по-прежнему считается побегом (но не делает ничего особенного). Каждое появление escape-символа, которое использовалось для выхода из него, не должно становиться частью выхода. <p> Продемонстрируйте, что ваша функция удовлетворяет следующему тестовому сценарию: заданная строка </p><pre> один ^ | у || три ^^^^ | четыре ^^^ | ^ куатро | </pre> и использование <pre> | </pre> как разделитель и <pre> ^ </pre> как escape-символ, ваша функция должна выводить следующий массив: <p></p><pre> [&#39;one | uno&#39;, &quot;, &#39;three ^^&#39;, &#39;four ^ | quatro&#39;,&quot;]
  </pre>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>tokenize</code> is a function.
    testString: assert(typeof tokenize === 'function');
  - text: <code>tokenize</code> should return an array.
    testString: assert(typeof tokenize('a', 'b', 'c') === 'object');
  - text: <code>tokenize('one^|uno||three^^^^|four^^^|^cuatro|', '|', '^') </code> should return <code>['one|uno', '', 'three^^', 'four^|cuatro', '']</code>
    testString: assert.deepEqual(tokenize(testStr1, '|', '^'), res1);
  - text: <code>tokenize('a@&bcd&ef&&@@hi', '&', '@')</code> should return <code>['a&bcd', 'ef', '', '@hi']</code>
    testString: assert.deepEqual(tokenize(testStr2, '&', '@'), res2);

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

### After Tests
<div id='js-teardown'>

```js
const testStr1 = 'one^|uno||three^^^^|four^^^|^cuatro|';
const res1 = ['one|uno', '', 'three^^', 'four^|cuatro', ''];

// TODO add more tests
const testStr2 = 'a@&bcd&ef&&@@hi';
const res2 = ['a&bcd', 'ef', '', '@hi'];

```

</div>

</section>

## Solution
<section id='solution'>

```js
// tokenize :: String -> Character -> Character -> [String]
function tokenize(str, charDelim, charEsc) {
  const dctParse = str.split('')
    .reduce((a, x) => {
      const blnEsc = a.esc;
      const blnBreak = !blnEsc && x === charDelim;
      const blnEscChar = !blnEsc && x === charEsc;

      return {
        esc: blnEscChar,
        token: blnBreak ? '' : (
          a.token + (blnEscChar ? '' : x)
        ),
        list: a.list.concat(blnBreak ? a.token : [])
      };
    }, {
      esc: false,
      token: '',
      list: []
    });

  return dctParse.list.concat(
    dctParse.token
  );
}
```

</section>
