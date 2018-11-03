---
title: Accessibility Basics
localeTitle: Conceptos básicos de accesibilidad
---
> "Las Artes Oscuras son muchas, variadas, siempre cambiantes y eternas. Luchar contra ellas es como luchar contra un monstruo con muchas cabezas, que, cada vez que se corta un cuello, brota una cabeza aún más feroz e inteligente que antes. Estás luchando contra eso. el cual es fijo, mutante, indestructible ".
> 
> \--Profesor Severus Snape, Harry Potter Series

El rol de la accesibilidad en el desarrollo es esencialmente entender la perspectiva y las necesidades del usuario, y saber que la web y las aplicaciones son una solución para las personas con discapacidades.

En esta época, se inventan cada vez más nuevas tecnologías para facilitar la vida de los desarrolladores, así como de los usuarios. Hasta qué punto esto es bueno, es un debate para otro momento, por ahora basta con decir que la caja de herramientas de un desarrollador, especialmente un desarrollador web, está tan cambiante como las llamadas "artes oscuras" según nuestro amigo. Snape.

Una herramienta en esa caja de herramientas debe ser la accesibilidad. Es una herramienta que, idealmente, debería usarse en uno de los primeros pasos para escribir cualquier forma de contenido web. Sin embargo, esta herramienta a menudo no está tan bien presentada en la caja de herramientas de la mayoría de los desarrolladores. Esto podría deberse a un simple caso de no saber que existe incluso en casos extremos, como no preocuparse por ello.

En mi vida como usuario, y más tarde como desarrollador, que se beneficia de la accesibilidad en cualquier forma de contenido, he visto ambos extremos de ese espectro. Si estás leyendo este artículo, supongo que estás en una de las siguientes categorías:

*   Usted es un desarrollador web novato y le gustaría saber más sobre accesibilidad.
*   Eres un desarrollador web experimentado y has perdido tu camino (más sobre esto más adelante)
*   Usted siente que hay una obligación legal del trabajo y necesita aprender más sobre ello.

Si cae fuera de estas categorías bastante amplias, por favor hágamelo saber. Siempre me gusta escuchar de las personas que leen sobre lo que escribo. Implementar la accesibilidad afecta a todo el equipo, desde los colores elegidos por el diseñador, la copia escrita por el redactor publicitario, y hasta usted, el desarrollador.

## Entonces, ¿qué es la accesibilidad de todos modos?

La accesibilidad en sí misma es un término un tanto engañoso a veces, especialmente si el inglés es su segundo idioma. A veces se le conoce como diseño inclusivo.

Si su sitio está en Internet, accesible a cualquier persona con un navegador web, en un sentido, ese sitio web es accesible para todos con un navegador web.

Pero, ¿es todo el contenido de su sitio web realmente legible, utilizable y comprensible para todos? ¿No hay umbrales que impidan a ciertas personas 'acceder' a toda la información que está exponiendo?

Podrías hacerte preguntas como las siguientes:

*   Si agrega información que solo está contenida en un archivo de audio, ¿puede una persona sorda obtener esa información?
*   Si denota una parte importante de su sitio web con un color determinado, ¿lo sabrá una persona que no conoce los colores?
*   Si agrega imágenes en su sitio web que transmiten información importante, ¿cómo lo sabrá una persona ciega o con baja visión?
*   Si desea navegar por la aplicación con el teclado o la boquilla, ¿será posible y predecible?
*   ¿Su aplicación asume la orientación del dispositivo y qué sucede si el usuario no puede cambiarlo físicamente?
*   ¿Hay aspectos perdonados de su solicitud para alguien que podría necesitar más tiempo para completar un formulario?
*   ¿Su aplicación aún funciona (mejora progresiva) suponiendo que JavaScript no se carga a tiempo?
*   Incluso puede ir tan lejos como para decir, si su sitio web tiene muchos recursos, ¿podrá alguien con una conexión lenta o irregular leer su contenido?

Aquí es donde la accesibilidad entra en juego. La accesibilidad básicamente implica hacer que su contenido sea tan amigable, tan fácil de 'acceder' como sea posible para la mayor cantidad de personas. Esto incluye a las personas sordas, con baja visión, ciegas, disléxicas, silenciadas, con una conexión lenta, sin color, con epilepsia, fatiga mental, edad, limitaciones físicas, etc.

## ¿Por qué implementar la accesibilidad?

Puede pensar que la accesibilidad no se aplica a usted ni a sus usuarios, ¿por qué implementarla? ¿Qué haría una persona ciega con una herramienta de edición de fotos?

La verdad es que tienes razón hasta cierto punto. Si ha investigado meticulosamente a los usuarios y ha excluido cualquier posibilidad de que cierto grupo de personas visite su sitio web, la prioridad para atender a ese grupo de personas disminuye bastante.

