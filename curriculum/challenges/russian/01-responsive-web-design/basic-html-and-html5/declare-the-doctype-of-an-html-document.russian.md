---
id: 587d78aa367417b2b2512aed
title: Declare the Doctype of an HTML Document
challengeType: 0
videoUrl: ''
localeTitle: Объявить Doctype HTML-документа
---

## Description
<section id="description"> Вызовы до сих пор охватывали конкретные элементы HTML и их использование. Однако есть несколько элементов, которые дают общую структуру вашей странице и должны быть включены в каждый HTML-документ. В верхней части документа вам нужно указать браузеру, какую версию HTML использует ваша страница. HTML является развивающимся языком и регулярно обновляется. Большинство основных браузеров поддерживают самую последнюю спецификацию, которая является HTML5. Однако старые веб-страницы могут использовать предыдущие версии языка. Вы сообщите браузеру эту информацию, добавив в первую строку тег <code>&lt;!DOCTYPE ...&gt;</code> , где « <code>...</code> » - это версия HTML. Для HTML5 вы используете <code>&lt;!DOCTYPE html&gt;</code> . <code>!</code> и верхний регистр <code>DOCTYPE</code> важен, особенно для старых браузеров. <code>html</code> не чувствителен к регистру. Далее, весь ваш HTML-код необходимо обернуть в теги <code>html</code> . Открытие <code>&lt;html&gt;</code> идет непосредственно под линией <code>&lt;!DOCTYPE html&gt;</code> , а закрытие <code>&lt;/html&gt;</code> идет в конце страницы. Вот пример структуры страницы: <blockquote> &lt;! DOCTYPE html&gt; <br> &lt;HTML&gt; <br> &lt;! - Ваш HTML-код идет здесь -&gt; <br> &lt;/ Html&gt; </blockquote></section>

## Instructions
<section id="instructions"> Добавьте тег <code>DOCTYPE</code> для HTML5 в начало пустого документа HTML в редакторе кода. Под ним добавьте открывающие и закрывающие теги <code>html</code> , которые обертывают вокруг элемента <code>h1</code> . Заголовок может включать любой текст. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш код должен содержать <code>&lt;!DOCTYPE html&gt;</code> .
    testString: 'assert(code.match(/<!DOCTYPE\s+?html\s*?>/gi), "Your code should include a <code>&lt;!DOCTYPE html&gt;</code> tag.");'
  - text: Должен быть один элемент <code>html</code> .
    testString: 'assert($("html").length == 1, "There should be one <code>html</code> element.");'
  - text: Теги <code>html</code> должны охватывать один элемент <code>h1</code> .
    testString: 'assert(code.match(/<html>\s*?<h1>\s*?.*?\s*?<\/h1>\s*?<\/html>/gi), "The <code>html</code> tags should wrap around one <code>h1</code> element.");'

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
