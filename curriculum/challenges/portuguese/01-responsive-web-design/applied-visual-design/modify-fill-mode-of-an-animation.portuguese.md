---
id: 58a7a6ebf9a6318348e2d5aa
title: Modify Fill Mode of an Animation
challengeType: 0
videoUrl: ''
localeTitle: Modificar o modo de preenchimento de uma animação
---

## Description
<section id="description"> Isso é ótimo, mas não funciona direito ainda. Observe como a animação é redefinida após a passagem de <code>500ms</code> , fazendo com que o botão retorne à cor original. Você quer que o botão fique em destaque. Isso pode ser feito configurando a propriedade <code>animation-fill-mode</code> como <code>forwards</code> . O <code>animation-fill-mode</code> especifica o estilo aplicado a um elemento quando a animação termina. Você pode configurá-lo assim: <code>animation-fill-mode: forwards;</code> </section>

## Instructions
<section id="instructions"> Defina a propriedade de <code>animation-fill-mode</code> do <code>button:hover</code> para <code>forwards</code> para que o botão permaneça realçado quando um usuário passar por cima dele. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>button:hover</code> deve ter uma propriedade de <code>animation-fill-mode</code> com um valor de <code>forwards</code> .'
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
// solution required
```
</section>
