---
title: Access Modifiers
localeTitle: Modificadores de acceso
---
# Modificadores de acceso

¿Alguna vez ha querido definir cómo las personas accederían a algunas de tus propiedades? No querrías que nadie usara tu ropa interior. Sin embargo, tus amigos cercanos y familiares pueden usar tu suéter y quizás tu automóvil.

De manera similar a cómo establece un nivel de acceso a tus posesiones, Java también controla el acceso. Si desea definir el nivel de acceso para variables, métodos y clases dependiendo de qué otras clases desea que accedan a ellas.

Java proporciona 4 niveles de modificadores de acceso. Esto significa que puede modificar el acceso a una variable, un método o una clase de 4 maneras. Estas 4 formas son: `private`, `public`, `protected` y `default`.

Estos modificadores de acceso pueden aplicarse a campos, métodos y clases (las clases son un caso especial, las veremos al final de este artículo). Aquí hay un resumen rápido[^1] de lo que son los **Niveles de Acceso** para cada **Modificador de Acceso**:

#### Referencia de la tabla de modificadores de acceso:

![Tabla de modificadores de acceso](https://cdn-media-1.freecodecamp.org/imgr/zoMspyn.png)

#### Modificador de acceso privado

Permite acceder a una variable o método solo en la clase en la que se creó. Ninguna otra clase más allá de la clase que creó la variable o el método puede acceder a ella. Esto es muy similar a tus órganos internos. Solo son accesibles para el propietario. Para hacer que una variable o método sea privado, simplemente agregue la palabra clave `private` antes del tipo de variable o método. 

Usemos `private` en un ejemplo de codificación. Si un banco quiere proporcionar una tasa de interés del 10% sobre sus préstamos, se aseguraría de que la variable de la tasa de interés (supongamos que `int tasaDeInteres;` ) permanezca privada, de modo que ninguna otra clase intente acceder a ella y cambiarla. 

Otro ejemplo:

`private String name;`

El ejemplo anterior crea una variable llamada nombre y garantiza que solo sea accesible dentro de la clase a partir de la cual se creó.

Otro ejemplo para un método es

```java
private void setAge(){
 System.out.println("Set Age"); 
 }
 ```
 
El ejemplo anterior garantiza que el método setAge es accesible solo dentro de la clase a partir de la cual se creó y en ningún otro lugar.

#### Modificador de acceso público

El modificador de acceso `public` es el opuesto directo del modificador de acceso `private`. Una clase, método o variable se puede declarar como pública y significa que es accesible desde cualquier clase o paquete (`package`). El modificador de acceso público puede compararse con una escuela pública donde cualquier persona puede solicitar la admisión y ser admitido.

Se puede acceder a una clase pública, método o variable desde cualquier otra clase en cualquier momento.

Por ejemplo, para declarar una clase como pública, todo lo que necesita es:

```java
public class Animal{ 
 
 } 
```

Como tal, se puede acceder a la clase Animal por cualquier otra clase.

```java
public int age; 
 public int getAge(){ 
 } 
```

Las anteriores son formas de especificar una variable y un método como público.

#### El modificador de acceso default

El modificador de acceso `default` es diferente de todos los demás modificadores de acceso en que no tiene palabras clave. Para usar el modificador de acceso predeterminado, simplemente no usa ninguno de los otros modificadores de acceso y eso significa que está usando un modificador de acceso `default`.

Por ejemplo, para usar el modificador de acceso predeterminado para una clase, usas

```java
class Bird{ 
 } 
```

Básicamente, esto significa que está utilizando el modificador de acceso 'default'. El modificador de acceso `default` permite que una variable, método o clase sea accesible por otras clases dentro del mismo paquete (`package`). 

Un **paquete** es una colección de clases relacionadas en un directorio de archivos. Para obtener más información sobre los paquetes, consulte la sección sobre paquetes.

Cualquier variable, método o clase declarada para usar el modificador de acceso `default` no puede ser accedida por ninguna otra clase fuera del paquete desde el cual se declaró.

```java
int age; 
 void setNewAge(){ 
 } 
```

El ejemplo anterior ilustra algunas formas de usar el modificador de acceso `default` para una variable o método. No olvides, que el modificador de acceso predeterminado **no tiene una palabra clave**. La ausencia de los otros 3 modificadores de acceso significa que está utilizando el modificador de acceso `default`.

#### Modificador de acceso protegido

El modificador de acceso `protected` está estrechamente relacionado con el modificador de acceso `default`. El modificador de acceso `protected` tiene las propiedades del modificador de acceso `default` pero con una pequeña mejora.

Variables y métodos son los únicos que utilizan el modificador de acceso `protected`. La pequeña mejora es que una clase fuera del paquete (`package`) de la clase desde la cual se declaró la variable o el método, puede acceder a dicha variable o método. Sin embargo, esto SÓLO es posible si se hereda de la clase original.

La clase de otro paquete que tiene acceso a variables o métodos `protected` debe haber extendido de la clase que creó las variables o métodos.

**Nota:** Ten en cuenta que sin la ventaja de la herencia, un modificador de acceso `default` tiene exactamente el mismo acceso que un modificador de acceso protegido.

Los ejemplos de uso del modificador de acceso `protected` se muestran a continuación:

```java
protected int edad; 
 protected String getNombre(){ 
  return "Mi nombre es Tú"; 
 } 
```

#### Modificadores de acceso en las clases

Por defecto, las clases solo pueden tener 2 modificadores:

*   público
*   sin modificador (modificador `default`)

Entonces, ¿esto significa que las clases nunca se pueden establecer como `private` o `protected` ?

Esto es lógico, ¿por qué querrías hacer una clase privada? Ninguna otra clase podría usarlo. Pero a veces, puedes incrustar una clase en otra clase. Estas clases especiales, clases `inner classes` , pueden configurarse como privadas o protegidas para que solo su clase circundante pueda acceder a ellas:

```java
public class Carro { 
    private String marca; 
    private Motor motor; 
    // clase externa... 
    private class Motor { 
        // clase interna... 
    } 
 } 
```

En el ejemplo anterior, solo la clase `Carro` puede usar la clase `Motor` . Esto puede ser útil en algunos casos.

Otras clases nunca pueden configurarse como `protected` o `private` , porque no tiene sentido. El modificador de acceso `protected` se usa para hacer que el `package-private` pero con la opción de ser accesible a las subclases. No existe ningún concepto como 'subpaquetes' o 'herencia de paquetes' en java.

### Fuentes

[1\. Oracle docs en modificadores de acceso](https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html "Oracle Docs")
