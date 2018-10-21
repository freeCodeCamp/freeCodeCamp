---
title: Ruby String Methods
localeTitle: Métodos de String Ruby
---
## Métodos de String Ruby

Ruby tem muitos métodos integrados para trabalhar com strings. Strings em Ruby por padrão são mutáveis ​​e podem ser alteradas no local ou uma nova string pode ser retornada de um método.

### Comprimento:

*   A propriedade `.length` retorna o número de caracteres em uma cadeia, incluindo o espaço em branco. `ruby "Hello".length #=> 5 "Hello World!".length #=> 12`

### Esvaziar:

*   O `.empty?` método retorna `true` se uma string tiver comprimento igual a zero. `ruby "Hello".empty? #=> false "!".empty? #=> false " ".empty? #=> false "".empty? #=> true`

### Contagem:

*   O método `.count` conta quantas vezes um caractere específico é encontrado em uma string.
*   Este método faz distinção entre maiúsculas e minúsculas. `ruby "HELLO".count('L') #=> 2 "HELLO WORLD!".count('LO') #=> 1`

### Inserir:

*   O método `.insert` insere uma string em outra string antes de um determinado índice. `ruby "Hello".insert(3, "hi5") #=> Helhi5lo # "hi5" is inserted into the string right before the second 'l' which is at index 3`

### Upcase:

*   O método `.upcase` transforma todas as letras em uma string para maiúsculas. `ruby "Hello".upcase #=> HELLO`

### Downcase:

*   O método `.downcase` transforma todas as letras em uma string em minúsculas. `ruby "Hello".downcase #=> hello`

### Swapcase

*   O método `.swapcase` transforma os `.swapcase` maiúsculas em uma string em minúsculas e as letras minúsculas em maiúsculas. `ruby "hELLO wORLD".swapcase #=> Hello World`

### Capitalizar:

*   O método `.capitalize` transforma a primeira letra em uma string em maiúsculas e o restante na string em minúsculo. `ruby "HELLO".capitalize #=> Hello "HELLO, HOW ARE YOU?".capitalize #=> Hello, how are you?`

_Observe que a primeira letra só é maiúscula se estiver no início da string._ `ruby "-HELLO".capitalize #=> -hello "1HELLO".capitalize #=> 1hello`

### Marcha ré:

*   O método `.reverse` inverte a ordem dos caracteres em uma string. `ruby "Hello World!".reverse #=> "!dlroW olleH"`

### Dividido:

*   O `.split` pega uma string, _divide_ -a em uma matriz e retorna a matriz.
    
    ```ruby
    "Hello, how are you?".split #=> ["Hello,", "how", "are", "you?"] 
    
    ```
    
*   O método padrão divide a string com base no espaço em branco, a menos que um separador diferente seja fornecido (veja o segundo exemplo). `ruby "Hello".split('-') #=> ["H", "e", "l", "l", "o"]`
    

### Chop:

*   O método `.chop` remove o último caractere da string.
    
*   Uma nova string é retornada, a menos que você use o `.chop!` método que muta a string original.
    
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
    

### Faixa:

*   O método `.strip` remove os espaços em branco inicial e final em cadeias, incluindo tabulações, novas linhas e retornos de carro ( `\t` , `\n` , `\r` ). `ruby " Hello ".strip #=> Hello`

### Chomp:

*   O método `.chomp` remove o último caractere em uma string, somente se for um retorno de carro ou uma nova linha ( `\r` , `\n` ).
*   Esse método é comumente usado com o comando `gets` para remover retornos da entrada do usuário. ``ruby "hello\r".chomp #=> hello "hello\t".chomp #=> hello\t # because tabs and other whitespace remain intact when using `chomp` ``

### Para inteiro:

*   O método `.to_i` converte uma string em um inteiro. `ruby "15".to_i #=> 15 # integer`

### Gsub:

*   `gsub` substitui todas as referências do primeiro parâmetro do segundo parâmetro em uma string.

```ruby
"ruby is cool".gsub("cool", "very cool") #=> "ruby is very cool" 
```

*   `gsub` também aceita padrões (como _regexp_ ) como primeiro parâmetro, permitindo coisas como:

```ruby
"ruby is cool".gsub(/[aeiou]/, "*") #=> "r*by *sc**l" 
```

### Concatenação:

*   Ruby implementa alguns métodos para concatenar duas strings juntas:
    
*   O método `+` :
    
    ```ruby
    "15" + "15" #=> "1515" # string 
    
    ```
    
*   O `<<` método:
    
    ```ruby
    "15" << "15" #=> "1515" # string 
    
    ```
    
*   O método `concat` : `ruby "15".concat "15" #=> "1515" # string`
    

### Índice:

*   O método de `index` retorna a posição de índice da primeira ocorrência da correspondência de padrão de substring ou de expressão regular em uma string.
    
*   Se não houver correspondência encontrada, `nil` será retornado.
    
*   Um segundo parâmetro opcional indica qual posição do índice na string para começar a procurar por uma correspondência.
    
    ```ruby
    "information".index('o') #=> 3 
     "information".index('mat') #=> 5 
     "information".index(/[abc]/) #=> 6 
     "information".index('o', 5) #=> 9 
     "information".index('z') #=> nil 
    
    ```
    

### Claro:

*   Remove o conteúdo da string. `ruby a = "abcde" a.clear #=> ""`