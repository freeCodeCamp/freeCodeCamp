---
title: Regular Expressions
---
# Regular Expressions

## Introduction
Like many languages Java supports [regular expressions](https://en.wikipedia.org/wiki/Regular_expression).
Regular expressions are useful for searching, editing and manipulating strings. Regular expressions are also known as regex.

## Regex in Java
Regex is mainly used in two classes in Java:
- `java.util.regex.Pattern`
  - holds a compiled, reusable representation of a regular expression
- `String`
  - has shortcut methods to use regex directly without `Pattern`
  - but all shortcut methods have to compile the pattern on each call


## Regex Usage Example
*Task*: validate the string only contains latin characters and no numbers or special characters
```java
import java.util.regex.*;

public class RegExExample {
    public static final String ARTICLE_STRING = "freecodecamp";
    private final Pattern asciiLettersPattern = Pattern.compile("^[a-zA-Z]+$");

    public static void main(String[] args) {
        Matcher match = asciiLettersPattern.matcher(ARTICLE_STRING);  
        boolean result = match.matches();  
        System.out.println("Result: " + result);
        // shortcut alternative: boolean result = ARTICLE_STRING.matches("^[a-zA-Z]+$");
    }
}
```

```
Result: true
```

## Understanding the Pattern
`"^[a-zA-Z]+$"`  
Match:  
`^` - the beginning of the String  
`[a-zA-Z]` - characters from a-z and A-Z  
`\+` - one or more times  
`$` - the end of the String  
The String contains from start to end only one or more a-z and A-Z.


### More Information
- [Pattern Class Javadoc](https://docs.oracle.com/javase/10/docs/api/java/util/regex/Pattern.html) (Java RegEx Cheatsheet)
- [Essential Regex](https://docs.oracle.com/javase/tutorial/essential/regex/)
- [Regular expressions](https://en.wikipedia.org/wiki/Regular_expression)
