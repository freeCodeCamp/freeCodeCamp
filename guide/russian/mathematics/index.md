---
title: Mathematics
localeTitle: Математика
---
## Математика

В этом разделе мы имеем руководства для самых разных математических понятий.

### Математика в программировании

Хотя это хорошая практика для создания математических функций самостоятельно, есть математические библиотеки, доступные для использования на многих языках программирования. Эти имеют предопределенные функции, которые вы можете использовать для выполнения вычислений. В программировании вы обычно охватываете такие темы, как эти, в теория вычислений, дизайн алгоритмов и дизайн компьютерного языка.

#### Последовательность Фибоначчи (генерирующие функции)

Мы все знаем, что упражнение рекурсии начинается с решения последовательности fibonaaci. Это также первый пример, демонстрирующий мощь динамического программирования. Таким образом, это особый случай класса математики, известного как производящие функции. Итак, то, что мы будем здесь обсуждать, в общем случае относится ко всей функции genrating. В математике есть понятие: «Каждая производящая функция имеет последовательность, и каждая последовательность имеет производящую функцию». Но проблема возникает во второй части. Найти генерацию вообще не всегда легко. Чтобы помнить об этом, я рисую аналогию с неограничивающим рациональным числом «Если вы знаете число в десятичной форме, нелегко найти соответствующую дробную форму, но если мы знаем дробь, всегда легко найти десятичную форма». Итак, мы обычно изучаем некоторые довольно красивые производящие функции в терминах их последовательности. Зачем? Потому что, мы знаем, что последовательности легко справляются с помощью много алгоритмической парадигмы. Известны известные известные последовательности: фибоначчи, хадамар (похожие на каталанские) и т. Д.

### Включая математические библиотеки

В этом разделе мы покажем вам, как включить стандартную математическую библиотеку на разные языки, включая короткий пример того, как вы можете ее использовать.

#### С

\`\` \`cs используя System.Math;

public class Calculator {

private int \[\] array = {1, 2, 3, 4, 5};

private int CalculatePoweredArray (int power, int \[\] arr) { var poweredArray = arr; foreach (int nmbr в powerArray) { nmbr = Math.Pow (nmbr, мощность); // Первый аргумент - это число, которое должно быть поднято, вторым аргументом является мощность } return poweredArray; }

}
```
Calling the function with a power of 3 will give these results: 
 [1, 8, 27, 64, 125] 
 
 Documentation reference: <a href='https://msdn.microsoft.com/en-us/library/system.math(v=vs.110' target='_blank' rel='nofollow'>MSDN</a>.aspx) 
 
 #### JavaScript 
 With Node.js 
```

Javascript var math = require ('mathjs');
```
In the browser 
```

HTML

// use the math.js libary math.sqrt(-4); // result: 2i
```
Documentation reference: <a href='http://mathjs.org/docs/index.html' target='_blank' rel='nofollow'>Math.js documentation</a> 
 
 #### C++ 
```

CPP

# включают
```
Documentation reference: <a href='http://www.cplusplus.com/reference/cmath/' target='_blank' rel='nofollow'>cplusplus reference</a> 
 
 #### Python 
```

питон

> > > импортная математика math.sqrt (9) // учитывает только положительные корни 3.0 math.pi // вы также можете использовать математические согласные, такие как pi и e +3,141592653589793 math.radians (90) // преобразует градусы в радианы 1,5707963267948966
```
In addition to the standard `math` module, there are several other mathematical helper libraries available on [PyPI](https://pypi.org/). For example: 
```

оболочка $ pip install numpy $ python

> > > импортировать numpy как np np.zeros ((3,4))
```
This returns a 3x4 array populated with 0s. 
 
 #### Java 
```

Ява import java.lang.Math
```
The `math` module can also be imported as follows, and the usage difference is illustrated: 
```

питон

> > > от математического импорта \* SQRT (4) 2,0 Пи +3,141592653589793

\`\` \`

Ссылка на документацию: [Python 2](https://docs.python.org/2/library/math.html) | [Python 3](https://docs.python.org/3/library/math.html)

### Дополнительные ресурсы

Анимированные визуализации математических понятий можно найти в [3 Blue 1 Brown](http://www.3blue1brown.com/) and [Khan Academy](https://www.khanacademy.org/) .