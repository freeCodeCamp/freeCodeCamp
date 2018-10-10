---
id: 587d7dba367417b2b2512ba8
title: Check for All or None
challengeType: 1
videoUrl: ''
localeTitle: Проверить все или нет.
---

## Description
<section id="description"> Иногда шаблоны, которые вы хотите найти, могут иметь части, которые могут или не могут существовать. Однако, тем не менее, может быть важно проверить их. Вы можете указать возможное существование элемента с вопросительным знаком <code>?</code> , Это проверяет нуль или один из предыдущего элемента. Вы можете думать об этом символе как о том, что предыдущий элемент является необязательным. Например, есть небольшие отличия в американском и британском английском, и вы можете использовать знак вопроса, чтобы соответствовать обоим написаниям. <blockquote> let american = &quot;color&quot;; <br> let british = &quot;color&quot;; <br> let rainbowRegex = / colou? r /; <br> rainbowRegex.test (американский); // Возвращает true <br> rainbowRegex.test (Великобритания); // Возвращает true </blockquote></section>

## Instructions
<section id="instructions"> Измените regex <code>favRegex</code> чтобы он соответствовал английской (любимой) и английской (любимой) версии слова. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Ваше регулярное выражение должно использовать необязательный символ <code>?</code> ,'
    testString: 'assert(favRegex.source.match(/\?/).length > 0, "Your regex should use the optional symbol, <code>?</code>.");'
  - text: Ваше регулярное выражение должно соответствовать <code>&quot;favorite&quot;</code>
    testString: 'assert(favRegex.test("favorite"), "Your regex should match <code>"favorite"</code>");'
  - text: Ваше регулярное выражение должно соответствовать <code>&quot;favourite&quot;</code>
    testString: 'assert(favRegex.test("favourite"), "Your regex should match <code>"favourite"</code>");'
  - text: Ваше регулярное выражение не должно совпадать с <code>&quot;fav&quot;</code>
    testString: 'assert(!favRegex.test("fav"), "Your regex should not match <code>"fav"</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let favWord = "favorite";
let favRegex = /change/; // Change this line
let result = favRegex.test(favWord);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
