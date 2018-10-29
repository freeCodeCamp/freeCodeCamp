---
title: Regular Expressions Reference
localeTitle: Referencia de expresiones regulares
---
## Referencia de expresiones regulares

En JavaScript, las expresiones regulares son una abreviatura utilizada para coincidir con la parte deseada de una cadena. Estos son beneficiosos cuando se trata de manipular o validar las cadenas utilizadas en su código.

### Sintaxis

Las expresiones regulares se componen de dos partes: el `pattern` y las `flags` (opcional). El patrón se escribe entre dos barras diagonales, seguidas de los indicadores opcionales: `var exp = /pattern/flags` .

#### Patrones

El uso de caracteres alfanuméricos (AZ, az, 0-9) permite una coincidencia directa. Sin embargo, el poder real de las expresiones regulares viene con las clases de caracteres.

Digamos, por ejemplo, que desea que todos los lugares tengan una cadena que tenga un número del 0 al 9. En lugar de llamar explícitamente a `/[0-9]/` , puede usar la clase de caracteres especiales de `/\d/` . La barra invertida escapa al carácter `d` (así que no coincida con la letra `d` ), sino que utiliza las habilidades especiales de emparejamiento de `\d` .

Este mismo principio se aplica a los caracteres no numéricos, espacios en blanco y otros grupos de concordancia amplia. Las expresiones regulares pueden volverse aún más sofisticadas con el uso de ciertos modificadores, como el carácter `+` .

Este cuantificador le permite hacer coincidir el carácter anterior en su patrón una o más veces. `/s+/` se correspondería con las `s` en el `desert` y las dos `s` 's en `dessert` !

Hay muchos más modificadores que permiten que tu patrón coincida con lo que necesites. Consulte la sección Más información a continuación para ver todas las opciones de caracteres posibles para usar en expresiones regulares.

#### Banderas

Hay 5 marcas que puede usar para aplicar reglas específicas a toda la expresión regular que está escribiendo. Son:

`g` - el partido global; esto le permite hacer coincidir todas las instancias de su expresión, en lugar de detenerse después de la primera aparición.

`i` - la coincidencia de caso ignorar (autoexplicativo)

`m` - el partido multilínea; esto aplica tu patrón a cada línea como nueva; Si está buscando una línea que comienza con un patrón particular, esto lo hace para todas las líneas, en lugar de solo la primera.

`u` - el partido de Unicode; Esto indica que debe leer su patrón como Unicode en lugar de texto simple.

`y` - el fósforo pegajoso; esto coincide con su patrón comenzando solo en el índice que se encuentra en la propiedad `RegExp.lastIndex`

### Creando una expresión regular

Una expresión regular es un tipo de objeto. Se puede construir con el constructor RegExp o escrito como un valor literal encerrando el Patrón en caracteres de barra diagonal (/).
```
var re1 = new RegExp (" abc ") ; 
 var re2 = / abc /; 
```

Ambos objetos de expresión regular representan el mismo patrón: un un personaje seguido de ab seguido de a c.

### El objeto RegExp

`RegExp` es un constructor que crea un objeto a partir del patrón de expresión regular que creas. Además de la notación literal descrita anteriormente, también puede usar el formato de constructor para crear una expresión regular: `new RegExp(pattern[, flags])`

### Prueba de partidos
```
console.log(/abc/.test(" abcde ")); 
 // → true 
 console.log(/ abc /.test(" abxde ")); 
 // → false 
```

### Emparejando un conjunto de personajes
```
console . log (/[0123456789]/. test (" in 1992") ); 
 // → true 
 console . log (/[0 -9]/. test (" in 1992") ); 
 // → true 
```

### Patrones de elección
```
var animalCount = /\ b \ d + ( pig | cow | chicken )s ?\ b /; 
 console . log ( animalCount . test ("15 pigs ") ); 
 // → true 
 console . log ( animalCount . test ("15 pigchickens ") ); 
 // → false 
```

#### Métodos

Lo más probable es que utilice expresiones regulares en los métodos de `String` , como `String.replace()` , pero hay un puñado de métodos que pertenecen al objeto `RegExp` .

Por ejemplo, `RegExp.test()` devolverá un valor booleano para determinar si existe una coincidencia entre el patrón de expresión regular y la cadena en cuestión. `RegExp.toString()` convertirá el objeto de expresión en una cadena, lo que puede ser útil al ejecutar pruebas en su código.

El primer argumento también puede ser una expresión regular, en cuyo caso se reemplaza la primera coincidencia de la expresión regular. Cuando se agrega una opción ag (para global) a la expresión regular, se reemplazarán todas las coincidencias en la cadena, no solo la primera.
```
console . log (" Borobudur ". replace (/[ ou ]/ , "a ") ); 
 // → Barobudur 
 console . log (" Borobudur ". replace (/[ ou ]/g , "a ") ); 
 // → Barabadar 
```

### Más información:

*   [Aquí puede leer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) sobre todos los caracteres de coincidencia de patrones, propiedades de objetos, ver algunos ejemplos y más.
    
*   [Este es un gran sitio](https://regex101.com/) que le permite probar patrones de expresión regular en tiempo real, guardar sus favoritos y explorar patrones creados por otros.
