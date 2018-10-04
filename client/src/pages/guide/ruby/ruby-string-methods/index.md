---
title: Ruby String Methods
---
## Ruby String Methods
Ruby has many built in methods to work with strings. Strings in Ruby by default are mutable and can be changed in place or a new string can be returned from a method.

### Length:

*   The `.length` property returns the number of characters in a string including white-space.
    ```ruby
    "Hello".length #=> 5
    "Hello World!".length #=> 12
    ```

### Count:

*   The `.count` method counts how many times a specific character(s) is found in a string.
*   This method is case-sensitive.
    ```ruby
    "HELLO".count('L') #=> 2
    "HELLO WORLD!".count('LO') #=> 1
    ```

### Insert:

*   The `.insert` method inserts a string into another string before a given index.
    ```ruby
    "Hello".insert(3, "hi5") #=> Helhi5lo # "hi5" is inserted into the string right before the second 'l' which is at index 3
    ```

### Upcase:

*   The `.upcase` method transforms all letters in a string to uppercase.
    ```ruby
    "Hello".upcase #=> HELLO
    ```

### Downcase:

*   The `.downcase` method transforms all letters in a string to lowercase.
    ```ruby
    "Hello".downcase #=> hello
    ```
### Swapcase

* The `.swapcase` method transforms the uppercase latters in a string to lowercase and the lowercase letters to uppercase.
  ```ruby
  "hELLO wORLD".swapcase #=> Hello World
  ```

### Capitalize:

*   The `.capitalize` method make the first letter in a string uppercase and the rest of the string lowercase.
    ```ruby
    "HELLO".capitalize #=> Hello
    "HELLO, HOW ARE YOU?".capitalize #=> Hello, how are you?
    ```

_Note that the first letter is only capitalized if it is at the beginning of the string._
    ```ruby
    "-HELLO".capitalize #=> -hello
    "1HELLO".capitalize #=> 1hello
    ```

### Reverse:

*   The `.reverse` method reverses the order of the characters in a string.
    ```ruby
    "Hello World!".reverse #=> "!dlroW olleH"
    ```

### Split:

*   The `.split` takes a strings and _splits_ it into an array, then returns the array.
    ```ruby
    "Hello, how are you?".split #=> ["Hello,", "how", "are", "you?"]
    ```
    
*   The default method splits the string based on whitespace, unless a different separator is provided (see second example).
    ```ruby
    "H-e-l-l-o".split('-') #=> ["H", "e", "l", "l", "o"]
    ```

### Chop:

*   The `.chop` method removes the last character of the string.
*   A new string is returned, unless you use the `.chop!` method which mutates the original string.
    ```ruby
    "Name".chop #=> Nam
    ```

    ```ruby
    name = "Batman"
    name.chop
    name == "Batma" #=> false
    ```

    ```ruby
    name = "Batman"
    name.chop!
    name == "Batma" #=> true
    ```

### Strip:

*   The `.strip` method removes the leading and trailing whitespace on strings, including tabs, newlines, and carriage returns (`\t`, `\n`, `\r`).
    ```ruby
    "  Hello  ".strip #=> Hello
    ```

### Chomp:

*   The `.chomp` method removes the last character in a string, only if it’s a carriage return or newline (`\r`, `\n`).
*   This method is commonly used with the `gets` command to remove returns from user input.
    ```ruby
    "hello\r".chomp #=> hello
    "hello\t".chomp #=> hello\t # because tabs and other whitespace remain intact when using `chomp`
    ```

### To Integer:

*   The `.to_i` method converts a string to an integer.
    ```ruby
    "15".to_i #=> 15 # integer
    ```
    
### Gsub:

*  `gsub` replaces every reference of the first parameter for the second parameter on a string.
```ruby
"ruby is cool".gsub("cool", "very cool") #=> "ruby is very cool"
```
*  `gsub` also accepts patterns (like *regexp*) as first parameter, allowing things like:
```ruby
"ruby is cool".gsub(/[aeiou]/, "*") #=> "r*by *s c**l"
```

### Concatenation:

*   Ruby implements some methods to concatenate two strings together:

   *  The `+` method:
  ```ruby
  "15" + "15" #=> "1515" # string
  ```

   * The `<<` method:
   ```ruby
   "15" << "15" #=> "1515" # string
   ```

   * The `concat` method:
   ```ruby
   "15".concat "15" #=> "1515" # string
   ```

### Index:

*   The `index` method returns the index position of the first occurrance of the substring or regular expression pattern match in a string. 
*   If there is no match found, `nil` is returned.
*   A second optional parameter indicates which index position in the string to begin searching for a match.

    ```ruby
    "information".index('o') #=> 3
    "information".index('mat') #=> 5
    "information".index(/[abc]/) #=> 6
    "information".index('o', 5) #=> 9
    "information".index('z') #=> nil
    ```

### Clear:

*   Removes string content.
    ```ruby
    a = "abcde"
    a.clear    #=> ""
    ```


