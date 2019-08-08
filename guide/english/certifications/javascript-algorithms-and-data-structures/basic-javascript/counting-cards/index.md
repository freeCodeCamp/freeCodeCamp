---
title: Counting Cards
---

# Counting Cards


---
## Hints

### Hint 1

Use a `switch` (or `else if`) statement to count the value of each card.


### Hint 2

Add/subtract the value of each card to variable **count**. If the card is worth 0, don't do anything.


### Hint 3

After you've counted the cards, use an `if` statement to check the value of **count**. Also, make sure your `return` has a space between the number and the string.



---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function cc(card) {
  // Only change code below this line
  switch (card) {
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
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  // Only change code above this line
}
```
#### Code Explanation

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
</details>


<details><summary>Solution 2 (Click to Show/Hide)</summary>

```javascript
function cc(card) {
  // Only change code below this line
  var regex = /[JQKA]/;
  if (card > 1 && card < 7) {
    count++;
  } else if (card === 10 || String(card).match(regex)) {
    count--;
  }

  if (count > 0) return count + " Bet";
  return count + " Hold";

  // Only change code above this line
}
```

#### Code Explanation
· The function first evaluates `if` the condition `card` is a value greater than `1` and lower than `7`, in which case it increments `count` by one.
· Then if the card is `10` or higher it decrements `count` by one.
· The variable `regex` is a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) representing values (letters) for the higher cards.
· The `else` statement checks those values with the `|| (logical OR)` operator; first for `10` and then for any string that matches the regular expression using [String.match()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match).

#### Relevant Links

*   <a href='https://en.wikipedia.org/wiki/Card_counting' target='_blank' rel='nofollow'>Card counting at Wikipedia</a>
*   <a href='http://www.freecodecamp.com/challenges/selecting-from-many-options-with-switch-statements' target='_blank' rel='nofollow'>Challenge: Selecting from many options with Switch Statements</a>
*   <a href='http://www.freecodecamp.com/challenges/chaining-if-else-statements' target='_blank' rel='nofollow'>Challenge: Chaining If Else Statements</a>
*   <a href='http://www.freecodecamp.com/challenges/increment-a-number-with-javascript' target='_blank' rel='nofollow'>Challenge: Increment a Number with JavaScript</a>
</details>
