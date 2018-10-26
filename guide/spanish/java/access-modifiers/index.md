---
title: Access Modifiers
localeTitle: Modificadores de acceso
---
# Modificadores de acceso

¿Alguna vez has querido definir cómo las personas accederían a algunas de tus propiedades? No querrías que nadie usara tu ropa interior. Sin embargo, tus amigos cercanos y familiares pueden usar tu suéter y quizás tu automóvil.

De manera similar a cómo estableces un nivel de acceso a tus posesiones, Java también controla el acceso. Tú quieres definir el nivel de acceso para variables, métodos y clases dependiendo de qué otras clases tú quieres que accedan a ellas.

Java proporciona 4 niveles de modificadores de acceso. Esto significa que puedes modificar el acceso a una variable, un método o una clase de 4 maneras. Estas 4 formas son privado (`private`), público (`public`), protegido (`protected`) y por defecto o predeterminado (`default`).

Estos modificadores de acceso pueden aplicarse a campos, métodos y clases (las clases son un caso especial, las veremos al final de este artículo). Aquí hay un resumen rápido 1 de lo que son los niveles de acceso para cada Modificador de Acceso :

#### Referencia de la tabla de modificadores de acceso:

![Tabla de modificadores de acceso](https://i.imgur.com/zoMspyn.png)

#### Modificador de acceso privado

Permite acceder a una variable o método sólo en la clase en la que se creó. Ninguna otra clase más allá de la clase que creó la variable o el método puede acceder a ella. Esto es muy similar a sus órganos internos. Sólo son accesibles para el propietario. Para hacer que una variable o método sea privado, simplemente agregue la palabra clave privada antes del tipo de variable o método, como `private int age`.

Usemos privado (`private`) en un ejemplo de codificación. Si un banco quiere proporcionar una tasa de interés del 10% sobre sus préstamos, se aseguraría de que la variable de la tasa de interés (supongamos que `int int_rate;` ) permanezca privada, de modo que ninguna otra clase intente acceder a ella y cambiarla. Por ejemplo;

`private String name;`

El ejemplo anterior crea una variable llamada nombre y garantiza que solo sea accesible dentro de la clase a partir de la cual se creó.

Otro ejemplo para un método es `java private void setAge(){ System.out.println("Set Age"); }` El ejemplo anterior garantiza que el método setAge es accesible sólo dentro de la clase a partir de la cual se creó y en ningún otro lugar.

#### Modificador de acceso público

El modificador de acceso público (`public`) es el opuesto directo del modificador de acceso privado (`private`). Una clase, método o variable se puede declarar como pública (`public`) y significa que es accesible desde cualquier lugar. El modificador de acceso `público` puede compararse con una escuela pública donde cualquier persona puede solicitar la admisión y ser admitido.

Se puede acceder a una clase pública, método o variable desde cualquier otra clase en cualquier momento.

Por ejemplo, para declarar una clase como pública (`public`), todo lo que necesita es usar la palabra clave `public` antes del nombre de la clase:

```java
public class Animal{ 
 
 } 
```

Como tal, se puede acceder a la clase `Animal` por cualquier otra clase.

De manera similar, tú puedes usar la palabra clave `public` para marcar variables y métodos, así:

```java
public int age; 
 public int getAge(){ 
 } 
```

Más arriba hay formas de especificar una variable y un método como público.

#### El modificador de acceso predeterminado

El modificador de acceso predeterminado (`default`) es diferente de todos los demás modificadores de acceso en que no tiene palabra clave. Para usar el modificador de acceso predeterminado, simplemente no usas ninguno de los otros modificadores de acceso y eso simplemente significa que estás usando un modificador de acceso predeterminado (`default`).

Por ejemplo, para usar el modificador de acceso predeterminado (`default`) para una clase, usas

```java
class Bird{ 
 } 
```

Básicamente, esto significa que estás utilizando el modificador de acceso predeterminado (`default`). Éste permite que una variable, método o clase sea accesible por otras clases dentro del mismo paquete. Un paquete es una colección de clases relacionadas en un directorio de archivos. Para obtener más información sobre los paquetes, consulta la sección sobre paquetes.

Cualquier variable, método o clase declarada para usar el modificador de acceso predeterminado no puede ser accedida por ninguna otra clase fuera del paquete desde el cual se declaró.

```java
int age; 
 void setNewAge(){ 
 } 
```
No olvides que el modificador de acceso predeterminado (`default`) no tiene palabra clave. la ausencia de los 3 otros modificadores de acceso significa que estás utilizando el modificador de acceso predeterminado (`default`).

Más arriba hay algunas formas de usar el modificador de acceso predeterminado para una variable o método.

#### Modificador de acceso protegido

El modificador de acceso protegido (`protected`) está estrechamente relacionado con el modificador de acceso `predeterminado`. El modificador de acceso protegido (`protected`) tiene las propiedades del modificador de acceso predeterminado pero con una pequeña mejora.

Las variables y los métodos son los únicos que utilizan el modificador de acceso protegido (`protected`). La pequeña mejora es que una clase fuera del paquete de clase desde la cual se declaró la variable o el método, puede acceder a dicha variable o método. Sin embargo, esto SOLAMENTE es posible si se hereda de la clase original.

La clase de otro paquete que tiene acceso a variables o métodos `protegidos` debe haber extendido la Clase que creó las variables o métodos.

Tenga en cuenta que sin la ventaja de la herencia, un modificador de acceso `predeterminado` tiene exactamente el mismo acceso que un modificador de acceso protegido (`protected`).

Los ejemplos de uso del modificador de acceso protegido se muestran a continuación:

```java
protected int age; 
 protected String getName(){ 
  return "My Name is You"; 
 } 
```

#### Modificadores de acceso en las clases

Por defecto, las clases solo pueden tener 2 modificadores:

*   Público (`public`)
*   sin modificador (modificador predeterminado `default`)

Entonces, ¿esto significa que las clases nunca se pueden establecer como privadas (`private`) o protegidas (`protected`) ?

Esto es lógico, ¿por qué querrías hacer una clase privada? Ninguna otra clase podría usarlo. Pero a veces, puedes incrustar una clase en otra clase. Estas clases especiales, clases `inner classes` , pueden configurarse como privadas (`private`) o protegidas (`protected`) para que sólo la clase que las encapsula pueda acceder a ellas:

```java
public class Car { 
    private String brand; 
    private Engine engine; 
    // ... 
    private class Engine { 
        // ... 
    } 
 } 
```

En el ejemplo anterior, solo la clase `Car` puede usar la clase `Engine` . Esto puede ser útil en algunos casos.

Otras clases nunca pueden configurarse como `protected`(protegidas) o `private`(privadas), porque no tiene sentido. El modificador de acceso protegido (`protected`) se usa para hacer paquetes protegidos (`package-private`) pero con la opción de ser accesible a las subclases. No existe ningún concepto como 'subpaquetes' o 'herencia de paquetes' en java.

### Fuentes

[1\. Oracle docs en modificadores de acceso](https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html "Oracle Docs")
