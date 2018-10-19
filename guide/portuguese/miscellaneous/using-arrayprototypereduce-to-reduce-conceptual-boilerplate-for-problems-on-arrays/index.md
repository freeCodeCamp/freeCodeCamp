---
title: Using Arrayprototypereduce to Reduce Conceptual Boilerplate for Problems on Arrays
localeTitle: Usando Arrayprototypereduce para reduzir o padrão clichê para problemas em matrizes
---
Isso é um bocado! Ele poderia ter sido intitulado **Use `Array.prototype.reduce()` para resolver problemas de array facilmente** ou **`Array.prototype.reduce()` FTW!** . Isso teria sido muito mais fácil de ler e analisar.

Mas não foi. Loops em JavaScript são assim mesmo. Eles não são concisos, eles fazem você bater no mato por um tempo. Como diz a piada, duas coisas são mais difíceis na ciência da computação - [invalidação de cache](https://en.wikipedia.org/wiki/Cache_invalidation) , [nomeação de coisas](https://www.quora.com/Why-is-naming-things-hard-in-computer-science-and-how-can-it-can-be-made-easier) e [erro off-by-one](https://en.wikipedia.org/wiki/Off-by-one_error) .

E então há o perigo de escrever [um código assíncrono dentro de um loop for sem usar o encerramento de IIFE](http://stackoverflow.com/questions/11488014/asynchronous-process-inside-a-javascript-for-loop) .

Este artigo começaria com uma afirmação - que você pode evitar o uso de um loop for ou loop while para resolver qualquer problema relacionado à `Array` . Em vez disso, você pode resolver todos eles usando `Array.prototype.reduce()` . Se você deseja ler em frente; verifique se você conhece as funções recursivas e algumas das ferramentas funcionais legais, como `Array.prototype.map()` ou `Array.prototype.filter()` .

Grandes reivindicações exigem grande evidência. Então, vamos demonstrar como podemos nos acostumar com o uso de `reduce()` .

Está na hora de você saber que, se não tiver resolvido as seções de script do algoritmo FreeCodeCamp, talvez queira adiar a leitura desta próxima parte. Alguns dos exemplos podem muito bem combinar esses problemas.

Este é o alerta de spoiler clichê; Certifique-se de dar a esses problemas uma tentativa honesta e não dar uma olhada nas soluções antes mesmo de tentar.

Além disso, se você já o entende bem o suficiente, talvez queira rever essa redação e fornecer feedback.

## Posso reduzir qualquer problema relacionado a matriz?

Sim você pode! Na verdade, o problema nem precisa ter um Array - _isso só tem que ser um problema, onde você pode criar um array intermediário_ .

Vamos dar um exemplo. É muito comum criar uma [URL de slug a](https://en.wikipedia.org/wiki/Semantic_URL#Slug) partir de uma string padrão em branco, como manchetes de notícias, títulos de artigos de blogs ou até mesmo perguntas em fóruns de perguntas e respostas.

Diga, nós temos que escrever uma função de utilidade, que cria essa lesma. Você provavelmente poderia escrever algo assim:
```
function createSlug(str){ 
  return str.split(" ").reduce(function(prev, next){ 
    return prev.concat(<a href='https://signalvnoise.com/posts/3124-give-it-five-minutes' target='_blank' rel='nofollow'>next.toLowerCase()]); 
  }, []) 
  .join("-"); 
 } 
```

Não tome minha palavra para isso! Vá em frente, e teste em seu console com alguma entrada como "Leo Finally Wins a Freaking Oscar!" Veja o que ele retorna. Eu vou esperar ... pronto? Ok, seguindo em frente.

Sim, não é uma implementação robusta. Não cuida de alguns casos de borda, também assume que a união deve acontecer com `"-"` .

Mas é um começo. Observe como o uso de `reduce` tira o boilerplate do seu caminho - a ação acontece apenas na linha:
```
return prev.concat([next.toLowerCase()]); 
```

Esse é o núcleo da funcionalidade que queremos. De fato, estamos tão seguros de sua grandiosidade, que começamos o corpo da `function` com uma declaração de `return` !

Você pode muito bem imaginar isso, isso parece magia negra. Certifique-se de que não seja uma reação instintiva, porque você está muito acostumado a escrever loops. Apenas \[dê cinco minutos!

Se o código acima não estiver claro, você precisa entender como a `reduce` funciona. E _entenda_ , quero dizer, saiba como a palma da sua mão.

## Mas eu não entendo reduzir de todo!

Bem, não tenha medo! Você está prestes a ser um Ninja `reduce` nos próximos minutos.

Cada função JavaScript tem três coisas que você precisa saber para entender como a função funciona:

*   A entrada
*   A saída
*   O contexto de execução

Sim, posso ver você abrindo a [documentação](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) oficial do [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) em uma nova guia! Tudo bem, leia isso primeiro. Estou falando sério, isso não é brincadeira.

Você deve sempre começar na documentação oficial para entender alguma coisa.

Bom, agora que você está confuso com o `prev` e o `next` dentro do callback; você está pronto para seguir o texto aqui.

`Array.prototype.reduce()` recebe um retorno de chamada e um valor inicial como argumentos de entrada (o valor inicial é importante. Muitos desenvolvedores esquecem de fornecer o valor inicial corretamente e estragam o código).

Como você deve ter visto na documentação, são necessários alguns argumentos adicionais, mas opcionais. Mas mais sobre isso depois. Assumindo `arr` é um array arbitrário.
```
arr.reduce(function(){}, initialValue); 
```

Agora, vamos dar uma olhada mais de perto na função de retorno de chamada, que é o primeiro argumento de `reduce` . Este retorno de chamada, por sua vez, leva dois argumentos. Estes dois argumentos são chamados na documentação oficial como `prev` e `next` . Pessoalmente, não acho que esses nomes façam justiça à sua verdadeira natureza.

Assim, ao longo deste texto, estaríamos nos referindo a eles como `acc` , para representar valor acumulado; e `item` , para denotar o item atual que está sendo acessado.

Com estes, até aqui, o que deve ser uma `reduce` :
```
arr.reduce(function(acc, item){ 
 /* here you have to complete the function */ 
 }, initialValue); 
```

Agora, vamos descobrir o que seria o valor destes `acc` e `item` são. Já mencionamos anteriormente que a `reduce` é um substituto para construções iterativas.

É lógico que `reduce` levaria sua função de retorno de chamada personalizada; e iterar sobre o Array no qual `reduce` foi invocado.

Em vez de descrevê-los, vamos perguntar ao mecanismo de execução JS quais são eles!
```
var arr = <a href='http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/' target='_blank' rel='nofollow'>10, 20, 30, 60]; 
 arr.reduce(function(acc, item){ 
   console.log(acc, item); 
 }, 0); 
```

Executar as informações acima no navegador ou no console do Nó forneceria a seguinte saída:
```
0 10 
 undefined 20 
 undefined 30 
 undefined 60 
```

Observe que o número de saídas é o mesmo que o número de elementos na matriz `[10, 20, 30, 60]` . Na verdade, imprime os elementos do Array!

Assim, podemos deduzir que `reduce()` pega seu retorno de chamada customizado e o executa em cada elemento do Array. Ao fazer isso, ele torna o item atual disponível para o retorno de chamada personalizado como argumento de `item` .

Mas e quanto a `acc` ? Vemos que diferente da primeira linha, quando `item = 10` , é `undefined` . Na primeira linha, que corresponde à primeira iteração, seu valor é igual ao valor `initialvalue` .

Em suma, o nosso `acc` acumulador, não está acumulando!

Mas então, como podemos acumulá-lo? Vamos tentar executar isso:
```
var arr = [10, 20, 30, 60]; 
 arr.reduce(function(acc, item){ 
   console.log(acc, item); 
   return acc; 
 }, 0); 
```

Desta vez, a saída muda para:
```
0 10 
 0 20 
 0 30 
 0 60 
```

Como você pode ver, o valor de `acc` permaneceria constante durante todo o processo. E isso é esperado - não estamos alterando o valor de `acc` em qualquer lugar no retorno de chamada personalizado. Devolvemos qualquer `reduce` disponível em uma determinada iteração.

Mas sabia que alguma coisa - o valor de `acc` para a iteração atual, seria o `return` valor de retorno de chamada personalizada da iteração anterior. E, finalmente, quando a iteração terminar, o valor final de `acc` será retornado pela chamada `reduce` .

Isso deixa apenas uma parte importante em nossa compreensão - o valor do contexto de execução ou \[ `this` !

Então, novamente nos aproximamos do nosso vizinho amigável, o console JS e executamos isso:
```
var arr = <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode' target='_blank' rel='nofollow'>10, 20, 30, 60]; 
 arr.reduce(function(acc, item){ 
   console.log(acc, item, this); 
   return acc; 
 }, 0); 
```

Se você estiver em \[modo estrito, ele retornará `undefined` como valor `this` . Caso contrário, no navegador, apontaria para o objeto [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) como `this` . Podemos substituir e definir por conta própria, usando [`bind`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind) ? Certo! apenas use `bind` com o callback:
```
var arr = <a href='https://en.wikipedia.org/wiki/Loop_invariant' target='_blank' rel='nofollow'>10, 20, 30, 60]; 
 arr.reduce(function(acc, item){ 
   console.log(acc, item, this); 
   return acc; 
 }.bind(arr), 0); 
```

Eu limitei o array `arr` si; mas você pode configurá-lo para qualquer objeto em seu ambiente.

## Compreender Reduzir

Vamos resumir nossa compreensão desta função de `reduce` para fácil referência:

*   Reduzir leva um retorno de chamada personalizado como seu primeiro argumento e algum valor inicial como seu segundo argumento.
*   É importante não nos esquecermos do segundo argumento, o valor inicial; e explicitamente definimos enquanto o usamos.
*   Os argumentos de entrada para o retorno de chamada personalizado são acumulados valor `acc` ; e o item atual na Matriz, `item` .
*   O valor de `acc` para a próxima iteração seria o valor retornado de dentro do retorno de chamada, na iteração atual.
*   O ponto inteiro de usar `reduce()` é formar o `acc` corretamente; para retorná-lo finalmente da chamada `reduce()` .

Não tente lembrar-se deles! Em vez disso, vamos lembrar deles aplicando-os em código real.

## Usando Reduzir

Vamos iniciar uma simples operação de Array no topo da nossa cabeça - _encontrando o máximo em um Array_

Por uma questão de brevidade, estou assumindo que é um inteiro Array.

Para formar uma solução, precisamos pensar em como formar o `acc` como `reduce` leva o nosso retorno e itera sobre a matriz.

Uma ideia que acho útil é pensar em termos de \[loop-invariants. Queremos chegar a uma formulação que não importa qual o tamanho ou conteúdo do Array; `acc` deve sempre ter o valor máximo até o momento.

Diga, My Array é `[20, 50, 5, 60]` . Após duas iterações; `item` seria `5` e `acc` deve ser `max(20, 50) = 50` .

A única maneira de `acc` sempre obter o máximo de _subarray percorrido até agora_ , é se sempre escolhermos o máximo do `item` atual e `acc` - e retornar o vencedor!

Então, aqui está a aparência da função:
```
var arr = [20, 50, 5, 60]; 
 arr.reduce(function(acc, item){ 
  return Math.max(acc, item); 
 }, 0); 
```

Pode ser tentador reescrevê-lo da seguinte maneira, em conjunto com os princípios de programação funcional;
```
var arr = [20, 50, 5, 60]; 
 arr.reduce(Math.max, 0); 
```

mas isso não funcionaria e retornaria `NaN` . Aqui está o motivo - `acc` e `item` não são os **únicos** argumentos para o retorno de chamada personalizado. Quando você chama [`Math.max()`](//forum.freecodecamp.com/t/javascript-math-max/14682) tenta chamá-lo em argumentos não numéricos, resultando em `NaN` .

Observe que não pensei muito em escolher o valor inicial. Eu só peguei como `0` ; resultando em um bug!

Então, e se minha matriz for composta de valores menores que zero? Diga, `arr = <a href='https://en.wikipedia.org/wiki/Least_common_multiple' target='_blank' rel='nofollow'>-7, -56, -5, -2]` . O valor retornado seria `0` , o que não é ainda presente na matriz `arr` .

Em vez disso, devemos escolher o menor valor possível para o valor inicial.
```
var arr = [-20, -50, -5, -60]; 
 arr.reduce(function(acc, item){ 
  return Math.max(acc, item); 
 }, -Infinity); 
```

Estamos chegando lá. Devemos aprimorar nossas habilidades em outro problema relacionado à Matriz. Só para se divertir, vamos com um pouco mais difícil.

Digamos que devemos encontrar \[LCM de uma matriz de inteiros. Agora, a partir da teoria, sabemos que o LCM de dois números seria produto deles, dividido pelo seu [HCF](https://en.wikipedia.org/wiki/Greatest_common_divisor) .

Algoritmo Eucliano para o achado de HCF existe; e abundante é a sua implementação. Não adianta desperdiçar seu tempo fazendo você escrever uma função HCF quando você pode escrever um, ou encontrar um.

Em vez disso, vamos ver como estender o LCM de dois números no LCM de vários números. Newsflash - não é produto de array inteiro dividido pelo seu HCF. Não. Isso seria matematicamente errado.

O LCM de três números seria o LCM dos dois primeiros números; então LCM do primeiro LCM com o número restante. Da mesma forma, você pode formular uma estratégia para descobrir primeiro o LCM da sub-matriz, depois pegar outro número e encontrar o seu LCM com o primeiro LCM.

Então, como podemos formular a solução? Precisamos pensar em `acc` no meio de uma iteração. O `acc` final deve ser o LCM de toda a matriz, sem dúvida. Mas durante a `nth` iteração também; `acc` deve manter o LCM dos elementos `(n-1)` percorridos até agora.

E sim, o valor inicial. Deve ser um número, cujo LCM com outro número seria o outro número. Claramente, é `1` .

Vamos escrever nossa solução de `reduce` .
```
var arr = <a href='http://www.freecodecamp.com/challenges/symmetric-difference' target='_blank' rel='nofollow'>1, 2, 3, 4, 5, 6]; 
 arr.reduce(function(acc, item){ 
  return acc * item / hcf(acc, item); 
 }, 1); 
```

Estou assumindo que uma função `hcf()` está disponível no ambiente. Eu escolhi as entradas de uma maneira; deve retornar `60` como resposta.

## Mais reduzir

Reduzir não é apenas uma função para fornecer utilitários para resolver alguns problemas de Mathy, como soma da matriz, hcf da matriz, mínimo da matriz, etc.

É perfeitamente capaz de ir além. Nós estaremos lidando com alguns exemplos complexos por enquanto.

Diga, você deseja achatar matrizes aninhadas. E sim, antes de começar a pular para cima e para baixo em seu assento - o aninhamento poderia ser qualquer nível arbitrário.

Por exemplo, poderíamos usar esse array para testar nosso código.
```
var arr = [[1, 2, 3], ['cat', 'dog', ['fish', 'bird'], [[[]]]]]; 
```

Isso parece suficientemente complexo para começar - matrizes aninhadas, matrizes aninhadas vazias com profundidade variável.

A saída deve ser `[1, 2, 3, 'cat', 'dog', 'fish', 'bird']`

Chegou a hora de formular uma estratégia. Nós claramente precisamos distinguir entre uma matriz e um elemento. Além disso, `acc` deve ser o array sendo formado ao longo da iteração; significando que o valor inicial seria uma matriz vazia `[]` .

Ao longo do código da função de retorno de chamada, simplesmente extraímos o conteúdo do `item` , que pode ser uma matriz profundamente aninhada; e nós iríamos `Array.prototype.concat()` com o valor `acc` . É melhor usar `concat()` sobre `Array.prototype.push()` ; porque `push()` altera o array original; enquanto `concat()` cria uma nova matriz e a retorna.

E já que não sabemos o nível de aninhamento em um dado instante; Devemos chamar nosso callback personalizado recursivamente. Ou seja, temos que escrevê-lo em outro lugar e chamá-lo pelo nome dentro de `reduce()` .
```
var arr = [[1, 2, 3], ['cat', 'dog', ['fish', 'bird'], [[[]]]]]; 
 
 function flattenArray(arr) { 
  return arr.reduce(function(acc, item){ 
    if(Array.isArray(item)){ 
      return acc.concat(flattenArray(item)); // recursively call to flatten nested array 
    return acc.concat(item); // this does the ordering. If you want reverse ordered output, just reverse it! 
  }, []) 
 
 } 
 
 // call it like this 
 flattenArray(arr); 
```

Claro, isso requer algum conhecimento em funções recursivas; mas isso não é muito difícil de entender, comparado ao assunto deste longo!

Sim, vá em frente e brinque com isso. Mas observe como podemos simplesmente escrever 3-4 linhas de funções limpas, mantendo algumas poucas diretrizes simples em mente - e fazer algo tão complexo quanto isso de forma confiável. Isso é legível e sustentável.

Por exemplo, se você quiser alterar ou ajustar a lógica da lógica mais tarde (digamos que você queira colocar uma string em maiúsculas ou codificar alguma string); você pode identificar facilmente onde alterar. O aninhamento real acontece dentro da condição `if` . E a maneira como usamos a chamada de `reduce` - mantém a ordem dos elementos como eles estão na matriz.

Vamos dar outro exemplo aparentemente complexo e trazê-lo de joelhos para a espada de `reduce` !

Estamos a descobrir as \[diferenças simétricas de duas ou mais matrizes. Parece assustador; mas então você começa a pensar.

Qual seria o valor inicial? Claro, estamos formando uma matriz; então seria uma matriz vazia `<a href='https://github.com/reactjs/redux' target='_blank' rel='nofollow'>]` para começar. Então há o `acc` - desde que nossa solução final conteria uma matriz difusa; teria que ser um array também. Isso continuaria empilhando as diferenças simétricas das matrizes encontradas até agora.

Só para ficar claro, essa função poderia aceitar um número arbitrário de matrizes; então, temos que convertê-los todos em uma matriz de matrizes para facilitar a manipulação.
```
function symDiff(args){ 
  // convert args to an Array 
  var argsArray = Array.prototype.slice.call(arguments); 
 
  // now do the reduce magic! 
  argsArray.reduce(function(acc, item){ 
    return acc 
      .filter(function(itemInAcc){ 
        return item.indexOf(itemInAcc) === -1; 
      }) 
      .concat(item.filter(function(itemInItem){ 
        return acc.indexOf(itemInItem) === -1; 
      })); 
  }. []); 
 } 
```

Sim eu conheço. Parece grande. Então, vamos ver se podemos refatorar para torná-lo pequeno. Observe que ambas as funções de `filter` fazem o mesmo trabalho; exceto com um conjunto alterado de pares de argumentos. Legal! Vamos criar uma função separada e chamá-la duas vezes com esses argumentos.
```
function symDiff(args){ 
  // convert args to an Array 
  var argsArray = Array.prototype.slice.call(arguments); 
 
  // now do the reduce magic! 
  argsArray.reduce(function(acc, item){ 
    var funWithFiltering = function(arr1, arr2){ 
      return arr1.filter(function(itemInArr1){ 
        return arr2.indexOf(itemInArr1) === -1; 
      }); 
    }; 
 
    return funWithFiltering(acc, item).concat(funWithFiltering(item, acc)); 
  }. []); 
 } 
```

Isso parece melhor. Mas ainda há outro problema. Isso manteria duplicatas na matriz. Se isso não for necessário, poderíamos facilmente escrever outra função usando `reduce` para remover as duplicatas.
```
function removeDuplicates(arr){ 
  arr.filter(item, index, self){ 
    // Keep only the first instance of the array, as given by indexOf() 
    // Remove other elements from Array 
    return self.indexOf(item) === index; 
  } 
 } 
```

Não podemos continuar ignorando isso por mais tempo. Eu tenho usado `filter` enquanto prometi usar `reduce` , certo? O motivo é simples - o `filter` pode ser escrito com `reduce` . Na verdade, qualquer operação de matriz, em teoria; pode ser implementado com `reduce()` .

Faça uma tentativa! Implemente o `map` e `filter` com `reduce` . Você tem que cuidar de argumentos opcionais também.

## Empacotando

Whoa isso foi bastante! Mas eu acho que fiz um forte caso de usar `reduce` sempre que você quiser usar um loop para fazê-lo. Esteja habituado a isso como se fosse sua primeira natureza.

Assim que você tiver um problema em alguma transformação de String ou manipulação de Array; comece escrevendo
```
return arr.reduce(function(acc, item){_}, _); 
```

E então preencha os espaços em branco. Quando você está usando `reduce()` , você está pensando em termos de interação de cada elemento com outro elemento. Você está formando a saída aculmando-a do início ao fim.

O framework \[Redux abraça o princípio de `reduce` e está ganhando alta popularidade em web design.

Observe também outro recurso importante - `reduce` forças ou o guie para formar sua solução sem alterar nada existente. Por exemplo, no último exemplo; estávamos filtrando e concatenando - mas sabíamos que funcionaria como está; porque o primeiro conjunto de operação não alterar qualquer das `acc` ou `item` dentro dessa iteração.

Este seria um ótimo momento para você, que o parâmetro `initialValue` é [opcional](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#Parameters) . Você não precisa fornecer explicitamente.

Se você omitir isso; para a primeira iteração `acc` seria o primeiro item da matriz e `item` seria o segundo item da matriz. Isso significaria que podemos escrever uma soma de utilitário de matriz apenas omitindo-o. Ou, não precisamos pensar em `-Infinity` no caso de encontrar valor máximo em array - isso funcionaria muito bem se removermos o valor inicial.

Mas em algumas situações complexas, seria melhor visualizar e formular a solução em termos de alguma base - alguma inicialização. No entanto, se você estiver mais confortável sem ele, cada um dele mesmo!

Se você tiver outras dúvidas ou sugestões, entre em nossa [sala de chat gitter](https://gitter.im/FreeCodeCamp/FreeCodeCamp) ; e conte-nos como você `reduce` !