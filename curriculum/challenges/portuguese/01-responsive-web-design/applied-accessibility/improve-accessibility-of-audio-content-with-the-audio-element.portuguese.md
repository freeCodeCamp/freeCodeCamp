---
id: 587d7789367417b2b2512aa4
title: Improve Accessibility of Audio Content with the audio Element
challengeType: 0
videoUrl: ''
localeTitle: Melhore a acessibilidade do conteúdo de áudio com o elemento de áudio
---

## Descrição
<section id="description"> O elemento de <code>audio</code> do HTML5 fornece significado semântico quando ele envolve o som ou o conteúdo do fluxo de áudio na sua marcação. O conteúdo de áudio também precisa de uma alternativa em texto para ser acessível a pessoas surdas ou com deficiência auditiva. Isso pode ser feito com um texto próximo na página ou um link para uma transcrição. A etiqueta de <code>audio</code> suporta o atributo <code>controls</code> . Isso mostra a reprodução, a pausa e outros controles padrão do navegador e suporta a funcionalidade do teclado. Este é um atributo booleano, o que significa que não precisa de um valor, sua presença na etiqueta ativa a configuração. Aqui está um exemplo: <blockquote> &lt;audio id = &quot;meowClip&quot; controla&gt; <br> &lt;fonte src = &quot;audio / meow.mp3&quot; type = &quot;audio / mpeg&quot; /&gt; <br> &lt;source src = &quot;audio / meow.ogg&quot; tipo = &quot;audio / ogg&quot; /&gt; <br> &lt;/ audio&gt; <br></blockquote> <strong>Nota</strong> <br> O conteúdo multimídia geralmente tem componentes visuais e auditivos. Ele precisa de legendas sincronizadas e uma transcrição para que os usuários com deficiências visuais e / ou auditivas possam acessá-lo. Geralmente, um desenvolvedor da Web não é responsável pela criação das legendas ou transcrição, mas precisa saber para incluí-las. </section>

## Instruções
<section id="instructions"> Hora de fazer uma pausa em Gato Campista e conhecer Zersiax (@zersiax), um defensor da acessibilidade e usuário de leitor de tela. Para ouvir um clipe do seu leitor de tela em ação, adicione um elemento de <code>audio</code> após o <code>p</code> . Inclua o atributo <code>controls</code> . Em seguida, coloque uma etiqueta de <code>source</code> dentro das etiquetas de <code>audio</code> com o atributo <code>src</code> definido como &quot;https://s3.amazonaws.com/freecodecamp/screen-reader.mp3&quot; e <code>type</code> atributo definido como &quot;audio / mpeg&quot;. <strong>Nota</strong> <br> O clipe de áudio pode soar rápido e difícil de entender, mas essa é uma velocidade normal para os usuários do leitor de tela. </section>

## Testes
<section id='tests'>

```yml
tests:
  - text: O seu código deve ter uma etiqueta de <code>audio</code>.
    testString: 'assert($("audio").length === 1, "O seu código deve ter uma etiqueta de <code>audio</code>.");'
  - text: Certifique-se de que o seu elemento de <code>audio</code> tenha uma etiqueta de fechamento.
    testString: 'assert(code.match(/<\/audio>/g).length === 1 && code.match(/<audio.*>[\s\S]*<\/audio>/g), "Certifique-se de que o seu elemento de <code>audio</code> tenha uma etiqueta de fecho.");'
  - text: A etiqueta de <code>audio</code> deve ter o atributo <code>controls</code>.
    testString: 'assert($("audio").attr("controls"), "A etiqueta de <code>audio</code> deve ter o atributo <code>controls</code>.");'
  - text: O seu código deve ter uma etiqueta de <code>source</code>.
    testString: 'assert($("source").length === 1, "O seu código deve ter uma etiqueta de <code>source</code>.");'
  - text: Sua etiqueta de <code>source</code> deve estar dentro das etiquetas de <code>audio</code>.
    testString: 'assert($("audio").children("source").length === 1, "Sua etiqueta de <code>source</code> deve estar dentro das etiquetas de <code>audio</code>.");'
  - text: O valor para o atributo <code>src</code> na etiqueta de <code>source</code> deve corresponder exatamente ao link nas instruções.
    testString: 'assert($("source").attr("src") === "https://s3.amazonaws.com/freecodecamp/screen-reader.mp3", "O valor para o atributo <code>src</code> na etiqueta de <code>source</code> deve corresponder exatamente ao link nas instruções.");'
  - text: O seu código deve incluir um atributo <code>type</code> na etiqueta de <code>source</code> com um valor de audio/mpeg.
    testString: 'assert($("source").attr("type") === "audio/mpeg", "O seu código deve incluir um atributo <code>type</code> na etiqueta de <code>source</code> com um valor de audio/mpeg.");'

```

</section>

## Semente do Desafio
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Verdadeiros Ninjas Programadores</h1>
  </header>
  <main>
    <p>Um clipe de &aacute;udio do leitor de tela Zersiax's em a&ccedil;&atilde;o.</p>



  </main>
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
