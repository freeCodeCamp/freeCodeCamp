---
title: Getters & Setters
localeTitle: Métodos Get y Set (Getters & Setters)
---

# Métodos ``get`` y ``set`` (Getters & Setters)

Los métodos ``get`` y ``set`` se utilizan para proteger eficazmente sus datos, en particular al crear clases. Para cada variable de instancia, un método ``get`` devuelve su valor mientras que un método ``set`` establece o actualiza su valor. Los métodos ``get`` y ``set`` también se conocen como accesores y mutadores, respectivamente.

Por convención, los métodos ``get`` comienzan con get seguidos del nombre de la variable, la primera letra del nombre de la variable se escribe en mayúsculas. Los métodos ``set``  comienzan con set, seguidos del nombre de la variable, la primera letra del nombre de la variable se escribe en mayúsculas.

**_Ejemplo:_**

```java
 public class Vehiculo { 
    private String color; 
 
    // Método get 
    public String getColor() { 
       return color; 
    } 
 
    // Método set 
    public void setColor(String c) { 
       this.color = c; 
    } 
 } 
```

El método ``get`` devuelve el valor del atributo. El método ``set`` recibe un parámetro y lo asigna al atributo.

Una vez que los métodos ``get`` y ``set`` se han definido, los usamos en nuestro método  principal:

```java
 public static void main(String[] args) { 
    Vehiculo v1 = new Vehiculo(); 
    v1.setColor("Rojo"); 
    System.out.println(v1.getColor()); 
 } 

 // Salida: "Rojo" 
```

* * *

Los métodos ``get`` y ``set`` permiten el control sobre los valores. Usted puede validar el parametro recibido por el método ``set`` antes de asignarlo al atributo.

## ¿Por qué ``get`` y ``set``?

Al utilizar ``get`` y ``set``, el programador puede controlar cómo se acceden y actualizan sus variables importantes, como cuando se actualiza el valor de una variable dentro de un rango específico. Considere el siguiente código de un método ``set``:

```java
 public void setNumero(int num) { 
    if (num < 10 || num > 100) { 
       throw new IllegalArgumentException(); 
    } 
    this.numero = num; 
 } 
```

Esto garantiza que el valor de ``numero`` siempre se establezca entre 10 y 100. Si el programador permite que la variable ``numero`` se actualice directamente, la persona que llame el método podria establecer cualquier valor arbitrario:

```java
 obj.numero = 3; 
```

Esto viola la restricción del rango de valores de 10 a 100 para esa variable. Ya que no esperamos que eso suceda, ocultar la variable ``numero`` como ``private`` y usar un método ``set`` lo evitaria. Por otro lado, un método ``get`` es la única forma en que el mundo exterior puede leer el valor de la variable:

```java
 public int getNumero() { 
    return this.numero; 
 } 
```