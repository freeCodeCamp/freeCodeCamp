---
title: Ruby String Methods
localeTitle: Métodos de cadena de rubíes
---
## Métodos de cadena de rubíes

Ruby tiene muchos métodos integrados para trabajar con cadenas. Las cadenas en Ruby por defecto son mutables y se pueden cambiar en el lugar o se puede devolver una nueva cadena desde un método.

### Longitud:

*   La propiedad `.length` devuelve el número de caracteres en una cadena que incluye espacios en blanco. `ruby "Hello".length #=> 5 "Hello World!".length #=> 12`

### Vacío:

*   El `.empty?` el método devuelve `true` si una cadena tiene una longitud de cero. `ruby "Hello".empty? #=> false "!".empty? #=> false " ".empty? #=> false "".empty? #=> true`

### Contar:

*   El método `.count` cuenta la cantidad de veces que se encuentran caracteres específicos en una cadena.
*   Este método distingue entre mayúsculas y minúsculas. `ruby "HELLO".count('L') #=> 2 "HELLO WORLD!".count('LO') #=> 1`

### Insertar:

*   El método `.insert` inserta una cadena en otra cadena antes de un índice dado. `ruby "Hello".insert(3, "hi5") #=> Helhi5lo # "hi5" is inserted into the string right before the second 'l' which is at index 3`

### Upcase

*   El método `.upcase` transforma todas las letras de una cadena a mayúsculas. `ruby "Hello".upcase #=> HELLO`

### Downcase

*   El método `.downcase` transforma todas las letras de una cadena a minúsculas. `ruby "Hello".downcase #=> hello`

### Swapcase

*   El método `.swapcase` transforma las letras mayúsculas en mayúsculas en minúsculas y las letras en minúsculas en mayúsculas. `ruby "hELLO wORLD".swapcase #=> Hello World`

### Capitalizar:

*   El método `.capitalize` la primera letra de una cadena en mayúsculas y el resto de la cadena en minúsculas. `ruby "HELLO".capitalize #=> Hello "HELLO, HOW ARE YOU?".capitalize #=> Hello, how are you?`

_Tenga en cuenta que la primera letra solo está en mayúscula si está al principio de la cadena._ `ruby "-HELLO".capitalize #=> -hello "1HELLO".capitalize #=> 1hello`

### Marcha atrás:

*   El método `.reverse` invierte el orden de los caracteres en una cadena. `ruby "Hello World!".reverse #=> "!dlroW olleH"`

### División:

*   El `.split` toma una cadena y la _divide_ en una matriz, luego devuelve la matriz.
    
    ```ruby
    "Hello, how are you?".split #=> ["Hello,", "how", "are", "you?"] 
    
    ```
    
*   El método predeterminado divide la cadena en función del espacio en blanco, a menos que se proporcione un separador diferente (ver segundo ejemplo). `ruby "Hello".split('-') #=> ["H", "e", "l", "l", "o"]`
    

### Picar:

*   El método `.chop` elimina el último carácter de la cadena.
    
*   Se devuelve una nueva cadena, a menos que use el `.chop!` Método que muta la cadena original.
    
    ```ruby
    "Name".chop #=> Nam 
    
    ```
    
    ```ruby
    name = "Batman" 
     name.chop 
     name == "Batma" #=> false 
    
    ```
    
    ```ruby
    name = "Batman" 
     name.chop! 
     name == "Batma" #=> true 
    
    ```
    

### Tira:

*   El método `.strip` elimina los espacios en blanco `.strip` y finales en las cadenas, incluidas las pestañas, las nuevas líneas y los retornos de carro ( `\t` , `\n` , `\r` ). `ruby " Hello ".strip #=> Hello`

### Chomp:

*   El método `.chomp` elimina el último carácter de una cadena, solo si es un retorno de carro o una nueva línea ( `\r` , `\n` ).
*   Este método se usa comúnmente con el comando `gets` para eliminar los retornos de la entrada del usuario. ``ruby "hello\r".chomp #=> hello "hello\t".chomp #=> hello\t # because tabs and other whitespace remain intact when using `chomp` ``

### A entero

*   El método `.to_i` convierte una cadena en un entero. `ruby "15".to_i #=> 15 # integer`

### Gsub:

*   `gsub` reemplaza cada referencia del primer parámetro para el segundo parámetro en una cadena.

```ruby
"ruby is cool".gsub("cool", "very cool") #=> "ruby is very cool" 
```

*   `gsub` también acepta patrones (como _regexp_ ) como primer parámetro, permitiendo cosas como:

```ruby
"ruby is cool".gsub(/[aeiou]/, "*") #=> "r*by *sc**l" 
```

### Concatenación:

*   Ruby implementa algunos métodos para concatenar dos cadenas juntas:
    
*   El método `+` :
    
    ```ruby
    "15" + "15" #=> "1515" # string 
    
    ```
    
*   El `<<` método:
    
    ```ruby
    "15" << "15" #=> "1515" # string 
    
    ```
    
*   El método `concat` : `ruby "15".concat "15" #=> "1515" # string`
    

### Índice:

*   El método de `index` devuelve la posición de índice de la primera aparición de la subcadena o la coincidencia del patrón de expresión regular en una cadena.
    
*   Si no se encuentra ninguna coincidencia, se devuelve `nil` .
    
*   Un segundo parámetro opcional indica qué posición del índice en la cadena para comenzar a buscar una coincidencia.
    
    ```ruby
    "information".index('o') #=> 3 
     "information".index('mat') #=> 5 
     "information".index(/[abc]/) #=> 6 
     "information".index('o', 5) #=> 9 
     "information".index('z') #=> nil 
    
    ```
    

### Claro:

*   Elimina el contenido de la cadena. `ruby a = "abcde" a.clear #=> ""`