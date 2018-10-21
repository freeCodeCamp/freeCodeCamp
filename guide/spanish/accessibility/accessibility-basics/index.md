---
title: Accessibility Basics
localeTitle: Conceptos básicos de accesibilidad
---
> "Las Artes Oscuras son numerosas, variadas, cambiantes e ilimitadas. Combatirlas es como luchar contra un monstruo de muchas cabezas al que cada vez que se le corta una, le nace otra aún más feroz e inteligente que la anterior. Estan combatiendo algo versátil, mudable e indestructible."
> 
> \--Profesor Severus Snape, saga de Harry Potter

El rol de la accesibilidad en el desarrollo es entender la perspectiva y las necesidades del usuario, y saber que la web y las aplicaciones son una solución para las personas con discapacidades.

En nuestra era, se inventan cada vez más tecnologías para facilitar tanto la vida de los desarrolladores, como la de los usuarios. Hasta qué punto esto es bueno, es un debate para otro momento. Por ahora basta con decir que la caja de herramientas de un desarrollador, especialmente de un desarrollador web, cambia tanto como las llamadas "artes oscuras" según nuestro amigo, Snape.

La accesibilidad es una de las herramientas de esa caja de herramientas que, idealmente, debería usarse en uno de los primeros pasos para escribir cualquier tipo de contenido web. Sin embargo, esta herramienta a menudo brilla por su ausencia en la caja de herramientas de la mayoría de los desarrolladores. Esto podría deberse a un simple caso de desconocimiento o, en casos extremos, de absoluta despreocupación. 

En mi vida como usuario, y más tarde como desarrollador que se beneficia de la accesibilidad en cualquier forma de contenido, he visto ambos extremos de ese espectro. Si estás leyendo este artículo, supongo que estás en una de las siguientes categorías:

*   Eres un desarrollador web novato y te gustaría saber más sobre accesibilidad.
*   Eres un desarrollador web experimentado y has perdido tu camino (esto se tratará más adelante)
*   Sientes que hay una obligación legal del trabajo y necesitas aprender más sobre ello.

Si no estás dentro de ninguna de estas categorías, por favor, házmelo saber. Siempre me gusta escuchar a mis lectores. Implementar la accesibilidad afecta a todo el equipo: al diseñador que elige los colores, al redactor publicitario que escribe la copia e incluso a ti, el desarrollador.

## Entonces, ¿qué es la accesibilidad?

La accesibilidad en sí misma es un término un tanto engañoso a veces, especialmente si el inglés es tu segundo idioma. A veces se conoce como diseño inclusivo.

Si tu sitio está en Internet, accesible a cualquier persona con un navegador web, en un sentido, ese sitio web es accesible para todos con un navegador web.

Pero, ¿es todo el contenido de tu sitio web realmente legible, útil y comprensible para todos? ¿No hay umbrales que impidan a ciertas personas 'acceder' a toda la información que se expone?

Podrías hacerte preguntas como las siguientes:

*   Si hay información que solo está contenida en un archivo de audio, ¿puede una persona sorda obtener esa información?
*   Si destacas una parte importante del sitio web con un color determinado, ¿lo podrá distinguir una persona daltónica?
*   Si hay imágenes en que transmiten información importante, ¿cómo lo sabrá una persona ciega o con visión baja?
*   Si desean navegar por la aplicación con un teclado o un mouth-stick, ¿será posible y predecible?
*   ¿La aplicación interpreta la orientación del dispositivo? ¿qué sucede si el usuario no puede cambiarlo físicamente?
*   ¿Se agota el tiempo de espera de la solicitud de los formularios para alguien que podría necesitar más tiempo?
*   ¿Tu aplicación aún funciona (mejora progresiva) suponiendo que JavaScript no se carga a tiempo?
*   Incluso puedes ir tan lejos como para decir, si tu sitio web tiene muchos recursos, ¿podrá alguien con una conexión lenta o irregular leer el contenido?

Aquí es donde la accesibilidad entra en juego. La accesibilidad básicamente implica hacer que el contenido sea tan amigable, tan fácil de 'acceder' como sea posible para la mayor cantidad de personas. Esto incluye a las personas sordas, con visión baja, ciegas, disléxicas, silenciadas, con una conexión lenta, daltónicas, con epilepsia, fatiga mental, edad, limitaciones físicas, etc.

## ¿Por qué implementar la accesibilidad?

Puedes pensar que la accesibilidad no te afecta ni a tus usuarios, así que... ¿por qué implementarla? ¿Qué haría una persona ciega con una herramienta de edición de fotos?

La verdad es que tienes razón hasta cierto punto. Si has investigado meticulosamente a los usuarios y has excluido cualquier posibilidad de que cierto grupo de personas visite tu sitio web, la prioridad para atender a ese grupo de personas disminuye bastante.

