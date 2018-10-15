---
title: Dictionaries
localeTitle: Dicionários
---
## Dicionários

Vamos supor que temos uma lista homogênea. Queremos contar quantas vezes cada item ocorre na lista. Como podemos fazer isso, sem usar os métodos internos do Python, como count ou Counter, do módulo de coleções do Python? Uma pesquisa no Google por "Como contar as ocorrências de um item em uma lista?" retornará respostas do Stack Overflow apontando para o método count e o módulo collections, mas para fins de aprendizado vamos tentar resolver o problema sem usar essas ferramentas.

Aqui está a lista com a qual vamos trabalhar:

```python
ice_cream = ["strawberry", 
             "vanilla", 
             "vanilla", 
             "chocolate", 
             "chocolate", 
             "chocolate", 
             "banana", 
             "rum raisin", 
             "banana"] 
```

Este código, usando loops for aninhados, produz a resposta certa, armazenando a resposta na lista "count":

```python
count = [] 
 for flavor in ice_cream: 
  found = False 
  for entry in count: 
    if entry[0] == flavor: 
      entry[1] += 1 
      found = True 
  if not found: 
      count.append([flavor, 1]) 
 
 # Print. 
 for (entry, total) in count: 
  print (entry, total) 
```

Embora este código forneça a resposta correta, há duas coisas erradas. Primeiro, é complexo. Quanto mais loops aninhados um programa contém, mais difícil é entender, corrigir e estender. Além disso, é ineficiente. Isso pode não ser um problema neste pequeno exemplo, mas imagine uma lista com milhares ou milhões de itens. Escanear a lista de entradas toda vez que fizermos uma observação demoraria muito, muito tempo, não importando a velocidade do computador. Este é um tópico abordado de forma mais completa ao estudar tópicos como notação O grande e comparar algoritmos de pesquisa e classificação.

Uma resposta melhor é usar outra estrutura de dados conhecida como **dicionário** ou **mapa** . Essa estrutura de dados é uma coleção _mutável e desordenada_ de pares _chave / valor_ . Pense em um dicionário como uma agenda telefônica, em que a chave é o nome da pessoa e o valor é o número do telefone. As chaves em um dicionário formam um conjunto, o que significa que elas só podem aparecer uma vez e não podem ser alteradas (são imutáveis), embora os valores associados a uma chave possam ser alterados.

Dicionários são criados colocando pares de chave / valor dentro de chaves. Para obter o valor associado a uma chave, coloque a chave entre colchetes.

Aqui estão alguns exemplos de código:

```python
ice_cream = {'chocolate' : 3, 'strawberry' : 1} 
 print (ice_cream) 
 >> {'chocolate' : 3, 'strawberry' : 1} 
 print (ice_cream['strawberry']) 
 >> 1 
```

Para testar se uma chave está em um dicionário, use k in d:

```python
ice_cream = {'chocolate' : 3, 'strawberry' : 1} 
 if 'chocolate' in ice_cream: 
    print ('chocolate is in the list') 
 ... 
 
 del ice_cream['chocolate'] 
 if 'chocolate' in ice_cream: 
    print ('oops: why is chocolate still there?') 
```

**Atualização e Filiação** Para atualizar dicionários, basta atribuir um valor a uma chave. Se a chave já estiver no dicionário, isso alterará o valor associado a ela.

Se a chave não estava presente, ela é adicionada junto com o valor:

```python
ice_cream = {} 
 ice_cream['chocolate'] = 33 
 ice_cream['vanilla'] = 999 # oops 
 print (ice_cream) 
 >> {'chocolate' : 33, vanilla' : 999} 
 ice_cream['vanilla'] = 9 
 print (ice_cream) 
 >> {'chocolate' : 33, vanilla' : 9} 
```

Use _del d \[k\]_ para remover uma entrada de um dicionário, onde _d_ é o nome do dicionário _ek_ é a chave que está sendo removida. Somente entradas presentes podem ser removidas; tentar remover um que não está lá causa um erro:

```python
ice_cream = {'chocolate' : 33, vanilla' : 9} 
 del ice_cream['chocolate'] 
 print (ice_cream) 
 >> {'vanilla' : 9} 
 del ice_cream['strawberry'] 
 >> Traceback (most recent call last): 
   File "<stdin>", line 5, in <module> 
   KeyError: 'strawberry' 
```

**rotações** Como os dicionários são coleções (junto com listas, tuplas e conjuntos), vamos querer passar por cima deles conteúdo. Fazemos isso com um loop for, que atribui cada uma das chaves no dicionário à variável de loop por vez:

```python
ice_cream = {'chocolate' : 183, 
             'vanilla' : 71, 
             'strawberry' : 63, 
             'banana', 1} 
 for flavor in ice_cream: 
  print (flavor, ice_cream[flavor]) 
 
 >> 'banana' 1 
   'vanilla' 71 
   'chocolate' 183 
   'strawberry' 63 
```

