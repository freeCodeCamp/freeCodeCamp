---
id: bad87fee1348bd9aedf08827
title: Create a Bulleted Unordered List
challengeType: 0
videoUrl: https://scrimba.com/p/pVMPUv/cDKVPuv
forumTopicId: 16814
localeTitle: Создать маркированный неупорядоченный список
---

## Description
<section id='description'>
HTML имеет специальный элемент для создания <code>unordered lists</code> или списков стилей в стиле пули. Неупорядоченные списки начинаются с элемента открытия <code>&lt;ul&gt;</code> , за которым следует любое количество элементов <code>&lt;li&gt;</code> . Наконец, неупорядоченные списки закрываются с помощью <code>&lt;/ul&gt;</code> Например: <blockquote> &lt;UL&gt; <br> &lt;Li&gt; молоко &lt;/ li&gt; <br> &lt;Li&gt; сыр &lt;/ li&gt; <br> &lt;/ UL&gt; </blockquote> создаст список стиля пули «молоко» и «сыр».
</section>

## Instructions
<section id='instructions'>
Удалите последние два элемента <code>p</code> и создайте неупорядоченный список из трех вещей, которые любят кошки в нижней части страницы.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Create a <code>ul</code> element.
    testString: assert($("ul").length > 0);
  - text: You should have three <code>li</code> elements within your <code>ul</code> element.
    testString: assert($("ul li").length > 2);
  - text: Make sure your <code>ul</code> element has a closing tag.
    testString: assert(code.match(/<\/ul>/gi) && code.match(/<ul/gi) && code.match(/<\/ul>/gi).length === code.match(/<ul/gi).length);
  - text: Make sure your <code>li</code> elements have closing tags.
    testString: assert(code.match(/<\/li>/gi) && code.match(/<li[\s>]/gi) && code.match(/<\/li>/gi).length === code.match(/<li[\s>]/gi).length);
  - text: Make sure your <code>li</code> elements don’t contain an empty string or only white-space.
    testString: assert($("ul li").filter((_, item) => !$(item).text().trim()).length === 0);

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

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <ul>
    <li>milk</li>
    <li>mice</li>
    <li>catnip</li>
  </ul>
</main>
```

</section>
