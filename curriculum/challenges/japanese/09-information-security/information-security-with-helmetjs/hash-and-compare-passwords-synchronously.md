---
id: 58a25bcff9fc0f352b528e7e
title: パスワードを同期的にハッシュ化して比較する
challengeType: 2
forumTopicId: 301579
dashedName: hash-and-compare-passwords-synchronously
---

# --description--

As a reminder, this project is being built upon the following starter project on <a href="https://replit.com/github/freeCodeCamp/boilerplate-bcrypt" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, or cloned from <a href="https://github.com/freeCodeCamp/boilerplate-bcrypt/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

同期的にハッシュ化することも同様に簡単ですが、サーバーサイドで高いコストをかけて使用する場合や、頻繁にハッシュ化を行う場合には遅延が発生する可能性があります。 次の呼び出しだけで、このメソッドによるハッシュ化を実行できます。

```js
var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
```

このハッシュメソッドをコードに追加し、結果をコンソールに表示してください。 ここでも、使用されている変数はすでにサーバーで定義されているため、変数を調整する必要はありません。 非同期関数と同じパスワードをハッシュ化しているにもかかわらず、コンソールに表示される結果が異なることに気づくかもしれません。これは、ハッシュの 3 番目の文字列の最初の 22 文字を見るとわかるように、ソルトが毎回ランダムに生成されるためです。 ここで、入力されたパスワードと新しい同期ハッシュを比較するために、compareSync メソッドを使用します。

```js
var result = bcrypt.compareSync(myPlaintextPassword, hash);
```

結果は true または false のブール値になります。

# --instructions--

関数を追加し、コンソールに結果を表示して動作を確認してください。

正しいと思ったら、ページを送信してください。

# --hints--

同期ハッシュを生成し、正しく比較する必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/server.js').then(
    (data) => {
      assert.match(
        data,
        /START_SYNC[^]*hash.*=.*bcrypt.hashSync.*myPlaintextPassword( |),( |)saltRounds[^]*END_SYNC/gi,
        'You should call bcrypt.hashSync on myPlaintextPassword with saltRounds'
      );
      assert.match(
        data,
        /START_SYNC[^]*result.*=.*bcrypt.compareSync.*myPlaintextPassword( |),( |)hash[^]*END_SYNC/gi,
        'You should call bcrypt.compareSync on myPlaintextPassword with the hash generated in the last line'
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
