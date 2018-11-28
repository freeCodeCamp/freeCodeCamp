---
title: Python Decorators
localeTitle: Decoradores Python
---
Os decoradores funcionam essencialmente como invólucros. Eles modificam o comportamento do código antes e depois da execução de uma função de destino, sem a necessidade de modificar a função em si, aumentando a funcionalidade original, decorando-a.

Antes de entrar em detalhes sobre decoradores, existem alguns conceitos que devem ser claros. No Python, funções são objetos e podemos fazer muitas coisas úteis com elas.

> ### Atribuindo funções a uma variável:
```
def greet(name): 
  return "Hello "+name 
 greet_someone = greet 
 print greet_someone("John") 
```

> Saída: Olá John

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Código de execução](https://repl.it/CXGk)

> ### Definindo funções dentro de outras funções:
```
def greet(name): 
  def get_message(): 
    return "Hello " 
  result = get_message()+name 
  return result 
 print(greet("John")) 
```

> Saída: Olá John

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Código de execução](https://repl.it/CXGu)

> ### Funções também podem ser passadas como parâmetros para outras funções:
```
def greet(name): 
  return "Hello " + name 
 def call_func(func): 
  other_name = "John" 
  return func(other_name) 
 print call_func(greet) 
```

> Saída: Olá John

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Código de execução](https://repl.it/CXHC)

> ### Funções podem retornar outras funções:
> 
> Em outras palavras, funções gerando outras funções.
```
def compose_greet_func(): 
  def get_message(): 
    return "Hello there!" 
  return get_message 
 greet = compose_greet_func() 
 print(greet()) 
```

Saída: Olá!

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Código de execução](https://repl.it/CXHG)

> ### Funções internas têm acesso ao escopo de inclusão
> 
> Mais comumente conhecido como [fechamento](http://www.shutupandship.com/2012/01/python-closures-explained.html) . Um padrão muito poderoso que vamos encontrar ao construir decoradores. Outra coisa a notar, o Python só permite [acesso de leitura ao escopo externo](http://www.tech-thoughts-blog.com/2013/07/writing-closure-in-python.html) e não à atribuição. Observe como modificamos o exemplo acima para ler um argumento "name" do escopo de inclusão da função interna e retornar a nova função.
```
def compose_greet_func(name): 
  def get_message(): 
      return "Hello there "+name+"!" 
  return get_message 
 greet = compose_greet_func("John") 
 print(greet()) 
```

> Saída: Olá, John!

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Código de execução](https://repl.it/CXHI)

## Composição de decoradores

Decoradores de função são simplesmente wrappers para funções existentes. Colocando as idéias mencionadas acima, podemos construir um decorador. Neste exemplo, vamos considerar uma função que envolve a saída da string de outra função por tags p.
```
def get_text(name): 
   return "lorem ipsum, {0} dolor sit amet".format(name) 
 
 def p_decorate(func): 
   def func_wrapper(name): 
       return "`<p>`{0}`</p>`".format(func(name)) 
   return func_wrapper 
 
 my_get_text = p_decorate(get_text) 
 print (my_get_text("John")) 
```

> Saída: `<p>` lorem ipsum, John dolor sit amet `</p>`

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Código de execução](https://repl.it/CXHL)

Esse foi o nosso primeiro decorador. Uma função que usa outra função como argumento, gera uma nova função, aumentando o trabalho da função original e retornando a função gerada para que possamos usá-la em qualquer lugar. Para que o `get_text` seja decorado por `p_decorate` , basta atribuir _texto ao resultado de p_ decorar.
```
get_text = p_decorate(get_text) 
 print (get_text("John")) 
```

> Saída: lorem ipsum, John dolor sit amet

Outra coisa a notar é que nossa função decorada leva um argumento de nome. Tudo o que tivemos que fazer no decorador é deixar o wrapper do get\_text passar esse argumento.

> ### Sintaxe do Decorador do Python

O Python torna a criação e o uso de decoradores um pouco mais limpos e mais agradáveis ​​para o programador através de algum [açúcar sintático.](http://en.wikipedia.org/wiki/Syntactic_sugar) Para decorar o _texto, não precisamos obter o_ text = p _decorator (obter_ texto) Há um atalho para isso, que é mencionar o nome da função de decoração antes da função a ser decorada. O nome do decorador deve ser perpendido com um símbolo @.
```
def p_decorate(func): 
   def func_wrapper(name): 
       return "`<p>`{0}`</p>`".format(func(name)) 
   return func_wrapper 
 
 @p_decorate 
 def get_text(name): 
   return "lorem ipsum, {0} dolor sit amet".format(name) 
 
 print get_text("John") 
```

> Saída: `<p>` lorem ipsum, John dolor sit amet `</p>`

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Código de execução](https://repl.it/CXHN)

Agora vamos considerar que queríamos decorar nossa função get\_text por 2 outras funções para envolver uma tag div e forte em torno da saída da string.
```
def p_decorate(func): 
   def func_wrapper(name): 
       return "`<p>`{0}`</p>`".format(func(name)) 
   return func_wrapper 
 
 def strong_decorate(func): 
    def func_wrapper(name): 
        return "`<strong>`{0}`</strong>`".format(func(name)) 
    return func_wrapper 
 
 def div_decorate(func): 
    def func_wrapper(name): 
        return "`<div>`{0}`</div>`".format(func(name)) 
    return func_wrapper 
```

Com a abordagem básica, a decoração de get\_text seria ao longo das linhas de
```
get_text = div_decorate(p_decorate(strong_decorate(get_text))) 
```

Com a sintaxe do decorador do Python, a mesma coisa pode ser obtida com um poder muito mais expressivo.
```
@div_decorate 
 @p_decorate 
 @strong_decorate 
 def get_text(name): 
   return "lorem ipsum, {0} dolor sit amet".format(name) 
 
 print (get_text("John")) 
```

> Saída: `<div><p><strong>` lorem ipsum, John dolor sit amet `</strong></p></div>`

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Código de execução](https://repl.it/CXHQ)

Uma coisa importante a notar aqui é que a ordem de definir nossos decoradores é importante. Se a ordem foi diferente no exemplo acima, a saída teria sido diferente. ## Decorating Methods No Python, métodos são funções que esperam que seu primeiro parâmetro seja uma referência ao objeto atual. Podemos construir decoradores para métodos da mesma maneira, enquanto levamos em consideração a função de wrapper.
```
def p_decorate(func): 
  def func_wrapper(self): 
    return "`<p>`{0}`</p>`".format(func(self)) 
  return func_wrapper 
 
 class Person(object): 
  def __init__(self): 
    self.name = "John" 
    self.family = "Doe" 
  @p_decorate 
  def get_fullname(self): 
    return self.name+" "+self.family 
 
 my_person = Person() 
 print (my_person.get_fullname()) 
```

> Saída: `<p>` John Doe `</p>`

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Código de execução](https://repl.it/CXH2)

Uma abordagem muito melhor seria tornar nosso decorador útil para funções e métodos. Isso pode ser feito colocando [\* args e \*\* kwargs](http://docs.python.org/2/tutorial/controlflow.html#arbitrary-argument-lists) como parâmetros para o wrapper, então ele pode aceitar qualquer número arbitrário de argumentos e argumentos de palavras-chave.
```
def p_decorate(func): 
   def func_wrapper(*args, **kwargs): 
       return "`<p>`{0}`</p>`".format(func(*args, **kwargs)) 
   return func_wrapper 
 
 class Person(object): 
    def __init__(self): 
        self.name = "John" 
        self.family = "Doe" 
    @p_decorate 
    def get_fullname(self): 
        return self.name+" "+self.family 
 
 my_person = Person() 
 print (my_person.get_fullname()) 
```

> Saída: `<p>` John Doe `</p>`

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Código de execução](https://repl.it/CXH5)

### Transmitindo argumentos aos decoradores Olhando para o exemplo anterior ao anterior, você pode notar como os decoradores no exemplo são redundantes. 3 decoradores (div _decoram, p_ decoram, strong\_decorate), cada um com a mesma funcionalidade, mas envolvendo a string com tags diferentes. Nós podemos definitivamente fazer muito melhor que isso. Por que não ter uma implementação mais geral para uma que usa a tag como uma string? Sim por favor!
```
def tags(tag_name): 
    def tags_decorator(func): 
        def func_wrapper(name): 
            return "<{0}>{1}</{0}>".format(tag_name, func(name)) 
        return func_wrapper 
    return tags_decorator 
 
 @tags("p") 
 def get_text(name): 
    return "Hello "+name 
 
 print (get_text("John")) 
```

> Saída: `<p>` Olá, John `</p>`

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Código de execução](https://repl.it/CXH6)

Demorou um pouco mais de trabalho neste caso. Os decoradores esperam receber uma função como argumento, e é por isso que teremos que construir uma função que leve esses argumentos extras e gere nosso decorador na hora. No exemplo acima, tags, é o nosso gerador de decorador. Depuração de funções decoradas No final do dia, os decoradores estão apenas envolvendo nossas funções, no caso de depuração que pode ser problemática, já que a função wrapper não carrega o nome, módulo e docstring da função original. Baseado no exemplo acima, se fizermos:
```
print (get_text.__name__) 
```

> Saída: func _wrapper A saída era esperada para ser obter_ texto ainda, os atributos **name** , **doc** e **module** de get _text foram substituídos pelos do wrapper (func_ wrapper. Obviamente podemos re-setá-los dentro de func\_wrapper mas o Python fornece muito maneira mais agradável. ### Functools para o resgate
```
from functools import wraps 
 def tags(tag_name): 
    def tags_decorator(func): 
        @wraps(func) 
        def func_wrapper(name): 
            return "`<{0}>`{1}`</{0}>`".format(tag_name, func(name)) 
        return func_wrapper 
    return tags_decorator 
 
 @tags("p") 
 def get_text(name): 
    """returns some text""" 
    return "Hello "+name 
 
 print (get_text.__name__) # get_text 
 print (get_text.__doc__) # returns some text 
 print (get_text.__module__) # __main__ 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Código de execução](https://repl.it/CXHb)

Você pode notar na saída que os atributos de get\_text são os corretos agora.
