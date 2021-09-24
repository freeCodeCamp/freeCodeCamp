---
id: bad87fee1348bd9aedf08820
title: Transformar uma imagem em um link
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cRdBnUr'
forumTopicId: 18327
dashedName: turn-an-image-into-a-link
---

# --description--

Você pode transformar elementos em links colocando-os dentro de um elemento `a`.

Coloque a imagem dentro de um elemento `a`. Exemplo:

```html
<a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="Three kittens running towards the camera."></a>
```

Lembre-se de usar `#` como valor da propriedade `href` no elemento `a` para transformá-lo em um link inativo.

# --instructions--

Coloque o elemento de imagem existente dentro do elemento `a` (*de âncora*).

Uma vez feito isso, passe o cursor do mouse sobre a imagem. O ponteiro do cursor vai se transformar no ponteiro para clicar em links. A foto agora é um link.

# --hints--

O elemento `img` deve estar dentro do elemento `a`.

```js
assert($('a').children('img').length > 0);
```

O elemento `a` deve ser um link inativo com o atributo `href` definido com o valor `#`.

```js
assert(new RegExp('#').test($('a').children('img').parent().attr('href')));
```

Todos os elementos `a` devem ter uma tag de fechamento.

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
