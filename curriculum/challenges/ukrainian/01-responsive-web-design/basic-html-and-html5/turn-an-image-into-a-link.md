---
id: bad87fee1348bd9aedf08820
title: Перетворіть зображення на посилання
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cRdBnUr'
forumTopicId: 18327
dashedName: turn-an-image-into-a-link
---

# --description--

Ви можете перетворити зображення на посилання, вклавши їх в `a` елемент.

Вкладіть ваше зображення в `a` елемент. Наприклад:

```html
<a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="Three kittens running towards the camera."></a>
```

Не забувайте використовувати `#` як властивість `href` вашого елемента `a`, щоб перетворити його на мертве посилання.

# --instructions--

Розмістіть наявний елемент зображення в `a` (*anchor*) елементі.

Після цього наведіть курсор на ваше зображення. Звичайний вказівник вашого курсора повинен стати вказівником натискання за посиланням. Тепер зображення стало посиланням.

# --hints--

Наявний `img` елемент повинен бути вкладеним в `a` елемент.

```js
assert($('a').children('img').length > 0);
```

Ваш `a` елемент повинен бути мертвим посиланням з `href` атрибутом, встановленим на `#`.

```js
assert(new RegExp('#').test($('a').children('img').parent().attr('href')));
```

Кожен з ваших `a` елементів повинен мати тег закривання.

```js
assert(
  code.match(/<\/a>/g) &&
    code.match(/<a/g) &&
    code.match(/<\/a>/g).length === code.match(/<a/g).length
);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
