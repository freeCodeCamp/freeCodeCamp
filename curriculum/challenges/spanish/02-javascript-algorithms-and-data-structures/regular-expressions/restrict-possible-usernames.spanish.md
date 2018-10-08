---
id: 587d7db8367417b2b2512ba2
title: Restrict Possible Usernames
localeTitle: Restringir posibles nombres de usuario
challengeType: 1
---

## Description
<section id='description'> 
nombres de usuario se utilizan en todas partes en Internet. Son los que dan a los usuarios una identidad única en sus sitios favoritos. 
Es necesario comprobar todos los nombres de usuario en una base de datos. Aquí hay algunas reglas simples que los usuarios deben seguir al crear su nombre de usuario. 
1) Los únicos números en el nombre de usuario deben estar al final. Puede haber cero o más de ellos al final. 
2) Las letras de los nombres de usuario pueden estar en minúsculas y mayúsculas. 
3) Los nombres de usuario deben tener al menos dos caracteres. Un nombre de usuario de dos letras solo puede usar caracteres de letras del alfabeto. 
</section>

## Instructions
<section id='instructions'> 
Cambie el regex <code>userCheck</code> para que se ajuste a las restricciones enumeradas anteriormente. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Tu expresión regular debe coincidir con <code>JACK</code>
    testString: 'assert(userCheck.test("JACK"), "Your regex should match <code>JACK</code>");'
  - text: Tu expresión regular no debe coincidir con <code>J</code>
    testString: 'assert(!userCheck.test("J"), "Your regex should not match <code>J</code>");'
  - text: Tu expresión regular debe coincidir con <code>Oceans11</code>
    testString: 'assert(userCheck.test("Oceans11"), "Your regex should match <code>Oceans11</code>");'
  - text: Tu expresión regular debe coincidir con <code>RegexGuru</code>
    testString: 'assert(userCheck.test("RegexGuru"), "Your regex should match <code>RegexGuru</code>");'
  - text: Su expresión regular no debe coincidir con <code>007</code>
    testString: 'assert(!userCheck.test("007"), "Your regex should not match <code>007</code>");'
  - text: Tu expresión regular no debe coincidir con <code>9</code>
    testString: 'assert(!userCheck.test("9"), "Your regex should not match <code>9</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let username = "JackOfAllTrades";
let userCheck = /change/; // Change this line
let result = userCheck.test(username);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
