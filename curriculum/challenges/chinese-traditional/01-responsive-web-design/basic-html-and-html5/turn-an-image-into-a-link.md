---
id: bad87fee1348bd9aedf08820
title: 給圖片添加鏈接
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cRdBnUr'
forumTopicId: 18327
dashedName: turn-an-image-into-a-link
---

# --description--

你可以通過把元素嵌套進 `a` 裏使其變成一個鏈接。

如果我們要把圖片嵌套進 `a` 元素， 可以這樣寫：

```html
<a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="Three kittens running towards the camera."></a>
```

如果把 `a` 的 `href` 屬性值設置爲 `#`，創建的是一個死鏈接（不跳轉到其他畫面）。

# --instructions--

請把現存的圖片嵌套進 `a`（ *錨點*）元素中。

完成後，請你把鼠標光標懸停在你的圖像上， 鼠標光標將變成點擊光標。 於是圖片就變成了鏈接。

# --hints--

應將 `img` 嵌套進 `a` 元素中。

```js
assert($('a').children('img').length > 0);
```

`a` 的 `href` 屬性值應爲 `#`。

```js
assert(new RegExp('#').test($('a').children('img').parent().attr('href')));
```

每個 `a` 元素都應該有一個結束標籤。

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
