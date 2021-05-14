---
id: 587d778f367417b2b2512aae
title: Dar significado aos links usando textos descritivos
challengeType: 0
videoUrl: 'https://scrimba.com/c/c437DcV'
forumTopicId: 301013
dashedName: give-links-meaning-by-using-descriptive-link-text
---

# --description--

Os usuários de leitores de tela têm várias opções para o tipo de conteúdo que o seu dispositivo lê. Essas opções incluem pular para (ou sobre) elementos de referência, pular para o conteúdo principal ou obter um resumo da página a partir dos títulos. Outra opção é apenas ouvir os links disponíveis na pagina.

Leitores de tela fazem isso lendo o texto do link, ou o que estiver entre as tags (`a`). Ter uma lista de links com textos do tipo "clique aqui" ou "leia mais" não ajuda muito. Em vez disso, você deve usar um texto pequeno, mas descritivo, entre as tags `a` para fornecer mais significado para os usuários.

# --instructions--

O texto do link que o Camper Cat está usando não é muito descritivo sem um contexto. Mova a tag (`a`) para que ela envolva a frase `information about batteries` ao invés de `Click here`.

# --hints--

O seu código deve mover a tag `a` das palavras `Click here` para que envolva as palavras `information about batteries`.

```js
assert(
  $('a')
    .text()
    .match(/^(information about batteries)$/g)
);
```

O elemento `a` deve ter o atributo `href` com o valor de uma string vazia `""`.

```js
assert($('a').attr('href') === '');
```

O elemento `a` deve ter uma tag de fechamento.

```js
assert(
  code.match(/<\/a>/g) &&
    code.match(/<\/a>/g).length === code.match(/<a href=(''|"")>/g).length
);
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near. <a href="">Click here</a> for information about batteries</p>
  </article>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near. Click here for <a href="">information about batteries</a></p>
  </article>
</body>
```
