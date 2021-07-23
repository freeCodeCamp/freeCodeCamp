# How to work on coding challenges

Our goal is to develop a fun and clear interactive learning experience.

Designing interactive coding challenges is difficult. It would be much easier to write a lengthy explanation or to create a video tutorial. But for our core curriculum, we're sticking with what works best for most people - a fully interactive, video game-like experience.

Queremos que os usuários freeCodeCamp atinjam um estado ativo no aprendizado. We want them to build momentum and blast through our curriculum with as few snags as possible. We want them to go into the projects with confidence and gain a wide exposure to programming concepts.

Note that for Version 7.0 of the freeCodeCamp curriculum, we are moving toward [an entirely project-focused model with a lot more repetition](https://www.freecodecamp.org/news/python-curriculum-is-live/).

Creating these challenges requires immense creativity and attention to detail. There's plenty of help available. You'll have support from a whole team of contributors to whom you can bounce ideas off and demo your challenges.

And as always, feel free to ask questions on the ['Contributors' category on our forum](https://forum.freecodecamp.org/c/contributors) or [the contributors chat room](https://chat.freecodecamp.org/channel/contributors).

With your help, we can design an interactive coding curriculum that will help millions of people learn to code for years to come.

The content for each challenge is stored in its markdown file. This markdown file is later converted to HTML using our tools to create interactive web pages.

You can find all of freeCodeCamp.org's curricular content in the [`/curriculum/challenges`](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges) directory.

## Configure as ferramentas para o currículo

Before you work on the curriculum, you would need to set up some tooling to help you test your changes. You can use any option from the below:

- You can [set up freeCodeCamp locally](how-to-setup-freecodecamp-locally.md). This is **highly recommended** for regular/repeat contributions. This setup allows you to work and test your changes.
- Use o Gitpod, um ambiente gratuito de desenvolvimento on-line. Clicar no botão abaixo irá iniciar um ambiente de desenvolvimento pronto para programar para freeCodeCamp em seu navegador. It only takes a few minutes.

  [![Abra no Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)

- Edite os arquivos na interface do GitHub clicando no ícone do lápis no arquivo correspondente. Embora seja a maneira mais rápida, **não é recomendado**, porque você não pode testar suas alterações no GitHub. If our maintainers conclude that the changes you made need to be tested locally, you would need to follow the methods above instead.

### Trabalhe em projetos práticos

Os projetos práticos tem algumas ferramentas adicionais para criar novos projetos e passos. Para saber mais, veja [esses documentos](how-to-work-on-practice-projects.md)

## Challenge Template

````md
---
id: Identificador exclusivo (alfanumérico, MongoDB_id)
title: 'Título do desafio'
challengeType: Inteiro, definido em `client/utils/challengeTypes.js`
videoUrl: 'url de explicação do vídeo'
forumTopicId: 12345
---

# --descrição--

Texto descritivo do desafio, em markdown

```html
<div>example code</div>
````

# --instructions--

Texto com instruções para o desafio, em markdown

# --hints--

Testes para executar o código do usuário, em par com o markdown e bloco de código de teste.

```js
Code for test one
```

Mais instruções em sintaxe markdown

```js
More code
```

# --seed--

## --before-user-code--

```lang
Código avaliado antes do código do usuário.
```

## --after-user-code--

```lang
Code evaluated after the user’s code, and just before the tests
```

## --seed-contents--

Código Boilerplate para renderizar para o editor.  Esta seção deve somente conter código dentro de crases, como o seguinte exemplo:

```html
<body>
  <p class="main-text">Olá mundo!</p>
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

Soluções são usadas para os testes CI a fim de garantir que mudanças nas dicas ainda passem conforme o esperado

```js
// primeira solução - a(s) linguagem(ns) deve(m) ser a mesma do código fornecido.
```

---

```js
// segunda solução - então se o código fornecido está em HTML...
```

---

```js
// terceira solução etc. - Suas soluções devem estar em HTML.
```

# --question--

Esses espaços são utilizados geralmente para questões de múltipla escolha dos desafios de Python.

## --text--

O texto da pergunta vêm aqui.

## --answers--

Resposta 1

---

Resposta 2

---

Mais respostas

## --video-solution--

O número da resposta correta fica aqui.
````

> [!NOTE]
>
> 1. Nas seções acima, exemplos de `lang` são:
>
> - `html` - HTML/CSS
> - `js` - JavaScript
> - `jsx` - JSX

## Numeração dos desafios

Todo desafio precisa de um `id`. Se você não especifica um, então o MongoDB criará um aleatório quando os dados forem salvos. Porém, não queremos que ele faça isso. Queremos que os ids dos desafios sejam consistentes em diferentes ambientes (staging, produção, vários desenvolvedores diferentes, etc.).

Para gerar um novo no shell (assumindo que o MongoDB está executando separadamente):

1. Execute o comando `mongo`.
2. Execute o comando `ObjectId()`.

Por exemplo:

```bash
$ mongo
MongoDB shell version v3.6.1
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.10
...
$ ObjectId()
ObjectId("5a474d78df58bafeb3535d34")
````

O resultado é um novo id, por exemplo `5a474d78df58bafeb3535d34` acima.

Quando tiver seu id, coloque-o no arquivo markdown como campo `id` no topo, ex.

```yml
---
id: 5a474d78df58bafeb3535d34
title: Título do desafio
```

## Naming challenges

Nomear coisas é difícil. Nós facilitamos com algumas restrições.

Todos os títulos dos desafios devem estar explícitos e devem seguir este padrão:

\[verb\]\[frase objetiva\]

Aqui estão alguns exemplos de nomes para desafios:

- Usar a notação de sentido horário para especificar o preenchimento (padding) de um elemento
- Condensar arrays com .reduce
- Usar notação de colchetes para encontrar o primeiro caractere em uma string

## Challenge descriptions/instructions

As frases devem ser claras e resumidas com o mínimo de termos técnicos. Se usado, o termo técnico deve ser imediatamente definido em inglês simples.

Mantenha os parágrafos curtos (em torno de 1-4 frases). É mais provável que as pessoas leiam vários parágrafos curtos do que um parágrafo enorme.

O texto do desafio deve usar a segunda pessoa ("você") para ajudar a dar um tom de conversa. Dessa forma, o texto e as instruções parecem falar diretamente ao usuário freeCodeCamp que está resolvendo o desafio. Tente evitar usar a primeira pessoa ("eu", "nós", "vamos").

Não use links externos. Eles interrompem o fluxo. Os usuários freeCodeCamp nunca devem precisar pesquisar nada no Google durante esses desafios. Se há recursos que você acha que os usuários irão se beneficiar, adicione-os no artigo relacionado ao guia do desafio.

Você pode adicionar diagramas se necessário.

Não use emojis ou emoticons em desafios. O freeCodeCamp possui uma comunidade global, e o significado cultural de um emoji ou emoticon pode ser diferente ao redor do mundo. Além disso, emojis podem ser mostrados de maneiras diferentes em diferentes sistemas.

Substantivos próprios devem começar com letra maiúscula quando possível. Abaixo está uma lista de palavras e como devem aparecem nos desafios.

- JavaScript (capital letters in "J" and "S" and no abbreviations)
- Node.js
- Embora às vezes imprecisas, as formas não hifenizadas de 'back end' e 'front end' devem ser usadas, pois são mais amplamente utilizadas.

### A regra dos 2 minutos

Cada desafio deve ser resolvido em 120 segundos por um nativo da língua inglesa que tenha concluído os desafios anteriores. Isso inclui a quantidade de tempo que leva para ler as instruções, entender o código fornecido, escrever o código e passar nos testes.

Se levar mais do que dois minutos para completar um desafio, você tem duas opções:

- Simplify the challenge, or
- Split the challenge into two challenges.

A regra dos 2 minutos força quem criou o desafio a deixar as instruções resumidas, o código fornecido limpo e seus testes diretos.

Acompanhamos quanto dura para os usuários resolverem mudanças e usamos essa informação para identificar desafios que precisam ser simplificados ou divididos.

### Modularidade

Cada desafio deve ensinar exatamente um conceito, e esse conceito deve estar aparente a partir do nome do desafio.

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
- Multi-line code blocks **must be preceded by an empty line**. The next line must start with three backticks followed immediately by one of the [supported languages](https://prismjs.com/#supported-languages). To complete the code block, you must start a new line which only has three backticks and **another empty line**. See example below:
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
> We are working on an integration to make it possible to work on i18n for the comment dictionary.

## Hints and Solutions

Each challenge has a `Get a Hint` button, so a user can access any hints/solutions which have been created for the challenge. Curriculum hints/solutions topics are located on [our forum](https://forum.freecodecamp.org/c/guide) under the `Guide` category.

If you find a problem with an existing challenge's hints/solutions topic, you can make suggestions in the [contributors category](https://forum.freecodecamp.org/c/contributors) on the forum. Moderators and users with trust level 3 will review the comments and decide whether or not to include the changes in the corresponding hint/solutions topic.

### Adding new Challenge hints/solutions Topics

Take the following steps when adding a new challenge hints/solutions related topic.

1. Start by following the same steps for creating a new topic but review the next for creating the title.
2. The title of the topic should start with `freeCodeCamp Challenge Guide:` concatenated with the actual title of the curriculum challenge. For example, if the challenge is named "`Chunky Monkey`", the topic title would be "`freeCodeCamp Challenge Guide: Chunky Monkey`".
3. `camperbot` should be the owner of these topics/posts, so you will need to request an admin to change the ownership of the main post to `camperbot`.
4. Once the new topic is created, a forum topic id is created. It is located at the end of the forum topic URL. This id must be added to the frontmatter of the curriculum challenge file via the normal pull request process for the `Get a Hint` button to link to the topic.

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

#### Code Explanation

- Code explanation goes here
- Code explanation goes here

#### Relevant Links

- [Link Text](link_url_goes_here)
- [Link Text](link_url_goes_here)

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

2. [Contributing to FreeCodeCamp - Writing ES6 Challenge Tests](https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s) - a video following [Ethan Arrowood](https://twitter.com/ArrowoodTech) as he contributes to the old version of the curriculum.
