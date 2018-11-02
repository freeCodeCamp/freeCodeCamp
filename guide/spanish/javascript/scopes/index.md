---
title: Scopes
localeTitle: Alcances
---
Si ha estado programando en JavaScript por un tiempo, indudablemente se ha encontrado con un concepto conocido como `scope` . ¿Qué es el `scope` ? ¿Por qué deberías tomarte el tiempo para aprenderlo?

En lenguaje de programador, el `scope` es el **contexto actual de ejecución** . ¿Confuso? Echemos un vistazo a la siguiente pieza de código:
```
var foo = 'Hi, I am foo!'; 
 
 var baz = function () { 
  var bar = 'Hi, I am bar too!'; 
    console.log(foo); 
 } 
 
 baz(); // Hi, I am foo! 
 console.log(bar); // ReferenceError... 
```

Este es un ejemplo simple, pero hace un buen trabajo de ilustrar lo que se conoce como _alcance léxico_ . JavaScript, y casi cualquier otro lenguaje de programación tiene un _alcance léxico_ . Existe otro tipo de alcance conocido como _Ámbito dinámico_ , pero no lo discutiremos.

Ahora, el término _ámbito léxico_ suena sofisticado, pero como verás, en principio es muy simple. En un ámbito léxico, hay dos tipos de ámbitos: el _ámbito global_ y _el ámbito local_ .

Antes de escribir la primera línea de código en su programa, se crea un _ámbito global_ para usted. Esto contiene todas las variables que declara en su programa **fuera de cualquier función** .

En el ejemplo anterior, la variable `foo` está en el alcance global del programa, mientras que la `bar` variables se declara dentro de una función y, por lo tanto, está **en el alcance local de esa función** .

Vamos a desglosar el ejemplo línea por línea. Si bien podría estar confundido en este momento, le prometo que tendrá una comprensión mucho mejor cuando termine de leer esto.

En la línea 1 estamos declarando la variable `foo` . Nada demasiado lujoso aquí. Llamemos a esto una referencia de tamaño de la mano izquierda (LHS) a `foo` , porque estamos asignando un valor a `foo` y está en el lado izquierdo del signo `equal` .

En la línea 3, estamos declarando una función y asignándola a la variable `baz` . Esta es otra referencia de LHS a `baz` . Le estamos asignando un valor (recuerde, ¡las funciones también son valores!). Esta función se llama entonces en la línea 8. Esto es un RHS, o una referencia del lado derecho a `baz` . Estamos recuperando el valor de `baz` , que en este caso es una función y luego lo invocamos. Otra referencia de RHS a `baz` sería si asignáramos su valor a otra variable, por ejemplo `foo = baz` . Esta sería una referencia de LHS a `foo` y una referencia de RHS a `baz` .

Las referencias de LHS y RHS pueden parecer confusas, pero son importantes para discutir el alcance. Piénselo de esta manera: una referencia de LHS está asignando un valor a la variable, mientras que una referencia de RHS está recuperando el valor de la variable. Son solo una forma más breve y conveniente de decir "recuperar el valor" y "asignar un valor".

Analicemos ahora lo que está sucediendo dentro de la función misma.

Cuando el compilador compila el código dentro de una función, ingresa al **alcance local de** la función.

En la línea 4, se declara la `bar` variable. Esta es una referencia de LHS a la `bar` . En la siguiente línea, tenemos una referencia de RHS para `foo` dentro de `console.log()` . Recuerde, estamos recuperando el valor de `foo` y luego pasándolo como un argumento al método `console.log()` .

Cuando tenemos una referencia RHS a `foo` , el compilador busca la declaración de la variable `foo` . El compilador no lo encuentra en la función en sí, ni en el **ámbito local de** la **función,** por lo que **sube un nivel: al ámbito global** .

En este punto, probablemente esté pensando que el alcance tiene algo que ver con las variables. Eso es correcto. Un ámbito puede considerarse como un contenedor para variables. Todas las variables que se crean dentro de un ámbito local solo son accesibles en ese ámbito local. Sin embargo, todos los ámbitos locales pueden acceder al ámbito global. (Sé que probablemente estés aún más confundido ahora, pero solo aguanta algunos párrafos más).

