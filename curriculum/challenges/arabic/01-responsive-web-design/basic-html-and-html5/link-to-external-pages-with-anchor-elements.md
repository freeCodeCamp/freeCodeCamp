---
id: bad87fee1348bd9aedf08816
title: الربط بصفحات خارجية بواسطة العناصر Anchor
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/c8EkncB'
forumTopicId: 18226
dashedName: link-to-external-pages-with-anchor-elements
---

# --description--

You can use `a` (*anchor*) elements to link to content outside of your web page.

عناصر `a` تتطلّب عنوان وب للوجهة يسمّى: `href`. وتتطلّب أيضا نصّ رابط anchor. Here's an example:

```html
<a href="https://www.freecodecamp.org">this links to freecodecamp.org</a>
```

ثم يعرض متصفّحك نص: `this links to freecodecamp.org` على هيئة رابط يمكنك النقر عليه. And that link will take you to the web address `https://www.freecodecamp.org`.

# --instructions--

Create an `a` element that links to `https://www.freecatphotoapp.com` and has "cat photos" as its anchor text.

# --hints--

Your `a` element should have the anchor text of `cat photos`.

```js
assert(/cat photos/gi.test($('a').text()));
```

تحتاج إلى عنصر `a` يربط بـعنوان `https://www.freecatphotoapp.com`

```js
assert(/^https?:\/\/(www\.)?freecatphotoapp\.com\/?$/i.test($('a').attr('href')));
```

عنصر `a` الخاص بك لا بد أن يكون له علامة إغلاق (closing tag).

```js
assert(
  code.match(/<\/a>/g) &&
    code.match(/<\/a>/g).length === code.match(/<a/g).length
);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>



  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>

  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">

  <a href="https://www.freecatphotoapp.com">cat photos</a>
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
```
