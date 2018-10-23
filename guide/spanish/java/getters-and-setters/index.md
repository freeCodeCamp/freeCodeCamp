---
title: Getters & Setters
localeTitle: Hechiceros y Setters
---
# Getters y Setters

Getters y Setters se utilizan para proteger eficazmente sus datos, especialmente al crear clases. En general, para cada variable de instancia, un método getter devuelve su valor mientras que un método setter establece o actualiza su valor, aunque también pueden incorporar comprobaciones para aceptar o devolver sólo valores válidos (ejemplo más abajo). Getters y setters también se conocen como accessors y mutators, respectivamente.

Por convención, los getters comienzan con get, seguido del nombre de la variable, con la primera letra del nombre de la variable en mayúscula. Cuando el tipo de retorno es un `boolean` lo más habitual es que empiecen por "is", para indicar que es/esta (ejemplo: `isActive()`). Los setters comienzan con set, seguido del nombre de la variable, con la primera letra del nombre de la variable en mayúscula.

**_Ejemplo:_**

```java
public class Vehicle { 
  private String color; 
 
  // Getter 
  public String getColor() { 
  return color; 
  } 
 
  // Setter 
  public void setColor(String c) { 
  this.color = c; 
  } 
 } 
```

El método getter devuelve el valor del atributo. El método de establecimiento toma un parámetro y lo asigna al atributo.

Una vez que el captador y el definidor se han definido, lo usamos en nuestro principal:

```java
public stativ void main(String[] args) { 
  Vehicle v1 = new Vehicle(); 
  v1.setColor("Red"); 
  System.out.println(v1.getColor()); 
 } 
 
 // Outputs "Red" 
```

* * *

Getters y setters permiten el control sobre los valores. Puede validar el valor dado en el setter antes de configurar el valor.

## ¿Por qué getter y setter?

Al utilizar getter y setter, el programador puede controlar cómo se accede y actualiza sus variables importantes, como cambiar el valor de una variable dentro de un rango específico. Considere el siguiente código de un método setter:

```java
public void setNumber(int num) { 
    if (num < 10 || num > 100) { 
        throw new IllegalArgumentException(); 
    } 
    this.number = num; 
 } 
```

Esto garantiza que el valor del número siempre se establezca entre 10 y 100. Si el programador permite que el número de la variable se actualice directamente, la persona que llama puede establecer cualquier valor arbitrario:

```java
obj.number = 3; 
```

Esto viola la restricción para valores que van desde 10 a 100 para esa variable. Como no esperamos que eso suceda, ocultar el número de variable como privado y usar un configurador lo evita. Por otro lado, un método getter es la única forma en que el mundo exterior puede leer el valor de la variable:

```java
public int getNumber() { 
    return this.number; 
 } 

```
