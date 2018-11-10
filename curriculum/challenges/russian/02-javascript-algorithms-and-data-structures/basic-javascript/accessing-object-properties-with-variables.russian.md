---
id: 56533eb9ac21ba0edf2244c9
title: Accessing Object Properties with Variables
challengeType: 1
guideUrl: 'https://russian.freecodecamp.org/guide/certificates/accessing-objects-properties-with-variables'
videoUrl: ''
localeTitle: Доступ к свойствам объектов с переменными
---

## Description
<section id="description"> Еще одно использование нотации к скобкам для объектов - это доступ к свойству, которое хранится как значение переменной. Это может быть очень полезно для итерации через свойства объекта или при доступе к поисковой таблице. Ниже приведен пример использования переменной для доступа к свойству: <blockquote> var dogs = { <br> Фидо: «Мутт», Охотник: «Доберман», Снупи: «Бигл», <br> }; <br> var myDog = &quot;Охотник&quot;; <br> var myBreed = dogs [myDog]; <br> console.log (myBreed); // &quot;Доберман&quot; </blockquote> Другим способом использования этой концепции является то, что имя свойства собирается динамически во время выполнения программы, а именно: <blockquote> var someObj = { <br> propName: &quot;Джон&quot; <br> }; <br> Функция propPrefix (str) { <br> var s = &quot;prop&quot;; <br> return s + str; <br> } <br> var someProp = propPrefix (&quot;Name&quot;); // someProp теперь содержит значение &#39;propName&#39; <br> console.log (someObj [someProp]); // &quot;Джон&quot; </blockquote> Обратите внимание, что мы <em>не</em> используем кавычки вокруг имени переменной при ее использовании для доступа к свойству, потому что мы используем <em>значение</em> переменной, а не <em>имя</em> . </section>

## Instructions
<section id="instructions"> Используйте переменную <code>playerNumber</code> для поиска игрока <code>16</code> в <code>testObj</code> с использованием нотации в <code>testObj</code> скобок. Затем назначьте это имя переменной <code>player</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>playerNumber</code> должен быть числом
    testString: 'assert(typeof playerNumber === "number", "<code>playerNumber</code> should be a number");'
  - text: Переменный <code>player</code> должен быть строкой
    testString: 'assert(typeof player === "string", "The variable <code>player</code> should be a string");'
  - text: 'Ценность <code>player</code> должна быть «Монтана»,'
    testString: 'assert(player === "Montana", "The value of <code>player</code> should be "Montana"");'
  - text: Для доступа к <code>testObj</code> вы должны использовать нотацию в виде <code>testObj</code>
    testString: 'assert(/testObj\s*?\[.*?\]/.test(code),"You should use bracket notation to access <code>testObj</code>");'
  - text: Вы не должны назначать значение <code>Montana</code> для переменной <code>player</code> напрямую.
    testString: 'assert(!code.match(/player\s*=\s*"|\"\s*Montana\s*"|\"\s*;/gi),"You should not assign the value <code>Montana</code> to the variable <code>player</code> directly.");'
  - text: Вы должны использовать переменную <code>playerNumber</code> в нотации вашего кронштейна
    testString: 'assert(/testObj\s*?\[\s*playerNumber\s*\]/.test(code),"You should be using the variable <code>playerNumber</code> in your bracket notation");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line;

var playerNumber;       // Change this Line
var player = testObj;   // Change this Line

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
