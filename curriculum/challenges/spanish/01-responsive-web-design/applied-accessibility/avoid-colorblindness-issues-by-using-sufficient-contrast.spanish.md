---
id: 587d778f367417b2b2512aac
title: Avoid Colorblindness Issues by Using Sufficient Contrast
challengeType: 0
videoUrl: ''
localeTitle: Evita Problemas de Daltonismo Usando Suficiente Contraste
---

## Descripción
<section id="description"> El color es una parte muy importante del diseño visual, pero su uso presenta dos problemas de accesibilidad. Primero, no debe usarse solo el color como la única forma de transmitir información importante porque los lectores de pantalla no pueden detectarlo. En segundo lugar, los colores de fondo y de primer plano necesitan el contraste suficiente para que los usuarios con daltonismo los puedan distinguir. 
  
Los desafíos anteriores cubren alternativas para el primer problema. El último desafío introdujo herramientas de comprobación de contraste para ayudar a resolver el segundo. La  proporción de contraste de 4.5:1 recomendada por la WCAG aplica tanto para su uso con colores como para su uso con escala de grises.

Los usuarios con daltonismo tienen problemas para distinguir algunos colores de otros, usualmente en el matiz pero también puede suceder con el brillo. Tal vez recuerdes que el contraste se calcula usando los valores del brillo relativo del color de fondo y del color en el primer plano. 

En la práctica la proporción de 4.5:1 puede obtenerse oscureciendo el color más oscuro y aclarando el más claro con la ayuda de una herramienta de comprobación de contraste. Los colores más oscuros en la rueda de colores son los azules, violetas, magentas y rojos, mientras que los colores más claros son los naranjas, amarillos, verdes y verde-azules. </section>

## Instrucciones
<section id="instructions"> Camper Cat está experimentando con el uso de color de fondo y color de texto de su blog, pero su combinación actual de un color de fondo verdoso <code>background-color</code> con un color de texto marrón <code>color</code> tiene una proporción de 2.5:1 de contraste. Puedes ajustar fácilmente el brillo de los colores ya que usó la propiedad CSS <code>hsl()</code> para declararlos modificando el valor del tercer argumento (hsl viene de: hue, saturation, lightness; en español, matiz, saturación y brillo). Aumenta el brillo del <code>background-color</code> de 35% a 55%, y reduce el brillo del <code>color</code> de 20% a 15%. Esto mejorará la proporción de contraste a 5.9:1. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Tu código solo debe cambiar el valor de luminosidad de la propiedad <code>color</code> del texto a un valor del 15%.
    testString: 'assert(code.match(/color:\s*?hsl\(0,\s*?55%,\s*?15%\)/gi), "Your code should only change the lightness value for the text <code>color</code> property to a value of 15%.");'
  - text: Tu código solo debe cambiar el valor de luminosidad de la propiedad <code>background-color</code> a un valor del 55%.
    testString: 'assert(code.match(/background-color:\s*?hsl\(120,\s*?25%,\s*?55%\)/gi), "Your code should only change the lightness value for the <code>background-color</code> property to a value of 55%.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<head>
  <style>
  body {
    color: hsl(0, 55%, 20%);
    background-color: hsl(120, 25%, 35%);
  }
  </style>
</head>
<body>
  <header>
    <h1>Pensamientos profundos con el maestro Camper Cat</h1>
  </header>
  <article>
    <h2>Unas Palabras sobre el Reciente Escándalo de Doping de Catnip</h2>
    <p>La influencia que tiene el catnip sobre el comportamiento felino ha sido bien documentada, y su uso como suplemento herbario en círculos ninja de competición sigue siendo controvertido aún hoy en día. Una vez más, el debate sobre la prohibición de la sustancia se ha presentado en la opinión pública luego de la gran victoria de Kittytron, acérrimo defensor y consumidor de la sustancia verde, en el Torneo de la Garra de la Furia.</p>
    <p>Como ya me he pronunciado en el pasado, creo firmemente que las habilidades de un verdades ninja deben venir de su interior, sin ninguna influencia externa. Mi consumo personal de catnip es y seguirá siendo puramente recreativo.</p>
  </article>
</body>

```

</div>



</section>

## Solución
<section id='solution'>

```js
// solución requerida
```

</section>
