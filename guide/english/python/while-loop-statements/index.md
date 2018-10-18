---
title: While Loop Statements
---
## While Loop Statements

<!-- Please add any articles you think might be helpful to read before writing the article -->

Python utilizes the `while` loop similarly to other popular languages.  The `while` loop evaluates a condition then executes a block of code if the condition is true. The block of code executes repeatedly until the condition becomes false.

The basic syntax is:

```python
counter = 0
while counter < 10:
   # Execute the block of code here as
   # long as counter is less than 10
```

An example is shown below:
```python
days = 0    
week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
while days < 7:
   print("Today is " + week[days])
   days += 1
```

Output:

```
Today is Monday
Today is Tuesday
Today is Wednesday
Today is Thursday
Today is Friday
Today is Saturday
Today is Sunday
```
Line-by-Line Explanation of the above CODE:
1. the variable 'days' is set to a value 0.
2. a variable week is assigned to a list containing all the days of the week.
3. while loop starts 
4. the block of code will be executed until the condition returns 'true'.
5. the condition is 'days<7' which rougly says run the while loop till the point the variable days is less than 7
6. So when the days=7 the while loop stops executing.
7. the days variable gets updated on every iteration.
8. When the while loop runs for the first time the line 'Today is Monday' is printed onto the console and the variable days becomes equal to 1.
9. Since the variable days is equal to 1 which is less than 7 so the while loop is executed again.
10. It goes on again and again and when the console prints 'Today is Sunday' the variable days is now equal to 7 and the while loop stops executing. 

#additional
while statements are executed whenever the statement next to them are true . so not only in conditional cases but also almost
every boolean cases
ex:
```
x=False
while not x:
   statement 1
   statement 2
   ..
 ```
 in this way we can use boolean statements to execute while loops. cases where we want to execute the loop evry time the program
 is executed without any error,then we can use
 ```
   while True:
     line1
     line 2     #statements to be executed
  ```
  or ``` while 1:      # 1 for True ,0 for false
           line 1
           line 2     #statements to be executed
       ```

#### More Information:

- <a href='https://docs.python.org/3/reference/compound_stmts.html#the-while-statement' target='_blank' rel='nofollow'>Python `while` statement documentation</a>
