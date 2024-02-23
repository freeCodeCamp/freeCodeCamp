---
id: 587d78a7367417b2b2512ae0
title: CSS アニメーションを使用してボタンのホバー状態を変更する
challengeType: 0
videoUrl: 'https://scrimba.com/c/cg4vZAa'
forumTopicId: 301073
dashedName: use-css-animation-to-change-the-hover-state-of-a-button
---

# --description--

CSS の `@keyframes` を使ってホバー状態の時にボタンの色を変えることができます。

下記は画像の幅をホバー時に変更する例です:

```html
<style>
  img {
    width: 30px;
  }
  img:hover {
    animation-name: width;
    animation-duration: 500ms;
  }

  @keyframes width {
    100% {
      width: 40px;
    }
  }
</style>

<img src="https://cdn.freecodecamp.org/curriculum/applied-visual-design/google-logo.png" alt="Google's Logo" />
```

# --instructions--

`ms` はミリ秒を表すので、1000 ms で 1 秒となることに注意してください。

CSS の `@keyframes` を使用して `button` 要素の `background-color` を変更し、ユーザーがボタンにホバーすると `#4791d0` になるようにしてください。 `@keyframes` ルールには `100%` の項目のみ記載されているようにしてください。

# --hints--

@keyframes ルールは background-color という `animation-name` を使う必要があります。

```js
assert(code.match(/@keyframes\s+?background-color\s*?{/g));
```

`@keyframes` には、100% 時点で `background-color` を `#4791d0` に変更するルール 1 つだけがあるようにしてください。

```js
assert(code.match(/100%\s*?{\s*?background-color:\s*?#4791d0;\s*?}/gi));
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
  }

  @keyframes background-color {
    100% {
      background-color: #4791d0;
    }
  }
</style>
<button>Register</button>
```
