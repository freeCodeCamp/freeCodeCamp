---
id: 587d824a367417b2b2512c45
title: 匿名メッセージボード
challengeType: 4
forumTopicId: 301568
dashedName: anonymous-message-board
---

# --description--

<https://anonymous-message-board.freecodecamp.rocks/> と同様の機能を持つフルスタック JavaScript アプリを構築してください。

プロジェクトに取り組むにあたり、以下の方法のうち 1 つを用いてコードを記述します。

-   [GitHub リポジトリ](https://github.com/freeCodeCamp/boilerplate-project-messageboard/)をクローンし、ローカル環境でプロジェクトを完了させる。
-   [Replit 始動プロジェクト](https://replit.com/github/freeCodeCamp/boilerplate-project-messageboard)を使用して、プロジェクトを完了させる。
-   使い慣れたサイトビルダーを使用してプロジェクトを完了させる。 必ず GitHub リポジトリのすべてのファイルを取り込む。

完了したら、プロジェクトの動作デモをどこか公開の場にホストしてください。 そして、`Solution Link` フィールドでデモへの URL を送信してください。 必要に応じて、`GitHub Link` フィールドでプロジェクトのソースコードへのリンクを送信してください。

# --instructions--

1.  テストおよび DB をデータベース接続文字列 (`.env` 内) に書き込む準備ができたときに、引用符なしでテストするように `NODE_ENV` を設定します。
2.  `routes/api.js` でコントローラー/ハンドラーを作成し、ルーティングを処理することを推奨します。
3.  `server.js` にセキュリティ機能を追加します。

`tests/2_functional-tests.js` に次のテストを記述してください。

-   新しいスレッドを作成する: `/api/threads/{board}` への POST リクエスト
-   3 つの返信を持つ最新のスレッドを 10 個表示する: `/api/threads/{board}` への GET リクエスト
-   間違ったパスワードでスレッドを削除する: 無効な `delete_password` による `/api/threads/{board}` への DELETE リクエスト
-   正しいパスワードでスレッドを削除する: 有効な `delete_password` による `/api/threads/{board}` への DELETE リクエスト
-   スレッドを報告する: `/api/threads/{board}` への PUT リクエスト
-   新しい返信を作成する: `/api/replies/{board}` への POST リクエスト
-   すべての返信を持つ単一のスレッドを表示する: `/api/replies/{board}` への GET リクエスト
-   間違ったパスワードで返信を削除する: 無効な `delete_password` による `/api/replies/{board}` への DELETE リクエスト
-   正しいパスワードで返信を削除する: 有効な `delete_password` による `/api/replies/{board}` への DELETE リクエスト
-   返信を報告する: `/api/replies/{board}` への PUT リクエスト

# --hints--

サンプルの URL ではなく、自分で作成したプロジェクトを提供することができます。

```js
(getUserInput) => {
  assert(
    !/.*\/anonymous-message-board\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

自分のサイトだけを自分のページの iFrame に読み込めるようにします。

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(parsed.headers['x-frame-options']?.includes('SAMEORIGIN'));
};
```

DNS プリフェッチを許可しないでください。

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(parsed.headers['x-dns-prefetch-control']?.includes('off'));
};
```

自分のサイトだけが、自分のページに対するリファラーを送信できるようにします。

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(parsed.headers['referrer-policy']?.includes('same-origin'));
};
```

`text` と `delete_password` を含むフォームデータを使用して、`/api/threads/{board}` への POST リクエストを送信できます。 保存されるデータベースレコードは、少なくとも `_id`、`text`、`created_on` (日付と時刻)、`bumped_on`(日付と時刻、`created_on` と同じ時刻に開始)、`reported` (ブール値)、`delete_password`、および `replies` (配列) のフィールドを持ちます。

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

`text`、`delete_password`、および `thread_id` を含むフォームデータを使用して、`/api/replies/{board}` への POST リクエストを送信できます。 これにより、`bumped_on` の日付がコメントの日付に更新されます。 スレッドの `replies` 配列には、少なくとも `_id`、`text`、`created_on`、`delete_password`、および `reported` のプロパティを持つオブジェクトが保存されます。

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

`/api/threads/{board}` への GET リクエストを送信できます。 掲示板で上に上げられた最新の 10 個のスレッドと、それぞれに対する最新の 3 個の返信のみの配列が返されます。 `reported` フィールドと `delete_password` フィールドはクライアントに送信されません。

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

`/api/replies/{board}?thread_id={thread_id}` への GET リクエストを送信できます。 すべての返信を含むスレッド全体のうち、前のテストと同じフィールドをクライアントから除外したものが返されます。

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

`/api/threads/{board}` への DELETE リクエストを送信し、スレッドを削除するために `thread_id` と `delete_password` を渡すことができます。 文字列 `incorrect password` または `success` が返されます。

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

`/api/replies/{board}` への DELETE リクエストを送信し、`thread_id`、`reply_id`、および `delete_password` を渡すことができます。 文字列 `incorrect password` または `success` が返されます。 実行に成功すると、`reply_id` のテキストが `[deleted]` に変更されます。

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

`/api/threads/{board}` への PUT リクエストを送信し、`thread_id` を渡すことができます。 文字列 `reported` が返されます。 `thread_id` の `reported` の値が `true` に変更されます。

```js
async (getUserInput) => {
  const url = getUserInput('url');

  let res = await fetch(`${url}/api/threads/fcc_test`);
  const threads = await res.json();
  const report_id = threads[0]._id;
  const data = { report_id };

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

`/api/replies/{board}` への PUT リクエストを送信し、`thread_id` と `reply_id` を渡すことができます。 文字列 `reported` が返されます。 `reply_id` の `reported` の値が `true` に変更されます。

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

10 種類の機能テストがすべて完了して、合格です。

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