Entonces el compilador sube al alcance global para encontrar una referencia de LHS a la variable `foo` . Encuentra uno en la línea 1, por lo que recupera el valor de la referencia de LHS, que es una cadena: `'Hi, I am foo!'` . Esta cadena se envía al método `console.log()` y se envía a la consola.

El compilador ha terminado de ejecutar el código dentro de la función, por lo que volvemos a la línea 9. En la línea 9, tenemos una referencia RHS para la `bar` variables.

Ahora, la `bar` se declaró en el ámbito local de `baz` , pero hay una referencia de RHS para la `bar` en el ámbito global. Dado que no hay una referencia de LHS para la `bar` en el ámbito global, el compilador no puede encontrar un valor para la `bar` y lanza un ReferenceError.

Pero, podría preguntarse, si la función puede buscar variables externas, o si un alcance local puede asomarse al alcance global para encontrar referencias de LHS, ¿por qué el alcance global no puede ver un alcance local? Bueno, así es como funciona el alcance léxico.
```
... // global scope 
 var baz = function() { 
  ... // baz's scope 
 } 
 ... /// global scope 
```

Este es el mismo código de arriba que ilustra el alcance. Esto forma una especie de jerarquía que sube al alcance global:

`baz -> global` .

Entonces, si hay una referencia RHS para una variable dentro del alcance de `baz` , se puede cumplir con una referencia LHS para esa variable en el alcance global. Pero lo contrario **no** es **cierto** .

¿Y si tuviéramos otra función dentro de `baz` ?
```
... // global scope 
 var baz = function() { 
  ... // baz's scope 
 
  var bar = function() { 
     ... // bar's scope. 
  } 
 
 } 
 ... /// global scope 
```

En este caso, la jerarquía o la **cadena de alcance** se vería así:

`bar -> baz -> global`

Cualquier referencia de RHS dentro del alcance local de la `bar` se puede completar con las referencias de LHS en el alcance global o el alcance de `baz` , pero una referencia de la RHS en el alcance de `baz` no se puede completar con una referencia de LHS en el alcance de la `bar` .

**Solo puedes atravesar una cadena de alcance, no subir.**

Hay otras dos cosas importantes que debe saber sobre los ámbitos de JavaScript.

1.  Los ámbitos son declarados por funciones, no por bloques.
2.  Las funciones pueden ser referenciadas hacia adelante, las variables no pueden.

Observe (cada comentario describe el alcance en la línea en la que está escrito):

\`\` \` // outer () está en el ámbito aquí porque las funciones pueden ser referenciadas hacia adelante
```
function outer() { 
 
    // only inner() is in scope here 
    // because only functions are forward-referenced 
 
    var a = 1; 
 
    //now 'a' and inner() are in scope 
 
    function inner() { 
        var b = 2 
 
        if (a == 1) { 
            var c = 3; 
        } 
 
        // 'c' is still in scope because JavaScript doesn't care 
        // about the end of the 'if' block, only function inner() 
    } 
 
    // now b and c are out of scope 
    // a and inner() are still in scope 
 
 } 
 
 // here, only outer() is in scope 
```

\`\` \`

# Referencias

1.  [Alcances y cierres](https://github.com/getify/You-Dont-Know-JS/tree/master/scope%20%26%20closures) de Kyle Simpson. Entra en más detalles de cómo funciona el mecanismo de alcance, y también tiene una descripción superficial de cómo funciona el compilador de JavaScript, así que si estás interesado en eso, ¡definitivamente dale una lectura! Es gratis en GitHub y se puede comprar en O'Reilly.
2.  [Secretos del JavaScript Ninja](https://www.amazon.com/Secrets-JavaScript-Ninja-John-Resig/dp/1617292850/ref=pd_lpo_sbs_14_img_0?_encoding=UTF8&psc=1&refRID=YMC2TB2C0DFHTQ3V62CA) por John Resig y Bear Bibeault. Una gran guía para una comprensión más profunda de JavaScript.