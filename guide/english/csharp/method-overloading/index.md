---
title: Method Overloading
---

# Method Overloading

Default parameters were introduced in C# version 4.0, but up until that, C# coders have been using a different technique, which basically does the same, called method overloading. It allows the programmer do define several methods with the same name, as long as they take a different set of parameters. When you use the classes of the .NET framework, you will soon realize that method overloading is used all over the place.

## Example
1. Create a class file named Person.cs & input the following code.
  ```
  public class Person
{
    public string FirstName { get; private set; }
    public string LastName { get; set; }

    public Person(string firstName, string lastName)
    {
        this.FirstName = firstName;
        this.LastName = lastName;
    }

    public string SayHello(string name)
    {
        return "Hello there, " + name;
    }

    public string SayHello(Person person)
    {
        return "Hello there, " + person.FirstName + " " + person.LastName;
    }
}
```
2. In your default Program.cs file you can call now this class Person using the method overloading.
```
class Program
    {
        static void Main(string[] args)
        {
            Person person = new Person("Jane", "Doe");
            Console.WriteLine(person.SayHello("Peter Smith"));

            Person friend = new Person("Chuck", "Norris");
            Console.WriteLine(person.SayHello(friend));

            Console.ReadKey();


        }
    }
  ```
