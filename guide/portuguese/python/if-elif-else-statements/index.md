---
title: If Elif Else Statements
localeTitle: Se Elif Else Statements
---
## Se Elif Else Statements

A estrutura `if` / `elif` / `else` é uma maneira comum de controlar o fluxo de um programa, permitindo que você execute blocos de código específicos dependendo do valor de alguns dados. Se a condição após a palavra-chave `if` avaliada como `true` , o bloco de código será executado: Observe que os parênteses não são usados ​​antes e depois da verificação da condição, como em outros idiomas.

```python
if True: 
  print('If block will execute!') 
```

```python
x = 5 
 
 if x > 4: 
  print("The condition was true!") #this statement executes 
```

Opcionalmente, você pode adicionar `else` resposta que será executada se a condição for `false` :

```python
if not True: 
  print('If statement will execute!') 
 else: 
  print('Else statement will execute!') 
```

Ou você também pode ver este exemplo

```python
y = 3 
 
 if y > 4: 
  print("I won't print!") #this statement does not execute 
 else: 
  print("The condition wasn't true!") #this statement executes 
```

_Observe que não há nenhuma condição após a palavra-chave `else` - ela captura todas as situações em que a condição era `false`_

Várias condições podem ser verificadas incluindo uma ou mais verificações `elif` após sua instrução `if` inicial, mas somente uma condição será executada:

```python
z = 7 
 
 if z > 8: 
  print("I won't print!") #this statement does not execute 
 elif z > 5: 
  print("I will!") #this statement will execute 
 elif z > 6: 
  print("I also won't print!") #this statement does not execute 
 else: 
  print("Neither will I!") #this statement does not execute 
```

_Observe apenas a primeira condição que avalia como `true` será executada. Mesmo que `z > 6` seja `true` , o bloco `if/elif/else` termina após a primeira condição verdadeira. Isso significa que uma `else` só será executada se nenhuma das condições for `true` ._

Também podemos criar aninhados para a tomada de decisão. Antes de preceder, consulte o guia de indentação href = 'https: //guide.freecodecamp.org/python/code-blocks-and-indentation' target = '\_ blank' rel = 'nofollow'> uma vez antes.

Vamos dar um exemplo de encontrar um número que seja par e maior que '10 '
```
python 
 x = 34 
 if x %  2 == 0:  # this is how you create a comment and now, checking for even. 
  if x > 10: 
    print("This number is even and is greater than 10") 
  else: 
    print("This number is even, but not greater 10") 
 else: 
  print ("The number is not even. So point checking further.") 
```

Este foi apenas um exemplo simples de ifs aninhados. Por favor, sinta-se livre para explorar mais online.

Embora os exemplos acima sejam simples, você pode criar condições complexas usando [comparações](https://guide.freecodecamp.org/python/comparisons) [booleanas](https://guide.freecodecamp.org/python/boolean-operations) e [operadores booleanos](https://guide.freecodecamp.org/python/boolean-operations) .

**_Instrução in-line de python if-else_**

Nós também podemos usar as funções if-else em linha do python O exemplo a seguir deve verificar se o número é maior ou igual a 50, se sim retornar True:
```
python 
 x = 89 
 is_greater = True if x >= 50 else False 
 
 print(is_greater) 
```

Saída
```
> 
 True 
 > 

```