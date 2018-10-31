---
title: Ruby For Loops
localeTitle: Ruby For Loops
---
## Ruby For Loops

Ruby para bucles se utilizan para hacer un bucle o iterar sobre una serie de elementos y ejecutar bloques de código para cada elemento. Para los bucles se utilizan a menudo en matrices. Ver la sección de [matrices de rubíes](https://github.com/freeCodeCamp/guides/blob/master/src/pages/ruby/ruby-arrays/index.md) .

Para los bucles son simplemente un ejemplo de bucle o iteración sobre elementos. A continuación se muestra un ejemplo de un bucle for:
```
for element in array do 
  puts element 
 end 
```

Hay muchas formas diferentes en las que puedes ejecutar un bucle for o bucle en Ruby, otro ejemplo sería:
```
element.each do |element| 
  puts element 
 end 
```

Esto lograría exactamente los mismos resultados que el bucle anterior, sin embargo, es más limpio y eficiente, ya que hace uso de los métodos incorporados de Array.

Para ir un paso más allá, podemos escribir el bucle anterior de la siguiente manera:
```
element.each do { |element| puts element } 

```