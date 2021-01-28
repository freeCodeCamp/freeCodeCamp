# Cómo trabajar en los desafíos de codificación

Nuestro objetivo es desarrollar una experiencia de aprendizaje interactiva y divertida.

Diseñar desafíos de codificación interactivos es difícil. Sería mucho más fácil escribir una explicación larga o crear un tutorial en vídeo. Pero para nuestro plan de estudios, estamos aferrándonos a lo que mejor funciona para la mayoría de la gente - una experiencia totalmente interactiva y de videojuegos.

Queremos que los campistas entren en un estado de flujo. Queremos que generen impulso y exploten a través de nuestro plan de estudios con el menor número de trabas posible. Queremos que ingresen en los proyectos con confianza y se expongan ampliamente a los conceptos de programación.

Ten en cuenta que para la versión 7.0 del plan de estudios gratuito, estamos avanzando hacia [un modelo totalmente orientado al proyecto con mucha más repetición](https://www.freecodecamp.org/news/python-curriculum-is-live/).

La creación de estos desafíos requiere una inmensa creatividad y atención al detalle. Hay mucha ayuda disponible. Tendrás el apoyo de todo un equipo de colaboradores a los que podrás comentar tus ideas y demostrar tus desafíos.

Y como siempre, siéntete libre de hacer preguntas en la categoría ['Colaboradores' en nuestro foro](https://forum.freecodecamp.org/c/contributors) o [nuestro servidor de Discord](https://discord.gg/pFspAhS).

Con tu ayuda podemos diseñar un plan de estudios interactivo de codificación que ayudará a millones de personas a aprender a programar durante los años por venir.

El contenido de cada desafío se almacena en su propio archivo markdown. Este archivo markdown se convierte más tarde en HTML utilizando nuestras herramientas para crear páginas web interactivas.

Puedes encontrar todo el contenido curricular de freeCodeCamp.org en el directorio [`/curriculum/challenges`](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/curriculum/challenges).

## Configurar las herramientas para el plan de estudios

Antes de trabajar en el plan de estudios, necesitarás configurar algunas herramientas para ayudarte a probar tus cambios. Puedes utilizar cualquier opción de las siguientes:

- Puedes [configurar freeCodeCamp localmente](how-to-setup-freecodecamp-locally.md) en tu máquina. Esto es **altamente recomendable** para contribuciones regulares/repetidas. Esta configuración te permite trabajar y probar tus cambios.
- Utilice Gitpod, un entorno de desarrollo gratuito en línea. Al hacer clic en el botón de abajo se iniciará un entorno de desarrollo listo para freeCodeCamp en su navegador. Sólo toma unos minutos.

  [![Abrir en Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)

- Editar los archivos de la interfaz de GitHub haciendo clic en el icono del lápiz del archivo correspondiente. Aunque esta es la manera más rápida, **no se recomienda**, ya que no puedes probar tus cambios en GitHub. Si nuestros mantenedores concluyen que los cambios hechos necesitan ser probados localmente, necesitaras seguir uno de los métodos anteriores en su lugar.

## Plantilla de desafío

A continuación se muestra una plantilla de cómo se ven los archivos markdown de los desafíos.  Para ver la plantilla streamlined vamos a adoptar ver [abajo](#upcoming-challenge-template).

````md
---
id: Identificador único (alfanumérico, MongoDB_id)
title: Título del Desafío
challengeType: 0
videoUrl: 'url of video explication'
---

## Descripción

<section id='description'>
Una descripción del desafío y lo que se requiere para pasar
</section>

## Instrucciones

<section id='instructions'>
Instrucciones acerca de lo que exactamente se necesita hacer.
</section>

## Prueba

<section id='tests'>

```yml
tests:
  - text: Debe devolver "foo"
    testString: 'Una función stringificada posiblemente usando asertos Chai'
````

</section>

## Semilla del Desafío

<section id='challengeSeed'>

<div id='{ext}-seed'>

```{ext}
Código mostrado en el editor por defecto.

Esta es una sección requerida para el desafío.
```

</div>

### Antes de la prueba

<div id='{ext}-setup'>

```{ext}
Código opcional de configuración de la prueba.
```

</div>

### Después de la prueba

<div id='{ext}-teardown'>

```{ext}
Código desgarrador opcional de la prueba.
```

</div>

</section>

## Solución

<section id='solution'>

```{ext}
// solución requerida
```

</section>

````

> [!NOTE]
>
> 1. En las secciones anteriores, ejemplos de `{ext}` son:
>
>   - `html` - HTML/CSS
>   - `js` - JavaScript
>   - `jsx` - JSX
>
> 2. Para la sección 'Tests' de arriba, 'text' y 'testString' deben ser cadenas YAML válidas. `testString` puede ser una función o expresión stringificada usando los asertos de Chai.

## Numbering Challenges

Cada desafío necesita un `id`. Si no especifica uno, entonces MongoDB creará una nueva al azar cuando guarde los datos; sin embargo, no queremos que haga eso, ya que queremos que los ids del desafío sean consistentes en diferentes entornos (escenario, de producción, muchos desarrolladores diferentes, etc.).

Para generar uno nuevo en un shell (asumiendo que MongoDB se está ejecutando por separado):

1. Ejecuta el comando `mongo`.
2. Ejecuta el comando `ObjectId()`.

Por ejemplo:

```bash
$ mongo
MongoDB shell versión v3.6.1
conectando a: mongodb://127.0.0.1:27017
Versión del servidor MongoDB: 3.4.10
...
$ ObjectId()
ObjectId("5a474d78df58bafeb3535d34")
````

El resultado es un id nuevo, por ejemplo `5a474d78df58bafeb35d34` arriba.

Una vez que tengas tu id, ponlo en el archivo markdown como el campo `id` en la parte superior, p.ej.

```yml
---
id: 5a474d78df58bafeb3535d34
título: Título del Desafío
```

## Nombrando desafíos

Nombrar cosas es difícil. Lo hemos hecho más fácil imponiendo algunas restricciones.

Todos los títulos del desafío deben ser explícitos y deben seguir este patrón:

\[verb\]\[cláusula del objeto\]

Aquí hay algunos ejemplos de nombres de desafíos:

- Utilice Notación en sentido de la derecha para especificar el relleno de un elemento
- Condensar arreglos con .reduce
- Utilice la notación de corchete para encontrar el primer carácter en una cadena

## Descripciones e instrucciones del desafío

Las frases deben ser claras y concisas con la mínima jerga. Si se utiliza, la jerga debe definirse inmediatamente en español sencillo.

Mantenga los párrafos cortos (alrededor de 1-4 oraciones). Es más probable que la gente lea varios párrafos cortos que un muro de texto.

El texto del desafío debe usar la segunda persona ("tú") para ayudar a darle un tono de conversación. De esta manera el texto y las instrucciones parecen hablar directamente con el acampador trabajando a través del desafío. Trate de evitar usar la primera persona ("yo", "nosotros", "let's", y "nosotros").

No utilice enlaces salientes. Estos interrumpen el flujo. Los campistas no deben tener que googlear nada durante estos desafíos. Si hay recursos de los que piensas que los campistas se beneficiarían, añádelos al artículo relacionado con la guía del desafío.

Puedes añadir diagramas si es absolutamente necesario.

No utilices emojis o emoticonos en desafíos. freeCodeCamp tiene una comunidad global, y el significado cultural de un emoji o emoticono puede ser diferente en distintas partes del mundo. Además, los emojis pueden renderizarse de manera diferente en sistemas diferentes.

Los sustantivos adecuados deben usar una capitalización correcta cuando sea posible. A continuación se muestra una lista de palabras como deberían aparecer en los desafíos.

- JavaScript (mayúsculas en "J" y "S" y sin abreviaturas)
- Node.js
- El desarrollo de front-end (forma adjetiva con guiones) es cuando estás trabajando en la parte frontal (sin guiones). Lo mismo ocurre con el "back end", "full stack", y muchos otros términos compuestos.

### La regla de los 2 minutos

Cada desafío debe ser resuelto en un plazo de 120 segundos por un hablante nativo de español que haya completado los desafíos que lo preceden. Esto incluye la cantidad de tiempo que se tarda en leer las direcciones/instrucciones para entender el código seed, escribir su propio código y conseguir que pasen todas las pruebas.

Si toma más de dos minutos completar el desafío, tienes dos opciones:

- Simplificar el desafío, o
- Dividir el desafío en dos desafíos.

La regla de 2 minutos te obliga, como diseñador de desafíos, a hacer tus instrucciones concisas, tu código de semilla claro y tus pruebas directas.

Seguimos el tiempo que tardan los campistas en resolver los cambios y utilizar esta información para identificar los desafíos que necesitan ser simplificados o divididos.

### Modularidad

Cada desafío debería enseñar exactamente un concepto, y ese concepto debería quedar claro en el nombre del desafío.

Podemos reforzar los conceptos anteriormente cubiertos mediante la repetición y las variaciones - por ejemplo, introduciendo elementos h1 en un desafío, luego h3 elementos unos pocos retos más adelante.

Nuestro objetivo es tener miles de retos de 2 minutos. Estos pueden fluir juntos y reiterar conceptos cubiertos anteriormente.

### Formateando el texto del desafío

Aquí hay pautas de formato específicas para el texto del desafío y los ejemplos:

- Las palabras clave del lenguaje van en etiquetas `<code>`. Por ejemplo, nombres de etiquetas HTML o nombres de propiedades CSS
- La primera instancia de una palabra clave cuando está siendo definida, o palabras clave generales (por ejemplo, "object" o "inmutable") ir en etiquetas `<dfn>`
- Las referencias a las partes del código (es decir, funciones, métodos o nombres de variables) deben estar envueltas en etiquetas `<code>`. Ver el ejemplo a continuación:
```md
Use <code>parseInt</code> para convertir la variable <code>real Number</code> en un entero.
```
- Las referencias a los nombres de archivos y directorios de rutas (por ejemplo, `package.json`, `src/components`) deben estar envueltas en etiquetas `<code>`.
- Los bloques de código de múltiples líneas **deben estar precedidos por una línea vacía**. La siguiente línea debe comenzar con tres backticks seguidos inmediatamente por uno de los [idiomas soportados](https://prismjs.com/#supported-languages). Para completar el bloque de código, debe iniciar una nueva línea que solo tiene tres backticks y **otra línea vacía**. Ver el ejemplo a continuación:

**Nota:** Si vas a utilizar un código de ejemplo en YAML, use `yaml` en lugar de `yml` para el idioma a la derecha de los backticks.

````md
El siguiente es un ejemplo de código:

```{language}

[TU CÓDIGO AQUÍ]

````
````

- La información adicional en forma de una nota debe ser formateada `<strong>Nota:</strong> El texto restante de la nota...
- Si se necesitan varias notas. then list all of the notes in separate sentences using the format `<strong>Note:</strong> First note text. Segunda nota texto.`.
- Utilizar comillas simples donde sea aplicable

**Nota:** Se debe utilizar el equivalente _Markdown_ en lugar de etiquetas _HTML_.

## Pruebas de escritura

Los desafíos deben tener el número mínimo de pruebas necesarias para verificar que un campador entienda un concepto.

Nuestro objetivo es comunicar el único punto que el reto está tratando de enseñar y comprobar que han comprendido ese punto.

Las pruebas de desafío pueden hacer uso de las librerías de aserción de Node.js y Chai.js. Además, si es necesario, se puede acceder al código generado por el usuario en la variable `code`.

## Código de semilla de formato

Aquí están las pautas de formato específicas para el código de semilla del reto:

- Utilice dos espacios para indentar
- Las declaraciones de JavaScript terminan con punto y coma
- Utilice comillas dobles donde sea aplicable

### Comentarios de código de semilla

Tenemos un [diccionario de comentarios](/curriculum/dictionaries/english/comentarios. ) que contiene los únicos comentarios que pueden ser usados dentro del código de semilla. El caso exacto y el espaciado del comentario del diccionario deben ser utilizados. El diccionario de comentarios no debe ser expandido sin una discusión previa con el equipo de desarrollo.

Los comentarios usados deben tener un espacio entre los caracteres del comentario y los propios comentarios.  En general, los comentarios deben ser utilizados con esparcimiento. Siempre considere reescribir la descripción o las instrucciones de un desafío si pudiera evitar usar un comentario de código de semilla.

Ejemplo de comentario válido de JavaScript en una sola línea:

```js
// Sólo cambiar el código debajo de esta línea
````

Ejemplo de un comentario CSS válido:

```js
/* Sólo cambiar el código por encima de esta línea */
```

Si un desafío sólo tiene un solo lugar donde se necesitan cambios de código. utilice los comentarios en el siguiente ejemplo para indicar al usuario dónde deben realizarse los cambios.

```js
var a = 3;
var b = 17;
var c = 12;

// Sólo cambiar el código debajo de esta línea
a = a + 12;
b = 9 + b;
c = c + 7;
```

Si un desafío tiene múltiples lugares donde se espera que el usuario cambie el código (es decir, los desafíos de React)

```jsx
clase MyComponent extends React.Component {
  constructor(props) {
    super(props);
    esto. tate = {
      text: "Hola"
    };
    // Cambia el código debajo de esta línea

    // Cambia el código encima de esta línea
  }
  handleClick() {
    esto. etState({
      text: "¡Has hecho clic!"
    });
  }
  render() {
    return (
      <div>
        { /* Cambiar código debajo de esta línea */ }
        <button>Haga clic en Me</button>
        { /* Cambiar código sobre esta línea */ }
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};
```

### Traducción de comentarios de código de semilla

Hay diccionarios de comentarios separados para cada idioma. La [diversión inglesa del diccionario de comentarios](/curriculum/dictionaries/english/comments.js) es la base para las traducciones que se encuentran en las versiones no inglesas correspondientes de los archivos. La versión no inglesa del diccionario de comentarios en chino se encontraría en `/curriculum/dictionaries/chinese/comments.js`.  Cada diccionario consiste en un array de objetos con una propiedad `id` única y una propiedad `texto`.  Solo el texto `` debe ser modificado para incluir la traducción del comentario correspondiente en inglés.

Algunos comentarios pueden contener una palabra/frase que no debe traducirse. Por ejemplo, nombres de variables o nombres de librerías apropiados como "React" no deben ser traducidos.  Ver el comentario a continuación como ejemplo. La palabra `myGlobal` no debe traducirse.

```text
Declarar la variable myGlobal debajo de esta línea
```
> [!NOTE]
> 
> Estamos trabajando en una integración que permita trabajar en i18n para el diccionario de comentarios.

## Consejos y soluciones

Cada desafío tiene un botón `Obtener un pista` para que un usuario pueda acceder a cualquier pista/solución que haya sido creada para el desafío. Temas de sugerencias/soluciones de currículo se encuentran en [nuestro foro](https://forum.freecodecamp.org/c/guide) bajo la categoría `Guía`.

Si encuentras un problema con el tema de sugerencias/soluciones de un desafío, puedes hacer sugerencias en la categoría de [colaboradores](https://forum.freecodecamp.org/c/contributors) en el foro. Los moderadores y usuarios con nivel de confianza 3 revisarán los comentarios y decidirán si incluir o no los cambios en el tema correspondiente.

### Añadir nuevos temas de sugerencias/soluciones de Desafío

Da los siguientes pasos al añadir nuevas pistas y soluciones relacionadas con el tema.

1. Comience siguiendo los mismos pasos para crear un nuevo tema pero revise el siguiente para crear el título.
2. El título del tema debe comenzar con `Guía de Desafío gratuita:` concatenada con el título real del desafío curricular. Por ejemplo, si el desafío se llama "`Chunky Monkey`", el título del tema sería "`Guía gratuita del Desafío CodeCamp: Chunky Monkey`".
3. `camperbot` debe ser el dueño de estos temas/posts, así que necesitarás solicitar a un administrador que cambie la propiedad de la publicación principal a `camperbot`.
4. Una vez creado el nuevo tema, se crea un identificador del tema del foro. Se encuentra al final de la URL del tema del foro. Este id debe añadirse a la parte frontal del archivo de desafío curriculum a través del proceso normal de pull request para el botón `Obtener una pista` para vincular al tema.

### Orientaciones para el contenido de pistas y temas de soluciones

Cuando se proponga una solución para un tema de guía relacionado con el desafío curricular, se debe añadir el código completo. Esto incluye todo el código original de semilla más cualquier cambio necesario para pasar todas las pruebas de desafío. La siguiente plantilla debe utilizarse al crear nuevos temas de sugerencias/soluciones:

````md
# El Nombre del Desafío va aquí

---

## Explicación de Problemas

Esto resume lo que hay que hacer sin simplemente reiniciar la descripción del desafío y/o las instrucciones. Esta es una sección opcional

#### Enlaces relevantes

- [Enlace Text](link_url_goes_here)
- [Link Text](link_url_goes_here)

---

## Consejos

### Pista 1

La pista va aquí

### Pista 2

La pista va aquí

---

## Soluciones

<details><summary>Soluciones 1 (Haz clic en Mostrar/Ocultar)</summary>

```js
function myFunc() {
  consola. og('¡Hola Mundo!');
}
````

#### Explicación del código

- La explicación del código va aquí
- La explicación del código va aquí

#### Enlaces relevantes

- [Texto del enlace](link_url_goes_here)
- [Texto del enlace](link_url_goes_here)

</details>
````

## Desafíos de prueba

Antes de ti [crea una solicitud de pull request](how-to-open-a-pull-request. d) para tus cambios, necesitas validar que los cambios que has realizado no causan inadvertidamente problemas con el desafío. 

1. Para probar todos los desafíos, ejecute el siguiente comando desde el directorio raíz

````
npm run test:curriculum
``` 

2. También puedes probar un bloque o un superbloque de desafíos con estos comandos

```
npm run test:curriculum --block='HTML básico y HTML5'
```

```
npm run test:curriculum --superblock=responsive-web-design
```

También puedes probar un desafío individualmente realizando los siguientes pasos:

1. Cambiar al directorio `curriculum`:

   ```
   currículo de cd
   ```

2. Ejecuta lo siguiente por cada archivo de desafío por el cual has cambiado:

   ```
   npm run test -- -g 'el título completo en inglés del challenge'
   ```

Una vez que hayas verificado que cada desafío que has trabajado pasa las pruebas, [por favor crea una pull request](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/docs/how-to-open-a-pull-request.md).

> [!TIP]
> Puedes establecer la variable de entorno `LOCALE` en el `.env` al idioma de los desafíos que necesitas probar.
> 
> Los valores actualmente aceptados son `english` y `chinese`, con `english` siendo establecido por defecto.

## La próxima plantilla de desafío

La plantilla de desafío en proceso de ser actualizada a una estructura más limpia y menos anidada.  Esto no ha sido finalizado completamente, pero lo siguiente debería estar cerca de la estructura final:

````mdx

---
id: Identificador único (alfanumérico, MongoDB_id)
title: 'Título del Desafío'
challengeType: Integer, definido en `client/utils/challengeTypes. s`
videoUrl: 'url of video explication'
forumTopicId: 12345
---

import Script from './script. dx';

## --step-description--

Texto de descripción, en markdown

```html
<div> 
  código de ejemplo
</div>
```

## --step-hints--

![test-id-1]

Habrá un número arbitrario de triples de ids, instrucciones (en markdown) y bloques de código.

```js
Código para la prueba uno
```

![test-id-2]

Más instrucciones en la sintaxis markdown

```js
Más código
```

## --step-seed--

### --before-user-code--

```lang
Código evaluado antes del usuario
```

### --after-user-code--

```lang
Código evaluado después del usuario, y justo antes de las pruebas
```

### --seed-content--

![index-html]

```html
Algunos html
```

```css
Alguno de censura
```

```js
Algunos js
```

![index-js]

<Script ></p>


<h1 spaces-before="0">
  --solución-marcador--
</h1>



<p spaces-before="0">
  Exactamente lo mismo que la sección de semillas
</p>

<h2 spaces-before="0">
  --siguiente-solución-marcador
</h2>



<p spaces-before="0">
  Lo mismo otra vez
</p>

<h1 spaces-before="0">
  --pregunta-marcador--
</h1>

<h2 spaces-before="0">
  --marcador de texto--
</h2>



<p spaces-before="0">
  La pregunta iría aquí (sólo se utiliza para desafíos de vídeo)
</p>

<h2 spaces-before="0">
  --answers-marker--
</h2>



<p spaces-before="0">
  Respuesta 1
</p>

<hr />

<p spaces-before="0">
  Respuesta 2
</p>

<hr />

<p spaces-before="0">
  Más respuestas
</p>

<h2 spaces-before="0">
  --solución-marcador--
</h2>



<p spaces-before="0">
  \<number of correct answer\>
</p>



<p spaces-before="0">
  ````
</p>

<h3 spaces-before="0">
  Enlaces útiles
</h3>



<p spaces-before="0">
  Desafíos de creación y edición:
</p>



<ol start="1">
  <li>
    <p spaces-before="0">
      <a href="https://github.com/freeCodeCamp/freeCodeCamp/blob/master/client/utils/challengeTypes.js#L1-L13">Tipos de desafío</a> - lo que significan los valores numéricos del tipo de desafío (enum).
    </p>
  </li>

  
  <li>
    <p spaces-before="0">
      <a href="https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s">Contribuyendo a FreeCodeCamp - Escribiendo Pruebas de Desafío de ES6</a> - un vídeo que sigue a <a href="https://twitter.com/ArrowoodTech">Ethan Arrowood</a> mientras contribuye a la versión antigua del currículo.
    </p>
  </li>

</ol>
