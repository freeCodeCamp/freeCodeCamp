---
title: Use Bracket Notation to Find the Last Character in a String
---
## Use Bracket Notation to Find the Last Character in a String

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
Consider the following string:

    var str = "Coding";
    
This string has a length of 6 characters, so if you use .length on the string, it will give you 6. But remember that the first character is at the zero-th position. The second character is at the first position. The third character is at the second position.

Keep on going, and you eventually get that the sixth character (which, based on the above string, is 'g') is at the fifth position. That's why you obtain the last character of a string, with:

    var lastChar = str[str.length - 1]; // This is 6 - 1, which is 5
 
This will be 'g'.