Como nos elementos de conjunto, o Python faz um loop sobre as entradas no dicionário em uma ordem arbitrária. Não há garantia de que eles serão vistos em ordem alfabética ou na ordem, eles foram adicionados ao dicionário. Observe, a propósito, que o loop nos dicionários é um pouco diferente do looping das listas. Quando o Python faz um loop em uma lista, os valores na lista são atribuídos à variável de loop. Por outro lado, quando faz um loop sobre um dicionário, ele atribui as chaves. Os designers do Python escolheram fazer isso porque:

*   looping sobre os índices de uma lista não é muito interessante, uma vez que o o programa sempre obteria a sequência 0, 1, 2,…; e
*   é muito mais fácil ir de uma chave de dicionário para o valor associado do que é pegar o valor e encontrar a chave associada.

**Métodos de dicionário** Dicionários são objetos, assim como listas, tuplas e conjuntos. Alguns métodos de dicionário comuns são:

*   _d.clear ()_ - limpar um dicionário
*   _d.get (x, 99)_ - Retorna o valor associado a uma chave ou um valor padrão se a chave não estiver presente.
*   _d.keys ()_ - chaves de retorno
*   _d.items ()_ - lista de retorno de chave, pares de valores
*   _d.values ​​()_ - retorna valores como uma lista, os valores podem não ser exclusivos
*   _d.update ()_ - atualiza o dicionário com o conteúdo de outro

Um uso comum de itens é fazer um loop entre as chaves e os valores em um dicionário juntos: para (chave, valor) em dictionary.items (): … Faça algo com a chave e valor…

Isso é ineficiente para grandes dicionários, pois items () realmente constrói uma lista de pares (chave, valor). Um método semelhante chamado _iteritems ()_ entrega esses pares de volta um a um sob demanda: para (chave, valor) em dictionary.iteritems (): … Faça algo com a chave e valor…

Vamos voltar ao exemplo original - como podemos contar o número de itens na lista ice\_cream usando um dicionário?

```python
# Count all the flavors. 
 ice_cream = ["strawberry", 
             "vanilla", 
             "vanilla", 
             "chocolate", 
             "chocolate", 
             "chocolate", 
             "banana", 
             "rum raisin", 
             "banana"] 
 
 count = {} 
 for flavor in ice_cream: 
  if flavor in count: 
    count[flavor] = count[flavor] + 1 
  else: 
    count[flavor] = 1 
 
 # Print. 
 for b in count: 
  print (b, count[b]) 
```

Para fazer isso, criamos um dicionário que está inicialmente vazio. Cada vez que percorremos a lista ice\_cream, verificamos para ver se esse sabor já está no dicionário de contagem. Se for, adicionamos um à sua contagem. Se não for, adicionamos o nome ao dicionário com o valor 1.

Podemos encurtar este programa usando o método _dict.get ()_ . Isso retorna o valor associado a uma chave ou algum valor padrão que fornecemos. Nesse caso, obtemos o número de vezes que já vimos um sabor ou zero, adicionamos um ao valor que o método retorna e o armazenamos de volta no dicionário:

```python
# Count all the flavors. 
 count = {} 
 for flavor in ice_cream: 
  count[flavor] = count.get(flavor, 0) + 1 
 
 # Print. 
 keys = count.keys() 
 keys.sort() 
 for b in keys: 
  print (b, count[b]) 
 
 # Print. 
 for key in sorted(count): 
  print (key, count[key]) 
```

Observe que estamos usando duas maneiras separadas para imprimir a chave e o valor: um usa o método classificado do Python e o outro não.

Se quisermos imprimir os sabores em ordem de frequência, precisamos **inverter o dicionário** . Isso significa que precisamos usar os valores como chaves e as chaves como valores. Como não há garantia de que os valores sejam únicos, precisamos tomar medidas para evitar _colisões_ .

A solução é usar algum tipo de coleção, como uma lista, para armazenar os valores do dicionário invertido. Se seguirmos esse caminho, o inverso do dicionário mostrado anteriormente seria {1: \['a', 'b', 'c'\]}. Aqui está um programa para fazer o que queremos:

```python
ice_cream = ["strawberry", 
             "vanilla", 
             "vanilla", 
             "chocolate", 
             "chocolate", 
             "chocolate", 
             "banana", 
             "rum raisin", 
             "banana"] 
 
 # Count all the flavors. 
 count = {} 
 for flavor in ice_cream: 
  count[flavor] = count.get(flavor, 0) + 1 
 
 # Invert the dictionary. 
 freq = {} 
 for (flavor, times) in count.items(): 
  if times in freq: 
    freq[times].append(flavor) 
  else: 
    freq[times] = [flavor] 
 
 # Print. 
 for key in freq: 
  for flavor in sorted(freq[key]): 
    print (key,":", " ", flavor) 
```

#### Mais Informações: