---
id: 587d78aa367417b2b2512aec
title: HTML 문서의 헤드와 바디 정의하기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cra9bfP'
forumTopicId: 301096
dashedName: define-the-head-and-body-of-an-html-document
---

# --description--

HTML 문서 안에서 `head`와 `body` 요소로 `html` 태그 내에 다른 조직 단계를 추가할 수 있습니다. 페이지에 관한 정보를 가진 모든 마크업은 `head` 태그에 위치합니다. 그런 다음에 사용자에게 보여질 페이지 내용이 담긴 모든 마크업은 `body` 태그에 가게 됩니다.

`link`, `meta`, `title` 그리고 `style`같은 메타데이터 요소들은 주로 `head` 요소로 가게 됩니다.

여기 페이지 레이아웃에 대한 예시가 있습니다.

```html
<!DOCTYPE html>
<html>
  <head>
   <meta charset="utf-8">
   <title>Example title</title>
  </head>
  <body>
    <div>
    </div>
  </body>
</html>
```

# --instructions--

`head`와 `body`가 있도록 마크업을 수정하시오. `head` 요소는 오직 `title`을 포함하고 `body` 요소는 오직 `h1`과 `p`를 포함해야 합니다.

# --hints--

페이지에 하나의 `head` 요소만 있어야 합니다.

```js
const headElems = code.replace(/\n/g, '').match(/\<head\s*>.*?\<\/head\s*>/g);
assert(headElems && headElems.length === 1);
```

페이지에 하나의 `body` 요소만 있어야 합니다.

```js
const bodyElems = code.replace(/\n/g, '').match(/<body\s*>.*?<\/body\s*>/g);
assert(bodyElems && bodyElems.length === 1);
```

`head` 요소는 `html` 요소의 자식 요소이어야 합니다.

```js
const htmlChildren = code
  .replace(/\n/g, '')
  .match(/<html\s*>(?<children>.*)<\/html\s*>/);
let foundHead;
if (htmlChildren) {
  const { children } = htmlChildren.groups;

  foundHead = children.match(/<head\s*>.*<\/head\s*>/);
}
assert(foundHead);
```

`body` 요소는 `html` 요소의 자식 요소이어야 합니다.

```js
const htmlChildren = code
  .replace(/\n/g, '')
  .match(/<html\s*>(?<children>.*?)<\/html\s*>/);
let foundBody;
if (htmlChildren) {
  const { children } = htmlChildren.groups;
  foundBody = children.match(/<body\s*>.*<\/body\s*>/);
}
assert(foundBody);
```

`head` 요소는 `title` 요소를 감싸야 합니다.

```js
const headChildren = code
  .replace(/\n/g, '')
  .match(/<head\s*>(?<children>.*?)<\/head\s*>/);
let foundTitle;
if (headChildren) {
  const { children } = headChildren.groups;
  foundTitle = children.match(/<title\s*>.*?<\/title\s*>/);
}
assert(foundTitle);
```

`body` 요소는 `h1`과 `p` 요소를 감싸야 합니다.

```js
const bodyChildren = code
  .replace(/\n/g, '')
  .match(/<body\s*>(?<children>.*?)<\/body\s*>/);
let foundElems;
if (bodyChildren) {
  const { children } = bodyChildren.groups;
  const h1s = children.match(/<h1\s*>.*<\/h1\s*>/g);
  const ps = children.match(/<p\s*>.*<\/p\s*>/g);
  const numH1s = h1s ? h1s.length : 0;
  const numPs = ps ? ps.length : 0;
  foundElems = numH1s === 1 && numPs === 1;
}
assert(foundElems);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <title>The best page ever</title>

  <h1>The best page ever</h1>
  <p>Cat ipsum dolor sit amet, jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed. Go into a room to decide you didn't want to be in there anyway. I like big cats and i can not lie kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Meow i could pee on this if i had the energy for slap owner's face at 5am until human fills food dish yet scamper. Knock dish off table head butt cant eat out of my own dish scratch the furniture. Make meme, make cute face. Sleep in the bathroom sink chase laser but pee in the shoe. Paw at your fat belly licks your face and eat grass, throw it back up kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>

</html>
```

# --solutions--

```html
<!DOCTYPE html>
<html>
 <head>
  <title>The best page ever</title>
 </head>
 <body>
  <h1>The best page ever</h1>
  <p>Cat ipsum dolor sit amet, jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed. Go into a room to decide you didn't want to be in there anyway. I like big cats and i can not lie kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Meow i could pee on this if i had the energy for slap owner's face at 5am until human fills food dish yet scamper. Knock dish off table head butt cant eat out of my own dish scratch the furniture. Make meme, make cute face. Sleep in the bathroom sink chase laser but pee in the shoe. Paw at your fat belly licks your face and eat grass, throw it back up kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
 </body>
</html>
```
