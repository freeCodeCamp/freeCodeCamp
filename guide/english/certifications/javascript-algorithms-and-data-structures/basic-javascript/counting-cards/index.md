---
title: Counting Cards
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

In the casino game **Blackjack**, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called card counting.

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

Value | Cards  
----- | :-------------------:  
+1 | 2, 3, 4, 5, 6  
0 | 7, 8, 9  
-1 | 10, 'J', 'Q', 'K','A'

You will write a card counting function. It will receive a **card** parameter and increment or decrement the global **count** variable according to the card's value (see table). The function will then return a string with the current count and the string `Bet` if the count is positive, or `Hold` if the count is zero or negative. The current count and the player's decision (`Bet` or `Hold`) should be separated by a single space.

*   Change the code below `// Only change code below this line` and up to `// Only change code above this line`
*   Ensure that you are editing the inside of the `cc` function.
*   Use what you've learned to check the value of each **card** parameter passed into the function.
*   Keep a running count of that number.
*   If the final count is 1 or greater, return **# Hold**.
*   If the final count is 0 or less, return **# Bet**.

**Example Output:**

*   -3 Hold
*   5 Bet


## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

Use a `switch` (or `else if`) statement to count the value of each card.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

Add/subtract the value of each card to variable **count**. If the card is worth 0, don't do anything.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

After you've counted the cards, use an `if` statement to check the value of **count**. Also, make sure your `return` has a space between the number and the string.

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:
```javascript
    function cc(card) {
      // Only change code below this line
      switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
          count++;
          break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
          count--;
          break;
      }
      if (count > 0){
        return count + " Bet";
      } else {
        return count + " Hold";
      }
      // Only change code above this line
    }
```
### Code Explanation:

*   Check the value of each card via a `switch` statement.
*   The variable **count**:
    *   Increases by 1 if the card is a 2, 3, 4, 5, or 6.
    *   Since 7, 8, and 9 aren't worth anything, we ignore those cards in our `switch` statement.
    *   Decreases by 1 if the card is a 10, 'J', 'Q', 'K', or 'A'.
*   Check the value of **count** and return the appropriate response.

**Example Run**

*   `cc(2);` runs.
*   The `switch` statement hits `case 2`, jumps down and adds 1 to the variable `count`.
*   The `switch` statement then hits the `break` and `cc(3);` runs.
*   This cycle continues until the final call is made, `cc('A');`.
*   After the `switch` statement, the `if` statement checks `count`, which is now 0.
*   This then drops down to the `else` statement, which will return **0 Hold**.

**_Note_**: As mentioned earlier, the `switch` statement could have also been an `else if` statement.


## Additional code solution:

```javascript
function cc(card) {
  // Only change code below this line
  var regex = /[JQKA]/;
  if (card > 1 && card < 7){count++;}
  else if (card === 10 || String(card).match(regex)){count--;}

  if (count > 0) return count + " Bet";
  return count + " Hold";

  // Only change code above this line
}
```
·  Run code at [repl.it](https://repl.it/@AdrianSkar/Basic-JS-Counting-cards).

### Code explanation
· The function first evaluates `if` the condition `card` is a value greater than `1` and lower than `7`, in which case it increments `count` by one.
· Then if the card is `10` or higher it decrements `count` by one.
· The variable `regex` is a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) representing values (letters) for the higher cards.
· The `else` statement checks those values with the `|| (logical OR)` operator; first for `10` and then for any string that matches the regular expression using [String.match()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match).

#### Resources

*   <a href='https://en.wikipedia.org/wiki/Card_counting' target='_blank' rel='nofollow'>Card counting at Wikipedia</a>
*   <a href='http://www.freecodecamp.com/challenges/selecting-from-many-options-with-switch-statements' target='_blank' rel='nofollow'>Challenge: Selecting from many options with Switch Statements</a>
*   <a href='http://www.freecodecamp.com/challenges/chaining-if-else-statements' target='_blank' rel='nofollow'>Challenge: Chaining If Else Statements</a>
*   <a href='http://www.freecodecamp.com/challenges/increment-a-number-with-javascript' target='_blank' rel='nofollow'>Challenge: Increment a Number with Javascript</a>
