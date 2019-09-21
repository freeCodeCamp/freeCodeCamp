---
id: 56533eb9ac21ba0edf2244c8
title: Accessing Object Properties with Bracket Notation
challengeType: 1
videoUrl: https://scrimba.com/c/cBvmEHP
forumTopicId: 16163
localeTitle: Доступ к объектным свойствам с помощью скобок
---

## Description
<section id='description'>
Второй способ доступа к свойствам объекта - это скобки нотации ( <code>[]</code> ). Если свойство объекта, к которому вы пытаетесь получить доступ, имеет пробел в своем имени, вам нужно будет использовать нотацию в виде скобок. Тем не менее, вы все равно можете использовать нотацию нот для объектов без пробелов. Ниже приведен пример использования обозначения скобок для чтения свойства объекта: <blockquote> var myObj = { <br> «Space Name»: «Kirk», <br> «Больше пространства»: «Спок», <br> «NoSpace»: «USS Enterprise» <br> }; <br> myObj [&quot;Space Name&quot;]; // Кирк <br> myObj [&#39;More Space&#39;]; // Спок <br> myObj [ &quot;NoSpace&quot;]; // USS Enterprise </blockquote> Обратите внимание, что имена свойств с пробелами в них должны быть в кавычках (один или два).
</section>

## Instructions
<section id='instructions'>
Прочитайте значения свойств <code>&quot;an entree&quot;</code> и <code>&quot;the drink&quot;</code> <code>testObj</code> с использованием скобкой и назначьте их <code>entreeValue</code> и <code>drinkValue</code> соответственно.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>entreeValue</code> should be a string
    testString: assert(typeof entreeValue === 'string' );
  - text: The value of <code>entreeValue</code> should be <code>"hamburger"</code>
    testString: assert(entreeValue === 'hamburger' );
  - text: <code>drinkValue</code> should be a string
    testString: assert(typeof drinkValue === 'string' );
  - text: The value of <code>drinkValue</code> should be <code>"water"</code>
    testString: assert(drinkValue === 'water' );
  - text: You should use bracket notation twice
    testString: assert(code.match(/testObj\s*?\[('|")[^'"]+\1\]/g).length > 1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj;   // Change this line
var drinkValue = testObj;    // Change this line

```

</div>

### After Tests
<div id='js-teardown'>

```js
(function(a,b) { return "entreeValue = '" + a + "', drinkValue = '" + b + "'"; })(entreeValue,drinkValue);

```

</div>

</section>

## Solution
<section id='solution'>

```js
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
var entreeValue = testObj["an entree"];
var drinkValue = testObj['the drink'];
```

</section>
