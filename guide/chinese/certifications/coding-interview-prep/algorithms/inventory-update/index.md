---
title: Inventory Update
localeTitle: 库存更新
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

在这个问题中，您需要将存储在2D阵列中的库存与新交付的第二个2D阵列进行比较和更新。更新当前现有库存物料数量（在`arr1` ）。如果找不到商品，请将新商品和数量添加到库存数组中。返回的库存数组应按项目的字母顺序排列。

当前和新的库存将采用以下格式： `[[2, "item-0"], [3, "item-1"], [67, "item-2"], [7, "item-3"]]` 。

#### 相关链接

*   [JS阵列](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

您需要处理新库存的每个项目，以查看它是否存在于当前库存中。请记住，产品名称存储为每个子数组的第二个元素： `array[0][1] = "item-name"` 。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

如果该项目存在，则需要添加新库存中的数量。如果该项目不存在，则需要添加整个项目。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

按字母顺序返回已完成的库存。

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案

```javascript
    function updateInventory(arr1, arr2) { 
 
        // Variable for location of product 
        var index; 
 
        // A helper method to return the index of a specified product (undefined if not found) 
        var getProductIndex = function (name) { 
            for (var i = 0; i < this.length; i++) { 
                if (this[i][1] === name) { 
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

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLok/0)

### 代码说明：

*   变量**索引**存储产品的位置（索引）。
*   辅助函数`getProductIndex()`返回指定产品的索引。它遍历调用它的数组的每个元素，直到它可以找到name参数。如果在清单中找不到产品，则返回`undefined` 。
*   然后，新库存（交货）中的每个项目都通过以下方式完成：
*   **index**设置为调用辅助函数的结果，即在新库存中搜索该产品名称并返回其索引。
*   如果找到该项目，则将产品数量添加到当前库存中相同产品的数量。
*   如果未找到该项目，则会将整个产品（名称和数量）添加到当前库存中。
*   然后，更新的库存**arr1**按产品名称排序（保存在`arr1[x][1]` ）。
*   然后返回最终更新和排序的数组。

#### 相关链接

*   [JS这个](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this)
*   [JS Array.length](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
*   [JS Array.prototype.push（）](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [JS Array.prototype.sort（）](http://forum.freecodecamp.com/t/javascript-array-prototype-sort/14306)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 "：向日葵：")中级代码解决方案：

```javascript
    function updateInventory(arr1, arr2) { 
      // All inventory must be accounted for or you're fired! 
 
      var index; 
      var arrCurInvName = []; // Names of arr1's items 
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

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLol/0)

### 代码说明：

*   变量**索引**存储产品的位置（索引）。
*   **arrCurInvName**具有**arr1**项的名称。
*   **arrNeInvName**具有**arr2**项的名称。
*   `arr1.map(function(item1))`负责处理库存中已存在的项目，即增加库存中的数量。
*   接下来， `arr2.map(function(item))`和`arr1.map(function(item))`获取新库存和当前库存的商品名称。
*   `arrNeInvName.map(function(item))`处理库存中尚不存在的项目，即它将新项目添加到库存中。
*   然后，按产品名称（保存在`arr1[x][1]` ）按字母顺序对已更新的数组**arr1**进行排序并返回。

#### 相关链接

*   [JS Array.prototype.map（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
*   [JS Array.prototype.indexOf（）](http://forum.freecodecamp.com/t/javascript-array-prototype-indexof/14291)
*   [JS三元运营商](http://forum.freecodecamp.com/t/javascript-ternary-operator/15973)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 "：rotating_light：")高级代码解决方案

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

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/MQvv/latest)

### 代码说明：

*   将当前库存数组**arr1**转换为一维数组，以便`indexOf()`方法可用于检查当前库存中新交货项目的存在。
*   使用`indexOf()`检查当前库存中是否已存在项目。
*   如果项目存在更新数量并继续循环执行。
*   否则将项目附加到库存。
*   最后，按字母顺序对数组进行排序并返回更新的库存。

#### 相关链接

*   [JS Function.prototype.apply（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
*   [JS继续](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue)
*   [JS Array.prototype.sort（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")
*   如果您添加了任何**相关的主要内容，**请仅添加您的用户名。 （ ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **_不要_** _删除任何现有的用户名_ ）

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。
