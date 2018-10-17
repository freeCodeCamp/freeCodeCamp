---
title: Common Array Methods
localeTitle: Métodos comunes de matriz
---
## Métodos comunes de matriz

Ruby Arrays forma una base fundamental en la programación en Ruby, y la mayoría de los lenguajes de hecho. Se utiliza tanto que sería beneficioso conocer e incluso memorizar algunos de los métodos más utilizados para los arreglos. Si quieres saber más sobre Ruby Arrays, tenemos [un artículo sobre ellos](https://guide.freecodecamp.org/ruby/ruby-arrays) .

Para los fines de esta guía, nuestra matriz será la siguiente:

\`\` \`rubí array = \[0, 1, 2, 3, 4\]
```
#### .length 
 The .length method tallies the number of elements in your array and returns the count: 
```

rubí array.length => 5
```
#### .first 
 The .first method accesses the first element of the array, the element at index 0: 
```

rubí array.first => 0
```
#### .last 
 The .last method accesses the last element of the array: 
```

rubí array.last => 4
```
#### .take 
 The .take method returns the first n elements of the array: 
```

rubí array.take (3) => \[0, 1, 2\]
```
#### .drop 
 The .drop method returns the elements after n elements of the array: 
```

rubí array.drop (3) => \[3, 4\]
```
#### array index 
 You can access a specific element in an array by accessing its index. If the index does not exist in the array, nil will be returned: 
```

rubí array \[2\] => 2

array \[5\] => nil
```
#### .pop 
 The .pop method will permantently remove the last element of an array: 
```

rubí array.pop => \[0, 1, 2, 3\]
```
#### .shift 
 The .shift method will permantently remove the first element of an array and return this element: 
```

rubí array.shift => 0  
formación => \[1, 2, 3, 4\]
```
#### .push 
 The .push method will allow you to add an element to the end of an array: 
```

rubí array.push (99) => \[0, 1, 2, 3, 4, 99\]
```
#### .unshift 
 The .unshift method will allow you to add an element to the beginning of an array: 
```

array = \[2, 3\] array.unshift (1) => \[1, 2, 3\]
```
#### .delete 
 The .delete method removes a specified element from an array permanently: 
```

rubí array.delete (1) => \[0, 2, 3, 4\]
```
#### .delete_at 
 The .delete_at method allows you to permanently remove an element of an array at a specified index: 
```

rubí array.delete\_at (0) => \[1, 2, 3, 4\]
```
#### .reverse 
 The .reverse method reverses the array but does not mutate it (the original array stays as is): 
```

rubí array.reverse => \[4, 3, 2, 1, 0\]
```
#### .select 
 The .select method iterates over an array and returns a new array that includes any items that return true to the expression provided. 
```

rubí array = \[1, 2, 3, 4, 5, 6, 7, 8, 9, 10\] array.select {| number | número> 4} => \[5, 6, 7, 8, 9, 10\] formación => \[5, 6, 7, 8, 9, 10\]
```
#### .include? 
 The include? method checks to see if the argument given is included in the array: 
```

rubí array = \[1, 2, 3, 4, 5\] => \[1, 2, 3, 4, 5\] array.include? (3) => verdadero

#### .aplanar

El método de aplanamiento se puede usar para tomar una matriz que contiene matrices anidadas y crear una matriz unidimensional:

\`\` \`rubí array = \[1, 2, \[3, 4, 5\], \[6, 7\]\] array.flatten => \[1, 2, 3, 4, 5, 6, 7\]
```
#### .join 
 The .join method returns a string of all the elements of the array separated by a separator parameter. If the separator parameter is nil, the method uses an empty string as a separator between strings. 
```

rubí array.join => "1234" array.join (" _") => "1_ 2 _3_ 4"
```
#### .each 
 The .each method iterates over each element of the array, allowing you to perform actions on them. 
```

rubí array.each do | elemento | pone elemento fin => 0 1 2 3 4
```
#### .map 
 The .map method is the same as the .collect method. The .map and .collect methods iterate over each element of the array, allowing you to perform actions on them. The .map and .collect methods differ from the .each method in that they return an array containing the transformed elements. 
```

rubí array.map {| element | elemento \* 2} pone elemento fin => 0 2 4 6 8
```
#### .uniq 
 The .uniq method takes in an array containing duplicate elements, and returns a copy of the array containing only unique elements--any duplicate elements are removed from the array. 
```

rubí array = \[1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 6, 7, 8\] array.uniq => \[1, 2, 3, 4, 5, 6, 7, 8\]
```
#### .concat 
 The .concat method appends the elements from an array to the original array. The .concat method can take in multiple arrays as an argument, which will in turn append multiple arrays to the original array. 
```

rubí array = \[0, 1, 2, 3, 4\] array.concat (\[5, 6, 7\], \[8, 9, 10\]) => \[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10\] \`\` \`

## Más información

*   [Documentos de Ruby Array](http://ruby-doc.org/core-2.5.1/Array.html)