---
id: 58a7a6ebf9a6318348e2d5aa
title: アニメーションの Fill モードを変更する
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJDmcE'
forumTopicId: 301064
dashedName: modify-fill-mode-of-an-animation
---

# --description--

素晴らしい！でも、まだうまくいきませんね。 `500ms` が過ぎるとアニメーションがリセットされ、ボタンが元の色に戻ることに注目してください。 ボタンをハイライト表示のままにしたいと思うでしょう。

`animation-fill-mode` プロパティを `forwards` に設定すると、そのようにできます。 `animation-fill-mode` は、アニメーションが終わった時に要素に適用されるスタイルを指定します。 次のように設定できます:

```css
animation-fill-mode: forwards;
```

# --instructions--

`button:hover` の `animation-fill-mode` プロパティを `forwards` に設定して、ユーザーがボタンにホバーするとボタンがハイライトされたままになるようにしましょう。

# --hints--

`button:hover` は、値が `forwards` の `animation-fill-mode` プロパティを持つ必要があります。

```js
assert(
  code.match(
    /button\s*?:\s*?hover\s*?{[\s\S]*animation-fill-mode\s*?:\s*?forwards\s*?;[\s\S]*}/gi
  ) &&
    code.match(
      /button\s*?:\s*?hover\s*?{[\s\S]*animation-name\s*?:\s*?background-color\s*?;[\s\S]*}/gi
    ) &&
    code.match(
      /button\s*?:\s*?hover\s*?{[\s\S]*animation-duration\s*?:\s*?500ms\s*?;[\s\S]*}/gi
    )
);
```

# --seed--

## --seed-contents--

```html
<style>
  button {
    border-radius: 5px;
    color: white;
    background-color: #0F5897;
    padding: 5px 10px 8px 10px;
  }
  button:hover {
    animation-name: background-color;
    animation-duration: 500ms;
    /* Only change code below this line */

    /* Only change code above this line */
  }
  @keyframes background-color {
    100% {
      background-color: #4791d0;
    }
  }
</style>
<button>Register</button>
```

# --solutions--

```html
<style>
  button {
    border-radius: 5px;
    color: white;
    background-color: #0F5897;
    padding: 5px 10px 8px 10px;
  }
  button:hover {
    animation-name: background-color;
    animation-duration: 500ms;
    animation-fill-mode: forwards;
  }
  @keyframes background-color {
    100% {
      background-color: #4791d0;
    }
  }
</style>
<button>Register</button>
```
