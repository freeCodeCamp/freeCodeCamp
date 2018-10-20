---
title: Learn About Php Array
localeTitle: 了解Php阵列
---
# PHP数组
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

注意：数组是从0到n的索引，您可以通过传递来访问每个值  
索引号到变量如下
```
echo $sport_cars[0]; 
 
 output: 
    BMW 
```

就像那样你可以访问数组中的元素