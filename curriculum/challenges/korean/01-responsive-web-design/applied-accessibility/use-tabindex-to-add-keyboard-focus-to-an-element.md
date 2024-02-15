---
id: 587d7790367417b2b2512ab0
title: 요소에 키보드 포커스를 추가하기 위해 tabindex 사용하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzMDHW'
forumTopicId: 301027
dashedName: use-tabindex-to-add-keyboard-focus-to-an-element
---

# --description--

HTML `tabindex` 속성은 요소의 키보드 포커스와 연관된 세 가지 다른 기능들을 가지고 있습니다. 태그에 있을 시 요소에 초점을 맞출 수 있다는 것을 나타냅니다. 정수 값에 따라 동작이 결정됩니다.

링크, 폼 제어와 같은 특정 요소들은 사용자가 페이지를 탐색할 때 자동으로 키보드 포커스를 받습니다. 순서는 HTML 소스 마크업에 요소들이 오는 순서와 같습니다. `div`, `span`, `p`와 같은 다른 요소들에도 `tabindex="0"` 속성을 적용하면 동일한 기능을 부여할 수 있습니다. 여기 예시가 있습니다.

```html
<div tabindex="0">I need keyboard focus!</div>
```

**참고:** 음수값의 `tabindex` (통상적으로 -1) 를 사용하면 요소가 포커스를 받을 수 있지만 키보드로 접근할 수는 없습니다. 이 방법은 일반적으로 프로그래밍 방식으로 콘텐츠에 초점을 가져오기 위해 사용되며 (팝업 창에 사용되는 `div`가 활성화될 때처럼) 챌린지의 범위를 벗어납니다.

# --instructions--

Camper Cat은 사용자들에 대한 정보를 모으기 위한 새로운 설문조사를 만들었습니다. 입력 필드는 자동으로 키보드 포커스를 받는 걸 알지만 키보드 사용자들이 항목들을 탐색하는 동안 지시 사항에서 멈추길 바랍니다. `tabindex` 속성을 `p` 태그에 더하고 `0`으로 설정합니다. 보너스 - `tabindex`를 사용하면 CSS 가상 클래스 `:focus`가 `p` 태그에서도 작동되게 합니다.

# --hints--

폼 지침을 보유한 `p` 태그에 `tabindex` 속성을 추가해야합니다.

```js
assert($('p').attr('tabindex'));
```

`p` 태그에 있는 `tabindex` 속성값은 0 이어야 합니다.

```js
assert($('p').attr('tabindex') == '0');
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
  p:focus {
    background-color: yellow;
  }
  </style>
</head>
<body>
  <header>
    <h1>Ninja Survey</h1>
  </header>
  <section>
    <form>


      <p>Instructions: Fill in ALL your information then click <b>Submit</b></p>


      <label for="username">Username:</label>
      <input type="text" id="username" name="username"><br>
      <fieldset>
        <legend>What level ninja are you?</legend>
        <input id="newbie" type="radio" name="levels" value="newbie">
        <label for="newbie">Newbie Kitten</label><br>
        <input id="intermediate" type="radio" name="levels" value="intermediate">
        <label for="intermediate">Developing Student</label><br>
        <input id="master" type="radio" name="levels" value="master">
        <label for="master">9th Life Master</label>
      </fieldset>
      <br>
      <fieldset>
      <legend>Select your favorite weapons:</legend>
      <input id="stars" type="checkbox" name="weapons" value="stars">
      <label for="stars">Throwing Stars</label><br>
      <input id="nunchucks" type="checkbox" name="weapons" value="nunchucks">
      <label for="nunchucks">Nunchucks</label><br>
      <input id="sai" type="checkbox" name="weapons" value="sai">
      <label for="sai">Sai Set</label><br>
      <input id="sword" type="checkbox" name="weapons" value="sword">
      <label for="sword">Sword</label>
      </fieldset>
      <br>
      <input type="submit" name="submit" value="Submit">
    </form><br>
  </section>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

```html
<head>
  <style>
  p:focus {
    background-color: yellow;
  }
  </style>
</head>
<body>
  <header>
    <h1>Ninja Survey</h1>
  </header>
  <section>
    <form>


      <p tabindex="0">Instructions: Fill in ALL your information then click <b>Submit</b></p>


      <label for="username">Username:</label>
      <input type="text" id="username" name="username"><br>
      <fieldset>
        <legend>What level ninja are you?</legend>
        <input id="newbie" type="radio" name="levels" value="newbie">
        <label for="newbie">Newbie Kitten</label><br>
        <input id="intermediate" type="radio" name="levels" value="intermediate">
        <label for="intermediate">Developing Student</label><br>
        <input id="master" type="radio" name="levels" value="master">
        <label for="master">9th Life Master</label>
      </fieldset>
      <br>
      <fieldset>
      <legend>Select your favorite weapons:</legend>
      <input id="stars" type="checkbox" name="weapons" value="stars">
      <label for="stars">Throwing Stars</label><br>
      <input id="nunchucks" type="checkbox" name="weapons" value="nunchucks">
      <label for="nunchucks">Nunchucks</label><br>
      <input id="sai" type="checkbox" name="weapons" value="sai">
      <label for="sai">Sai Set</label><br>
      <input id="sword" type="checkbox" name="weapons" value="sword">
      <label for="sword">Sword</label>
      </fieldset>
      <br>
      <input type="submit" name="submit" value="Submit">
    </form><br>
  </section>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
