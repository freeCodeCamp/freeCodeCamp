---
title : Abstract class 
---

## Abstract class
Abstract class is a class that has certain restrictions, it can't be instantiated directly. It's used as a base class for other types. An abstract class may contain abstract members (methods, properties, indexers and events). Abstract members can't be implemented in the abstract class and hence they must be overridden in a derived class.

```csharp
public abstract class Animal
{
  public abstract void Walk();
}

public class Dog : Animal
{
  public override void Walk()
  {
    Console.Log("Walking...");
  }
}
```

As you see Animal abstract class contains abstract method that isn't implemented. Dog class inherits from Animal class so it must provide an implementation for all abstract members of that class.

Abstract class may contain abstract members but it's not mandatory. Beyond abstract members it may also contain virtual members that can be overridden in a child class but it's not mandatory. If class contains virtual members then they unlike abstract members must be implemented (not only defined) in that class. Beyond virtual and abstract members abstract class may also contains non-virtual and non-abstract members that are derived and can't be overridden.

```csharp
public abstract class Animal
{
  public abstract void Walk(); // abstract member - must be overridden
  
  public virtual void Run() // virtual member - may be overridden but doesn't need to
  {
    Console.WriteLine("Running...");
  }
  
  public void Wait() // non-abstract and non-virtual member - can't be overridden, may only be hidden
  {
    Console.WriteLine("Waiting...");
  }
}

public class Dog : Animal
{
  public override void Walk() // it's mandatory to override abstract member
  {
    Console.WriteLine("Dog is walking...");
  }
  
  public override void Run() // it's optional to override virtual member
  {
    Console.WriteLine("Dog is running...");
  }
}
```

We can't create object of Animal class because it's abstract but we can create object of Dog class that derives from Animal class:

```csharp
Dog dog = new Dog();
dog.Walk(); // displays "Dog is walking..."
dog.Run(); // displays "Dog is running..."
dog.Wait(); // displays "Waiting..."
```
