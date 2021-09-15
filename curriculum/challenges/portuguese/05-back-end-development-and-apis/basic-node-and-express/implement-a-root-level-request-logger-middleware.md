---
id: 587d7fb1367417b2b2512bf3
title: Implementar um middleware de solicitação ao nível de root
challengeType: 2
forumTopicId: 301514
dashedName: implement-a-root-level-request-logger-middleware
---

# --description--

Anteriormente, você apresentamos a você a função de middleware `express.static()`. Agora é hora de ver o que é o middleware, em mais detalhes. As funções de middleware são funções que recebem 3 argumentos: o objeto de solicitação, o objeto de resposta e a próxima função no ciclo de solicitação e resposta do aplicativo. Estas funções executam algum código que pode ter efeitos colaterais no aplicativo. Geralmente, elas adicionam informações aos objetos de solicitação ou resposta. Elas também podem acabar com o ciclo enviando uma resposta quando alguma condição é satisfeita. Se elas não enviarem a resposta quando terminarem, iniciam a execução da próxima função na pilha. Isso dispara o chamado do terceiro argumento, `next()`.

Observe o exemplo abaixo:

```js
function(req, res, next) {
  console.log("I'm a middleware...");
  next();
}
```

Vamos supor que você montou esta função em uma rota. Quando uma solicitação corresponde à rota, ela exibe a string "I'm a middleware…" e então executa a próxima função na pilha. Neste exercício, você vai criar um middleware ao nível de root. Como você viu no desafio 4, para montar uma função de middleware no nível de root, você pode usar o método `app.use(<mware-function>)`. Neste caso, a função será executada para todas as solicitações, mas você também pode definir condições mais específicas. Por exemplo, se você quiser que uma função seja executada somente para solicitações de POST, você poderia usar `app.post(<mware-function>)`. Existem métodos análogos para todos os verbos de HTTP (GET, DELETE, PUT, …).

# --instructions--

Crie um registrador simples. Para cada solicitação, ele deve registrar no console uma string com o seguinte formato: `method path - ip`. Um exemplo ficaria assim: `GET /json - ::ffff:127.0.0.1`. Note que há um espaço entre `method` e `path` e que o traço separando o `path` e `ip` está cercado por um espaço de ambos os lados. Você pode obter o método de solicitação (verbo do http), o caminho da rota relativo e o IP de quem fez a chamada a partir do objeto de solicitação usando `req.method`, `req.path` e `req.ip`. Lembre-se de chamar `next()` quando você estiver pronto, ou o servidor ficará travado para sempre. Certifique-se de que os 'Logs' estejam abertos e veja o que acontece quando algumas solicitações chegarem.

**Observação:** o Express avalia as funções na ordem em que elas aparecem no código. Isto se aplica também ao middleware. Se você quer que ele funcione para todas as rotas, é preciso montá-lo antes delas.

# --hints--

O middleware do registrador de root deve estar ativo

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/root-middleware-logger').then(
    (data) => {
      assert.isTrue(
        data.passed,
        'root-level logger is not working as expected'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
