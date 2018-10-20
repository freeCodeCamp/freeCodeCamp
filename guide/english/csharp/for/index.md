---
title: For Loop
---

# For Loop

The `for` loop executes a block of code until a specified condition is false. Although a `for` loop looks like a <a href='https://guide.freecodecamp.org/csharp/while-loop' target='_blank' rel='nofollow'>`while` loop</a>, developers should use them __properly__. Use `while` loops when the number of iterations are variable, otherwise use `for` loops. A common use of `for` loops are array iterations.<sup>1</sup>



## Syntax
```csharp
for ((Initial variable); (condition); (step)) 
{
	(code)
}
```

The C# for loop consists of three expressions and some code. When creating a `for` loop, it is important to understand that each of the 3 expressions that makeup the `for` loop are all optional expressions. 

## Description

- *Initial Variable*: your starting state, eg `int i = 0;`
- *Condition*: While this condition is true the code will continue to run, eg `i <= 5;`
- *Step*: The increment, or decrement, of the initial variable, eg `i++` or `i -= 2;`.

## Example
```csharp
int[] array = { 1, 2, 3, 4, 5 };
for (int i = 0; i < array.Length; i++)
{
	Console.WriteLine("Item on index {0} is {1}", i, array[i]);
}
```

## Output:
```csharp
> Item on index 0 is 1
> Item on index 1 is 2
> Item on index 2 is 3
> Item on index 3 is 4
> Item on index 4 is 5
```

## Multiple Initial Variables and Steps
You are not limited to initializing only one variable in a `for` loop. However, you will be limited to what type any subsequent variables can be as they can only be what was initially specified. You can get around this type restriction by specifying their values outside the loop, but we'll get to that.

For example, if I have a `for` loop that starts off with `int i` and I want to add a `j` to that `for` loop for some extra processing, `j` can only be an `int` and no other type.  

Let's look at an example with 2 initialized variables in the `for` loop using also 2 separate steps, where `i` will be increasing by 1 with `i++` and `j` will be increasing by 2 using `j += 2`. 

[Run the following code here at Repl.it](https://repl.it/@heyitsmarcus/MultipleInitandSteps?language=csharp):

```csharp
for (int i = 0, j = 1; i < 100; i++, j += 2) {
  Console.Write("i is: {0}, j is {1}", i, j);
  Console.WriteLine("");
}
```

And some of this example's sample output from the beginning:
```csharp
i is: 0, j is 1
i is: 1, j is 3
i is: 2, j is 5
i is: 3, j is 7
i is: 4, j is 9
```

### Multiple Conditions
Since the condition in a for loop is a boolean expression, you can use boolean logic on that condition to create more open conditions or stricter conditions based on more than one variable.

Let's look back at the previous for loop, but I'm going to put in one more condition.  I want to stop this `for` loop from iterating if `i` reaches 100 or `j` becomes 100.  I'm going to do this by using `&&` (and) logic to say `as long as i is less than 100 and j is less than 100, keep stepping through this loop`. 

[Run the following code here at Repl.it](https://repl.it/@heyitsmarcus/MultipleForConditions?language=csharp) 

```csharp
for (int i = 0, j = 1; i < 100 && j < 100; i++, j += 2) {
  Console.Write("i is: {0}, j is {1}", i, j);
  Console.WriteLine("");
}
```

And some of this code's sample output from the end:
```csharp
i is: 45, j is 91
i is: 46, j is 93
i is: 47, j is 95
i is: 48, j is 97
i is: 49, j is 99
```

## Complex For Loops
As we just saw, you can add more initial variables, conditions, and steps to a `for` loop.  But , you can also take away every single one of those, as well.  Leaving off any of these, though, comes with a bit of extra complexity.

*Even though this type of `for` loop isn't recommended for production code, you may come across this wild bit of code in your digital travels, so it is important to be aware of it.*

A `for` loop without any expressions inside of it sort of looks like a person who's crying or a mime. Sometimes, I can't decide:

**Do NOT run this code just yet unless you want your program to become one of Batman's coldest nemesis: Dr. Freeze.**

```csharp
for (; ;) {
    //code here
}
```

A `for` loop with no `condition` acts as an infinite loop. If you leave off the initialized variables and the steps of the `for` loop, you can still break out of the for loop with a reachable condition, so long as it is present in the middle of the `for` loop.  When there is no condition present, there is no way for the `for` loop to know when it needs to stop unless you explicitly tell it to.  

Let's look at a simple `for` loop that's been restructured as an infinite loop that we explicitly tell to stop:

[Run the following code here at Repl.it](https://repl.it/@heyitsmarcus/InfiniteForLoops?language=csharp)

```csharp
//variable must be initialized outside of the loop
int i = 0;
//No expressions inside for loop
for (; ;) {
	//Acts as the condition for the for loop
	if (i < 10) {
		Console.WriteLine(i);
	}
	else {
		//There must be some type of halting code here to get out of the for loop
		//in this case "break" literally breaks out of the for loop and
		//continues execution as a standard for loop would normally do
		break;

		//try replacing "break" above with "return" and see what happens
	}

	//You must have this stepping process happening somewhere inside the for loop
	//I put it at the end of this loop so that it follows the procedure of a standard for loop
	i++;
}
Console.WriteLine("Game over!");
```
And the output for the above code is:
```csharp
0
1
2
3
4
5
6
7
8
9
Game over!
```
Notice that the break keyword allowed us to literally break out of the `for` loop and the continue execution of the program.

## Sources
1. https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/for
2. https://gis.stackexchange.com/questions/142326/calculating-longitude-length-in-miles
