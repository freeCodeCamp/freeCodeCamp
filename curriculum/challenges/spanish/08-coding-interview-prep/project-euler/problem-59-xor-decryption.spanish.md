---
id: 5900f3a81000cf542c50feba
challengeType: 5
title: 'Problem 59: XOR decryption'
videoUrl: ''
localeTitle: 'Problema 59: descifrado XOR'
---

## Description
<section id="description"> A cada personaje en una computadora se le asigna un código único y el estándar preferido es ASCII (Código Estándar Americano para el Intercambio de Información). Por ejemplo, mayúscula A = 65, asterisco (*) = 42 y minúscula k = 107. Un método moderno de encriptación es tomar un archivo de texto, convertir los bytes a ASCII, luego XOR cada byte con un valor dado, tomado de un llave secreta. La ventaja de la función XOR es que el uso de la misma clave de cifrado en el texto cifrado restaura el texto simple; por ejemplo, 65 XOR 42 = 107, luego 107 XOR 42 = 65. Para el cifrado irrompible, la clave tiene la misma longitud que el mensaje de texto sin formato, y la clave está formada por bytes aleatorios. El usuario mantendría el mensaje cifrado y la clave de cifrado en diferentes ubicaciones, y sin ambas &quot;mitades&quot;, es imposible descifrar el mensaje. Desafortunadamente, este método no es práctico para la mayoría de los usuarios, por lo que el método modificado es usar una contraseña como clave. Si la contraseña es más corta que el mensaje, lo cual es probable, la clave se repite cíclicamente a lo largo del mensaje. El balance para este método es usar una clave de contraseña suficientemente larga para la seguridad, pero lo suficientemente corta como para ser memorable. Su tarea ha sido fácil, ya que la clave de cifrado consta de tres caracteres en minúscula. Utilizando cipher.txt (clic con el botón derecho y &#39;Guardar enlace / destino como ...&#39;), un archivo que contiene los códigos ASCII cifrados, y el conocimiento de que el texto plano debe contener palabras comunes en inglés, descifrar el mensaje y encontrar la suma de Valores ASCII en el texto original. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler59()</code> debe devolver 107359.
    testString: 'assert.strictEqual(euler59(), 107359, "<code>euler59()</code> should return 107359.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler59() {
  // Good luck!
  return true;
}

euler59();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
