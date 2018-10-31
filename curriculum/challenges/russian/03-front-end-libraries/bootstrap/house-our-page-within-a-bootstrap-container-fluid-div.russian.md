---
id: bad87fee1348bd9aec908746
title: House our page within a Bootstrap container-fluid div
challengeType: 0
videoUrl: ''
localeTitle: Разместите нашу страницу в контейнере-контейнере Bootstrap div
---

## Description
<section id="description"> Теперь давайте убедимся, что все содержимое вашей страницы мобильно реагирует. Давайте вложим ваш элемент <code>h3</code> элемент <code>div</code> с <code>container-fluid</code> класса. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш элемент <code>div</code> должен иметь <code>container-fluid</code> класса.
    testString: 'assert($("div").hasClass("container-fluid"), "Your <code>div</code> element should have the class <code>container-fluid</code>.");'
  - text: 'Убедитесь, что каждый из ваших элементов <code>div</code> имеет закрывающий тег.'
    testString: 'assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length, "Make sure each of your <code>div</code> elements has a closing tag.");'
  - text: Гнездо вашего элемента <code>h3</code> внутри элемента <code>div</code> .
    testString: 'assert($("div").children("h3").length >0, "Nest your <code>h3</code> element inside a <code>div</code> element.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h3 class="text-primary text-center">jQuery Playground</h3>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
