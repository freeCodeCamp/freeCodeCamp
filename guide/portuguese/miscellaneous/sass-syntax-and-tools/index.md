---
title: Sass Syntax and Tools
localeTitle: Sintaxe Sass e Ferramentas
---
_"Um artista é tão bom quanto suas ferramentas."_

Isso não é necessariamente verdade, mas as ferramentas que usamos podem certamente tornar as nossas vidas mais fáceis e as nossas tarefas mais fáceis de gerir. Imagine escrever código sem atalhos de teclado ou snippets disponíveis! Não é o fim do mundo, mas você ganha a essência.

As "ferramentas", ou mais comumente referenciadas como diretivas, que estaremos discutindo são, na verdade, recursos incorporados que vêm junto com o Sass e podem nos ajudar, como desenvolvedores, a escrever código DRY-er (não se repetir) e mais limpo.

_Se você gostaria de seguir em seu próprio editor de texto, eu recomendo instalar um **sintaxe de Sass-highlighter** . Atom e Sublime Text, bem como alguns outros editores suportam estes._

## Variáveis

Se você escreveu código em outra linguagem de programação (JavaScript, Python, Java, C, etc.), então você está familiarizado com o conceito de variáveis. Se não, então as variáveis ​​são basicamente declarações declaradas que podem armazenar algum tipo de valor como um número ou string.

No Sass, as variáveis ​​funcionam basicamente da mesma maneira e podem ser declaradas com um caracter "$" ao lado do nome da variável:
```
$main-color: #CCCCCC; 
```

A variável acima está armazenando o código de cores hexagonais para um tom de cinza. Podemos declarar esta variável dentro de qualquer `.scss` ou `.sass` arquivo que estamos trabalhando no que também pode incorporar a variável em uma tag (HTML5 tag, ID, classe, seletores pseudo) ao denominar.:
```
$main-color: #CCCCCC; 
 
 header { 
  background-color: $main-color; 
 } 
```

Neste trecho de código, atribuímos o valor da `background-color` de `background-color` do cabeçalho ao valor armazenado em `$main-color` , que (quando Sass compila para CSS) é exibido como:
```
header { 
  background-color: #CCCCCC; 
 } 
```

Arrumado! Mas não poderíamos apenas definir a `background-color` para `#CCCCCC` em primeiro lugar? A resposta é sim, mas há mais do que isso.

Digamos que estamos criando um site de várias páginas para um cliente e acabamos de escolher um "esquema de cores" simples de três cores. Nossa barra de navegação, o rodapé são de uma cor, e talvez nossos elementos de artigo, parágrafos e cabeçalhos sejam uma das duas cores restantes. Então, um dia, o cliente muda sua mente o esquema de cores que selecionamos e quer que ele seja alterado. Ótimo.

Então, temos a tarefa de examinar nossas várias folhas de estilo (ou talvez uma folha de estilos massiva, se você preferir) e alterar todos esses valores de cores. Talvez nós misturemos um. Ou talvez tenhamos saudades de um e tenhamos que continuar voltando para corrigi-los.

Com variáveis ​​(e o uso de parciais de Sass que discutiremos mais adiante) podemos ajustar os valores nas declarações de variáveis, e em qualquer outro lugar usamos as variáveis ​​em nossa (s) folha (s) de estilo os valores serão alterados para refletir a atribuição de variável que alteramos. Este é apenas um exemplo de como variáveis ​​úteis podem ser usadas de acordo com o Sass. As variáveis ​​se tornam mais cruciais à medida que adicionamos ao nosso conjunto de ferramentas Sass.

Na mesma nota, vamos abordar mixins.

## Mixins

Um mixin é um bloco de código reutilizável que pode receber argumentos, da mesma forma que uma função em JavaScript pode. No entanto, não deve ser confundido com o recurso `@function` função real no Sass.

Mixins são declarados prefixando o caractere "@" na frente da palavra "mixin", então o nome do mixin. Abaixo está um exemplo de um mixin chamado btn que recebe dois argumentos e os aplica às propriedades CSS:
```
@mixin btn($color, $text-color) { 
  background-color: $color; 
  color: $text-color; 
  padding: 1em; 
 } 
```

Depois de escrever um mixin, nada acontecerá por padrão porque não colocamos o mixin em uso (semelhante a escrever uma função vs. chamar uma função). Vamos integrar nosso mixin. Vamos incluí-lo em um seletor de `button` HTML5 usando a instrução `@include` :

_A instrução `@include` nos permite `@include` nosso estilo mixin em um seletor CSS de nossa escolha. Neste caso, o seletor de `button` com os valores azul e branco passou como argumentos._
```
button { 
  @include btn(blue, white); 
 } 
```

Que é algo que podemos usar em qualquer outro seletor de HTML, se quisermos. Isso compilaria para:
```
button { 
  background-color: blue; 
  color: white; 
  padding: 1em; 
 } 
```

Apenas usando a única linha `@include btn(blue, white);` dentro de nosso seletor de botão, podemos trazer todo o código escrito dentro de nosso mixin com azul e branco passados ​​como argumentos. Além disso, podemos definir valores padrão para os argumentos passados ​​para um mixin. Por exemplo, digamos que nosso mixin de botões tenha como padrão uma cor específica e uma cor de fonte se nenhum valor for passado quando chamado:
```
@mixin button($color: green, $text-color: red) { 
  background-color: $color; 
  color: $text-color; 
  padding: 1em; 
 } 
```

Digitando um ":" seguido do valor padrão que queremos definir, atribuímos verde como valor padrão para nosso argumento `$color` e vermelho como valor padrão para nosso argumento `$text-color` .

Agora, se fôssemos chamar nosso mixin sem passar nenhum valor ...
```
button { 
  @include btn; 
 } 
```

