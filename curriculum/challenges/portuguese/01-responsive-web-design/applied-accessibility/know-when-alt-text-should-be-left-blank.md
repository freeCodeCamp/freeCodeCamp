---
id: 587d774c367417b2b2512a9d
title: Saber quando o texto alternativo (alt) deve ser deixado em branco
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM9P4t2'
forumTopicId: 301019
dashedName: know-when-alt-text-should-be-left-blank
---

# --description--

No último desafio, você aprendeu que incluir o atributo `alt` ao usar tags `img` é obrigatório. No entanto, às vezes, as imagens são agrupadas com uma legenda que já as descreve ou são usadas apenas para decoração. Nestes casos, o texto `alt` pode parecer redundante ou desnecessário.

Em situações em que uma imagem já é explicada com conteúdo de texto ou não adiciona significado a uma página, o `img` ainda precisa de um atributo `alt`, mas pode ser definido como uma string vazia. Exemplo:

```html
<img src="visualDecoration.jpeg" alt="">
```

As imagens de fundo também costumam ser classificadas como "decorativas". No entanto, elas são normalmente aplicadas usando CSS e, portanto, não fazem parte do processo de leitura de tela por tecnologias assistivas.

**Observação:** para imagens com legenda, você ainda pode querer incluir o texto `alt`, pois ajuda os mecanismos de busca a catalogar o conteúdo da imagem.

# --instructions--

O Camper Cat codificou o esqueleto da página do blog do site dele. Ele está planejando adicionar uma quebra visual entre os dois artigos com uma imagem decorativa de uma espada de samurai. Adicione o atributo `alt` à tag `img` e defina-o como uma string vazia. (Observe que o `src` da imagem não aponta para um arquivo real - não se preocupe se não houver espadas aparecendo na tela.)

# --hints--

A tag `img` deve ter um atributo `alt`.

```js
assert(!($('img').attr('alt') == undefined));
```

O atributo `alt` deve ser definido como uma string vazia.

```js
assert($('img').attr('alt') == '');
```

# --seed--

## --seed-contents--

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<article>
  <h2>Defeating your Foe: the Red Dot is Ours!</h2>
  <p>To Come...</p>
</article>

<img src="samuraiSwords.jpeg">

<article>
  <h2>Is Chuck Norris a Cat Person?</h2>
  <p>To Come...</p>
</article>
```

# --solutions--

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<article>
  <h2>Defeating your Foe: the Red Dot is Ours!</h2>
  <p>To Come...</p>
</article>

<img src="samuraiSwords.jpeg" alt="">

<article>
  <h2>Is Chuck Norris a Cat Person?</h2>
  <p>To Come...</p>
</article>
```
