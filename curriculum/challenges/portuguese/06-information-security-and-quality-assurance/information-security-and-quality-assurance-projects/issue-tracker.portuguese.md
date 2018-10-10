---
id: 587d8249367417b2b2512c42
title: Issue Tracker
challengeType: 4
isRequired: true
videoUrl: ''
localeTitle: Rastreador de problemas
---

## Description
<section id="description"> Crie um aplicativo JavaScript de pilha completa que seja funcionalmente semelhante a este: <a href="https://protective-garage.glitch.me/" target="_blank">https://protective-garage.glitch.me/</a> . Trabalhar neste projeto envolverá você escrevendo seu código no Glitch em nosso projeto inicial. Depois de concluir este projeto, você pode copiar sua URL de falha pública (para a página inicial do seu aplicativo) nesta tela para testá-lo! Opcionalmente, você pode optar por escrever seu projeto em outra plataforma, mas deve estar publicamente visível para nossos testes. Inicie este projeto no Glitch usando <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-project-issuetracker/">este link</a> ou clone <a href="https://github.com/freeCodeCamp/boilerplate-project-issuetracker/">este repositório</a> no GitHub! Se você usa o Glitch, lembre-se de salvar o link do seu projeto em algum lugar seguro! </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Evitar ataques de script entre sites (XSS).
    testString: ''
  - text: 'Eu posso POST / api / issues / {projectname} com dados de formulário contendo required issue_title, issue_text, created_by e optional assigned_to e status_text.'
    testString: ''
  - text: 'O objeto salvo (e retornado) incluirá todos esses campos (em branco para opcional sem entrada) e também incluirá created_on (data / hora), updated_on (data / hora), open (booleano, true para open, false para fechado), e _id.'
    testString: ''
  - text: 'Eu posso colocar / api / issues / {projectname} com um id e quaisquer campos no objeto com um valor para o objeto objeto disse. Retornado será "atualizado com sucesso" ou "não foi possível atualizar" + id. Isso deve sempre atualizar updated_on. Se nenhum campo for enviado, retorne "nenhum campo atualizado enviado".'
    testString: ''
  - text: 'Eu posso DELETE / api / issues / {projectname} com um id para deletar completamente um problema. Se nenhum _id for enviado, retorne "id error", success: "deleted" + id, failed: "não foi possível excluir" + id.'
    testString: ''
  - text: 'Eu posso GET / api / issues / {projectname} para uma matriz de todas as questões sobre esse projeto específico com todas as informações para cada problema como foi retornado quando publicado.'
    testString: ''
  - text: 'Eu posso filtrar meu pedido de obtenção passando também ao longo de qualquer campo e valor na consulta (ou seja, / api / issues / {project}? Open = false). Eu posso passar tantos campos / valores quanto eu quiser.'
    testString: ''
  - text: Todos os 11 testes funcionais estão completos e aprovados.
    testString: ''

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
