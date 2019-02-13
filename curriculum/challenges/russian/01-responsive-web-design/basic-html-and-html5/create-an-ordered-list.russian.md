---
id: bad87fee1348bd9aedf08828
title: Create an Ordered List
challengeType: 0
videoUrl: ''
localeTitle: Создание упорядоченного списка
---

## Description
<section id="description"> HTML имеет еще один специальный элемент для создания <code>ordered lists</code> или нумерованных списков. Упорядоченные списки начинаются с элемента <code>&lt;ol&gt;</code> , за которым следует любое количество элементов <code>&lt;li&gt;</code>. Наконец, упорядоченные списки закрываются с помощью <code>&lt;/ol&gt;</code> Например: <blockquote> &lt;ol&gt; <br> &lt;Li&gt; Гарфилд &lt;/ li&gt; <br> &lt;Li&gt; Сильвестр &lt;/ li&gt; <br> &lt;/ ol&gt; </blockquote> создаст нумерованный список «Гарфилд» и «Сильвестр». </section>

## Instructions
<section id="instructions"> Создайте упорядоченный список из 3 лучших вещей, которые кошки ненавидят больше всего. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'У вас должен быть упорядоченный список для «Топ-3 вещей, которые ненавидят кошки:»'
    testString: 'assert((/Top 3 things cats hate:/i).test($("ol").prev().text()), "You should have an ordered list for "Top 3 things cats hate:"");'
  - text: 'У вас должен быть неупорядоченный список «Вещи, которые любят кошки»:'
    testString: 'assert((/Things cats love:/i).test($("ul").prev().text()), "You should have an unordered list for "Things cats love:"");'
  - text: У вас должен быть только один элемент <code>ul</code> .
    testString: 'assert.equal($("ul").length, 1, "You should have only one <code>ul</code> element.");'
  - text: У вас должен быть только один элемент <code>ol</code> .
    testString: 'assert.equal($("ol").length, 1, "You should have only one <code>ol</code> element.");'
  - text: У вас должно быть три элемента <code>li</code> в вашем элементе <code>ul</code> .
    testString: 'assert.equal($("ul li").length, 3, "You should have three <code>li</code> elements within your <code>ul</code> element.");'
  - text: У вас должно быть три элемента <code>li</code> внутри вашего элемента <code>ol</code> .
    testString: 'assert.equal($("ol li").length, 3, "You should have three <code>li</code> elements within your <code>ol</code> element.");'
  - text: 'Убедитесь, что ваш элемент <code>ul</code> имеет закрывающий тег.'
    testString: 'assert(code.match(/<\/ul>/g) && code.match(/<\/ul>/g).length === code.match(/<ul>/g).length, "Make sure your <code>ul</code> element has a closing tag.");'
  - text: 'Убедитесь, что ваш элемент <code>ol</code> имеет закрывающий тег.'
    testString: 'assert(code.match(/<\/ol>/g) && code.match(/<\/ol>/g).length === code.match(/<ol>/g).length, "Make sure your <code>ol</code> element has a closing tag.");'
  - text: 'Убедитесь, что ваш элемент <code>li</code> имеет закрывающий тег.'
    testString: 'assert(code.match(/<\/li>/g) && code.match(/<li>/g) && code.match(/<\/li>/g).length === code.match(/<li>/g).length, "Make sure your <code>li</code> element has a closing tag.");'

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

```js
// solution required
```
</section>
