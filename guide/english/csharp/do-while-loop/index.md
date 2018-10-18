---
title: Do while loop
---

# Do while Loop

The `do while` loop executes a block of code once and until a condition is false. They are a particular case of <a href='https://guide.freecodecamp.org/csharp/while-loop' target='_blank' rel='nofollow'>`while` loops</a>: they execute a block of code one time and then until the condition is false. A common use of `do while` loops are input checks.

## Example
```
do
{
    //execute code block


} while(boolean expression);


string input = "";
do
{
	Console.WriteLine("Type A to continue: ");
	input = Console.ReadLine();
} while(input != "A");

Console.WriteLine("Bye!");
```

## Output:
```
> Type A to continue: b
> Type A to continue: g
> Type A to continue: A
> Bye!
```
## Do while loop - Input check example
As mentioned above `do while`  loop executes blocks of codes until the expressions condition is false. In this example we are going to ask the user to enter a Student mark and we will be checking if the mark entered is not an invalid mark if the mark is invalid we will prompt the user to re-enter the mark again until they enter a valid mark. In this example students can have only a mark between 0 and 100.

## Example
```
do
{ 
  // Variables Declaration
	  double mark;
	  bool validInput = false;
  
  // Prompt the user the enter a mark
	  Console.Write(" Enter a mark please: ");
  
  // Let's read the entered mark
	  mark = double.parse (Console.ReadLine());
  
 
if(mark < 0 || mark > 100) // Checking if entered input is valid
 {
 // Display error message
	 Console.WriteLine("Invalid Input mark. Try again");
 // Prompt the user to enter the mark again
	 Console.Write(" Enter a mark please: ");
	 mark = double.parse (Console.ReadLine());
 }
else
 {
 validInput = true;
 }
while(!validInput );
	Console.WriteLine("Good Bye!");
	
```
## Output
```
> Enter a mark please: -1
> Invalid Input mark. Try again
> Enter a mark please: 50
> Good Bye!

```
#### More Information:

* [Microsoft C# - do](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/do)
* [Dot Net Perls - do](https://www.dotnetperls.com/do)
