---
title: List Pop Method
localeTitle: Listar Método Pop
---
# Função Pop

O método pop () remove e retorna o último elemento da lista. Existe um parâmetro opcional, índice do elemento a ser removido da lista. Se nenhum índice for especificado, a.pop () remove e retorna o último item da lista. Se o índice passado para o método pop () não estiver no intervalo, ele lançará IndexError: exceção de índice pop fora do intervalo.

#### Exemplo de uso

\`\` \`py cidades = \['Nova York', 'Dallas', 'San Antonio', 'Houston', 'San Francisco'\];

print "Cidade estourada é:", cities.pop () print "Cidade no índice 2 é:", cities.pop (2) \`\` \`

Saída #### `City popped is : San Francisco City at index 2 is : San Antonio`

#### Funcionalidade básica de pilha

O método `pop()` é frequentemente usado em conjunto com `append()` para implementar a funcionalidade básica da pilha em um aplicativo Python.

```py
stack = [] 
 
 for i in range(5): 
    stack.append(i) 
 
 while len(stack): 
    print(stack.pop()) 
```

\#### Mais Informações: A documentação oficial do `pop()` pode ser encontrada [aqui](https://docs.python.org/3.6/tutorial/datastructures.html)