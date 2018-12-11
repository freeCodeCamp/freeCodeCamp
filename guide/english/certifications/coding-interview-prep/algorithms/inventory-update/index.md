---
title: Inventory Update
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ":triangular_flag_on_post:") Remember to use <a>**`Read-Search-Ask`**</a> if you get stuck. Try to pair program ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ":busts_in_silhouette:") and write your own code ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":pencil:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":checkered_flag:") Problem Explanation:

In this problem, you've to compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in `arr1`). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

The current as well as new inventory will be in this format: `[[2, "item-0"], [3, "item-1"], [67, "item-2"], [7, "item-3"]]`.

#### Relevant Links

* <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array' target='_blank' rel='nofollow'>JS Array</a>

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 1

You need to work through each item of the new inventory to see if it exists in the current inventory or not. Remember that the product name is stored as the second element of each sub-array: `array[0][1] = "item-name"`.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 2

If the item exists, you need to add the quantity from the new inventory. If the item doesn't exist, you need to add the entire item.

> _try to solve the problem now_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:") Hint: 3

Return the completed inventory in alphabetical order.

> _try to solve the problem now_

## Spoiler Alert!

![warning sign](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Solution ahead!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

```javascript
    function updateInventory(arr1, arr2) {

        // Variable for location of product
        var index;

        // A helper method to return the index of a specified product (undefined if not found)
        var getProductIndex = function (name) {
            for (var i = 0; i < this.length; i++) {
                if (this<a href='https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"' target='_blank' rel='nofollow'>i][1] === name) {
                    return i;
                }
            }
            return undefined;
        }

        // For each item of the new Inventory
        for (var i = 0; i < arr2.length; i++) {

            // Invoke our helper function using arr1 as this
            index = getProductIndex.call(arr1, arr2[i][1]);

            // If the item doesn't exist
            if (index === undefined) {
                // Push the entire item
                arr1.push(arr2[i]);
            } else {
                // Add the new quantity of the current item
                arr1[index][0] += arr2[i][0];
            }

        }

        // Sort alphabetically, by the product name of each item
        arr1.sort(function (a, b) {
            if (a[1] > b[1]) {
                return 1;
            }
            if (a[1] < b[1]) {
                return -1;
            }
            return 0;
        });

        return arr1;
    }

    // test here
    // Example inventory lists
    var curInv = [
        [21, "Bowling Ball"],
        [2, "Dirty Sock"],
        [1, "Hair Pin"],
        [5, "Microphone"]
    ];

    var newInv = [
        [2, "Hair Pin"],
        [3, "Half-Eaten Apple"],
        [67, "Bowling Ball"],
        [7, "Toothpaste"]
    ];

    updateInventory(curInv, newInv);
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLok/0' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

* The variable **index** stores the location (index) of a product.
* The helper function `getProductIndex()` returns the index of a specified product. It iterates through each element of the array that it is called on until it can find the name parameter. If the product is not found in the inventory, `undefined` is returned.
* Then, each item in the new inventory (delivery) is worked through:
  * **index** is set to the result of invoking the helper function i.e., search the new inventory for that product name and return its index.
  * If the item is found, quantity of the product is added to the quantity of the same product in current inventory.
  * If the item is not found, the entire product (name and quantity) is added to the current inventory.
* The updated inventory, **arr1**, is then sorted by product name (held in `arr1[x][1]`).
* The final - updated as well as sorted array is then returned.

#### Relevant Links

* <a href='https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this' target='_blank' rel='nofollow'>JS this</a>
* <a href='https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length' target='_blank' rel='nofollow'>JS Array.length</a>
* <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298' target='_blank' rel='nofollow'>JS Array.prototype.push()</a>
* <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-sort/14306' target='_blank' rel='nofollow'>JS Array.prototype.sort()</a>

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":sunflower:") Intermediate Code Solution:

```javascript
    function updateInventory(arr1, arr2) {
      // All inventory must be accounted for or you're fired!

      var index;
      var arrCurInvName = <a href='https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"' target='_blank' rel='nofollow'>]; // Names of arr1's items
      var arrNeInvName = []; // Names of arr2's items

      // Same as using two for loops, this takes care of increasing the number of stock quantity.
      arr1.map(function(item1) {
        return arr2.map(function(item2) {
          if (item1[1] === item2[1]) {
            item1[0] = item1[0] + item2[0]; //Increase number of stock
          }
        });
      });

      // Get item's name for new Inventory
      arr2.map(function(item) {
        arrNeInvName.push(item[1]);
      });

      // Get item's name for Current Inventory
      arr1.map(function(item) {
        arrCurInvName.push(item[1]);
      });

      // Add new inventory items to current inventory.
      arrNeInvName.map(function(item) {
        if (arrCurInvName.indexOf(item) === -1) {
          index = arrNeInvName.indexOf(item);
          arr1.push(arr2[index]);
        }
      });

      // Sort the array alphabetically using the second element of the array as base.
      arr1.sort(function(currItem, nextItem) {

        //Ternary function to avoid using if else
        return currItem[1] > nextItem[1] ? 1 : -1;
      });

      return arr1;
    }

    // test here
    // Example inventory lists
    var curInv = [
        [21, "Bowling Ball"],
        [2, "Dirty Sock"],
        [1, "Hair Pin"],
        [5, "Microphone"]
    ];

    var newInv = [
        [2, "Hair Pin"],
        [3, "Half-Eaten Apple"],
        [67, "Bowling Ball"],
        [7, "Toothpaste"]
    ];

    updateInventory(curInv, newInv);
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/CLol/0' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

