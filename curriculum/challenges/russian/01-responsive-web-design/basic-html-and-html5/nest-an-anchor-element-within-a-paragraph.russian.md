---
id: bad87fee1348bd9aede08817
title: Nest an Anchor Element within a Paragraph
challengeType: 0
videoUrl: ''
localeTitle: Гнездо анкерного элемента в абзаце
---

## Description
<section id="description"> Вы можете вставлять ссылки в другие текстовые элементы. <blockquote> &lt;Р&gt; <br> Вот вам ссылка &lt;a target=&quot;_blank&quot; href=&quot;http://freecodecamp.org&quot;&gt; на freecodecamp.org &lt;/a&gt; для вас. <br> &lt;/ Р&gt; </blockquote> Давайте разберем пример: Обычный текст завернут в элемент <code>p</code> : <br> <code>&lt;p&gt; Here&#39;s a ... for you to follow. &lt;/p&gt;</code> Следующий элемент <code>anchor</code> <code>&lt;a&gt;</code> (для которого требуется закрывающий тег <code>&lt;/a&gt;</code> ): <br> <code>&lt;a&gt; ... &lt;/a&gt;</code> <code>target</code> - это атрибут тега привязки, который указывает, где можно открыть ссылку, а значение <code>&quot;_blank&quot;</code> указывает на открытие ссылки на новой вкладке. <code>href</code> является атрибутом тега привязки, который содержит URL-адрес связь: <br> <code>&lt;a href=&quot;http://freecodecamp.org&quot;&gt; ... &lt;/a&gt;</code> В тексте, <strong>«ссылка на freecodecamp.org»</strong> , в элементе <code>anchor text</code> , который называется <code>anchor text</code> , будет отображаться ссылка: <br> <code>&lt;a href=&quot; ... &quot;&gt;link to freecodecamp.org&lt;/a&gt;</code> Окончательный результат примера будет выглядеть так: <br><p> Вот <a target="_blank" href="http://freecodecamp.org">ссылка на freecodecamp.org</a> для вас. </p></section>

## Instructions
<section id="instructions"> Теперь гнездо уже существующий <code>a</code> элемент в новом <code>p</code> элемент (только после того, как существующего <code>main</code> элемента). В новом абзаце должен быть текст с надписью «Просмотр фотографий кошек», где «фотографии кошек» - это ссылка, а остальная часть текста - простой текст. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Вам нужно <code>a</code> элемент , который связывает с «http://freecatphotoapp.com».'
    testString: 'assert(($("a[href=\"http://freecatphotoapp.com\"]").length > 0 || $("a[href=\"http://www.freecatphotoapp.com\"]").length > 0), "You need an <code>a</code> element that links to "http://freecatphotoapp.com".");'
  - text: Ваш элемент должен иметь якорный текст «кошачьи фотографии» <code>a</code>
    testString: 'assert($("a").text().match(/cat\sphotos/gi), "Your <code>a</code> element should have the anchor text of "cat photos"");'
  - text: 'Создать новый <code>p</code> элемент вокруг вашего <code>a</code> элементе. Там должно быть , по крайней мере , 3 всего <code>p</code> теги в вашем HTML коде.'
    testString: 'assert($("p") && $("p").length > 2, "Create a new <code>p</code> element around your <code>a</code> element. There should be at least 3 total <code>p</code> tags in your HTML code.");'
  - text: Ваш элемент должен быть вложен в вашем новом <code>a</code> <code>p</code> элемент.
    testString: 'assert(($("a[href=\"http://freecatphotoapp.com\"]").parent().is("p") || $("a[href=\"http://www.freecatphotoapp.com\"]").parent().is("p")), "Your <code>a</code> element should be nested within your new <code>p</code> element.");'
  - text: Ваш элемент <code>p</code> должен иметь текст «Просмотреть больше» (с пробелом после него).
    testString: 'assert(($("a[href=\"http://freecatphotoapp.com\"]").parent().text().match(/View\smore\s/gi) || $("a[href=\"http://www.freecatphotoapp.com\"]").parent().text().match(/View\smore\s/gi)), "Your <code>p</code> element should have the text "View more " (with a space after it).");'
  - text: Ваш элемент <em>не</em> должен иметь текст «Больше». <code>a</code>
    testString: 'assert(!$("a").text().match(/View\smore/gi), "Your <code>a</code> element should <em>not</em> have the text "View more".");'
  - text: 'Убедитесь, что каждый из ваших <code>p</code> элементов имеет закрывающий тег.'
    testString: 'assert(code.match(/<\/p>/g) && code.match(/<p/g) && code.match(/<\/p>/g).length === code.match(/<p/g).length, "Make sure each of your <code>p</code> elements has a closing tag.");'
  - text: 'Убедитесь , что каждый из ваших <code>a</code> элементы закрывающий тег.'
    testString: 'assert(code.match(/<\/a>/g) && code.match(/<a/g) && code.match(/<\/a>/g).length === code.match(/<a/g).length, "Make sure each of your <code>a</code> elements has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>

  <a href="http://freecatphotoapp.com" target="_blank">cat photos</a>

  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
