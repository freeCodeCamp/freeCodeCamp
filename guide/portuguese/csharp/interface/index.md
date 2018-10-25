---
title: Interface
localeTitle: Interface
---
* * *

Uma interface é semelhante a uma classe ou estrutura, mas sem implementação para seus membros. Uma interface declara um contrato ou um comportamento que as classes de implementação devem ter. Pode declarar apenas propriedades, métodos e eventos com modificadores de acesso NO.

Todos os membros declarados devem ser implementados na classe inharit, caso contrário, haverá um erro de compilação. como uma convenção, marcaremos a interface com a letra I no início (IMyInterface || IUserOptions). Você define uma interface usando a palavra-chave da interface.

Todos os membros de uma interface são: implicitamente abstrato, implicitamente público, não pode declarar um modificador de acesso como protected, internal private etc ...

Uma interface pode:

*   Herdar de outras interfaces.
*   Herdar de várias interfaces ao mesmo tempo
*   Contém apenas métodos, propriedades, eventos e indexadores.

Uma interface não pode:

*   Herdar de uma turma.
*   Tem implementação.
*   Tem modificadores de acesso que não sejam públicos.

## \* Seja instanciado.

O uso de interfaces nos permite alterar nossa implementação em nosso projeto sem quebrar outras partes, e só tem que mudar o único lugar onde o objeto é criado.

Exemplo de interface:

```csharp
public Interface IUserFavoriteFood
 {
  void AddFood();
  Task<User> EatFavoriteFood(int id);
 }
```

* * *

Herança e implementação de interfaces:

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