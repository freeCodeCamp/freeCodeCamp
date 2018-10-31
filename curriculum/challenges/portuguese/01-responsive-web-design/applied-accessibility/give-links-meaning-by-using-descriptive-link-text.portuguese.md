---
id: 587d778f367417b2b2512aae
title: Give Links Meaning by Using Descriptive Link Text
challengeType: 0
videoUrl: ''
localeTitle: Dar sentido de links usando texto de link descritivo
---

## Description
<section id="description"> Os usuários de leitores de tela têm opções diferentes para o tipo de conteúdo que o dispositivo lê. Isso inclui pular para (ou sobre) elementos de referência, pular para o conteúdo principal ou obter um resumo de página dos títulos. Outra opção é apenas ouvir os links disponíveis em uma página. Os leitores de tela fazem isso lendo o texto do link ou o que está entre as tags âncora ( <code>a</code> ). Ter uma lista de links &quot;clique aqui&quot; ou &quot;leia mais&quot; não é útil. Em vez disso, você deve usar um texto breve, mas descritiva nos <code>a</code> tags para proporcionar mais significado para esses usuários. </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve mover a âncora com <code>a</code> tag em torno das palavras &quot;Clique aqui&quot; para envolver as palavras &quot;informações sobre baterias&quot;.
    testString: 'assert($("a").text().match(/^(information about batteries)$/g), "Your code should move the anchor <code>a</code> tags from around the words "Click here" to wrap around the words "information about batteries".");'
  - text: Verifique se o seu <code>a</code> elemento tem uma marca de fechamento.
    testString: 'assert(code.match(/<\/a>/g) && code.match(/<\/a>/g).length === code.match(/<a href=(""|"")>/g).length, "Make sure your <code>a</code> element has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightening speed. But chin up, fellow fighters, our time for victory may soon be near. <a href="">Click here</a> for information about batteries</p>
  </article>
</body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
