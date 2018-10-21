---
title: Use Bracket Notation to Find the Nth-to-Last Character in a String
---
## Use Bracket Notation to Find the Nth-to-Last Character in a String

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
Remember that the position of any character, is the <strong>length of the string, minus one, minus the number of characters after it</strong>. For example, if you are trying to find the third-to-last character of the following string:

    var str = "Programming";
    var secondToLastChar = str[str.length - 2]; // This is 'i'
    
As you can see, there is one extra character after 'n' (and that is 'g').
