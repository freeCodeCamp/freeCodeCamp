---
id: 587d778b367417b2b2512aa8
title: 접근성을 갖춘 날짜 선택기 추가하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cR3bRbCV'
forumTopicId: 301008
dashedName: add-an-accessible-date-picker
---

# --description--

폼(Form)은 여러 다양한 폼 컨트롤에 사용되는 `input` 필드를 포함합니다. 이러한 HTML 엘리먼트의 `type` 속성을 통해 해당 엘리먼트가 어떤 `input`인지 알 수 있습니다.

이전 도전 과제에서 `text`와 `submit` 타입을 확인했을 텐데, HTML5에서는 `date` 필드를 지정할 수 있는 옵션도 도입되었습니다. 브라우저별로 다르지만, 날짜 선택기는 어떤 유저든 폼을 채우기 쉽게 `input` 필드가 포커스 상태일 때 나타납니다.

구형 브라우저의 경우, `text`가 기본 타입으로 되어 있으니, `label`이나 `placeholder` 텍스트를 통해 유저가 날짜 형식을 예상하도록 도와줍니다.

아래는 예시입니다.

```html
<label for="input1">Enter a date:</label>
<input type="date" id="input1" name="input1">
```

# --instructions--

Mortal Kombat 토너먼트를 준비 중인 Camper Cat은 그의 참가자들에게 어떤 날짜가 가장 나은지 묻고 싶습니다. `type` 속성으로 `date`를, `id` 속성으로 `pickdate`를, `name` 속성으로 `date`를 갖는 `input` 태그를 추가하세요.

# --hints--

코드에 날짜 선택 필드를 위한 `input` 태그 하나를 추가합니다.

```js
assert($('input').length == 2);
```

`input` 태그에 `date`라는 값을 가지는 `type` 속성을 포함해야 합니다.

```js
assert($('input').attr('type') == 'date');
```

`input` 태그에 `pickdate`라는 값을 가지는 `id` 속성을 포함해야 합니다.

```js
assert($('input').attr('id') == 'pickdate');
```

`input` 태그에 `date`라는 값을 가지는 `name` 속성을 추가해야 합니다.

```js
assert($('input').attr('name') == 'date');
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Tournaments</h1>
  </header>
  <main>
    <section>
      <h2>Mortal Kombat Tournament Survey</h2>
      <form>
        <p>Tell us the best date for the competition</p>
        <label for="pickdate">Preferred Date:</label>

        <!-- Only change code below this line -->



        <!-- Only change code above this line -->

        <input type="submit" name="submit" value="Submit">
      </form>
    </section>
  </main>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Tournaments</h1>
  </header>
  <main>
    <section>
      <h2>Mortal Kombat Tournament Survey</h2>
      <form>
        <p>Tell us the best date for the competition</p>
        <label for="pickdate">Preferred Date:</label>
        <input type="date" id="pickdate" name="date">
        <input type="submit" name="submit" value="Submit">
      </form>
    </section>
  </main>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
