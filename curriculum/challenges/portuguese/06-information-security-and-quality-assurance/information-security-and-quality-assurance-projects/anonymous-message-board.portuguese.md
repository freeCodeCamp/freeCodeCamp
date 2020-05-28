---
id: 587d824a367417b2b2512c45
title: Anonymous Message Board
challengeType: 4
isRequired: true
videoUrl: ''
localeTitle: Quadro de mensagens anônimas
---

## Description
<section id="description"> Crie um aplicativo JavaScript de pilha completa que seja funcionalmente semelhante a este: <a href="https://spiky-well-vein.glitch.me/" target="_blank">https://spiky-well-vein.glitch.me/</a> . Trabalhar neste projeto envolverá você escrevendo seu código no Glitch em nosso projeto inicial. Depois de concluir este projeto, você pode copiar sua URL de falha pública (para a página inicial do seu aplicativo) nesta tela para testá-lo! Opcionalmente, você pode optar por escrever seu projeto em outra plataforma, mas deve estar publicamente visível para nossos testes. Inicie este projeto no Glitch usando <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-project-messageboard/">este link</a> ou clone <a href="https://github.com/freeCodeCamp/boilerplate-project-messageboard/">este repositório</a> no GitHub! Se você usa o Glitch, lembre-se de salvar o link do seu projeto em algum lugar seguro! </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Apenas permita que seu site seja carregado em um iFrame em suas próprias páginas.
    testString: ''
  - text: Não permitir pré-busca de DNS.
    testString: ''
  - text: Apenas permita que seu site envie o referenciador para suas próprias páginas.
    testString: ''
  - text: 'Eu posso POSTAR um tópico para um quadro de mensagens específico passando o texto dos dados do formulário e deletepassword_ para /api/threads/{board}.(Recomendar res.redirecionar para a página do fórum / b / {quadro}) Salvo será pelo menos _id, texto , createdon_ (data e hora), bumpedon_ (data e hora, começa igual a created_on), reported (boolean), deletepassword_, e replies (array).'
    testString: ''
  - text: 'Eu POSTAR POSTAR uma resposta a um tópico em uma placa específica passando o texto dos dados do formulário, deletepassword_, & threadid_ para / api / replies / {board} e também atualizará a data bumped_on para a data dos comentários. (Recomende res.redirecionar para thread page / b / {board} / {thread_id}) No array de respostas do thread, serão salvos _id, text, createdon_, deletepassword_, & reported.'
    testString: ''
  - text: 'Eu posso obter uma matriz dos 10 tópicos mais recentes no painel com apenas as 3 respostas mais recentes de / api / threads / {board}. Os campos denunciados e deletepasswords_ não serão enviados para o cliente.'
    testString: ''
  - text: 'Eu posso obter um segmento inteiro com todas as suas respostas de / api / replies / {board}? Thread_id = {thread_id}. Também ocultando os mesmos campos que o cliente deve ver.'
    testString: ''
  - text: ''
    testString: ''
  - text: 'Eu posso deletar um post (apenas mudando o texto para "[deleted]" ao invés de remover completamente como um thread) se eu enviar um pedido DELETE para / api / replies / {board} e passar o threadid_, replyid_, & deletepassword_. (Resposta de texto será "senha incorreta" ou "sucesso")'
    testString: ''
  - text: 'Eu posso relatar um thread e alterar seu valor relatado para true enviando uma solicitação PUT para / api / threads / {board} e passando o threadid_. (Resposta de texto será "sucesso")'
    testString: ''
  - text: 'Posso denunciar uma resposta e alterar o valor relatado para true, enviando uma solicitação PUT para / api / replies / {board} e repassando o threadid_ & replyid_. (Resposta de texto será "sucesso")'
    testString: ''
  - text: Testes funcionais completos que testam totalmente as rotas e passam.
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
