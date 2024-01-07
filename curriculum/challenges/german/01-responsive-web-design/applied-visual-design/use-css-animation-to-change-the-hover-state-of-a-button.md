---
id: 587d78a7367417b2b2512ae0
title: Verwende eine CSS-Animation, um den Hover-Status eines Buttons zu ändern
challengeType: 0
videoUrl: 'https://scrimba.com/c/cg4vZAa'
forumTopicId: 301073
dashedName: use-css-animation-to-change-the-hover-state-of-a-button
---

# --description--

Du kannst `@keyframes` verwenden, um die Farbe eines Buttons seinem Hover-Status entsprechend zu ändern (d. h. wenn ein Nutzer mit dem Cursor darüber fährt).

In folgendem Beispiel verbreitert sich das Bild in einem Hover-Fall:

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

Beachte, dass `ms` für Millisekunden steht, wobei 1000ms 1s entsprechen.

Verwende `@keyframes`, um die `background-color` des `button` zu ändern, sodass sie `#4791d0` wird, wenn ein Benutzer darüber fährt. Die `@keyframes`-Regel sollte nur einen Eintrag bei `100%` haben.

# --hints--

Die @keyframes-Regel sollte "background-color" als `animation-name` verwenden.

```js
assert(code.match(/@keyframes\s+?background-color\s*?{/g));
```

Es sollte eine Regel unter `@keyframes` geben, die die `background-color` bei 100% in `#4791d0` ändert.

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
