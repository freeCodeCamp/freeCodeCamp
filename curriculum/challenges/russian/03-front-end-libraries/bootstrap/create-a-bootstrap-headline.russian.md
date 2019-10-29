---
id: bad87fee1348bd9aec908846
title: Create a Bootstrap Headline
challengeType: 0
forumTopicId: 16812
localeTitle: Создать заголовок Bootstrap
---

## Description
<section id='description'>
Теперь давайте построим что-то с нуля, чтобы практиковать наши навыки HTML, CSS и Bootstrap. Мы построим игровую площадку jQuery, которую мы скоро станем использовать в наших задачах jQuery. Для начала создайте элемент <code>h3</code> с текстовой <code>jQuery Playground</code> . Разделите свой элемент <code>h3</code> <code>text-primary</code> исходным классом Bootstrap и центрируйте его с помощью <code>text-center</code> Bootstrap.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Add a <code>h3</code> element to your page.
    testString: assert($("h3") && $("h3").length > 0);
  - text: Make sure your <code>h3</code> element has a closing tag.
    testString: assert(code.match(/<\/h3>/g) && code.match(/<h3/g) && code.match(/<\/h3>/g).length === code.match(/<h3/g).length);
  - text: Your <code>h3</code> element should be colored by applying the class <code>text-primary</code>
    testString: assert($("h3").hasClass("text-primary"));
  - text: Your <code>h3</code> element should be centered by applying the class <code>text-center</code>
    testString: assert($("h3").hasClass("text-center"));
  - text: Your <code>h3</code> element should have the text <code>jQuery Playground</code>.
    testString: assert.isTrue((/jquery(\s)+playground/gi).test($("h3").text()));

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

```html
<h3 class="text-primary text-center">jQuery Playground</h3>
```

</section>
