---
title: Ruby String Methods
localeTitle: Методы Ruby String
---
## Методы Ruby String

Ruby имеет много встроенных методов для работы со строками. Строки в Ruby по умолчанию изменяемы и могут быть изменены на месте или новая строка может быть возвращена из метода.

### Длина:

*   Свойство `.length` возвращает количество символов в строке, включая пробел. `ruby "Hello".length #=> 5 "Hello World!".length #=> 12`

### Empty:

*   `.empty?` метод возвращает `true` если длина строки равна нулю. `ruby "Hello".empty? #=> false "!".empty? #=> false " ".empty? #=> false "".empty? #=> true`

### Количество:

*   Метод `.count` подсчитывает, сколько раз в строке содержится определенный символ (символы).
*   Этот метод чувствителен к регистру. `ruby "HELLO".count('L') #=> 2 "HELLO WORLD!".count('LO') #=> 1`

### Вставка:

*   Метод `.insert` вставляет строку в другую строку перед данным индексом. `ruby "Hello".insert(3, "hi5") #=> Helhi5lo # "hi5" is inserted into the string right before the second 'l' which is at index 3`

### Upcase:

*   Метод `.upcase` преобразует все буквы в строке в верхний регистр. `ruby "Hello".upcase #=> HELLO`

### Downcase:

*   Метод `.downcase` преобразует все буквы в строку в нижний регистр. `ruby "Hello".downcase #=> hello`

### Swapcase

*   Метод `.swapcase` преобразует `.swapcase` в строке в нижний регистр и строчные буквы в верхний регистр. `ruby "hELLO wORLD".swapcase #=> Hello World`

### прописной:

*   Метод `.capitalize` делает первую букву в строке в верхнем регистре, а остальную часть строки строчной. `ruby "HELLO".capitalize #=> Hello "HELLO, HOW ARE YOU?".capitalize #=> Hello, how are you?`

_Обратите внимание, что первая буква только заглавная, если она находится в начале строки._ `ruby "-HELLO".capitalize #=> -hello "1HELLO".capitalize #=> 1hello`

### Задний ход:

*   `.reverse` метод отменяет порядок символов в строке. `ruby "Hello World!".reverse #=> "!dlroW olleH"`

### Трещина:

*   `.split` берет строки и _разбивает_ их на массив, а затем возвращает массив.
    
    ```ruby
    "Hello, how are you?".split #=> ["Hello,", "how", "are", "you?"] 
    
    ```
    
*   Метод по умолчанию разбивает строку на основе пробелов, если не указан другой разделитель (см. Второй пример). `ruby "Hello".split('-') #=> ["H", "e", "l", "l", "o"]`
    

### Чоп:

*   Метод `.chop` удаляет последний символ строки.
    
*   Возвращается новая строка, если вы не используете `.chop!` метод, который мутирует исходную строку.
    
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
    

### Газа:

*   Метод `.strip` удаляет ведущие и конечные пробелы в строках, включая табуляции, новые строки и возврат каретки ( `\t` , `\n` , `\r` ). `ruby " Hello ".strip #=> Hello`

### Chomp:

*   Метод `.chomp` удаляет последний символ в строке, только если это возврат каретки или `.chomp` строка ( `\r` , `\n` ).
*   Этот метод обычно используется с командой `gets` для удаления возвратов из пользовательского ввода. ``ruby "hello\r".chomp #=> hello "hello\t".chomp #=> hello\t # because tabs and other whitespace remain intact when using `chomp` ``

### К Integer:

*   Метод `.to_i` преобразует строку в целое число. `ruby "15".to_i #=> 15 # integer`

### GSUB:

*   `gsub` заменяет каждую ссылку первого параметра для второго параметра на строку.

```ruby
"ruby is cool".gsub("cool", "very cool") #=> "ruby is very cool" 
```

*   `gsub` также принимает шаблоны (например, _regexp_ ) в качестве первого параметра, позволяя такие вещи, как:

```ruby
"ruby is cool".gsub(/[aeiou]/, "*") #=> "r*by *sc**l" 
```

### конкатенация:

*   Ruby реализует некоторые методы, чтобы объединить две строки вместе:
    
*   Метод `+` :
    
    ```ruby
    "15" + "15" #=> "1515" # string 
    
    ```
    
*   Метод `<<` :
    
    ```ruby
    "15" << "15" #=> "1515" # string 
    
    ```
    
*   Метод `concat` : `ruby "15".concat "15" #=> "1515" # string`
    

### Индекс:

*   Метод `index` возвращает позицию индекса первого совпадения соответствия подстроки или шаблона регулярного выражения в строке.
    
*   Если совпадения не найдено, возвращается `nil` .
    
*   Второй необязательный параметр указывает, какая позиция индекса в строке начала поиск совпадения.
    
    ```ruby
    "information".index('o') #=> 3 
     "information".index('mat') #=> 5 
     "information".index(/[abc]/) #=> 6 
     "information".index('o', 5) #=> 9 
     "information".index('z') #=> nil 
    
    ```
    

### Очистить:

*   Удаляет содержимое строки. `ruby a = "abcde" a.clear #=> ""`