---
id: 58a7a6ebf9a6318348e2d5aa
title: Modify Fill Mode of an Animation
localeTitle: Modificar el modo de relleno de una animación
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
Eso es genial, pero no funciona bien todavía. Observe cómo se restablece la animación después de que hayan transcurrido <code>500ms</code> , lo que hace que el botón vuelva al color original. Desea que el botón quede resaltado. 
Esto se puede hacer configurando la propiedad de <code>animation-fill-mode</code> en <code>forwards</code> . La <code>animation-fill-mode</code> especifica el estilo aplicado a un elemento cuando la animación ha finalizado. Puedes configurarlo así: 
<code>animation-fill-mode: forwards;</code> 
</section>

## Instructions
<section id='instructions'> 
Establezca la propiedad de <code>animation-fill-mode</code> del <code>button:hover</code> hacia <code>forwards</code> para que el botón permanezca resaltado cuando un usuario se desplace sobre él. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: &#39; <code>button:hover</code> debería tener una propiedad de <code>animation-fill-mode</code> con un valor de <code>forwards</code> .&#39;
    testString: 'assert(code.match(/button\s*?:\s*?hover\s*?{[\s\S]*animation-fill-mode\s*?:\s*?forwards\s*?;[\s\S]*}/gi) && code.match(/button\s*?:\s*?hover\s*?{[\s\S]*animation-name\s*?:\s*?background-color\s*?;[\s\S]*}/gi) && code.match(/button\s*?:\s*?hover\s*?{[\s\S]*animation-duration\s*?:\s*?500ms\s*?;[\s\S]*}/gi), "<code>button:hover</code> should have a <code>animation-fill-mode</code> property with a value of <code>forwards</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

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
    /* add your code below this line */

    /* add your code above this line */
  }
  @keyframes background-color {
    100% {
      background-color: #4791d0;
    }
  }
</style>
<button>Register</button>
```

</div>



</section>

## Solution
<section id='solution'>


```js
var code = "button:hover {animation-name: background-color; animation-duration: 500ms; animation-fill-mode: forwards;}"
```

</section>
