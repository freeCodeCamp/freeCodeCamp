---
title: Record Collection
localeTitle: 记录收集
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

您将获得一个JSON对象，表示您的记录集合（的一小部分）。每张专辑都由唯一的ID号标识，并具有多个属性。并非所有相册都有完整的信息。

编写一个带有**id** ，属性（ **prop** ）和**值的函数** 。

对于**集合中**的给定**id** ：

如果**value**为非空（ **value！==“”** ），则更新或设置**prop**的**值** 。

如果**prop**是**“tracks”**并且**value**是非空白的，请检查数组中的给定元素是否具有“tracks”属性。如果元素具有“轨迹”属性，则将**值**推到“轨迹”数组的末尾。如果元素没有该**属性** ，请创建属性和值对。

如果**值为**空，请删除该**道具** 。

始终返回整个集合对象。

*   更改下面的代码`// Only change code below this line` ，最多更改`// Alter values below to test your code` 。
*   请注意，您正在编辑`updateRecords`函数的内部。
*   对于与**集合**对象关联的给定**id**参数：
    *   如果**value**参数不是空字符串，则更新（或设置） **prop**参数的**value**参数。
    *   如果**prop**参数等于`"tracks"`且**值**不是空字符串，则将**值**推到**tracks**数组的末尾。
    *   如果**value**是空字符串，则从对象中删除该**prop** 。
*   最后，返回**集合**对象。

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

使用`else if`语句检查所需的步骤。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

说明中列出的第二步应首先在您的`else if`语句中。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

要访问此对象中键的值，您将使用`collection[id][prop]` 。

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案
```
function updateRecords(id, prop, value) { 
  if (prop === "tracks" && value !== "") { 
   if(collection[id][prop]) { 
    collection[id][prop].push(value); 
   } 
   else { 
    collection[id][prop]=[value]; 
   } 
  } else if (value !== "") { 
    collection[id][prop] = value; 
  } else { 
    delete collection[id][prop]; 
  } 
 
  return collection; 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/C2AZ/0)

### 代码说明：

*   首先检查**prop**是否等于**轨道** AND如果**值**不是空字符串。如果两个测试都通过，则将**值**推入**轨道**数组。
*   如果第一次检查未通过，则接下来只检查**值**是否为空字符串。如果该测试通过，则将新键（ **prop** ）和值（ **值** ）添加到对象，或者如果**prop**已存在则更新现有键。
*   如果这两个检查都失败（意味着**值**必须是空字符串），则从对象中删除密钥（ **prop** ）。

**示例运行**

*   `updateRecords(5439, "artist", "ABBA");`运行。
*   **prop**等于“artist”，而不是“tracks”，所以`else if`语句的第一部分失败了。
*   **value**不是空字符串，因此else if语句的第二部分传递。
*   `artist: "ABBA"`被添加到`5439` `id` 。

### 资源：

*   [fCC的挑战：使用括号表示法访问对象属性](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-bracket-notation/)
*   [fCC的挑战：向JavaScript对象添加新属性](http://www.freecodecamp.com/challenges/add-new-properties-to-a-javascript-object)
*   [fCC的挑战：从JavaScript对象中删除属性](http://www.freecodecamp.com/challenges/delete-properties-from-a-javascript-object)
*   [fCC的挑战：访问嵌套对象](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/accessing-nested-objects/)
*   [“Array.prototype.push（）” - _MDN JavaScript参考_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*   [“删除运算符” - _MDN JavaScript参考_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)