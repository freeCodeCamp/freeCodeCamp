---
id: 58a7a6ebf9a6318348e2d5aa
title: Modificare la modalità di riempimento di un'animazione
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJDmcE'
forumTopicId: 301064
dashedName: modify-fill-mode-of-an-animation
---

# --description--

È fantastico, però non funziona ancora bene. Nota come l'animazione si resetta dopo che sono passati `500ms`, causando il ritorno del pulsante al colore originale. Vuoi che il pulsante resti evidenziato.

Questo può essere fatto impostando la proprietà `animation-fill-mode` su `forwards`. La modalità `animation-fill-mode` specifica lo stile applicato ad un elemento quando l'animazione è terminata. Puoi impostarla in questo modo:

```css
animation-fill-mode: forwards;
```

# --instructions--

Imposta la proprietà `animation-fill-mode` del pulsante `button:hover` a `forwards` in modo che il pulsante rimanga evidenziato quando un utente ci passa sopra.

# --hints--

`button:hover` dovrebbe avere una proprietà `animation-fill-mode` con un valore di `forwards`.

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
