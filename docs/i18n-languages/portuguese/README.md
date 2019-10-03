![freeCodeCamp.org Social Banner](https://s3.amazonaws.com/freecodecamp/wide-social-banner.png)

[![Pull Requests Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)
[![first-timers-only Friendly](https://img.shields.io/badge/first--timers--only-friendly-blue.svg)](http://www.firsttimersonly.com/)
[![Open Source Helpers](https://www.codetriage.com/freecodecamp/freecodecamp/badges/users.svg)](https://www.codetriage.com/freecodecamp/freecodecamp)
[![Setup Automated](https://img.shields.io/badge/setup-automated-blue?logo=gitpod)](https://gitpod.io/from-referrer/)

## freeCodeCamp.org's open source codebase and curriculum

[freeCodeCamp.org](https://www.freecodecamp.org) is a friendly community where you can learn to code for free. It is run by a [donor-supported 501(c)(3) nonprofit](https://donate.freecodecamp.org) with the goal of helping millions of busy adults transition into tech. Our community has already helped more than 10,000 people get their first developer job.

Our full-stack web development curriculum is completely free and self-paced. We have thousands of interactive coding challenges to help you expand your skills.

## Table of Contents

* [Certifications](#certifications)
* [The Learning Platform](#the-learning-platform)
* [Reporting Bugs and Issues](#reporting-bugs-and-issues)
* [Reporting Security Issues](#reporting-security-issues)
* [Contributing](#contributing)
* [Platform, Build and Deployment Status](#platform-build-and-deployment-status)
* [License](#license)


### Certifications

freeCodeCamp.org offers several free developer certifications. Each of these certifications involves building 5 required web app projects, along with hundreds of optional coding challenges to help you prepare for those projects. We estimate that each certification will take a beginning programmer around 300 hours to earn.

Each of these 30 projects in the freeCodeCamp.org curriculum has its own agile user stories and automated tests. These help you build up your project incrementally and ensure you've fulfilled all the user stories before you submit it.

You can pull in these test suites through [freeCodeCamp's CDN](https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js). This means you can build these projects on websites like CodePen and Glitch - or even on your local computer's development environment.

Once you’ve earned a certification, you will always have it. You will always be able to link to it from your LinkedIn or résumé. And when your prospective employers or freelance clients click that link, they’ll see a verified certification specific to you.

The one exception to this is in the event that we discover violations of our [Academic Honesty Policy](https://www.freecodecamp.org/academic-honesty). When we catch people unambiguously plagiarizing (submitting other people's code or projects as their own without citation), we do what all rigorous institutions of learning should do - we revoke their certifications and ban those people.

Here are our six core certifications:

#### 1. Certificação de Web Design Responsivo

- [HTML e HTML5 Básico](https://learn.freecodecamp.org/responsive-web-design/basic-html-and-html5)
- [CSS Básico](https://learn.freecodecamp.org/responsive-web-design/basic-css)
- [Design Visual Aplicado](https://learn.freecodecamp.org/responsive-web-design/applied-visual-design)
- [Acessibilidade Aplicada](https://learn.freecodecamp.org/responsive-web-design/applied-accessibility)
- [Princípios de Web Design Responsivo](https://learn.freecodecamp.org/responsive-web-design/responsive-web-design-principles)
- [CSS Flexbox](https://learn.freecodecamp.org/responsive-web-design/css-flexbox)
- [CSS Grid](https://learn.freecodecamp.org/responsive-web-design/css-grid)
  <br />
  <br />
  **Projetos**: Página de Tributos, Formulário de Inquérito, Página Inicial de Produto, Página de Documentação Técnica, Página Web para Portfólio Pessoal

#### 2. Certificação de Algoritmos de JavaScript e Estruturas de Data

- [JavaScript Básico](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript)
- [ES6](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6)
- [Expressões Regulares](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/regular-expressions)
- [Debugging](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/debugging)
- [Estruturas de Data Básicas](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-data-structures)
- [Scripting de Algoritmos](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting)
- [Programação Orientada a Objetos](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming)
- [Programação Funcional](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming)
- [Scripting de Algoritmos Intermédios](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting)
  <br />
  <br />
  **Projetos**: Verificador de Palindromos, Conversor de Numerais Romanos, Cifra de César, Verificador de Número de Telefone, Caixa Registadora

#### 3. Certificação de Bibliotecas de Front End

- [Bootstrap](https://learn.freecodecamp.org/front-end-libraries/bootstrap)
- [jQuery](https://learn.freecodecamp.org/front-end-libraries/jquery)
- [Sass](https://learn.freecodecamp.org/front-end-libraries/sass)
- [React](https://learn.freecodecamp.org/front-end-libraries/react)
- [Redux](https://learn.freecodecamp.org/front-end-libraries/redux)
- [React e Redux](https://learn.freecodecamp.org/front-end-libraries/react-and-redux)
  <br />
  <br />
  **Projetos**: Máquina de Citações Aleatórias, Pré-visualizador de Markdown, Máquina de Tambores, Calculadora de JavaScript, Relógio Pomodoro

#### 4. Certificação de Visualização de Data

- [Visualização de Data com D3](https://learn.freecodecamp.org/data-visualization/data-visualization-with-d3)
- [APIs de JSON e Ajax](https://learn.freecodecamp.org/data-visualization/json-apis-and-ajax)
  <br />
  <br />
  **Projetos**: Gráfico de Barras, Gráfico de Dispersão, Mapa de Calor, Mapa Choropleth, Diagrama Treemap

#### 5. Certificações de APIs e Microserviços

- [Gerenciar Pacotes com NPM](https://learn.freecodecamp.org/apis-and-microservices/managing-packages-with-npm)
- [Node e Express Básico](https://learn.freecodecamp.org/apis-and-microservices/basic-node-and-express)
- [MongoDB e Mongoose](https://learn.freecodecamp.org/apis-and-microservices/mongodb-and-mongoose)
  <br />
  <br />
  **Projetos**: Microserviço de Timestamps, Parser de Cabeçalho de Pedidos, Encolhedor de URL, Tracker de Exercício, Microserviço de Metadata de Ficheiros

#### 6. Certificações de Segurança de Informação e Garantia de Qualidade

- [Segurança de Informação com HelmetJS](https://learn.freecodecamp.org/information-security-and-quality-assurance/information-security-with-helmetjs)
- [Garantia de Qualidade e Testes com Chai](https://learn.freecodecamp.org/information-security-and-quality-assurance/quality-assurance-and-testing-with-chai)
- [Node e Express Avançado](https://learn.freecodecamp.org/information-security-and-quality-assurance/advanced-node-and-express)
  <br />
  <br />
  **Projetos**: Conversor Métrico-Imperial, Issue Tracker, Biblioteca Pessoal, Verificador de Preços da Bolsa, Quadro de Mensagens Anónimo

#### Certificação de Desenvolvimento Full Stack

Quando tenhas merecido todos os 6 certificados, poderás reclamar a tua freeCodeCamp.org Certificação de Desenvolvimento Full Stack. Esta última distinção significa que completaste aproximadamente 1,800 horas de código com uma larga variedade de ferramentas de desenvolvimento web.

#### Certificações Legacy

Também temos 3 certificações legacy do nosso currículo de 2015, ainda disponíveis. Todos os projetos requeridos para estas certificações legacy permanecerão disponíveis em freeCodeCamp.org.

- Certificação de Desenvolvimento Front End Legacy
- Certificação de Visualização de Data Legacy
- Certificação de Desenvolvimento Back End Legacy

### A Plataforma de Aprendizagem

Este código está a correr ao vivo em [freeCodeCamp.org](https://www.freecodecamp.org).

A nossa comunidade também tem:

- Um [fórum](https://www.freecodecamp.org/forum) onde consegues, usualmente, encontrar ajuda de programação ou feedback de projeto dentro de horas.
- Um [canal de YouTube](https://youtube.com/freecodecamp) com cursos gratuitos de Python, SQL, Android, e uma larga variedade de outras tecnologias.
- Um [podcast](https://podcast.freecodecamp.org/) com conhecimentos tecnológicos e histórias inspiradoras de desenvolvedores.
- Um [guia compreensivo para centenas de tópicos de programação](https://guide.freecodecamp.org/)
- Uma publicação [Developer News](https://www.freecodecamp.org/news), um local grátis, open source, sem anúncios para dar cross-post aos teus artigos de blog.

> ### [Junta-te à nossa comunidade aqui](https://www.freecodecamp.org/signin).

### Reportar Bugs e Issues

Se pensas que encontraste um bug, primeiro lê o article [como reportar um bug](https://www.freecodecamp.org/forum/t/how-to-report-a-bug/19543) e segue as suas instruções.

Se estás confiante que é um novo bug, e confirmaste que outra pessoa se está a deparar com o mesmo problema, segue em frente e cria um novo GitHub issue. Assegura que incluis o máximo de informação possível para que consigamos replicar o erro.

### Reportar Problemas de Segurança

Se acreditas que encontraste uma vulnerabilidade, por favor reporta-a responsavelmente. Não cries issues do GitHub para problemas de segurança. Em vez disso, por favor envia um email para `security@freecodecamp.org` e olharemos para ela imediatamente.

### Contribuir

> ### [Por favor, segue estes passos para contribuir.](CONTRIBUTING.md)

### Plataforma, Build e Estado de Deployment

O estado geral da plataforma para todas as nossas aplicações está disponível em [`status.freecodecamp.org`](https://status.freecodecamp.org). A build e estado de deployment para o código está disponível no [nosso Guia DevOps](/docs/devops.md).

### Licença

Copyright © 2019 freeCodeCamp.org

O conteúdo deste repositório é vinculado pelas seguintes licenças:

- O software de computador está licenciado sob a licença [BSD-3-Clause](LICENSE.md).
- As ferramentas de aprendizagem no diretório [`/curriculum`](/curriculum), incluíndo os seus subdiretórios, estão licenciados sob a licença [CC-BY-SA-4.0](/curriculum/LICENSE.md).
