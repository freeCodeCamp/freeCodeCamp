---
title: Animations
localeTitle: Animações
---
# Animações

#### Motivação

Os componentes da web modernos usam frequentemente animações. Folhas de estilo em cascata (CSS) armam os desenvolvedores com as ferramentas para criar animações impressionantes. Transições de propriedades, animações nomeadas com exclusividade, quadros-chave de várias partes são possíveis com CSS. As possibilidades animables são infinitas graças ao CSS.

Em uma aplicação web moderna, a animação foca a atenção do usuário. Boas animações procuram orientar a atenção do usuário de maneira satisfatória e produtiva. Animações não devem ser irritantes para o usuário.

Animações oferecem feedback na forma de movimento. Eles mostram ao usuário que o aplicativo está manipulando ativamente suas solicitações. Algo tão simples quanto um botão de pressão visível ou um carregador quando o aplicativo deve carregar chama a atenção do usuário.

Animações continuam a crescer mais e mais relevantes no caso de Angular. O Google desenvolve o Angular enquanto promove a filosofia de Design de Materiais. Ele incentiva interfaces de usuário concisas (UI) complementadas com feedback animado do usuário. Faz com que os aplicativos da web se sintam um tanto vivos e divertidos de usar.

A comunidade Angular desenvolve uma biblioteca central de widgets chamada [Material2](https://github.com/angular/material2) . Este projeto adiciona uma variedade de módulos de widgets ao Angular. A maioria deles apresenta animações. Para entender como eles funcionam, este artigo recomenda estudar as animações CSS antes de continuar lendo.

Animações angulares é a versão simplificada do framework do que o CSS fornece nativamente. CSS é a tecnologia central para animações angulares que ocorrem no navegador da web. CSS está além do escopo deste artigo. É hora de enfrentar animações angulares de frente.

#### Configurando animações

Antes de animar, o `BrowserAnimationsModule` deve incluir na matriz de importações do módulo raiz. Está disponível em `@angular/platform-browser/animations` . Este NgModule garante que as animações funcionem para a plataforma em questão. Este artigo pressupõe o navegador da Web padrão para cada exemplo.

As animações angulares são declaradas nos metadados do `@Component` . `@Component` decora uma classe para distingui-la como um componente para Angular. Seus metadados contêm configurações de componentes, incluindo o campo `animations: []` . Cada elemento da matriz deste campo representa um acionador de animação ( `AnimationTriggerMetadata` ).

As animações são exclusivas de seu componente host por meio dos metadados do decorador. Animações só podem ser usadas no modelo do componente host. As animações não herdam os filhos do componente. Existe uma solução fácil para isso.

Você sempre pode criar um arquivo separado que exporte uma matriz. Qualquer classe de componente pode importar essa matriz da parte superior de seu arquivo host. O token de matriz importado, em seguida, entra nos metadados de animações do componente. Repita este processo para quaisquer outros componentes que requeiram o mesmo array em seus metadados de animações.

A projeção de conteúdo permite aplicar animações ao conteúdo DOM do componente A (Document Object Model). Componente B que envolve este conteúdo O DOM pode projetar o conteúdo em seu próprio modelo. Quando isso acontece, as animações do componente A não negam. O componente B incorpora as animações de A através da projeção de conteúdo.

ESTÁ BEM. Você sabe como configurar animações e onde declará-las. Implementação é o próximo passo.

#### Métodos de Animação

As animações angulares usam uma série de chamadas de método importáveis ​​de `@angular/animations` . Cada elemento da matriz de animações `@Component` começa como um único método. Seus argumentos são desvendados como uma sequência de chamadas de método de ordem superior. A lista a seguir mostra alguns dos métodos usados ​​para criar animações angulares.

*   `trigger(selector: string, AnimationMetadata[])`

retorna `AnimationTriggerMetadata`

*   `state(data: string, AnimationStyleMetadata, options?: object)`

retorna `AnimationStateMetadata`

*   `style(CSSKeyValues: object)`

retorna `AnimationStyleMetadata`

*   `animate(timing: string|number, AnimationStyleMetadata|KeyframesMetadata)`

retorna `AnimationAnimateMetadata`

*   `transition(stateChange: string, AnimationMetadata|AnimationMetadata[], options?: object)`

retorna `AnimationTransitionMetadata`

Embora existam certamente [mais métodos](https://angular.io/api/animations) para escolher, esses cinco métodos lidam com o básico. Tentar entender esses métodos básicos como uma lista não ajuda muito. Explicações bullet-by-bullet seguidas de um exemplo farão mais sentido.

##### gatilho (seletor: string, AnimationMetadata \[\])

O método `trigger(...)` encapsula um único elemento de animação dentro do array de animações.

O primeiro `selector: string` argumento do método `selector: string` corresponde ao atributo de membro `[@selector]` . Ele age como uma diretiva de atributo no modelo de componente. Essencialmente, conecta o elemento de animação ao modelo por meio de um seletor de atributos.

O segundo argumento é um array contendo uma lista de métodos de animação aplicáveis. O `trigger(...)` mantém tudo em um único array.

##### estado (data: string, AnimationStyleMetadata, opções ?: objeto)

O método `state(...)` define o estado final da animação. Aplica uma lista de propriedades CSS ao elemento de destino depois que uma animação é concluída. Isso é para que o CSS do elemento animado corresponda à resolução da animação.

O primeiro argumento corresponde ao valor dos dados ligados à ligação de animação. Ou seja, o valor ligado a `[@selector]` no modelo corresponde ao primeiro argumento de um `state(...)` . O valor dos dados determina o estado final. A mudança do valor determina os meios de animação (ver `transition(...)` ).

O segundo argumento hospeda os estilos CSS que se aplicam a um elemento pós-animação. Os estilos são passados ​​invocando o `style(...)` e passando para o argumento os estilos desejados como um objeto.

Uma lista de opções ocupa opcionalmente o terceiro argumento. As opções de `state(...)` padrão `state(...)` devem permanecer inalteradas, a menos que seja feito um raciocínio diferente.

##### style (CSSKeyValues: object)

Você pode ter notado `AnimationStyleMetadata` várias vezes na lista anterior. O componente `style(...)` retorna esse tipo exato de metadados. Onde quer que estilos CSS se apliquem, o método `style(...)` deve invocar. Um objeto contendo estilos CSS substitui seu argumento.

Obviamente, os estilos animados em CSS são transferidos para o método de `style(...)` angular `style(...)` . Concedido, nada impossível para o CSS torna-se de repente possível com animações angulares.

##### animate (timing: string | number, AnimationStyleMetadata | AnimationKeyframesMetadata)

A função `animate(...)` aceita uma expressão de tempo como seu primeiro argumento. Esse argumento cronometra, estimula e / ou atrasa a animação do método. Este argumento aceita um número ou expressão de string. A formatação é explicada [aqui](https://angular.io/api/animations/animate#usage) .

O segundo argumento do `animate(...)` é a propriedade CSS que garante a animação. Isso assume a forma do método `style(...)` que retorna `AnimationStyleMetadata` . Pense no `animate(...)` como o método que inicia a animação.

Uma série de quadros-chave também pode se aplicar ao segundo argumento. Keyframes é uma opção mais avançada que este artigo explica mais tarde. Quadros-chave distinguem várias seções da animação.

`animate(...)` pode não receber um segundo argumento. Nesse caso, o tempo de animação do método só se aplica ao CSS refletido nos métodos `state(...)` . Alterações de propriedade nos métodos do `state(...)` do gatilho `state(...)` serão animadas.

##### transição (changExpr: string, AnimationMetadata | AnimationMetadata \[\], opções ?: objeto)

`animate(...)` inicia uma animação enquanto `transition(...)` determina qual animação é iniciada.

O primeiro argumento consiste em uma forma única de micro-sintaxe. Denota uma mudança no estado (ou mudança nos dados) ocorrendo. Os dados vinculados à ligação de animação do modelo ( `[selector]="value"` ) determinam essa expressão. A próxima seção intitulada “Animation State” explica esse conceito um pouco mais.

O segundo argumento de `transition(...)` compreende `AnimationMetadata` (retornado pelo `animate(...)` ). O argumento aceita um array de `AnimationMetadata` ou uma única instância.

O valor do primeiro argumento corresponde ao valor dos dados ligados no modelo ( `[selector]="value"` ). Se uma correspondência perfeita ocorrer, o argumento será avaliado com sucesso. O segundo argumento então inicia uma animação em resposta ao sucesso do primeiro.

Uma lista de opções ocupa opcionalmente o terceiro argumento. As opções de `transition(...)` padrão `transition(...)` devem permanecer inalteradas, a menos que seja feito um raciocínio diferente.

##### Exemplo de Animação

```typescript
import { Component, OnInit } from '@angular/core'; 
 import { trigger, state, style, animate, transition } from '@angular/animations'; 
 
 @Component({ 
  selector: 'app-example', 
  template: ` 
  <h3>Click the button to change its color!</h3> 
  <button (click)="toggleIsCorrect()"     // event binding 
    [@toggleClick]="isGreen">Toggle Me!</button>  // animation binding 
    `, 
    animations: [       // metadata array 
      trigger('toggleClick', [     // trigger block 
      state('true', style({      // final CSS following animation 
        backgroundColor: 'green' 
      })), 
      state('false', style({ 
        backgroundColor: 'red' 
      })), 
      transition('true => false', animate('1000ms linear')),  // animation timing 
      transition('false => true', animate('1000ms linear')) 
    ]) 
  ]        // end of trigger block 
 }) 
 export class ExampleComponent { 
  isGreen: string = 'true'; 
 
  toggleIsCorrect() { 
    this.isGreen = this.isGreen === 'true' ? 'false' : 'true'; // change in data-bound value 
  } 
 } 
```

O exemplo acima realiza uma troca de cores muito simples com cada clique de botão. Naturalmente, a cor transita rapidamente em um desvanecimento linear conforme `animate('1000ms linear')` . A animação é vinculada ao botão, correspondendo o primeiro argumento do `trigger(...)` à ligação de animação `[@toggleClick]` .

A ligação liga-se ao valor de `isGreen` da classe de componentes. Esse valor determina a cor resultante, conforme definido pelos dois métodos `style(...)` dentro do bloco `trigger(...)` . A ligação de animação é unidirecional para que as alterações no `isGreen` na classe do componente notifiquem a ligação do modelo. Ou seja, a ligação de animação `[@toggleClick]` .

O elemento de botão no modelo também tem um evento de `click` associado a ele. Clicar no botão faz com que `isGreen` alterne os valores. Isso altera os dados da classe do componente. A ligação de animação é capturada e invoca seu método `trigger(...)` . O `trigger(...)` está dentro da matriz de animações dos metadados do componente. Duas coisas ocorrem na invocação do gatilho.

A primeira ocorrência diz respeito aos dois métodos de `state(...)` . O novo valor de `isGreen` corresponde a um primeiro argumento do método `state(...)` . Depois de corresponder, os estilos CSS de `style(...)` aplicam-se ao estado final do elemento host da ligação da animação. ʻO estado final entra em vigor após toda a animação.

Agora, para a segunda ocorrência. A alteração de dados que chamou a ligação de animação é comparada entre os dois métodos de `transition(...)` . Um deles corresponde à mudança nos dados para o primeiro argumento. O primeiro clique no botão fez com que `isGreen` fosse de 'verdadeiro' para 'falso' ('verdadeiro => falso'). Isso significa que o primeiro método de `transition(...)` ativa seu segundo argumento.

A função `animate(...)` correspondente ao método de `transition(...)` avaliado com sucesso é iniciado. Este método define a duração da cor animada e o ritmo do fade. A animação é executada e o botão fica vermelho.

Este processo pode acontecer qualquer número de vezes após um clique de botão. O `backgroundColor` do botão alternará entre verde e vermelho em um desvanecimento linear.

#### Estado de Animação

A micro-sintaxe de `transition(...)` vale a pena ser tratada em detalhes. Angular determina animações e seu tempo, avaliando essa sintaxe. Existem as seguintes transições de estado. Eles modelam as alterações nos dados vinculados a uma ligação de animação.

*   `'someValue' => 'anotherValue'`

Um gatilho de animação em que os dados vinculados mudam de 'someValue' para 'anotherValue'.

*   `'anotherValue' => 'someValue'`

Um gatilho de animação em que os dados vinculados mudam de 'anotherValue' para 'someValue'.

*   `'someValue' <=> 'anotherValue'`

Os dados mudam de "someValue" para "anotherValue" ou vice-versa.

Também existe `void` e `*` states. `void` indica que o componente está entrando ou saindo do DOM. Isso é perfeito para animações de entrada e saída.

*   `'someValue' => void` : componente do host de dados ligados está _saindo_ do DOM
    
*   `void => 'someValue'` : o componente host dos dados ligados está _entrando_ no DOM
    

`*` denota um estado curinga. Os estados curinga podem interpretar para "qualquer estado". Isso inclui `void` além de qualquer outra alteração nos dados vinculados.

#### Quadros-chave

Este artigo abordou os fundamentos para animar aplicativos angulares. Técnicas avançadas de animação existem ao lado dessas noções básicas. Agrupar quadros-chave é uma dessas técnicas. É inspirado na regra CSS `@keyframes` . Se você já trabalhou com CSS `@keyframes` , já entende como os quadros-chave no Angular funcionam. Torna-se apenas uma questão de sintaxe

O `keyframes(...)` método importa de `@angular/animations` . Ele passa para o segundo argumento do `animate(...)` vez do típico `AnimationStyleMetadata` . O método `keyframes(...)` aceita um argumento como uma matriz do `AnimationStyleMetadata` . Isso também pode ser chamado de uma matriz de métodos de `style(...)` .

Cada quadro-chave da animação fica dentro da matriz de `keyframes(...)` - `keyframes(...)` . Esses elementos do quadro-chave são métodos `style(...)` que suportam a propriedade `offset` . `offset` indica um ponto na duração da animação onde as propriedades de estilo que acompanham devem ser aplicadas. Seu valor vai de 0 (início da animação) a 1 (final da animação).

```typescript
import { Component } from '@angular/core'; 
 import { trigger, state, style, animate, transition, keyframes } from '@angular/animations'; 
 
 @Component({ 
  selector: 'app-example', 
  styles: [ 
    `.ball { 
      position: relative; 
      background-color: black; 
      border-radius: 50%; 
      top: 200px; 
      height: 25px; 
      width: 25px; 
    }` 
  ], 
  template: ` 
  <h3>Arcing Ball Animation</h3> 
  <button (click)="toggleBounce()">Arc the Ball!</button> 
  <div [@animateArc]="arc" class="ball"></div> 
  `, 
  animations: [ 
    trigger('animateArc', [ 
      state('true', style({ 
        left: '400px', 
        top: '200px' 
      })), 
      state('false', style({ 
        left: '0', 
        top: '200px' 
      })), 
      transition('false => true', animate('1000ms linear', keyframes([ 
        style({ left: '0',     top: '200px', offset: 0 }), 
        style({ left: '200px', top: '100px', offset: 0.50 }), 
        style({ left: '400px', top: '200px', offset: 1 }) 
      ]))), 
      transition('true => false', animate('1000ms linear', keyframes([ 
        style({ left: '400px', top: '200px', offset: 0 }), 
        style({ left: '200px', top: '100px', offset: 0.50 }), 
        style({ left: '0',     top: '200px', offset: 1 }) 
      ]))) 
    ]) 
  ] 
 }) 
 export class ExampleComponent { 
  arc: string = 'false'; 
 
  toggleBounce(){ 
    this.arc = this.arc === 'false' ? 'true' : 'false'; 
  } 
 } 
```

A principal diferença do exemplo acima comparado com o outro exemplo é o segundo argumento do `animate(...)` . Agora ele contém um método `keyframes(...)` que hospeda uma matriz de quadros-chave de animação. Enquanto a animação em si também é diferente, a técnica para animar é semelhante.

Clicar no botão faz com que o botão se mova pela tela. O arco se move de acordo com os elementos de matriz do método `keyframes(...)` (quadros-chave). No ponto médio da animação ( `offset: 0.50` ), a bola muda de trajetória. Ele desce até a altura original enquanto continua pela tela. Clicar no botão novamente inverte a animação.

`left` e `top` são propriedades animables depois de definir `position: relative;` para o elemento. A propriedade `transform` pode executar animações baseadas em movimento semelhantes. `transform` é uma propriedade expansiva e totalmente animada.

Qualquer número de quadros-chave pode existir entre o deslocamento 0 e 1. As sequências de animação complexas assumem a forma de quadros-chave. Eles são uma das muitas técnicas avançadas em animações angulares.

### Animações Com Ligação De Host

Você irá, sem dúvida, se deparar com a situação em que deseja anexar uma animação ao elemento HTML de um componente em si, em vez de um elemento no modelo do componente. Isso requer um pouco mais de esforço, pois você não pode simplesmente entrar no HTML modelo e anexar a animação lá. Em vez disso, você terá que importar o `HostBinding` e utilizá-lo.

O código mínimo para este cenário é mostrado abaixo. Vou reutilizar a mesma condição de animação para o código acima para consistência e não mostro nenhum código de animação real, pois você pode encontrar facilmente o que está acima.

```typescript
import { Component, HostBinding } from '@angular/core'; 
 
 @Component({ 
 ... 
 }) 
 export class ExampleComponent { 
  @HostBinding('@animateArc') get arcAnimation() { 
    return this.arc; 
  } 
 } 
```

A idéia por trás da animação do componente host é praticamente a mesma que animar um elemento do modelo, com a única diferença sendo a falta de acesso ao elemento que você está animando. Você ainda terá que passar o nome da animação ( `@animateArc` ) ao declarar o `HostBinding` e ainda terá que retornar o estado atual da animação ( `this.arc` ). O nome da função não é importante, portanto, o `arcAnimation` poderia ter sido alterado para qualquer coisa, desde que não colida com nomes de propriedades existentes no componente, e funcionaria perfeitamente bem.

#### Conclusão

Isto cobre os fundamentos da animação com o Angular. Angular torna a criação de animações muito fácil usando o CLI Angular. Começar com sua primeira animação requer apenas uma única classe de componente. Lembre-se, o escopo de animações para o modelo do componente. Exporte seu array de transições de um arquivo separado se você planeja usá-lo em vários componentes.

Todo utilitário / método de animação exporta de `@angular/animations` . Todos eles trabalham juntos para fornecer um sistema robusto de animação inspirado no CSS. Existem mais métodos além do que este artigo poderia cobrir.

Agora que você conhece o básico, sinta-se à vontade para explorar os links abaixo para mais informações sobre animações Angulares.

## Fontes

*   [Equipa Angular "Animações". _Google_ . Acessado em 7 de junho de 2018.](https://angular.io/guide/animations)
*   [Equipa Angular "Pacote de animações". _Google_ . Acessado em 7 de junho de 2018.](https://angular.io/api/animations)

## Recursos

*   [Documentação Angular](https://angular.io/guide)
*   [Tutorial de animações angulares](https://angular.io/guide/animations)
*   [API de animações angulares](https://angular.io/api/animations)
*   [Repositório Angular GitHub](https://github.com/angular/angular)
*   [CLI Angular](https://cli.angular.io)