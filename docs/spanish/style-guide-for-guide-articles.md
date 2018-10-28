# Lineamientos para la creación y edición de artículos de Guía

Recomendamos seguir los siguientes lineamientos para escribir artículos de Guía para comenzar a contribuir y crear artículos útiles.

## Título

Los títulos de los artículos deben ser cortos, y lo más certeros posibles.

Queremos que los campistas encuentren rápidamente la información que están buscando, y el título debe reflejar el tema principal del artículo.

El nombre de la carpeta es usado en la URL, por eso solo pueden usarse guiones medios (-), números (0-9) y letras en minúsculas (a-z).

No obstante, puedes incluir caracteres especiales en el título del artículo.

Aquí hay algunos ejemplos de títulos apropiados:

> [`guide/spanish/agile/acceptance-criteria/index.md`](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/guide/spanish/agile/acceptance-criteria/index.md)

```markdown
---
título: Criterios de aceptación
---
```

> [`guide/spanish/agile/business-value/index.md`](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/guide/spanish/agile/business-value/index.md)

```markdown
---
título: Valor de negocio
---
```

## Modularidad

Cada artículo debe explicar exactamente un concepto, y ese concepto debe estar relacionado con el título del artículo.

Podemos referenciar otros artículos agregando el link en la misma línea, o en una sección "Otros Recursos", al final del artículo.

Nuestro objetivo es tener miles de artículos que cubran una amplia gama de temas tecnológicos. 

## Bloques de código

Los campistas probablemente usaran la Guía de artículos como una referencia rápida para buscar la sintaxis. Los Artículos deben tener ejemplos simples de uso de la misma.

