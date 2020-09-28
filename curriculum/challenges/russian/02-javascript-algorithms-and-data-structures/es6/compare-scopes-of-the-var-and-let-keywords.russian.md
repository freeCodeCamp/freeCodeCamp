---
id: 587d7b87367417b2b2512b40
title: Compare Scopes of the var and let Keywords
challengeType: 1
forumTopicId: 301195
localeTitle: Сравнение области действия переменных var и let
---

## Description
<section id='description'>
Когда вы объявляете переменную с ключевым словом <code>var</code> , она объявляется глобально или локально, если объявляется внутри функции. Ключевое слово <code>let</code> ведет себя аналогично, но с некоторыми дополнительными функциями. Когда вы объявляете переменную с ключевым словом <code>let</code> внутри блока, оператора или выражения, его область действия ограничена этим блоком, оператором или выражением. Например: <blockquote> var numArray = []; <br> for (var i = 0; i &lt;3; i ++) { <br> numArray.push (i); <br> } <br> console.log (Numarray); <br> // возвращает [0, 1, 2] <br> console.log (i); <br> // возвращает 3 </blockquote> С ключевым словом <code>var</code> <code>i</code> объявляется глобально. Поэтому, когда <code>i++</code> выполняется, он обновляет глобальную переменную. Этот код похож на следующий: <blockquote> var numArray = []; <br> var i; <br> for (i = 0; i &lt;3; i ++) { <br> numArray.push (i); <br> } <br> console.log (Numarray); <br> // возвращает [0, 1, 2] <br> console.log (i); <br> // возвращает 3 </blockquote> Такое поведение вызовет проблемы, если вы должны были создать функцию и сохранить ее для последующего использования внутри цикла for, который использует переменную <code>i</code> . Это связано с тем, что хранимая функция всегда будет ссылаться на значение обновленной глобальной переменной <code>i</code> . <blockquote> var printNumTwo; <br> for (var i = 0; i &lt;3; i ++) { <br> if (i === 2) { <br> printNumTwo = function () { <br> return i; <br> }; <br> } <br> } <br> console.log (printNumTwo ()); <br> // возвращает 3 </blockquote> Как вы можете видеть, <code>printNumTwo()</code> печатает 3, а не 2. Это связано с тем, что значение, присвоенное <code>i</code> было обновлено, и <code>printNumTwo()</code> возвращает глобальный <code>i</code> а не значение, которое <code>i</code> имел, когда функция была создана в цикле for. Ключевое слово <code>let</code> не следует этому поведению: <blockquote> "use strict"; <br> let printNumTwo; <br> for (let i = 0; i &lt;3; i ++) { <br> if (i === 2) { <br> printNumTwo = function () { <br> return i; <br> }; <br> } <br> } <br> console.log (printNumTwo ()); <br> // возвращает 2 <br> console.log (i); <br> // возвращает «i не определен» </blockquote> <code>i</code> не определен, потому что он не был объявлен в глобальной области. Он объявляется только в инструкции цикла for. <code>printNumTwo()</code> вернула правильное значение, потому что три разные переменные <code>i</code> с уникальными значениями (0, 1 и 2) были созданы ключевым словом <code>let</code> в цикле.
</section>

## Instructions
<section id='instructions'>
Исправьте код, чтобы <code>i</code> объявлял в выражении if отдельную переменную, чем <code>i</code> объявленный в первой строке функции. Не забудьте использовать ключевое слово <code>var</code> в любом месте вашего кода. Это упражнение предназначено для иллюстрации разницы между тем, как ключевые слова <code>var</code> и <code>let</code>  назначают область видимости для объявленных переменных. При программировании функции, аналогичной той, которая используется в этом упражнении, часто лучше использовать разные имена переменных, чтобы избежать путаницы.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>var</code> should not exist in code.
    testString: getUserInput => assert(!getUserInput('index').match(/var/g));
  - text: The variable <code>i</code> declared in the if statement should equal "block scope".
    testString: getUserInput => assert(getUserInput('index').match(/(i\s*=\s*).*\s*.*\s*.*\1('|")block\s*scope\2/g));
  - text: <code>checkScope()</code> should return "function scope"
    testString: assert(checkScope() === "function scope");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkScope() {
  'use strict';
  var i = 'function scope';
  if (true) {
    i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

```

</div>

</section>

## Solution
<section id='solution'>

```js
function checkScope() {
  'use strict';
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
 
  console.log('Function scope i is: ', i);
  return i;
}
```

</section>
