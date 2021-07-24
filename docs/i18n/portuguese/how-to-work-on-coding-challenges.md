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

Podemos reforçar conceitos citados anteriormente através de repetição e variações - por exemplo, introduzir elementos h1 em um desafio, então elementos h3 depois.

Nossa meta é ter vários desafios de 2 minutos. Eles podem se completar e relembrar conceitos anteriormente citados.

### Formatando o texto do desafio

Aqui estão diretrizes de formatação específicas para o texto do desafio e exemplos:

- Palavras chaves da linguagem ficam entre `` \` `` crases. Por exemplo, nomes de tags HTML ou nomes de propriedade CSS.
- Referências a códigos (ex. função, método ou nomes de variáveis) devem estar entre `` \` ``. Veja o exemplo abaixo:

```md
Use `parseInt` para converter a variável `realNumber` em um número inteiro.
```

- Referências a nomes de arquivos e caminhos (ex. `package.json`, `src/components`) devem estar entre `` \` ``.
- Blocos de código com várias linhas **devem ser precedidos por uma linha vazia**. A próxima linha deve começar com três crases seguidas imediatamente por uma das [linguagens suportadas](https://prismjs.com/#supported-languages). Para completar o bloco de código, você deve começar uma nova linha que apenas possui três crases e **outra linha vazia**. See example below:
- Os espaços importam no Markdown. Então, recomendamos que os mantenham visíveis no seu editor.

**Observação:** se você for usar um exemplo de códigoem YAML, use `yaml` ao invés de `yml` para a linguagem na direita das crases.

A seguir um exemplo do código:

````md
```{language}

[SEU CÓDIGO]

````
````

- Informações extras, como observações, devem estar entre linhas em branco e formatadas:
`**Observação:** Texto da observação...`
- Se muitas observações são necessárias, liste todas elas em frases separadas usando o formato:
`**Observações:** Texto da primeira observação.
 Texto da segunda observação.`
- Use aspas simples quando necessário

**Observação:** O _Markdown_ equivalente deve ser usado ao invés de tags _HTML_.

## Escrevendo testes

Desafios devem ter um número mínimo de testes necessários para verificar que um usuário freeCodeCamp entendeu o conceito.

Nossa meta é comunicar o ponto que o desafio está tentando ensinar e testar se eles entenderam esse ponto.

Os testes do desafio podem usar bibliotecas Node.js e Chai.js. Se necessário, o código gerado pro usuário pode ser acessado na variável `code` também.  Além disso, os objetos `__helpers` expõem várias funções que simplificam o processo de escrita dos testes.  As funções disponíveis estão definidas em _client/src/utils/curriculum-helpers.ts_.

## Formatação do código seed

Aqui vemos diretrizes de formatação específicas para o código seed do desafio:

- Use dois espaços para indentação
- Declarações em JavaScript terminam em ponto-e-vírgula
- Use aspas duplas onde for aplicável

### Comentários do código seed

Temos um [comment dictionary](/curriculum/dictionaries/english/comments.js) que contém os únicos comentários que podem ser usados no código seed. O espaçamento e as letras maiúsculas e minúsculas do dicionário de comentário devem ser usadas exatamente como são. O dicionário de comentário não deve ser expandido sem uma discussão prévia com o time de desenvolvimento (dev-team).

Os comentários usados devem ter um espaço entre os caracteres do comentário e o comentário em si. Geralmente, os comentários devem ser usados com moderação. Sempre considere reescrever a descrição de um desafio ou instrução se for possível evitar usar um comentário de código fornecido.

Exemplo de um comentário de uma linha em JavaScript:

```js
// Mude somente abaixo dessa linha
````

Exemplo de um comentário válido em CSS:

```css
/* Only change code above this line */
```

Se um desafio tem apenas um lugar onde as mudanças de código são necessárias, use os comentários seguindo o exemplo a seguir para instruir o usuário sobre o local onde as mudanças devem ser feitas.

```js
var a = 3;
var b = 17;
var c = 12;

// Only change code below this line
a = a + 12;
b = 9 + b;
c = c + 7;
```

Se um desafio tem múltiplos lugares onde se espera que o usuário faça mudanças no código (ex. os desafios de React)

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello'
    };
    // Altere o código abaixo desta linha

    // Altere o código acima desta linha
  }
  handleClick() {
    this.setState({
      text: 'You clicked!'
    });
  }
  render() {
    return (
      <div>
        {/* Altere o código abaixo desta linha */}
        <button>Click Me</button>
        {/* Altere o código acima desta linha */}
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}
```

### Tradução de comentários de código seed

Existem dicionários de comentários separados para cada linguagem. A [versão em inglês do dicionário de comentários](/curriculum/dictionaries/english/comments.js) é a base para as traduções encontradas nas versões correspondentes dos arquivos em outros idiomas. A versão não inglesa do dicionário de comentário chinesa pode ser encontrada em `/curriculum/dictionaries/chinese/comments.js`. Cada dicionário consiste em um array de objetos com uma propriedade de `id` única e uma propriedade de `text`. Somente a propriedade `text` deve ser modificada para englobar a tradução do comentário correspondente em inglês.

