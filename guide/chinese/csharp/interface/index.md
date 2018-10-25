---
title: Interface
localeTitle: 接口
---
* * *

接口类似于类或结构，但其成员没有实现。 接口声明实现类应具有的契约或行为。 它可以仅使用NO访问修饰符声明属性，方法和事件。

所有声明的成员必须在inharit类中实现，否则将出现编译错误。 作为惯例，我们将在begenning（IMyInterface || IUserOptions）上标记与字母I的接口。 您可以使用interface关键字定义接口。

界面的所有成员是： 含蓄地抽象， 隐式公开，不能声明访问修饰符，如protected，internal private等...

接口可以：

*   从其他接口继承。
*   从多个接口同时继承
*   仅包含方法，属性，事件和索引器。

接口不能：

*   从类继承。
*   有实施。
*   拥有除公共之外的访问修饰符。

## \*实例化。

使用接口允许我们在不破坏其他部分的情况下更改项目中的实现， 并且只需要更改创建对象的一个​​位置。

接口示例：

```csharp
public Interface IUserFavoriteFood
 {
  void AddFood();
  Task<User> EatFavoriteFood(int id);
 }
```

* * *

接口继承和实现：

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