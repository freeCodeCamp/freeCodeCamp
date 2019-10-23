---
title: Factors of a Mersenne number
id: 598eea87e5cf4b116c3ff81a
challengeType: 5
forumTopicId: 302264
localeTitle: Факторы числа Мерсенны
---

## Description
<section id='description'>
<p> Число Мерсенна - это число в виде 2 <sup>P</sup> -1. </p><p> Если P является простым, число Мерсенна может быть простым числом Мерсенна </p><p> (если P не является простым, число Мерсенна также не является простым). </p><p> При поиске простых чисел Мерсенна выгодно исключить экспоненты путем нахождения небольшого коэффициента перед началом потенциально длительного <a href="http://rosettacode.org/wiki/Lucas-Lehmer test" title="Тест Лукаса-Лемера">теста Lucas-Lehmer</a> . </p><p> Существуют очень эффективные алгоритмы для определения того, делит ли число 2 <sup>P</sup> -1 (или, что то же самое, если 2 <sup>P</sup> mod (число) = 1). </p><p> Некоторые языки уже имеют встроенные реализации этой операции экспонента и мода (называемые modPow или аналогичные). </p><p> Ниже описано, как реализовать этот modPow самостоятельно: </p><p> Например, давайте вычислим 2 <sup>23</sup> mod 47. </p><p> Преобразуйте экспонента 23 в двоичный код, вы получите 10111. Начиная с <tt>квадрата</tt> = 1, многократно меняйте его. </p><p> Удалите верхний бит экспоненты, и если это 1 умножить <tt>квадрат</tt> на основание экспоненции (2), тогда вычислите <tt>квадрат</tt> по модулю 47. </p><p> Используйте результат модуляции с последнего шага в качестве начального значения <tt>квадрата</tt> на следующем шаге: </p><p> Удалить необязательный </p><p> квадратный верхний бит умножается на 2 mod 47 </p><p> ------------ ------- ------------- ------ </p><p> 1 * 1 = 1 1 0111 1 * 2 = 2 2 </p><p> 2 * 2 = 4 0 111 нет 4 </p><p> 4 * 4 = 16 1 11 16 * 2 = 32 32 </p><p> 32 * 32 = 1024 1 1 1024 * 2 = 2048 27 </p><p> 27 * 27 = 729 1 729 * 2 = 1458 1 </p><p> Так как 2 <sup>23</sup> mod 47 = 1, 47 является фактором 2 <sup>P</sup> -1. </p><p> (Чтобы увидеть это, вычтите 1 с обеих сторон: 2 <sup>23</sup> -1 = 0 mod 47.) </p><p> Поскольку мы показали, что 47 является фактором, 2 <sup>23</sup> -1 не является простым. </p><p> Дальнейшие свойства чисел Мерсенна позволяют нам еще больше усовершенствовать процесс. </p><p> Любой фактор q из 2 <sup>P</sup> -1 должен иметь вид 2kP + 1, k - положительное целое число или ноль. Кроме того, q должно быть 1 или 7 mod 8. </p><p> Наконец, любой потенциальный фактор q должен быть <a href="http://rosettacode.org/wiki/Primality by Trial Division" title="Приоритет Судебного отдела">простым</a> . </p><p> Как и в других алгоритмах пробного деления, алгоритм останавливается, когда 2kP + 1&gt; sqrt (N). </p><p> Эти тесты на примитивность работают только на числа Мерсенна, где P является простым. Например, M <sub>4</sub> = 15 не дает никаких факторов, использующих эти методы, но факторы в 3 и 5, ни один из которых не соответствует 2kP + 1. </p> Задача: <p> Используя приведенный выше метод, найдите коэффициент 2 <sup>929</sup> -1 (ака M929) </p> Задачи, связанные с данной темой: <a href="http://rosettacode.org/wiki/count in factors" title="считать в факторах">подсчет в факторах</a> <a href="http://rosettacode.org/wiki/prime decomposition" title="простое разложение">простых</a> <a href="http://rosettacode.org/wiki/count in factors" title="считать в факторах">коэффициентов</a> <a href="http://rosettacode.org/wiki/prime decomposition" title="простое разложение">декомпозиции</a> <a href="http://rosettacode.org/wiki/factors of an integer" title="факторы целого числа">целочисленного</a> <a href="http://rosettacode.org/wiki/Sieve of Eratosthenes" title="Сито Эратосфена">сита</a> <a href="http://rosettacode.org/wiki/primality by trial division" title="примитивность путем пробного разделения">примитивности</a> <a href="http://rosettacode.org/wiki/Sieve of Eratosthenes" title="Сито Эратосфена">Эратосфена</a> <a href="http://rosettacode.org/wiki/primality by trial division" title="примитивность путем пробного разделения">методом пробного деления</a> <a href="http://rosettacode.org/wiki/trial factoring of a Mersenne number" title="пробный факторинг числа Мерсенны">пробного факторинга числа</a> <a href="http://rosettacode.org/wiki/partition an integer X into N primes" title="перечислим целое число X в N простых чисел">чисел</a> <a href="http://rosettacode.org/wiki/trial factoring of a Mersenne number" title="пробный факторинг числа Мерсенны">Мерсенна</a> <a href="http://rosettacode.org/wiki/partition an integer X into N primes" title="перечислим целое число X в N простых чисел">- целое число X в N простых</a> <a href="http://rosettacode.org/wiki/sequence of primes by Trial Division" title="последовательность простых чисел в Судебном отделе">порядков простых чисел с помощью Trial Division</a> <a href="https://www.youtube.com/watch?v=SNwvJ7psoow" title="link: https://www.youtube.com/watch?v=SNwvJ7psoow">Computers в 1948 году: 2¹²⁷-1</a>
</section>

