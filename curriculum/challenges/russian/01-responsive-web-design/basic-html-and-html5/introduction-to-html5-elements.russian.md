---
id: bad87fee1348bd9aecf08801
title: Introduction to HTML5 Elements
challengeType: 0
videoUrl: ''
localeTitle: Введение в элементы HTML5
---

## Description
<section id="description"> HTML5 вводит более описательные HTML-теги. К ним относятся <code>header</code> , <code>footer</code> , <code>nav</code> , <code>video</code> , <code>article</code> , <code>section</code> и другие. Эти теги упрощают чтение вашего HTML, а также помогают в поисковой оптимизации (SEO) и доступности. <code>main</code> тег HTML5 помогает поисковым системам и другим разработчикам находить основное содержимое вашей страницы. <strong>Заметка</strong> <br> Многие из новых тегов HTML5 и их преимущества описаны в разделе «Прикладная доступность». </section>

## Instructions
<section id="instructions"> Создайте второй элемент <code>p</code> после существующего элемента <code>p</code> со следующим текстом <code>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</code> kitty: <code>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</code> Оберните абзацы с помощью <code>main</code> и закрывающего <code>main</code> тега. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Вам нужны 2 <code>p</code> элемента с текстом Китти Ipsum.
    testString: 'assert($("p").length > 1, "You need 2 <code>p</code> elements with Kitty Ipsum text.");'
  - text: 'Убедитесь, что каждый из ваших <code>p</code> элементов имеет закрывающий тег.'
    testString: 'assert(code.match(/<\/p>/g) && code.match(/<\/p>/g).length === code.match(/<p/g).length, "Make sure each of your <code>p</code> elements has a closing tag.");'
  - text: ''
    testString: 'assert.isTrue((/Purr\s+jump\s+eat/gi).test($("p").text()), "Your <code>p</code> element should contain the first few words of the provided additional <code>kitty ipsum text</code>.");'
  - text: Ваш код должен иметь один <code>main</code> элемент.
    testString: 'assert($("main").length === 1, "Your code should have one <code>main</code> element.");'
  - text: <code>main</code> элемент должен содержать два элемента абзаца в качестве детей.
    testString: 'assert($("main").children("p").length === 2, "The <code>main</code> element should have two paragraph elements as children.");'
  - text: <code>main</code> тег открытия должен появиться перед тегом первого абзаца.
    testString: 'assert(code.match(/<main>\s*?<p>/g), "The opening <code>main</code> tag should come before the first paragraph tag.");'
  - text: Закрывающий <code>main</code> тег должен появиться после второго тега абзаца закрытия.
    testString: 'assert(code.match(/<\/p>\s*?<\/main>/g), "The closing <code>main</code> tag should come after the second closing paragraph tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
