---
id: 587d7b84367417b2b2512b37
title: Catch Mixed Usage of Single and Double Quotes
challengeType: 1
videoUrl: ''
localeTitle: Поймать смешанное использование одиночных и двойных котировок
---

## Description
<section id="description"> JavaScript позволяет использовать одиночные («) и двойные (« ») кавычки для объявления строки. Решая, какой из них использовать, как правило, сводится к личным предпочтениям, за некоторыми исключениями. Имея два варианта, отлично, когда строка имеет сжатие или другое кусок текста, который находится в кавычках. Будьте осторожны, чтобы вы не закрывали строку слишком рано, что вызывает синтаксическую ошибку. Вот несколько примеров смешивания цитат: <blockquote> // Это правильно: <br> const grouchoContraction = «У меня был замечательный вечер, но это было не так»; <br> const quoteInString = «Граучо Маркс однажды сказал:« Мне нужно сказать, что я ошибался ». <br> // Это неверно: <br> const uhOhGroucho = &#39;У меня был замечательный вечер, но это было не так.&#39;; </blockquote> Конечно, можно использовать только один стиль цитат. Вы можете избежать кавычек внутри строки, используя символ обратного слэша (\): <blockquote> // Правильное использование одинаковых котировок: <br> const allSameQuotes = &#39;У меня был замечательный вечер, но это было не так.&#39;; </blockquote></section>

## Instructions
<section id="instructions"> Исправьте строку, чтобы она использовала разные кавычки для значения <code>href</code> или избегала существующих. Сохраняйте двойные кавычки вокруг всей строки. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Ваш код должен исправить кавычки вокруг значения <code>href</code> «#Home», либо изменив, либо ускоряя их.'
    testString: 'assert(code.match(/<a href=\s*?("|\\")#Home\1\s*?>/g), "Your code should fix the quotes around the <code>href</code> value "#Home" by either changing or escaping them.");'
  - text: Ваш код должен содержать двойные кавычки по всей строке.
    testString: 'assert(code.match(/"<p>.*?<\/p>";/g), "Your code should keep the double quotes around the entire string.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
console.log(innerHtml);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
