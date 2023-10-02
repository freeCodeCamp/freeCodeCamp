---
id: bad88fee1348bd9aedf08816
title: 用 a 实现网页内部跳转
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cyrDRUL'
forumTopicId: 301098
dashedName: link-to-internal-sections-of-a-page-with-anchor-elements
---

# --description--

`a`（*anchor*）元素也可以用于创建内部链接，跳转到网页内的各个不同部分。

要创建内部链接，你需要将链接的 `href` 属性值设置为一个哈希符号 `#` 加上你想内部链接到的元素的 `id`，通常是在网页下方的元素。 然后你需要将相同的 `id` 属性添加到你链接到的元素中。 `id` 是描述网页元素的一个属性，它的值在整个页面中唯一。

当用户点击了 `Contacts` 链接，页面就会跳转到网页的 **Contacts** 区域。

```html
<a href="#contacts-header">Contacts</a>
...
<h2 id="contacts-header">Contacts</h2>
```

当用户点击 `Contacts` 链接时，他们将被带到带有 **Contacts** 标题元素的网页部分。

# --instructions--

通过修改 `href` 属性值为 `#footer`，同时修改文本 `cat photos` 为 `Jump to Bottom`，来更改外部链接为内部链接。

从锚点标签中删除 `target="_blank"` 属性，因为这会导致链接文档在新窗口标签中打开。

然后给页面底部的 `<footer>` 元素添加一个 `id` 属性，值为 `footer`。

# --hints--

页面中应只存在一个 `footer` 元素。

```js
assert($('a').length == 1);
```

`a` 的 `href` 属性值应为 `#footer`。

```js
assert($('footer').length == 1);
```

`a` 不应有 `target` 属性。

```js
assert($('a').eq(0).attr('href') == '#footer');
```

`a` 标签不应有 `target` 属性。

```js
assert(
  typeof $('a').eq(0).attr('target') == typeof undefined ||
    $('a').eq(0).attr('target') == true
);
```

`a` 元素的文本应该是 “Jump to Bottom”。

```js
assert(
  $('a')
    .eq(0)
    .text()
    .match(/Jump to Bottom/gi)
);
```

`footer` 标签应该有一个 `id` 属性，值为 “footer”。

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
