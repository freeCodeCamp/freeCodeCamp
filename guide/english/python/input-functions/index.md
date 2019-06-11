---
title: Python Input Function
---
Sometimes in your program you may want some input from the user. This makes the program feel more interactive and versatile to use. In Python 3, to receive input from the user, we use `input()`. When the input function is called, the program flow will stop until the user has given an input and has ended the input with the return key.

---
Examples
---
**1\.  When we just want to take the input:**

    # This will simply prompt for input, without any indicator/message
    inp = input()

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CUqX/0' target='_blank' rel='nofollow'>Run Code</a>

**2\.  To give a prompt together with a message:**

    prompt_with_message = input('<Your prompt message should appear here>')
    # <Your prompt message should appear here> _
    # The '_' in the output is the prompt

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CUqX/1' target='_blank' rel='nofollow'>Run Code</a>

**3\. When we want to take an integer input:**

    number = int(input('Please enter a number: '))

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CUqX/2' target='_blank' rel='nofollow'>Run Code</a>

If you enter a non integer value then Python will throw an error `ValueError`. This is because it is specified in the program to specifically take an **integer**. **Therefore, be careful to always check if the program is asking for a specific input type.** Otherwise, your program will stop unexpectedly after the prompt. 

    number = int(input('Please enter a number: '))
    # Please enter a number: as
    # Enter a string and it will throw this error
    # ValueError: invalid literal for int() with base 10 'as'

**4\. When we want a string input:**

    string = str(input('Please enter a string: '))

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CUqX/3' target='_blank' rel='nofollow'>Run Code</a>

Though, inputs are stored by default as a string. Using the `str()` function makes it clear to the code-reader that the input is going to be a 'string'. It is a good practice to mention what type of input will be taken beforehand.

**5\. Separating input with spaces:**
```
a,b,c=input("Please enter 3 words: ").split()
```
![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/@Brian_RG/multinput)
 In this case, we can read 3 words separated by space and store in three different vars, so we can use them later.

 **6\. Separating input of integers:**
```
a,b,c=map(int,input("Please insert 3 numbers: ").split())
```
By default, inputs are stored as 'strings'. Therefore, we can use the `map()` function to indicate that the input will be converted into integers and then their values are stored in a variable.

 ![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/@Brian_RG/Intput)
 [Documentos oficiales](https://docs.python.org/3/library/functions.html#input)

NOTE: Inside the `split()` function, we can add the separator used to split and identify chunks of data to be stored separately. For example, if we want to separate each value by a comma, we write `input().split(",")` and so on.

7\. Multiple comma seperated integer inputs in list:
```
LIST=[int(x) for x in input().split(",")]
```
Multiple integers can be stored by iterating whole given string by comma seperated and store in a list.
<a href='https://docs.python.org/3/library/functions.html#input' target='_blank' rel='nofollow'>Official Docs</a>