Sin embargo, hacer esta investigación es clave para defender realmente dicha declaración. ¿Sabías que había [jugadores ciegos?](http://audiogames.net) e incluso [los fotógrafos ciegos?](http://peteeckert.com/) . ¿Quizás sabías que los [músicos pueden ser sordos](http://mentalfloss.com/article/25750/roll-over-beethoven-6-modern-deaf-musicians) ?

Si lo hiciste, bien por ti. Si no, supongo que esto lleva a mi punto de partida más a casa.

La imagen se complica aún más cuando observamos la legislación que realmente lo obliga a hacer que ciertos sitios web y aplicaciones web sean accesibles. Un buen ejemplo es la [sección 508](http://jimthatcher.com/webcourse1.htm) con sede en los Estados Unidos. En este momento, esta ley se refiere principalmente a organizaciones gubernamentales, sitios web del sector público, etc. Sin embargo, las leyes cambian.

El año pasado, los sitios web de las aerolíneas se incluyeron en esta lista, lo que significa que incluso en Europa, los desarrolladores de sitios web de las aerolíneas se apresuraron a hacer que su contenido sea accesible. No hacerlo puede dar a su compañía una multa de literalmente decenas de miles de dólares por cada día que el problema no se resuelva.

Hay variaciones en esta legislación en todo el mundo, algunas más severas y abarcadoras que otras. El no saber sobre este hecho no hace que la demanda desaparezca, tristemente.

## Ok, entonces la accesibilidad es un gran problema. Ahora, ¿cómo lo implementamos?

Esa pregunta, lamentablemente, es más difícil de responder de lo que parece. La cita de Harry Potter en la parte superior está ahí por una razón, y no es que yo sea un ávido lector de Fantasía.

Como dije anteriormente, la accesibilidad es importante para un grupo grande de personas diferentes, cada una con sus propias necesidades. Hacer que su sitio web funcione para todos, literalmente, es una tarea grande y continua.

Para aportar un poco de método a la locura, se redactaron las Pautas de Accesibilidad al Contenido Web o [WCAG](https://www.wuhcag.com/web-content-accessibility-guidelines/) . Este documento contiene una serie de criterios que puede utilizar para verificar su sitio web. Por ahora, cubriré algunos de los conceptos básicos más importantes aquí. Te señalaré las frutas bajas, por así decirlo. En artículos posteriores, discutiré técnicas más avanzadas como \[WAI-ARIA\], que es importante para aplicaciones basadas en JavaScript.

### Hablar como los nativos

La especificación HTML es un documento que describe cómo se debe usar el lenguaje para crear sitios web. Las tecnologías de asistencia, como los lectores de pantalla, los programas de reconocimiento de voz, etc. conocen este documento. Sin embargo, los desarrolladores web a menudo no lo son, o al menos no lo suficiente, y piensan que algo como esto está bien:

```html

    <div class="awesome-button"></div> 
 
    <span><strong>Huge heading I will style with CSS later</strong></span> 
 
    <span class="clickable-with-JavaScript">English</span> 
```

¿Adivina qué? Los tres de estos elementos rompen varios criterios de WCAG y, por lo tanto, no son accesibles en absoluto.

El primer elemento rompe el llamado 'nombre, rol, valor-criterio', que establece que todos los elementos en una página web deben exponer su nombre, su rol (botón similar) y su valor (como el contenido de un campo de edición) a las tecnologías asistivas. Este div realmente no proporciona ninguno de los tres, haciéndolo invisible para los lectores de pantalla.

El segundo elemento parece un encabezado visual después de estilizarlo con CSS, pero semánticamente es un lapso. Por lo tanto, las tecnologías de asistencia no sabrán que es un título. Un lector de pantalla leerá esto como texto regular, en lugar de un encabezado. Los lectores de pantalla a menudo tienen una tecla de acceso rápido para saltar rápidamente al encabezado más cercano, este encabezado no se incluirá en ese alcance.

El tercer elemento podría ser, por ejemplo, un elemento en el que un usuario puede hacer clic para cambiar el idioma del sitio web. Tal vez un menú animado de idiomas se expandirá cuando se haga clic. Sin embargo, esto también es un lapso y no expone su función (enlace o botón), lo que hace que las tecnologías de asistencia piensen que esta es solo la palabra inglés con algo de estilo.

Spans y divs no son elementos. Están destinados a contener otros elementos, no a ser elementos en sí mismos. Puedes arreglar esto de dos maneras:

*   Puede agregar manualmente atributos ARIA a los elementos anteriores. Este es un tema avanzado y fuera del alcance de este artículo.
*   O, simplemente puede hacer esto:

```html

    <button>This is a button</button> 
 
    <h2>Here's a heading level two</h2> 
 
    <a href="JavascriptThing">English</a> 
```

Auge. De repente, todos estos elementos ahora son perfectamente accesibles, solo mediante el uso de HTML nativo. HTML de la forma en que estaba destinado a ser utilizado, en otras palabras.

### Una fundación no puede soportar sin estructura.

Un poco antes, toqué las teclas de acceso rápido de un lector de pantalla para saltar de un encabezado a otro. De hecho, hay muchas teclas de acceso rápido como esta para saltar rápidamente a la tabla más cercana, campo de formulario, enlace, etc. Asegurarse de que estos encabezados estén realmente en lugares lógicos es una buena práctica y realmente disminuye los niveles de estrés de los usuarios de la tecnología de asistencia, lo cual es bueno Si quieres que los visitantes sigan regresando a tu sitio web.

También recuerda que los encabezados son jerárquicos. Si usas un h2, asegúrate de que los h3 que lo siguen tengan algo que ver con ese h2. No coloque un h3 para detalles de contacto debajo de su h2 para publicaciones de blog recientes. Una buena analogía aquí es un libro con capítulos, que tienen subsecciones. No pondría una sección sobre cómo hornear galletas en medio de un capítulo sobre la preparación de verduras ... o ... no lo haría ... ¿verdad?

### ¿Cuál es la alternativa?

Las imágenes en un sitio web son excelentes. Añaden una nueva capa a su contenido, realmente pueden hacer que la experiencia de los visitantes de su sitio sea mucho más inmersiva y, en general, se vea bien entre todo ese texto. Una imagen puede decir más que mil palabras, ¿verdad?

Ciertamente. Es decir, si puedes verlos. En la especificación HTML5, un atributo img siempre debe tener un atributo alt. Este atributo está pensado como una alternativa a la imagen en caso de que no se pueda ver. Esto sería cierto para los visitantes ciegos de su sitio web, pero también cuando su imagen no se pueda cargar por algún motivo. Por lo tanto, no agregar una etiqueta alt a un atributo img no solo rompe la accesibilidad, sino que va en contra de la especificación HTML5.

Imploro a cualquier desarrollador web que se sorprenda haciendo esto para comerse el sombrero de su programador y trabajar en Windows 95 exclusivamente durante una semana. Después de que se acabe el tiempo, escribe un ensayo sobre lo que has aprendido de esta prueba para que pueda reírme durante mi café de la tarde.

Ahora, hay una advertencia aquí. Los atributos Alt son obligatorios según la especificación HTML5, pero no es obligatorio rellenarlos. `<img src="awesome-image.jpg", alt="">` es un código HTML5 legal.

¿Debería por lo tanto llenar las etiquetas alt para todas las imágenes? Depende de la imagen, de verdad. Para las imágenes de fondo, la respuesta suele ser no, pero de todos modos debería usar CSS.

Para imágenes puramente decorativas que no tienen información en absoluto, básicamente tiene la libertad de elegir. O bien poner algo útil y descriptivo o nada en absoluto.

Para las imágenes que contienen información, como un folleto, un mapa, un gráfico, etc., no agregue saltos de texto alternativos WCAG a menos que proporcione una alternativa textual. Este suele ser un atributo alternativo, pero también puede ser un bloque de texto justo debajo o al lado de la imagen.

Para imágenes de texto, el texto se puede incluir en el atributo alt o se puede ofrecer de alguna manera alternativa. El problema es que agregar la alternativa textual en la misma página básicamente haría que el mismo contenido se muestre dos veces para las personas que pueden ver la imagen, por lo que el atributo alt es mejor en este caso.

El texto debe proporcionar el contexto y la información que es una alternativa para ver la imagen. Simplemente no es suficiente escribir "imagen de globos aerostáticos": ¿por qué hay imágenes de globos allí? Si la imagen está estilizada o transmite un significado emocional, esto puede incluirse.

### No puedo leer tu garabato hijo

Incluso las personas que no usan gafas y no tienen ningún problema con la vista se benefician de una fuente fácil de leer y un contraste adecuado. Estoy seguro de que te estremecerías si tuvieras que rellenar un formulario en el que las letras de color amarillo claro y sin remedio se colocan sobre un fondo blanco. Para las personas cuya vista no es tan buena, como su abuela, por ejemplo, esto se vuelve irremediablemente peor.

La WCAG tiene relaciones de contraste para letras más pequeñas y más grandes y hay muchas herramientas para verificar si las relaciones de contraste son lo suficientemente fuertes. La información y las herramientas están ahí, ve y úsala.

Un buen lugar para comenzar a verificar el contraste de color es mediante el uso del [verificador de](https://webaim.org/resources/contrastchecker/) contraste de color [WebAIM](https://webaim.org/resources/contrastchecker/) .

### Qué hace este botón?

Mientras estamos en el tema de los formularios, echemos un vistazo rápido a la etiqueta de `input` . Este pequeño es algo importante.

Cuando coloca algunos campos de entrada en una página web, puede usar etiquetas para ... bueno ... etiquetarlos. Sin embargo, ponerlos uno al lado del otro no es suficiente. El atributo que desea es el atributo for, que toma el ID de un campo de entrada posterior. De esta manera, las tecnologías de asistencia saben qué etiqueta asociar con qué campo de formulario.

Supongo que la mejor manera de ilustrar esto es dando un ejemplo:

```html

    <label for='username'> 
 
    <input type='text' id='username'> 
```

Esto hará que, por ejemplo, un lector de pantalla diga "nombre de usuario, campo de edición de texto", en lugar de solo informar el "campo de edición de texto" y requiera que el usuario busque una etiqueta. Esto también ayuda realmente a las personas que usan software de reconocimiento de voz.

### Eso es una tarea difícil

Tomemos un pequeño descanso. Quiero que veas una página web muy bien diseñada. Puede ser cualquier página. Vamos, voy a esperar.

¿Espalda? Vale genial. Ahora, mira la página de nuevo, pero desactiva todos los CSS. ¿Todavía se ve bien? ¿El contenido de la página aún está en un orden lógico? Si es así, genial. Has encontrado una página con una estructura HTML decente. (Una forma de ver fácilmente una página sin CSS es cargar el sitio en la [Herramienta de evaluación de accesibilidad web WAVE](http://wave.webaim.org) de WebAIM. Luego, haga clic en la pestaña "Sin estilos" para verla sin estilos).

Si no, genial. Ahora tiene una impresión de lo que tengo que enfrentar a diario cuando me encuentro con un sitio web mal estructurado.

Revelación completa: tiendo a maldecir cuando esto sucede. Ruidosamente. Con vigor.

¿Por qué esto es tan importante? Lo explicaré.

_¡Alerta de spoiler!_ Para aquellos que solo han cubierto el plan de estudios HTML / CSS hasta ahora, vamos a avanzar un poco.

Los lectores de pantalla y otras tecnologías de asistencia representan una representación completa de una página web basada en el DOM de su sitio web. Todo el CSS posicional se ignora en esta versión de la página web.

DOM significa Document Object Model y es la estructura en forma de árbol de los elementos HTML de su sitio web. Todos sus elementos HTML son nodos que se vinculan jerárquicamente en función de las etiquetas HTML que utiliza y JavaScript. Los lectores de pantalla usan este árbol DOM para trabajar con su código HTML.

Si coloca su elemento en la parte superior de su elemento, también se mostrará en la parte superior de su árbol DOM. por lo tanto, el lector de pantalla también lo colocará en la parte superior, incluso si lo mueve hacia la parte inferior de la página utilizando CSS.

Por lo tanto, un consejo final que quiero darles todo es prestar atención al orden de su HTML, no solo a su sitio web terminado con CSS agregado. ¿Sigue teniendo sentido sin CSS? ¡Estupendo!

Oh ... no lo hace? En ese caso ... es posible que algún día escuches una maldición apagada en una brisa fría mientras caminas afuera. Eso es muy probable que sea yo, visitando su sitio web.

En ese caso realmente solo tengo dos palabras para ti. A menudo he escuchado esas mismas dos palabras dirigidas a mí cuando escribí un código incorrecto y es con gran placer que les digo: "¡váyanse a arreglar!"

### Contraste de color

El contraste de color debe ser un mínimo de 4.5: 1 para texto normal y 3: 1 para texto grande. "Texto grande" se define como texto que tiene al menos 18 puntos (24px) o 14 puntos (18.66px) y negrita. [Comprobador de Contraste](https://webaim.org/resources/contrastchecker/)

## Conclusión

Le he contado sobre la accesibilidad, qué es, qué no es y por qué es importante.

También te he dado lo básico, lo más básico, de hacer que la accesibilidad sea correcta. Sin embargo, estos elementos básicos son muy poderosos y pueden hacer su vida mucho más fácil al codificar la accesibilidad.

Si hablamos en términos de la FCC, debe tener esto en cuenta al realizar el plan de estudios HTML / CSS, así como el plan de estudios de JavaScript.  
En los artículos posteriores, abordaré varios temas más de primera clase. Una serie de preguntas que voy a responder son:

*   Agregar encabezados estructurados suena como una buena idea, pero no encajan en mi diseño. ¿Qué debo hacer?
*   ¿Hay alguna manera de escribir contenido que solo vean los lectores de pantalla y otras tecnologías de asistencia?
*   ¿Cómo hago accesibles los componentes personalizados de JavaScript?
*   ¿Qué herramientas hay, además de las pruebas de usuario inclusivas, que pueden usarse para desarrollar la experiencia más sólida y accesible para el grupo más grande de usuarios?