---
title: Strings
localeTitle: Strings (Secuencias de caracteres)
---
# Strings (Secuencias de caracteres)

Los Strings son secuencias de caracteres. En Java, un `String` es un `Object`. Las cadenas no deben confundirse con `char` ya que los caracteres son literalmente 1 valor en lugar de una secuencia de caracteres. Usted puede usar una cadena de 1 valor, sin embargo, es preferible usar `char` cuando necesita 1 carácter.

```java
 String curso = "FCC"; 
 System.out.println(curso instanceof Object); 
```

Salida:
```java
 true 
```

Puede crear un objeto String de las siguientes maneras:

```java
 String str = "Yo soy una Cadena"; // como una cadena literal
 String str = "Yo soy una " + "Cadena"; // como una expresion constante
 String str = new String("Yo soy una Cadena"); // como un objeto String usando el constructor
```

Usted podría estar pensando: ¿Cuál es la diferencia entre los tres?

Bueno, usar la palabra reservada `new` garantiza que se creará un nuevo objeto `String` y se asignará una nueva ubicación de memoria en el `Heap` de memoria [(haga clic aquí para obtener más información)](https://docs.oracle.com/cd/E13150_01/jrockit_jvm/jrockit/geninfo/diagnos/garbage_collect.html) . Los literales de String y las expresiones de cadena constantes se almacenan en caché en tiempo de compilación. El compilador los coloca en el String Literal Pool (Reserva de literales de String) para evitar duplicados. y mejorar el consumo de memoria. La asignación de objetos es costosa y este truco aumenta el rendimiento al crear cadenas. Si utiliza el mismo literal de nuevo, la JVM usa el mismo objeto. Usar el constructor como arriba es casi siempre la peor opción.

En este fragmento de código, ¿Cuántos objetos de cadena se crean?

```java
 String str = "Esta es una cadena"; 
 String str2 = "Esta es una cadena"; 
 String str3 = new String("Esta es una cadena"); 
```

La respuesta es: 2 objetos String son creados. `str` y `str2` refieren al mismo objeto. `str3` tiene el mismo contenido pero usando `new` se fuerza la creación de un nuevo objeto distinto.

Cuando creas un literal de cadena, la JVM lo verifica internamente, lo que se conoce como el `String pool` , para ver si puede encontrar un objeto String similar (ya contenido). Si lo encuentra, devuelve la misma referencia. De lo contrario, simplemente continúa y crea un nuevo objeto String en el pool para que la misma verificación se pueda realizar en el futuro.

Puede comprobar esto usando la comparación rapida de Object `==` y el método `equals()` implementado.

```java
 System.out.println(str == str2); // Imprime 'true' 
 System.out.println(str == str3); // Imprime 'false' 
 System.out.println(str.equals(str3)); // Imprime 'true' 
```

Aquí hay otro ejemplo sobre cómo crear una cadena en Java usando los diferentes métodos:

```java
public class EjemploDeCadenas{ 
 
   public static void main(String args[]) { 
      String s1 = "java";  // creando un String para la cadena literal java 
      char ch[] = {'c','a','d','e','n','a'}; 
      String s2 = new String(ch);  // convirtiendo un arrelgo de caracteres a una cadena 
      String s3 = new String("ejemplo");  // creating un String de Java con la palabra reservada new 
      System.out.println(s1); 
      System.out.println(s2); 
      System.out.println(s3); 
   } 
 } 
```

#### Comparando Cadenas

Si desea comparar el valor de dos variables String, no puede usar ==. Esto se debe a que comparará las referencias de las variables y no los valores que están vinculados a ellas. Para comparar los valores almacenados de las cadenas, se utiliza el método equals.

```java
 boolean equals(Object obj)
```

Este devuelve true si dos objetos son iguales y false si no los son.

```java
 String str = "Hola mundo"; 
 String str2 = "Hola mundo"; 
 
 System.out.println(str == str2); // Imprime false 
 System.out.println(str.equals(str2); // Imprime true 
```

La primera comparación es falsa porque "==" compara las referencias y estas no son iguales.

La segunda comparación es verdadera porque las variables almacenan los mismos valores. En este caso "Hola mundo".

Tenemos varios métodos incorporados en String. El siguiente es un ejemplo del método `lenght()` de String.

```java
public class DemoDeString { 
 
   public static void main(String args[]) { 
      String palindromo = "Anita lava la tina"; 
      int longitud = palindromo.length(); 
      System.out.println( "La longitud de la cadena es : " + longitud ); 
   } 
 } 
```

Esto resultará en - `La longitud de la cadena es : 18`

**Notas**

1.  Los métodos de String utilizan índices basados ​​en cero, a excepción del segundo argumento de `substring()`.
2.  La clase String es final, y sus métodos no se pueden sobreescribir.
3.  Cuando la JVM encuentra un literal de String, se agrega a la reserva de literales de String.
4.  La clase String posee un método de nombre `length()`, mientras que los arreglos tienen un atributo llamado length.
5.  En java, los objetos String son inmutables. Inmutable simplemente significa inmodificable o inalterable. Una vez que se crea el objeto String, sus datos o estado no se pueden cambiar, si no que se crea un nuevo objeto String.

#### Longitud de la cadena

La "longitud" de una cadena es solo el número de caracteres que contiene. Así que "hi" es de longitud 2 y "Hola" es de longitud 4. El método `length()` en una cadena devuelve su longitud, de esta manera:

```java
 String a = "Hola"; 
 int len = a.length();  // la longitud es 4 
```

#### Otros métodos de comparación que también se pueden usar en String son:

1.  equalsIgnoreCase(): compara la cadena sin tener en cuenta mayúsculas o minúsculas.

```java
 String a = "HOLA"; 
 String b = "hola"; 
 System.out.println(a.equalsIgnoreCase(b));   // Imprimira true 
```

2.  compareTo: compara el valor lexicográficamente y devuelve un entero.

```java
 String a = "Sam"; 
 String b = "Sam"; 
 String c = "Ram"; 
 System.out.println(a.compareTo(b));       // 0 
 System.out.prinltn(a.compareTo(c));       // 1 ya que (a>b) 
 System.out.println(c.compareTo(a));       // -1 ya que (c<a) 
```

#### Dividiendo Cadenas

Si Usted quiere dividir una cadena en múltiples partes, puede hacerlo facilmente con `.split()`, esta crea un arreglo con las partes divididas de la cadena.

Ejemplo del uso de un delimitador (",") para dividir una cadena

```java
 String texto = "Hola, Mundo";
 String[] partesDeTexto = texto.split(",");
 System.out.println(partesDeTexto[0]);
 System.out.println(partesDeTexto[1]);
```
El resultado sera:
```java
 Hola
  Mundo
```

Podemos tambien dividir la cadena especificando el índice inicial y final de los caracteres en la cadena. Haremos esto usando la función de Java llamada `.substring()`.

El método `.substring()` puede ser usado de dos modos. Uno con solo el índice inicial y otro con ambos, el índice incial y el índice final. Toma en cuenta que el indice comienza en 0. Ejemplo:

```java
 String texto = "Hola,Mi nombre es Roberto";
 System.out.println(texto.substring(5));
```

Producirá:

```java
 Mi nombre es Roberto
```

Para usarlo con un índice final ten en cuenta que índice final real es el valor pasado al método -1.
Ahora un ejemplo usando `.substring()` con un índice final.
```java

String texto = "Hola,Mi nombre es Roberto";
System.out.println(texto.substring(5,7));
```

El resultado sera:

```java
 Mi
```

**Más Información (en Inglés):**

-   [String Documentation](https://docs.oracle.com/javase/7/docs/api/java/lang/String.html)
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTc0MDc2MDgzMSwxNDQyMjQwMjYxLC0xNT
c0ODM4NjUzLDk0ODA1Mjc1NSwtMTg4ODY2MDMyOCw4NzMwNTkx
OTQsMzM1ODM0NzIyLC0xNDc4NjQxMTAsMTA4OTM1NTAxNiwtMT
U4ODg5NDAyNCwtNjMyMTIwMzc4LC0xNDg3NjE0MTQsODIwNDM0
ODcwLC0xODkyMDc1MTc0LC02Njg2NzA1NDksMTA1MDA4ODA2OS
w4NDg5NTc0MTUsMTkzNjc1MTgxMF19
-->