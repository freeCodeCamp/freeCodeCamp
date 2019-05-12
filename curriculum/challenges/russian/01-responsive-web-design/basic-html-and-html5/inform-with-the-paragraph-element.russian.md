---
id: bad87fee1348bd9aedf08801
title: Inform with the Paragraph Element
challengeType: 0
videoUrl: ''
localeTitle: Передайте информацию с помощью элемента "параграф"
---

## Описание
<section id="description"> Для создания текста параграфа веб-сайта лучше использовать элемент <code>p</code>. <code>p</code> - это сокращение от слова «paragraph» (параграф). Вы можете создать параграф с этим элементом следующим образом: <code>&lt;p&gt;I&#39;m a p tag!&lt;/p&gt;</code> </section>

## Инструкции
<section id="instructions"> Создайте <code>p</code> элемент под вашим элементом <code>h2</code> с текстом «Hello Paragraph». </section>

## Тесты
<section id='tests'>

```yml
tests:
  - text: Создайте элемент <code>p</code> .
    testString: 'assert(($("p").length > 0), "Create a <code>p</code> element.");'
  - text: Ваш элемент <code>p</code> должен иметь текст «Hello Paragraph».
    testString: 'assert.isTrue((/hello(\s)+paragraph/gi).test($("p").text()), "Your <code>p</code> element should have the text "Hello Paragraph".");'
  - text: 'Убедитесь, что ваш элемент <code>p</code> имеет конечный тег.'
    testString: 'assert(code.match(/<\/p>/g) && code.match(/<\/p>/g).length === code.match(/<p/g).length, "Make sure your <code>p</code> element has a closing tag.");'

```

</section>

## Исходной код
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>

```

</div>



</section>

## Решение
<section id='solution'>

```js
// solution required
```
</section>
