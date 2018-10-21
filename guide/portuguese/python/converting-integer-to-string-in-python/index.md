---
title: Converting Integer to String in Python
localeTitle: Convertendo Inteiro em String em Python
---
## Convertendo Inteiro em String em Python

Ao contrário de muitas outras linguagens, o Python não tipifica implicitamente números inteiros (ou floats) em strings ao concatenar com strings. Felizmente, o Python possui uma útil função `str()` que converte o argumento passado para um formato de string.

#### O caminho errado

Programadores vindos de outras linguagens podem tentar fazer a seguinte concatenação de cadeias que produz um erro:

```py
age = 18 
 
 string = "Hello, I am " + age + " years old" 
```

[Executar código no repl.it](https://repl.it/JyYH/0)

O erro que aparece é
```
Traceback (most recent call last): 
  File "python", line 3, in <module> 
 TypeError: must be str, not int 
```

`TypeError: must be str, not int` indica que o inteiro deve primeiro ser convertido em uma string a ser concatenada.

#### O caminho correto

Exemplo de concatenação simples:

```py
age = 18 
 
 print("Hello, I am " + str(age) + " years old") 
 
 # Output 
 # Hello, I am 18 years old 
```

[Executar código no repl.it](https://repl.it/Jz8Q/0)

Imprimir `1 2 3 4 5 6 7 8 9 10` usando uma única corda

```py
result = "" 
 
 for i in range(1, 11): 
    result += str(i) + " " 
 
 print(result) 
 
 # Output 
 # 1 2 3 4 5 6 7 8 9 10 
```

[Executar código no repl.it](https://repl.it/KBLB/0)

#### Explicação linha por linha do código acima

1.  Em primeiro lugar, uma variável 'result' é atribuída a uma string vazia.
2.  O loop está sendo usado para iterar em uma lista de números.
3.  Esta lista de números é gerada usando a função de intervalo.
4.  então range (1,11) vai gerar uma lista de números de 1 a 10.
5.  Em cada iteração de loop, essa variável 'i' vai ocupar valores de 1 a 10.
6.  Na primeira iteração quando a variável i = 1, então a variável \[resultado = resultado + str (i) + "(caractere de espaço)"\], str (i) converte o 'i' que é um valor inteiro para um valor de cadeia.
7.  Como i = 1, na primeira iteração, finalmente resulta = 1.
8.  E o mesmo processo continua até i = 10 e finalmente após o último resultado da iteração = 1 2 3 4 5 6 7 8 9 10.
9.  Portanto, quando finalmente imprimimos o resultado após o loop for, a saída no console é '1 2 3 4 5 6 7 8 9 10'.

#### Mais Informações:

[Documentação oficial do Python para `str()`](https://docs.python.org/3/library/stdtypes.html#str)