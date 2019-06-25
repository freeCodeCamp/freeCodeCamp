---
title: Inventory Update
localeTitle: Обновление инвентаря
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

В этой проблеме вы должны сравнивать и обновлять инвентарь, хранящийся в 2D-массиве, против второго 2D-массива новой доставки. Обновите текущие объемы инвентарных количеств (в `arr1` ). Если элемент не найден, добавьте новый элемент и количество в массив инвентаря. Возвращаемый массив инвентаря должен быть в алфавитном порядке по позиции.

Текущий, а также новый инвентарь будут в этом формате: `[[2, "item-0"], [3, "item-1"], [67, "item-2"], [7, "item-3"]]` .

#### Связанные ссылки

*   [JS Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

Вам нужно проработать каждый элемент нового инвентаря, чтобы узнать, существует ли он в текущем инвентаре или нет. Помните, что имя продукта хранится как второй элемент каждого вспомогательного массива: `array[0][1] = "item-name"` .

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

Если элемент существует, вам нужно добавить количество из нового инвентаря. Если элемент не существует, вам необходимо добавить весь элемент.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

Верните завершенный инвентарь в алфавитном порядке.

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:

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

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLok/0)

### Код Объяснение:

*   **Индексная** переменная хранит расположение (индекс) продукта.
*   Вспомогательная функция `getProductIndex()` возвращает индекс указанного продукта. Он выполняет итерацию через каждый элемент массива, на который он вызывается, пока не найдет параметр имени. Если продукт не найден в инвентаре, возвращается `undefined` .
*   Затем каждый элемент нового инвентаря (доставки) обрабатывается:
*   **index** устанавливается на результат вызова вспомогательной функции, т. е. поиск нового инвентаря для этого имени продукта и возврат его индекса.
*   Если элемент найден, количество продукта добавляется к количеству одного и того же продукта в текущем инвентаре.
*   Если элемент не найден, весь товар (имя и количество) добавляется в текущий инвентарь.
*   Обновленный инвентарь, **arr1** , затем сортируется по названию продукта (проводится в `arr1[x][1]` ).
*   Затем возвращается окончательный - обновленный, а также отсортированный массив.

#### Связанные ссылки

*   [JS это](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this)
*   [JS Array.length](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
*   [JS Array.prototype.push ()](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [JS Array.prototype.sort ()](http://forum.freecodecamp.com/t/javascript-array-prototype-sort/14306)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ": Подсолнечное:") Решение промежуточного кода:

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

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLol/0)

### Код Объяснение:

*   **Индексная** переменная хранит расположение (индекс) продукта.
*   **У arrCurInvName** есть имена элементов **arr1** .
*   **Имя arrNeInvName** имеет имена элементов **arr2** .
*   `arr1.map(function(item1))` заботится о предметах, уже существующих в инвентаре, то есть увеличивает количество в инвентаре.
*   Затем `arr2.map(function(item))` и `arr1.map(function(item))` получают имена элементов для нового и текущего инвентаря соответственно.
*   `arrNeInvName.map(function(item))` обрабатывает элементы, которые еще не существуют в инвентаре, то есть добавляет новые предметы в инвентарь.
*   Обновленный массив **arr1** затем сортируется по алфавиту по названию продукта (проводится в `arr1[x][1]` ) и возвращается.

#### Связанные ссылки

*   [JS Array.prototype.map ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
*   [JS Array.prototype.indexOf ()](http://forum.freecodecamp.com/t/javascript-array-prototype-indexof/14291)
*   [Терминальный оператор JS](http://forum.freecodecamp.com/t/javascript-ternary-operator/15973)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": Rotating_light:") Расширенное решение для кода:

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

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/MQvv/latest)

### Код Объяснение:

*   Преобразуйте текущий массив инвентаризации **arr1** в одномерный массив, чтобы `indexOf()` мог использоваться для проверки наличия новых элементов поставки в текущем инвентаре.
*   Проверьте, существует ли элемент в текущем инвентаре, используя `indexOf()` .
*   Если элемент содержит количество обновлений и выполнение цикла цикла.
*   Просто добавьте элемент в инвентарь.
*   Наконец, отсортируйте массив по алфавиту и верните обновленный инвентарь.

#### Связанные ссылки

*   [JS Function.prototype.apply ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
*   [JS продолжается](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue)
*   [JS Array.prototype.sort ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")
*   Пожалуйста, добавьте свое имя пользователя, только если вы добавили **соответствующее основное содержимое** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **_НЕ_** _удаляйте существующие имена пользователей_ )

> Видеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.
