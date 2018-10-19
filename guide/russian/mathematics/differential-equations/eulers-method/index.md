---
title: Euler's Method
localeTitle: Метод Эйлера
---
# Метод Эйлера

Метод Эйлера представляет собой численную процедуру первого порядка для решения обыкновенных дифференциальных уравнений (ОДУ) с заданным начальным значением.

## Общая проблема с начальным значением

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn006.png)

## методология

Метод Эйлера использует простую формулу,

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn3.png)

построить касательную в точке `x` и получить значение `y(x+h)` , наклон которого равен,

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn008.png)

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/Euler.png)

В методе Эйлера вы можете аппроксимировать кривую решения касательной в каждом интервале (т. Е. Последовательностью коротких отрезков) на шагах `h` .

_В общем_ случае, если вы используете небольшой размер шага, точность приближения возрастает.

## Общая формула

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn7.png)

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn_new_2.png)

## Функциональное значение в любой точке `b` , заданное `y(b)`

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn6.png)

где,

*   **n** = количество шагов
*   **h** = ширина интервала (размер каждого шага)

### ПСЕВДОКОД

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn_new_1.png)

## пример

Найти `y(1)` , учитывая

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/eqn007.png)

Решая аналитически решение, _**y = e x**_ и `y(1)` = `2.71828` . (Примечание. Это аналитическое решение предназначено только для сравнения точности.)

Используя метод Эйлера, рассматривая `h` = `0.2` , `0.1` , `0.01` , вы можете увидеть результаты на диаграмме ниже.

![](https://raw.githubusercontent.com/pranabendra/articles/master/Euler-method/images/comparison.png)

Когда `h` = `0.2` , `y(1)` = `2.48832` (ошибка = 8,46%)

Когда `h` = `0.1` , `y(1)` = `2.59374` (ошибка = 4,58%)

Когда `h` = `0.01` , `y(1)` = `2.70481` (ошибка = 0,50%)

Вы можете заметить, насколько точность улучшается, когда шаги малы.

## Дополнительная информация:

1.  [Численные методы решения дифференциальных уравнений](http://calculuslab.deltacollege.edu/ODE/7-C-1/7-C-1-h-c.html)
2.  [Метод Эйлера](https://en.wikipedia.org/wiki/Euler_method)