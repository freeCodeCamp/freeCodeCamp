---
id: 587d7fb1367417b2b2512bf3
title: Implement a Root-Level Request Logger Middleware
localeTitle: Implementar un middleware de registrador de solicitudes de nivel raíz
challengeType: 2
---

## Description
<section id='description'> 
Antes presentamos la función de middleware <code>express.static()</code> . Ahora es el momento de ver qué es el middleware, con más detalle. Las funciones de middleware son funciones que toman 3 argumentos: el objeto de solicitud, el objeto de respuesta y la siguiente función en el ciclo de solicitud-respuesta de la aplicación. Estas funciones ejecutan algunos códigos que pueden tener efectos secundarios en la aplicación y, por lo general, agregan información a los objetos de solicitud o respuesta. También pueden finalizar el ciclo enviando la respuesta, cuando se cumple alguna condición. Si no envían la respuesta, cuando terminan, comienzan la ejecución de la siguiente función en la pila. Esto se activa llamando al tercer argumento <code>next()</code> . Más información en la <a href='http://expressjs.com/en/guide/using-middleware.html' target='_blank'>documentación expresa</a> . 
Mira el siguiente ejemplo: 
<blockquote>function(req, res, next) {<br>  console.log("I'm a middleware...");<br>  next();<br>}</blockquote> 
Supongamos que montamos esta función en una ruta. Cuando una solicitud coincide con la ruta, muestra la cadena "Soy un middleware ...". Luego ejecuta la siguiente función en la pila. 
En este ejercicio vamos a construir un middleware de nivel raíz. Como hemos visto en el desafío 4, para montar una función de middleware en el nivel raíz podemos usar el método <code>app.use(&lt;mware-function&gt;)</code> . En este caso, la función se ejecutará para todas las solicitudes, pero también puede establecer condiciones más específicas. Por ejemplo, si desea que una función se ejecute solo para solicitudes POST, puede usar <code>app.post(&lt;mware-function&gt;)</code> . Existen métodos análogos para todos los verbos http (GET, DELETE, PUT,…). 
Construir un registrador simple. Para cada solicitud, debe iniciar sesión en la consola con una cadena que tenga el siguiente formato: <code>method path - ip</code> . Un ejemplo sería: <code>GET /json - ::ffff:127.0.0.1</code> . Tenga en cuenta que hay un espacio entre el <code>method</code> y la <code>path</code> y que la raya que separa la <code>path</code> y la <code>ip</code> está rodeada por un espacio en cada lado. Puede obtener el método de solicitud (verbo http), la ruta de ruta relativa y la dirección IP de la persona que llama desde el objeto de solicitud, utilizando <code>req.method</code> , <code>req.path</code> y <code>req.ip</code> Recuerde llamar a <code>next()</code> cuando haya terminado, o su servidor quedará atascado para siempre. Asegúrese de tener abiertos los 'Registros' y vea qué sucede cuando llega alguna solicitud ... 
Sugerencia: Express evalúa las funciones en el orden en que aparecen en el código. Esto también es cierto para el middleware. Si desea que funcione para todas las rutas, debe montarse antes que ellas. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El middleware del registrador de nivel raíz debe estar activo
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/root-middleware-logger'').then(data => { assert.isTrue(data.passed, ''root-level logger is not working as expected''); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
