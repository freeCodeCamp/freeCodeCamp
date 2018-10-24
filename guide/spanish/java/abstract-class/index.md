---
title: Abstract Classes in Java
localeTitle: Clases abstractas en Java
---
Vamos a discutir las clases abstractas. Antes de sumergirse en este tutorial, es mejor que haya comprendido los conceptos de las clases. y la herencia.

Las clases abstractas son clases que pueden ser subclasificadas (es decir, extendidas) pero no pueden ser instanciadas. Puede pensar en ellos como una **versión** de **clase** de interfaces, o como una interfaz con código real adjunto a los métodos.

Considere el siguiente ejemplo para entender las clases abstractas: Usted tiene una Clase de Vehículo que define ciertas funcionalidades básicas (métodos) y ciertos componentes (variables de objeto) que una maquinaria debe tener, para ser clasificada como un vehículo. No puede crear un objeto de Vehículo porque un vehículo en sí mismo es un concepto abstracto. Sin embargo, puede ampliar la funcionalidad de la clase de vehículo para crear un automóvil o una motocicleta.

``` java
abstract class Vehiculo
{
  //variable usada para declarar el número de ruedas de un vehiculo
  private int ruedas;
  
  //Variable para definir el tipo de motor del vehiculo
  private Motor motor;
  
  //un metodo abstracto que solo declara, pero no define la funcionalidad de encendido
  //porque cada vehiculo tiene su mecanismo especifico de encendido
  abstract void encender();
}

public class Car extends Vehiculo
{
  ...
}

public class Motorcycle extends Vehiculo
{
  ...
}
```

No puedes crear un objeto de la clase Vehiculo en cualquier sitio de la aplicación, Sin embargo, puedes extender la clase abstracta Vehiculo y crear objetos de la clase hijo.

``` java
Vehicle newVehicle = new Vehicle();    // Invalido
Vehicle car = new Car();  // Valido
Vehicle mBike = new Motorcycle();  // Valido

Car carObj = new Car();  // Valido
Motorcycle mBikeObj = new Motorcycle();  // Valido
```
Si la clase hijo no implementa los metodos abstractos del padre, se convierte en clase abstracta.
