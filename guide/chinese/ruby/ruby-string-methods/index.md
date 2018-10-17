---
title: Ruby String Methods
localeTitle: Ruby字符串方法
---
## Ruby字符串方法

Ruby有许多内置的方法来处理字符串。默认情况下，Ruby中的字符串是可变的，可以在适当的位置更改，也可以从方法返回新的字符串。

### 长度：

*   `.length`属性返回包含空格的字符串中的字符数。 `ruby "Hello".length #=> 5 "Hello World!".length #=> 12`

### 空：

*   `.empty?`如果字符串的长度为零，则method返回`true` 。 `ruby "Hello".empty? #=> false "!".empty? #=> false " ".empty? #=> false "".empty? #=> true`

### 计数：

*   `.count`方法计算在字符串中找到特定字符的次数。
*   此方法区分大小写。 `ruby "HELLO".count('L') #=> 2 "HELLO WORLD!".count('LO') #=> 1`

### 插入：

*   `.insert`方法在给定索引之前将字符串插入另一个字符串。 `ruby "Hello".insert(3, "hi5") #=> Helhi5lo # "hi5" is inserted into the string right before the second 'l' which is at index 3`

### Upcase：

*   `.upcase`方法将字符串中的所有字母转换为大写。 `ruby "Hello".upcase #=> HELLO`

### Downcase：

*   `.downcase`方法将字符串中的所有字母转换为小写。 `ruby "Hello".downcase #=> hello`

### 的swapCase

*   `.swapcase`方法将字符串中的大写`.swapcase`转换为小写，将小写字母转换为大写。 `ruby "hELLO wORLD".swapcase #=> Hello World`

### 大写：

*   `.capitalize`方法使字符串中的第一个字母为大写，字符串的其余部分为小写。 `ruby "HELLO".capitalize #=> Hello "HELLO, HOW ARE YOU?".capitalize #=> Hello, how are you?`

_请注意，如果第一个字母位于字符串的开头，则仅大写。_ `ruby "-HELLO".capitalize #=> -hello "1HELLO".capitalize #=> 1hello`

### 相反：

*   `.reverse`方法反转字符串中字符的顺序。 `ruby "Hello World!".reverse #=> "!dlroW olleH"`

### 分裂：

*   `.split`接受一个字符串并将其_拆分_为一个数组，然后返回该数组。
    
    ```ruby
    "Hello, how are you?".split #=> ["Hello,", "how", "are", "you?"] 
    
    ```
    
*   默认方法基于空格拆分字符串，除非提供了不同的分隔符（请参阅第二个示例）。 `ruby "Hello".split('-') #=> ["H", "e", "l", "l", "o"]`
    

### 劈：

*   `.chop`方法删除字符串的最后一个字符。
    
*   除非使用`.chop!` ，否则返回一个新字符串`.chop!`改变原始字符串的方法。
    
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
    

### 跳闸：

*   `.strip`方法删除字符串上的前导和尾随空格，包括制表符，换行符和回车符（ `\t` ， `\n` ， `\r` `\n` `\r` ）。 `ruby " Hello ".strip #=> Hello`

### 格格：

*   `.chomp`方法删除字符串中的最后一个字符，只有它是回车符或换行符（ `\r` ， `\n` ）。
*   此方法通常与`gets`命令一起使用，以从用户输入中删除返回。 ``ruby "hello\r".chomp #=> hello "hello\t".chomp #=> hello\t # because tabs and other whitespace remain intact when using `chomp` ``

### 整数：

*   `.to_i`方法将字符串转换为整数。 `ruby "15".to_i #=> 15 # integer`

### GSUB：

*   `gsub`替换字符串上第二个参数的第一个参数的每个引用。

```ruby
"ruby is cool".gsub("cool", "very cool") #=> "ruby is very cool" 
```

*   `gsub`也接受模式（如_regexp_ ）作为第一个参数，允许以下内容：

```ruby
"ruby is cool".gsub(/[aeiou]/, "*") #=> "r*by *sc**l" 
```

### 级联：

*   Ruby实现了一些方法来将两个字符串连接在一起：
    
*   `+`方法：
    
    ```ruby
    "15" + "15" #=> "1515" # string 
    
    ```
    
*   `<<`方法：
    
    ```ruby
    "15" << "15" #=> "1515" # string 
    
    ```
    
*   `concat`方法： `ruby "15".concat "15" #=> "1515" # string`
    

### 指数：

*   `index`方法返回字符串中子字符串或正则表达式模式匹配的第一个出现的索引位置。
    
*   如果找不到匹配项，则返回`nil` 。
    
*   第二个可选参数指示字符串中的哪个索引位置开始搜索匹配。
    
    ```ruby
    "information".index('o') #=> 3 
     "information".index('mat') #=> 5 
     "information".index(/[abc]/) #=> 6 
     "information".index('o', 5) #=> 9 
     "information".index('z') #=> nil 
    
    ```
    

### 明确：

*   删除字符串内容。 `ruby a = "abcde" a.clear #=> ""`