* The variable **index** stores the location (index) of a product.
* **arrCurInvName** has the names of **arr1**'s items.
* **arrNeInvName** has the names of **arr2**'s items.
* `arr1.map(function(item1))` takes care of items already existing in inventory i.e., it increases the quantity in the inventory.
* Next, `arr2.map(function(item))` and `arr1.map(function(item))` get the names of items for the new and current inventory respectively.
* `arrNeInvName.map(function(item))` handles items which don't already exist in inventory i.e., it adds new items to the inventory.
* The updated array **arr1** is then sorted alphabetically by product name (held in `arr1[x][1]`) and returned.

#### Relevant Links

* <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map' target='_blank' rel='nofollow'>JS Array.prototype.map()</a>
* <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-indexof/14291' target='_blank' rel='nofollow'>JS Array.prototype.indexOf()</a>
* <a href='http://forum.freecodecamp.com/t/javascript-ternary-operator/15973' target='_blank' rel='nofollow'>JS Ternary Operator</a>

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ":rotating_light:") Advanced Code Solution:

```javascript
    function updateInventory(arr1, arr2) {
      // All inventory must be accounted for or you're fired!

      // convert current inventory (arr1) to an one-dimensional array
      const inventory = Array.prototype.concat.apply([], arr1);

      // loop through new delivery (arr2)
      for (let i = 0; i < arr2.length; i++) {

        // extract item properties for easy reference
        const item = arr2[i][1];
        const quantity = arr2[i][0];

        // check if item already exists in inventory
        const position = inventory.indexOf(item);

        // exsisting item: update quantity
        if (position !== -1) {
          const row = Math.floor(position / 2);
          arr1[row][0] += quantity;
          continue;
        }

        // alien item: add to inventory
        arr1.push([quantity, item]);

      }

      // sort inventory in alphabetical order
      arr1.sort((previous, next) => (previous[1] > [next[1]]) ? 1 : -1);

      return arr1;

    }


    // test here
    // Example inventory lists
    var curInv = [
        [21, "Bowling Ball"],
        [2, "Dirty Sock"],
        [1, "Hair Pin"],
        [5, "Microphone"]
    ];

    var newInv = [
        [2, "Hair Pin"],
        [3, "Half-Eaten Apple"],
        [67, "Bowling Ball"],
        [7, "Toothpaste"]
    ];

    updateInventory(curInv, newInv);
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/MQvv/latest' target='_blank' rel='nofollow'>Run Code</a>

### Code Explanation:

* Convert current inventory array **arr1** to an one-dimensional array in order that `indexOf()` method could be used to check existance of new delivery items in current inventory.
* Check if item already exists in current inventory using `indexOf()`.
* If item exists update quantity and continue loop execution.
* Else append item to inventory.
* Finally, sort the array alphabetically and return the updated inventory.

#### Relevant Links

* <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply'>JS Function.prototype.apply()</a>
* <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue' target='_blank' rel='nofollow'>JS continue</a>
* <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort' target='_blank' rel='nofollow'>JS Array.prototype.sort()</a>

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":clipboard:") NOTES FOR CONTRIBUTIONS:

* ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **DO NOT** add solutions that are similar to any existing solutions. If you think it is **_similar but better_**, then try to merge (or replace) the existing similar solution.
* Add an explanation of your solution.
* Categorize the solution in one of the following categories — **Basic**, **Intermediate** and **Advanced**. ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":traffic_light:")
* Please add your username only if you have added any **relevant main contents**. (![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":warning:") **_DO NOT_** _remove any existing usernames_)

> See ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ":point_right:") <a href='http://forum.freecodecamp.com/t/algorithm-article-template/14272' target='_blank' rel='nofollow'>**`Wiki Challenge Solution Template`**</a> for reference.
