# Como trabalhar em desafios de programação

Nosso objetivo é desenvolver uma experiência de aprendizado divertida e interativa.

Projetar desafios interativos de programação é difícil. Seria muito mais fácil escrever uma explicação longa ou criar um tutorial em vídeo. Mas no nosso currículo principal, estamos buscando o que funciona melhor para a maioria das pessoas - uma experiência de jogo totalmente interativa e parecida com vídeo.

Queremos que os usuários freeCodeCamp atinjam um estado ativo no aprendizado. Queremos que eles sejam impulsionados a percorrer o nosso currículo com o mínimo possível de empecilhos. Nós queremos que eles iniciem os projetos com confiança e adquiram uma ampla exposição aos conceitos de programação.

Note que para a versão 7.0 do currículo do freeCodeCamp, nós estamos migrando para [um modelo inteiramente focado em projetos e com muito mais repetições](https://www.freecodecamp.org/news/python-curriculum-is-live/).

A criação destes desafios exige imensa criatividade e atenção aos pormenores. Há muita ajuda disponível. Você terá o apoio de toda uma equipe de colaboradores para quem você pode buscar ideias e provar seus desafios.

E como sempre, fique à vontade em perguntar na [categoria 'Contribuidores' do fórum](https://forum.freecodecamp.org/c/contributors) ou [no chat dos contribuidores](https://discord.gg/PRyKn3Vbay).

Com sua ajuda, nós podemos projetar um currículo de programação interativo que ajudará milhões de pessoas a aprender a programar nos próximos anos.

O conteúdo para cada desafio é guardado em um arquivo markdown. Este arquivo markdown é posteriormente convertido em HTML usando nossas ferramentas para criar páginas web interativas.

Você pode encontrar todo o conteúdo curricular do freeCodeCamp.org no diretório [`/curriculum/challenges`](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges).

## Configure as ferramentas para o currículo

Antes de trabalhar no currículo, você precisará configurar algumas ferramentas para ajudá-lo a testar suas alterações. Você pode usar qualquer opção abaixo:

- Você pode [configurar freeCodeCamp localmente](how-to-setup-freecodecamp-locally.md). Isto é **altamente recomendado** para contribuições regulares/repetidas. Esta configuração permite que você trabalhe e teste suas alterações.
- Use o Gitpod, um ambiente gratuito de desenvolvimento on-line. Clicar no botão abaixo irá iniciar um ambiente de desenvolvimento pronto para programar para freeCodeCamp em seu navegador. Leva só alguns minutos.

  [![Abra no Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)

- Edite os arquivos na interface do GitHub clicando no ícone do lápis no arquivo correspondente. Embora seja a maneira mais rápida, **não é recomendado**, porque você não pode testar suas alterações no GitHub. Se nossos mantedores concluirem que as mudanças que você fez precisam ser testadas localmente, você precisará seguir os métods acima.

### Trabalhe em projetos práticos

Os projetos práticos tem algumas ferramentas adicionais para criar novos projetos e passos. Para saber mais, veja [esses documentos](how-to-work-on-practice-projects.md)

## Modelo de desafio

````md
---
id: Identificador exclusivo (alfanumérico, MongoDB_id)
title: 'Título do desafio'
challengeType: Inteiro, definido em `client/utils/challenge-types.js`
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
Código para o teste um
```

Se você quer um resultado dinâmico baseada no código do usuário, --fcc-expected-- e --fcc-actual-- serão substituídos pelos valores esperados e reais da verificação do teste. Tome cuidado se você tiver várias afirmações já que a primeira afirmação em que houver uma falha determinará os valores de --fcc-expected-- e --fcc-actual--.

```js
assert.equal(
  'isso substituirá --fcc-actual--',
  'isso substituirá --fcc-expected--'
);
```

# --notes--

Informações extras para um desafio, em markdown

# --seed--

## --before-user-code--

```lang
Código avaliado antes do código do usuário.
```

## --after-user-code--

```lang
Código avaliado após o código do usuário, e pouco antes dos testes
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

O texto da questão vêm aqui.

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

## Nomeando desafios

Nomear coisas é difícil. Nós facilitamos com algumas restrições.

Todos os títulos dos desafios devem estar explícitos e devem seguir este padrão:

\[verbo\]\[frase objetiva\]

Aqui estão alguns exemplos de nomes para desafios:

- Usar a notação de sentido horário para especificar o preenchimento (padding) de um elemento
- Condensar arrays com .reduce
- Usar notação de colchetes para encontrar o primeiro caractere em uma string

## Descrições/instruções do desafio

As frases devem ser claras e resumidas com o mínimo de termos técnicos. Se usado, o termo técnico deve ser imediatamente definido em inglês simples.

Mantenha os parágrafos curtos (em torno de 1-4 frases). É mais provável que as pessoas leiam vários parágrafos curtos do que um parágrafo enorme.

O desafio de texto deve usar a segunda pessoa ("você") para ajudar a dar um tom coloquial. Dessa forma, o texto e as instruções parecem falar diretamente ao usuário freeCodeCamp que está resolvendo o desafio. Tente evitar usar a primeira pessoa ("eu", "nós", "vamos").

Não use links externos. Eles interrompem o fluxo. Os usuários do freeCodeCamp nunca devem precisar pesquisar nada no Google durante esses desafios. Se há recursos que você acha que os usuários irão se beneficiar, adicione-os no artigo relacionado ao guia do desafio.

Você pode adicionar diagramas se necessário.

Não use emojis ou emoticons em desafios. O freeCodeCamp possui uma comunidade global, e o significado cultural de um emoji ou emoticon pode ser diferente ao redor do mundo. Além disso, emojis podem ser mostrados de maneiras diferentes em diferentes sistemas.

Substantivos próprios devem começar com letra maiúscula quando possível. Abaixo está uma lista de palavras e como devem aparecem nos desafios.

- JavaScript (letras maiúsculas em "J" e "S" e sem abreviações)
- Node.js
- Embora às vezes imprecisas, as formas não hifenizadas de 'back end' e 'front end' devem ser usadas, pois são mais amplamente utilizadas.

### A regra dos 2 minutos

Cada desafio deve ser resolvido em 120 segundos por um nativo da língua inglesa que tenha concluído os desafios anteriores. Isso inclui a quantidade de tempo que leva para ler as instruções, entender o código fornecido, escrever o código e passar nos testes.

Se levar mais do que dois minutos para completar um desafio, você tem duas opções:

- Simplifique o desafio, ou
- Divida o desafio em dois desafios.

A regra dos 2 minutos força quem criou o desafio a deixar as instruções resumidas, o código fornecido limpo e seus testes diretos.

Acompanhamos o tempo que leva para os usuários resolverem os desafios e usamos essa informação para identificar desafios que precisem ser simplificados ou divididos.

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
- Blocos de código com várias linhas **devem ser precedidos por uma linha vazia**. A próxima linha deve começar com três crases seguidas imediatamente por uma das [linguagens suportadas](https://prismjs.com/#supported-languages). Para completar o bloco de código, você deve começar uma nova linha que apenas possui três crases e **outra linha vazia**. Veja o exemplo abaixo:
- Os espaços importam no Markdown. Então, recomendamos que os mantenham visíveis no seu editor.

**Observação:** se você for usar um exemplo de código em YAML, use `yaml` ao invés de `yml` para a linguagem à direita das crases.

Exemplo de código:

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

Os testes do desafio podem usar bibliotecas Node.js e Chai.js. Se necessário, o código gerado pro usuário pode ser acessado na variável `code` também. Além disso, os objetos `__helpers` expõem várias funções que simplificam o processo de escrita dos testes. As funções disponíveis estão definidas em _client/src/utils/curriculum-helpers.ts_.

## Formatação do código seed

Aqui vemos diretrizes de formatação específicas para o código seed do desafio:

- Use dois espaços para indentação
- Declarações em JavaScript terminam em ponto-e-vírgula
- Use aspas duplas onde for aplicável

### Comentários do código seed

Temos um [dicionário de comentários](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/curriculum/dictionaries/english/comments.json) que contém os únicos comentários que podem ser usados no código seed. O espaçamento e as letras maiúsculas e minúsculas do dicionário de comentário devem ser usadas exatamente como são. O dicionário de comentário não deve ser expandido sem uma discussão prévia com o time de desenvolvimento (dev-team).

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

Existem dicionários de comentários separados para cada linguagem. A [versão em inglês do dicionário de comentários](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/curriculum/dictionaries/english/comments.json) é a base para as traduções encontradas nas versões correspondentes dos arquivos em outros idiomas. A versão do dicionário de comentários em chinês (não a versão em inglês) pode ser encontrada em `/curriculum/dictionaries/chinese/comments.json`. Cada dicionário consiste em um array de objetos com uma propriedade de `id` única e uma propriedade de `text`. Somente a propriedade `text` deve ser modificada para englobar a tradução do comentário correspondente em inglês.

Alguns comentários podem conter uma palavra/frase que não deve ser traduzida. Por exemplo, nomes de variáveis, ou nomes próprios de bibliotecas como "React" não devem ser traduzidas. Veja o comentário abaixo como um exemplo. A palavra `myGlobal` não deve ser traduzida.

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

1. Comece seguindo os mesmos passos para criar um novo tópico, mas revise o seguinte para criar o título.
2. O título do tópico deve começar com `freeCodeCamp Challenge Guide:` concatenado com o título atual do desafio de currículo. Por exemplo, se o desafio é chamado "`Chunky Monkey`", o título do tópico seria "`freeCodeCamp Challenge Guide: Chunky Monkey`".
3. O `camperbot` deve ser o proprietário destes tópicos/postagens. Então, você precisará solicitar um administrador para alterar a propriedade da postagem principal para `camperbot`.
4. Depois que o novo tópico for criado, será criado um id para o tópico do fórum. Está localizado no final da URL do tópico do fórum. Este id deve ser adicionado ao arquivo de desafio do currículo através do processo normal de pull request para o botão `Get a Hint` para vincular ao tópico.

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

#### Explicação de Código

- A explicação do código fica aqui
- A explicação do código fica aqui

#### Links relevantes

- [Texto do link](link_url_goes_here)
- [Texto do link](link_url_goes_here)

</details>
````

## Testando desafios

Antes de [criar um pull request](how-to-open-a-pull-request.md) para suas modificações, você precisa validar que as mudanças feitas não causam problemas no desafio.

1. Para testar todos os desafios, execute o comando abaixo a partir do diretório raiz

````
pnpm run test:curriculum
```

2. Você também pode testar um bloco ou superbloco de desafios com esses comandos

```
FCC_BLOCK='Basic HTML and HTML5' pnpm run test:curriculum
```

```
FCC_SUPERBLOCK='responsive-web-design' pnpm run test:curriculum
```

Você também é capaz de testar um desafio individualmente seguindo as seguintes etapas:

1.  Mude para o diretório `curriculum`:

   ```
   cd curriculum
   ```

2. Execute o comando a seguir para cada arquivo de desafio no qual você fez alteraçõess (substituindo `challenge-title-goes-here` com o título completo do desafio):

   ```
   pnpm run test -- -g challenge-title-goes-here ```

Quando você verificar que cada desafio modificado passou nos testes, [crie um pull request](how-to-open-a-pull-request.md).

> [!TIP] Você pode definir a variável de ambiente `LOCALE` no `.env` no idioma do(s) desafio(s) que precisa testar.
> 
> Os valores atualmente aceitos são `english` e `chinese`, com `english` sendo o padrão.

### Links úteis

Criação e edição de desafios:

1. [Tipos de desafio](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/client/utils/challenge-types.js#L1-L13) - o que significam os valores do tipo de desafio numérico (enum).

2. [Contribuindo para o FreeCodeCamp - Escrevendo testes de desafio ES6](https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s) - um vídeo com [Ethan Arrowood](https://twitter.com/ArrowoodTech) contribuindo para a versão antiga do currículo.
