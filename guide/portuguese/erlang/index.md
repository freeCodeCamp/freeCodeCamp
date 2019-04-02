---
title: Erlang
localeTitle: Erlang
---
## Erlang

Erlang é uma linguagem de programação funcional, desenvolvida pela Ericsson para uso em aplicações de telecomunicações. Por acharem que é inaceitável que um sistema de telecomunicações tenha algum tempo de inatividade significativo, o Erlang foi construído para ser (entre outras coisas):

*   distribuído e tolerante a falhas _(um software ou hardware com falha não deve desativar o sistema)_
*   concorrente _(pode gerar muitos processos, cada um executando um trabalho pequeno e bem definido, e isolados uns dos outros, mas capazes de se comunicar via mensagens)_
*   hot-swappable _(o código pode ser trocado no sistema durante a execução, levando a alta disponibilidade e tempo de inatividade mínimo do sistema)_

### Sintaxe

Erlang faz uso pesado de **recursão** . Como os dados são imutáveis ​​em Erlang, o uso de loops `while` e `for` (onde uma variável precisa continuar mudando seu valor) não é permitido.

Aqui está um exemplo de recursão, mostrando como uma função tira repetidamente a primeira letra da frente de um nome e a imprime, parando apenas quando a última letra é encontrada.

```erlang
-module(name). 
 
 -export([print_name/1]). 
 
 print_name([RemainingLetter | []]) -> 
  io:format("~c~n", [RemainingLetter]); 
 print_name([FirstLetter | RestOfName]) -> 
  io:format("~c~n", [FirstLetter]), 
  print_name(RestOfName). 
```

Saída:
```
> name:print_name("Mike"). 
 M 
 i 
 k 
 e 
 ok 
```

Há também uma forte ênfase na **correspondência de padrões** , que freqüentemente elimina a necessidade de uma estrutura `if` ou declaração de `case` . No exemplo a seguir, há duas correspondências para nomes específicos, seguidas por um pega-tudo para quaisquer outros nomes.

```erlang
-module(greeting). 
 
 -export([say_hello/1]). 
 
 say_hello("Mary") -> 
  "Welcome back Mary!"; 
 say_hello("Tom") -> 
  "Howdy Tom."; 
 say_hello(Name) -> 
  "Hello " ++ Name ++ ".". 
```

Saída:
```
> greeting:say_hello("Mary"). 
 "Welcome back Mary!" 
 > greeting:say_hello("Tom"). 
 "Howdy Tom." 
 > greeting:say_hello("Beth"). 
 "Hello Beth." 
```

### Experimente

Existem sites onde você pode tentar executar comandos Erlang sem ter que instalar nada localmente, como estes:

*   [De uma chance! (um tutorial prático)](http://www.tryerlang.org/)
*   [Tutoriais](https://www.tutorialspoint.com/compile_erlang_online.php)

Se você gostaria de instalá-lo em sua máquina (ou virtual), você pode encontrar arquivos de instalação em [Erlang.org](https://www.erlang.org/downloads) ou em [Erlang Solutions](https://www.erlang-solutions.com/resources/download.html) .

#### Mais Informações:

*   [Sobre o Erlang](https://www.erlang.org/about)
*   [Aprenda-lhe alguns Erlang para o bem grande!](http://learnyousomeerlang.com/)
*   [Abrigo Desovado!](http://spawnedshelter.com/) _(uma coleção de artigos, vídeos e livros para aprender Erlang)_
*   [Erlang (linguagem de programação)](https://en.wikipedia.org/wiki/Erlang_(programming_language))