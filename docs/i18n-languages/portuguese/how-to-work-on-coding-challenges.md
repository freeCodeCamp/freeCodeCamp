<!-- do not translate this -->
| [Read these guidelines in other languages](/docs/i18n-languages) |
|-|
<!-- do not translate this -->

# Como trabalhar nos desafios de código

### Fazendo mudanças no GitHub

Cada desafio está guardado em seu próprio arquivo markdown. Isso torna fácil editar os desafios diretamente de dentro do GitHub.

Você pode fazer mudanças sem ter nada rodando em seu sistema local.

Depois que encontrar o arquivo que deseja modificar pela interface do GitHub, clique no ícone de lápis para começar a editar. Isto ira criar um fork do projeto automaticamente, se você já não tem um.

Você também pode clonar o projeto e editar localmente no seu computador. Para ajuda com isso, leia o artigo [Orientações de Contribuição](/docs/i18n-languages/portuguese/CONTRIBUTING.md).

### Modelo de Desafio

Aqui um modelo de como é um arquivo markdown do desafio.


````md
---
id: Unique identifier (alphanumerical, MongoDB _id)
title: Challenge Title
challengeType: 0
guideUrl: 'url of guide article'
videoUrl: 'url of video explaination'
---

## Description
<section id='description'>
A Description of the challenge and what is required to pass
</section>

## Instructions
<section id='instructions'>
Instructions about what exactly needs to be done.
</section>
## Tests
<section id='tests'>

``` yml
- text: Should return "foo".
  testString: 'A stringified function using Chai asserts'
```

</section>

<div id='js-seed'>

```js
Code desplayed in the editor by default.
```

</div>

### Before Test
<div id='js-setup'>

```js
Test setup code.
```

</div>

</section>

### After Test
<div id='js-teardown'>

```js
Test tear down code.
```

</div>

</section>

## Solution
<section id='solution'>

```js
Challenge solution code.
```

</section>
````

### Links Úteis

Criando e Editando Desafios:

1. [Guia de Estilo dos Desafios](/docs/style-guide-for-curriculum-challenges.md) - como criar e formatar desafios.

2. [Tipos de Desafio](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/client/utils/challengeTypes.js#L1-L13) - o que o número do tipo de desafio significa (enum).

3. [Contributing to FreeCodeCamp - Writing ES6 Challenge Tests](https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s) - um vídeo acompanhando [Ethan Arrowood](https://twitter.com/ArrowoodTech) enquanto ele contribui com uma versão antiga do currículo.
