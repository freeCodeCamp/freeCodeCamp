---
id: bad87fee1348bd9aedf08719
title: 헥스 코드 축약형 사용하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkpKAm'
forumTopicId: 18338
dashedName: use-abbreviated-hex-code
---

# --description--

많은 사람들이 1,600만 가지가 넘는 색상의 가능성에 망연자실합니다. 게다가 헥스 코드는 외우기 어렵지요. 다행히도 축약해서 쓰는 것이 가능합니다.

예를 들어 빨간색의 헥스 코드인 `#FF0000`는 `#F00`로 줄여 쓸 수 있습니다. 이 축약형에서는 빨간색에 한 자리, 초록색에 한 자리, 파란색에 한 자리가 주어집니다.

이렇게 하면 가능한 색상의 총 가짓수가 약 4,000개로 줄어듭니다. 하지만 브라우저는 `#FF0000`와 `#F00`를 완전히 동일한 색상으로 인식합니다.

# --instructions--

자 이제, 헥스 코드의 축약형을 사용하여 올바른 요소에 색상을 지정해 보십시오.

<table><tbody><tr><th>색상</th><th>헥스 코드 축약형</th></tr><tr><td>청록색(cyan)</td><td><code>#0FF</code></td></tr><tr><td>초록색</td><td><code>#0F0</code></td></tr><tr><td>빨간색</td><td><code>#F00</code></td></tr><tr><td>자홍색(Fuchsia)</td><td><code>#F0F</code></td></tr></tbody></table>

# --hints--

`I am red!`라는 텍스트가 있는 `h1` 요소의 `color`는 빨간색이어야 합니다.

```js
assert($('.red-text').css('color') === 'rgb(255, 0, 0)');
```

헥스 코드 `#FF0000` 대신 빨간색 헥스 코드의 축약형을 사용해야 합니다.

```js
assert(code.match(/\.red-text\s*?{\s*?color\s*:\s*?#F00\s*?;?\s*?}/gi));
```

`I am green!`이라는 텍스트가 있는 `h1` 요소의 `color`는 초록색이어야 합니다.

```js
assert($('.green-text').css('color') === 'rgb(0, 255, 0)');
```

헥스 코드 `#00FF00` 대신 초록색 헥스 코드의 축약형을 사용해야 합니다.

```js
assert(code.match(/\.green-text\s*?{\s*?color\s*:\s*?#0F0\s*?;?\s*?}/gi));
```

`I am cyan!`이라는 텍스트가 있는 `h1` 요소의 `color`는 청록색(cyan)이어야 합니다.

```js
assert($('.cyan-text').css('color') === 'rgb(0, 255, 255)');
```

헥스 코드 `#00FFFF` 대신 청록색(cyan) 헥스 코드의 축약형을 사용해야 합니다.

```js
assert(code.match(/\.cyan-text\s*?{\s*?color\s*:\s*?#0FF\s*?;?\s*?}/gi));
```

`I am fuchsia!`라는 텍스트가 있는 `h1` 요소의 `color`는 자홍색(fuchsia)이어야 합니다.

```js
assert($('.fuchsia-text').css('color') === 'rgb(255, 0, 255)');
```

헥스 코드 `#FF00FF` 대신 자홍색(fuchsia) 헥스 코드의 축약형을 사용해야 합니다.

```js
assert(code.match(/\.fuchsia-text\s*?{\s*?color\s*:\s*?#F0F\s*?;?\s*?}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .red-text {
    color: #000000;
  }
  .fuchsia-text {
    color: #000000;
  }
  .cyan-text {
    color: #000000;
  }
  .green-text {
    color: #000000;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="fuchsia-text">I am fuchsia!</h1>

<h1 class="cyan-text">I am cyan!</h1>

<h1 class="green-text">I am green!</h1>
```

# --solutions--

```html
<style>
  .red-text {
    color: #F00;
  }
  .fuchsia-text {
    color: #F0F;
  }
  .cyan-text {
    color: #0FF;
  }
  .green-text {
    color: #0F0;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="fuchsia-text">I am fuchsia!</h1>

<h1 class="cyan-text">I am cyan!</h1>

<h1 class="green-text">I am green!</h1>
```
