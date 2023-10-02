---
id: 587d7b83367417b2b2512b37
title: freeCodeCamp とブラウザーのコンソールの違いを理解する
challengeType: 1
forumTopicId: 301193
dashedName: understanding-the-differences-between-the-freecodecamp-and-browser-console
---

# --description--

お気づきかもしれませんが、freeCodeCamp の一部のチャレンジには独自のコンソールが含まれています。 このコンソールは、ブラウザーのコンソールとは少し異なる動作をします。

`console` ではメッセージを出力するために多くのメソッドを使用します。 たとえば、`log`,、`warn`、 `clear` などがあります。 freeCodeCamp のコンソールは `log` メッセージのみを出力し、ブラウザーのコンソールはすべてのメッセージを出力します。 コードを変更すると、自動的に実行され、ログが表示されます。 freeCodeCamp のコンソールはコードが実行されるたびにクリアされます。

# --instructions--

まず、ブラウザーのコンソールを開いてログを表示してください。 それには、一番上にある freeCodeCamp のナビゲーションバーを右クリックし、たいていのブラウザーでは `inspect` をクリックします。 次に、開いたウィンドウで `console` タブを探します。

その次に、`console.log` を使用して `output` 変数を出力してください。 ログを表示するため、2 つのコンソールを表示してください。 最後に、ログの後に `console.clear` を使用してブラウザーのコンソールをクリアしてください。 2 つのコンソールの違いを確認してください。

# --hints--

`console.log` を使用して `output` 変数を出力します。

```js
assert(__helpers.removeWhiteSpace(code).match(/console\.log\(output\)/));
```

`console.clear()` を使用してブラウザーのコンソールをクリアします。

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/console.clear\(\)/)
);
```

ログを表示した後、コンソールをクリアします。

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/console\.log\(output\)[\s\S]*console.clear\(\)/)
);
```

# --seed--

## --seed-contents--

```js
let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";

```

# --solutions--

```js
let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";

console.log(output);
console.clear();
```
