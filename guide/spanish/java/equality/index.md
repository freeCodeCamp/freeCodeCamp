---
title: Checking for Equality
localeTitle: Comprobando la igualdad
---
# Comprobando la igualdad

En Java, hay dos formas de verificar si dos variables son "iguales": `==` y `.equals()` . Sin embargo, estos dos métodos no funcionan de la misma manera.

## El operador `==`

La operación de igualdad básica en Java, `==` como en `var1 == var2` , verifica si `var1` y `var2` apuntan a la misma _referencia de objeto_ . Es decir, si `var1` es la misma _instancia_ de una clase en la memoria que `var2` , entonces `var1 == var2` es verdadero.

Sin embargo, si `var1` y `var2` se crearon como dos instancias separadas de una clase (es decir, con la `new` palabra clave), `var1 == var2` será falso. Incluso si ambos objetos contienen exactamente las mismas propiedades y valores, la comparación `==` no pasaría porque no apuntan al mismo objeto en la memoria.

Para tipos de variables primitivas, como `int` y `double` , el operador `==` siempre se puede usar para verificar la igualdad, ya que sus valores se almacenan directamente con la variable (en lugar de como una referencia a otra ranura en la memoria).

```java
int var1 = 1; 
 int var2 = 1; 
 System.out.println(var1 == var2) // true 
 
 MyObject obj1 = new MyObject(); 
 MyObject obj2 = obj1; 
 MyObject obj3 = new MyObject(); 
 
 System.out.println(obj1 == obj2) // true 
 System.out.println(obj1 == obj3) // false 
 System.out.println(obj2 == obj3) // false 
```

## El `.equals()`

La clase de `Object` incorporada en Java, que todas las demás clases se extienden automáticamente, contiene una serie de métodos incorporados útiles. Uno de estos métodos es `equals()` , que toma otro objeto como argumento y devuelve si los dos objetos deben considerarse "iguales" según la lógica relevante para esa clase.

La clase 'String' es uno de los ejemplos más comunes de una clase que anula el método 'equals ()'. Al comparar dos 'Cadenas para la igualdad, debe usar el método' igual a () ', ya que' == 'no funcionará como espera.

```java
String s1 = "Bob"; 
 String s2 = "ob"; 
 s2 = "B" + s2; //s2 now is also "Bob" 
 System.out.println(s1 == s2); //false 
 System.out.println(s1.equals(s2)); //true 
```

Cuando crea una nueva clase en Java, a menudo querrá anular el método `equals()` para proporcionar una manera más significativa de comparar dos objetos de la misma clase. Cómo se implementa este método depende completamente del criterio del desarrollador.

Por ejemplo, puede decidir que dos `Person` deben considerarse "iguales" si su `name` y fecha de `dateOfBirth` son iguales. Esta lógica se implementaría en el método `equals()` su clase `Person` :

```java
public class Person { 
    public String name; 
    public Date dateOfBirth; 
 
    public boolean equals(Person person) { 
        return this.name.equals(person.name) && this.dateOfBirth.equals(person.dateOfBirth); 
    } 
 } 
```

La mayoría de las clases integradas en Java, así como las proporcionadas por bibliotecas populares, implementarán el método `equals()` manera significativa.

Por ejemplo, la interfaz `java.util.Set` especifica que el método `equals()` un `Set` devolverá verdadero si "el objeto especificado también es un conjunto, los dos conjuntos tienen el mismo tamaño, y cada miembro del conjunto especificado está contenido en este conjunto ".

Sin embargo, si una clase no anula la implementación predeterminada de `equals()` , se aplicará la implementación predeterminada, que simplemente utiliza el operador `==` para comparar los dos objetos.