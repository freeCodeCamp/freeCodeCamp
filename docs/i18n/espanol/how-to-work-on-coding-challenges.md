# Cómo trabajar en los desafíos de codificación

Nuestro objetivo es desarrollar una experiencia de aprendizaje interactiva y divertida.

Diseñar desafíos de codificación interactivos es difícil. Sería mucho más fácil escribir una explicación larga o crear un tutorial en vídeo. Pero para nuestro plan de estudios, estamos aferrándonos a lo que mejor funciona para la mayoría de la gente - una experiencia totalmente interactiva y de videojuegos.

Queremos que los campistas entren en un estado de flujo. Queremos que generen impulso y exploten a través de nuestro plan de estudios con el menor número de trabas posible. We want them to go into the projects with confidence and gain wide exposure to programming concepts.

Ten en cuenta que para la versión 7.0 del plan de estudios gratuito, estamos avanzando hacia [un modelo totalmente orientado al proyecto con mucha más repetición](https://www.freecodecamp.org/news/python-curriculum-is-live/).

La creación de estos desafíos requiere una inmensa creatividad y atención al detalle. Hay mucha ayuda disponible. Tendrás el apoyo de todo un equipo de colaboradores a los que podrás comentar tus ideas y demostrar tus desafíos.

Y como siempre, sientase libre de hacer preguntas en la [categoría de 'Contribuidores' de nuestro foro](https://forum.freecodecamp.org/c/contributors) o [en la sala de chat de contribuidores](https://discord.gg/PRyKn3Vbay).

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

Información adicional para un desafío, en markdown

# --semilla-

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

# --assignments--

This will show a checkbox that campers have to check before completing a challenge

---

This will show another checkbox that campers have to check before completing a challenge

# --question--

These fields are currently used for the multiple-choice Python challenges.

## --text--

The question text goes here.

## --answers--

Answer 1

### --feedback--

This will be shown as feedback when campers guess this answer

---

Answer 2

---

More answers

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

The result is a new id, for example, `5a474d78df58bafeb3535d34` above.

Once you have your id, put it into the markdown file as the `id` field at the top, e.g.

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

Use american english, e.g., use `labeled` instead of `labelled`.

Challenge text should use the second person ("you") to help to give it a conversational tone. This way the text and instructions seem to speak directly to the camper working through the challenge. Try to avoid using the first person ("I", "we", "let's", and "us").

Don't use outbound links. These interrupt the flow. Campers should never have to google anything during these challenges. If there are resources you think campers would benefit from, add them to the challenge's Guide-related article.

You can add diagrams if necessary.

Don't use emojis or emoticons in challenges. freeCodeCamp has a global community, and the cultural meaning of an emoji or emoticon may be different around the world. Also, emojis can render differently on different systems.

Proper nouns should use correct capitalization when possible. Below is a list of words as they should appear in the challenges.

- JavaScript (mayúsculas en "J" y "S" y sin abreviaturas)
- Node.js
- Aunque a veces sea inexacto, se deben utilizar formularios no separados de 'back-end' y 'front end', ya que se usan más ampliamente.

### The 2-minute rule

Each challenge should be solvable within 120 seconds by a native English speaker who has completed the challenges leading up to it. This includes the amount of time it takes to read the directions/instructions understand the seeded code, write their code and get all the tests to pass.

If it takes longer than two minutes to complete the challenge, you have two options:

- Simplificar el desafío, o
- Dividir el desafío en dos desafíos.

The 2-minute rule forces you, the challenge designer, to make your directions concise, your seed code clear, and your tests straightforward.

We track how long it takes for campers to solve challenges and use this information to identify challenges that need to be simplified or split.

### Modularity

Each challenge should teach exactly one concept, and that concept should be apparent from the challenge's name.

We can reinforce previously covered concepts through repetition and variations - for example, introducing h1 elements in one challenge, then h3 elements a few challenges later.

Our goal is to have thousands of 2-minute challenges. These can flow together and reiterate previously-covered concepts.

### Formatting challenge text

Here are specific formatting guidelines for challenge text and examples:

- Las palabras clave del lenguaje van en etiquetas ``. Por ejemplo, nombres de etiquetas HTML o nombres de propiedades CSS.
- Las referencias a las partes del código (es decir, funciones, métodos o nombres de variables) deben estar envueltas en etiquetas ``. Ver el ejemplo a continuación:

```md
Usa `parseInt` para convertir la variable `realNumber` en un entero.
```

- Las referencias a los nombres de archivos y directorios de rutas (por ejemplo, `package.json`, `src/components`) deben estar envueltas en etiquetas `<code>`.
- Los bloques de código de múltiples líneas **deben estar precedidos por una línea vacía**. La siguiente línea debe comenzar con tres backticks seguidos inmediatamente por uno de los [idiomas soportados](https://prismjs.com/#supported-languages). To complete the code block, you must start a new line that only has three backticks and **another empty line**. Ver el ejemplo a continuación:
- El espacio en blanco es importante en Markdown, por lo que le recomendamos que lo haga visible en su editor.

**Note:** If you are going to use an example code in YAML, use `yaml` instead of `yml` for the language to the right of the backticks.

The following is an example of code:

````md
`` `{idioma}

[TU CÓDIGO AQUÍ]

````
````

- La información adicional en forma de una nota debe ser formateada `Nota: El texto restante de la nota...
- Si se necesitan varias notas. then list all of the notes in separate sentences using the format `Note: First note text. Second note text.`
- Use single quotes where applicable

**Note:** The equivalent _Markdown_ should be used in place of _HTML_ tags.

## Pruebas de escritura

Los desafíos deben tener el número mínimo de pruebas necesarias para verificar que un campador entienda un concepto.

Nuestro objetivo es comunicar el único punto que el reto está tratando de enseñar y comprobar que han comprendido ese punto.

Las pruebas de desafío pueden hacer uso de las librerías de aserción de Node.js y Chai.js. Además, si es necesario, se puede acceder al código generado por el usuario en la variable `code`. Además, el objeto `__helpers`  expone varias funciones que simplifican el proceso de escritura de los test. The available functions are defined in the [curriculum-helpers](https://github.com/freeCodeCamp/curriculum-helpers/blob/main/lib/index.ts) repo.

## Formatting Seed Code

Here are specific formatting guidelines for the challenge seed code:

- Use two spaces to indent
- JavaScript statements end with a semicolon
- Use double quotes where applicable

### Seed Code Comments

We have a [comment dictionary](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/curriculum/dictionaries/english/comments.json) that contains the only comments that can be used within the seed code. El caso exacto y el espaciado del comentario del diccionario deben ser utilizados. El diccionario de comentarios no debe ser expandido sin una discusión previa con el equipo de desarrollo.

Los comentarios usados deben tener un espacio entre los caracteres del comentario y los propios comentarios. En general, los comentarios deben usarse con moderación. Siempre considere reescribir la descripción o las instrucciones de un desafío si pudiera evitar usar un comentario de código de semilla.

Example of a valid single-line JavaScript comment:

```js
// Only change code below this line
````

Example of a valid CSS comment:

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

### Translation of Seed Code Comments

There are separate comment dictionaries for each language. The [English version of the comment dictionary](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/curriculum/dictionaries/english/comments.json) is the basis for the translations found in the corresponding non-English versions of the files. The non-English version of the Chinese comment dictionary would be located at `/curriculum/dictionaries/chinese/comments.json`. Each dictionary consists of an array of objects with a unique `id` property and a `text` property. Only the `text` should be modified to encompass the translation of the corresponding English comment.

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

### Adding new Challenge hints/solutions Topics

Take the following steps when adding a new challenge hints/solutions-related topic.

1. Comience siguiendo los mismos pasos para crear un nuevo tema pero revise el siguiente para crear el título.
2. El título del tema debe comenzar con `Guía de Desafío gratuita:` concatenada con el título real del desafío curricular. Por ejemplo, si el desafío se llama "`Chunky Monkey`", el título del tema sería "`Guía gratuita del Desafío CodeCamp: Chunky Monkey`".
3. `camperbot` debe ser el dueño de estos temas/posts, así que necesitarás solicitar a un administrador que cambie la propiedad de la publicación principal a `camperbot`.
4. Una vez creado el nuevo tema, se crea un identificador del tema del foro. Se encuentra al final de la URL del tema del foro. Este id debe añadirse a la parte frontal del archivo de desafío curriculum a través del proceso normal de pull request para el botón `Obtener una pista` para vincular al tema.

### Guidelines for Content of Hints and Solutions Topics

When proposing a solution for a curriculum challenge-related Guide topic, the full code must be added. This includes all the original seed code plus any changes needed to pass all the challenge tests. The following template should be used when creating new hints/solutions topics:

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
pnpm run test:curriculum
```

2. To test single challenge, you can use it challenge id with following command

```
FCC_CHALLENGE_ID=646cf6cbca98e258da65c979 pnpm run test:curriculum
```

3. You can also test a block or a superblock of challenges with these commands

```
FCC_BLOCK='Basic HTML and HTML5' pnpm run test:curriculum
```

```
FCC_SUPERBLOCK='responsive-web-design' pnpm run test:curriculum
```

You are also able to test challenges by title by performing the following steps:

1. Switch to the `curriculum` directory:

   ```
   cd curriculum
   ```

2. Run the following for each challenge file for which you have changed (replacing `challenge-title-goes-here` with the full title of the challenge):

   ```
   pnpm run test -- -g challenge-title-goes-here
   ```

> [!TIP]
> You can set the environment variable `LOCALE` in the `.env` to the language of the challenge(s) you need to test.
>
> The currently accepted values are `english` and `chinese`, with `english` being set by default.

## Proposing a Pull Request (PR)

After you've committed your changes, check here for [how to open a Pull Request](how-to-open-a-pull-request.md).

## Useful Links

Creating and Editing Challenges:

1. [Challenge types](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/client/utils/challenge-types.js#L1-L13) - what the numeric challenge type values mean (enum).

2. [Contributing to FreeCodeCamp - Writing ES6 Challenge Tests](https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s) - a video following [Ethan Arrowood](https://twitter.com/ArrowoodTech) as he contributes to the old version of the curriculum.

## Helper Scripts

> [!NOTE]
> If you are working with the step-based challenges, refer to the [Work on Practice Projects](how-to-work-on-practice-projects.md) section.

There are a few helper scripts that can be used to manage the challenges in a block. Note that these commands should all be run in the block directory. For example:

```bash
cd curriculum/challenges/english/02-javascript-algorithms-and-data-structures/basic-algorithm-scripting
```

### Add New Challenge

To add a new challenge at the end of a block, call the script:

```bash
pnpm run create-next-challenge
```

This will prompt you for the challenge information and create the challenge file, updating the `meta.json` file with the new challenge information.

### Delete a Challenge

To delete a challenge, call the script:

```bash
pnpm run delete-challenge
```

This will prompt you to select which challenge should be deleted, then delete the file and update the `meta.json` file to remove the challenge from the order.

### Insert a Challenge

To insert a challenge before an existing challenge, call the script:

```bash
pnpm run insert-challenge
```

This will prompt you for the challenge information, then for the challenge to insert before. For example, if your choices are:

```bash
a
b
c
```

If you choose `b`, your new order will be:

```bash
a
new challenge
b
c
```

### Update Challenge Order

If you need to manually re-order the challenges, call the script:

```bash
pnpm run update-challenge-order
```

This will take you through an interactive process to select the order of the challenges.

## Troubleshooting

### Infinite Loop Detected

If you see the following error in the console while previewing a challenge:

```text
Potential infinite loop detected on line <number>...
```

This means that the loop-protect plugin has found a long-running loop or recursive function. If your challenge needs to do that (e.g. it contains an event loop that is supposed to run indefinitely), then you can prevent the plugin from being used in the preview. To do so, add `disableLoopProtectPreview: true` to the block's `meta.json` file.

If your tests are computationally intensive, then you may see this error when they run. If this happens then you can add `disableLoopProtectTests: true` to the block's `meta.json` file.

It's not typically necessary to have both set to true, so only set them as needed.
