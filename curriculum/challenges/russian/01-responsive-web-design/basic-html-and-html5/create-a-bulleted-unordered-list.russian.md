---
id: bad87fee1348bd9aedf08827
title: Create a Bulleted Unordered List
challengeType: 0
videoUrl: ''
localeTitle: Создать маркированный неупорядоченный список
---

## Description
<section id="description"> HTML имеет специальный элемент для создания <code>unordered lists</code> или списков стилей в стиле пули. Неупорядоченные списки начинаются с элемента открытия <code>&lt;ul&gt;</code> , за которым следует любое количество элементов <code>&lt;li&gt;</code> . Наконец, неупорядоченные списки закрываются с помощью <code>&lt;/ul&gt;</code> Например: <blockquote> &lt;UL&gt; <br> &lt;Li&gt; молоко &lt;/ li&gt; <br> &lt;Li&gt; сыр &lt;/ li&gt; <br> &lt;/ UL&gt; </blockquote> создаст список стиля пули «молоко» и «сыр». </section>

## Instructions
<section id="instructions"> Удалите последние два элемента <code>p</code> и создайте неупорядоченный список из трех вещей, которые любят кошки в нижней части страницы. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Создайте элемент <code>ul</code> .
    testString: 'assert($("ul").length > 0, "Create a <code>ul</code> element.");'
  - text: У вас должно быть три элемента <code>li</code> в вашем элементе <code>ul</code> .
    testString: 'assert($("ul li").length > 2, "You should have three <code>li</code> elements within your <code>ul</code> element.");'
  - text: 'Убедитесь, что ваш элемент <code>ul</code> имеет закрывающий тег.'
    testString: 'assert(code.match(/<\/ul>/gi) && code.match(/<ul/gi) && code.match(/<\/ul>/gi).length === code.match(/<ul/gi).length, "Make sure your <code>ul</code> element has a closing tag.");'
  - text: 'Убедитесь, что ваши элементы <code>li</code> закрывают теги.'
    testString: 'assert(code.match(/<\/li>/gi) && code.match(/<li[\s>]/gi) && code.match(/<\/li>/gi).length === code.match(/<li[\s>]/gi).length, "Make sure your <code>li</code> elements have closing tags.");'
  - text: Убедитесь, что ваши элементы <code>li</ code> не содержат пустую строку или только пробел.
    testString: assert($("ul li").filter((_, item) => !$(item).text().trim()).length === 0, 'Make sure your <code>li</code> elements don\’t contain an empty string or only white-space.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

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
