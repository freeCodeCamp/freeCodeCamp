---
title: Sum All Primes
localeTitle: Sum All Primes
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 "：triangular_flag_on_post：")如果卡住，请记得使用**`Read-Search-Ask`** 。尝试配对程序![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 "：busts_in_silhouette：")并编写自己的代码![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 "：铅笔：")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 "：checkered_flag：")问题说明：

这个问题的解释非常简单。您将生成一个素数列表，最多为您作为参数给出的数字。然后你需要将它们全部添加并返回该值。棘手的部分是生成素数列表。我建议你找一个代码或一个好的数学算法，你可以把它变成代码。

#### 相关链接

*   [质数](https://en.wikipedia.org/wiki/Prime_number)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：1

生成所有数字的列表，包括您作为参数获得的数字。这将需要确定哪些数字是素数。

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：2

如果您希望找到寻找素数的解决方案，或者尝试学习并实施您自己[的Eratosthenes筛，](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)请查看此[链接](https://stackoverflow.com/questions/11966520/how-to-find-prime-numbers-between-0-100)

> _现在尝试解决问题_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 "：speech_balloon：")提示：3

如果你必须创建自己的代码来检查质数，这个问题很难，所以如果你不得不使用某人的代码，那就不要感到难过。无论哪种方式，你最有可能使用数组，所以一旦你生成了一个素数数组，那么只需将它们全部添加并返回你得到的数字。

> _现在尝试解决问题_

## 扰流警报！

![警告牌](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**提前解决！**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 "：初学者：")基本代码解决方案
```
function sumPrimes(num) { 
  var res = 0; 
 
  // Function to get the primes up to max in an array 
  function getPrimes(max) { 
    var sieve = []; 
    var i; 
    var j; 
    var primes = []; 
    for (i = 2; i <= max; ++i) { 
      if (!sieve[i]) { 
        // i has not been marked -- it is prime 
        primes.push(i); 
        for (j = i << 1; j <= max; j += i) { 
          sieve[j] = true; 
        } 
      } 
    } 
 
    return primes; 
  } 
 
  // Add the primes 
  var primes = getPrimes(num); 
  for (var p = 0; p < primes.length; p++) { 
    res += primes[p]; 
  } 
 
  return res; 
 } 
 
 // test here 
 sumPrimes(10); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLnZ/0)

### 代码说明：

*   创建一个生成从1到**num**的数字的函数，并检查它们是否是沿途的素数。
*   声明将需要的变量。
*   从2开始，如果它没有被标记并添加到筛子阵列那么它是素数并且我们将它添加到素数阵列。
*   将其他人添加到筛子阵列中。
*   返回素数
*   循环返回的数组并添加所有元素然后返回最终值。

#### 相关链接

*   [JS for Loops解释](https://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 "：向日葵：")中级代码解决方案：
```
function sumPrimes(num) { 
  // function to check if the number presented is prime 
  function isPrime(number){ 
      for (i = 2; i <= number; i++){ 
          if(number % i === 0 && number!= i){ 
          // return true if it is divisible by any number that is not itself. 
             return false; 
          } 
       } 
       // if it passes the for loops conditions it is a prime 
      return true; 
  } 
  // 1 is not a prime, so return nothing, also stops the recursive calls. 
  if (num === 1){ 
    return 0; 
  } 
  // Check if your number is not prime 
  if(isPrime(num) === false){ 
  // for non primes check the next number down from your maximum number, do not add anything to your answer 
    return sumPrimes(num - 1); 
  } 
 
  // Check if your number is prime 
  if(isPrime(num) === true){ 
  // for primes add that number to the next number in the sequence through a recursive call to our sumPrimes function. 
    return num + sumPrimes(num - 1); 
  } 
 } 
 // test here 
 sumPrimes(10); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/CLn0/0)

### 代码说明：

*   函数`isPrime`检查特定数字是否为素数。
*   如果`num`为1，则返回0，因为1不是素数。
*   如果**num**不是prime，请从最大数字开始检查下一个数字。
*   如果**num**是prime，则通过递归到`sumPrimes`函数将其添加到序列中的下一个数字。

#### 相关链接

*   [函数 - 递归](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Recursion)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 "：rotating_light：")高级代码解决方案
```
function sumPrimes(num) { 
  // step 1 
  let arr = Array.from({length: num+1}, (v, k) => k).slice(2); 
  // step 2 
  let onlyPrimes = arr.filter( (n) => { 
    let m = n-1; 
    while (m > 1 && m >= Math.sqrt(n)) { 
      if ((n % m) === 0) 
        return false; 
        m--; 
    } 
      return true; 
  }); 
  // step 3 
  return onlyPrimes.reduce((a,b) => a+b); 
 } 
 // test here 
 sumPrimes(977); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [运行代码](https://repl.it/DoOo/3)

### 代码说明：

*   **步骤1：**使用`Array.from()`生成一系列数字，包括`num` 。与`.slice()`组合以`.slice()`前两个索引`[0, 1]`因为所有素数必须大于1。
*   **步骤2：**滤出的所有数字`arr`是不是素数由每个元件经受的_“试除法测试”，_其_“包括由每个整数米大于1且小于或等于n的平方根除以n个“_ 。如果任何小于正在操作的元素（m）的数字在所述元素（n）除以它时不产生余数，则该测试返回`false` 。有关详细信息，请参阅下面的链接。
*   **第3步：**使用`.reduce()`返回arr的所有剩余元素的总和。

### 相关链接

*   [试验分部测试](https://en.wikipedia.org/wiki/Prime_number#Trial_division)
*   [Array.from（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Examples)
*   [Array.filter（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 "：剪贴板：")捐款说明：

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 "：警告：") **请勿**添加与任何现有解决方案类似的解决方案。如果您认为它**_相似但更好_** ，那么尝试合并（或替换）现有的类似解决方案。
*   添加解决方案的说明。
*   将解决方案分为以下类别之一 - **基本** ， **中级**和**高级** 。 ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 "：红绿灯：")

> 看到![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 "：point_right：") [**`Wiki Challenge Solution Template`**](https://forum.freecodecamp.com/t/algorithm-article-template/14272)供参考。