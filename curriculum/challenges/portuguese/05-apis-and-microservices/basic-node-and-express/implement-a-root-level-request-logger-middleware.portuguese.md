---
id: 587d7fb1367417b2b2512bf3
title: Implement a Root-Level Request Logger Middleware
localeTitle: Implementar um middleware de logger de solicitação de nível raiz
challengeType: 2
---

## Description
<section id='description'> 
Antes de introduzirmos a função de middleware <code>express.static()</code> . Agora é hora de ver qual middleware é, com mais detalhes. As funções de middleware são funções que levam 3 argumentos: o objeto de solicitação, o objeto de resposta e a próxima função no ciclo de solicitação-resposta do aplicativo. Essas funções executam algum código que pode ter efeitos colaterais no aplicativo e geralmente adicionam informações aos objetos de solicitação ou resposta. Eles também podem terminar o ciclo enviando a resposta, quando alguma condição é atendida. Se eles não enviarem a resposta, quando eles terminarem, iniciarão a execução da próxima função na pilha. Isso é acionado chamando o terceiro argumento em <code>next()</code> . Mais informações na <a href='http://expressjs.com/en/guide/using-middleware.html' target='_blank'>documentação expressa</a> . 
Veja o seguinte exemplo: 
<blockquote>function(req, res, next) {<br>  console.log("I'm a middleware...");<br>  next();<br>}</blockquote> 
Vamos supor que montamos essa função em uma rota. Quando uma solicitação corresponde à rota, ela exibe a string "Sou um middleware ...". Em seguida, ele executa a próxima função na pilha. 
Neste exercício, vamos construir um middleware de nível raiz. Como vimos no desafio 4, para montar uma função de middleware no nível da raiz, podemos usar o método <code>app.use(&lt;mware-function&gt;)</code> . Nesse caso, a função será executada para todas as solicitações, mas você também pode definir condições mais específicas. Por exemplo, se você quiser que uma função seja executada apenas para solicitações POST, você pode usar <code>app.post(&lt;mware-function&gt;)</code> . Existem métodos análogos para todos os verbos http (GET, DELETE, PUT,…). 
Construa um logger simples. Para cada requisição, deve logar no console uma string tomando o seguinte formato: <code>method path - ip</code> . Um exemplo seria: <code>GET /json - ::ffff:127.0.0.1</code> . Observe que há um espaço entre o <code>method</code> e o <code>path</code> e que o traço que separa o <code>path</code> e o <code>ip</code> é cercado por um espaço em ambos os lados. Você pode obter o método de solicitação (verbo http), o caminho de rota relativo e o ip do chamador do objeto de solicitação, usando <code>req.method</code> , <code>req.path</code> e <code>req.ip</code> Lembre-se de chamar <code>next()</code> quando terminar, ou seu servidor ficará preso para sempre. Certifique-se de ter aberto o 'Logs' e veja o que acontece quando chega algum pedido… 
Dica: o Express avalia funções na ordem em que aparecem no código. Isso também é verdade para o middleware. Se você quer que ele funcione para todas as rotas, ele deve ser montado antes delas. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O middleware do registrador de nível raiz deve estar ativo
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/root-middleware-logger'').then(data => { assert.isTrue(data.passed, ''root-level logger is not working as expected''); }, xhr => { throw new Error(xhr.responseText); })'

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
