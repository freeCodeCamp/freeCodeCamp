---
id: 587d7789367417b2b2512aa4
title: Improve Accessibility of Audio Content with the audio Element
localeTitle: Mejorar la accesibilidad del contenido de audio con el elemento de audio
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
El elemento de <code>audio</code> de HTML5 da un significado semántico cuando envuelve el contenido de la transmisión de sonido o audio en su marca. El contenido de audio también necesita una alternativa de texto para que las personas sordas o con dificultades auditivas puedan acceder. Esto se puede hacer con el texto cercano en la página o un enlace a una transcripción. 
La etiqueta de <code>audio</code> admite el atributo de <code>controls</code> . Esto muestra los controles de reproducción, pausa y otros controles predeterminados del navegador, y es compatible con la funcionalidad del teclado. Este es un atributo booleano, lo que significa que no necesita un valor, su presencia en la etiqueta activa la configuración. 
Aquí hay un ejemplo: 
<blockquote>&lt;audio id=&quot;meowClip&quot; controls&gt;<br>&nbsp;&nbsp;&lt;source src=&quot;audio/meow.mp3&quot; type=&quot;audio/mpeg&quot; /&gt;<br>&nbsp;&nbsp;&lt;source src=&quot;audio/meow.ogg&quot; type=&quot;audio/ogg&quot; /&gt;<br>&lt;/audio&gt;<br></blockquote> 
<strong>Nota</strong> <br> El contenido multimedia suele tener componentes tanto visuales como auditivos. Necesita subtítulos sincronizados y una transcripción para que los usuarios con discapacidades visuales y / o auditivas puedan acceder a ella. Generalmente, un desarrollador web no es responsable de crear los subtítulos o la transcripción, pero necesita saber para incluirlos. 
</section>

## Instructions
<section id='instructions'> 
hora de tomar un descanso de Camper Cat y conocer a su compañero campista Zersiax (@zersiax), un campeón de accesibilidad y un usuario de lector de pantalla. Para escuchar un clip de su lector de pantalla en acción, agregue un elemento de <code>audio</code> después de la <code>p</code> . Incluir el atributo de <code>controls</code> . Luego coloque una etiqueta de <code>source</code> dentro de las etiquetas de <code>audio</code> con el atributo <code>src</code> configurado en &quot;https://s3.amazonaws.com/freecodecamp/screen-reader.mp3&quot; y <code>type</code> atributo establecido en &quot;audio / mpeg&quot;. 
<strong>Nota</strong> <br> El clip de audio puede sonar rápido y ser difícil de entender, pero esa es una velocidad normal para los usuarios de lectores de pantalla. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe tener una etiqueta de <code>audio</code> .
    testString: 'assert($("audio").length === 1, "Your code should have one <code>audio</code> tag.");'
  - text: Asegúrese de que su elemento de <code>audio</code> tiene una etiqueta de cierre.
    testString: 'assert(code.match(/<\/audio>/g).length === 1 && code.match(/<audio.*>[\s\S]*<\/audio>/g), "Make sure your <code>audio</code> element has a closing tag.");'
  - text: La etiqueta de <code>audio</code> debe tener el atributo de <code>controls</code> .
    testString: 'assert($("audio").attr("controls"), "The <code>audio</code> tag should have the <code>controls</code> attribute.");'
  - text: Su código debe tener una etiqueta de <code>source</code> .
    testString: 'assert($("source").length === 1, "Your code should have one <code>source</code> tag.");'
  - text: Su etiqueta de <code>source</code> debe estar dentro de las etiquetas de <code>audio</code> .
    testString: 'assert($("audio").children("source").length === 1, "Your <code>source</code> tag should be inside the <code>audio</code> tags.");'
  - text: El valor del atributo <code>src</code> en la etiqueta de <code>source</code> debe coincidir exactamente con el enlace en las instrucciones.
    testString: 'assert($("source").attr("src") === "https://s3.amazonaws.com/freecodecamp/screen-reader.mp3", "The value for the <code>src</code> attribute on the <code>source</code> tag should match the link in the instructions exactly.");'
  - text: Su código debe incluir un atributo de <code>type</code> en la etiqueta de <code>source</code> con un valor de audio / mpeg.
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
