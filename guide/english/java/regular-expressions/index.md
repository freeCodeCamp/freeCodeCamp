---
title: Regular Expressions
---
# Regular Expressions

### Introduction
Regular expressions in Java are useful for searching, editing and manipulating strings. Regular Expressions are also known as Regex.

### Java Regex provides three classes in java.util.regex package:
- Matcher
-- Used for defining the String pattern to match
- Pattern
-- Used for peforning math on given pattern
- PatternSyntaxException
-- Used for indicate exceptions in the pattern

### RegEx Example:
- Check that the string contains only characters and no numbers or special characters.
```
import java.util.regex.*; 

public class RegExExample {
    public static final String ARTICLE_STRING = "freecodecamp";

    public static void main(String[] args) {
        Pattern pattern = Pattern.compile("^[a-zA-Z]*$");  
        Matcher match = pattern.matcher(ARTICLE_STRING);  
        boolean result = match.matches();  
        System.out.println("Result: " + result);
    }
}
```

```
Result: true
```

### Understanding the pattern:
```"^[a-zA-Z]*$"```

^ - The beginning of a line
[a-zA-Z] - Match characters from a-z and A-Z
*$ - The end of the line

### RegEx Cheatsheet:
- Here is a very good link to [RegEx Cheatsheet](https://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html)


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
- [Class Pattern](https://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html)
- [Lesson on Regular Expression](https://docs.oracle.com/javase/tutorial/essential/regex/)

