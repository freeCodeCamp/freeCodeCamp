---
title: Attributes
---

# Attributes
Attributes allow the programmer to add metadata to assemblies, types, and members. When applied to a type or member, an attribute will take the form of `[Attribute]` or `[Attribute(args)]`. When applied to an assembly, an attribute will take the form of `[assembly:Attribute]` or `[assembly:Attribute(args)]`.

An attribute is any class that inherits from the parent `Attribute` type. Conventionally, the name of an attribute in its definition will be `SomethingAttribute`, rather than just `Something`. When used, `[Something]` will still compile:
```csharp
public class PluginAttribute : Attribute
{
	// Attribute members
}

[Plugin]
public class MyPlugin
{
	// Plugin members
}
```

As mentioned above, attributes can have constructors like any other class. However, all arguments in an attribute constructor must be compile-time constants.
```csharp
public static class Variables // For the purposes of demonstration
{
	public static string MyPluginName = "Cool Plugin";
	public const string MyConstPluginName = "Amazing Plugin";
}

public class PluginAttribute : Attribute
{
	public string Name { get; private set; }

	public PluginAttribute(string name)
	{
		Name = name;
	}
}

[Plugin(MyPluginName)] // Won't compile because MyPluginName isn't const
[Plugin(MyConstPluginName)] // OK
[Plugin("My Cool Plugin")] // OK
public class MyPlugin
{
	// Plugin members
}
```

## Accessing a Type's Attributes
The `System.Attribute.GetCustomAttributes(Type)` method returns an array of all the attributes applied to a type. The programmer can then loop through this array to find the desired attribute using the `is` keyword.
```csharp
public void PrintPluginName()
{
	var type = typeof(MyPlugin); // Returns a Type object representing our MyPlugin class
	var attributes = System.Attribute.GetCustomAttributes(type); // Returns an Attribute[]

	foreach (var a in attributes)
	{
		if (a is PluginAttribute plugin)
			Console.WriteLine($"Plugin Name: {plugin.Name}");
	}
}
```

#### Additional Information
* [Attributes - Microsoft Programming Guide](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/attributes/)
* [Accessing Attributes Using Reflection - Microsoft Programming Guide](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/attributes/accessing-attributes-by-using-reflection)
* [Creating Custom Attributes - Microsoft Programming Guide](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/attributes/creating-custom-attributes)
