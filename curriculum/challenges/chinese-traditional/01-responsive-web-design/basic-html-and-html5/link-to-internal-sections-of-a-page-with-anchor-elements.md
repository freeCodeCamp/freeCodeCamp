---
id: bad88fee1348bd9aedf08816
title: 用 a 實現網頁內部跳轉
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cyrDRUL'
forumTopicId: 301098
dashedName: link-to-internal-sections-of-a-page-with-anchor-elements
---

# --description--

`a`（*anchor*）元素也可以用於創建內部鏈接，跳轉到網頁內的各個不同部分。

要創建內部鏈接，你需要將鏈接的 `href` 屬性值設置爲一個哈希符號 `#` 加上你想內部鏈接到的元素的 `id`，通常是在網頁下方的元素。 然後你需要將相同的 `id` 屬性添加到你鏈接到的元素中。 `id` 是描述網頁元素的一個屬性，它的值在整個頁面中唯一。

當用戶點擊了 `Contacts` 鏈接，頁面就會跳轉到網頁的 **Contacts** 區域。

```html
<a href="#contacts-header">Contacts</a>
...
<h2 id="contacts-header">Contacts</h2>
```

當用戶點擊 `Contacts` 鏈接時，他們將被帶到帶有 **Contacts** 標題元素的網頁部分。

# --instructions--

通過修改 `href` 屬性值爲 `#footer`，同時修改文本 `cat photos` 爲 `Jump to Bottom`，來更改外部鏈接爲內部鏈接。

從錨點標籤中刪除 `target="_blank"` 屬性，因爲這會導致鏈接文檔在新窗口標籤中打開。

然後給頁面底部的 `<footer>` 元素添加一個 `id` 屬性，值爲 `footer`。

# --hints--

頁面中應只存在一個 `footer` 元素。

```js
assert($('a').length == 1);
```

`a` 的 `href` 屬性值應爲 `#footer`。

```js
assert($('footer').length == 1);
```

`a` 不應有 `target` 屬性。

```js
assert($('a').eq(0).attr('href') == '#footer');
```

`a` 標籤不應有 `target` 屬性。

```js
assert(
  typeof $('a').eq(0).attr('target') == typeof undefined ||
    $('a').eq(0).attr('target') == true
);
```

`a` 元素的文本應該是 “Jump to Bottom”。

```js
assert(
  $('a')
    .eq(0)
    .text()
    .match(/Jump to Bottom/gi)
);
```

`footer` 標籤應該有一個 `id` 屬性，值爲 “footer”。

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
