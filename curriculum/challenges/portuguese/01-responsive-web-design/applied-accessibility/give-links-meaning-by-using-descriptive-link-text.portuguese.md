---
id: 587d778f367417b2b2512aae
title: Give Links Meaning by Using Descriptive Link Text
challengeType: 0
videoUrl: ''
localeTitle: Dar sentido aos links usando texto descritivo nos links 
---

## Descrição
<section id="description"> Os usuários de leitores de tela têm opções diferentes para o tipo de conteúdo que o dispositivo lê. Isso inclui pular para (ou sobre) elementos de referência, pular para o conteúdo principal ou obter um resumo de página dos títulos. Outra opção é apenas ouvir os links disponíveis numa página. Os leitores de tela fazem isso lendo o texto do link ou o que está dentro das etiquetas âncora ( <code>a</code> ). Ter uma lista de links &quot;clique aqui&quot; ou &quot;leia mais&quot; não é útil. Em vez disso, você deve usar um texto breve, mas descritivo nas etiquetas <code>a</code> para apresentar mais significado a esses usuários. </section>

## Instruções
undefined

## Testes
<section id='tests'>

```yml
tests:
  - text: O seu código deve mover a etiqueta âncora com <code>a</code> que envolve as palavras &quot;Clicar aqui&quot; para passar a envolver as palavras &quot;informações sobre baterias&quot;.
    testString: 'assert($("a").text().match(/^(informações sobre baterias)$/g), "O seu código deve mover a etiqueta âncora com <code>a</code> que envolve as palavras &quot;Clicar aqui&quot; para passar a envolver as palavras &quot;informações sobre baterias&quot;.");'
  - text: Assegure-se que o seu elemento <code>a</code> tem uma marca de fecho.
    testString: 'assert(code.match(/<\/a>/g) && code.match(/<\/a>/g).length === code.match(/<a href=(""|"")>/g).length, "Assegure-se que o seu elemento <code>a</code> tem uma marca de fecho.");'

```

</section>

## Semente do Desafio
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Pensamentos Profundos com o Mestre Gato Campista</h1>
  </header>
  <article>
    <h2>Derrotando o teu Inimigo: o Ponto Vermelho &eacute; Nosso!</h2>
    <p>Em todo o mundo os felinos t&ecirc;m estado em guerra com um dos mais persistentes inimigos. Este vermelho mal&eacute;volo combina tanto uma manhosa invisibilidade como uma velocidade rel&acirc;mpago. Mas, animem-se, caros companheiros de luta, a nossa hora da vit&oacute;ria pode estar muito perto em breve. <a href="">Clicar aqui</a> para informa&ccedil;&otilde;es sobre baterias</p>
  </article>
</body>

```

</div>



</section>

## Solução
<section id='solution'>

```js
// solution required
```
</section>
