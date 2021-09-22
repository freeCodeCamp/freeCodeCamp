---
id: bad87fee1348bd9aedf08816
title: Criar links para páginas externas com elementos de âncora
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/c8EkncB'
forumTopicId: 18226
dashedName: link-to-external-pages-with-anchor-elements
---

# --description--

Você pode usar elementos `a` (*âncora*) para vincular conteúdos externos à sua página da web.

Os elementos `a` precisam de um endereço (link) que é colocado no atributo `href`. Eles também precisam de um texto que servirá de "âncora". Exemplo:

```html
<a href="https://www.freecodecamp.org">this links to freecodecamp.org</a>
```

Então o seu navegador exibirá o texto `this links to freecodecamp.org` como um "link" que você pode clicar. E esse link levará você para o endereço `https://www.freecodecamp.org`.

# --instructions--

Crie um elemento `a` que vincule a `https://www.freecatphotoapp.com` e que tenha "cat photos" como seu texto de âncora.

# --hints--

O elemento `a` deve ter o texto `cat photos` como âncora.

```js
assert(/cat photos/gi.test($('a').text()));
```

Você precisa de um elemento `a` que se vincule ao endereço `https://www.freecatphotoapp.com`

```js
assert(/^https?:\/\/(www\.)?freecatphotoapp\.com\/?$/i.test($('a').attr('href')));
```

O elemento `a` deve ter uma tag de fechamento.

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
