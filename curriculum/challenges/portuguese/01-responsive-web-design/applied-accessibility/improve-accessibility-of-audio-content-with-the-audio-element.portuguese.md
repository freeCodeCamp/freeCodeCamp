---
id: 587d7789367417b2b2512aa4
title: Improve Accessibility of Audio Content with the audio Element
challengeType: 0
videoUrl: ''
localeTitle: Melhore a acessibilidade do conteúdo de áudio com o elemento de áudio
---

## Description
<section id="description"> O elemento de <code>audio</code> do HTML5 fornece significado semântico quando ele envolve o som ou o conteúdo do fluxo de áudio na sua marcação. O conteúdo de áudio também precisa de uma alternativa em texto para ser acessível a pessoas surdas ou com deficiência auditiva. Isso pode ser feito com um texto próximo na página ou um link para uma transcrição. A tag de <code>audio</code> suporta o atributo <code>controls</code> . Isso mostra a reprodução, a pausa e outros controles padrão do navegador e suporta a funcionalidade do teclado. Este é um atributo booleano, o que significa que não precisa de um valor, sua presença na tag ativa a configuração. Aqui está um exemplo: <blockquote> &lt;audio id = &quot;meowClip&quot; controla&gt; <br> &lt;fonte src = &quot;audio / meow.mp3&quot; type = &quot;audio / mpeg&quot; /&gt; <br> &lt;source src = &quot;audio / meow.ogg&quot; tipo = &quot;audio / ogg&quot; /&gt; <br> &lt;/ audio&gt; <br></blockquote> <strong>Nota</strong> <br> O conteúdo multimídia geralmente tem componentes visuais e auditivos. Ele precisa de legendas sincronizadas e uma transcrição para que os usuários com deficiências visuais e / ou auditivas possam acessá-lo. Geralmente, um desenvolvedor da Web não é responsável pela criação das legendas ou transcrição, mas precisa saber para incluí-las. </section>

## Instructions
<section id="instructions"> Hora de fazer uma pausa na Camper Cat e conhecer Zersiax (@zersiax), um defensor da acessibilidade e usuário de leitor de tela. Para ouvir um clipe do seu leitor de tela em ação, adicione um elemento de <code>audio</code> após o <code>p</code> . Inclua o atributo <code>controls</code> . Em seguida, coloque uma tag de <code>source</code> dentro das tags de <code>audio</code> com o atributo <code>src</code> definido como &quot;https://s3.amazonaws.com/freecodecamp/screen-reader.mp3&quot; e <code>type</code> atributo definido como &quot;audio / mpeg&quot;. <strong>Nota</strong> <br> O clipe de áudio pode soar rápido e difícil de entender, mas essa é uma velocidade normal para os usuários do leitor de tela. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve ter uma tag de <code>audio</code> .
    testString: 'assert($("audio").length === 1, "Your code should have one <code>audio</code> tag.");'
  - text: Certifique-se de que seu elemento de <code>audio</code> tenha uma tag de fechamento.
    testString: 'assert(code.match(/<\/audio>/g).length === 1 && code.match(/<audio.*>[\s\S]*<\/audio>/g), "Make sure your <code>audio</code> element has a closing tag.");'
  - text: A tag de <code>audio</code> deve ter o atributo <code>controls</code> .
    testString: 'assert($("audio").attr("controls"), "The <code>audio</code> tag should have the <code>controls</code> attribute.");'
  - text: Seu código deve ter uma tag de <code>source</code> .
    testString: 'assert($("source").length === 1, "Your code should have one <code>source</code> tag.");'
  - text: Sua tag de <code>source</code> deve estar dentro das tags de <code>audio</code> .
    testString: 'assert($("audio").children("source").length === 1, "Your <code>source</code> tag should be inside the <code>audio</code> tags.");'
  - text: O valor para o atributo <code>src</code> na tag de <code>source</code> deve corresponder exatamente ao link nas instruções.
    testString: 'assert($("source").attr("src") === "https://s3.amazonaws.com/freecodecamp/screen-reader.mp3", "The value for the <code>src</code> attribute on the <code>source</code> tag should match the link in the instructions exactly.");'
  - text: Seu código deve incluir um atributo <code>type</code> na tag de <code>source</code> com um valor de audio / mpeg.
    testString: 'assert($("source").attr("type") === "audio/mpeg", "Your code should include a <code>type</code> attribute on the <code>source</code> tag with a value of audio/mpeg.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

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

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
