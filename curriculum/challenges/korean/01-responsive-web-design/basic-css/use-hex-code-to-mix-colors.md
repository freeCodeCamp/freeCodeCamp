---
id: bad87fee1348bd9aedf08721
title: 색 합성을 16진수 코드 사용하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cK89PhP'
forumTopicId: 18359
dashedName: use-hex-code-to-mix-colors
---

# --description--

검토하면, 16진수 코드는 색을 나타내기 위해 6개의 16진수 숫자를 사용하며, 각각이 빨강 (R), 초록 (G), 그리고 파랑 (B) 구성 요소를 나타냅니다.

이 세 개의 원색(빨강, 초록 그리고 파랑)으로부터 1,600만의 다른 색을 만들도록 각 색의 양을 조절할 수 있습니다.

예를 들면 주황색은 약간의 초록색을 섞은 순수 빨간색이며 파란색은 들어있지 않습니다. 16진수에서 이는 `#FFA500`로 표현됩니다.

`0`은 16진수에서 가장 적은 수이며 색이 없다는 것을 말합니다.

`F`는 16진수에서 가장 큰 수이며 최대로 가능한 밝기를 나타냅니다.

# --instructions--

`style` 요소에 있는 색 관련 단어들을 올바른 16진수로 대체하시오.

<table><tbody><tr><th>색</th><th>16진수 코드</th></tr><tr><td>다저 블루</td><td><code>#1E90FF</code></td></tr><tr><td>초록</td><td><code>#00FF00</code></td></tr><tr><td>주황</td><td><code>#FFA500</code></td></tr><tr><td>빨강</td><td><code>#FF0000</code></td></tr></tbody></table>

# --hints--

`I am red!`를 가진 `h1`은 `color`가 빨간색으로 주어져야 합니다.

```js
assert($('.red-text').css('color') === 'rgb(255, 0, 0)');
```

단어 `red` 대신에 빨간색에 맞는 `hex code`가 사용되어야 합니다.

```js
assert(code.match(/\.red-text\s*?{\s*?color\s*:\s*?(#FF0000|#F00)\s*?;?\s*?}/gi));
```

`I am green!`를 가진 `h1` 요소는 `color`가 초록으로 주어져야 합니다.

```js
assert($('.green-text').css('color') === 'rgb(0, 255, 0)');
```

단어 `green` 대신에 초록색에 맞는 `hex code`가 사용되어야 합니다.

```js
assert(code.match(/\.green-text\s*?{\s*?color\s*:\s*?(#00FF00|#0F0)\s*?;?\s*?}/gi));
```

`I am dodger blue!`를 가진 `h1` 요소는 `color`가 다저 블루로 주어져야 합니다.

```js
assert($('.dodger-blue-text').css('color') === 'rgb(30, 144, 255)');
```

단어 `dodgerblue` 대신에 다저 블루색에 맞는 `hex code`가 사용되어야 합니다.

```js
assert(code.match(/\.dodger-blue-text\s*?{\s*?color\s*:\s*?#1E90FF\s*?;?\s*?}/gi));
```

`I am orange!`를 가진 `h1` 요소는 `color`가 주황으로 주어져야 합니다.

```js
assert($('.orange-text').css('color') === 'rgb(255, 165, 0)');
```

단어 `orange` 대신에 주황색에 맞는 `hex code`가 사용되어야 합니다.

```js
assert(code.match(/\.orange-text\s*?{\s*?color\s*:\s*?#FFA500\s*?;?\s*?}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .red-text {
    color: black;
  }
  .green-text {
    color: black;
  }
  .dodger-blue-text {
    color: black;
  }
  .orange-text {
    color: black;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="green-text">I am green!</h1>

<h1 class="dodger-blue-text">I am dodger blue!</h1>

<h1 class="orange-text">I am orange!</h1>
```

# --solutions--

```html
<style>
  .red-text {
    color: #FF0000;
  }
  .green-text {
    color: #00FF00;
  }
  .dodger-blue-text {
    color: #1E90FF;
  }
  .orange-text {
    color: #FFA500;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="green-text">I am green!</h1>

<h1 class="dodger-blue-text">I am dodger blue!</h1>

<h1 class="orange-text">I am orange!</h1>
```
