---
id: bad87fee1348bd9aedf08817
title: Make Dead Links Using the Hash Symbol
challengeType: 0
videoUrl: ''
localeTitle: Realizar enlaces muertos usando el símbolo de hash
---

## Description
<section id="description"> A veces desea agregar elementos<code>a</code> a su sitio web antes de saber a donde lo va a llevar. Esto también es útil cuando está cambiando el comportamiento de un enlace usando <code>JavaScript</code> , que aprenderemos más adelante. </section>

## Instructions
<section id="instructions"> El valor actual del atributo <code>href</code> es un enlace que apunta a &quot;https://freecatphotoapp.com&quot;. Reemplace el valor del atributo <code>href</code> con un <code>#</code> , también conocido como símbolo de hash, para crear un enlace muerto. Por ejemplo: <code>href=&quot;#&quot;</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Su <code>a</code> elemento debe ser un vínculo roto con el valor de la <code>href</code> atributo establecido en &quot;#&quot;.'
    testString: 'assert($("a").attr("href") === "#", "Your <code>a</code> element should be a dead link with the value of the <code>href</code> attribute set to "#".");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="https://freecatphotoapp.com" target="_blank">cat photos</a>.</p>

  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