Sin embargo, hacer esta investigación es primordial para defender realmente dicha declaración. ¿Sabías que hay [jugadores ciegos?](http://audiogames.net) ¿e incluso [fotógrafos ciegos](http://peteeckert.com/)? ¿Y que los [músicos pueden ser sordos](http://mentalfloss.com/article/25750/roll-over-beethoven-6-modern-deaf-musicians)?

Si lo sabías, bien por ti. Si no, supongo que esto lleva todavía más a mi punto de partida.

La imagen se complica aún más cuando observamos la legislación que realmente obliga a hacer que ciertos sitios web y aplicaciones web sean accesibles. Un buen ejemplo es la [sección 508](http://jimthatcher.com/webcourse1.htm) con sede en los Estados Unidos. En estos momentos, esta ley se refiere principalmente a organizaciones gubernamentales, sitios web del sector público, etc. Sin embargo, las leyes cambian.

El año pasado, los sitios web de las aerolíneas se incluyeron en esta lista, lo que significa que incluso en Europa, los desarrolladores de sitios web de las aerolíneas se apresuraron a hacer que su contenido fuera accesible. No hacerlo puede suponer una multa a su compañía de literalmente decenas de miles de dólares por cada día en que el problema no se haya resuelto.

Hay variaciones de esta legislación en todo el mundo, algunas más severas e integrales que otras. Por desgracia, el desconocimiento no exime de cumplir la ley. 

## Bien, entonces la accesibilidad es un gran problema. Ahora, ¿cómo lo implementamos?

Esa pregunta, lamentablemente, es más difícil de responder de lo que parece. La cita de Harry Potter en la parte superior está ahí por una razón y no es que yo sea un ávido lector de fantasía.

Como dije, la accesibilidad es importante para un grupo grande de personas diferentes, cada una con sus propias necesidades. Hacer que tu sitio web funcione para todos, literalmente, es una tarea enorme y continua.

Para aportar un poco de método a la locura, se redactaron las Pautas de Accesibilidad al Contenido Web o [WCAG](https://www.wuhcag.com/web-content-accessibility-guidelines/). Este documento contiene una serie de criterios que puedes utilizar para verificar tu sitio web. Por ahora, cubriré algunos de los conceptos básicos más importantes aquí. Te enseñaré dónde están las frutas de las ramas más bajas, por así decirlo. En artículos posteriores, discutiré técnicas más avanzadas como \[WAI-ARIA\], que es importante para aplicaciones basadas en JavaScript.

### Hablar como los nativos

La especificación HTML es un documento que describe cómo se debe usar el lenguaje para crear sitios web. Las tecnologías de asistencia, como los lectores de pantalla, los programas de reconocimiento de voz, etc., conocen este documento. Sin embargo, los desarrolladores web a menudo no, o al menos no lo suficiente, y piensan que algo como esto está bien:

```html

    <div class="awesome-button"></div> 
 
    <span><strong>Huge heading I will style with CSS later</strong></span> 
 
    <span class="clickable-with-JavaScript">English</span> 
```

¿Adivinas qué? Tres de estos elementos rompen varios criterios de WCAG y, por lo tanto, no son accesibles en absoluto.

El primer elemento rompe el llamado 'nombre, rol, valor-criterio', que establece que todos los elementos en una página web deben exponer su nombre, su rol (botón similar) y su valor (como el contenido de un campo de edición) a las tecnologías asistivas. Este div realmente no proporciona ninguno de los tres, haciéndolo invisible para los lectores de pantalla.

El segundo elemento parece un encabezado visual después de estilizarlo con CSS, pero semánticamente es un lapso. Por lo tanto, las tecnologías de asistencia no sabrán que es un título. Un lector de pantalla leerá esto como texto regular, en lugar de un encabezado. Los lectores de pantalla a menudo tienen una tecla de acceso rápido para saltar rápidamente al encabezado más cercano, este encabezado no se incluirá en ese alcance.

El tercer elemento podría ser, por ejemplo, un elemento en el que un usuario puede hacer clic para cambiar el idioma del sitio web. Tal vez un menú animado de idiomas se expandirá cuando se haga clic. Sin embargo, esto también es un lapso y no expone su función (enlace o botón), lo que hace que las tecnologías de asistencia piensen que esta es solo la palabra inglés con algo de estilo.

Spans y divs no son elementos. Están destinados a contener otros elementos, no a ser elementos en sí mismos. Puedes arreglar esto de dos maneras:

*   Puedes agregar manualmente atributos ARIA a los elementos anteriores. Este es un tema avanzado y fuera del alcance de este artículo.
*   O, simplemente, hacer esto:

```html

    <button>This is a button</button> 
 
    <h2>Here's a heading level two</h2> 
 
    <a href="JavascriptThing">English</a> 
```

¡Zas! De repente, todos estos elementos son perfectamente accesibles, solo mediante el uso de HTML nativo, en otras palabras, HTML de la forma en la que estaba destinado a ser usado.

### Los cimientos no aguantan sin una buena estructura.

Un poco antes, os he hablado de las teclas de acceso rápido de un lector de pantalla para saltar de un encabezado a otro. De hecho, hay muchas teclas de acceso rápido como esta para saltar rápidamente a la tabla más cercana, al campo de formulario, al enlace, etc. Asegurarse de que estos encabezados estén realmente en lugares lógicos es una buena práctica y realmente disminuye los niveles de estrés de los usuarios de la tecnología de asistencia, lo cual es bueno si quieres que los visitantes sigan volviendo a tu sitio web.

Recuerda que los encabezados son jerárquicos. Si usas un h2, asegúrate de que los h3 que lo siguen tengan algo que ver con ese h2. No coloques un h3 para detalles de contacto debajo de un h2 para publicaciones de blog recientes. Una buena analogía aquí es un libro con capítulos, que tienen subsecciones. No pondrías una sección sobre cómo hornear galletas en medio de un capítulo sobre la preparación de verduras... Porque no lo harías, ¿no?

### ¿Cuándo usar el atributo alt?

Las imágenes en un sitio web son excelentes. Añaden una nueva capa a su contenido, realmente pueden hacer que la experiencia de los visitantes de tu sitio sea mucho más inmersiva y, en general, tenga un buen aspecto entre tanto texto. Una imagen puede decir más que mil palabras, ¿verdad?

Por supuesto. Es decir, si puedes verlas. En la especificación HTML5, un atributo img siempre debe tener un atributo alt. Este atributo está pensado como una alternativa a la imagen en caso de que no se pueda ver. Esto sería cierto para los visitantes ciegos del sitio web, pero también cuando la imagen no se pueda cargar por algún motivo. Por lo tanto, no agregar una etiqueta alt a un atributo img no solo rompe la accesibilidad, sino que va en contra de la especificación HTML5.

Imploro a cualquier desarrollador web que descubra que no lo hace, que engulla su sumbrero de programador y trabaje exclusivamente en Windows 95 durante una semana. Transcurrido el tiempo, que escriba un ensayo sobre lo que ha aprendido de esta prueba para que pueda reírme durante el café de la tarde.

Ahora bien, te advierto una cosa; los atributos alt son obligatorios según la especificación HTML5, pero no es obligatorio rellenarlos. `<img src="awesome-image.jpg", alt="">` es un código HTML5 legal.

¿Debería por lo tanto llenar las etiquetas alt para todas las imágenes? Depende de la imagen, la verdad. Para las imágenes de fondo, la respuesta suele ser no, pero de todos modos deberías usar CSS para este tipo de imágenes.

Para imágenes puramente decorativas que no tienen información en absoluto, básicamente tienes la libertad de elegir. O bien poner algo útil y descriptivo o nada en absoluto.

Para las imágenes que contienen información, como un folleto, un mapa, un gráfico, etc., no usar el atributo alt no seguiría los criterios WCAG a menos que proporcionaras una alternativa textual. Este suele ser un atributo alt, pero también puede ser un bloque de texto justo debajo o al lado de la imagen.

Para imágenes de texto, el texto se puede incluir en el atributo alt o se puede ofrecer de alguna manera alternativa. El problema es que agregar la alternativa textual en la misma página, básicamente haría que el mismo contenido se muestre dos veces para las personas que pueden ver la imagen, por lo que el atributo alt suele ser una mejor opción en este caso.

El texto debe proporcionar el contexto y la información para funcionar como alternativa a ver la imagen. Simplemente no es suficiente escribir "imagen de globos aerostáticos": ¿por qué hay imágenes de globos allí? Si la imagen está estilizada o transmite un significado emocional, esto puede incluirse.

### No puedo leer tu letra, hijo

Incluso las personas que no usan gafas y no tienen ningún problema con la vista se benefician de una fuente fácil de leer y un contraste adecuado. Estoy seguro de que te estremecerías si tuvieras que rellenar un formulario con letras amarillo claro sobre un fondo blanco. Para las personas cuya vista no es tan buena, como tu abuela, por ejemplo, esto se vuelve irremediablemente peor.

La WCAG tiene relaciones de contraste para letras más pequeñas y más grandes y hay muchas herramientas para verificar si las relaciones de contraste son lo suficientemente fuertes. La información y las herramientas están ahí, ve y úsalas.

Un buen lugar para comenzar a verificar el contraste de color es mediante el uso del [verificador de contrastes de color de WebAIM](https://webaim.org/resources/contrastchecker/).

### ¿Qué hace este botón?

Ya que hablamos de formularios, echemos un vistazo rápido a la etiqueta de `input` . Este pequeñajo es de lo más importante.

Cuando añades algunos campos de entrada en una página web, puedes usar etiquetas para ... bueno ... etiquetarlos. Sin embargo, ponerlos uno al lado del otro no es suficiente. El atributo que necesitas es el atributo for, que toma el ID de un campo de entrada posterior. De esta manera, las tecnologías de asistencia saben qué etiqueta asociar con qué campo de formulario.

Supongo que la mejor manera de ilustrar esto es con un ejemplo:

```html

    <label for='username'> 
 
    <input type='text' id='username'> 
```

Esto hará que, por ejemplo, un lector de pantalla diga "nombre de usuario, campo de edición de texto", en lugar de solo decir "campo de edición de texto" y requiera que el usuario busque una etiqueta. Esto ayuda mucho a las personas que usan software de reconocimiento de voz.

### Eso son palabras mayores

Tomemos un pequeño descanso. Quiero que veas una página web muy bien diseñada. Puede ser cualquier página. Vamos, te espero.

¿Ya has vuelto? Vale, genial. Ahora, mira la página de nuevo, pero desactiva todos los CSS. ¿Todavía se ve bien? ¿El contenido de la página aún está en un orden lógico? Si es así, genial, has encontrado una página con una estructura HTML decente. (Una forma de ver fácilmente una página sin CSS es cargar el sitio en la [herramienta de evaluación de accesibilidad web WAVE](http://wave.webaim.org) de WebAIM. Luego, accede a la pestaña "sin estilos" para verla sin estilos).

Si no ha sido así, genial. Ahora te haces a la idea de lo que tengo que ver a diario cuando me encuentro con un sitio web mal estructurado.

Honestamente: tiendo a maldecir cuando esto sucede. Ruidosamente. Con vigor.

¿Por qué es tan importante esto? Te lo explico.

_¡Alerta de spoiler!_ Para aquellos que solo han cubierto el plan de estudios HTML/CSS hasta ahora, vamos a avanzar un poco.

Los lectores de pantalla y otras tecnologías de asistencia muestran una representación completa de una página web basada en el DOM de su sitio web. Todo el CSS posicional se ignora en esta versión de la página web.

DOM significa Document Object Model y es la estructura en forma de árbol de los elementos HTML del sitio web. Todos los elementos HTML son nodos que se vinculan jerárquicamente en función de las etiquetas HTML que se utiliza y JavaScript. Los lectores de pantalla usan este árbol DOM para trabajar con su código HTML.

Si colocas un elemento en la parte superior de otro elemento, también se mostrará en la parte superior del árbol DOM. Por lo tanto, el lector de pantalla también lo colocará en la parte superior, incluso si lo mueves hacia la parte inferior de la página utilizando CSS.

Por lo tanto, un consejo final que quiero daros a todos es prestar atención al orden de tu HTML, no solo al sitio web final con su CSS. ¿Sigue teniendo sentido sin CSS? ¡Estupendo!

Oh, ¿no lo tiene? En ese caso ... es posible que algún día oigas una maldición apagada en la brisa fría mientras caminas por la calle. Y es muy probable que sea yo, visitando tu sitio web.

En ese caso, en realidad, solo tengo dos palabras para ti. A menudo he escuchado esas mismas dos palabras dirigidas a mí cuando escribí un código incorrecto y es con gran placer que te digo: "¡Ve y arréglalo!"

### Contraste de color

El contraste de color debe ser un mínimo de 4.5: 1 para texto normal y 3: 1 para texto grande. "Texto grande" definido como texto que tiene al menos 18 puntos (24px) o 14 puntos (18.66px) y negrita [Comprobador de Contraste](https://webaim.org/resources/contrastchecker/).

## Conclusión

He hablado sobre accesibilidad, qué es, qué no es y por qué es importante.

También te he dado lo básico, lo más básico, para hacer que la accesibilidad sea correcta. Sin embargo, estos elementos aunque básicos, son muy poderosos y pueden hacerte la vida mucho más fácil al codificar la accesibilidad.

Si hablamos en términos de FCC, debes tener esto en cuenta al realizar el plan de estudios HTML/CSS, así como el plan de estudios de JavaScript.  
En los artículos posteriores, abordaré varios temas más de primera clase. Una serie de preguntas que voy a responder son:

*   Agregar encabezados estructurados suena bien, pero no encaja en mi diseño. ¿Qué hago?
*   ¿Hay alguna manera de escribir contenido que solo vean los lectores de pantalla y otras tecnologías de asistencia?
*   ¿Cómo hago accesibles los componentes personalizados de JavaScript?
*   ¿Qué herramientas hay, además de las pruebas de usuario inclusivas, que pueden usarse para desarrollar la experiencia más sólida y accesible para el grupo más grande de usuarios?
