---
id: 58a25bcef9fc0f352b528e7c
title: BCrypt ハッシュを理解する
challengeType: 2
forumTopicId: 301586
dashedName: understand-bcrypt-hashes
---

# --description--

以降のチャレンジについては、以前のチャレンジとは異なる新しいスタータープロジェクトで作業します。 You can find the new starter project on <a href="https://replit.com/github/freeCodeCamp/boilerplate-bcrypt" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, or clone it from <a href="https://github.com/freeCodeCamp/boilerplate-bcrypt/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

BCrypt ハッシュは非常に安全です。 ハッシュは、基本的には元のデータのフィンガープリントであり、常に一意です。 元のデータをアルゴリズムに入力し、固定長の結果を返すことで実現しています。 このプロセスをさらに複雑にして安全性を高めるため、ハッシュをソルト (*salt*) することもできます。 ハッシュをソルトするには、ハッシュ処理の前にランダムなデータを元のデータに追加する必要があります。これにより、ハッシュの解読がさらに困難になります。

BCrypt hashes will always look like `$2a$13$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm` which does have a structure. データの先頭の小さなビット `$2a` は、どのようなハッシュアルゴリズムが使用されたかを定義しています。 次の部分 `$13` は*コスト*を定義しています。 コストとは、ハッシュの計算に必要となる処理能力のことです。 コストは 2 の累乗の対数スケールで示され、データが何回ハッシュアルゴリズムを通過するかを決定します。 For example, at a cost of 10 you are able to hash 10 passwords a second on an average computer, however at a cost of 15 it takes 3 seconds per hash... and to take it further, at a cost of 31 it would take multiple days to complete a hash. 現時点では、コスト 12 が非常に安全だと考えられています。 ハッシュの最後の部分 `$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm` は、数字、ピリオド、文字からなる 1 つの大きな文字列のように見えますが、実際には 2 つの別々の情報です。 最初の 22 文字はプレーンテキストのソルトで、残りはハッシュ化されたパスワードです。

# --instructions--

Add all your code for these lessons in the `server.js` file between the code we have started you off with. Do not change or delete the code we have added for you.

BCrypt has already been added as a dependency, so require it as `bcrypt` in your server.

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
