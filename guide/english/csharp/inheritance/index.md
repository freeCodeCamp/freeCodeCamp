---
title: Inheritance
---

# Inheritance

Inheritance allows you to create a class that extends or modifies an existing class. This can be used to make classes that derive off of other classes.

# Base class and Derived class

These are the terms used for classes when referring to inheritance. The derived class inherits the base class, along with any variables, functions or processes that the base class uses. The derived class can then have its own variables and functions alongside the ones it inherits off the base class.

For example, a Base class of 'Animal' can have a derived class of 'Dog'. The Animal class will contain features relating to animals in general, while the Dog class contains features unique to dogs. When the Dog class inherits the Animal class, it will be able to refer to both features relating to animals and features unique to dogs.

# Rules of Inheritance

Inheritance is one way. The base class does not inherit the features of the derived class.

Inheritance is transitive. A Base class of 'Animal' can have a derived class of 'Dog' and this can have a derived class of 'Terrier'. The Terrier class will inherit both the features of the Dog class and the Animal class.

C# does not support multiple inheritance. A class can only inherit from a single class.

# The `:` symbol

In C# the `:` symbol is used to denote inheritance. This is called when creating the derived class.

## Example

# Base class
```
public class Animal
{
	public int ID;
	public string title;
	public enum phylum;
	public enum dietType;
	
	    public DefineAnimal(int id, string name, enum phy, enum diet)
    {
        this.ID = id;
        this.title = name;
        this.phylum = phy;
        this.dietType = diet;
    }
}
	
```

# Derived class
```
public class Dog : Animal
{
	public enum breed;
	public int levelOfTraining;
	
	public void SayWoof()
	{
		Console.WriteLine("Woof");
	}
}
```

<!--- To do -  Constructor rules, Abstract,	Sealing derived classes--->
