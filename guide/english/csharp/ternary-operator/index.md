---
title: Ternary operator
---

# Ternary operator (`?:`)
Ternary operator return one of the two expression based on the condition. It can be used as a shortcut for if...else statement.

## Syntax
```
condition_expression ? expression_1 : expression_2
```
### Parameter
`condition_expression`
Boolean expression.

`expression_1`
Returned if `condition_expression` is true.

`expression_2`
Returned if `condition_expression` is false.

## Example
```csharp
// initialize - set true or false here to view different result
bool hasFreeSweet = false;

string str = hasFreeSweet ? "Free sweet!" : "No free sweet.";

//output in console
Console.WriteLine(str);
```

## Output
```csharp
if hasFreeSweet == true
> Free sweet!

if hasFreeSweet == false
> No free sweet.
```

## Complex Ternary Operations
Ternary operations can also be embedded inside each other to create one line of execution rather than several lines.  *It is important to take into account that this may affect the readability of your code.*

To embed more ternary operations within another ternary operation, you only have to follow the same pattern as above with each new ternary operation added.  You will start with a primary ternary operation, which will consequently lead to your other ternary operations based on boolean expressions.  You can branch each ternary operation based off of the `true` and/or `false` paths of the ternary operations, but we are going to focus on going off the `false` path for the ternary operation for the example code below, as most complicated ternary operations will be embedded in the `false` path.

Let's say we have a result `myResult` that is an `int` and can be 0, 1, or greater than 1.  And we would like to output `"Just Starting"` if `myResult` is 0, `"First Place"` if `myResult` is 1, and `"If you're not first, you're last."` if `myResult` is 2 or greater.  So, we need 3 outcomes for this ternary operation.  

Example:

```csharp
//Initialize myResult with a 4
int myResult = 4;

//Output to the console the results of having a 4 in myResult based on what I expect above.
//The extra parenthesis after "Just Starting" is for grouping 
//and is not necessary for the code to execute as expected
Console.WriteLine((myResult == 0)  ? "Just Starting" : 
	//second ternary operation which is a part of the first operation (when myResult is not equal to 0)
	((myResult == 1) ? "First Place" : 
	//the last part of the last ternary operation (when myResult is not equal to 1)
  "If you're not first, you're last."));

//Output:
>If you're not first, you're last.
```

Check out this Repl I made that shows the code in action.  Try changing the value in `myResult` to 0, 1, 999, etc. and see what happens to the output. [Complex Ternary Operations on Repl.it](https://repl.it/@heyitsmarcus/ComplexTernaryOperations?language=csharp)

You can continue this pattern to embed as many ternary operations as you wish, although I'd recommend **against** using more than a couple ternary operations in your code as it will drastically reduce the readability if you need to have someone else read it, contribute to it, etc.
