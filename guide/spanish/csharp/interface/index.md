---
title: Interface
localeTitle: Interfaz
---
* * *

Una interfaz es similar a una clase o estructura pero sin implementación para sus miembros. Una interfaz declara un contrato o un comportamiento que las clases implementadoras deben tener. Puede declarar solo propiedades, métodos y eventos sin modificadores de acceso.

Todos los miembros declarados deben implementarse en la clase inharit, de lo contrario tendrá un error de compilación. como convención, marcaremos la interfaz con la letra I al principio (IMyInterface || IUserOptions). Usted define una interfaz utilizando la palabra clave de la interfaz.

Todos los miembros de una interfaz son: implícitamente abstracto, implícitamente público, no se puede declarar un modificador de acceso como protegido, interno privado, etc.

Una interfaz puede:

*   Heredar de otras interfaces.
*   Heredar de múltiples interfaces al mismo tiempo
*   Contiene solo métodos, propiedades, eventos e indexadores.

Una interfaz no puede:

*   Heredar de una clase.
*   Tener implementacion
*   Tener modificadores de acceso que no sean públicos.

## \* Sea instanciado.

El uso de interfaces nos permite cambiar nuestra implementación en nuestro proyecto sin romper otras partes, y solo hay que cambiar el lugar donde se crea el objeto.

Ejemplo de interfaz:

```csharp
public Interface IUserFavoriteFood
 {
  void AddFood();
  Task<User> EatFavoriteFood(int id);
 }
```

* * *

Herencia de interfaz e implementación:

```csharp
public class UserHungry : IUserFavoriteFood
 {
  public AddFood()
  {
    // Implementation:
    // A method to add food.
  }

  public Task<User> EatFavoriteFood(int id)
  {
    // Implementation:
    // A method to Eat food by id.
  }
 }

```