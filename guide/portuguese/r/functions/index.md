---
title: Functions in R
localeTitle: Funções em R
---
Uma função permite que você defina um bloco de código reutilizável que pode ser executado muitas vezes em seu programa.

Funções podem ser nomeadas e chamadas repetidamente ou podem ser executadas anonimamente (similar às funções lambda em python).

Desenvolver a compreensão total das funções R requer compreensão dos ambientes. Ambientes são simplesmente uma maneira de gerenciar objetos. Um exemplo de ambientes em ação é que você pode usar uma variável redundante nome dentro de uma função, que não será afetado se o tempo de execução maior já tiver a mesma variável. Além disso, se um função chama uma variável não definida dentro da função que irá verificar o ambiente de nível superior para essa variável.

### Sintaxe

Em R, uma definição de função possui os seguintes recursos:

1.  A `function` palavra-chave
2.  um nome de função
3.  parâmetros de entrada (opcional)
4.  algum bloco de código para executar
5.  uma declaração de retorno (opcional)

```{r}
# a function with no parameters or returned values 
 sayHello() = function(){ 
  "Hello!" 
 } 
 
 sayHello()  # calls the function, 'Hello!' is printed to the console 
 
 # a function with a parameter 
 helloWithName = function(name){ 
  paste0("Hello, ", name, "!") 
 } 
 
 helloWithName("Ada")  # calls the function, 'Hello, Ada!' is printed to the console 
 
 # a function with multiple parameters with a return statement 
 multiply = function(val1, val2){ 
  val1 * val2 
 } 
 
 multiply(3, 5)  # prints 15 to the console 
```

Funções são blocos de código que podem ser reutilizados simplesmente chamando a função. Isso permite a reutilização de código simples e elegante sem reescrever explicitamente seções de código. Isso torna o código mais legível, facilita a depuração e limita os erros de digitação.

As funções em R são criadas usando a palavra-chave `function` , juntamente com um nome de função e parâmetros de função dentro de parênteses.

A função `return()` pode ser usada pela função para retornar um valor e é normalmente usada para forçar o encerramento antecipado de uma função com um valor retornado. Alternativamente, a função retornará o valor final impresso.

```{r}
# return a value explicitly or simply by printing 
 sum = function(a, b){ 
  c = a + b 
  return(c) 
 } 
 
 sum = function(a, b){ 
  a + b 
 } 
 
 
 result = sum(1, 2) 
 # result = 3 
```

Você também pode definir valores padrão para os parâmetros, que R usará quando uma variável não for especificada durante a chamada de função.

```{r}
sum = function(a, b = 3){ 
  a + b 
 } 
 
 result = sum(a = 1) 
 # result = 4 
```

Você também pode passar os parâmetros na ordem desejada, usando o nome do parâmetro.

```{r}
result = sum(b=2, a=2) 
 # result = 4 
```

R também pode aceitar parâmetros adicionais opcionais com '…'

```{r}
sum = function(a, b, ...){ 
  a + b + ... 
 } 
 
 sum(1, 2, 3) #returns 6 
```

Funções também podem ser executadas anonimamente. Estes são muito úteis em combinação com a família de funções 'apply'.

```{r}
# loop through 1, 2, 3 - add 1 to each 
 sapply(1:3, 
       function(i){ 
         i + 1 
         }) 
```

### Notas

*   Se uma definição de função incluir argumentos sem valores padrão especificados, os valores desses valores deverão ser incluídos.
    
    ```{r}
    sum = function(a, b = 3){ 
     a + b 
     } 
     
     sum(b = 2) # Error in sum(b = 2) : argument "a" is missing, with no default 
    
    ```
    
*   Variáveis ​​definidas dentro de uma função só existem dentro do escopo dessa função, mas irão verificar o ambiente maior se a variável não for especificada
    
    ```{r}
    double = function(a){ 
     a * 2 
     } 
     
     double(x)  # Error in double(x) : object 'x' not found 
     
     
     double = function(){ 
     a * 2 
     } 
     
     a = 3 
     double() # 6 
    
    ```
    

## Funções embutidas em R

*   R vem com muitas funções que você pode usar para fazer tarefas sofisticadas, como aleatório amostragem.
    
*   Por exemplo, você pode arredondar um número com a `round()` ou calcular seu fatorial com o `factorial()` .
    

```r
> round(4.147) 
 [1] 4 
 > factorial(3) 
 [1] 6 
 > round(mean(1:6)) 
 [1] 4 
```

*   Os dados que você passa para a função são chamados de argumento da função.
    
*   Você pode simular um roll do dado com a função `sample()` R. A função `sample()` recebe dois argumentos: um vetor chamado x e um número chamado size. Por exemplo:
    

```r
> sample(x = 1:4, size = 2) 
 [] 4 2 
 > sample(x = die, size = 1) 
 [] 3 
 >dice <- sample(die, size = 2, replace = TRUE) 
 >dice 
 [1] 2 4 
 >sum(dice) 
 [1] 6 
```

*   Se não tiver certeza de quais nomes usar com uma função, você pode procurar a função argumentos com args.

```r
> args(round) 
 [1] function(x, digits=0) 
```

## Recursos

[Documentos oficiais](https://cran.r-project.org/manuals.html) [Quick-R](https://www.statmethods.net/management/functions.html) [CRAN](https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Functions) [R avançado: funções](http://adv-r.had.co.nz/Functions.html)