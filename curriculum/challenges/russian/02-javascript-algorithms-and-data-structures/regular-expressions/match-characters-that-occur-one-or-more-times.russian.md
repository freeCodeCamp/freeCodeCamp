---
id: 587d7db6367417b2b2512b99
title: Match Characters that Occur One or More Times
challengeType: 1
forumTopicId: 301350
localeTitle: Символы, которые встречаются один или несколько раз
---

## Description
<section id='description'>
Иногда вам нужно сопоставить символ (или группу символов), который появляется один или несколько раз подряд. Это означает, что это происходит по крайней мере один раз и может повторяться. Вы можете использовать символ <code>+</code> чтобы проверить, так ли это. Помните, что персонаж или шаблон должны присутствовать последовательно. То есть, персонаж должен повторять один за другим. Например, <code>/a+/g</code> найдет одно совпадение в <code>&quot;abc&quot;</code> и вернет <code>[&quot;a&quot;]</code> . Из-за <code>+</code> , он также найдет одно совпадение в <code>&quot;aabc&quot;</code> и вернет <code>[&quot;aa&quot;]</code> . Если бы это было вместо проверки строки <code>&quot;abab&quot;</code> , было бы найти два матча и вернуться <code>[&quot;a&quot;, &quot;a&quot;]</code> , потому что <code>a</code> символы не в ряд - есть <code>b</code> между ними. Наконец, поскольку в строке <code>&quot;bcd&quot;</code> нет <code>&quot;a&quot;</code> <code>&quot;bcd&quot;</code> , он не найдет соответствия.
</section>

## Instructions
<section id='instructions'>
Вы хотите , чтобы найти спички , когда буква <code>s</code> происходит один или несколько раз в <code>&quot;Mississippi&quot;</code> . Напишите регулярное выражение, которое использует знак <code>+</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your regex <code>myRegex</code> should use the <code>+</code> sign to match one or more <code>s</code> characters.
    testString: assert(/\+/.test(myRegex.source));
  - text: Your regex <code>myRegex</code> should match 2 items.
    testString: assert(result.length == 2);
  - text: The <code>result</code> variable should be an array with two matches of <code>"ss"</code>
    testString: assert(result[0] == 'ss' && result[1] == 'ss');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let difficultSpelling = "Mississippi";
let myRegex = /change/; // Change this line
let result = difficultSpelling.match(myRegex);

```

</div>

</section>

## Solution
<section id='solution'>

```js
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);
```

</section>
