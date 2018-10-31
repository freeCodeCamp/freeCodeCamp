---
title: For Loop Statements
localeTitle: For Loop Statements
---
## For Loop Statements

O Python utiliza um loop for para iterar uma lista de elementos. Ao contrário de C ou Java, que usam o loop for para alterar um valor em etapas e acessar algo como um array usando esse valor.

Loops for iteram sobre estruturas de dados baseadas em coleções, como listas, tuplas e dicionários.

A sintaxe básica é:

```python
for value in list_of_values: 
  # use value inside this block 
```

Em geral, você pode usar qualquer coisa como o valor do iterador, onde as entradas do iterável podem ser atribuídas. Por exemplo, você pode descompactar tuplas de uma lista de tuplas:

```python
list_of_tuples = [(1,2), (3,4)] 
 
 for a, b in list_of_tuples: 
  print("a:", a, "b:", b) 
```

Por outro lado, você pode fazer um loop sobre qualquer coisa que seja iterável. Você pode chamar uma função ou usar um literal de lista.

```python
for person in load_persons(): 
  print("The name is:", person.name) 
```

```python
for character in ["P", "y", "t", "h", "o", "n"]: 
  print("Give me a '{}'!".format(character)) 
```

Algumas formas em que For loops são usadas:

**Iterar sobre a função range ()**

```python
for i in range(10): 
    print(i) 
```

Em vez de ser uma função, o intervalo é, na verdade, um tipo de sequência imutável. A saída conterá resultados do limite inferior, ou seja, 0 para o limite superior, ou seja, 10, mas excluindo 10. Por padrão, o limite inferior ou o índice inicial é definido como zero. Saída:
```
> 
 0 
 1 
 2 
 3 
 4 
 5 
 6 
 7 
 8 
 9 
 > 
```

Além disso, pode-se especificar o limite inferior da sequência e até mesmo o passo da sequência, adicionando um segundo e um terceiro parâmetro.

```python
for i in range(4,10,2): #From 4 to 9 using a step of two 
    print(i) 
```

Saída:
```
> 
 4 
 6 
 8 
 > 
```

**função xrange ()**

Na maior parte, xrange e range são exatamente os mesmos em termos de funcionalidade. Ambos fornecem uma maneira de gerar uma lista de números inteiros para você usar, como quiser. A única diferença é que o intervalo retorna um objeto de lista do Python e xrange retorna um objeto xrange. Isso significa que o xrange na verdade não gera uma lista estática em tempo de execução como o intervalo. Cria os valores conforme você precisa deles com uma técnica especial chamada rendimento. Essa técnica é usada com um tipo de objeto conhecido como geradores.

Mais uma coisa para adicionar. No Python 3.x, a função xrange não existe mais. A função range agora faz o que o xrange faz no Python 2.x

**Iterar sobre valores em uma lista ou tupla**

```python
A = ["hello", 1, 65, "thank you", [2, 3]] 
 for value in A: 
    print(value) 
```

Saída:
```
> 
 hello 
 1 
 65 
 thank you 
 [2, 3] 
 > 
```

**Iterar as chaves em um dicionário (também conhecido como hashmap)**

```python
fruits_to_colors = {"apple": "#ff0000", 
                    "lemon": "#ffff00", 
                    "orange": "#ffa500"} 
 
 for key in fruits_to_colors: 
    print(key, fruits_to_colors[key]) 
```

Saída:
```
> 
 apple #ff0000 
 lemon #ffff00 
 orange #ffa500 
 > 
```

**Iterar duas listas do mesmo tamanho em um único loop com a função zip ()**

\`\` \`python A = \["a", "b", "c"\] B = \["a", "d", "e"\]

para a, b em zip (A, B): imprimir a, b, a == b
```
Output: 
```

\> aa verdadeiro bd False ce False >
```
**Iterate over a list and get the corresponding index with the enumerate() function** 
```

python A = \["this", "is", "alguma coisa", "divertido"\]

para index, word in enumerate (A): imprimir (índice, palavra)
```
Output: 
```

\> 0 isto 1 é 2 algo 3 diversão >
```
A common use case is iterating over a dictionary: 
```

python para nome, phonenumber em contacts.items (): print (nome, "pode ​​ser acessado em", phonenumber)
```
If you absolutely need to access the current index of your iteration, do **NOT** use `range(len(iterable))`! This is an extremely bad practice and will get you plenty of chuckles from senior Python developers. Use the built in function `enumerate()` instead: 
```

python para o índice, item em enumerate (shopping\_basket): print ("Item", index, "é um", item)
```
**for/else statements** 
 Pyhton permits you to use else with for loops, the else case is executed when none of the conditions with in the loop body was satisfied. To use the else we have to make use of `break` statement so that we can break out of the loop on a satsfied condition.If we do not break out then the else part will be executed. 
```

python _dias da_ semana _\= \['segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira'\] hoje = 'sábado' por dia em_ dias da _semana_ : se dia = = hoje: print ('hoje é um dia da semana') pausa outro: print ('hoje não é um dia da semana')
```
In the above case the output will be `today is not a week day` since the break within the loop will never be executed. 
 
 **Iterate over a list using inline loop function** 
 
 We could also iterate inline using python, for example if we need to uppercase all the words in a list from a list we could simply do the following: 
```

python A = \["this", "is", "awesome", "shinning", "star"\]

UPPERCASE = \[word.upper () para palavra em A\] imprimir (MAIÚSCULAS)
```
Output: 
```

\> \['ISTO', 'IS', 'IMPRESSIONANTE', 'BRILHO', 'ESTRELA'\] > \`\` \`

#### Mais Informações:

*   [Documentação do Python2 for loop](https://docs.python.org/2.7/tutorial/controlflow.html#for-statements)
    
*   [Documentação do Python3 for loop](https://docs.python.org/3/tutorial/controlflow.html#for-statements)