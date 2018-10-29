---
title: Inline Function
localeTitle: Función en línea
---
# Función en línea

## Introducción

La función en línea es una función especial definida en C ++ y se expande en línea cuando se llama.

Ahora, ¿qué significa eso exactamente?

Cada vez que se llama a una función, se necesita mucho tiempo adicional para realizar una serie de actividades, como saltar a la función, guardar registros, empujar los argumentos en la pila y volver a la función de llamada. Así que lleva mucho tiempo. Pero una función en línea es una función en la que se ha solicitado al compilador que realice una expansión en línea. Cuando la función solicita al compilador que inserte el cuerpo completo de la función en cada lugar al que se llama la función, en lugar de generar código para llamar a la función en el lugar en el que se define.

Sin embargo, no podemos garantizar que todas las funciones declaradas en línea estén en línea. Porque cuando declaramos una función como en `inline` , es una solicitud, no un comando. El compilador puede ignorar la solicitud de inscripción en las siguientes situaciones: 1) Si la función contiene bucle por ejemplo `for` bucle, `while` bucle, `do-while` bucle etc. 2) Si la función contiene un `switch` o `goto` . 3) Si la función no devuelve nada, incluso si se menciona el tipo de retorno (que no sea `void` por supuesto). 4) Si la función contiene una variable estática. 5) Si la función contiene una llamada recursiva.

\`\` \`c ++

## sintaxis: -

nombre de _función de tipo de_ retorno en línea (lista de argumentos) {

// cuerpo de la función

}
```
## When to use Inline function 
 
 * When the function performs small tasks and is called very often. 
 * When performance is important. 
 * Instead of a macro. 
```

c ++

# incluir

utilizando namespace std;

clase MathOperation {

público:
```
inline int add(int x, int y){ 
 
  return(x+y); 
 } 
 
 inline float div(int n1, float n2){ 
 
  return(n1/n2); 
 } 
```

};

int main () {

MathOperation obj;

cout << "La adición es:" << obj.add (34,12) << <"\\ n"; cout << "La división es:" << obj.div (12,3.4) << "\\ n";

devuelve 0;

} \`\` \`

## Ventajas de la función Inline

*   Guarda la sobrecarga de devolución de llamada de una función.
*   Aumenta la localidad de referencia mediante el uso de la memoria caché de instrucciones.
*   Acelera tu programa al evitar los gastos generales de llamadas a funciones.
*   Guarda la sobrecarga de las operaciones de empuje / pop de las variables en la pila, cuando ocurren llamadas a funciones.
*   Es posible poner una definición de función en un archivo de encabezado, es decir, se puede incluir en varias unidades de compilación, sin que el vinculador se queje.

## Desventajas de la función en línea

*   Cuando se usa en un encabezado, hace que su archivo de encabezado sea más grande con información que a los usuarios no les importa.
*   Aumenta el tamaño del ejecutable debido a la expansión del código.
*   El inline de C ++ se resuelve en tiempo de compilación. Lo que significa que si cambia el código de la función en línea, necesitarías recompilar todo el código usándolo para asegurarte de que se actualizará.
*   Como se mencionó anteriormente, aumenta el tamaño del archivo ejecutable, lo que puede causar problemas en la memoria. Más errores en el número de páginas, lo que reduce el rendimiento del programa.