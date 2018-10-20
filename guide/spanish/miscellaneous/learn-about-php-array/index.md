---
title: Learn About Php Array
localeTitle: Aprender sobre php array
---
# PHP Array
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

Tenga en cuenta que: la matriz es un índice de 0 a n, puede acceder a cada valor al pasar allí  
número de índice a variable como sigue
```
echo $sport_cars[0]; 
 
 output: 
    BMW 
```

Al igual que puedes acceder al elemento en array.