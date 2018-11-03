---
title: Word Blanks
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

We will now use our knowledge of strings to build a **Mad Libs** style word game we're calling "Word Blanks". You will create an (optionally humorous) "Fill in the Blanks" style sentence.

You will need to use string operators to build a new string, **result**, using the provided variables: **myNoun**, **myAdjective**, **myVerb**, and **myAdverb**.

You will also need to use additional strings, which will not change, and must be in between all of the provided words. The output should be a complete sentence.

We have provided a framework for testing your results with different words. The tests will run your function with several different inputs to make sure all of the provided words appear in the output, as well as your extra strings.

*   Change the code below `//Your Code here` and up to `//Change this line`.
*   Take note that you are editing the inside of the `wordBlanks()` function.
*   You will have basically created a sentence with the provided string variables.

#### Relevant Links

*   <a href='https://en.wikipedia.org/wiki/Mad_Libs' target='_blank' rel='nofollow'>Mad Libs</a>
*   <a href='http://www.freecodecamp.com/challenges/constructing-strings-with-variables' target='_blank' rel='nofollow'>Challenge: Constructing Strings with Variables</a>
*   <a href='http://www.freecodecamp.com/challenges/concatenating-strings-with-plus-operator' target='_blank' rel='nofollow'>Challenge: Concatenating Strings with Plus Operator</a>
*   <a href='http://www.freecodecamp.com/challenges/concatenating-strings-with-the-plus-equals-operator' target='_blank' rel='nofollow'>Challenge: Concatenating Strings with the Plus Equals Operator</a>

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

`+` can be used for _concatenating_ strings.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

Just as you can chain strings by concatenating, you can assign them to an existing variable instead of a new one.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

`+=` will allow you to use an existing variable, a string type in this case. Remember to add your own **non-letters** in between each variable.

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

    function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
        var result = "";
        // Your code below this line
        result+= "My "+myAdjective+" "+myNoun+" "+myVerb+" very "+myAdverb+".";

        // Your code above this line
      return result;
    }

    // Change the words here to test your function
    wordBlanks("dog", "big", "ran", "quickly");

**Example Run**

*   Test `wordBlanks("dog", "big", "ran", "quickly");` runs.
*   Variable **result** is declared with an empty string `""`.
*   **result** will be changed with a new string composed of the concatenated strings "dog", "big", "ran", "quickly" through the variables **myNoun**, **myAdjective**, **myVerb**, **myAdverb** respectively; the order is changed and whitespace added.
*   **result** is returned.

### Code Explanation:

*   Use **result** to concatenate the given variables.
*   Separate words with whitespace and appropriate words to form the full sentence.

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
*   Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") <a href='http://forum.freecodecamp.com/t/algorithm-article-template/14272' target='_blank' rel='nofollow'>**`Wiki Challenge Solution Template`**</a> for reference.
