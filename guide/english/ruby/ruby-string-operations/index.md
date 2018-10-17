---
title: Ruby String Operations
---
Both concatenation and multiplication can be performed on strings.

## Concatenation:

*   Strings can be joined together using any of the following methods:
    *   `+` operator
    *   `<<` operator
    *   `.concat` method
    ```ruby
    "Hello" + " World" + "!"  #=> Hello World!
    ```

    ```ruby
    "Hello" << " World!" #=> Hello World!
    ```

    ```ruby
    string1 = "Hello"
    string2 = " World!"
    string1.concat(string2) #=> Hello World!
    ```

## Multiplication:

*   Strings can be multiplied by an integer value using the `*` operator.
    ```ruby
    "Hello" * 3 #=> HelloHelloHello
    ```

## Replacing a substring

*   We can search for sub-strings or use Regex for searching and replacing character within a string. 
    ```ruby
    "Hey mom, look at this string".sub('mom', 'dad') #=> Hey dad, look at this string
    ```

## Comparison:
*  Strings can be compared, returns -1, 0, +1 or nil depending on whether string is less than, equal to, or greater than other_string.
```ruby
"abcdef" <=> "abcde"     #=> 1
"abcdef" <=> "abcdef"    #=> 0
"abcdef" <=> "abcdefg"   #=> -1
"abcdef" <=> "ABCDEF"    #=> 1
```
