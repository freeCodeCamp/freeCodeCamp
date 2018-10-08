---
id: 5
localeTitle: 5900f4281000cf542c50ff39
challengeType: 5
title: 'Problem 186: Connectedness of a network'
---

## Description
<section id='description'> 
Aquí están los registros de un sistema telefónico ocupado con un millón de usuarios: 

RecNrCallerCalled120000710005326001835004393600863701497 ......... 
El número de teléfono de la persona que llama y el número llamado en el registro n son Caller (n) = S2n-1 y Llamado (n) = S2n donde S1,2,3, ... proviene del &quot;Generador de Fibonacci Rezagado&quot;: 

Para 1 ≤ k ≤ 55, Sk = [100003 - 200003k + 300007k3] (módulo 1000000) 
Para 56 ≤ k, Sk = [Sk-24 + Sk-55] (módulo 1000000) 

Si la persona que llama (n) = Called (n), se supone que el usuario ha marcado incorrectamente y la llamada falla; De lo contrario la llamada es exitosa. 

Desde el inicio de los registros, decimos que cualquier par de usuarios X e Y son amigos si X llama a Y o viceversa. De manera similar, X es amigo de un amigo de Z si X es amigo de Y e Y es amigo de Z; y así sucesivamente para cadenas más largas. 

El número de teléfono del Primer Ministro es 524287. ¿Después de cuántas llamadas exitosas, sin contar los errores de marcación, el 99% de los usuarios (incluido el Primer Ministro) será un amigo, o un amigo de un amigo, etc., del Primer Ministro? 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler186()</code> debe devolver 2325629.
    testString: 'assert.strictEqual(euler186(), 2325629, "<code>euler186()</code> should return 2325629.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler186() {
  // Good luck!
  return true;
}

euler186();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
