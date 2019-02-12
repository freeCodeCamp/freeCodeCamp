---
id: 587d7fb2367417b2b2512bf5
title: Get Route Parameter Input from the Client
localeTitle: Obter entrada de parâmetro de rota do cliente
challengeType: 2
---

## Description
<section id='description'> 
Ao criar uma API, precisamos permitir que os usuários nos comuniquem o que desejam obter de nosso serviço. Por exemplo, se o cliente estiver solicitando informações sobre um usuário armazenado no banco de dados, ele precisará de uma maneira de nos informar em qual usuário está interessado. Uma maneira possível de obter esse resultado é usando parâmetros de rota. Os parâmetros de rota são denominados segmentos da URL, delimitados por barras (/). Cada segmento captura o valor da parte do URL que corresponde à sua posição. Os valores capturados podem ser encontrados no objeto <code>req.params</code> . 
<blockquote>route_path: '/user/:userId/book/:bookId'<br>actual_request_URL: '/user/546/book/6754' <br>req.params: {userId: '546', bookId: '6754'}</blockquote> 
Construa um servidor de eco, montado na rota <code>GET /:word/echo</code> . Responda com um objeto JSON, tomando a estrutura <code>{echo: word}</code> . Você pode encontrar a palavra a ser repetida em <code>req.params.word</code> . Você pode testar sua rota a partir da barra de endereços do seu navegador, visitando algumas rotas correspondentes, por exemplo, your-app-rootpath / freecodecamp / echo 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Teste 1: seu servidor de eco deve repetir palavras corretamente'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/eChOtEsT/echo'').then(data => { assert.equal(data.echo, ''eChOtEsT'', ''Test 1: the echo server is not working as expected'') }, xhr => { throw new Error(xhr.responseText); })'
  - text: 'Teste 2: seu servidor de eco deve repetir palavras corretamente'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/ech0-t3st/echo'').then(data => { assert.equal(data.echo, ''ech0-t3st'', ''Test 2: the echo server is not working as expected'') }, xhr => { throw new Error(xhr.responseText); })'

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
