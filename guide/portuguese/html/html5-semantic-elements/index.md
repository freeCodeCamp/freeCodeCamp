---
title: HTML5 Semantic Elements
localeTitle: Elementos semânticos em HTML5
---
## Elementos semânticos em HTML5

Elementos HTML semânticos descrevem claramente seu significado de forma humana e legível por máquina. Elementos como `<header>` , `<footer>` e `<article>` são considerados semânticos porque descrevem com precisão a finalidade do elemento e o tipo de conteúdo que está dentro deles.

### Um histórico rápido

HTML foi originalmente criado como uma linguagem de marcação para descrever documentos no início da Internet. Como a internet cresceu e foi adotada por mais pessoas, suas necessidades mudaram. Onde a internet era originalmente destinada a compartilhar documentos científicos, agora as pessoas também queriam compartilhar outras coisas. Muito rapidamente, as pessoas começaram a querer tornar a web mais bonita. Como a Web não foi criada inicialmente para ser projetada, os programadores usaram hacks diferentes para definir as coisas de maneiras diferentes. Em vez de usar o `<table></table>` para descrever informações usando uma tabela, os programadores os usariam para posicionar outros elementos em uma página. Conforme o uso de layouts visualmente projetados progrediu, os programadores começaram a usar uma tag "não-semântica" genérica como `<div>` . Eles costumavam dar a esses elementos um atributo `class` ou `id` para descrever seu propósito. Por exemplo, em vez de `<header>` isso geralmente era escrito como `<div class="header">` . Como o HTML5 ainda é relativamente novo, esse uso de elementos não semânticos ainda é muito comum nos sites atuais.

#### Lista de novos elementos semânticos

Os elementos semânticos adicionados no HTML5 são:

*   `<article>`
*   `<aside>`
*   `<details>`
*   `<figcaption>`
*   `<figure>`
*   `<footer>`
*   `<header>`
*   `<main>`
*   `<mark>`
*   `<nav>`
*   `<section>`
*   `<summary>`
*   `<time>`

Elementos como `<header>` , `<nav>` , `<section>` , `<article>` , `<aside>` e `<footer>` atuam mais ou menos como os elementos `<div>` . Eles agrupam outros elementos juntos em seções da página. No entanto, quando uma tag `<div>` pode conter qualquer tipo de informação, é fácil identificar que tipo de informação seria usada em uma região `<header>` semântica.

**Um exemplo de layout de elementos semânticos por w3schools**

