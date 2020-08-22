---
id: 587d7fb2367417b2b2512bf6
title: Get Query Parameter Input from the Client
localeTitle: Obter entrada de parâmetro de consulta do cliente
challengeType: 2
---

## Description
<section id='description'> 
Outra maneira comum de obter entrada do cliente é codificando os dados após o caminho da rota, usando uma string de consulta. A cadeia de consulta é delimitada por um ponto de interrogação (?) E inclui pares campo = valor. Cada casal é separado por um e comercial (&amp;). O Express pode analisar os dados da cadeia de consulta e preencher o objeto <code>req.query</code> . Alguns caracteres não podem estar em URLs, eles precisam ser codificados em um <a href='https://en.wikipedia.org/wiki/Percent-encoding' target='_blank'>formato diferente</a> antes de você poder enviá-los. Se você usar a API do JavaScript, poderá usar métodos específicos para codificar / decodificar esses caracteres. 
<blockquote>route_path: '/library'<br>actual_request_URL: '/library?userId=546&bookId=6754' <br>req.query: {userId: '546', bookId: '6754'}</blockquote> 
Construa um endpoint da API, montado em <code>GET /name</code> . Responda com um documento JSON, tomando a estrutura <code>{ name: 'firstname lastname'}</code> . Os parâmetros de nome e sobrenome devem ser codificados em uma string de consulta, por exemplo, <code>?first=firstname&amp;last=lastname</code> . 
DICA: No exercício a seguir, vamos receber dados de uma solicitação POST, no mesmo caminho de rota <code>/name</code> . Se você quiser, pode usar o método <code>app.route(path).get(handler).post(handler)</code> . Essa sintaxe permite encadear diferentes manipuladores de verbo na mesma rota de caminho. Você pode economizar um pouco de digitação e ter um código mais limpo. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Teste 1: o endpoint da sua API deve responder com o nome correto'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/name?first=Mick&last=Jagger'').then(data => { assert.equal(data.name, ''Mick Jagger'', ''Test 1: "GET /name" route does not behave as expected'') }, xhr => { throw new Error(xhr.responseText); })'
  - text: 'Teste 2: seu ponto de extremidade API deve responder com o nome correto'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/name?last=Richards&first=Keith'').then(data => { assert.equal(data.name, ''Keith Richards'', ''Test 2: "GET /name" route does not behave as expected'') }, xhr => { throw new Error(xhr.responseText); })'

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
