---
id: bad87fee1348bd9aedf08812
title: Add Images to Your Website
challengeType: 0
videoUrl: https://scrimba.com/p/pVMPUv/c8EbJf2
forumTopicId: 16640
localeTitle: Добавьте изображения на свой сайт
---

## Description
<section id='description'>
Вы можете добавлять изображения на свой сайт с помощью элемента <code>img</code> и указывать URL-адрес определенного изображения, используя атрибут <code>src</code> . Примером этого может быть: <code>&lt;img src=&quot;https://www.your-image-source.com/your-image.jpg&quot;&gt;</code> Обратите внимание, что элементы <code>img</code> самозакрываются. Все элементы <code>img</code> <strong>должны</strong> иметь атрибут <code>alt</code> . Текст внутри атрибута <code>alt</code> используется для чтения с экрана для улучшения доступности и отображается в виде текста, если изображение не загружается. Примечание. Если изображение является чисто декоративным, использование чистого атрибута <code>alt</code> является наилучшей практикой. В идеале атрибут <code>alt</code> не должен содержать специальных символов, если это не требуется. Давайте добавим атрибут <code>alt</code> к нашему примеру <code>img</code> выше: <code>&lt;img src=&quot;https://www.your-image-source.com/your-image.jpg&quot; alt=&quot;Author standing on a beach with two thumbs up.&quot;&gt;</code>
</section>

## Instructions
<section id='instructions'>
Попробуем добавить изображение на наш сайт: вставьте тег <code>img</code> перед элементом <code>h2</code> . Теперь установите атрибут <code>src</code> так, чтобы он указывал на этот url: <code>https://bit.ly/fcc-relaxing-cat</code> Наконец, не забудьте дать вашему изображению текст <code>alt</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your page should have an image element.
    testString: assert($("img").length);
  - text: Your image should have a <code>src</code> attribute that points to the kitten image.
    testString: assert(/^https:\/\/bit\.ly\/fcc-relaxing-cat$/i.test($("img").attr("src")));
  - text: Your image element's <code>alt</code> attribute <strong>must</strong> not be empty.
    testString: assert($("img").attr("alt") && $("img").attr("alt").length && /<img\S*alt=(['"])(?!\1|>)\S+\1\S*\/?>/.test(code.replace(/\s/g,'')));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>


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
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

</section>
