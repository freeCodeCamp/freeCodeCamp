---
title: Strings
localeTitle: Cadena de caracteres
---
# Cadena de caracteres

Las cadenas son secuencias de caracteres. En Java, una `String` es un `Object` . Las cadenas no deben confundirse con `char` ya que los caracteres son literalmente 1 valor en lugar de una secuencia de caracteres. Aún puede usar 1 valor dentro de una cadena, sin embargo, es preferible usar `char` cuando está verificando 1 carácter.

```java
String course = "FCC"; 
 System.out.println(course instanceof Object); 
```

Salida:
```
true 
```

Puede crear un objeto de cadena de las siguientes maneras:

1.  `String str = "I am a String"; //como un literal de cadena`
2.  `String str = "I am a " + "String"; //como una expresión constante`
3.  `String str = new String("I am a String"); //como un objeto de cadena usando el constructor`
Usted podría estar pensando: ¿Cuál es la diferencia entre los tres?

Bueno, usar la `new` palabra clave garantiza que se creará un nuevo objeto `String` y se asignará una nueva ubicación de memoria en el `Heap` memoria [(haga clic aquí para obtener más información)](https://docs.oracle.com/cd/E13150_01/jrockit_jvm/jrockit/geninfo/diagnos/garbage_collect.html) . Cuerda Los literales y las expresiones de cadena constantes se almacenan en caché en tiempo de compilación. El compilador los coloca en el String Literal Pool para evitar duplicados. y mejorar el consumo de memoria. La asignación de objetos es costosa y este truco aumenta el rendimiento al crear cadenas. Si utiliza el mismo literal de nuevo, la JVM usa el mismo objeto. Usar el contructor como el de arriba es casi siempre una opción peor.

En este fragmento de código, ¿cuántos objetos de cadena se crean?

```java
String str = "This is a string"; 
 String str2 = "This is a string"; 
 String str3 = new String("This is a string"); 
```

La respuesta es: 2 objetos String son creados. `str` y `str2` refieren al mismo objeto. `str3` tiene el mismo contenido pero usando `new` forzados. La creación de un objeto nuevo, distinto.

Cuando creas un literal de cadena, la JVM verifica internamente, lo que se conoce como el `String pool` , para ver si puede encontrar un similar (contenido) Objeto de cuerda. Si lo encuentra, devuelve la misma referencia. De lo contrario, simplemente continúa y crea un nuevo objeto String en el grupo para que El mismo control se puede realizar en el futuro.

Puede probar esto usando la comparación de objetos rápida, tragar `==` y los `equals()` implementados `equals()` .

```java
System.out.println(str == str2); // esto impreme 'true' 
 System.out.println(str == str3); // esto impreme 'false' 
 System.out.println(str.equals(str3)); // esto impreme 'true' 
```

Aquí hay otro ejemplo sobre cómo crear una cadena en Java usando los diferentes métodos:

```java
public class StringExample{ 
 
   public static void main(String args[]) { 
      String s1 = "java";  // creando cadena por literal de cadena de Java 
      char ch[] = {'s','t','r','i','n','g','s'}; 
      String s2 = new String(ch);  // convertir la char array a una cadena
      String s3 = new String("example");  // creando una cadena Java por una nueva palabra clave 
      System.out.println(s1); 
      System.out.println(s2); 
      System.out.println(s3); 
   } 
 } 
```

#### Comparando cuerdas

Si desea comparar el valor de dos variables de cadena, no puede usar ==. Esto se debe a que comparará las referencias de las variables. Y no los valores que están vinculados a ellos. Para comparar los valores almacenados de las cadenas, se utiliza el método igual.

```java
boolean equals(Object obj) 
```

Devuelve true si dos objetos son iguales y false de lo contrario.

```java
String str = "Hello world"; 
 String str2 = "Hello world"; 
 
 System.out.println(str == str2); // Esto impreme falso 
 System.out.println(str.equals(str2); // Esto impreme  cierto 
```

La primera comparación es falsa porque "==" mira las referencias y no son lo mismo.

La segunda comparación es verdadera porque las variables almacenan los mismos valores. En este caso "Hola mundo".

Tenemos varios métodos incorporados en String. El siguiente es un ejemplo del método String Length ().

```java
public class StringDemo { 
 
   public static void main(String args[]) { 
      String palindrome = "Dot saw I was Tod"; 
      int len = palindrome.length(); 
      System.out.println( "String Length is : " + len ); 
   } 
 } 
```

Esto resultará en - `String Length is : 17`

**La respuesta es: 2** objetos String son creados. **Notas**

1.  Los métodos de cadena utilizan índices basados ​​en cero, a excepción del segundo argumento de `substring()` .
2.  La clase String es final, sus métodos no pueden ser anulados.
3.  Cuando JVM encuentra el literal de cadena, se agrega a la agrupación de cadena literal.
4.  La clase de cadena posee una `length()` nombre de método `length()` , mientras que las matrices tienen una longitud de nombre de atributo.
5.  En java, los objetos de cadena son inmutables. Inmutable simplemente significa inmodificable o inmutable. Una vez que se crea el objeto de cadena, sus datos o estado no se pueden cambiar, pero se crea un nuevo objeto de cadena.

Longitud de la cuerda

La "longitud" de una cadena es solo el número de caracteres que contiene. Así que "hi" es la longitud 2 y "Hello" es la longitud 5. El método length () en una cadena devuelve su longitud, de esta manera:

```java
String a = "Hello"; 
 int len = a.length();  // len es 5 
```

#### Otros métodos de comparación que también se pueden usar en la Cadena son:

1.  equalsIgnoreCase (): compara la cadena sin tener en cuenta la sensibilidad del caso.

```java
String a = "HELLO"; 
 String b = "hello"; 
 System.out.println(a.equalsIgnoreCase(b));   // Esto va a impremir 'true' 
```

2.  compareTo: compara el valor lexicográficamente y devuelve un entero.

```java
String a = "Sam"; 
 String b = "Sam"; 
 String c = "Ram"; 
 System.out.println(a.compareTo(b));       // 0 
 System.out.prinltn(a.compareTo(c));       // 1 porque (a>b) 
 System.out.println(c.compareTo(a));       // -1 porque (c<a) 

```
