---
id: 587d824a367417b2b2512c45
title: Quadro de mensagens anônimas
challengeType: 4
forumTopicId: 301568
dashedName: anonymous-message-board
---

# --description--

Crie um aplicativo full stack em JavaScript que seja funcionalmente semelhante a este: <a href="https://anonymous-message-board.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://anonymous-message-board.freecodecamp.rocks/</a>.

Trabalhar nesse projeto vai fazer com que você escreva seu código usando um dos seguintes métodos:

-   Clone <a href="https://github.com/freeCodeCamp/boilerplate-project-messageboard/" target="_blank" rel="noopener noreferrer nofollow">este repositório do GitHub</a> e complete o projeto localmente.
-   Use <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-messageboard" target="_blank" rel="noopener noreferrer nofollow">nosso projeto inicial do Replit</a> para completar o projeto.
-   Use um construtor de site de sua escolha para completar o projeto. Certifique-se de incorporar todos os arquivos do nosso repositório no GitHub.

Se você usa o Replit, siga estas etapas para configurar o projeto:

-   Comece importando o projeto no Replit.
-   Em seguida, você verá uma janela `.replit`.
-   Selecione `Use run command` e clique no botão `Done`.

Quando terminar, certifique-se de que uma demonstração funcional do seu projeto está hospedada em algum lugar público. Em seguida, envie o URL para a solução no campo Solution Link. Como opção, envie também um link para o código-fonte do projeto no campo GitHub Link.

# --instructions--

1.  Defina `NODE_ENV` para testar sem aspas quando estiver pronto para escrever testes e BD para a string de conexão dos bancos de dados (em `.env`)
2.  Esse é o recomendado para criar controladores/manipuladores e lidar com roteamento em `routes/api.js`
3.  Você adicionará todas as funcionalidades de segurança ao `server.js`

Escreva os testes a seguir em `tests/2_functional-tests.js`:

-   Criar um novo tópico: solicitação de POST para `/api/threads/{board}`
-   Visualizar os 10 tópicos mais recentes com 3 respostas cada: solicitação GET para `/api/threads/{board}`
-   Excluir um tópico com a senha incorreta: solicitação DELETE para `/api/threads/{board}` com uma `delete_password` inválida
-   Excluir um tópico com a senha correta: solicitação DELETE para `/api/threads/{board}` com uma `delete_password` válida
-   Denunciar um tópico: solicitação de PUT para `/api/threads/{board}`
-   Criar uma nova resposta: solicitação de POST para `/api/replies/{board}`
-   Visualizar um único tópico com todas as respostas: solicitação GET para `/api/replies/{board}`
-   Excluir uma resposta com a senha incorreta: solicitação DELETE para `/api/replies/{board}` com uma `delete_password` inválida
-   Excluir uma resposta com a senha correta: solicitação DELETE para `/api/replies/{board}` com uma `delete_password` válida
-   Denunciar uma resposta: solicitação de PUT para `/api/replies/{board}`

# --hints--

Você pode fornecer seu próprio projeto, não o exemplo de URL.

```js
(getUserInput) => {
  assert(
    !/.*\/anonymous-message-board\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

Permita apenas que o site seja carregado em um iFrame em suas próprias páginas.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(parsed.headers['x-frame-options']?.includes('SAMEORIGIN'));
};
```

Não permita o pré-carregamento de DNS.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(parsed.headers['x-dns-prefetch-control']?.includes('off'));
};
```

Permita apenas que seu site envie o encaminhador para suas próprias páginas.

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(parsed.headers['referrer-policy']?.includes('same-origin'));
};
```

Você pode enviar uma solicitação POST para `/api/threads/{board}` com dados de formulário, incluindo `text` e `delete_password`. O registro salvo do banco de dados terá pelo menos os campos `_id`, `text`, `created_on` (data e hora), `bumped_on`(data e hora, começa igual a `created_on`), `reported` (booleano), `delete_password` e `replies` (array).

