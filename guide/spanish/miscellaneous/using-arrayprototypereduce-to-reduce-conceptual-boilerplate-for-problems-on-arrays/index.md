---
title: Using Arrayprototypereduce to Reduce Conceptual Boilerplate for Problems on Arrays
localeTitle: Uso de Arrayprototypereduce para reducir la placa de referencia conceptual para problemas en matrices
---
¡Eso es todo un bocado! Se podría haber titulado **Utilizar `Array.prototype.reduce()` para resolver problemas de arreglos fácilmente** o **`Array.prototype.reduce()` FTW!** . Eso hubiera sido mucho más fácil de leer y analizar.

Pero no era. Los bucles en JavaScript son así. No son concisos, te hacen andar por las ramas por un tiempo. Según el chiste, dos cosas son más difíciles en informática: la [invalidación de la memoria caché](https://en.wikipedia.org/wiki/Cache_invalidation) , [nombrar las cosas](https://www.quora.com/Why-is-naming-things-hard-in-computer-science-and-how-can-it-can-be-made-easier) y [el error off-by-one](https://en.wikipedia.org/wiki/Off-by-one_error) .

Y luego existe el peligro de escribir [código asíncrono dentro de un bucle for sin utilizar el cierre de IIFE](http://stackoverflow.com/questions/11488014/asynchronous-process-inside-a-javascript-for-loop) .

Este artículo comenzaría con una reclamación: que puede evitar el uso de un ciclo for-loop o while para resolver cualquier problema relacionado con la `Array` . En su lugar, puede resolverlos todos usando `Array.prototype.reduce()` . Si desea leer hacia adelante; asegúrese de conocer las funciones recursivas y algunas de las herramientas funcionales geniales como `Array.prototype.map()` o `Array.prototype.filter()` .

Los grandes reclamos requieren gran evidencia. Así que vamos a demostrar cómo podemos acostumbrarnos con el uso de `reduce()` .

Es hora de que sepas que, si no has resuelto las secciones de secuencias de comandos del algoritmo FreeCodeCamp, es posible que desees leer esta parte. Algunos de los ejemplos podrían emparejar esos problemas.

Esta es la alerta de spoiler cliched; para asegurarte de probar esos problemas de manera honesta y de no echar un vistazo a las soluciones antes de haberlo intentado.

Además, si ya lo entiendes lo suficiente, tal vez te gustaría revisar este escrito y proporcionar comentarios.

## ¿Puedo reducir cualquier problema relacionado con la matriz?

¡Sí tu puedes! De hecho, el problema ni siquiera tiene que tener una matriz, _solo tiene que ser un problema, donde se puede crear una matriz intermedia_ .

Tomemos un ejemplo. Es bastante común crear una [URL de slug a](https://en.wikipedia.org/wiki/Semantic_URL#Slug) partir de una cadena estándar en blanco, como titulares de noticias, títulos de artículos de blogs o incluso preguntas en foros de preguntas y respuestas.

Digamos, tenemos que escribir una función de utilidad, que crea esta babosa. Probablemente podrías escribir algo como esto:
```
function createSlug(str){ 
  return str.split(" ").reduce(function(prev, next){ 
    return prev.concat(<a href='https://signalvnoise.com/posts/3124-give-it-five-minutes' target='_blank' rel='nofollow'>next.toLowerCase()]); 
  }, []) 
  .join("-"); 
 } 
```

¡No tome mi palabra para ello! Adelante, y pruébalo en tu consola con alguna información como "¡Leo finalmente gana un Oscar Freaking!" Mira lo que devuelve. Voy a esperar ... listo? Ok, sigue adelante.

Sí, no es una implementación robusta. No se ocupa de algunos casos de vanguardia, y también asume que la unión debería ocurrir con `"-"` .

Pero es un comienzo. Observe cómo el uso de `reduce` elimina la placa de repetición de su camino: la acción ocurre solo en la línea:
```
return prev.concat([next.toLowerCase()]); 
```

Ese es el núcleo de la funcionalidad que queremos. De hecho, estamos tan seguros de su genialidad, ¡que iniciamos el cuerpo de la `function` con una declaración de `return` !

Usted bien podría imaginar que, esto parece magia oscura. Asegúrese de que no sea una reacción instintiva, porque está demasiado acostumbrado a escribir bucles. Solo \[¡dale cinco minutos!

Si el código anterior no estaba claro, debe comprender cómo funciona la `reduce` . Y por _entendido_ , quiero decir, sé como la palma de tu mano.

## Pero no entiendo reducir en absoluto!

Bueno, no temas! Vas a ser un `reduce` Ninja en los próximos minutos.

Cada función de JavaScript tiene tres cosas que debe saber para comprender cómo funciona la función:

*   La entrada
*   La salida
*   El contexto de ejecución.

Sí, puedo ver que [abres la documentación](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) oficial de [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) en una nueva pestaña. Está bien, ve a leer eso primero. En serio, esto no es broma.

Siempre debes comenzar en la documentación oficial para entender algo.

Bien, ahora que estás confundido con el `prev` y el `next` dentro de la devolución de llamada; Estás listo para seguir el texto aquí.

`Array.prototype.reduce()` toma una devolución de llamada y un valor inicial como argumentos de entrada (el valor inicial es importante. Muchos desarrolladores se olvidan de proporcionar el valor inicial correctamente y arruinan su código).

Como debe haber visto en la documentación, también se necesitan algunos argumentos adicionales pero opcionales. Pero más sobre eso más tarde. Suponiendo que `arr` es una matriz arbitraria.
```
arr.reduce(function(){}, initialValue); 
```

Ahora, veamos más de cerca la función de devolución de llamada, que es el primer argumento de `reduce` . Esta devolución de llamada, a su vez, toma dos argumentos. Estos dos argumentos se mencionan en la documentación oficial como `prev` y `next` . Personalmente, no creo que esos nombres hagan justicia a su verdadera naturaleza.

Entonces, a lo largo de este texto, nos referiríamos a ellos como `acc` , para representar el valor acumulado; y `item` , para indicar el elemento actual al que se accede.

Con estos hasta ahora, esto es lo que debería ser una `reduce` :
```
arr.reduce(function(acc, item){ 
 /* here you have to complete the function */ 
 }, initialValue); 
```

Ahora, vamos a averiguar cuál sería el valor de estos `acc` y el `item` son. Hemos mencionado anteriormente que la `reduce` es un reemplazo para construcciones iterativas.

Es lógico pensar que `reduce` tomaría su función de devolución de llamada personalizada; e iterar sobre la matriz en la que se ha invocado la `reduce` .

En lugar de describirlos, ¡preguntemos al motor de ejecución de JS qué son!
```
var arr = <a href='http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/' target='_blank' rel='nofollow'>10, 20, 30, 60]; 
 arr.reduce(function(acc, item){ 
   console.log(acc, item); 
 }, 0); 
```

Ejecutar lo anterior en el navegador o en la consola Node le daría esto como resultado:
```
0 10 
 undefined 20 
 undefined 30 
 undefined 60 
```

Observe que la cantidad de salidas es la misma que la cantidad de elementos en la matriz `[10, 20, 30, 60]` . De hecho, ¡imprime los elementos del Array!

Entonces, podemos deducir que `reduce()` toma su devolución de llamada personalizada y la ejecuta en cada elemento de la matriz. Al hacerlo, hace que el elemento actual esté disponible para la devolución de llamada personalizada como argumento del `item` .

Pero ¿qué pasa con `acc` ? Vemos que aparte de la primera línea, cuando `item = 10` , está `undefined` . En la primera línea, que corresponde a la primera iteración, su valor es el mismo que el valor `initialvalue` .

En resumen, nuestro acumulador `acc` , no se está acumulando!

Pero entonces, ¿cómo lo hacemos acumular? Intentemos ejecutar esto:
```
var arr = [10, 20, 30, 60]; 
 arr.reduce(function(acc, item){ 
   console.log(acc, item); 
   return acc; 
 }, 0); 
```

Esta vez la salida cambia a:
```
0 10 
 0 20 
 0 30 
 0 60 
```

Como puede ver, el valor de `acc` permanecerá constante durante todo el proceso. Y eso es lo que se espera: no estamos alterando el valor de `acc` en ninguna parte de la devolución de llamada personalizada. Devolvemos cualquier `reduce` disponible en una iteración determinada.

Pero nos dimos cuenta de algo: el valor de `acc` para la iteración actual sería el valor de `return` de la devolución de llamada personalizada de la iteración anterior. Y, en última instancia, cuando finalice la iteración, el valor final de `acc` se devolverá mediante la `reduce` llamadas.

Esto deja solo una parte importante en nuestra comprensión: el valor del contexto de ejecución, o \[ `this` !

Entonces, nuevamente nos acercamos a nuestro vecino amigable, la consola JS y ejecutamos esto:
```
var arr = <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode' target='_blank' rel='nofollow'>10, 20, 30, 60]; 
 arr.reduce(function(acc, item){ 
   console.log(acc, item, this); 
   return acc; 
 }, 0); 
```

Si está en \[modo estricto, devolvería `undefined` valor `undefined` como `this` . De lo contrario, en el navegador, apuntaría al objeto de [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) como `this` . ¿Podemos anularlo y configurarlo por nuestra cuenta, usando [`bind`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind) ? ¡Por supuesto! solo usa `bind` con el callback:
```
var arr = <a href='https://en.wikipedia.org/wiki/Loop_invariant' target='_blank' rel='nofollow'>10, 20, 30, 60]; 
 arr.reduce(function(acc, item){ 
   console.log(acc, item, this); 
   return acc; 
 }.bind(arr), 0); 
```

He enlazado el conjunto `arr` ; pero puedes configurarlo en cualquier objeto en tu entorno.

## Entendiendo reducir

Resumamos nuestra comprensión de esta función de `reduce` para una referencia fácil:

*   Reducir toma una devolución de llamada personalizada como su primer argumento, y algún valor inicial como su segundo argumento.
*   Es importante que no olvidemos el segundo argumento, el valor inicial; y lo configuramos explícitamente mientras lo usamos.
*   Los argumentos de entrada a la devolución de llamada personalizada es un valor acumulado `acc` ; y el elemento actual en Array, `item` .
*   El valor de `acc` para la siguiente iteración sería el valor devuelto desde dentro de la devolución de llamada, en la iteración actual.
*   Todo el punto de usar `reduce()` es formar el `acc` correctamente; para devolverlo finalmente desde la llamada a `reduce()` .

¡No intentes recordarlos haciendo cramming! En su lugar, recordémoslos aplicándolos en código real.

## Usando Reducir

Comencemos una simple operación de Array desde la parte superior de nuestra cabeza - _encontrando el máximo en un Array_

En aras de la brevedad, asumo que es una matriz de enteros.

Para formar una solución, debemos pensar en cómo configurar `acc` como `reduce` toma nuestra devolución de llamada e itera sobre la matriz.

Una idea que me parece útil es pensar en términos de \[invariantes de bucle. Queremos llegar a una formulación que no importa el tamaño o el contenido de la matriz; `acc` siempre debe tener el valor máximo hasta ahora.

Por ejemplo, Mi matriz es `[20, 50, 5, 60]` . Después de dos iteraciones; `item` sería `5` y `acc` debería ser `max(20, 50) = 50` .

La única forma en que `acc` siempre obtiene el máximo del _subarray atravesado hasta ahora_ , es si siempre seleccionamos el máximo del `item` actual y `acc` - ¡y devolvemos al ganador!

Entonces, aquí está la función que tendría:
```
var arr = [20, 50, 5, 60]; 
 arr.reduce(function(acc, item){ 
  return Math.max(acc, item); 
 }, 0); 
```

Podría ser tentador reescribirlo de la siguiente manera, junto con los principios de programación funcional;
```
var arr = [20, 50, 5, 60]; 
 arr.reduce(Math.max, 0); 
```

pero esto no funcionaría y devolvería `NaN` . Esta es la razón: `acc` y `item` no son los **únicos** argumentos para la devolución de llamada personalizada. Cuando llama a [`Math.max()`](//forum.freecodecamp.com/t/javascript-math-max/14682) intenta llamarla en argumentos no numéricos, lo que resulta en `NaN` .

Tenga en cuenta que no puse mucha atención en elegir el valor inicial. Acabo de elegirlo como `0` ; dando como resultado un error!

Entonces, ¿qué pasa si mi matriz está formada por valores menores que cero? Diga, `arr = <a href='https://en.wikipedia.org/wiki/Least_common_multiple' target='_blank' rel='nofollow'>-7, -56, -5, -2]` . El valor devuelto sería `0` , que ni siquiera está presente en el Array `arr` .

En su lugar, deberíamos elegir el valor más bajo posible para el valor inicial.
```
var arr = [-20, -50, -5, -60]; 
 arr.reduce(function(acc, item){ 
  return Math.max(acc, item); 
 }, -Infinity); 
```

Estamos llegando allí. Deberíamos afinar nuestras habilidades en otro problema relacionado con Array. Solo para divertirnos, vamos con un poco más difícil.

Digamos que debemos encontrar \[MCM de una matriz de números enteros. Ahora, por la teoría, sabemos que el LCM de dos números sería producto de ellos, dividido por su [HCF](https://en.wikipedia.org/wiki/Greatest_common_divisor) .

Existe un algoritmo euclediano para encontrar HCF; Y abundantes son sus implementaciones. No tiene sentido perder el tiempo haciendo que escriba una función de HCF cuando pueda escribirla usted mismo o encontrar una.

Más bien, veamos cómo extender el LCM de dos números al LCM de múltiples números. Flash de noticias: no es producto de una matriz completa dividida por su HCF. No Eso sería matemáticamente incorrecto.

LCM de tres números sería LCM de los dos primeros números; luego MCM del primer MCM con el número restante. De manera similar, puede formular una estrategia para averiguar primero el LCM de la sub-matriz, luego tomar otro número y encontrar su LCM con el primer LCM.

Entonces, ¿cómo formulamos la solución? Tenemos que pensar en `acc` en medio de una iteración. La `acc` final debería ser el MCM de toda la matriz, sin duda. Pero durante la iteración `nth` también; `acc` debe contener el MCM de los elementos `(n-1)` recorridos hasta ahora.

Y sí, el valor inicial. Debe ser un número, cuyo MCM con otro número sería el otro número. Claramente, es `1` .

Vamos a escribir nuestra solución de `reduce` .
```
var arr = <a href='http://www.freecodecamp.com/challenges/symmetric-difference' target='_blank' rel='nofollow'>1, 2, 3, 4, 5, 6]; 
 arr.reduce(function(acc, item){ 
  return acc * item / hcf(acc, item); 
 }, 1); 
```

Supongo que una función `hcf()` está disponible en el entorno. Escogí las entradas de una manera; Debe devolver `60` como respuesta.

## Más reducir

Reducir no es solo una función que le brinde utilidades para resolver algunos problemas matemáticos como la suma de la matriz, hcf de la matriz, mínimo de la matriz, etc.

Es perfectamente capaz de ir más allá. Estaremos tratando con algunos ejemplos complejos por ahora.

Digamos que desea aplanar matrices anidadas. Y sí, antes de que empieces a saltar arriba y abajo en tu asiento, el anidamiento podría tener un nivel arbitrario de profundidad.

Por ejemplo, podríamos usar esta matriz para probar nuestro código con.
```
var arr = [[1, 2, 3], ['cat', 'dog', ['fish', 'bird'], [[[]]]]]; 
```

Esto parece lo suficientemente complejo para comenzar con: matrices anidadas, matrices anidadas vacías con profundidad variable.

La salida debe ser `[1, 2, 3, 'cat', 'dog', 'fish', 'bird']`

Es hora de formular una estrategia. Claramente necesitamos distinguir entre una matriz y un elemento. Además, `acc` debe ser la matriz que se forma a lo largo de la iteración; lo que significa que el valor inicial sería una matriz vacía `[]` .

A lo largo del código de la función de devolución de llamada, simplemente extraeríamos el contenido del `item` , que puede ser una matriz profundamente anidada; y lo haríamos `Array.prototype.concat()` con el valor `acc` . Es mejor usar `concat()` sobre `Array.prototype.push()` ; porque `push()` altera la matriz original; mientras que `concat()` crea una nueva matriz y la devuelve.

Y como no sabemos el nivel de anidación en un instante dado; Debemos ir a llamar a nuestro callback personalizado recursivamente. Es decir, tenemos que escribirlo en otro lugar y llamarlo por su nombre dentro de `reduce()` .
```
var arr = [[1, 2, 3], ['cat', 'dog', ['fish', 'bird'], [[[]]]]]; 
 
 function flattenArray(arr) { 
  return arr.reduce(function(acc, item){ 
    if(Array.isArray(item)){ 
      return acc.concat(flattenArray(item)); // recursively call to flatten nested array 
    return acc.concat(item); // this does the ordering. If you want reverse ordered output, just reverse it! 
  }, []) 
 
 } 
 
 // call it like this 
 flattenArray(arr); 
```

Por supuesto, esto requiere algunos antecedentes en funciones recursivas; ¡Pero eso no es demasiado difícil de entender, comparado con el asunto de este largo!

Sí, adelante y juega con ello. Pero observe cómo podemos simplemente escribir 3-4 líneas de funciones limpias teniendo en cuenta algunas pautas simples, y hacer algo tan complejo como eso de manera confiable. Esto es legible y mantenible.

Por ejemplo, si desea alterar o modificar la lógica, la lógica más adelante (supongamos que desea poner mayúsculas en una cadena o codificar una cadena); Usted puede identificar fácilmente dónde alterar. El anidamiento real ocurre dentro de la condición `if` . Y la forma en que hemos utilizado la `reduce` llamadas allí: mantiene el orden de los elementos tal como están en la matriz.

¡Tomemos otro ejemplo aparentemente complejo, y pongámonos de rodillas armando la espada de `reduce` !

Debemos descubrir las \[diferencias simétricas de dos o más matrices. Se ve desalentador; Pero entonces empiezas a pensar.

¿Cuál sería el valor inicial? Por supuesto, estamos formando una matriz; por lo que sería una matriz vacía `<a href='https://github.com/reactjs/redux' target='_blank' rel='nofollow'>]` para comenzar. Luego está el `acc` - ya que nuestra solución final contendría una matriz difusa; Tendría que ser una matriz también. Esto seguiría acumulando las diferencias simétricas de los arreglos encontrados hasta ahora.

Para que quede claro, esta función podría aceptar un número arbitrario de arreglos; por lo tanto, tenemos que convertirlos a todos en una matriz de arreglos para una fácil manipulación.
```
function symDiff(args){ 
  // convert args to an Array 
  var argsArray = Array.prototype.slice.call(arguments); 
 
  // now do the reduce magic! 
  argsArray.reduce(function(acc, item){ 
    return acc 
      .filter(function(itemInAcc){ 
        return item.indexOf(itemInAcc) === -1; 
      }) 
      .concat(item.filter(function(itemInItem){ 
        return acc.indexOf(itemInItem) === -1; 
      })); 
  }. []); 
 } 
```

Sí, lo sé. Se ve grande Entonces, veamos si podemos refactorizarlo para hacerlo pequeño. Observe que ambas funciones de `filter` hacen el mismo trabajo; Excepto con un conjunto alterado de pares de argumentos. ¡Guay! Creemos una función separada y la llamemos dos veces con esos argumentos.
```
function symDiff(args){ 
  // convert args to an Array 
  var argsArray = Array.prototype.slice.call(arguments); 
 
  // now do the reduce magic! 
  argsArray.reduce(function(acc, item){ 
    var funWithFiltering = function(arr1, arr2){ 
      return arr1.filter(function(itemInArr1){ 
        return arr2.indexOf(itemInArr1) === -1; 
      }); 
    }; 
 
    return funWithFiltering(acc, item).concat(funWithFiltering(item, acc)); 
  }. []); 
 } 
```

Esto se ve mejor. Pero todavía hay otro problema. Esto mantendría duplicados en la matriz. Si eso no fuera necesario, podríamos escribir otra función con la `reduce` para eliminar los duplicados.
```
function removeDuplicates(arr){ 
  arr.filter(item, index, self){ 
    // Keep only the first instance of the array, as given by indexOf() 
    // Remove other elements from Array 
    return self.indexOf(item) === index; 
  } 
 } 
```

No podemos seguir ignorando esto por más tiempo. He estado usando el `filter` mientras prometía usar `reduce` , ¿verdad? La razón es simple: el `filter` se puede escribir con `reduce` . De hecho, cualquier operación de matriz, en teoría; Se puede implementar con `reduce()` .

¡Dale una oportunidad! Implementar `map` y `filter` con `reduce` . Tienes que ocuparte de los argumentos opcionales también.

## Terminando

Whoa eso fue bastante! Pero creo que me he dado cuenta de que usar `reduce` cada vez que quieras usar un bucle para hacerlo. Habitúese con él como si fuera su primera naturaleza.

Tan pronto como tenga un problema con alguna transformación de cadena o manipulación de matriz; empieza escribiendo
```
return arr.reduce(function(acc, item){_}, _); 
```

Y luego rellene los espacios en blanco. Cuando estás utilizando `reduce()` , estás pensando en términos de interacción de cada elemento con otro elemento. Usted está formando la salida acumulándola de principio a fin.

El marco \[Redux adopta el principio de `reduce` y está ganando gran popularidad en el diseño web.

También note otra característica destacada: `reduce` fuerzas o lo guíe para formar su solución sin alterar nada existente. Por ejemplo, en el último ejemplo; Estábamos filtrando y concatenando, pero sabíamos que funcionaría como es; porque el primer conjunto de operaciones no cambió ninguna de las `acc` o `item` dentro de esa iteración.

Este sería un buen momento para nivelar con usted, ya que el parámetro `initialValue` es [opcional](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#Parameters) . No es necesario que lo proporcione explícitamente.

Si omites esto; para la primera iteración, `acc` sería el primer elemento de la matriz y el `item` sería el segundo elemento de la matriz. Esto significaría que podemos escribir una suma de utilidad de matriz simplemente omitiéndola. O bien, no necesitamos pensar en `-Infinity` en caso de encontrar el valor máximo en la matriz; funcionaría bien si eliminamos el valor inicial.

Pero en algunas situaciones complejas, sería mejor visualizar y formular la solución en términos de alguna base, alguna inicialización. Sin embargo, si usted se siente más cómodo sin él, a cada uno lo suyo!

Si tiene más preguntas o sugerencias, únase a nuestra [sala de chat gitter](https://gitter.im/FreeCodeCamp/FreeCodeCamp) ; ¡Y cuéntanos cómo te `reduce` !