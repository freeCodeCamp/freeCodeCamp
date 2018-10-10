---
id: 587d7b87367417b2b2512b3f
title: Explore Differences Between the var and let Keywords
challengeType: 1
videoUrl: ''
localeTitle: Исследуйте различия между ключевыми словами var и let
---

## Description
<section id="description"> Одна из самых больших проблем с объявлением переменных с ключевым словом <code>var</code> заключается в том, что вы можете перезаписывать объявления переменных без ошибок. <blockquote> var camper = &#39;Джеймс&#39;; <br> var camper = &#39;David&#39;; <br> console.log (отдыхающий); <br> // logs &#39;David&#39; </blockquote> Как вы можете видеть в приведенном выше коде, переменная <code>camper</code> изначально объявляется <code>James</code> а затем переопределяется как <code>David</code> . В небольшом приложении вы можете не столкнуться с этой проблемой, но когда ваш код станет больше, вы можете случайно перезаписать переменную, которую вы не намеревались перезаписать. Поскольку это поведение не вызывает ошибки, поиск и исправление ошибок усложняется. <br> В ES6 было введено новое ключевое слово с именем <code>let</code> чтобы решить эту потенциальную проблему с помощью ключевого слова <code>var</code> . Если вы заменили <code>var</code> с <code>let</code> в объявлениях переменных вышеприведенного кода, результатом будет ошибка. <blockquote> пусть кемпер = «Джеймс»; <br> пусть кемпер = «Дэвид»; // выдает ошибку </blockquote> Эту ошибку можно увидеть в консоли вашего браузера. Таким образом, в отличие от <code>var</code> , при использовании <code>let</code> переменная с тем же именем может быть объявлена ​​только один раз. Обратите внимание на <code>&quot;use strict&quot;</code> . Это позволяет использовать Strict Mode, который ловит ошибки общего кодирования и «небезопасные» действия. Например: <blockquote> «использовать строгую»; <br> x = 3,14; // выдает ошибку, поскольку x не объявляется </blockquote></section>

## Instructions
<section id="instructions"> Обновите код, чтобы использовать ключевое слово <code>let</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>var</code> не существует в коде.
    testString: 'getUserInput => assert(!getUserInput("index").match(/var/g),"<code>var</code> does not exist in code.");'
  - text: <code>catName</code> должен быть <code>Oliver</code> .
    testString: 'assert(catName === "Oliver", "<code>catName</code> should be <code>Oliver</code>.");'
  - text: <code>quote</code> должна быть <code>&quot;Oliver says Meow!&quot;</code>
    testString: 'assert(quote === "Oliver says Meow!", "<code>quote</code> should be <code>"Oliver says Meow!"</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var catName;
var quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
