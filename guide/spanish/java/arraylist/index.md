---
title: ArrayList
localeTitle: Lista de arreglo
---
# Lista de arreglo

ArrayList es parte de algo que se llama el _marco de_ la _Colección_ .

El _marco_ de recopilación consta de todas las interfaces y clases que pueden contener un conjunto de valores (similar a las [matrices](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html) ). **ArrayList** es una clase que se encuentra en esta jerarquía y se conoce como un _**objeto Collection**_ . Implementa la interfaz de _lista_ que a su vez implementa la interfaz de _colección_ . Esta interfaz de _colección_ se puede encontrar en el paquete `java.util` . Tendrá que importar este paquete.

ArrayList es una clase que se utiliza para crear matrices dinámicas. Es más lento que los arreglos regulares pero permite mucha manipulación. Puede inicializarse para tener un tamaño específico o tendrá un tamaño predeterminado de 10 unidades.

`java ArrayList<String> names = new ArrayList<>(); ArrayList<Integer> ages = new ArrayList<>(5);`

En el fragmento de código anterior, las separaciones de ángulo `<>` toman un tipo de datos genérico como argumento que especifica el tipo de datos de los elementos en el ArrayList. Los primeros `names` ArrayList se especifican como que contienen elementos de _cadena_ . Por lo tanto, solo se permitirá que contenga elementos de cadena. Su tamaño no está especificado, por lo que tendrá un tamaño predeterminado de 10. La segunda `ages` ArrayList ha especificado que solo contendrá números enteros. Pero ArrayList no puede contener primitivas, solo contiene objetos. Por lo tanto, para hacer que almacene enteros, flotadores, etc., podemos usar clases de envoltura. `names` tendrán un tamaño especificado de 5.

Dado que ArrayList implementa la _Lista_ , se puede crear un ArrayList usando la siguiente sintaxis: `java List<Integer> students = new ArrayList<>();`

Un ArrayList es dinámico, lo que significa que aumentará de tamaño si es necesario y, de manera similar, se reducirá si se eliminan elementos de él. Esto es lo que lo hace mejor usar que los arreglos normales.

Un ArrayList nos permite acceder a elementos al azar. ArrayList es similar a _Vector_ de muchas maneras. Pero es más rápido que los vectores. Lo principal a tener en cuenta es que: los vectores son más rápidos que los arreglos, pero los arreglos de arrays no.

Por lo tanto, cuando se trata de elegir entre los dos, si la velocidad es crítica, entonces se deben considerar los Vectores, de lo contrario las ArrayLists son mejores cuando se trata de almacenar una gran cantidad de elementos y acceder a ellos de manera eficiente.