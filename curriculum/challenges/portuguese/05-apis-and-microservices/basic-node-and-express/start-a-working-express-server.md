---
id: 587d7fb0367417b2b2512bee
title: Iniciar um servidor de Express funcional
challengeType: 2
forumTopicId: 301519
dashedName: start-a-working-express-server
---

# --description--

Nas duas primeiras linhas do arquivo `myApp.js`, você pode ver como é fácil criar um objeto do aplicativo Express. Este objeto tem vários métodos e você aprenderá muitos deles nestes desafios. Um método fundamental é o `app.listen(port)`. Ele diz ao servidor para que escute em uma determinada porta, colocando-o em estado de execução. Para fins de teste, precisamos que o aplicativo esteja sendo executado em segundo plano para que adicionemos este método no arquivo `server.js` para você.

Vamos servir nossa primeira string! No Express, as rotas têm a seguinte estrutura: `app.METHOD(PATH, HANDLER)`. METHOD é um método http em letras minúsculas. PATH é um caminho relativo no servidor (pode ser uma string ou até mesmo uma expressão regular). HANDLER é uma função que o Express chama quando a rota tem correspondência. Os manipuladores têm o formato `function(req, res) {...}`, onde req é o objeto solicitado, e res é o objeto de resposta. Por exemplo, o manipulador

```js
function(req, res) {
  res.send('Response String');
}
```

servirá a string 'Response String'.

# --instructions--

Use o método `app.get()` para servir a string "Hello Express" para solicitações de GET que correspondam ao caminho `/` (root). Certifique-se de que seu código funciona olhando os logs e, em seguida, veja os resultados na pré-visualização se você estiver usando o Replit.

**Observação:** todo o código para estas lições deve ser adicionado entre as poucas linhas de código que fornecemos para você no início.

# --hints--

Seu aplicativo deve servir a string 'Hello Express'

```js
(getUserInput) =>
  $.get(getUserInput('url')).then(
    (data) => {
      assert.equal(
        data,
        'Hello Express',
        'Your app does not serve the text "Hello Express"'
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
