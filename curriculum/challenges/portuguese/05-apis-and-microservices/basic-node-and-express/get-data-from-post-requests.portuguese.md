---
id: 587d7fb2367417b2b2512bf8
title: Get Data from POST Requests
localeTitle: Obter dados de solicitações de POST
challengeType: 2
---

## Description
<section id='description'> 
Monte um manipulador POST no caminho <code>/name</code> . É o mesmo caminho de antes. Nós preparamos um formulário no frontpage html. Ele enviará os mesmos dados do exercício 10 (string de consulta). Se o analisador de corpo estiver configurado corretamente, você deverá encontrar os parâmetros no objeto <code>req.body</code> . Dê uma olhada no exemplo usual de biblioteca: 
<blockquote>route: POST '/library'<br>urlencoded_body: userId=546&bookId=6754 <br>req.body: {userId: '546', bookId: '6754'}</blockquote> 
Responda com o mesmo objeto JSON de antes: <code>{name: 'firstname lastname'}</code> . Teste se seu endpoint funciona usando o formulário html fornecido na página principal do aplicativo. 
Dica: Existem vários outros métodos de HTTP além de GET e POST. E por convenção existe uma correspondência entre o verbo http e a operação que você vai executar no servidor. O mapeamento convencional é: 
POST (às vezes PUT) - Cria um novo recurso usando as informações enviadas com o pedido, 
GET - Lê um recurso existente sem modificá-lo, 
PUT ou PATCH (às vezes POST) - Atualiza um recurso usando os dados enviado, 
DELETE =&gt; Excluir um recurso. 
Existem também alguns outros métodos que são usados para negociar uma conexão com o servidor. Exceto pelo GET, todos os outros métodos listados acima podem ter uma carga útil (ou seja, os dados no corpo da solicitação). O middleware do analisador de corpo também funciona com esses métodos. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Teste 1: o endpoint da sua API deve responder com o nome correto'
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/name'', {first: ''Mick'', last: ''Jagger''}).then(data => { assert.equal(data.name, ''Mick Jagger'', ''Test 1: "POST /name" route does not behave as expected'') }, xhr => { throw new Error(xhr.responseText); })'
  - text: 'Teste 2: seu endpoint da API deve responder com o nome correto'
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/name'', {first: ''Keith'', last: ''Richards''}).then(data => { assert.equal(data.name, ''Keith Richards'', ''Test 2: "POST /name" route does not behave as expected'') }, xhr => { throw new Error(xhr.responseText); })'

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
