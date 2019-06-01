---
id: bad87fee1348bd9aec908846
title: Create a Bootstrap Headline
challengeType: 0
videoUrl: ''
localeTitle: Создать заголовок Bootstrap
---

## Description
<section id="description"> Теперь давайте построим что-то с нуля, чтобы практиковать наши навыки HTML, CSS и Bootstrap. Мы построим игровую площадку jQuery, которую мы скоро станем использовать в наших задачах jQuery. Для начала создайте элемент <code>h3</code> с текстовой <code>jQuery Playground</code> . Разделите свой элемент <code>h3</code> <code>text-primary</code> исходным классом Bootstrap и центрируйте его с помощью <code>text-center</code> Bootstrap. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Добавьте элемент <code>h3</code> на свою страницу.
    testString: 'assert($("h3") && $("h3").length > 0, "Add a <code>h3</code> element to your page.");'
  - text: 'Убедитесь, что ваш элемент <code>h3</code> имеет закрывающий тег.'
    testString: 'assert(code.match(/<\/h3>/g) && code.match(/<h3/g) && code.match(/<\/h3>/g).length === code.match(/<h3/g).length, "Make sure your <code>h3</code> element has a closing tag.");'
  - text: 'Ваш элемент <code>h3</code> должен стать цветным, применяя <code>text-primary</code> класса <code>text-primary</code>'
    testString: 'assert($("h3").hasClass("text-primary"), "Your <code>h3</code> element should be colored by applying the class <code>text-primary</code>");'
  - text: 'Ваш элемент <code>h3</code> должен быть центрирован, применяя <code>text-center</code> класса'
    testString: 'assert($("h3").hasClass("text-center"), "Your <code>h3</code> element should be centered by applying the class <code>text-center</code>");'
  - text: Ваш элемент <code>h3</code> должен иметь текстовый формат <code>jQuery Playground</code> .
    testString: 'assert.isTrue((/jquery(\s)+playground/gi).test($("h3").text()), "Your <code>h3</code> element should have the text <code>jQuery Playground</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
