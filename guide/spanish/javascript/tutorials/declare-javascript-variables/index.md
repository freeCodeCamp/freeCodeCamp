---
title: Declare Variables
localeTitle: Declarar variables
---
# Declarar variables

Las declaraciones de variables de JavaScript se pueden clasificar en tres componentes distintos: el tipo de variable, el nombre de la variable y el valor de la variable.

```js
    var myName = "Rafael"; 
```

Rompamos la línea de código anterior en las piezas que la conforman:

```js
    var/const/let 
```

Las variables de JavaScript pueden tener tres tipos de declaración: var, const y let. Las variables de tipo var son globales, si se declaran fuera de una función, se puede acceder a ellas mediante cualquier archivo JS (o la consola), y si se crean dentro de una función, se puede acceder a ellas independientemente del alcance del bloque. Las variables de tipo let están limitadas en su alcance a su bloque. Vea el siguiente ejemplo para la diferencia.

```js
     function varTest() { 
      var x = 1; 
      if (true) { 
        var x = 2;  // same variable! 
        console.log(x);  // 2 
      } 
      console.log(x);  // 2 
    } 
 
    function letTest() { 
      let x = 1; 
      if (true) { 
        let x = 2;  // different variable 
        console.log(x);  // 2 
      } 
      console.log(x);  // 1 
    } 
```

Las variables de tipo const tienen el mismo alcance que las variables let (alcance de bloque), pero son inmutables. Cualquiera que sea el valor que se asigne a una variable de tipo constante, debe suceder cuando se declara la variable, y JavaScript arrojará un error si la variable se cambia más adelante.

```js
    const genre = "non-fiction"; 
    console.log(genre); // "non-fiction"; 
    genre = "fantasy"; // error 
```

Ahora que podemos determinar cuál es el tipo de variable, echemos un vistazo al nombre. Los nombres de las variables de JavaScript están escritos en formato de `camel case` . Un ejemplo de camel case es: `camelCase` . En el contexto de nuestro ejemplo:

```js
    myName 
```

El nombre también es que volveremos a acceder a la variable más tarde:

```js
    console.log(myName); // "Rafael" 
```

Finalmente, nuestro valor:

```js
    "Rafael" 
```

JavaScript se escribe dinámicamente, lo que significa que cualquier variable dada puede representar cualquier tipo de datos en un momento dado. Por ejemplo:

```js
    var example = "This is an example"; 
    example = [0, 1, 2, 3] 
    example = {test: "Result"} 
    example = 5 
```

Todas esas declaraciones son perfectamente válidas: las variables de JavaScript pueden saltar de una cadena a una matriz para objetar un entero.

### Declarar objeto como const

Como se mencionó anteriormente, las variables const son valores de medios inmutables asignados a dicha variable en el momento de la declaración, pero no se pueden actualizar, pero hay un punto a tener en cuenta en caso de que la declaración del objeto con const. El objeto de tipo const tampoco se puede actualizar una vez definido, pero las propiedades de object cab be. Por ejemplo.

```js
    const Car1 = { 
        name: 'BMW', 
        model: 'X1', 
        color: 'black' 
    } 
```

Aquí, no podemos actualizar el objeto, pero podemos actualizar las propiedades accediendo a través del operador punto (.) Como se muestra a continuación.

```js
    Car1.color = 'Red'; 
    console.log(Car1); 
    O/P - {name: "BMW", model: "X1", color: "Red"} 
```

Si tenemos que hacer que el objeto enitre sea inmutable (incluidas las propiedades), entonces tenemos que usar el método de congelación.