---
id: 587d824a367417b2b2512c43
title: Biblioteca pessoal
challengeType: 4
forumTopicId: 301571
dashedName: personal-library
---

# --description--

Crie um aplicativo full stack em JavaScript que seja funcionalmente semelhante a este: <a href="https://personal-library.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://personal-library.freecodecamp.rocks/</a>. Trabalhar nesse projeto vai fazer com que você escreva seu código usando um dos seguintes métodos:

-   Clone <a href="https://github.com/freeCodeCamp/boilerplate-project-library" target="_blank" rel="noopener noreferrer nofollow">este repositório do GitHub</a> e complete o projeto localmente.
-   Use <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-library" target="_blank" rel="noopener noreferrer nofollow">nosso projeto inicial do Replit</a> para completar o projeto.
-   Use um construtor de site de sua escolha para completar o projeto. Certifique-se de incorporar todos os arquivos do nosso repositório no GitHub.

Se você usa o Replit, siga estas etapas para configurar o projeto:

-   Comece importando o projeto no Replit.
-   Em seguida, você verá uma janela `.replit`.
-   Selecione `Use run command` e clique no botão `Done`.

Quando terminar, certifique-se de que uma demonstração funcional do seu projeto está hospedada em algum lugar público. Em seguida, envie o URL para a solução no campo Solution Link. Como opção, envie também um link para o código-fonte do projeto no campo GitHub Link.

# --instructions--

1.  Adicione sua string de conexão ao MongoDB no `.env` sem aspas como `DB` Exemplo: `DB=mongodb://admin:pass@1234.mlab.com:1234/fccpersonallib`
2.  No seu arquivo `.env`, defina `NODE_ENV` como `test`, sem aspas
3.  Você precisa criar todas as rotas dentro de `routes/api.js`
4.  Você criará todos os testes funcionais em `tests/2_functional-tests.js`

# --hints--

Você pode fornecer seu próprio projeto, não o exemplo de URL.

```js
(getUserInput) => {
  assert(
    !/.*\/personal-library\.freecodecamp\.rocks/.test(getUserInput('url'))
  );
};
```

Você pode enviar uma solicitação de <b>POST</b> para `/api/books` com `title` como parte dos dados do formulário para adicionar um livro.  A resposta retornada será um objeto com as propriedades `title` e um `_id` exclusivo como chaves.  Se `title` não estiver incluído na solicitação, a resposta retornada deve ser a string `missing required field title`.

