![freeCodeCamp.org Social Banner](https://s3.amazonaws.com/freecodecamp/wide-social-banner.png)

[![Pull Requests Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)
[![first-timers-only Friendly](https://img.shields.io/badge/first--timers--only-friendly-blue.svg)](http://www.firsttimersonly.com/)
[![Open Source Helpers](https://www.codetriage.com/freecodecamp/freecodecamp/badges/users.svg)](https://www.codetriage.com/freecodecamp/freecodecamp)
[![Setup Automated](https://img.shields.io/badge/setup-automated-blue?logo=gitpod)](https://gitpod.io/from-referrer/)

## Base de código aberto e currículo do freeCodeCamp.org

[freeCodeCamp.org](https://www.freecodecamp.org) é uma comunidade amigável, onde você pode aprender a codificar gratuitamente. É administrado por uma organização sem fins lucrativos [donor-supported 501(c)(3) nonprofit](https://donate.freecodecamp.org), com o objetivo de ajudar milhões de adultos ocupados na transição para a tecnologia. Nossa comunidade já ajudou mais de 10.000 pessoas a conseguir seu primeiro emprego como desenvolvedor.

Nosso currículo completo de desenvolvimento da Web é totalmente gratuito e de ritmo próprio. Temos milhares de desafios de codificação interativa para ajudá-lo a expandir suas habilidades.

## Índice

* [Certificações](#certifications)
* [A plataforma de aprendizagem](#the-learning-platform)
* [Reportar bugs e problemas](#reporting-bugs-and-issues)
* [Reportando problemas de segurança](#reporting-security-issues)
* [Contribuindo](#contributing)
* [Status da Plataforma, Compilação e Implantação](#platform-build-and-deployment-status)
* [Licença](#license)

### Certificações

O freeCodeCamp.org oferece várias certificações gratuitas de desenvolvedor. Cada uma dessas certificações envolve a construção de 5 projetos de aplicativos da web necessários, além de centenas de desafios opcionais de codificação para ajudá-lo a se preparar para esses projetos. Estimamos que cada certificação levará um programador iniciante em cerca de 300 horas para ser ganho.

Cada um desses 30 projetos no currículo do freeCodeCamp.org tem suas próprias histórias de usuário ágeis e testes automatizados. Isso ajuda a criar seu projeto de forma incremental e garante que você cumpriu todas as histórias de usuários antes de enviá-lo.

Você pode acessar esses conjuntos de testes através do [CDN do freeCodeCamp](https://cdn.freecodecamp.org/testable-Projeto-fcc/v1/bundle.js). Isso significa que você pode criar esses projetos em sites como CodePen e Glitch - ou mesmo no ambiente de desenvolvimento do seu computador local.

Depois de obter uma certificação, você sempre a terá. Você sempre poderá vincular a ele a partir do seu LinkedIn ou currículo. E quando seus possíveis empregadores ou clientes freelancers clicarem nesse link, eles verão uma certificação verificada específica para você.

A única exceção a isso ocorre no caso de descobrirmos violações da nossa [Política de honestidade acadêmica](https://www.freecodecamp.org/academic-honesty). Quando identificamos pessoas plagiando de maneira inequívoca (submetendo o código ou projetos de outras pessoas como se fossem seus, sem citação), fazemos o que todas as instituições rigorosas de aprendizado devem fazer - revogamos suas certificações e banimos essas pessoas.

Aqui estão nossas seis principais certificações:

#### 1. Certificação Responsiva de Web Design

- [Basic HTML and HTML5](https://learn.freecodecamp.org/responsive-web-design/basic-html-and-html5)
- [Basic CSS](https://learn.freecodecamp.org/responsive-web-design/basic-css)
- [Applied Visual Design](https://learn.freecodecamp.org/responsive-web-design/applied-visual-design)
- [Applied Accessibility](https://learn.freecodecamp.org/responsive-web-design/applied-accessibility)
- [Responsive Web Design Principles](https://learn.freecodecamp.org/responsive-web-design/responsive-web-design-principles)
- [CSS Flexbox](https://learn.freecodecamp.org/responsive-web-design/css-flexbox)
- [CSS Grid](https://learn.freecodecamp.org/responsive-web-design/css-grid)
  <br />
  <br />
  **Projetos**: Tribute Page, Survey Form, Product Landing Page, Technical Documentation Page, Personal Portfolio Webpage

#### 2. Certificação de algoritmos JavaScript e estruturas de dados

- [Basic JavaScript](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript)
- [ES6](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6)
- [Regular Expressions](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/regular-expressions)
- [Debugging](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/debugging)
- [Basic Data Structures](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-data-structures)
- [Algorithm Scripting](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting)
- [Object Oriented Programming](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming)
- [Functional Programming](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming)
- [Intermediate Algorithm Scripting](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting)
  <br />
  <br />
  **Projetos**: Palindrome Checker, Roman Numeral Converter, Caesar's Cipher, Telephone Number Validator, Cash Register

#### 3. Certificação de bibliotecas de front-end

- [Bootstrap](https://learn.freecodecamp.org/front-end-libraries/bootstrap)
- [jQuery](https://learn.freecodecamp.org/front-end-libraries/jquery)
- [Sass](https://learn.freecodecamp.org/front-end-libraries/sass)
- [React](https://learn.freecodecamp.org/front-end-libraries/react)
- [Redux](https://learn.freecodecamp.org/front-end-libraries/redux)
- [React and Redux](https://learn.freecodecamp.org/front-end-libraries/react-and-redux)
  <br />
  <br />
  **Projetos**: Random Quote Machine, Markdown Previewer, Drum Machine, JavaScript Calculator, Pomodoro Clock

#### 4. Certificação de visualização de dados

- [Data Visualization with D3](https://learn.freecodecamp.org/data-visualization/data-visualization-with-d3)
- [JSON APIs and Ajax](https://learn.freecodecamp.org/data-visualization/json-apis-and-ajax)
  <br />
  <br />
  **Projetos**: Bar Chart, Scatterplot Graph, Heat Map, Choropleth Map, Treemap Diagram

#### 5. Certificação de APIs e microsserviços

- [Managing Packages with Npm](https://learn.freecodecamp.org/apis-and-microservices/managing-packages-with-npm)
- [Basic Node and Express](https://learn.freecodecamp.org/apis-and-microservices/basic-node-and-express)
- [MongoDB and Mongoose](https://learn.freecodecamp.org/apis-and-microservices/mongodb-and-mongoose)
  <br />
  <br />
  **Projetos**: Timestamp Microservice, Request Header Parser, URL Shortener, Exercise Tracker, File Metadata Microservice

#### 6. Certificação de Segurança da Informação e Garantia de Qualidade

- [Information Security with HelmetJS](https://learn.freecodecamp.org/information-security-and-quality-assurance/information-security-with-helmetjs)
- [Quality Assurance and Testing with Chai](https://learn.freecodecamp.org/information-security-and-quality-assurance/quality-assurance-and-testing-with-chai)
- [Advanced Node and Express](https://learn.freecodecamp.org/information-security-and-quality-assurance/advanced-node-and-express)
  <br />
  <br />
  **Projetos**: Metric-Imperial Converter, Issue Tracker, Personal Library, Stock Price Checker, Anonymous Message Board

#### Certificação de desenvolvimento de pilha completa

Depois de obter todas as 6 dessas certificações, você poderá reivindicar sua certificação de desenvolvimento de pilha completa freeCodeCamp.org. Essa distinção final significa que você concluiu cerca de 1.800 horas de codificação com uma ampla variedade de ferramentas de desenvolvimento da web.

#### Certificações herdadas

Também temos 3 certificações legadas de nosso currículo de 2015, que ainda estão disponíveis. Todo o Projeto necessário para essas certificações herdadas permanecerá disponível no freeCodeCamp.org.

- Certificação de desenvolvimento de front-end herdado
- Certificação de visualização de dados herdados
- Certificação de desenvolvimento de back-end herdada

### A plataforma de aprendizado

Este código está sendo executado ao vivo em [freeCodeCamp.org](https://www.freecodecamp.org).

Nossa comunidade também possui:

- A [fórum](https://www.freecodecamp.org/forum) onde você geralmente pode obter ajuda de programação ou feedback do projeto em poucas horas.
- A [Canal do Youtube](https://youtube.com/freecodecamp) com cursos gratuitos em Python, SQL, Android e uma grande variedade de outras tecnologias.
- A [podcast](https://podcast.freecodecamp.org/) com insights de tecnologia e histórias inspiradoras de desenvolvedores.
- Um abrangente [guia para milhares de tópicos de programação](https://guide.freecodecamp.org/)
- Uma publicação [Developer News](https://www.freecodecamp.org/news), um local gratuito, de código aberto e sem anúncios para postar cruzadamente os artigos de seu blog.

> ### [Participe da nossa comunidade aqui](https://www.freecodecamp.org/signin).

### Reportando bugs e problemas

Se você acha que encontrou um bug, primeiro leia o artigo [como reportar um bug](https://www.freecodecamp.org/forum/t/how-to-report-a-bug/19543) e siga suas instruções.

Se você tem certeza de que é um novo bug e confirmou que outra pessoa está enfrentando o mesmo problema, vá em frente e crie um novo problema no GitHub. Certifique-se de incluir o máximo de informações possível para que possamos reproduzir o bug.

### Reportando problemas de segurança

Se você acha que encontrou uma vulnerabilidade, informe com responsabilidade. Não crie problemas no GitHub para problemas de segurança. Em vez disso, envie um e-mail para `security@freecodecamp.org` e iremos analisá-lo imediatamente.

### Contribuindo

> ### [Siga estas etapas para contribuir.](CONTRIBUTING.md)

### Status da plataforma, construção e implantação

O status geral da plataforma para todos os nossos aplicativos está disponível em [`status.freecodecamp.org`](https://status.freecodecamp.org). O status de compilação e implantação do código está disponível em [nosso Guia do DevOps](/docs/devops.md).

### Licença

Copyright © 2019 freeCodeCamp.org

O conteúdo deste repositório está vinculado pelas seguintes licenças:

- O software do computador está licenciado sob a licença [BSD-3-Clause](LICENSE.md).
- Os recursos de aprendizado no diretório [`/curriculum`](/curriculum), incluindo seus subdiretórios, estão licenciados sob a licença [CC-BY-SA-4.0](/curriculum/LICENSE.md).
