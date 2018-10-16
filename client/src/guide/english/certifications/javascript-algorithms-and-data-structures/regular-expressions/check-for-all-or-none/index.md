
## Check for All or None

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

## The Problem:

We need to change the regex ```favRegex``` to match both the American English (favorite) and the British English (favourite) version of the word.

  ## Solution:
 
 ```js
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);
```

  ## Explanation:
 
In this regex (```/favou?rite/```), we specify the possible existence of an element (```u```) with a question mark, ```?```.
