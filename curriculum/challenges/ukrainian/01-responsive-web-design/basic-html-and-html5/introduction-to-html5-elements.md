---
id: bad87fee1348bd9aecf08801
title: Ознайомлення з елементами HTML5
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cBkZGpt7'
forumTopicId: 301097
dashedName: introduction-to-html5-elements
---

# --description--

В HTML5 вводяться більш описові теги HTML. Серед них `main`, `header`, `footer`, `nav`, `video`, `article`, `section` та інші.

Ці теги надають вашому HTML описову структуру, полегшують прочитання вашого HTML, а також допомагають з оптимізацією пошукової системи (SEO) та доступністю. Тег HTML5 `main` допомагає пошуковим системам та іншим розробникам знайти основний зміст вашої сторінки.

Нижче наведено приклад використання елемента `main` з вкладеними у нього двома дочірніми елементами:

```html
<main> 
  <h1>Hello World</h1>
  <p>Hello Paragraph</p>
</main>
```

**Примітка:** Багато нових тегів HTML5 та їхні переваги описані в розділі "Прикладна доступність".

# --instructions--

Створіть другий елемент `p` з поданим текстом-прикладом: `Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.`

Тоді створіть `main` елемент і помістіть лише два `p` елементи у `main` елемент.

# --hints--

Ви повинні мати 2 елементи `p` з поданим текстом-прикладом.

```js
assert($('p').length > 1);
```

Кожен елемент `p` повинен мати кінцевий тег.

```js
assert(
  code.match(/<\/p>/g) &&
    code.match(/<\/p>/g).length === code.match(/<p/g).length
);
```

Ваш `p` елемент повинен містити перші декілька слів з додаткового тексту-прикладу `kitty ipsum`.

```js
assert.isTrue(/Purr\s+jump\s+eat/gi.test($('p').text()));
```

Ваш код повинен містити один `main` елемент.

```js
assert($('main').length === 1);
```

Елемент `main` повинен містити два елементи абзацу в якості дочірніх.

```js
assert($('main').children('p').length === 2);
```

Тег `main` повинен знаходитися перед тегом першого абзацу.

```js
assert(code.match(/<main>\s*?<p>/g));
```

Тег `main` закриття повинен знаходитися після другого тегу, який закриває абзац.

```js
assert(code.match(/<\/p>\s*?<\/main>/g));
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