Alguns comentários podem conter uma palavra/frase que não deve ser traduzida. Por exemplo, nomes de variáveis, ou nomes próprios de bibliotecas como "React" não devem ser traduzidas. Veja o comentário abaixo como um exemplo. a palavra `myGlobal` não deve ser traduzida.

```text
Declare a variável myGlobal abaixo desta linha
```

> [!NOTE]
> 
> Estamos trabalhando em uma integração para ser possível trabalhar no i18n para o dicionário de comentário.

## Dicas e soluções

Cada desafio tem um botão `Get a Hint`, assim, o usuário pode acessar qualquer dica/solução que foi criada para aquele desafio. Os tópicos de dicas/soluções são encontrados no [nosso fórum](https://forum.freecodecamp.org/c/guide), abaixo da categoria `Guide`.

Se você encontrar um problema nas dicas/tópicos de solução de um desafio existente, você pode fazer sugestões na [categoria de contribuidores](https://forum.freecodecamp.org/c/contributors) no fórum. Os moderadores e usuários com o nível de confiança 3 vão revisar os comentários e decidir quais incluir as mudanças nos tópicos correspondentes de dicas/soluções.

### Adicionando um novo tópico de dicas/soluções em um desafio

Faça o passo-a-passo a seguir quando for adicionar novos tópicos de dicas/soluções relacionadas a um desafio.

1. Start by following the same steps for creating a new topic but review the next for creating the title.
2. O título do tópico deve começar com `freeCodeCamp Challenge Guide:` concatenado com o título atual do desafio de currículo. Por exemplo, se o desafio é chamado "`Chunky Monkey`", o título do tópico seria "`freeCodeCamp Challenge Guide: Chunky Monkey`".
3. `camperbot` should be the owner of these topics/posts, so you will need to request an admin to change the ownership of the main post to `camperbot`.
4. Depois que o novo tópico for criado, será criado um id para o tópico do fórum. It is located at the end of the forum topic URL. This id must be added to the frontmatter of the curriculum challenge file via the normal pull request process for the `Get a Hint` button to link to the topic.

### Diretrizes para o conteúdo dos tópicos de dicas e soluções

Ao propor uma solução para um tópico do guia relacionado a um desafio de currículo, o código completo deve ser adicionado. Isso inclui todo o código seed original, assim como as alterações necessárias para passar em todos os testes do desafio. O modelo a seguir deve ser usado ao criar um novo tópico de dicas/soluções:

````md
# O nome do desafio fica aqui

---

## Explicação do problema

Resume o que precisa ser feito sem copiar a descrição do desafio e/ou instruções. Essa é uma seção opcional

#### Links relevantes

- [Texto do link](url_do_link_fica_aqui)
- [Texto do link](url_do_link_fica_aqui)

---

## Dicas

### Dica 1

A dica fica aqui

### Dica 2

A dica fica aqui

---

## Soluções

<details><summary>Solução 1 (Clique para mostrar/ocultar)</summary>

```js
function myFunc() {
  console.log('Hello World!');
}
````

#### Code Explanation

- A explicação do código fica aqui
- A explicação do código fica aqui

#### Relevant Links

- [Link Text](link_url_goes_here)
- [Link Text](link_url_goes_here)

</details>
````

## Testando desafios

Antes de [criar um pull request](how-to-open-a-pull-request.md) para suas modificações, você precisa validar que as mudanças feitas não causam problemas no desafio.

1. Para testar todos os desafios, execute o comando abaixo a partir do diretório raiz

````
npm run test:curriculum
```

2. Você também pode testar um bloco ou superbloco de desafios com esses comandos

```
npm run test:curriculum --block='Basic HTML and HTML5'
```

```
npm run test:curriculum --superblock=responsive-web-design
```

Você também é capaz de testar um desafio individualmente seguindo as seguintes etapas:

1.  Mude para o diretório `curriculum`:

   ```
   cd curriculum
   ```

2. Execute o comando a seguir para cada arquivo de desafio que você fez mudanças (substituindo `challenge-title-goes-here` com o título completo do desafio):

   ```
   npm run test -- -g challenge-title-goes-here ```

Quando você verificar que cada desafio modificado passou nos testes, [crie um pull request](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/docs/how-to-open-a-pull-request.md).

> [!TIP] Você pode definir a variável de ambiente `LOCALE` no `.env` no idioma do(s) desafio(s) que precisa testar.
> 
> Os valores atualmente aceitos são `english` e `chinese`, com `english` sendo o padrão.

### Links úteis

Criando e editando desafios:

1. [Tipos do desafio](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/client/utils/challengeTypes.js#L1-L13) - o que significam os valores do tipo de desafio numérico (enum).

2. [Contribuindo para o FreeCodeCamp - Escrevendo testes de desafio ES6](https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s) - um vídeo com [Ethan Arrowood](https://twitter.com/ArrowoodTech) contribuindo para a versão antiga do currículo.
