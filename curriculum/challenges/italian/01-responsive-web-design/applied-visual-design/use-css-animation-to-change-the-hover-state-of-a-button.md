---
id: 587d78a7367417b2b2512ae0
title: Usare l'animazione CSS per cambiare lo stato hover di un pulsante
challengeType: 0
videoUrl: 'https://scrimba.com/c/cg4vZAa'
forumTopicId: 301073
dashedName: use-css-animation-to-change-the-hover-state-of-a-button
---

# --description--

Puoi usare `@keyframes` per cambiare il colore di un pulsante nel suo stato di hover.

Ecco un esempio di cambiamento della larghezza di un'immagine quando ci si passa sopra:

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

Nota che `ms` sta per millisecondi, dove 1000ms è uguale a 1s.

Usa `@keyframes` per cambiare il `background-color` del `button` in modo che diventi `#4791d0` quando un utente passa sopra di esso. La regola `@keyframes` dovrebbe avere solo una voce per `100%`.

# --hints--

La regola @keyframes dovrebbe usare il background-color `animation-name`.

```js
assert(code.match(/@keyframes\s+?background-color\s*?{/g));
```

Ci dovrebbe essere una regola in `@keyframes` che cambia il `background-color` a `#4791d0` al 100%.

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
