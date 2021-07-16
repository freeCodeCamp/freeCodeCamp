# Cómo trabajar en los desafíos de codificación

Nuestro objetivo es desarrollar una experiencia de aprendizaje interactiva y divertida.

Diseñar desafíos de codificación interactivos es difícil. Sería mucho más fácil escribir una explicación larga o crear un tutorial en vídeo. Pero para nuestro plan de estudios, estamos aferrándonos a lo que mejor funciona para la mayoría de la gente - una experiencia totalmente interactiva y de videojuegos.

Queremos que los campistas entren en un estado de flujo. Queremos que generen impulso y exploten a través de nuestro plan de estudios con el menor número de trabas posible. Queremos que ingresen en los proyectos con confianza y se expongan ampliamente a los conceptos de programación.

Ten en cuenta que para la versión 7.0 del plan de estudios gratuito, estamos avanzando hacia [un modelo totalmente orientado al proyecto con mucha más repetición](https://www.freecodecamp.org/news/python-curriculum-is-live/).

La creación de estos desafíos requiere una inmensa creatividad y atención al detalle. Hay mucha ayuda disponible. Tendrás el apoyo de todo un equipo de colaboradores a los que podrás comentar tus ideas y demostrar tus desafíos.

And as always, feel free to ask questions on the ['Contributors' category on our forum](https://forum.freecodecamp.org/c/contributors) or [the contributors chat room](https://chat.freecodecamp.org/channel/contributors).

With your help, we can design an interactive coding curriculum that will help millions of people learn to code for years to come.

The content for each challenge is stored in its markdown file. Este archivo markdown se convierte más tarde en HTML utilizando nuestras herramientas para crear páginas web interactivas.

You can find all of freeCodeCamp.org's curricular content in the [`/curriculum/challenges`](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges) directory.

## Configurar las herramientas para el plan de estudios

Antes de trabajar en el plan de estudios, necesitarás configurar algunas herramientas para ayudarte a probar tus cambios. Puedes utilizar cualquier opción de las siguientes:

- Puedes [configurar freeCodeCamp localmente](how-to-setup-freecodecamp-locally.md) en tu máquina. Esto es **altamente recomendable** para contribuciones regulares/repetidas. Esta configuración te permite trabajar y probar tus cambios.
- Utilice Gitpod, un entorno de desarrollo gratuito en línea. Al hacer clic en el botón de abajo se iniciará un entorno de desarrollo listo para freeCodeCamp en su navegador. Sólo toma unos minutos.

  [![Abrir en Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)

- Editar los archivos de la interfaz de GitHub haciendo clic en el icono del lápiz del archivo correspondiente. Aunque esta es la manera más rápida, **no se recomienda**, ya que no puedes probar tus cambios en GitHub. If our maintainers conclude that the changes you made need to be tested locally, you would need to follow the methods above instead.

### How to work on practice projects

The practice projects have some additional tooling to help create new projects and steps. To read more, see [these docs](how-to-work-on-practice-projects.md)

## Plantilla de desafío

````md
---
id: Unique identifier (alphanumerical, MongoDB_id)
title: 'Challenge Title'
challengeType: Integer, defined in `client/utils/challengeTypes.js`
videoUrl: 'url of video explanation'
forumTopicId: 12345
---

# --description--

Challenge description text, in markdown

```html
<div>example code</div>
````

# --instructions--

Challenge instruction text, in markdown

# --hints--

Tests to run against user code, in pairs of markdown text and code block test code.

```js
Code for test one
```

More instructions in markdown syntax

```js
More code
```

# --seed--

## --before-user-code--

```lang
Code evaluated before the user’s code.
```

## --after-user-code--

```lang
Code evaluated after the user’s code, and just before the tests
```

## --seed-contents--

Boilerplate code to render to the editor. This section should only contain code inside backticks, like the following:

```html
<body>
  <p class="main-text">Hello world!</p>
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

# --solutions--

Solutions are used for the CI tests to ensure that changes to the hints will still pass as intended

```js
// first solution - the language(s) should match the seed.
```

---

```js
// second solution - so if the seed is written in HTML...
```

---

```js
// third solution etc. - Your solutions should be in HTML.
```

# --question--

These fields are currently used for the multiple-choice Python challenges.

## --text--

The question text goes here.

## --answers--

Answer 1

---

Answer 2

---

More answers

## --video-solution--

The number for the correct answer goes here.
````

> [!NOTE]
>
> 1. In the above sections, examples of `lang` are:
>
> - `html` - HTML/CSS
> - `js` - JavaScript
> - `jsx` - JSX

## Numbering Challenges

Every challenge needs an `id`. If you don't specify one, then MongoDB will create a new random one when it saves the data; however, we don't want it to do that, since we want the challenge ids to be consistent across different environments (staging, production, lots of different developers, etc.).

To generate a new one in a shell (assuming MongoDB is running separately):

1. Run `mongo` command.
2. Run `ObjectId()` command.

For example:

```bash
$ mongo
MongoDB shell version v3.6.1
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.10
...
$ ObjectId()
ObjectId("5a474d78df58bafeb3535d34")
````

The result is a new id, for example `5a474d78df58bafeb3535d34` above.

Once you have your id, put it into the markdown file as the `id` field at the top, e.g.

```yml
---
id: 5a474d78df58bafeb3535d34
title: Challenge Title
```

## Naming challenges

Naming things is hard. We've made it easier by imposing some constraints.

All challenge titles should be explicit and should follow this pattern:

\[verb\]\[object clause\]

Here are some example challenge names:

- Utilice Notación en sentido de la derecha para especificar el relleno de un elemento
- Condense arrays with .reduce
- Utilice la notación de corchete para encontrar el primer carácter en una cadena

## Challenge descriptions/instructions

Sentences should be clear and concise with minimal jargon. If used, jargon should be immediately defined in plain English.

Keep paragraphs short (around 1-4 sentences). People are more likely to read several short paragraphs than a wall of text.

Challenge text should use the second person ("you") to help to give it a conversational tone. This way the text and instructions seem to speak directly to the camper working through the challenge. Try to avoid using the first person ("I", "we", "let's", and "us").

Don't use outbound links. These interrupt the flow. Campers should never have to google anything during these challenges. If there are resources you think campers would benefit from, add them to the challenge's Guide-related article.

You can add diagrams if necessary.

Don't use emojis or emoticons in challenges. freeCodeCamp has a global community, and the cultural meaning of an emoji or emoticon may be different around the world. Also, emojis can render differently on different systems.

Proper nouns should use correct capitalization when possible. Below is a list of words as they should appear in the challenges.

- JavaScript (mayúsculas en "J" y "S" y sin abreviaturas)
- Node.js
- Although sometimes inaccurate, non-hyphenated forms of 'back end' and 'front end' should be used, as they are more widely used.

### The 2-minute rule

Each challenge should be solvable within 120 seconds by a native English speaker who has completed the challenges leading up to it. This includes the amount of time it takes to read the directions/instructions understand the seeded code, write their code and get all the tests to pass.

If it takes longer than two minutes to complete the challenge, you have two options:

- Simplificar el desafío, o
- Dividir el desafío en dos desafíos.

The 2-minute rule forces you, the challenge designer, to make your directions concise, your seed code clear, and your tests straight-forward.

We track how long it takes for campers to solve changes and use this information to identify challenges that need to be simplified or split.

### Modularity

Each challenge should teach exactly one concept, and that concept should be apparent from the challenge's name.

We can reinforce previously covered concepts through repetition and variations - for example, introducing h1 elements in one challenge, then h3 elements a few challenges later.

Our goal is to have thousands of 2-minute challenges. These can flow together and reiterate previously-covered concepts.

### Formatting challenge text

Here are specific formatting guidelines for challenge text and examples:

- Language keywords go in `` \` `` backticks. For example, HTML tag names or CSS property names.
- References to code parts (i.e. function, method, or variable names) should be wrapped in `` \` `` backticks. See example below:

```md
Use `parseInt` to convert the variable `realNumber` into an integer.
```

- References to file names and path directories (e.g. `package.json`, `src/components`) should be wrapped in `` \` `` backticks.
- Los bloques de código de múltiples líneas **deben estar precedidos por una línea vacía**. La siguiente línea debe comenzar con tres backticks seguidos inmediatamente por uno de los [idiomas soportados](https://prismjs.com/#supported-languages). To complete the code block, you must start a new line which only has three backticks and **another empty line**. Ver el ejemplo a continuación:
- Whitespace matters in Markdown, so we recommend that you make it visible in your editor.

**Note:** If you are going to use an example code in YAML, use `yaml` instead of `yml` for the language to the right of the backticks.

The following is an example of code:

````md
```{language}

[YOUR CODE HERE]

````
````

- Additional information in the form of a note should be surrounded by blank lines, and formatted: `**Note:** Rest of note text...`
- If multiple notes are needed, then list all of the notes in separate sentences using the format: `**Notes:** First note text. Second note text.`
- Use single-quotes where applicable

**Note:** The equivalent _Markdown_ should be used in place of _HTML_ tags.

## Writing tests

Challenges should have the minimum number of tests necessary to verify that a camper understands a concept.

Our goal is to communicate the single point that the challenge is trying to teach, and test that they have understood that point.

Challenge tests can make use of the Node.js and Chai.js assertion libraries. Also, if needed, user-generated code can be accessed in the `code` variable.  In addition, the `__helpers` object exposes several functions that simplify the process of writing tests.  The available functions are defined in _client/src/utils/curriculum-helpers.ts_.

## Formatting seed code

Here are specific formatting guidelines for the challenge seed code:

- Use two spaces to indent
- JavaScript statements end with a semicolon
- Use double quotes where applicable

### Seed code comments

We have a [comment dictionary](/curriculum/dictionaries/english/comments.js) that contains the only comments that can be used within the seed code. The exact case and spacing of the dictionary comment must be used. The comment dictionary should not be expanded without prior discussion with the dev-team.

Comments used should have a space between the comment characters and the comment themselves. In general, comments should be used sparingly. Always consider rewriting a challenge's description or instructions if it could avoid using a seed code comment.

Example of valid single line JavaScript comment:

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
      text: 'Hello'
    };
    // Change code below this line

    // Change code above this line
  }
  handleClick() {
    this.setState({
      text: 'You clicked!'
    });
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <button>Click Me</button>
        {/* Change code above this line */}
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}
```

### Translation of seed code comments

There are separate comment dictionaries for each language. The [English version of the comment dictionary](/curriculum/dictionaries/english/comments.js) is the basis for the translations found in the corresponding non-English versions of the files. The non-English version of the Chinese comment dictionary would be located at `/curriculum/dictionaries/chinese/comments.js`. Each dictionary consists of an array of objects with a unique `id` property and a `text` property. Only the `text` should be modified to encompass the translation of the corresponding English comment.

Some comments may contain a word/phrase that should not be translated. For example, variable names or proper library names like "React" should not be translated. See the comment below as an example. The word `myGlobal` should not be translated.

```text
Declare the myGlobal variable below this line
```

> [!NOTE]
> 
> Estamos trabajando en una integración que permita trabajar en i18n para el diccionario de comentarios.

## Hints and Solutions

Each challenge has a `Get a Hint` button, so a user can access any hints/solutions which have been created for the challenge. Curriculum hints/solutions topics are located on [our forum](https://forum.freecodecamp.org/c/guide) under the `Guide` category.

If you find a problem with an existing challenge's hints/solutions topic, you can make suggestions in the [contributors category](https://forum.freecodecamp.org/c/contributors) on the forum. Moderators and users with trust level 3 will review the comments and decide whether or not to include the changes in the corresponding hint/solutions topic.

### Adding new Challenge hints/solutions Topics

Take the following steps when adding a new challenge hints/solutions related topic.

1. Comience siguiendo los mismos pasos para crear un nuevo tema pero revise el siguiente para crear el título.
2. El título del tema debe comenzar con `Guía de Desafío gratuita:` concatenada con el título real del desafío curricular. Por ejemplo, si el desafío se llama "`Chunky Monkey`", el título del tema sería "`Guía gratuita del Desafío CodeCamp: Chunky Monkey`".
3. `camperbot` debe ser el dueño de estos temas/posts, así que necesitarás solicitar a un administrador que cambie la propiedad de la publicación principal a `camperbot`.
4. Una vez creado el nuevo tema, se crea un identificador del tema del foro. Se encuentra al final de la URL del tema del foro. Este id debe añadirse a la parte frontal del archivo de desafío curriculum a través del proceso normal de pull request para el botón `Obtener una pista` para vincular al tema.

### Guidelines for content of hints and solutions topics

When proposing a solution for a curriculum challenge related Guide topic, the full code must be added. This includes all the original seed code plus any changes needed to pass all the challenge tests. The following template should be used when creating new hints/solutions topics:

````md
# Challenge Name Goes Here

---

## Problem Explanation

This summarizes what needs to be done without just restating the challenge description and/or instructions. This is an optional section

#### Relevant Links

- [Link Text](link_url_goes_here)
- [Link Text](link_url_goes_here)

---

## Hints

### Hint 1

Hint goes here

### Hint 2

Hint goes here

---

## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
function myFunc() {
  console.log('Hello World!');
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

## Testing Challenges

Before you [create a pull request](how-to-open-a-pull-request.md) for your changes, you need to validate that the changes you have made do not inadvertently cause problems with the challenge.

1. To test all challenges run the below command from the root directory

````
npm run test:curriculum
```

2. You can also test a block or a superblock of challenges with these commands

```
npm run test:curriculum --block='Basic HTML and HTML5'
```

```
npm run test:curriculum --superblock=responsive-web-design
```

You are also able to test one challenge individually by performing the following steps:

1. Switch to the `curriculum` directory:

   ```
   cd curriculum
   ```

2. Run the following for each challenge file for which you have changed (replacing `challenge-title-goes-here` with the full title of the challenge):

   ```
   npm run test -- -g challenge-title-goes-here ```

Once you have verified that each challenge you've worked on passes the tests, [please create a pull request](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/docs/how-to-open-a-pull-request.md).

> [!TIP] You can set the environment variable `LOCALE` in the `.env` to the language of the challenge(s) you need to test.
> 
> The currently accepted values are `english` and `chinese`, with `english` being set by default.

### Useful Links

Creating and Editing Challenges:

1. [Challenge types](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/client/utils/challengeTypes.js#L1-L13) - what the numeric challenge type values mean (enum).

2. [Contribuyendo a FreeCodeCamp - Escribiendo Pruebas de Desafío de ES6](https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s) - un vídeo que sigue a [Ethan Arrowood](https://twitter.com/ArrowoodTech) mientras contribuye a la versión antigua del currículo.
