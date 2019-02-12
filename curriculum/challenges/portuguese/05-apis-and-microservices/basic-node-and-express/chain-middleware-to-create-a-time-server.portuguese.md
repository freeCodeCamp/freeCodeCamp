---
id: 587d7fb1367417b2b2512bf4
title: Chain Middleware to Create a Time Server
localeTitle: Chain Middleware para criar um servidor de horário
challengeType: 2
---

## Description
<section id='description'> 
Middleware pode ser montado em uma rota específica usando <code>app.METHOD(path, middlewareFunction)</code> . O middleware também pode ser encadeado dentro da definição da rota. 
Veja o seguinte exemplo: 
<blockquote>app.get('/user', function(req, res, next) {<br>  req.user = getTheUserSync();  // Hypothetical synchronous operation<br>  next();<br>}, function(req, res) {<br>  res.send(req.user);<br>})</blockquote> 
Essa abordagem é útil para dividir as operações do servidor em unidades menores. Isso leva a uma estrutura de aplicativo melhor e à possibilidade de reutilizar códigos em locais diferentes. Essa abordagem também pode ser usada para executar alguma validação nos dados. Em cada ponto da pilha de middlewares, você pode bloquear a execução da corrente atual e passar o controle para funções especificamente projetadas para lidar com erros. Ou você pode passar o controle para a próxima rota correspondente, para lidar com casos especiais. Vamos ver como na seção Express avançada. 
Na rota <code>app.get('/now', ...)</code> uma função de middleware e o manipulador final. Na função middleware você deve adicionar a hora atual ao objeto request na chave <code>req.time</code> . Você pode usar o <code>new Date().toString()</code> . No manipulador, responda com um objeto JSON, usando a estrutura <code>{time: req.time}</code> . 
Dica: O teste não passará se você não encadear o middleware. Se você montar a função em outro lugar, o teste falhará, mesmo se o resultado da saída estiver correto. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O ponto de extremidade / now deve ter o middleware montado
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/chain-middleware-time'').then(data => { assert.equal(data.stackLength, 2, ''"/now" route has no mounted middleware''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: O ponto final / now deve retornar um tempo que é de +/- 20 segundos a partir de agora
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/chain-middleware-time'').then(data => { var now = new Date(); assert.isAtMost(Math.abs(new Date(data.time) - now), 20000, ''the returned time is not between +- 20 secs from now''); }, xhr => { throw new Error(xhr.responseText); })'

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
