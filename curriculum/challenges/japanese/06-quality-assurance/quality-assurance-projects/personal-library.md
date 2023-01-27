---
id: 587d824a367417b2b2512c43
title: 個人図書館
challengeType: 4
forumTopicId: 301571
dashedName: personal-library
---

# --description--

<a href="https://personal-library.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://personal-library.freecodecamp.rocks/</a> と同じような機能を持つ、フルスタック JavaScript アプリを構築してください。 プロジェクトに取り組むにあたり、以下の方法のうち 1 つを用いてコードを記述します。

-   <a href="https://github.com/freeCodeCamp/boilerplate-project-library" target="_blank" rel="noopener noreferrer nofollow">GitHub リポジトリ</a>をクローンし、ローカル環境でチャレンジを完了させる。
-   <a href="https://replit.com/github/freeCodeCamp/boilerplate-project-library" target="_blank" rel="noopener noreferrer nofollow">Replit スタータープロジェクト</a>を使用して、プロジェクトを完了させる。
-   使い慣れたサイトビルダーを使用してプロジェクトを完了させる。 必ず GitHub リポジトリのすべてのファイルを取り込む。

Replit を使用する場合は、下記の手順でプロジェクトをセットアップしてください。

-   まず、Replit でプロジェクトをインポートします。
-   すると、`.replit` ファイルのウィンドウが表示されます。
-   `Use run command` を選択して `Done` ボタンをクリックします。

完了したら、プロジェクトの動作デモをどこか公開の場にホストしてください。 そして「回答のリンク」欄に、デモの URL を提出してください。 必要に応じて、プロジェクトのソースコードへのリンクも「GitHub のリンク」欄に提出してください。

# --instructions--

1.  `.env` に、MongoDB 接続文字列を `DB` として引用符を使用せずに追加してください。例: `DB=mongodb://admin:pass@1234.mlab.com:1234/fccpersonallib`
2.  `.env` ファイルで、引用符を使用せずに `NODE_ENV` に `test` を設定してください。
3.  `routes/api.js` 内に、すべてのルートを作成する必要があります。
4.  `tests/2_functional-tests.js` に、すべての機能テストを作成します。

# --hints--

サンプルの URL ではなく、自分で作成したプロジェクトを提出してください。

```js
(getUserInput) => {
  assert(
    !/.*\/personal-library\.freecodecamp\.rocks/.test(getUserInput('url'))
  );
};
```

フォームデータの一部として `title` を指定して `/api/books` へ <b>POST</b> リクエストを送信し、本を追加することができます。  返されるレスポンスは、`title` と一意の `_id` をキーとして持つオブジェクトになります。  `title` がリクエストに含まれていない場合、返されるレスポンスは文字列 `missing required field title` である必要があります。

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

<b>GET</b> リクエストを `/api/books` へ送信し、すべての本を表す JSON レスポンスを受け取ることができます。 JSON レスポンスはオブジェクトの配列であり、それぞれのオブジェクト (book) に `title`、`_id` および `commentcount` プロパティが含まれます。

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

<b>GET</b> リクエストを `/api/books/{_id}` へ送信して、プロパティ `title`、`_id` および `comments` 配列 (コメントがない場合は、空の配列) を含む book のオブジェクトを 1 つ取得できます。 本が見つからない場合は、文字列 `no book exists` を返してください。

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

`comment` をフォームデータ (ボディデータ) として含む <b>POST</b> リクエストを `/api/books/{_id}` へ送信し、本にコメントを追加することができます。 返されるレスポンスは、前述のテストの <b>GET</b> `/api/books/{_id}` リクエストと同様の book オブジェクトになります。 `comment` がリクエストに含まれていない場合は、文字列 `missing required field comment` を返してください。 本が見つからない場合、文字列 `no book exists` を返してください。

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

<b>DELETE</b> リクエストを `/api/books/{_id}` へ送信して、コレクションから本を削除できます。 成功した場合、文字列 `delete successful` のレスポンスを返します。 本が見つからない場合は、文字列 `no book exists` を返してください。

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

<b>DELETE</b> リクエストを `/api/books` へ送信して、データベース内のすべての本を削除することができます。 成功した場合、文字列 `complete delete successful` のレスポンスを返します。

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

10 件の機能テストがすべて記述され、成功する状態になっています。

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
