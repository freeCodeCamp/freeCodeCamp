---
id: 587d824a367417b2b2512c43
title: Biblioteca personal
challengeType: 4
forumTopicId: 301571
dashedName: personal-library
---

# --description--

Construye una aplicacion Javascript full stack que funcione similarmente a esta: <a href="https://personal-library.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://personal-library.freecodecamp.rocks/</a>. Trabajar en este proyecto implicará escribir tu código utilizando uno de los siguientes métodos:

-   Clona este repositorio de <a href="https://github.com/freeCodeCamp/boilerplate-project-library" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> y complete estos desafíos localmente.
-   Usa este <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-library" target="_blank" rel="noopener noreferrer nofollow"> proyecto inicial de Replit</a> para completar tu proyecto.
-   Usa un constructor de sitios de tu elección para completar el proyecto. Asegúrate de incorporar todos los archivos de nuestro repositorio de GitHub.

Cuando hayas terminado, asegúrate de que una demostración funcional de tu proyecto esté alojado en algún lugar público. Luego, envía la URL en el campo `Solution Link`. Opcionalmente, también envía un enlace al código fuente de tu proyecto en el campo `GitHub Link`.

# --instructions--

1.  Agrega tu cadena de conexión MongoDB a tu `.env` sin comillas como `DB` Ejemplo: `DB=mongodb://admin:pass@1234.mlab.com:1234/fccpersonallib`
2.  En tu archivo `.env` establece `NODE_ENV` a `test`, sin comillas
3.  Es necesario crear todas la rutas dentro de `routes/api.js`
4.  Escribe las siguientes pruebas en `tests/2_functional-tests.js`

# --hints--

Debes proporcionar tu propio proyecto, no la URL de ejemplo.

```js
(getUserInput) => {
  assert(
    !/.*\/personal-library\.freecodecamp\.rocks/.test(getUserInput('url'))
  );
};
```

Puedes enviar una petición <b>POST</b> a `/api/books` con `title` como parte de los datos del formulario para agregar un libro.  La respuesta devuelta será un objeto con las propiedades `title` y un `_id` único como claves.  Si `title` no está incluido en la petición, la respuesta devuelta será una cadena con `missing required field title`.

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

Puedes enviar una petición <b>GET</b> a `/api/books` y recibir una respuesta JSON que representa todos los libros. La respuesta JSON será un arreglo de objetos, cada objeto (libro) contienen las propiedades de `title`, `_id`, y `commentcount`.

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

Puedes enviar una petición <b>GET</b> a `/api/books/{_id}` para recuperar un solo objeto de un libro que contiene las propiedades `title`, `_id`, y un arreglo `comments` (arreglo vacío si no hay comentarios). Si no se encuentra ningún libro, devuelve la cadena `no book exists`.

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

Puedes enviar una petición de <b>POST</b> que contenga un `comment` como los datos del cuerpo del formulario a `/api/books/{_id}` para agregar un comentario a un libro. La respuesta devuelta será el objeto de libros similar a la petición <b>GET</b> `/api/books/{_id}` en una prueba anterior. Si `comment` no está incluido en la petición, la respuesta devuelta será una cadena con `missing required field comment`. Si no se encuentra ningún libro, devuelve la cadena `no book exists`.

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

Puedes enviar una petición de <b>DELETE</b> a `/api/books/{_id}` para eliminar un libro de la colección. La respuesta devuelta será la cadena `delete successful` si tiene éxito. Si no se encuentra ningún libro, devuelve la cadena `no book exists`.

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

Puedes enviar una petición de <b>DELETE</b> a `/api/books` para eliminar todos los libros de la base de datos. La respuesta devuelta será la cadena `'complete delete successful` si tiene éxito.

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

Las 10 pruebas funcionales requeridas están completas y aprobadas.

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
