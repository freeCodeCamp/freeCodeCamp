---
title: How to Convert Strings into Integers in Python
localeTitle: Como converter seqüências de caracteres em números inteiros em Python
---
## Como converter seqüências de caracteres em números inteiros em Python

Assim como o built-in `str()` , o Python também oferece um prático built-in que leva um objeto de string como um argumento e retorna o objeto inteiro correspondente.

#### Exemplo de uso:

```py
# Here age is a string object 
 age = "18" 
 print(age) 
 # Converting string to integer 
 int_age = int(age) 
 print(int_age) 
```

Saída

```py
18 
 18 
```

Aqui, embora a saída seja visualmente semelhante, você deve ter em mente que a primeira linha imprime um objeto de string enquanto a linha ao lado dele imprime um objeto inteiro que é ilustrado no próximo exemplo:

```py
age = "18" 
 print(age+2) 
```

Saída:

```py
Traceback (most recent call last): 
  File "<stdin>", line 1, in <module> 
 TypeError: cannot concatenate 'str' and 'int' objects 
```

`The error should make it clear to you that you need to convert the` objeto age para um número inteiro antes de adicionar algo a ele.

```py
age = "18" 
 age_int = int(age) 
 print(age_int+2) 
```

Saída:

```py
20 
```

Mas você deve ter em mente alguns casos especiais:

1.  Um ponto flutuante (um inteiro com parte fracionária) como um argumento retornará o float arredondado para o número inteiro mais próximo. Por exemplo: `print(int(7.9))` irá imprimir `7` . Também `print(int("7.9"))` resultará em um erro, pois a string é um argumento inválido para converter em um inteiro.
    
    ```py
    Traceback (most recent call last): 
      File "<stdin>", line 1, in <module> 
     ValueError: invalid literal for int() with base 10: '7.9' 
    
    ```
    
2.  Além disso, qualquer inteiro em palavras, se fornecido como um argumento, retornará o mesmo erro acima: `print(int("one"))` dará um erro da seguinte forma:
    
    ```py
    Traceback (most recent call last): 
      File "<stdin>", line 1, in <module> 
     ValueError: invalid literal for int() with base 10: 'one' 
    
    ```
    

#### Mais Informações:

Documentação oficial para `int()` built-in pode ser encontrada [aqui](https://docs.python.org/3.6/library/functions.html#int)