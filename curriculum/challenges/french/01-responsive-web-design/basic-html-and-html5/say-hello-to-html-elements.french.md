---
id: bd7123c8c441eddfaeb5bdef
title: Say Hello to HTML Elements
challengeType: 0
videoUrl: ''
localeTitle: 'Dites bonjour aux balises HTML'
---

## Description
<section id='description'>
Bienvenue sur les challenges de code freeCodeCamp. Ces challenges vous enseigneront le développement web pas-à-pas.
D‘abord, vous allez créer une simple page web à l‘aide du HTML. Vous pouvez modifier le <code>code</code> dans votre <code>éditeur de code</code>, qui est intégré dans cette page web.
Vous voyez le code dans votre éditeur de code qui dit <code>&#60;h1&#62;Hello&#60;/h1&#62;</code>? C‘est une <code>balise</code> HTML.
La plupart des balises HTML ont une <code>balise ouvrante</code> et une <code>balise fermante</code>.
Les balises ouvrantes ressemblent à ça:
<code>&#60;h1&#62;</code>
Les balises fermantes ressemblent à ça:
<code>&#60;/h1&#62;</code>
La seule différence entre les balises ouvrantes et les balises fermantes est le slash après le chevron ouvrant de la balise fermante.
Chaque challenge a des tests que vous pouvez lancer à n‘importe quel moment en cliquant sur le bouton "Run tests". Quand vous aurez réussi tout les tests, il vous sera demandé de valider votre code et d‘aller au prochain challenge.
</section>

## Instructions
<section id='instructions'>
Pour réussir le test de ce challenge, modifier le text de votre balise <code>h1</code> pour dire "Bonjour".
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Votre balise <code>h1</code> devrait avoir pour texte "Bonjour".
    testString: assert.isTrue((/bonjour/gi).test($('h1').text()));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Hello</h1>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<h1>Bonjour</h1>
```

</section>
