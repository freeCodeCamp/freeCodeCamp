---
id: bad87fee1348bd9aedf08817
title: Зробити мертве посилання, використовуючи хеш-символ
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cMdkytL'
forumTopicId: 18230
dashedName: make-dead-links-using-the-hash-symbol
---

# --description--

Інколи ви хочете додати `a` елементи до вашого веб-сайту ще перед тим, як дізнаєтесь, куди вони мають посилатися.

Це також стає в нагоді, коли ви змінюєте поведінку посилання за допомогою `JavaScript`, про який ми дізнаємося пізніше.

# --instructions--

Поточним значенням `href` атрибуту є посилання, яке вказує на "`https://www.freecatphotoapp.com`". Щоб створити мертве посилання, замініть значення атрибуту `href` на `#`, також відоме як хеш-символ.

Наприклад: `href="#"`

# --hints--

Ваш `a` елемент повинен бути мертвим посиланням з `href` атрибутом, встановленим на"#".

```js
assert($('a').attr('href') === '#');
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="https://www.freecatphotoapp.com" target="_blank">cat photos</a>.</p>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#" target="_blank">cat photos</a>.</p>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
