---
id: 587d7789367417b2b2512aa4
title: Melhorar a acessibilidade de áudios com o elemento audio
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJVkcZ'
forumTopicId: 301014
dashedName: improve-accessibility-of-audio-content-with-the-audio-element
---

# --description--

O elemento `audio` do HTML fornece significado semântico quando é utilizado para envolver conteúdo relacionado a reprodução de áudio. O conteúdo do áudio também precisa de uma alternativa em texto para ser acessível a pessoas surdas ou com deficiência auditiva. Isso pode ser feito com um texto próximo na página ou um link para uma transcrição.

A tag `audio` suporta o atributo `controls`. Este atributo exibe os controles de reprodução, pausa e outras funcionalidades, além de oferecer suporte ao teclado. Este é um atributo booleano, o que significa que não precisa de um valor. Sua presença na tag ativa a configuração.

Exemplo:

```html
<audio id="meowClip" controls>
  <source src="audio/meow.mp3" type="audio/mpeg">
  <source src="audio/meow.ogg" type="audio/ogg">
</audio>
```

**Observação:** os conteúdos multimídia geralmente são compostos por partes visuais e auditivas. É preciso legendas sincronizadas e uma transcrição para que usuários com deficiência visual e/ou auditiva possam acessá-lo. Geralmente, um desenvolvedor Web não é responsável por criar as legendas ou transcrições, mas precisa saber como incluí-las.

# --instructions--

É hora de fazer uma pausa com o Camper Cat e conhecer o colega Zersiax (@zersiax), um campeão de acessibilidade e também usuário de leitor de tela. Para ouvir um clipe de seu leitor de tela em ação, adicione o elemento `audio` após o elemento `p`. Inclua o atributo `controls`. Em seguida, coloque uma tag `source` dentro da tag `audio` com o atributo `src` definido como `https://s3.amazonaws.com/freecodecamp/screen-reader.mp3` e o atributo `type` definido como `"audio/mpeg"`.

**Observação:** o clipe de áudio pode parecer rápido e difícil de entender, mas é uma velocidade normal para usuários de leitores de tela.

# --hints--

O código deve ter uma tag `audio`.

```js
assert($('audio').length === 1);
```

O elemento `audio` deve ter uma tag de fechamento.

```js
assert(
  code.match(/<\/audio>/g).length === 1 &&
    code.match(/<audio.*>[\s\S]*<\/audio>/g)
);
```

A tag `audio` deve ter o atributo `controls`.

```js
assert($('audio').attr('controls'));
```

O código deve ter uma tag `source`.

```js
assert($('source').length === 1);
```

A tag `source` deve estar dentro das tags `audio`.

```js
assert($('audio').children('source').length === 1);
```

O valor do atributo `src` na tag `source` deve ser exatamente igual ao link nas instruções.

```js
assert(
  $('source').attr('src') ===
    'https://s3.amazonaws.com/freecodecamp/screen-reader.mp3'
);
```

O código deve incluir um atributo `type` na tag `source` com um o valor de "audio/mpeg".

```js
assert($('source').attr('type') === 'audio/mpeg');
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Real Coding Ninjas</h1>
  </header>
  <main>
    <p>A sound clip of Zersiax's screen reader in action.</p>



  </main>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Real Coding Ninjas</h1>
  </header>
  <main>
    <p>A sound clip of Zersiax's screen reader in action.</p>
    <audio controls>
      <source src="https://s3.amazonaws.com/freecodecamp/screen-reader.mp3" type="audio/mpeg"/>
    </audio>
  </main>
</body>
```
