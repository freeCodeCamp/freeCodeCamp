---
title: Python Input Function
localeTitle: Função de entrada em Python
---
Muitas vezes, em um programa, precisamos de alguma entrada do usuário. Tomar entradas do usuário faz o programa parecer interativo. No Python 3, para receber informações do usuário, temos uma função `input()` . Se a função de entrada for chamada, o fluxo do programa será interrompido até que o usuário forneça uma entrada e tenha terminado a entrada com a tecla de retorno. Vamos ver alguns exemplos:

1.  Quando nós apenas queremos pegar a entrada:
    
    # Isso só vai dar um aviso sem qualquer mensagem
    
    inp = input ()
    

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CUqX/0)

1.  Para dar um aviso com uma mensagem:
    
    prompt _com_ mensagem = entrada (' ')
    
    # \_
    
    # O '\_' na saída é o prompt
    

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CUqX/1)

3\. Quando queremos ter uma entrada inteira:
```
number = int(input('Please enter a number: ')) 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CUqX/2)

Se você inserir um valor não inteiro, o Python lançará um erro `ValueError` . **Então, sempre que você usar isso, por favor, certifique-se de pegar também.** Caso contrário, seu programa será interrompido inesperadamente após o prompt.
```
number = int(input('Please enter a number: ')) 
 # Please enter a number: as 
 # Enter a string and it will throw this error 
 # ValueError: invalid literal for int() with base 10 'as' 
```

4\. Quando queremos uma entrada de string:
```
string = str(input('Please enter a string: ')) 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Executar código](https://repl.it/CUqX/3)

Porém, as entradas são armazenadas por padrão como uma string. Usar a função `str()` deixa claro para o leitor de código que a entrada será uma 'string'. É uma boa prática mencionar que tipo de entrada será tomada antecipadamente.

[Documentos oficiais](https://docs.python.org/3/library/functions.html#input)