El markdown de GitHub soporta [el destacado de sintaxis en bloques de código](https://help.github.com/articles/creating-and-highlighting-code-blocks/#syntax-highlighting) para muchos lenguajes de programación.

Para usarlo, debes indicar el lenguaje luego de ```.

Por ejemplo, el siguiente Markdown

```markdown
    ```html
    <div class='fabuloso' id='mas-fabuloso'>
      <p>Este es texto en html</p>
    </div>
    ```
```

Mostrará el siguiente bloque de código con la sintaxis `HTML` resaltada, ya que se indicó como lenguaje `html` luego de ```.

```html
<div class='fabuloso' id='mas-fabuloso'>
  <p>Este es texto en html</p>
</div>
```
Los siguientes son ejemplos usando JavaScript y CSS

```markdown
    ```javascript
    function loguear(algo) {
      console.log(algo);
    }
    ```

    ```css
    .fabuloso {
      background-color: #FCCFCC;
    }
    ```
```
Por favor recuerda las siguientes recomendaciones:

- Para asegurar el correcto renderizado, cada bloque de código debe tener una etiqueta de lenguaje. Pueden encontrar una lista de lenguajes soportados [aquí](http://prismjs.com/#languages-list ).
- Para bloques de código sin un lenguaje apropiado, usa etiquetas genéricas como ` ```text `, o ` ```code `.
- Probablemente sepas sobre la sintaxis de identación de cuatro espacios para escribir bloques de código. No obstante, no se encuentra actualmente soportada por nuestro sistema de renderización.

Por último, aquí hay algunos lineamientos de formato sugeridos para escribir bloques de código:

- Las sentencias JavaScript deben terminar con `;` punto y coma
- Los comentarios deben tener un espacio entre los caracteres de comentario y el comentario en sí mismo.
    ```javascript
    // Como este
    ```

## Referencias

Usa los links de Markdown en tus artículos para referenciar otros sitios web. 

```markdown
[freeCodeCamp](https://www.freecodecamp.org/)
```

> **Importante**
> Asegúrate de estar usando links HTTPS. Esto es muy importante para evitar alertas por contenido inseguro.
>
> Tampoco debes usar links cortos como `bit.ly` o `amzn.to`. Esto representa un riesgo de seguridad. Los links cortos son [vulnerables a los ataques basados en el redireccionamiento](https://security.stackexchange.com/questions/59517/are-url-shorteners-vulnerable-due-to-open-redirects).
>
> En su lugar, simplemente usa la versión larga de los links, removiendo cualquier parámetro query.
> Por ejemplo:
> `https://example.com/a-long/url/a-una-paginaweb/?parametro=algo&parametro=algomas`
> debería ser
> `https://example.com/a-long/url/a-una-paginaweb/`

## Lista

Puedes hacer una lista desordenada precediendo una o más líneas de texto con - o *
Para ordenar tu lista, debes preceder cada línea con un número.

```markdown
    - Hola usuario!
    * Hola allí!

```

## Imágenes

Para incluir imágenes, si no se encuentran alojadas en alguna web, necesitaras colocarlas en línea tú mismo usando una plataforma como [Imgur](https://imgur.com/) o [Flickr](https://www.flickr.com). Puedes también alojar tus imágenes realizando un commit a un repositorio git y luego un push a GitHub. Luego, hacer click derecho en la imagen y copiar su URL.

No permitimos alojar imágenes directamente en el repositorio git porque eso lo haría muy grande (quien realice un pull del mismo en su sistema local para realizar cambios descargaría todas las imágenes), y porque es más fácil cambiar una imagen solo cambiando la URL en un artículo que colocar una nueva imagen en el repositorio.

Para incluir la imagen en tu artículo, usa la siguiente sintaxis:

```markdown
![Título de la imagen](https://url-de-la-imagen)
```
La imagen debería aparecer cuando hagas click en la etiqueta <kcd>Visualizar</kcd>

Puedes también agregar diagramas, gráficos o visualizaciones si necesitas.

También puedes embeber videos de YouTube relevantes o editores de código interactivos de [REPL.it](https://repl.it/)

No uses emojis o emoticons en la Guía. freeCodeCamp tiene una comunidad global, y el significado cultural de un emoji o emoticon puede ser diferente alrededor del mundo. Además, emojis pueden ser renderizados de manera diferente en diferentes sistemas.

## Atribuciones

Para minimizar la posibilidad de plagio y mantener la integridad de esta guía, es importante dar el crédito necesario.

Cualquier material citado o usado directamente y sin cambios, desde una fuente debe ser envuelto entre comillas y adecuadamente citado.
Todo material que no sea una cita directa pero que se haya parafraseado utilizando un recurso diferente debe ser debidamente citado.

Puedes agregar números en superíndice para marcar que el contenido está citado usando las etiquetas `<sup></sup>`.

Como: <sup>1</sup>

1. freeCodeCamp - Atribuciones

Luego, al final del artículo pon el subtítulo:

```markdown
### Recursos
```
E incluye todas las citas numeradas correspondientes.

El siguientes es un ejemplo.

```markdown
Este es un contenido que debería ser citado.<sup>1</sup>

Y aquí hay algo más que debería ser citado desde otro recurso.<sup>2</sup>

### Recursos

1. [Doe, John. "Authoring Words." *WikiCoder*. January 1, 1970. Accessed: October 20, 2017](#)
2. [Purdue OWL Staff. "MLA Works Cited: Electronic Sources." *Purdue Online Writing Lab.* October 12, 2017. Accessed: October 20, 2017.](https://owl.english.purdue.edu/owl/resource/747/08/)
```
Puedes chequear el link a Purdue para ver la manera apropiada de citar recursos web ( ellos también muestran como citar tweets!).

Típicamente, una atribución tiene una estructura como la siguiente:

> Apellido del Autor, Nombre del Autor. "Título del Artículo." *Publicación.* Editor. Fecha de publicación. Fecha de acceso.

Si no puedes encontrar un autor o una fecha de publicación, es común omitirlas.

El uso de citas apropiadas no solo mantendrá la reputación de la guía, sino que esas citas y links proveerán material valioso para que el lector pueda aprender más sobre el tema.

Ten en cuenta que los casos de plagio flagrante serán removidos o sus pull requests serán rechazados, y el usuario recibirá una advertencia.

Por favor consulte y revise freeCodeCamp las [Políticas de Honestidad Académica](https://www.freecodecamp.org/academic-honesty) antes de contribuir.

## Fuentes

Si existe otra Guía de recursos que piensas que puede ser provechosa para los campistas, agrégala al final en la sección "Recursos" en una lista con viñetas.

```markdown
### Resources

- [Un nuevo recurso](#link)
```

## Formateo

Usa comillas dobles cuando aplique.

Formatee las palabras clave del lenguaje como código - esto se hace con la tecla de retroceso (localizada sobre la tecla "shift" en teclados ES o la izquierda de la tecla "1" en teclados US) en el markdown de GitHub. Por ejemplo, volver a poner marcas alrededor de nombres de etiquetas HTML o nombres de propiedades CSS.

Usa la Coma Oxford cuando sea necesaria (es una coma usada después del penúltimo ítem en una lista de tres o más ítems, antes de ‘y’ o ‘o’. Por ejemplo, un pintor italiano, escultor, y arquitecto). Esto hace las cosas más claras y simples de leer. En los artículos en español el uso de la misma se [desaconseja para enumeraciones simples](http://lema.rae.es/dpd/srv/search?id=V1EqcYbX4D61AWBBrd).

## Escritura técnica

La escritura técnica, o literatura de ciencia y tecnología, es difícil.

Necesitaras tomar un tema técnico y explicarlo con claridad, de forma certera y objetiva.

Probablemente necesitaras de varias revisiones hasta estar satisfecho con el resultado.

## Bosquejo

Antes de comenzar a escribir, crea un bosquejo de la idea y piensa en los ejemplos de código que usarás (si aplican)

Esto te ayudará a organizar tus pensamientos y hará más simple el proceso de escritura.

## Introducción

El párrafo introductorio deberían ser no más de 1 o 2 oraciones que expliquen de manera simple el tema principal. Debe limitarse el uso de cualquier link a otros artículos, ya que pueden distraer.

## Contenido

Mantén los párrafos cortos (1-4 oraciones). Es más probable que la gente lea muchos párrafos cortos en lugar de un muro de texto.

## Claridad

Los artículos deben ser escritos con oraciones cortas, claras y minimizando el uso de jergas.

Toda jerga debe ser definida inmediatamente en español plano.

## Voz

Usa la voz activa en lugar de la pasiva. Generalmente es una manera más directa de comunicar un tema. Por ejemplo:

### Pasiva

El ciclo `for` en JavaScript es usado por programadores para ...

### Activa

Los programadores usan el ciclo `for` en JavaScript para ...

## Punto de Vista

El texto debe ser escrito usando la segunda persona ("tu") para ayudar a dar un tono conversacional.

De este modo, el texto y las instrucciones suenan como hablar directamente con el campista que está leyéndolo.

Trata de evitar el uso de la primera persona ("Yo", "nosotros").

## Abreviaturas

Si quieres abreviar un término en tu artículo, escríbelo completo primero, luego pon la abreviatura entre paréntesis.

Por ejemplo, `"Una Máquina Virtual Java (JVM) es una máquina virtual que ..."`

## Nombres propios

Los nombres propios deben usar mayúsculas de manera apropiada. La siguiente es una lista de palabras como deberían aparecer en la Guía de artículos.

- JavaScript (letras mayúsculas en  "J" y "S" y no contiene abreviaturas)
- Node.js

El desarrollo Front-end (forma adjetiva con un guion) es cuando trabajas en el front end (forma sustantiva sin guion). Lo mismo ocurre con back end, full stack y otros términos compuestos.

## Herramientas de terceros

Para revisar sobre gramática y ortografía, recomendamos usar una app como [Grammarly](https://grammarly.com) o una extensión o plugin que realice una revisión en tu editor.

- [VS Code](https://code.visualstudio.com/) - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [Sublime Text 3](https://www.sublimetext.com/docs/3/spell_checking.html)

Para revisar tu estilo de escritura, recomendamos [Hemingway App](http://www.hemingwayapp.com/) (Sólo inglés).

No hay nada mágico sobre esta simple herramienta, solo detecta problemas de estilo ampliamente difundidos. 

- voz pasiva
- adverbios innecesarios
- palabras que tienen equivalentes más comunes

La aplicación Hemingway asignará un "nivel de grado" para tu escritura.

Debes apuntar a un grado superior a 6.

Otra herramienta disponible es [De-Jargonizer](http://scienceandpublic.com/), originalmente diseñada para la comunicación científicos pero puede ayudar a evitar escritura sobre especializada (Sólo inglés).