![Elementos semânticos que estabelecem uma página por w3schools](https://www.w3schools.com/html/img_sem_elements.gif)

### Benefícios dos elementos semânticos

Para observar os benefícios dos elementos semânticos, aqui estão duas partes do código HTML. Este primeiro bloco de código usa elementos semânticos:
```
<header></header> 
 <section> 
    <article> 
        <figure> 
            <img> 
            <figcaption></figcaption> 
        </figure> 
    </article> 
 </section> 
 <footer></footer> 
```

Enquanto este segundo bloco de código usa elementos não semânticos:
```
<div id="header"></div> 
 <div class="section"> 
    <div class="article"> 
        <div class="figure"> 
            <img> 
            <div class="figcaption"></div> 
        </div> 
    </div> 
 </div> 
 <div id="footer"></div> 
```

Primeiro, é muito **mais fácil de ler** . Esta é provavelmente a primeira coisa que você notará ao observar o primeiro bloco de código usando elementos semânticos. Este é um pequeno exemplo, mas como programador você pode ler centenas ou milhares de linhas de código. Quanto mais fácil for ler e entender esse código, mais fácil será o seu trabalho.

Tem **maior acessibilidade** . Você não é o único que acha os elementos semânticos mais fáceis de entender. Mecanismos de pesquisa e tecnologias assistenciais (como leitores de tela para usuários com deficiência visual) também são capazes de entender melhor o contexto e o conteúdo do seu site, o que significa uma melhor experiência para seus usuários.

No geral, os elementos semânticos também levam a **um código** mais **consistente** . Ao criar um cabeçalho usando elementos não-semânticos, diferentes programadores podem escrever isso como `<div class="header">` , `<div id="header">` , `<div class="head">` , ou simplesmente `<div>` . Existem muitas maneiras de criar um elemento de cabeçalho e todas dependem da preferência pessoal do programador. Ao criar um elemento semântico padrão, fica mais fácil para todos.

Desde outubro de 2014, o HTML4 foi atualizado para o HTML5, juntamente com alguns novos elementos "semânticos". Até hoje, alguns de nós ainda podem estar confusos sobre o porquê de tantos elementos diferentes que não parecem mostrar grandes mudanças.

#### `&#60;section&#62;` e `&#60;article&#62;`

"Qual é a diferença?", Você pode perguntar. Ambos os elementos são usados ​​para seccionar um conteúdo e, sim, podem definitivamente ser usados ​​de maneira intercambiável. É uma questão de em que situação. O HTML4 ofereceu apenas um tipo de elemento de contêiner, que é `&#60;div&#62;` . Embora isso ainda seja usado em HTML5, o HTML5 nos forneceu a `&#60;section&#62;` e `&#60;article&#62;` de forma a substituir o `&#60;div&#62;` .

A `&#60;section&#62;` e `&#60;article&#62;` elementos são conceitualmente semelhantes e intercambiáveis. Para decidir qual deles você deve escolher, observe o seguinte:

1.  Um artigo destina-se a ser distribuído de forma independente ou reutilizável.
2.  Uma seção é um agrupamento temático de conteúdo.

```html

<section> 
  <p>Top Stories</p> 
  <section> 
    <p>News</p> 
    <article>Story 1</article> 
    <article>Story 2</article> 
    <article>Story 3</article> 
  </section> 
  <section> 
    <p>Sport</p> 
    <article>Story 1</article> 
    <article>Story 2</article> 
    <article>Story 3</article> 
  </section> 
 </section> 
```

#### `&#60;header&#62;` e `&#60;hgroup&#62;`

O `&#60;header&#62;` elemento é geralmente encontrado na parte superior de um documento, uma seção ou um artigo e geralmente contém o cabeçalho principal e algumas ferramentas de navegação e pesquisa.

```html

<header> 
  <h1>Company A</h1> 
  <ul> 
    <li><a href="/home">Home</a></li> 
    <li><a href="/about">About</a></li> 
    <li><a href="/contact">Contact us</a></li> 
  </ul> 
  <form target="/search"> 
    <input name="q" type="search" /> 
    <input type="submit" /> 
  </form> 
 </header> 
```

O `&#60;hgroup&#62;` elemento deve ser usado onde você deseja um cabeçalho principal com um ou mais subtítulos.

```html

<hgroup> 
  <h1>Heading 1</h1> 
  <h2>Subheading 1</h2> 
  <h2>Subheading 2</h2> 
 </hgroup> 
```

LEMBRE-SE, que o `&#60;header&#62;` elemento pode conter qualquer conteúdo, mas o `&#60;hgroup&#62;` elemento só pode conter outros cabeçalhos, ou seja, `&#60;h1&#62;` para `&#60;h6&#62;` e incluindo `&#60;hgroup&#62;` .

#### `&#60;aside&#62;`

O `&#60;aside&#62;` O elemento é destinado ao conteúdo que não faz parte do fluxo do texto em que aparece, embora ainda esteja relacionado de alguma forma. Isto de `&#60;aside&#62;` como uma barra lateral do seu conteúdo principal.

```html

<aside> 
  <p>This is a sidebar, for example a terminology definition or a short background to a historical figure.</p> 
 </aside> 
```

Antes do HTML5, nossos menus foram criados com `&#60;ul&#62;` e `&#60;li&#62;` . Agora, junto com estes, podemos separar nossos itens de menu com um `&#60;nav&#62;` , para navegação entre suas páginas. Você pode ter qualquer número de `&#60;nav&#62;` elementos em uma página, por exemplo, é comum ter uma navegação global na parte superior (no `&#60;header&#62;` ) e navegação local em uma barra lateral (em um elemento `&#60;aside&#62;` ).

```html

<nav> 
  <ul> 
    <li><a href="/home">Home</a></li> 
    <li><a href="/about">About</a></li> 
    <li><a href="/contact">Contact us</a></li> 
  </ul> 
 </nav> 
```

#### `&#60;footer&#62;`

Se houver um `&#60;header&#62;` deve haver um `&#60;footer&#62;` . A `&#60;footer&#62;` é geralmente encontrado na parte inferior de um documento, uma seção ou um artigo. Assim como o `&#60;header&#62;` o conteúdo é geralmente metainformation, como detalhes do autor, informações legais e / ou links para informações relacionadas. Também é válido incluir a `&#60;section&#62;` elementos dentro de um rodapé.

```html

<footer>&copy;Company A</footer> 
```

#### `&#60;small&#62;`

O `&#60;small&#62;` elemento aparece frequentemente dentro de um `&#60;footer&#62;` ou `&#60;aside&#62;` elemento que normalmente conteria informações sobre direitos autorais ou isenções legais e outras letras miúdas. No entanto, isso não se destina a tornar o texto menor. Está apenas descrevendo seu conteúdo, não prescrevendo apresentação.

```html

<footer><small>&copy;Company A</small> Date</footer> 
```

#### `&#60;time&#62;`

O `&#60;time&#62;` elemento permite que uma data ISO 8601 não ambígua seja anexada a uma versão legível para humanos dessa data.

```html

<time datetime="2017-10-31T11:21:00+02:00">Tuesday, 31 October 2017</time> 
```

Por que se preocupar com o `&#60;time&#62;` ? Enquanto humanos podem ler o tempo que pode se desambiguar pelo contexto da maneira normal, os computadores podem ler a data ISO 8601 e ver a data, hora e fuso horário.

#### `&#60;figure&#62;` e `&#60;figcaption&#62;`

`&#60;figure&#62;` é para envolver o conteúdo da imagem em torno dele e `&#60;figcaption&#62;` é legendar sua imagem.

```html

<figure> 
  <img src="https://en.wikipedia.org/wiki/File:Shadow_of_Mordor_cover_art.jpg" alt="Shadow of Mordor" /> 
  <figcaption>Cover art for Middle-earth: Shadow of Mordor</figcaption> 
 </figure> 
```

### Saiba mais sobre os novos elementos HTML5:

*   [w3schools](https://www.w3schools.com/html/html5_semantic_elements.asp) fornece [descrições](https://www.w3schools.com/html/html5_semantic_elements.asp) simples e claras de muitos dos elementos de notícias e como / onde eles devem ser usados.
*   [O MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) também fornece uma ótima referência para todos os elementos HTML e se aprofunda em cada um deles.