```js
async (getUserInput) => {
  const date = new Date();
  const text = `fcc_test_${date}`;
  const deletePassword = 'delete_me';
  const data = { text, delete_password: deletePassword };
  const url = getUserInput('url');
  const res = await fetch(url + '/api/threads/fcc_test', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (res.ok) {
    const checkData = await fetch(url + '/api/threads/fcc_test');
    const parsed = await checkData.json();
    try {
      assert.equal(parsed[0].text, text);
      assert.isNotNull(parsed[0]._id);
      assert.equal(new Date(parsed[0].created_on).toDateString(), date.toDateString());
      assert.equal(parsed[0].bumped_on, parsed[0].created_on);
      assert.isArray(parsed[0].replies);
    } catch (err) {
      throw new Error(err.responseText || err.message);
    }
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

Você pode enviar uma solicitação de POST para `/api/replies/{board}` com dados de formulário, incluindo `text`, `delete_password` e `thread_id`. Isto atualizará a data de `bumped_on` para a data do comentário. No array `replies` do tópico, um objeto será salvo com pelo menos as propriedades `_id`, `text`, `created_on`, `delete_password` e `reported`.

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const body = await fetch(url + '/api/threads/fcc_test');
  const thread = await body.json();

  const date = new Date();
  const text = `fcc_test_reply_${date}`;
  const delete_password = 'delete_me';
  const thread_id = thread[0]._id;
  const replyCount = thread[0].replies.length;

  const data = { text, delete_password, thread_id };
  const res = await fetch(url + '/api/replies/fcc_test', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (res.ok) {
    const checkData = await fetch(`${url}/api/replies/fcc_test?thread_id=${thread_id}`);
    const parsed = await checkData.json();
    try {
      assert.equal(parsed.replies.length, replyCount + 1);
      assert.equal(parsed.replies[0].text, text);
      assert.equal(parsed._id, thread_id);
      assert.equal(parsed.bumped_on, parsed.replies[0].created_on);
    } catch (err) {
      throw new Error(err.responseText || err.message);
    }
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

Você pode enviar uma solicitação de GET para `/api/threads/{board}`. O conteúdo retornado será um array dos 10 tópicos que mais subiram no quadro apenas com as 3 respostas mais recentes para cada um deles. Os campos `reported` e `delete_password` não serão enviados ao client.

```js
async (getUserInput) => {
  const url = getUserInput('url');
  const res = await fetch(url + '/api/threads/fcc_test');

  if (res.ok) {
    const threads = await res.json();
    try {
      assert.equal(res.status, 200);
      assert.isAtMost(threads.length, 10);
      for (let i = 0; i < threads.length; i++) {
        assert.containsAllKeys(threads[i], ["_id", "text", "created_on", "bumped_on", "replies"]);
        assert.isAtMost(threads[i].replies.length, 3);
        assert.notExists(threads[i].delete_password);
        assert.notExists(threads[i].reported);
        for (let j = 0; j < threads[i].replies.length; j++) {
          assert.notExists(threads[i].replies[j].delete_password);
          assert.notExists(threads[i].replies[j].reported);
        }
      }
    } catch (err) {
      throw new Error(err.responseText || err.message);
    }
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

Você pode enviar uma solicitação de GET para `/api/replies/{board}?thread_id={thread_id}`. O conteúdo retornado será o tópico inteiro com todas as suas respostas, também excluindo os mesmos campos do client do teste anterior.

```js
async (getUserInput) => {
  const url = getUserInput('url');
  let res = await fetch(url + '/api/threads/fcc_test');
  const threads = await res.json();
  const thread_id = threads[0]._id;
  res = await fetch(`${url}/api/replies/fcc_test?thread_id=${thread_id}`);

  if (res.ok) {
    const thread = await res.json();
    try {
      assert.equal(res.status, 200);
      assert.isObject(thread);
      assert.containsAllKeys(thread, ["_id", "text", "created_on", "bumped_on", "replies"]);
      assert.isArray(thread.replies);
      assert.notExists(thread.delete_password);
      assert.notExists(thread.reported);
      for (let i = 0; i < thread.replies.length; i++) {
        assert.notExists(thread.replies[i].delete_password);
        assert.notExists(thread.replies[i].reported);
      }
    } catch (err) {
      throw new Error(err.responseText || err.message);
    }
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

Você pode enviar uma solicitação de DELETE para `/api/threads/{board}` e passar adiante `thread_id` e `delete_password` para excluir o tópico. O conteúdo retornado será a string `incorrect password` ou `success`.

```js
async (getUserInput) => {
  const url = getUserInput('url');
  let res = await fetch(url + '/api/threads/fcc_test');
  const threads = await res.json();
  const thread_id = threads[0]._id;
  let data = { thread_id, delete_password: "wrong_password" };
  const res_invalid = await fetch(url + '/api/threads/fcc_test', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  data = { thread_id, delete_password: "delete_me" };
  res = await fetch(url + '/api/threads/fcc_test', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  if (res.ok) {
    const deleted = await res.text();
    const not_deleted = await res_invalid.text();
    try {
      assert.equal(res.status, 200);
      assert.equal(deleted, "success");
      assert.equal(not_deleted, "incorrect password");
    } catch (err) {
      throw new Error(err.responseText || err.message);
    }
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

Você pode enviar uma solicitação de DELETE para `/api/replies/{board}` e passar adiante `thread_id`, `reply_id` e `delete_password`. O conteúdo retornado será a string `incorrect password` ou `success`. Em caso de sucesso, o texto de `reply_id` será alterado para `[deleted]`.

```js
async (getUserInput) => {
  const url = getUserInput('url');

  const thread_data = {
    text: "fcc_test_thread",
    delete_password: "delete_me",
  };
  await fetch(`${url}/api/threads/fcc_test`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(thread_data)
  });
  let res = await fetch(`${url}/api/threads/fcc_test`);
  let threads = await res.json();
  const thread_id = threads[0]._id;

  const reply_data = { thread_id, text: "fcc_test_reply", delete_password: "delete_me" };
  await fetch(`${url}/api/replies/fcc_test`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(reply_data)
  });
  res = await fetch(`${url}/api/threads/fcc_test`);
  threads = await res.json();
  const reply_id = threads[0].replies[0]._id;

  const data = { thread_id, reply_id, delete_password: "delete_me" };
  res = await fetch(url + '/api/replies/fcc_test', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  if (res.ok) {
    const deleted = await res.text();
    try {
      assert.equal(res.status, 200);
      assert.equal(deleted, "success");
      res = await fetch(`${url}/api/replies/fcc_test?thread_id=${thread_id}`);
      const thread = await res.json();
      assert.equal(thread._id, thread_id);
      assert.equal(thread.replies[0]._id, reply_id);
      assert.equal(thread.replies[0].text, "[deleted]");
    } catch (err) {
      throw new Error(err.responseText || err.message);
    }
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

Você pode enviar uma solicitação de PUT para `/api/threads/{board}` e passar adiante a `thread_id`. O conteúdo retornado será a string `reported`. O valor `reported` de `thread_id` será alterado para `true`.

```js
async (getUserInput) => {
  const url = getUserInput('url');

  let res = await fetch(`${url}/api/threads/fcc_test`);
  const threads = await res.json();
  const thread_id = threads[0]._id;
  const data = { thread_id };

  res = await fetch(`${url}/api/threads/fcc_test`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  if (res.ok) {
    const reported = await res.text();
    try {
      assert.equal(res.status, 200);
      assert.equal(reported, "reported");
    } catch (err) {
      throw new Error(err.responseText || err.message);
    }
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

Você pode enviar uma solicitação de PUT para `/api/replies/{board}` e passar adiante `thread_id` e `reply_id`. O conteúdo retornado será a string `reported`. O valor `reported` de `reply_id` será alterado para `true`.

```js
async (getUserInput) => {
  const url = getUserInput('url');

  let res = await fetch(`${url}/api/threads/fcc_test`);
  const threads = await res.json();
  const thread_id = threads[0]._id;
  const reply_id = threads[0].replies[0]._id;
  const data = { thread_id, reply_id };

  res = await fetch(`${url}/api/replies/fcc_test`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  if (res.ok) {
    const reported = await res.text();
    try {
      assert.equal(res.status, 200);
      assert.equal(reported, "reported");
    } catch (err) {
      throw new Error(err.responseText || err.message);
    }
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
```

Todos os 10 testes funcionais foram concluídos e deram aprovação.

```js
async (getUserInput) => {
  const tests = await fetch(getUserInput('url') + '/_api/get-tests');
  const parsed = await tests.json();
  assert.isTrue(parsed.length >= 10);
  parsed.forEach((test) => {
    assert.equal(test.state, 'passed');
    assert.isAtLeast(test.assertions.length, 1);
  });
};
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
