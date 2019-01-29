---
title: If
---

# If

The if statement executes different blocks of code based on conditions.

```
if (condition)
{
	// Do something when `condition` is true
}
else
{
	// Do something when `condition` is false
}
```

When `condition` is true, code inside the `if` section executes, otherwise `else` executes. Sometimes you would need to add a second condition. For readability, you should use  `else if` rather than nesting `if` statements.
instead of writing:
```
if (condition)
{
	// Do something if `condition` is true
}
else 
{
	if (anotherCondition)
	{
		// Do something if `anotherCondition` is true
	}
	else
	{
		// Do something if `condition` AND `anotherCondition` is false
	}
}
```
You could use the much more concise writing: 
```
if (condition)
{
	// Do something if `condition` is true
}
else if (anotherCondition)
{
	// Do something if `anotherCondition` is ture
}
else
{
	// Do something if `condition` AND `anotherCondition` is false
}
```

It is also possible to check if the condition is false and act on it without it having to have an else statement.
```
if(!condition) 
{
 //do something if the condition is false
}

```
```
int number = 3;
//!= implies that you wish to check if the object's value is not equal to the value next to it 
if(number !=2) 
{
	 Console.WriteLine("Number is not 2");
}

```
Note that the `else` and `else if` sections are not required, while `if` is mandatory.
Also note that if the code following your conditional statement is a single line; you do not have to put the brackets around that code - but the brackets help for readability.


## Example
```
	Console.WriteLine("Who are you? ");
	string name = Console.ReadLine();
	
	if (name == "John")
	{
		Console.WriteLine("Hi John!");
	}
	else if (name == "Fabio")
	{
		Console.WriteLine("Oh, it's you Fabio :)");
	}
	else
	{
		Console.WriteLine("Oh! I thought you were John or Fabio. Anyway, nice to meet you {0}!", name);
	}
	
	/* Run and type some names:
		-> If name is "John", then output is "Hi John!"
		-> If name is "Fabio", then output is "Oh, it's you Fabio :)"
		-> If name is neither "John" nor "Fabio", output is "Oh! I thought you were John or Fabio. Anyway, nice to meet you {0}!" where {0} contains the name.
	*/
```

The if statement needs a boolean result, that is, true or false. In some programming languages, several datatypes can be automatically converted into booleans, but in C#, you have to specifically make the result boolean. For instance, you can't use if(number), but you can compare number to something, to generate a true or false.
