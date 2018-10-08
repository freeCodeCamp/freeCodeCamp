---
id: 587d7daf367417b2b2512b7e
title: Understand the Constructor Property
localeTitle: Entender la propiedad del constructor
challengeType: 1
---

## Description
<section id='description'> 
Hay una propiedad de <code>constructor</code> especial ubicada en las instancias de objeto <code>duck</code> y <code>beagle</code> que se crearon en los desafíos anteriores: 
<blockquote>let duck = new Bird();<br>let beagle = new Dog();<br><br>console.log(duck.constructor === Bird);  //prints true<br>console.log(beagle.constructor === Dog);  //prints true</blockquote> 
Tenga en cuenta que la propiedad del <code>constructor</code> es una referencia a la función del constructor que creó la instancia. 
La ventaja de la propiedad del <code>constructor</code> es que es posible verificar esta propiedad para saber qué tipo de objeto es. Aquí hay un ejemplo de cómo se podría usar: 
<blockquote>function joinBirdFraternity(candidate) {<br>&nbsp;&nbsp;if (candidate.constructor === Bird) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return true;<br>&nbsp;&nbsp;} else {<br>&nbsp;&nbsp;&nbsp;&nbsp;return false;<br>&nbsp;&nbsp;}<br>}</blockquote> 
<strong>Nota</strong> <br> Dado que la propiedad del <code>constructor</code> se puede sobrescribir (que se cubrirá en los siguientes dos desafíos), generalmente es mejor usar el método <code>instanceof</code> para verificar el tipo de un objeto. 
</section>

## Instructions
<section id='instructions'> 
Escriba una función <code>joinDogFraternity</code> que tome un parámetro <code>candidate</code> y, utilizando la propiedad del <code>constructor</code> , devuelva <code>true</code> si el candidato es un <code>Dog</code> , de lo contrario, devuelva <code>false</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>joinDogFraternity</code> debe definirse como una función.
    testString: 'assert(typeof(joinDogFraternity) === "function", "<code>joinDogFraternity</code> should be defined as a function.");'
  - text: <code>joinDogFraternity</code> debería devolver true si el <code>candidate</code> es una instancia de <code>Dog</code> .
    testString: 'assert(joinDogFraternity(new Dog("")) === true, "<code>joinDogFraternity</code> should return true if<code>candidate</code> is an instance of <code>Dog</code>.");'
  - text: <code>joinDogFraternity</code> debe usar la propiedad del <code>constructor</code> .
    testString: 'assert(/\.constructor/.test(code) && !/instanceof/.test(code), "<code>joinDogFraternity</code> should use the <code>constructor</code> property.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name;
}

// Add your code below this line
function joinDogFraternity(candidate) {

}

```

</div>



</section>

## Solution
<section id='solution'>


```js
function Dog(name) {
  this.name = name;
}
function joinDogFraternity(candidate) {
  return candidate.constructor === Dog;
}
```

</section>
