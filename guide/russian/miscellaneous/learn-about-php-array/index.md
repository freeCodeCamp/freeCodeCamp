---
title: Learn About Php Array
localeTitle: Узнайте о массиве Php
---
# PHP-массив
```
Array Can Store multiple values in single Varible. 
 let's think that you have a list of cars like ( 'BMW', 'Honda', Swift, 'XUV' ) 
 
 but you want to separate this by categories like sport car, xuv. 
 but you need to put it in a single varible then you need two arrays 
 
 ## Let's Solve this By Programming 
 
   <?php 
          $sport_cars = array('BMW', 'Honda'); 
          $xuv_cars = array('Swift', 'XUV'); 
          echo "Sport Cars List: " . $sport_cars[0] . ", " . $sport_cars[1] . "."; 
          echo "XUV Cars List: " . $xuv_cars[0] . ", " . $xuv_cars[1] . "."; 
    ?> 
 
 Output: 
    Sport Cars List: BMW, Honda. 
    XUV Cars List: Swift, XUV. 
```

Обратите внимание, что: array - индекс от 0 до n, вы можете получить доступ к каждому значению, пройдя туда  
номер индекса к переменной, как следует
```
echo $sport_cars[0]; 
 
 output: 
    BMW 
```

Подобно этому вы можете получить доступ к элементу в массиве