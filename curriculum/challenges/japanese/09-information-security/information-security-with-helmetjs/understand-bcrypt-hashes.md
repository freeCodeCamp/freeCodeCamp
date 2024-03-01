---
id: 58a25bcef9fc0f352b528e7c
title: BCrypt ハッシュを理解する
challengeType: 2
forumTopicId: 301586
dashedName: understand-bcrypt-hashes
---

# --description--

以降のチャレンジについては、以前のチャレンジとは異なる新しいスタータープロジェクトで作業します。 You can find the new starter project on <a href="https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-bcrypt/" target="_blank" rel="noopener noreferrer nofollow">Gitpod</a>, or clone it from <a href="https://github.com/freeCodeCamp/boilerplate-bcrypt/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

BCrypt ハッシュは非常に安全です。 ハッシュは、基本的には元のデータのフィンガープリントであり、常に一意です。 元のデータをアルゴリズムに入力し、固定長の結果を返すことで実現しています。 このプロセスをさらに複雑にして安全性を高めるため、ハッシュをソルト (*salt*) することもできます。 ハッシュをソルトするには、ハッシュ処理の前にランダムなデータを元のデータに追加する必要があります。これにより、ハッシュの解読がさらに困難になります。

BCrypt hashes will always look like `$2a$13$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm` which does have a structure. データの先頭の小さなビット `$2a` は、どのようなハッシュアルゴリズムが使用されたかを定義しています。 次の部分 `$13` は*コスト*を定義しています。 コストとは、ハッシュの計算に必要となる処理能力のことです。 コストは 2 の累乗の対数スケールで示され、データが何回ハッシュアルゴリズムを通過するかを決定します。 たとえば、コストが 10 の場合は平均的なコンピュータで 1 秒間に 10 個のパスワードをハッシュ化できますが、コストが 15 の場合は 1 回のハッシュ化に 3 秒かかり、さらにコストが 31 の場合は 1 回のハッシュ化の完了に数日かかることになります。 現時点では、コスト 12 が非常に安全だと考えられています。 ハッシュの最後の部分 `$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm` は、数字、ピリオド、文字からなる 1 つの大きな文字列のように見えますが、実際には 2 つの別々の情報です。 最初の 22 文字はプレーンテキストのソルトで、残りはハッシュ化されたパスワードです。

# --instructions--

これらのレッスンで使用するすべてのコードは、`server.js`ファイルの中の、あらかじめ用意されたコードの間に追加してください。 あらかじめ記述されているコードを変更したり削除したりしないでください。

BCrypt はすでに依存関係として追加されているので、サーバーで `bcrypt` として require してください。

正しいと思ったら、ページを送信してください。

# --hints--

BCrypt を依存関係にする必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/package.json').then(
    (data) => {
      var packJson = JSON.parse(data);
      assert.property(
        packJson.dependencies,
        'bcrypt',
        'Your project should list "bcrypt" as a dependency'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
    }
  );
```

BCrypt を正しく require する必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /bcrypt.*=.*require.*('|")bcrypt('|")/gi,
        'You should correctly require and instantiate socket.io as io.'
      );
    },
    (xhr) => {
      throw new Error(xhr.statusText);
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
