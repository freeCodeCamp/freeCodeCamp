---
title: Python Calling Functions
localeTitle: Funções de chamada em Python
---
Uma declaração de definição de função não executa a função. Executando (chamando) uma função é feita usando o nome da função seguido de parêntese colocando argumentos requeridos (se houver).
```
>>> def say_hello(): 
 ...     print('Hello') 
 ... 
 >>> say_hello() 
 Hello 
```

A execução de uma função introduz uma nova tabela de símbolos usada para as variáveis ​​locais da função. Mais precisamente, todas as atribuições de variáveis ​​em uma função armazenam o valor na tabela de símbolos locais; enquanto que as referências de variáveis ​​primeiro aparecem na tabela de símbolos locais, depois nas tabelas de símbolos locais das funções delimitadoras, depois na tabela de símbolos globais e finalmente na tabela de nomes incorporados. Assim, variáveis ​​globais não podem ser diretamente atribuídas a um valor dentro de uma função (a menos que seja nomeado em uma declaração global), embora possam ser referenciadas.
```
>>> a = 1 
 >>> b = 10 
 >>> def fn(): 
 ...     print(a)    # local a is not assigned, no enclosing function, global a referenced. 
 ...     b = 20      # local b is assigned in the local symbol table for the function. 
 ...     print(b)    # local b is referenced. 
 ... 
 >>> fn() 
 1 
 20 
 >>> b               # global b is not changed by the function call. 
 10 
```

Os parâmetros reais (argumentos) para uma chamada de função são introduzidos na tabela de símbolos locais da função chamada quando é chamada; assim, argumentos são passados ​​usando call por valor (onde o valor é sempre uma referência de objeto, não o valor do objeto). Quando uma função chama outra função, uma nova tabela de símbolos locais é criada para essa chamada.
```
>>> def greet(s): 
 ...     s = "Hello " + s    # s in local symbol table is reassigned. 
 ...     print(s) 
 ... 
 >>> person = "Bob" 
 >>> greet(person) 
 Hello Bob 
 >>> person                  # person used to call remains bound to original object, 'Bob'. 
 'Bob' 
```

Os argumentos usados ​​para chamar uma função não podem ser reatribuídos pela função, mas os argumentos que fazem referência a objetos mutáveis ​​podem ter seus valores alterados:
```
>>> def fn(arg): 
 ...     arg.append(1) 
 ... 
 >>> a = [1, 2, 3] 
 >>> fn(a) 
 >>> a 
 [1, 2, 3, 1] 

```