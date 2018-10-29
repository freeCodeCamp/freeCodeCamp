---
title: Sum All Primes
localeTitle: Сумма всех чисел
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": Triangular_flag_on_post:") Не забудьте использовать **`Read-Search-Ask`** если вы застряли. Попробуйте подключить программу ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": Busts_in_silhouette:") и напишите свой собственный код ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":карандаш:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ": Checkered_flag:") Проблема Объяснение:

Объяснение этой проблемы очень просто. Вы сгенерируете список простых чисел до числа, которое вы укажете в качестве параметра. Затем вам нужно добавить их все и вернуть это значение. Сложная часть заключается в создании списка простых чисел. Я предлагаю вам найти код или хороший математический алгоритм, который вы можете превратить в код.

#### Связанные ссылки

*   [Простые числа](https://en.wikipedia.org/wiki/Prime_number)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 1

Создайте список всех номеров до и включая тот, который вы получили в качестве параметра. Это необходимо для определения того, какие числа являются первичными или нет.

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 2

Проверьте эту [ссылку,](https://stackoverflow.com/questions/11966520/how-to-find-prime-numbers-between-0-100) если вы предпочитаете находить решение для поиска простых чисел или пытаетесь изучить и внедрить свое собственное [Сито Эратосфена](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)

> _попытаться решить проблему сейчас_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": Speech_balloon:") Подсказка: 3

Эта проблема сложна, если вам нужно создать свой собственный код для проверки простых чисел, поэтому не чувствуйте себя плохо, если вам нужно использовать чей-то код для этого бита. В любом случае, вы, скорее всего, используете массив, поэтому, как только вы создадите массив простых чисел, просто добавьте их и верните номер, который вы получите.

> _попытаться решить проблему сейчас_

## Осторожно, спойлеры!

![предупреждающий знак](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Решение впереди!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ": Начинающий:") Решение базового кода:
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

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLnZ/0)

### Код Объяснение:

*   Создайте функцию, которая генерирует числа от 1 до **num** и проверяет, являются ли они первыми на этом пути.
*   Объявите переменные, которые понадобятся.
*   Начните с 2, если он не был помечен и добавлен в решетку сита, то он является простым и мы добавляем его в простой массив.
*   Добавьте остальные в решетку решета.
*   Вернуть простые числа
*   Прокрутите возвращаемый массив и добавьте все элементы, чтобы затем вернуть окончательное значение.

#### Связанные ссылки

*   [JS для пояснений](https://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ": Подсолнечное:") Решение промежуточного кода:
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

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/CLn0/0)

### Код Объяснение:

*   Функция `isPrime` проверяет, является ли конкретное число простым или нет.
*   Если `num` равно 1, верните 0, так как 1 не является простым числом.
*   Если **num** не является простым, проверьте следующее число с максимального числа.
*   Если **num** является простым, добавьте его к следующему номеру в последовательности через рекурсию в функцию `sumPrimes` .

#### Связанные ссылки

*   [Функции - Рекурсия](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Recursion)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": Rotating_light:") Расширенное решение для кода:
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

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ": Ракета:") [Код запуска](https://repl.it/DoOo/3)

### Код Объяснение:

*   **Шаг 1.** Используйте `Array.from()` для генерации последовательности чисел до и включите `num` . Объедините с `.slice()` чтобы `.slice()` первые два индекса `[0, 1]` поскольку все простые числа должны быть больше 1.
*   **Шаг 2:** Отфильтруйте все числа от `arr` , которые не являются первичными, подвергая каждый элемент _«пробному делению»,_ который _«состоит из деления n на каждое целое число m, которое больше 1 и меньше или равно квадратному корню из n "_ . Этот тест возвращает `false` если любое число, меньшее, чем элемент, который работает (m), не дает остатка, когда указанный элемент (n) делится на него. Подробнее см. Ссылку ниже.
*   **Шаг 3.** Возвращаем сумму всех оставшихся элементов arr, используя `.reduce()` .

### Связанные ссылки

*   [Испытание пробного дивизиона](https://en.wikipedia.org/wiki/Prime_number#Trial_division)
*   [Array.from ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Examples)
*   [Array.filter ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": Буфер обмена:") ПРИМЕЧАНИЯ ДЛЯ ВЗНОСОВ:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":предупреждение:") **НЕ** добавляйте решения, похожие на любые существующие решения. Если вы считаете, что это **_похоже, но лучше_** , попробуйте объединить (или заменить) существующее подобное решение.
*   Добавьте объяснение своего решения.
*   Классифицируйте решение в одной из следующих категорий - **Basic** , **Intermediate** и **Advanced** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":светофор:")

> Видеть ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": Point_right:") [**`Wiki Challenge Solution Template`**](https://forum.freecodecamp.com/t/algorithm-article-template/14272) для [**`Wiki Challenge Solution Template`**](https://forum.freecodecamp.com/t/algorithm-article-template/14272) для справки.