---
id: 587d7fb2367417b2b2512bf5
title: クライアントからルートパラメータ入力を取得する
challengeType: 2
forumTopicId: 301513
dashedName: get-route-parameter-input-from-the-client
---

# --description--

API を構築する際は、私たちが作成するサービスから何を得たいのかをユーザーに伝えてもらうようにする必要があります。 たとえばクライアントが、データベースに保存されているユーザーに関する情報を要求している場合、どのユーザーに興味があるのかをクライアントから伝えてもらうための手段が必要になります。 そのための方法の一つとして、ルートパラメーターの使用があります。 ルートパラメーターは名前の付いた URL のセグメントであり、スラッシュ (/) で区切られます。 各セグメントは、URL のうちその位置と一致する部分の値を取得します。 取得した値は、`req.params` オブジェクトに保存されます。

<blockquote>route_path: '/user/:userId/book/:bookId'<br>actual_request_URL: '/user/546/book/6754' <br>req.params: {userId: '546', bookId: '6754'}</blockquote>

# --instructions--

エコーサーバーを構築し、ルート `GET /:word/echo` にマウントしてください。 JSON オブジェクトで応答し、構造体 `{echo: word}` を受け取ってください。 繰り返すワードは `req.params.word` で見つけることができます。 たとえば、`your-app-rootpath/freecodecamp/echo` のように、一致するルートにアクセスして、ブラウザーのアドレスバーからルートをテストすることができます。

# --hints--

テスト 1: エコーサーバーは、ワードを正しく繰り返す必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/eChOtEsT/echo').then(
    (data) => {
      assert.equal(
        data.echo,
        'eChOtEsT',
        'Test 1: the echo server is not working as expected'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

テスト 2: エコーサーバーは、ワードを正しく繰り返す必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/ech0-t3st/echo').then(
    (data) => {
      assert.equal(
        data.echo,
        'ech0-t3st',
        'Test 2: the echo server is not working as expected'
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
