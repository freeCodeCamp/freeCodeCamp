---
title: Indeterminate parameters
---

# Indeterminate parameters

Let's imagine we need to write a method where the number of parameters are variable. How can we do that? Well, C# (and other languages) has an easy way to do so; by using the `params` keyword on a method's parameter we can call that method with a variable number of parameters. 

## Example
```
public static void Main (string[] args) {
	// Call PrintParams with 3 parameters
	PrintParams(1, 2, 3);
	
	// Call PrintParams with 1 parameter
	PrintParams(4);
}

public static void PrintParams(params int[] values)
{
	// Iterate through parameters
	for (int i = 0; i < values.Length; i++)
	{
		Console.WriteLine("Parameter {0} is {1}", i, values[i]);
	}
}
```

## Output:
```
> Parameter 0 is 1
> Parameter 1 is 2
> Parameter 2 is 3
> Parameter 0 is 4
```
