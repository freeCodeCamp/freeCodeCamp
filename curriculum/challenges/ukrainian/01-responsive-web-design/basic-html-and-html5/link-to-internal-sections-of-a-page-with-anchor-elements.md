---
id: bad88fee1348bd9aedf08816
title: Посилання на внутрішні розділи сторінки з елементами прив’язки
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cyrDRUL'
forumTopicId: 301098
dashedName: link-to-internal-sections-of-a-page-with-anchor-elements
---

# --description--

Елементи `a` (*anchor*) можуть також використовуватися, щоб створити внутрішнє посилання, щоб перейти на різні розділи вебсторінки.

Щоб створити внутрішнє посилання, ви присвоюєте атрибут посилання `href` хеш-символу `#` плюс значення атрибута `id` для елементу, на який ви хочете зробити внутрішнє посилання, зазвичай нижче на сторінці. Тоді вам необхідно додати той же атрибут `id` елементу, на який ви переходите. `id` - атрибут, який однозначно описує елемент.

Нижче наведено приклад внутрішнього якірного посилання і його цільового елементу:

```html
<a href="#contacts-header">Contacts</a>
...
<h2 id="contacts-header">Contacts</h2>
```

Коли користувачі натискають на посилання `Contacts`, вони перейдуть до розділу вебсторінки з заголовком **Контакти**.

# --instructions--

Змініть зовнішнє посилання на внутрішнє, змінивши атрибут `href` на `#footer` і текст з `cat photos` на `Jump to Bottom`.

Видаліть атрибут `target="_blank"` із тегу прив'язки, бо це призведе до відкриття прив'язаного документа у новій вкладці вікна.

Потім додайте атрибут `id` зі значенням `footer` до елементу `<footer>` внизу сторінки.

# --hints--

На вашій сторінці повинен бути лише один тег прив'язки.

```js
assert($('a').length == 1);
```

На вашій сторінці повинен бути тільки один тег `footer`.

```js
assert($('footer').length == 1);
```

Тег `a` повинен мати атрибут `href` налаштований до "#footer".

```js
assert($('a').eq(0).attr('href') == '#footer');
```

Тег `a` не повинен мати атрибут `target`.

```js
assert(
  typeof $('a').eq(0).attr('target') == typeof undefined ||
    $('a').eq(0).attr('target') == true
);
```

Текст `a` має бути "Jump to Bottom".

```js
assert(
  $('a')
    .eq(0)
    .text()
    .match(/Jump to Bottom/gi)
);
```

Тег `footer` повинен мати атрибут `id` налаштований до "footer".

```js
assert($('footer').eq(0).attr('id') == 'footer');
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>

  <a href="https://www.freecatphotoapp.com" target="_blank">cat photos</a>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
  <p>Meowwww loved it, hated it, loved it, hated it yet spill litter box, scratch at owner, destroy all furniture, especially couch or lay on arms while you're using the keyboard. Missing until dinner time toy mouse squeak roll over. With tail in the air lounge in doorway. Man running from cops stops to pet cats, goes to jail.</p>
  <p>Intently stare at the same spot poop in the plant pot but kitten is playing with dead mouse. Get video posted to internet for chasing red dot leave fur on owners clothes meow to be let out and mesmerizing birds leave fur on owners clothes or favor packaging over toy so purr for no reason. Meow to be let out play time intently sniff hand run outside as soon as door open yet destroy couch.</p>

</main>

<footer>Copyright Cat Photo App</footer>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>

  <a href="#footer">Jump to Bottom</a>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
  <p>Meowwww loved it, hated it, loved it, hated it yet spill litter box, scratch at owner, destroy all furniture, especially couch or lay on arms while you're using the keyboard. Missing until dinner time toy mouse squeak roll over. With tail in the air lounge in doorway. Man running from cops stops to pet cats, goes to jail.</p>
  <p>Intently stare at the same spot poop in the plant pot but kitten is playing with dead mouse. Get video posted to internet for chasing red dot leave fur on owners clothes meow to be let out and mesmerizing birds leave fur on owners clothes or favor packaging over toy so purr for no reason. Meow to be let out play time intently sniff hand run outside as soon as door open yet destroy couch.</p>

</main>

<footer id="footer">Copyright Cat Photo App</footer>
```
