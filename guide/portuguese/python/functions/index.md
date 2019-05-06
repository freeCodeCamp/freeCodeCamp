---
title: Functions
localeTitle: Funções
---
## Funções

Uma função permite que você defina um bloco de código reutilizável que pode ser executado muitas vezes em seu programa.

As funções permitem criar soluções mais modulares e [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) para problemas complexos.

Embora o Python já forneça muitas funções internas, como `print()` e `len()` , você também pode definir suas próprias funções para usar em seus projetos.

Uma das grandes vantagens de usar funções em seu código é que ele reduz o número geral de linhas de código em seu projeto.

### Sintaxe

No Python, uma definição de função possui os seguintes recursos:

1.  A palavra-chave `def`
2.  o nome da função
3.  parênteses '()' contendo parâmetros de entrada da função, que são opcionais ao defini-la.
4.  um sinal de dois pontos ':'
5.  algum bloco de código para executar
6.  uma declaração de retorno (opcional)

```python
# a function with no parameters or returned values 
 def sayHello(): 
  print("Hello!") 
 
 sayHello()  # calls the function, 'Hello!' is printed to the console 
 
 # a function with a parameter 
 def helloWithName(name): 
  print("Hello " + name + "!") 
 
 helloWithName("Ada")  # calls the function, 'Hello Ada!' is printed to the console 
 
 # a function with multiple parameters with a return statement 
 def multiply(val1, val2): 
  return val1 * val2 
 
 multiply(3, 5)  # prints 15 to the console 
```

Funções são blocos de código que podem ser reutilizados simplesmente ao realizar o chamado da função. Isso permite a reutilização de código de forma simples e elegante sem reescrever explicitamente seções de código. Isso torna o código mais legível, facilita a depuração e limita os erros de digitação.

Funções em Python são criadas usando a palavra-chave `def` , seguida por um nome de função e parâmetros de função dentro de parênteses.

Uma função sempre retorna um valor. A palavra-chave `return` é usada pela função para retornar um valor, se você não quiser retornar nenhum valor, o valor padrão `None` será retornado.

O nome da função é usado para chamar a função, passando os parâmetros necessários dentro de parênteses.

```python
# this is a basic sum function 
 def sum(a, b): 
  return a + b 
 
 result = sum(1, 2) 
 # result = 3 
```

Você pode definir valores padrão para os parâmetros, assim o Python irá interpretar que o valor desse parâmetro é o padrão se nenhum for dado.

```python
def sum(a, b=3): 
  return a + b 
 
 result = sum(1) 
 # result = 4 
```

Você pode passar os parâmetros na ordem desejada, usando o nome do parâmetro.

```python
result = sum(b=2, a=2) 
 # result = 4 
```

No entanto, não é possível passar um argumento de palavra-chave antes de um argumento de não-palavra-chave

```Python
result = sum(3, b=2) 
 #result = 5 
 result2 = sum(b=2, 3) 
 #Will raise SyntaxError 
```

As funções também são Objetos, então você pode atribuí-las a uma variável e usar essa variável como uma função.

```python
s = sum 
 result = s(1, 2) 
 # result = 3 
```

### Notas

*   Se uma definição de função incluir parâmetros, você deverá fornecer o mesmo número de parâmetros quando chamar a função.
    
    ```python
    print(multiply(3))  # TypeError: multiply() takes exactly 2 arguments (0 given) 
     
     print(multiply('a', 5))  # 'aaaaa' printed to the console 
     
     print(multiply('a', 'b'))  # TypeError: Python can't multiply two strings 
    
    ```
    
*   O bloco de código que a função executará inclui todas as instruções contidas na função.
    
    ```python
    def myFunc(): 
     print('this will print') 
     print('so will this') 
     
     x = 7 
     # the assignment of x is not a part of the function since it is not indented 
    
    ```
    
*   Variáveis definidas dentro de uma função só existem dentro do escopo dessa função.
    
    ```python
    def double(num): 
     x = num * 2 
     return x 
     
     print(x)  # error - x is not defined 
     print(double(4))  # prints 8 
    
    ```
    
    \-Python interpreta o bloco de função somente quando a função é chamada e não quando a função é definida. Assim, mesmo que o bloco de definição de função contenha algum tipo de erro, o interpretador de python mostrará isso apenas quando a função for chamada.
    

### Mais Informações:

*   [Python 3 Docs: definindo funções](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)
