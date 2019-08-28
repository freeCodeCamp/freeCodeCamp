---
id: 587d78aa367417b2b2512aed
title: Declare the Doctype of an HTML Document
challengeType: 0
videoUrl: https://scrimba.com/p/pVMPUv/cra98AJ
forumTopicId: 301095
localeTitle: Объявить Doctype HTML-документа
---

## Description
<section id='description'>
Упражнения до сих пор охватывали конкретные элементы HTML и их использование. Однако есть несколько элементов, которые дают общую структуру вашей странице и должны быть включены в каждый HTML-документ. В верхней части документа вам нужно указать браузеру, какую версию HTML использует ваша страница. HTML развивающийся язык и регулярно обновляется. Большинство браузеров поддерживают самую последнюю спецификацию—HTML5, но старые веб-страницы могут использовать предыдущие версии языка. Чтобы сообщить браузеру какую версию HTML использовать нужно добавить следующий тег в первую строку вашего документа <code>&lt;!DOCTYPE ...&gt;</code> , где « <code>...</code> » - это версия HTML. Для HTML5 вы используете <code>&lt;!DOCTYPE html&gt;</code> . <code>!</code> и <code>DOCTYPE</code> должно быть написано заглавными буквами, особенно для старых браузеров. Далее, весь ваш HTML-код необходимо обернуть в теги <code>html</code> . Открытие <code>&lt;html&gt;</code> идет непосредственно под линией <code>&lt;!DOCTYPE html&gt;</code> , а закрытие <code>&lt;/html&gt;</code> идет в конце страницы. Вот пример структуры страницы: <blockquote> &lt;! DOCTYPE html&gt; <br> &lt;HTML&gt; <br> &lt;! - Ваш HTML-код идет здесь -&gt; <br> &lt;/ Html&gt; </blockquote>
</section>

## Instructions
<section id='instructions'>
Добавьте тег <code>DOCTYPE</code> для HTML5 в начало пустого документа HTML в редакторе кода. Под ним добавьте открывающие и закрывающие теги <code>html</code> , которые обертывают вокруг элемента <code>h1</code> . Заголовок может включать любой текст.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should include a <code>&lt;!DOCTYPE html&gt;</code> tag.
    testString: assert(code.match(/<!DOCTYPE\s+?html\s*?>/gi));
  - text: There should be one <code>html</code> element.
    testString: assert($('html').length == 1);
  - text: The <code>html</code> tags should wrap around one <code>h1</code> element.
    testString: assert(code.match(/<html>\s*?<h1>\s*?.*?\s*?<\/h1>\s*?<\/html>/gi));

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
<!DOCTYPE html>
<html>
  <h1> Hello world </h1>
</html>
```

</section>
