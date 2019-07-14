---
title: Reverse a String
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")


## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

Start by splitting the string by characters.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

Look up the built in function to reverse a string.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

Do not forget to join the characters back together after you reverse them.

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution #1:

<details><summary>Click to see solution</summary>

```js
function reverseString(str) {
  return str.split('').reverse().join('');
}
```

#### Code Explanation:

*   Our goal is to take the input, `str`, and return it in reverse. Our first step is to split the string by characters using `split('')`. Notice that we don't leave anything in between the single quotes, this tells the function to split the string by each character.

*   Using the `split()` function will turn our string into an array of characters, keep that in mind as we move forward.

*   Next we _chain_ the `reverse()` function, which takes our array of characters and reverses them.

*   Finally, we _chain_ `join('')` to put our characters back together into a string. Notice once again that we left no spaces in the argument for join, this makes sure that the array of characters is joined back together by each character.

### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split' target='_blank' rel='nofollow'>str.split()</a>
*   <a href='https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse' target='_blank' rel='nofollow'>arr.reverse()</a>
*   <a href='https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/join' target='_blank' rel='nofollow'>arr.join()</a>
</details><br>


## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution #2:

<details><summary>Click to see solution</summary>

```js
function reverseString(str) {
  for (var reversedStr = '', i = str.length - 1; i >= 0; i--){
    reversedStr += str[i];
  }
  return reversedStr;
};
```

#### Code Explanation:

* Starting at the last character of the string passed to the function, you build a new string `reversedStr` from `str`.

* During each iteration of the `for` loop, `reversedStr` gets concatenated with itself and the current character.

* Finally, you return the final value of `reversedStr`.

</details><br>

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