```js
async (getUserInput) => {
  try {
    let data1 = await $.post(getUserInput('url') + '/api/books', {
      title: 'Faux Book 1'
    });
    assert.isObject(data1);
    assert.property(data1, 'title');
    assert.equal(data1.title, 'Faux Book 1');
    assert.property(data1, '_id');
    let data2 = await $.post(getUserInput('url') + '/api/books');
    assert.isString(data2);
    assert.equal(data2, 'missing required field title');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Você pode enviar uma solicitação de <b>GET</b> para `/api/books` e receber uma resposta de JSON representando todos os livros. A resposta de JSON será um array de objetos com cada objeto (livro) contendo as propriedades `title`, `_id` e `commentcount`.

```js
async (getUserInput) => {
  try {
    let url = getUserInput('url') + '/api/books';
    let a = $.post(url, { title: 'Faux Book A' });
    let b = $.post(url, { title: 'Faux Book B' });
    let c = $.post(url, { title: 'Faux Book C' });
    await Promise.all([a, b, c]).then(async () => {
      let data = await $.get(url);
      assert.isArray(data);
      assert.isAtLeast(data.length, 3);
      data.forEach((book) => {
        assert.isObject(book);
        assert.property(book, 'title');
        assert.isString(book.title);
        assert.property(book, '_id');
        assert.property(book, 'commentcount');
        assert.isNumber(book.commentcount);
      });
    });
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Você pode enviar uma solicitação de <b>GET</b> para `/api/books/{_id}` para recuperar um único objeto de um livro que contenha as propriedades `title`, `_id`e um array de `comments` (o array estará vazio se não houver comentários presentes). Se nenhum livro for encontrado, retorna a string `no book exists`.

```js
async (getUserInput) => {
  try {
    let url = getUserInput('url') + '/api/books';
    let noBook = await $.get(url + '/5f665eb46e296f6b9b6a504d');
    assert.isString(noBook);
    assert.equal(noBook, 'no book exists');
    let sampleBook = await $.post(url, { title: 'Faux Book Alpha' });
    assert.isObject(sampleBook);
    let bookId = sampleBook._id;
    let bookQuery = await $.get(url + '/' + bookId);
    assert.isObject(bookQuery);
    assert.property(bookQuery, 'title');
    assert.equal(bookQuery.title, 'Faux Book Alpha');
    assert.property(bookQuery, 'comments');
    assert.isArray(bookQuery.comments);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Você pode enviar uma solicitação de <b>POST</b> contendo `comment` como os dados do corpo do formulário para `/api/books/{_id}` para adicionar um comentário a um livro. A resposta retornada será o objeto de livros semelhantes à solicitação de <b>GET</b> para `/api/books/{_id}` de um teste anterior. Se `comment` não estiver incluído na solicitação, retorne a string `missing required field comment`. Se nenhum livro for encontrado, retorna a string `no book exists`.

```js
async (getUserInput) => {
  try {
    let url = getUserInput('url') + '/api/books';
    let commentTarget = await $.post(url, { title: 'Notable Book' });
    assert.isObject(commentTarget);
    let bookId = commentTarget._id;
    let bookCom1 = await $.post(url + '/' + bookId, {
      comment: 'This book is fab!'
    });
    let bookCom2 = await $.post(url + '/' + bookId, {
      comment: 'I did not care for it'
    });
    assert.isObject(bookCom2);
    assert.property(bookCom2, '_id');
    assert.property(bookCom2, 'title');
    assert.property(bookCom2, 'comments');
    assert.lengthOf(bookCom2.comments, 2);
    bookCom2.comments.forEach((comment) => {
      assert.isString(comment);
      assert.oneOf(comment, ['This book is fab!', 'I did not care for it']);
    });
    let commentErr = await $.post(url + '/' + bookId);
    assert.isString(commentErr);
    assert.equal(commentErr, 'missing required field comment');
    let failingComment = await $.post(url + '/5f665eb46e296f6b9b6a504d', {
      comment: 'Never Seen Comment'
    });
    assert.isString(failingComment);
    assert.equal(failingComment, 'no book exists');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Você pode enviar uma solicitação de <b>DELETE</b> para `/api/books/{_id}` para excluir um livro da coleção. A resposta retornada será a string `delete successful` se for bem-sucedida. Se nenhum livro for encontrado, retorna a string `no book exists`.

```js
async (getUserInput) => {
  try {
    let url = getUserInput('url') + '/api/books';
    let deleteTarget = await $.post(url, { title: 'Deletable Book' });
    assert.isObject(deleteTarget);
    let bookId = deleteTarget._id;
    let doDelete = await $.ajax({ url: url + '/' + bookId, type: 'DELETE' });
    assert.isString(doDelete);
    assert.equal(doDelete, 'delete successful');
    let failingDelete = await $.ajax({
      url: url + '/5f665eb46e296f6b9b6a504d',
      type: 'DELETE'
    });
    assert.isString(failingDelete);
    assert.equal(failingDelete, 'no book exists');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Você pode enviar uma solicitação de <b>DELETE</b> para `/api/books` para excluir todos os livros do banco de dados. A resposta retornada será a string `complete delete successful` se for bem-sucedida.

```js
async (getUserInput) => {
  try {
    const deleteAll = await $.ajax({
      url: getUserInput('url') + '/api/books',
      type: 'DELETE'
    });
    assert.isString(deleteAll);
    assert.equal(deleteAll, 'complete delete successful');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

Todos os 10 testes funcionais foram concluídos e deram aprovação.

```js
async (getUserInput) => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    assert.isAtLeast(getTests.length, 10, 'At least 10 tests passed');
    getTests.forEach((test) => {
      assert.equal(test.state, 'passed', 'Test in Passed State');
      assert.isAtLeast(
        test.assertions.length,
        1,
        'At least one assertion per test'
      );
    });
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
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
