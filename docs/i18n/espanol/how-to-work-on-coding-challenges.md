# Cómo trabajar en los desafíos de codificación

Nuestro objetivo es desarrollar una experiencia de aprendizaje interactiva y divertida.

Diseñar desafíos de codificación interactivos es difícil. Sería mucho más fácil escribir una explicación larga o crear un tutorial en vídeo. Pero para nuestro plan de estudios, estamos aferrándonos a lo que mejor funciona para la mayoría de la gente - una experiencia totalmente interactiva y de videojuegos.

Queremos que los campistas entren en un estado de flujo. Queremos que generen impulso y exploten a través de nuestro plan de estudios con el menor número de trabas posible. Queremos que ingresen en los proyectos con confianza y se expongan ampliamente a los conceptos de programación.

Ten en cuenta que para la versión 7.0 del plan de estudios gratuito, estamos avanzando hacia [un modelo totalmente orientado al proyecto con mucha más repetición](https://www.freecodecamp.org/news/python-curriculum-is-live/).

La creación de estos desafíos requiere una inmensa creatividad y atención al detalle. Hay mucha ayuda disponible. Tendrás el apoyo de todo un equipo de colaboradores a los que podrás comentar tus ideas y demostrar tus desafíos.

Y como siempre, siéntete libre de preguntar en la [ categoría de 'Contribuidores' de nuestro foro](https://forum.freecodecamp.org/c/contributors) o [en la sala de chat de contribuidores](https://chat.freecodecamp.org/channel/contributors).

Con tu ayuda, podemos diseñar un currículo de código interactivo que ayudará a millones de personas a aprender a programar en los próximos años.

El contenido para cada desafío está guardado en su archivo de lenguaje de marcado. Este archivo de lenguaje de marcado se convierte más tarde en HTML utilizando nuestras herramientas para crear páginas web interactivas.

Podrás encontrar todo el contenido curricular de freeCodeCamp.org en el directorio [`/curriculum/challenges`](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges).

## Configurar las herramientas para el plan de estudios

Antes de trabajar en el plan de estudios, necesitarás configurar algunas herramientas para ayudarte a probar tus cambios. Puedes utilizar cualquier opción de las siguientes:

- Puedes [configurar freeCodeCamp localmente](how-to-setup-freecodecamp-locally.md) en tu máquina. Esto es **altamente recomendable** para contribuciones regulares/repetidas. Esta configuración te permite trabajar y probar tus cambios.
- Utilice Gitpod, un entorno de desarrollo gratuito en línea. Al hacer clic en el botón de abajo se iniciará un entorno de desarrollo listo para freeCodeCamp en su navegador. Sólo toma unos minutos.

  [![Abrir en Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)

- Editar los archivos de la interfaz de GitHub haciendo clic en el icono del lápiz del archivo correspondiente. Aunque esta es la manera más rápida, **no se recomienda**, ya que no puedes probar tus cambios en GitHub. Si nuestros administradores concluyen que los cambios que hiciste necesitan ser probados de forma local, entonces necesitarás seguir los métodos de encima.

### Cómo trabajar en proyectos de práctica

Los proyectos de práctica tienen algunas herramientas adicionales para ayudar a crear nuevos proyectos y pasos. Para leer más, consulta [ estos documentos ](how-to-work-on-practice-projects.md)

## Plantilla de desafío

````md
Esto no ha sido finalizado completamente, pero lo siguiente debería estar cerca de la estructura final:

````mdx

---
id: Identificador único (alfanumérico, MongoDB_id)
title: 'Título del Desafío'
challengeType: Integer, definido en `client/utils/challenge-types.js`
videoUrl: 'url del video de explicación'
forumTopicId: 12345
---

# --descripción--

Texto de descripción, en lenguaje de marcado

```html
<div>código de ejemplo</div>
````

# --instructions--

Texto de instrucción de desafío, en lenguaje de marcado

# --hints--

Pruebas para ejecutar en el código del usuario, en pares de lenguaje de marcado y bloques de código de prueba.

```js
Código para prueba uno
```

Si tú buscas una salida basada en el código de usuario, --fcc-expected-- y --fcc-actual-- serán reemplazados con los valores de esperado y actual de la afirmación de la prueba. Ten cuidado si tienes múltiples afirmaciones desde la primera afirmación fallida determinará los valores de --fcc-expected-- y --fcc-actual--.

```js
assert.equal(
  'esto reemplazará --fcc-actual--',
  'esto reemplazará --fcc-expected--'
);
  
```

# --notas--

Extra information for a challenge, in markdown

# --seed--

## --before-user-code--

```lang
Código evaluado antes del código del usuario.
```

## --after-user-code--

```lang
Código evaluado después del código del usuario, y justo antes de las pruebas
```

## --seed-contents--

Código repetitivo para renderizar en el editor. Esta sección deberá solo contener código dentro de comillas invertidas, como prosigue:

```html
<body>
  <p class="main-text">Hola Mundo!</p>
</body>
```

```css
body {
  margin: 0;
  background-color: #3a3240;
}

.main-text {
  color: #aea8d3;
}
```

```js
console.log('freeCodeCamp is awesome!');
```

# --soluciones--

Las soluciones se utilizan para las pruebas de CI para garantizar que los cambios en las sugerencias seguirán siendo válidos según lo previsto

```js
// primera solución - la(s) lengua(s) deben coincidir con la semilla.

```

---

```js
// segunda solución - así que si la semilla está escrita en HTML...
```

---

```js
// tercera solución, etc. - Sus soluciones deben estar en HTML.
```

# --question--

Estos campos se utilizan actualmente para los desafíos de Python de opción múltiple.

## --text--

The question text goes here.

## --answers--

Respuesta 1

---

Respuesta 2

---

Más respuestas

## --video-solution--

The number for the correct answer goes here.
````

> [!NOTE]
>
> 1.  En las secciones anteriores, los ejemplos de `lang` son:
>
> - `html` - HTML/CSS
> - `js` - JavaScript
> - `jsx` - JSX

## Numeración del desafio

Cada reto necesita un `id`. Si no especifica uno, MongoDB creará uno nuevo aleatorio cuando guarde los datos; sin embargo, no queremos que haga eso, ya que queremos que los id de desafío sean consistentes en diferentes entornos (puesta en escena, producción, muchos desarrolladores diferentes, etc.).

Para generar una nueva en un shell (asumiendo que MongoDB se está ejecutando por separado):

1. Ejecute el comando `mongo`.
2. Ejecute el comando `ObjectId()`.


Por ejemplo:

```bash
$ mongo
MongoDB shell version v3.6.1
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.10
...
$ ObjectId()
ObjectId("5a474d78df58bafeb3535d34")
````

El resultado es una nueva identificación, por ejemplo `5a474d78df58bafeb3535d34` arriba.

Una vez que tengas tu id, ponlo en el archivo markdown como el campo `id` en la parte superior, p.ej.

```yml
---
id: 5a474d78df58bafeb3535d34
título: Título del desafío
```

## Nombrando desafíos

Naming things is hard. We've made it easier by imposing some constraints.

All challenge titles should be explicit and should follow this pattern:

\[verb\]\[object clause\]

Here are some example challenge names:

- Utilice Notación en sentido de la derecha para especificar el relleno de un elemento
- Condensa arreglos con ".reduce"
- Utilice la notación de corchete para encontrar el primer carácter en una cadena

## Descripciones/Instrucciones de Desafíos

Sentences should be clear and concise with minimal jargon. If used, jargon should be immediately defined in plain English.

Keep paragraphs short (around 1-4 sentences). People are more likely to read several short paragraphs than a wall of text.

Challenge text should use the second person ("you") to help to give it a conversational tone. This way the text and instructions seem to speak directly to the camper working through the challenge. Try to avoid using the first person ("I", "we", "let's", and "us").

Don't use outbound links. These interrupt the flow. Campers should never have to google anything during these challenges. If there are resources you think campers would benefit from, add them to the challenge's Guide-related article.

You can add diagrams if necessary.

Don't use emojis or emoticons in challenges. freeCodeCamp has a global community, and the cultural meaning of an emoji or emoticon may be different around the world. Also, emojis can render differently on different systems.

Proper nouns should use correct capitalization when possible. Below is a list of words as they should appear in the challenges.

- JavaScript (mayúsculas en "J" y "S" y sin abreviaturas)
- Node.js
- Aunque a veces sea inexacto, se deben utilizar formularios no separados de 'back-end' y 'front end', ya que se usan más ampliamente.

### La regla de los 2 minutos

Each challenge should be solvable within 120 seconds by a native English speaker who has completed the challenges leading up to it. This includes the amount of time it takes to read the directions/instructions understand the seeded code, write their code and get all the tests to pass.

If it takes longer than two minutes to complete the challenge, you have two options:

- Simplificar el desafío, o
- Dividir el desafío en dos desafíos.

The 2-minute rule forces you, the challenge designer, to make your directions concise, your seed code clear, and your tests straight-forward.

We track how long it takes for campers to solve changes and use this information to identify challenges that need to be simplified or split.

### Modularidad

Each challenge should teach exactly one concept, and that concept should be apparent from the challenge's name.

We can reinforce previously covered concepts through repetition and variations - for example, introducing h1 elements in one challenge, then h3 elements a few challenges later.

Our goal is to have thousands of 2-minute challenges. These can flow together and reiterate previously-covered concepts.

### Formateando el texto del desafío

Aquí están las directrices de formato específicas para el texto del desafío y los ejemplos:

- Las palabras clave del lenguaje van en etiquetas ``. Por ejemplo, nombres de etiquetas HTML o nombres de propiedades CSS.
- Las referencias a las partes del código (es decir, funciones, métodos o nombres de variables) deben estar envueltas en etiquetas ``. Ver el ejemplo a continuación:

```md
Usa `parseInt` para convertir la variable `realNumber` en un entero.
```

- Las referencias a los nombres de archivos y directorios de rutas (por ejemplo, `package.json`, `src/components`) deben estar envueltas en etiquetas `<code>`.
- Los bloques de código de múltiples líneas **deben estar precedidos por una línea vacía**. La siguiente línea debe comenzar con tres backticks seguidos inmediatamente por uno de los [idiomas soportados](https://prismjs.com/#supported-languages). Para completar el bloque de código, debe iniciar una nueva línea que solo tiene tres backticks y **otra línea vacía**. Ver el ejemplo a continuación:
- El espacio en blanco es importante en Markdown, por lo que le recomendamos que lo haga visible en su editor.

**Note:** If you are going to use an example code in YAML, use `yaml` instead of `yml` for the language to the right of the backticks.

The following is an example of code:

````md
`` `{idioma}

[TU CÓDIGO AQUÍ]

````
````

- La información adicional en forma de una nota debe ser formateada `Nota: El texto restante de la nota...
- Si se necesitan varias notas. then list all of the notes in separate sentences using the format `Note: First note text. - Utilizar comillas simples donde sea aplicable

**Nota:** Se debe utilizar el equivalente _Markdown_ en lugar de etiquetas _HTML_.

## Pruebas de escritura

Los desafíos deben tener el número mínimo de pruebas necesarias para verificar que un campador entienda un concepto.

Nuestro objetivo es comunicar el único punto que el reto está tratando de enseñar y comprobar que han comprendido ese punto.

Las pruebas de desafío pueden hacer uso de las librerías de aserción de Node.js y Chai.js. Además, si es necesario, se puede acceder al código generado por el usuario en la variable `code`. Además, el objeto `__helpers`  expone varias funciones que simplifican el proceso de escritura de los test. Las funciones disponibles estan definidas en _client/src/utils/curriculum-helpers.ts_.

## Código de semilla de formato

Aquí están las pautas de formato específicas para el código de semilla del reto:

- Utilice dos espacios para indentar
- Las declaraciones de JavaScript terminan con punto y coma
- Utilice comillas dobles donde sea aplicable

### Comentarios de código de semilla

Tenemos un [diccionario de comentarios](/curriculum/dictionaries/english/comentarios.) que contiene los únicos comentarios que pueden ser usados dentro del código de semilla. El caso exacto y el espaciado del comentario del diccionario deben ser utilizados. El diccionario de comentarios no debe ser expandido sin una discusión previa con el equipo de desarrollo.

Los comentarios usados deben tener un espacio entre los caracteres del comentario y los propios comentarios. En general, los comentarios deben usarse con moderación. Siempre considere reescribir la descripción o las instrucciones de un desafío si pudiera evitar usar un comentario de código de semilla.

Ejemplo de comentario válido de JavaScript en una sola línea:

```js
// Sólo cambiar el código debajo de esta línea
````

Ejemplo de un comentario de CSS válido:

```css
/* Only change code above this line */
```

If a challenge only has a single place where code changes are needed, please use the comments in the following example to instruct the user where changes should be made.

```js
var a = 3;
var b = 17;
var c = 12;

// Only change code below this line
a = a + 12;
b = 9 + b;
c = c + 7;
```

If a challenge has multiple places where the user is expected to change code (i.e. the React challenges)

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    // Cambia el código debajo de esta línea

    // Cambia el código encima de esta línea
  }
  handleClick() {
    this.setState({
      text: 'You clicked!'
    });
  }
  render() {
    return (
      <div>
        { /* Cambiar código debajo de esta línea */ }
        <button>Click Me</button>
        { /* Cambiar código sobre esta línea */ }
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}
```

### Traducción de comentarios de código de semilla

There are separate comment dictionaries for each language. The [English version of the comment dictionary](/curriculum/dictionaries/english/comments.js) is the basis for the translations found in the corresponding non-English versions of the files. The non-English version of the Chinese comment dictionary would be located at `/curriculum/dictionaries/chinese/comments.js`. Each dictionary consists of an array of objects with a unique `id` property and a `text` property. Only the `text` should be modified to encompass the translation of the corresponding English comment.

Some comments may contain a word/phrase that should not be translated. For example, variable names or proper library names like "React" should not be translated. See the comment below as an example. The word `myGlobal` should not be translated.

```text
Declara la variable myGlobal debajo de esta línea
```

> [!NOTE]
> 
> Estamos trabajando en una integración que permita trabajar en i18n para el diccionario de comentarios.

## Consejos y soluciones

Each challenge has a `Get a Hint` button, so a user can access any hints/solutions which have been created for the challenge. Curriculum hints/solutions topics are located on [our forum](https://forum.freecodecamp.org/c/guide) under the `Guide` category.

If you find a problem with an existing challenge's hints/solutions topic, you can make suggestions in the [contributors category](https://forum.freecodecamp.org/c/contributors) on the forum. Moderators and users with trust level 3 will review the comments and decide whether or not to include the changes in the corresponding hint/solutions topic.

### Añadir nuevos temas de sugerencias/soluciones de Desafío

Take the following steps when adding a new challenge hints/solutions related topic.

1. Comience siguiendo los mismos pasos para crear un nuevo tema pero revise el siguiente para crear el título.
2. El título del tema debe comenzar con `Guía de Desafío gratuita:` concatenada con el título real del desafío curricular. Por ejemplo, si el desafío se llama "`Chunky Monkey`", el título del tema sería "`Guía gratuita del Desafío CodeCamp: Chunky Monkey`".
3. `camperbot` debe ser el dueño de estos temas/posts, así que necesitarás solicitar a un administrador que cambie la propiedad de la publicación principal a `camperbot`.
4. Una vez creado el nuevo tema, se crea un identificador del tema del foro. Se encuentra al final de la URL del tema del foro. Este id debe añadirse a la parte frontal del archivo de desafío curriculum a través del proceso normal de pull request para el botón `Obtener una pista` para vincular al tema.

### Orientaciones para el contenido de pistas y temas de soluciones

When proposing a solution for a curriculum challenge related Guide topic, the full code must be added. This includes all the original seed code plus any changes needed to pass all the challenge tests. The following template should be used when creating new hints/solutions topics:

````md
# El nombre del desafío va aquí

---

## Explicación del problema

Esto resume lo que se debe hacer sin solo repetir la descripción del desafío y / o las instrucciones. #### Enlaces relevantes

- [Texto del enlace](link_url_goes_here)
- [Link Text](link_url_goes_here)

---

## Pistas

### Pista 1

La pista va aquí

### Pista 2

La pista va aquí

---

## Soluciones

<detalles><sumario>Solución 1 (Haga clic para mostrar/ocultar)</sumario>

```js
function miFunc() {
  console.log('¡Hola Mundo!');
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

## desafios de tests
Antes de que tu [hagas un pull request](how-to-open-a-pull-request.md) para tus cambios, tu necesitas validar que los cambios que has realizado no causan inadvertidamente problemas con el desafío.

1. Para testear todos los desafíos, ejecuta el siguiente comando desde el directorio raíz

````
npm run test:curriculum
```

2. También puedes probar un bloque o un superbloque de desafíos con estos comandos

```
npm run test:curriculum --block='Basic HTML and HTML5'
```

```
npm run test:curriculum --superblock=responsive-web-design
```

También puedes probar un desafío individualmente realizando los siguientes pasos:

1. Cambiar al directorio `currículum`:

   ```
   cd curriculum
   ```

2. Run the following for each challenge file for which you have changed (replacing `challenge-title-goes-here` with the full title of the challenge):

   ```
   npm run test -- -g challenge-title-goes-here ```

Once you have verified that each challenge you've worked on passes the tests, [please create a pull request](how-to-open-a-pull-request.md).

> [!TIP] Puede establecer la variable de entorno `LOCALE` en `.env` en el idioma de los retos que necesita probar.
> 
> Los valores aceptados actualmente son `english` y `chinese`, con `english` configurado de manera predeterminada.

### Enlaces útiles

Creación y edición de desafíos:

1. [Tipos de desafío](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/client/utils/challenge-types.js#L1-L13) - lo que significan los valores numéricos del tipo de desafío (enum).

2. [Contribuyendo a FreeCodeCamp - Escribiendo Pruebas de Desafío de ES6](https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s) - un vídeo que sigue a [Ethan Arrowood](https://twitter.com/ArrowoodTech) mientras contribuye a la versión antigua del currículo.