## Instructions
<section id='instructions'>
Using the above method find a factor of  <code>2<sup>929</sup>-1</code> (aka M929)
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>check_mersenne</code> is a function.
    testString: assert(typeof check_mersenne === 'function');
  - text: <code>check_mersenne(3)</code> should return a string.
    testString: assert(typeof check_mersenne(3) == 'string');
  - text: <code>check_mersenne(3)</code> should return "M3 = 2^3-1 is prime".
    testString: assert.equal(check_mersenne(3),"M3 = 2^3-1 is prime");
  - text: <code>check_mersenne(23)</code> should return "M23 = 2^23-1 is composite with factor 47".
    testString: assert.equal(check_mersenne(23),"M23 = 2^23-1 is composite with factor 47");
  - text: <code>check_mersenne(929)</code> should return "M929 = 2^929-1 is composite with factor 13007
    testString: assert.equal(check_mersenne(929),"M929 = 2^929-1 is composite with factor 13007");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function check_mersenne(p) {
  // Good luck!
}

```

</div>

</section>

## Solution
<section id='solution'>

```js
function check_mersenne(p){
    function isPrime(value){
      for (let i=2; i < value; i++){
        if (value % i == 0){
          return false;
        }
        if (value % i != 0){
          return true;
         }
      }
    }

    function trial_factor(base, exp, mod){
      let square, bits;
      square = 1;
      bits = exp.toString(2).split('');
      for (let i=0,ln=bits.length; i<ln; i++){
        square = Math.pow(square, 2) * (bits[i] == 1 ? base : 1) % mod;
      }
      return (square == 1);
    }

    function mersenne_factor(p){
      let limit, k, q;
      limit = Math.sqrt(Math.pow(2,p) - 1);
      k = 1;
      while ((2*k*p - 1) < limit){
        q = 2*k*p + 1;
        if (isPrime(q) && (q % 8 == 1 || q % 8 == 7) && trial_factor(2,p,q)){
          return q; // q is a factor of 2**p-1
        }
        k++;
      }
      return null;
    }
  let f, result;
  result="M"+p+" = 2^"+p+"-1 is ";
  f = mersenne_factor(p);
  result+=f == null ? "prime" : "composite with factor "+f;
  return result;
}
```

</section>
