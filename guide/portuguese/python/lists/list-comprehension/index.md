---
title: List Comprehension
localeTitle: Compreensão de lista
---
## Compreensão de lista

A compreensão de lista é uma forma de percorrer uma lista para produzir uma nova lista com base em algumas condições. Pode ser confuso no começo, mas uma vez que você esteja acostumado com a sintaxe, ela é muito poderosa e rápida.

O primeiro passo para aprender a usar a compreensão de listas é olhar para a maneira tradicional de fazer um loop através de uma lista. A seguir, um exemplo simples que retorna uma nova lista de números pares.

```python
# Example list for demonstration 
 some_list = [1, 2, 5, 7, 8, 10] 
 
 # Empty list that will be populate with a loop 
 even_list = [] 
 
 for number in some_list: 
  if number % 2 == 0: 
    even_list.append(number) 
 
 # even_list now equals [2, 8, 10] 
```

Primeiro, uma lista é criada com alguns números. Em seguida, você cria uma lista vazia que armazenará seus resultados do loop. No loop, você verifica se cada número é divisível por 2 e, se for o caso, você adiciona o mesmo a lista de par. Isso levou 5 linhas de código, não incluindo comentários e espaço em branco, o que não é muito neste exemplo.

Agora, para o exemplo de compreensão de lista.

```python
# Example list for demonstration 
 some_list = [1, 2, 5, 7, 8, 10] 
 
 # List Comprehension 
 even_list = [number for number in some_list if number % 2 == 0] 
 
 # even_list now equals [2, 8, 10] 
```

Outro exemplo, com os mesmos dois passos: A seguir, será criada uma lista de números que correspondem aos números em `my_starting_list` multiplicados por 7.

```py
my_starting_list = [1, 2, 3, 4, 5, 6, 7, 8] 
 my_new_list = [] 
 
 for item in my_starting_list: 
 my_new_list.append(item * 7) 
```

Quando este código é executado, o valor final de `my_new_list` é: `[7, 14, 21, 28, 35, 42, 49, 56]`

Um desenvolvedor usando a compreensão da lista pode obter o mesmo resultado usando a seguinte compreensão de lista, o que resulta na mesma `my_new_list` .

```py
my_starting_list = [1, 2, 3, 4, 5, 6, 7, 8] 
 
 my_new_list = [item * 7 for item in my_starting_list] 
```

Uma fórmula simples para escrever de uma forma de compreensão de lista é:

`my_list = [{operation with input n} for n in {python iterable}]`

Substitua `{operation with input n}` por no entanto, você deseja alterar o item retornado do iterável. O exemplo acima usa `n * 7` mas a operação pode ser tão simples ou tão complexa quanto necessário.

Substitua `{python iterable}` por qualquer iterável. [Tipos de seqüência](https://guide.freecodecamp.org/python/sequence-types) serão mais comuns. Uma lista foi usada no exemplo acima, mas tuplas e intervalos também são comuns.

A compreensão da lista adiciona um elemento de uma lista existente a uma nova lista se alguma condição for atendida. É mais puro, mas também é muito mais rápido na maioria dos casos. Em alguns casos, a compreensão da lista pode dificultar a legibilidade, portanto, o desenvolvedor deve pesar suas opções ao escolher usar a compreensão da lista.

## Exemplos de compreensão de lista com condicionais

O fluxo de controle em compreensões de lista pode ser controlado usando condicionais. Por exemplo:

```py
only_even_list = [i for i in range(13) if i%2==0] 
```

Isso é equivalente ao seguinte loop:

```py
only_even_list = list() 
 for i in range(13): 
  if i%2 == 0: 
    only_even_list.append(i) 
```

A compreensão da lista também pode conter condições aninhadas. Considere o seguinte loop:

```py
divisible = list() 
 for i in range(50): 
  if i%2 == 0: 
    if i%3 == 0: 
      divisible.append(i) 
```

Usando a compreensão da lista, isso pode ser escrito como:

```py
divisible = [i for i in range(50) if i%2==0 if i%3==0] 
```

A instrução If-Else também pode ser usada junto com a compreensão da lista.

```py
list_1 = [i if i%2==0 else i*-1 for i in range(10)] 
```

#### Mais Informações:

[Estruturas de Dados Python - Listas](https://docs.python.org/2.7/tutorial/datastructures.html)

[Python For Loops](https://guide.freecodecamp.org/python/for-loop-statements)

[Listas de Python](https://guide.freecodecamp.org/python/learn-about-python-lists)

[Python Para Iniciantes - Compre Compreensão](http://www.pythonforbeginners.com/basics/list-comprehensions-in-python)