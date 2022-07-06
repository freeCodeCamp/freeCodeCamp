---
id: 587d78aa367417b2b2512aec
title: Definir head e body de um documento HTML
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cra9bfP'
forumTopicId: 301096
dashedName: define-the-head-and-body-of-an-html-document
---

# --description--

Você pode adicionar mais um nível de organização ao seu documento HTML dentro das tags `html` com os elementos `head` e `body`. A marcação com informações sobre sua página é inserida na tag `head`. Por outro lado, toda a marcação com conteúdo da página (o que é exibido para o usuário) é inserida na tag `body`.

Elementos de metadados, como `link`, `meta`, `title` e `style`, normalmente vão dentro do elemento `head`.

Aqui vemos um exemplo de layout de página:

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

Edite a marcação para que haja um elemento `head` e um elemento `body`. O elemento `head` deve conter apenas o elemento `title`, enquanto o elemento `body` deve conter apenas os elementos `h1` e `p`.

# --hints--

Deve haver apenas um elemento `head` na página.

```js
const headElems = code.replace(/\n/g, '').match(/\<head\s*>.*?\<\/head\s*>/g);
assert(headElems && headElems.length === 1);
```

Deve haver apenas um elemento `body` na página.

```js
const bodyElems = code.replace(/\n/g, '').match(/<body\s*>.*?<\/body\s*>/g);
assert(bodyElems && bodyElems.length === 1);
```

O elemento `head` deve ser filho do elemento `html`.

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

O elemento `body` deve ser filho do elemento `html`.

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

O elemento `head` deve envolver o elemento `title`.

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

O elemento `body` deve envolver os elementos `h1` e `p`.

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
