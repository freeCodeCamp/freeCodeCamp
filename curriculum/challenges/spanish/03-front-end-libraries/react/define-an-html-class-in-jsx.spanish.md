---
id: 5a24c314108439a4d4036160
title: Define an HTML Class in JSX
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Definir una clase de HTML en JSX
---

## Description
<section id="description"> Ahora que se está sintiendo cómodo escribiendo JSX, puede que se esté preguntando en qué se diferencia del HTML. Hasta ahora, puede parecer que HTML y JSX son exactamente iguales. Una diferencia clave en JSX es que ya no se puede usar la <code>class</code> palabra para definir clases de HTML. Esto es porque la <code>class</code> es una palabra reservada en JavaScript. En su lugar, JSX utiliza <code>className</code> . De hecho, la convención de nomenclatura para todos los atributos HTML y referencias de eventos en JSX se convierte en camelCase. Por ejemplo, un evento de clic en JSX es <code>onClick</code> , en lugar de <code>onclick</code> . Del mismo modo, <code>onchange</code> convierte en <code>onChange</code> . Si bien esta es una diferencia sutil, es importante tener en cuenta seguir avanzando. </section>

## Instructions
<section id="instructions"> Aplique una clase de <code>myDiv</code> al <code>div</code> provisto en el código JSX. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La constante <code>JSX</code> debe devolver un elemento <code>div</code> .
    testString: 'assert.strictEqual(JSX.type, "div", "The constant <code>JSX</code> should return a <code>div</code> element.");'
  - text: El <code>div</code> tiene una clase de <code>myDiv</code> .
    testString: 'assert.strictEqual(JSX.props.className, "myDiv", "The <code>div</code> has a class of <code>myDiv</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const JSX = (
  <div>
    <h1>Add a class to this div</h1>
  </div>
);

```

</div>


### After Test
<div id='jsx-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
