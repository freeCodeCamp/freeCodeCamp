---
title: Reverse a String
---

# Reverse a String


---
## Hints

### Hint 1
We need to take the string and reverse it, so if it originally reads 'hello', it will now read 'olleh'. We will need to split the string, and therefore we will be working with Arrays as well.

### Hint 2

Start by splitting the string by characters.

#### Relevant Links
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split' target='_blank' rel='nofollow'>str.split()</a>

### Hint 3

Look up the built in function to reverse a string.

#### Relevant Links
*   <a href='https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse' target='_blank' rel='nofollow'>arr.reverse()</a>

### Hint 4

Do not forget to join the characters back together after you reverse them.

#### Relevant Links
*   <a href='https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/join' target='_blank' rel='nofollow'>arr.join()</a>



---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}
```

#### Code Explanation

*   Our goal is to take the input, `str`, and return it in reverse. Our first step is to split the string by characters using `split('')`. Notice that we don't leave anything in between the single quotes, this tells the function to split the string by each character.

*   Using the `split()` function will turn our string into an array of characters, keep that in mind as we move forward.

*   Next we _chain_ the `reverse()` function, which takes our array of characters and reverses them.

*   Finally, we _chain_ `join('')` to put our characters back together into a string. Notice once again that we left no spaces in the argument for join, this makes sure that the array of characters is joined back together by each character.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split' target='_blank' rel='nofollow'>str.split()</a>
*   <a href='https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse' target='_blank' rel='nofollow'>arr.reverse()</a>
*   <a href='https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/join' target='_blank' rel='nofollow'>arr.join()</a>
</details>


<details><summary>Solution 2 (Click to Show/Hide)</summary>

```js
function reverseString(str) {
  for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
```

#### Code Explanation

* Starting at the last character of the string passed to the function, you build a new string `reversedStr` from `str`.

* During each iteration of the `for` loop, `reversedStr` gets concatenated with itself and the current character.

* Finally, you return the final value of `reversedStr`.

</details>
