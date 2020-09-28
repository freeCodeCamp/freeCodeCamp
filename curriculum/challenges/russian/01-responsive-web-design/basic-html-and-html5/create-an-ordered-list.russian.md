---
id: bad87fee1348bd9aedf08828
title: Create an Ordered List
challengeType: 0
videoUrl: https://scrimba.com/p/pVMPUv/cQ3B8TM
forumTopicId: 16824
localeTitle: Создание упорядоченного списка
---

## Description
<section id='description'>
HTML имеет еще один специальный элемент для создания <code>ordered lists</code> или нумерованных списков. Упорядоченные списки начинаются с элемента <code>&lt;ol&gt;</code> , за которым следует любое количество элементов <code>&lt;li&gt;</code>. Наконец, упорядоченные списки закрываются с помощью <code>&lt;/ol&gt;</code> Например: <blockquote> &lt;ol&gt; <br> &lt;Li&gt; Гарфилд &lt;/ li&gt; <br> &lt;Li&gt; Сильвестр &lt;/ li&gt; <br> &lt;/ ol&gt; </blockquote> создаст нумерованный список «Гарфилд» и «Сильвестр».
</section>

## Instructions
<section id='instructions'>
Создайте упорядоченный список из 3 лучших вещей, которые кошки ненавидят больше всего.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should have an ordered list for "Top 3 things cats hate:"
    testString: assert((/Top 3 things cats hate:/i).test($("ol").prev().text()));
  - text: You should have an unordered list for "Things cats love:"
    testString: assert((/Things cats love:/i).test($("ul").prev().text()));
  - text: You should have only one <code>ul</code> element.
    testString: assert.equal($("ul").length, 1);
  - text: You should have only one <code>ol</code> element.
    testString: assert.equal($("ol").length, 1);
  - text: You should have three <code>li</code> elements within your <code>ul</code> element.
    testString: assert.equal($("ul li").length, 3);
  - text: You should have three <code>li</code> elements within your <code>ol</code> element.
    testString: assert.equal($("ol li").length, 3);
  - text: Make sure your <code>ul</code> element has a closing tag.
    testString: assert(code.match(/<\/ul>/g) && code.match(/<\/ul>/g).length === code.match(/<ul>/g).length);
  - text: Make sure your <code>ol</code> element has a closing tag.
    testString: assert(code.match(/<\/ol>/g) && code.match(/<\/ol>/g).length === code.match(/<ol>/g).length);
  - text: Make sure your <code>li</code> element has a closing tag.
    testString: assert(code.match(/<\/li>/g) && code.match(/<li>/g) && code.match(/<\/li>/g).length === code.match(/<li>/g).length);
  - text: The <code>li</code> elements in your unordered list should not be empty.
    testString: $('ul li').each((i, val) => assert(val.textContent.replace(/\s/g, '')));
  - text: The <code>li</code> elements in your ordered list should not be empty.
    testString: $('ol li').each((i, val) => assert(!!val.textContent.replace(/\s/g, '')));

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

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>

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

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>hate 1</li>
    <li>hate 2</li>
    <li>hate 3</li>
  </ol>
</main>
```

</section>