Isso compila em:
```
button { 
  background-color: green; 
  color: red; 
  padding: 1em; 
 } 
```

Se quiséssemos colocar nossas variáveis ​​em uso com nosso mixin, poderíamos também fazer o seguinte:
```
$main-color: #CCCCCC; 
 $second-color: #FFFFFF; 
 
 @mixin button($color: $main-color, $text-color: $second-color) { 
  background-color: $color; 
  color: $text-color; 
  padding: 1em; 
 } 
```

No exemplo acima, declaramos duas variáveis ​​com valores de cores hexadecimais distintos, em seguida, definimos os argumentos `$color` e `$text-color` como padrão para nossas variáveis, se nenhum argumento for passado.

Geralmente é considerado uma boa prática definir valores padrão para um mixin, mas definitivamente não é necessário. Você descobrirá que muitos desenvolvedores têm sua própria maneira de escrever códigos e opiniões variadas sobre o que é considerado o "melhor".

A diversão não vai parar por aqui. Há um bom punhado de outros truques úteis que podemos executar ao escrever mixins e uma infinidade de possibilidades em como escrevê-los. O que é importante tirar de mixins é que eles servem como módulos ou "objetos" nos quais podemos declarar certos estilos, passar valores e reutilizar em nosso código onde for necessário, em vez de nos repetirmos continuamente ao mesmo tempo em que criamos diferentes elementos. Eles podem nos ajudar a ficar mais verdadeiros com o princípio DRY.

## Estende

A última ferramenta que discutiremos é a diretiva extend. As extensões podem ser usadas para duplicar um estilo que aplicamos anteriormente a outro elemento. No entanto, há muito mais acontecendo nos bastidores ao implementar uma extensão e isso pode produzir alguns efeitos colaterais indesejados em nosso estilo, se não formos cuidadosos.

Abaixo está um exemplo de uma diretiva extend sendo usada:
```
.primary-module { 
  color: red; 
 } 
 
 .another-module { 
  @extend .primary-module; 
 } 
 
 // This ouputs the following CSS 
 
 .primary-module, .another-module { 
  color: red; 
 } 
```

Nada muito obscuro aqui ainda. Temos um segmentador de `.another-module` que usa um estilo de extensão para clone que foi aplicado ao seletor `.primary-module` . Isso gera um estilo de `color: red;` sendo aplicado à classe `.primary-module` e `.another-module` . Lógico até agora e uma ferramenta que tem um efeito semelhante ao incluir um mixin em vários elementos que precisam compartilhar o mesmo estilo.

Agora vamos dar uma olhada em um exemplo diferente e escolher onde uma diretiva extend complica um pouco:
```
.primary-module p { 
  color: red; 
 } 
 
 .another-module { 
  @extend .primary-module; 
 } 
 
 // This outputs the following CSS 
 
 .primary-module p, .another-module p { 
  color: red; 
 } 
```

Você pegou? O seletor de `.another-module` está usando uma extensão no seletor `.primary-module p` . `.another-module` . Note que, porque o `.primary-module` possui um seletor de descendência de `p` (tag de parágrafo), quando a extensão é chamada e nosso código Sass é compilado, o estilo da `color: red;` está sendo aplicado ao `.primary-module p` e `.another-module p` .

O que está acontecendo é que a diretiva extend não está clonando apenas o estilo do `.primary-module p` , mas está clonando o tag seletor de descendência de `p` e adicionando isso a um `.another-module` . Estamos copiando o estilo e o seletor descendente do que tomamos emprestado. Como resultado, o estilo que estendemos está sendo aplicado a elementos de parágrafo que são descendentes de `.another-module` e não simplesmente de elementos com uma classe de `.another-module` .

Você pode ver onde algo como isso pode ficar peludo, se não estamos cientes do que está fazendo.

Então, nós olhamos atrás das cortinas e agora você pode estar pensando _Qual é o sentido de usar extensões? Vale a pena ou posso usar mixins?_

A resposta curta (há muito mais a ser dito sobre esse tópico) é que, com frequência, as extensões serão usadas para usar propositalmente a herança de estilos aplicados a outros elementos ou para fazer uso particular do que é conhecido como **classes silenciosas** no Sass. Extensões geralmente podem realizar o que mixins podem quando usadas com cuidado, mas não devem ser usadas sem pensar no lugar de outra. Prática estende e usá-los com um propósito específico em mente.

Quanto às aulas silenciosas, isso é algo que esperamos que seja abordado em uma próxima seção deste artigo. Por enquanto, apenas saiba que as classes silenciosas são seletores em Sass, que são prefixados com um caractere "%" e não serão compilados, a menos que sejam chamados por extensão.

## Conclusão

Se você chegou ao final deste artigo, você merece algum reconhecimento. Eu escrevi isso na esperança de explicar Sass de uma maneira que eu gostaria que tivesse sido ensinado para mim quando eu comecei a brincar com isso. Se o CSS é algo com o qual você luta ou sempre se sentiu apreensivo por causa da rapidez com que se torna uma bagunça, então esperamos que o Sass comece a aliviar algumas dessas frustrações.

Este artigo serve como um "curso intensivo" de sorte para molhar os pés no mundo do Sass. Há ainda uma quantidade significativa de ferramentas e recursos que fazem o Sass brilhar, assim como as melhores práticas quando se trata de **estruturar suas folhas de estilo e dividi-las em parciais** .

Meu conselho é começar o sandbox em seu próprio editor de texto e no [Sassmeister](http://www.sassmeister.com/) para ficar mais confortável com os conceitos abordados neste artigo. Esteja também à procura do curso Free Code Camp Sass em breve.

Saia e suba de nível o seu jogo Sass.