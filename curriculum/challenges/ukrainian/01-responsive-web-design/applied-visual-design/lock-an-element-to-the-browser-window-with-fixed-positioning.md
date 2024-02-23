---
id: 587d781e367417b2b2512acc
title: Заблокувати елемент у вікні браузера з фіксованим розташуванням
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MDNUR'
forumTopicId: 301061
dashedName: lock-an-element-to-the-browser-window-with-fixed-positioning
---

# --description--

Наступна схема, яку пропонує CSS - позиція `fixed`, яка є категоричним позиціонуванням, що блокує елемент відносно вікна браузера. Схоже до абсолютного розташування, він використовується властивостями зміщення CSS, а також видаляє елемент із стандартного потоку документів. Інші позиції більше не "реалізуються" там, де вони розташовані, що може вимагати деякого коректування макета в інших місцях.

Одна ключова різниця між позиціями `fixed` та `absolute` - елемент з фіксованою позицією не переміститься при прокрутці.

# --instructions--

Навігаційний рядок в коді позначений з id `navbar`. Змінити `position` на `fixed` і компенсувати 0 пікселів `top` та 0 пікселів `eft`. Після того, як ви додали код, прокрутіть до попереднього перегляду вікна, щоб побачити як навігація залишається на місці.

# --hints--

Елемент `#navbar` повинен мати `position` встановлену як `fixed`.

```js
assert($('#navbar').css('position') == 'fixed');
```

Ваш код повинен застосовувати `top` CSS offset в 0 пікселів на елементі `#navbar`.

```js
assert($('#navbar').css('top') == '0px');
```

Ваш код повинен використовувати `left` CSS 0 пікселів на елемент`#navbar`.

```js
assert($('#navbar').css('left') == '0px');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    min-height: 150vh;
  }
  #navbar {



    width: 100%;
    background-color: #767676;
  }
  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }
  nav li {
    display: inline;
    margin-right: 20px;
  }
  a {
    text-decoration: none;
  }
</style>
<body>
  <header>
    <h1>Welcome!</h1>
    <nav id="navbar">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  </header>
  <p>I shift up when the #navbar is fixed to the browser window.</p>
</body>
```

# --solutions--

```html
<style>
  body {
    min-height: 150vh;
  }
  #navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #767676;
  }
  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }
  nav li {
    display: inline;
    margin-right: 20px;
  }
  a {
    text-decoration: none;
  }
</style>
<body>
  <header>
    <h1>Welcome!</h1>
    <nav id="navbar">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  </header>
  <p>I shift up when the #navbar is fixed to the browser window.</p>
</body>
```
