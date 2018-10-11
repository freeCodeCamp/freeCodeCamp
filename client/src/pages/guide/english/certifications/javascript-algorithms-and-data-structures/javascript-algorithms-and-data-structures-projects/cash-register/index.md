---
title: Cash Register
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

*   You have to create a program that will return an object containing a `status` key and a `change` key. The value of `status` is the string `INSUFFICIENT_FUNDS`, `CLOSED`, or `OPEN`, and the value of `change` is a 2D array of the change due.

#### Relevant Links

*   <a>Data Structure Arrays</a>

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

*   It is easier when you know how much money is in your register beforehand. For this it is recommended to have a function to assign this information to a variable. Then you can see if you have enough money to complete the transaction and return change, or if you should close the register.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

*   This problem is easier when you know the value of each bill or coin you are working with, rather than just the sum of each in the register. For example, it's useful to know that a nickel is worth .05, along with the fact that you have $2.05 worth of nickels in the cash register.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

*   You will have to get as much change from one type of bill or coin before moving to the next, from greater to lesser value. Keep going until you have calculated all the change due.

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Beginner Code Solution:

    // Create an array of objects which hold the denominations and their values
    var denom = [
      { name: 'ONE HUNDRED', val: 100.00},
      { name: 'TWENTY', val: 20.00},
      { name: 'TEN', val: 10.00},
      { name: 'FIVE', val: 5.00},
      { name: 'ONE', val: 1.00},
      { name: 'QUARTER', val: 0.25},
      { name: 'DIME', val: 0.10},
      { name: 'NICKEL', val: 0.05},
      { name: 'PENNY', val: 0.01}
    ];

    function checkCashRegister(price, cash, cid) {
      var output = { status: null, change: [] };
      var change = cash - price;

      // Transform CID array into drawer object
      var register = cid.reduce(function(acc, curr) {
        acc.total += curr[1];
        acc[curr[0]] = curr[1];
        return acc;
      }, { total: 0 });

      // Handle exact change
      if (register.total === change) {
        output.status = 'CLOSED';
        output.change = cid;
        return output;
      }

      // Handle obvious insufficient funds
      if (register.total < change) {
        output.status = 'INSUFFICIENT_FUNDS';
        return output;
      }

      // Loop through the denomination array
      var change_arr = denom.reduce(function(acc, curr) {
        var value = 0;
        // While there is still money of this type in the drawer
        // And while the denomination is larger than the change remaining
        while (register[curr.name] > 0 && change >= curr.val) {
          change -= curr.val;
          register[curr.name] -= curr.val;
          value += curr.val;

          // Round change to the nearest hundreth deals with precision errors
          change = Math.round(change * 100) / 100;
        }
        // Add this denomination to the output only if any was used.
        if (value > 0) {
            acc.push([ curr.name, value ]);
        }
        return acc; // Return the current change_arr
      }, []); // Initial value of empty array for reduce

      // If there are no elements in change_arr or we have leftover change, return
      // the string "Insufficient Funds"
      if (change_arr.length < 1 || change > 0) {
        output.status = 'INSUFFICIENT_FUNDS';
        return output;
      }

      // Here is your change, ma'am.
      output.status = 'OPEN';
      output.change = change_arr;
      return output;
    }

    // test here
    checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/@scissorsneedfoo/cash-register-example' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

First, create an array of objects with the value of each denomination of bill or coin, along with an output object with the status and change keys. Next, transform the CID array into a drawer object. Then, handle the conditions of exact change and insufficient funds. Loop through the `denom` array and update the change and values while there is still money of each type in the drawer and while the denomination is larger than the change remaining. Add this denomination to the accumulator of `change_arr` if any of this type was used. After the loop, `change_arr` is a 2D array of the change due, sorted from highest to lowest denomination. If there are no elements in `change_arr` or you still owe change, return the output object with a status of `INSUFFICIENT_FUNDS`. Finally you can give the correct change. Return the output object with a status of `OPEN` and `change_arr` as the value of change.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299' target='_blank' rel='nofollow'>JS Array Reduce</a>
*   <a href='http://forum.freecodecamp.com/t/using-array-prototype-reduce-to-reduce-conceptual-boilerplate-for-problems-on-arrays/14687' target='_blank' rel='nofollow'>JS Reduce Made Easy</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-loops/14681' target='_blank' rel='nofollow'>JS Loops</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298' target='_blank' rel='nofollow'>JS Array Push</a>

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
*   Add an explanation of your solution.
*   Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
*   Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") <a href='http://forum.freecodecamp.com/t/algorithm-article-template/14272' target='_blank' rel='nofollow'>**`Wiki Challenge Solution Template`**</a> for reference.
