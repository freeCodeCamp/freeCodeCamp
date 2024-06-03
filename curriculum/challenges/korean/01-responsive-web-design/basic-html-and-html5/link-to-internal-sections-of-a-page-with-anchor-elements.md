---
id: bad88fee1348bd9aedf08816
title: 앵커 요소를 이용한 페이지 내부를 연결하는 링크
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cyrDRUL'
forumTopicId: 301098
dashedName: link-to-internal-sections-of-a-page-with-anchor-elements
---

# --description--

`a` (*anchor, 앵커*) 요소를 이용하여 웹페이지 내의 다른 섹션으로 이동하는 내부 링크를 생성할 수도 있습니다.

내부 링크를 생성하려면 링크의 `href` 속성에 해쉬 기호 `#` 와 연결하고 싶은 요소 (보통 멀리 떨어져 있는) 의 `id` 속성를 지정해야 합니다. 그런 다음 연결하려는 요소에 동일한 `id` 속성을 추가해야 합니다. `id`는 요소를 묘사하는 속성입니다.

다음은 내부 앵커 링크 및 대상 요소의 예입니다:

```html
<a href="#contacts-header">Contacts</a>
...
<h2 id="contacts-header">Contacts</h2>
```

만약 사용자가 `Contacts` 링크를 클릭하면 **Contacts** 제목 요소가 있는 웹페이지 섹션으로 이동합니다.

# --instructions--

`href` 속성을 `#footer` 로 변경하고 텍스트를 `cat photos` 에서 `Jump to Bottom` 으로 변경하여 현재 존재하는 외부 링크를 내부 링크로 변경하세요.

앵커 태그의 `target="_blank"` 속성은 연결된 문서가 새 창 탭에서 열리게 하므로 이를 제거하세요.

그런 다음 값이 `footer`인 `id` 속성을 페이지 하단의 `<footer>` 요소에 추가하세요.

# --hints--

페이지에는 하나의 앵커 태그만 있어야 합니다.

```js
assert($('a').length == 1);
```

페이지에는 하나의 `footer` 태그만 있어야 합니다.

```js
assert($('footer').length == 1);
```

`a` 태그에는 "#footer"로 설정된 `href` 속성이 있어야 합니다.

```js
assert($('a').eq(0).attr('href') == '#footer');
```

`a` 태그에는 `target` 속성이 없어야 합니다.

```js
assert(
  typeof $('a').eq(0).attr('target') == typeof undefined ||
    $('a').eq(0).attr('target') == true
);
```

`a` 요소의 텍스트는 "Jump to Bottom"이어야 합니다.

```js
assert(
  $('a')
    .eq(0)
    .text()
    .match(/Jump to Bottom/gi)
);
```

`footer` 태그에는 "footer"로 설정된 `id` 속성이 있어야 합니다.

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
