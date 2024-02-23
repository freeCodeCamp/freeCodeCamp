---
id: 587d778f367417b2b2512aad
title: >-
  Evitar problemas de daltonismo escolhendo cuidadosamente as cores informativas
challengeType: 0
videoUrl: 'https://scrimba.com/c/c437as3'
forumTopicId: 301011
dashedName: >-
  avoid-colorblindness-issues-by-carefully-choosing-colors-that-convey-information
---

# --description--

Existem várias formas de daltonismo. Elas variam de uma sensibilidade reduzida de uma frequência de luz até a incapacidade de ver qualquer cor. A forma mais comum é uma sensibilidade reduzida em detectar cores verdes.

Por exemplo, se duas cores verdes semelhantes são a cor de primeiro plano e de fundo do seu conteúdo, um usuário daltônico pode não ser capaz de distingui-las. Cores parecidas são vizinhas no círculo cromático e essas combinações devem ser evitadas quando se está transmitindo informações importantes.

**Observação:** algumas ferramentas de seletores de cores on-line incluem simuladores visuais de como as cores aparecem para diferentes tipos de daltonismo. São ótimos recursos que complementam as calculadoras de verificação de contraste.

# --instructions--

O Camper Cat está testando diferentes estilos para um botão importante, mas `background-color` em amarelo (`#FFFF33`) e `color` em verde (`#33FF33`) são cores próximas e virtualmente indistinguíveis para alguns usuários daltônicos. (O brilho dessas duas cores é semelhante, o que faz com que essa combinação não passe no teste de taxa de contraste). Mude a propriedade `color` do texto para um azul escuro (`#003366`) para resolver os dois problemas.

# --hints--

O código deve mudar a propriedade `color` do texto do `button` para um azul escuro.

```js
assert($('button').css('color') == 'rgb(0, 51, 102)');
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
  button {
    color: #33FF33;
    background-color: #FFFF33;
    font-size: 14px;
    padding: 10px;
  }
  </style>
</head>
<body>
  <header>
    <h1>Danger!</h1>
  </header>
  <button>Delete Internet</button>
</body>
```

# --solutions--

```html
<head>
  <style>
    button {
      color: #003366;
      background-color: #FFFF33;
      font-size: 14px;
      padding: 10px;
    }
  </style>
</head>
<body>
  <header>
    <h1>Danger!</h1>
  </header>
  <button>Delete Internet</button>
</body>
```
