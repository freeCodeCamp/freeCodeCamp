---
title: Lambda Expressions
localeTitle: Expressões Lambda
---
## Expressões Lambda

Expressões Lambda são idealmente usadas quando temos algo simples para ser feito e estamos mais interessados ​​em fazer o trabalho rapidamente ao invés de nomear formalmente a função. Expressões lambda também conhecidas como funções anônimas. [Ajude nossa comunidade a expandi-lo](https://github.com/freecodecamp/guides/tree/master/src/pages/python/lambda-expressions/index.md) .

Lambda Expressions em Python são um caminho curto para declarar funções pequenas e anônimas (não é necessário fornecer um nome para funções lambda). As funções do Lambda se comportam exatamente como as funções regulares declaradas com a palavra-chave `def` . Eles são úteis quando você quer definir uma pequena função de maneira concisa. Eles podem conter apenas uma expressão, portanto, não são mais adequados para funções com instruções de fluxo de controle. mestre

#### Sintaxe da função Lambda

`lambda arguments: expression`

As funções lambda podem ter qualquer número de argumentos, mas apenas uma expressão

#### Código de exemplo

```py
# Lambda function to calculate square of a number 
 square = lambda x: x ** 2 
 print(square(3)) # Output: 9 
 
 # Traditional function to calculate square of a number 
 def square1(num): 
  return num ** 2 
 print(square(5)) # Output: 25 
```

No exemplo lambda acima, lambda `lambda x: x ** 2` produz um objeto de função anônimo que pode ser associado a qualquer nome. Então, associamos o objeto da função ao `square` e, a partir de agora, podemos chamar o objeto `square` como qualquer função tradicional. por exemplo, `square(10)`

## Exemplos

### Principiante

```py
lambda_func = lambda x: x**2 # Function that takes an integer and returns its square 
 lambda_func(3) # Returns 9 
```

### Intermediário

```py
lambda_func = lambda x: True if x**2 >= 10 else False 
 lambda_func(3) # Returns False 
 lambda_func(4) # Returns True 
```

### Complexo

```py
my_dict = {"A": 1, "B": 2, "C": 3} 
 sorted(my_dict, key=lambda x: my_dict[x]%3) # Returns ['C', 'A', 'B'] 
```

### Caso de uso

Digamos que você queira filtrar números ímpares de uma `list` . Você poderia usar um loop `for` :

```python
my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
 filtered = [] 
 
 for num in my_list: 
     if num % 2 != 0: 
         filtered.append(num) 
 
 print(filtered)      # Python 2: print filtered 
 # [1, 3, 5, 7, 9] 
 ``` 
 
 You could write this as a one liner with list-comprehensions 
```

python filtrada = \[x para x em \[1, 2, 3, 4, 5, 6, 7, 8, 9, 10\] se x% 2! = 0\] \`\` \`

Mas você pode se sentir tentado a usar a função de `filter` embutido. Por quê? O primeiro exemplo é um pouco a ser detalhado, o one-liner pode ser mais difícil de entender, enquanto o `filter` oferece o melhor das duas palavras. Além disso, as funções integradas são geralmente mais rápidas.

\`\` \`python my\_list = \[1, 2, 3, 4, 5, 6, 7, 8, 9, 10\]

filtrado = filtro (lambda x: x% 2! = 0, minha\_lista)

lista (filtrada)

# \[1, 3, 5, 7, 9\]

` `` NOTE: in Python 3 built in function return generator objects, so you have to call` lista `, while in Python 2 they return a` lista `,` tupla `or` string\`.

O que aconteceu? Você disse ao `filter` para pegar cada elemento em `my_list` e aplicar as expressões lambda. Os valores que retornam `False` são filtrados.

#### Mais Informações:

*   [Documento oficial](https://docs.python.org/3/reference/expressions.html#lambda)
*   [Leia mais](https://dbader.org/blog/python-lambda-functions)