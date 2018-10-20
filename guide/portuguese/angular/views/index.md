---
title: Views
localeTitle: Views
---
# Views

#### Motivação

As visualizações oferecem uma camada necessária de abstração. Eles mantêm o Angular independente dos utilitários específicos da plataforma. Como uma tecnologia de plataforma cruzada, o Angular usa suas visualizações para se conectar à plataforma.

Para cada elemento no HTML do modelo do Angular, há uma visualização correspondente. A Angular recomenda a interação com as plataformas por meio dessas visualizações. Embora a manipulação direta ainda seja possível, Angular adverte contra ela. A Angular oferece sua própria interface de programação de aplicativos (API) para substituir as manipulações nativas.

Shunning views para API específica da plataforma tem suas conseqüências. Ao desenvolver o Angular em um navegador da Web, existem elementos em dois locais: o DOM e a visualização. Mexer apenas com o DOM não afeta a visão.

Como o Angular não faz interface com a plataforma, isso cria uma descontinuidade. As visualizações devem espelhar a plataforma um para um. Caso contrário, o Angular desperdiça recursos gerenciando elementos que não são compatíveis. Isso é terrível no caso de elementos excluídos.

Esses tipos de discrepâncias fazem com que as visualizações pareçam desnecessárias. Nunca esqueça que o Angular é uma plataforma de desenvolvimento universal acima de tudo. As visualizações são uma abstração necessária para esse fim.

Ao aderir a visualizações, os aplicativos Angular funcionarão em todas as plataformas de desenvolvimento suportadas. As plataformas incluem a Web, o Android e o Apple iOS.

#### Nota

De agora em diante, este artigo pressupõe um ambiente de navegador da web. Sinta-se à vontade para substituir mentalmente o DOM por algo mais aplicável à sua plataforma preferida.

#### O que são vistas?

As visualizações são quase como seu próprio DOM virtual. Cada visualização contém uma referência a uma seção correspondente do DOM. Dentro de uma visão são nós que espelham o que está nesta seção. Angular atribui um nó de vista por elemento DOM. Cada nó contém uma referência a um elemento correspondente.

Quando o Angular verifica se há alterações, ele verifica as visualizações. Angular evita o DOM sob o capô. As visualizações referenciam o DOM em seu nome. Outros mecanismos estão em vigor para garantir que as alterações na exibição sejam renderizadas no DOM. Por outro lado, as alterações no DOM não afetam as visualizações.

Novamente, as visualizações são comuns em todas as plataformas de desenvolvimento, além do DOM. Mesmo se desenvolvendo para uma plataforma, as visualizações ainda são consideradas a melhor prática. Eles garantem Angular tem uma interpretação correta do DOM.

Exibições podem não existir em bibliotecas de terceiros. A manipulação direta de DOM é uma saída de escape para esse tipo de cenário. Concedido, não espere que o aplicativo funcione em várias plataformas.

#### Tipos de vistas

Existem dois tipos principais de visualizações: incorporado e host.

Também existem contêineres de exibição. Eles mantêm exibições incorporadas e de host e geralmente são chamadas de “visualizações” simples.

Cada classe `@Component` registra um contêiner de exibição (exibição) com Angular. Novos componentes geram um seletor personalizado visando um determinado elemento DOM. A visão é anexada a esse elemento onde quer que ele apareça. Angular agora sabe que o componente existe olhando para o modelo de visão.

As visualizações do host são anexadas a componentes criados dinamicamente com fábricas. As fábricas fornecem um modelo para a instanciação de visualizações. Dessa forma, o aplicativo pode instanciar a exibição do host do componente durante o tempo de execução. Uma exibição de host é anexada ao wrapper de um componente por sua instanciação. Essa visualização armazena dados descrevendo recursos de componentes convencionais.

`<ng-template></ng-template>` é semelhante ao elemento HTML5 `<template></template>` . O `ng-template` do Angular trabalha com visualizações incorporadas. Essas visualizações não são anexadas aos elementos DOM, ao contrário das exibições do host. Eles são idênticos aos modos de exibição do host, pois ambos os tipos existem dentro dos contêineres de exibição.

Tenha em mente que o `ng-template` não é um elemento DOM. Ele é comentado mais tarde, deixando apenas os nós de visualização incorporados.

A diferença depende dos dados de entrada; As visualizações incorporadas não armazenam dados do componente. Eles armazenam uma série de elementos como nós que compreendem seu modelo. O modelo compõe todo o innerHTML do `ng-template` . Cada elemento dentro da visão incorporada é seu próprio nó de visão separado.

#### Exibições de host e contêineres

Exibições de _host hospedam_ componentes dinâmicos. Ver contêineres (visualizações) anexar automaticamente aos elementos já no modelo. As visualizações podem se conectar a qualquer elemento além do que é exclusivo das classes de componentes.

Pense no método tradicional de geração de componentes. Começa criando uma classe, decorando-a com `@Component` e preenchendo metadados. Essa abordagem ocorre para qualquer elemento componente predefinido do modelo.

Tente usar o comando da interface de linha de comandos (CLI) Angular: `ng generate component [name-of-component]` . Isso produz o seguinte.

```typescript
import { Component, OnInit } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-example', 
  templateUrl: './example.component.html', 
  styleUrls: ['./example.component.css'] 
 }) 
 export class ExampleComponent implements OnInit { 
  constructor() { } 
 
  ngOnInit() { } 
 } 
```

Isso cria o componente com o seletor `app-example` . Isso anexa um contêiner de exibição a `<app-example></app-example>` no modelo. Se essa fosse a raiz do aplicativo, sua visualização encapsularia todas as outras visualizações. A visão raiz marca o início do aplicativo a partir da perspectiva do Angular.

Criar componentes dinamicamente e registrá-los no modelo de visualização Angular requer alguns passos extras. Diretivas estruturais ajudam a gerenciar o conteúdo dinâmico ( `*ngIf, *ngFor, and *ngSwitch…` ). Diretivas não escalam para aplicações maiores, no entanto. Muitas diretivas estruturais complicam o modelo.

É aqui que os componentes instanciadores da lógica de classe existente são úteis. Esses componentes precisam criar uma exibição de host que possa ser inserida no modelo de exibição. As visualizações do host contêm dados para os componentes, de modo que o Angular reconheça sua finalidade estrutural.

##### Exibições de host continuadas

Todo componente tem uma definição de classe. No entanto, o JavaScript não suporta classes. Classes são açúcar sintático. Eles produzem funções contendo fábricas de componentes.

As fábricas atuam como blueprints para visualizações de host. Eles criam visualizações para interagir com o Angular em nome de seus componentes. Visualizações de host anexar a elementos DOM. Tecnicamente, qualquer elemento é OK, mas o destino mais comum é `<ng-component></ng-component>` .

Um contêiner de exibição (view) para manter vistas deve existir primeiro. `<ng-container></ng-container>` é um ótimo lugar para anexar um contêiner de exibição. Os contêineres de exibição são o mesmo tipo de visualizações que também se aplicam a elementos de classe de modelo.

Alguns ajudantes e referências de `@angular/core` fornecem os outros utilitários necessários. O exemplo a seguir coloca tudo junto.

```typescript
// another.component.ts 
 
 import { Component } from '@angular/core'; 
 
 @Component({ 
  template: ` 
  <h1>Another Component Content</h1> 
  <h3>Dynamically Generated!</h3> 
  ` 
 }) 
 export class AnotherComponent { } 
```

```typescript
// example.component.ts 
 
 import { AfterViewInit, Component, ViewChild, 
 ViewContainerRef, ComponentFactoryResolver } from '@angular/core'; 
 import { AnotherComponent } from './another.component'; 
 
 @Component({ 
  selector: 'app-example', 
  template: ` 
  <h1>Application Content</h1> 
  <ng-container #container></ng-container> 
  <h3>End of Application</h3> 
  `, 
  entryComponents: [ AnotherComponent ] 
 }) 
 export class ExampleComponent implements AfterViewInit { 
  @ViewChild("container", { read: ViewContainerRef }) ctr: ViewContainerRef; 
 
  constructor(private resolve: ComponentFactoryResolver) { } 
 
  ngAfterViewInit() { 
    const factory = this.resolve.resolveComponentFactory(AnotherComponent); 
    this.ctr.createComponent(factory); 
  } 
 } 
```

Suponha que AnotherComponent e ExampleComponent sejam declarados no mesmo módulo. AnotherComponent é um componente de classe simples adicionado dinamicamente na visualização do ExampleComponent. Os metadados `entryComponents` do ExampleComponent devem conter AnotherComponent para [bootstrapping](https://angular.io/guide/bootstrapping) .

Enquanto ExampleComponent é uma parte do modelo, AnotherComponent permanece desanexado. Ele é renderizado dinamicamente no modelo de ExampleComponent.

Há dois contêineres de exibição presentes: `<app-example></app-example>` e `<ng-container></ng-container>` . A exibição do host para este exemplo será inserida no `ng-container` .

O gancho do ciclo de vida `AfterViewInit` acionado depois que as consultas `@ViewChild` concluídas. Usando a _variável de referência_ do _modelo_ `#container` , o `@ViewChild` referência ao `ng-container` como `ctr` .

`ViewContainerRef` é o tipo de referência para os contêineres de exibição (visualizações). `ViewContainerRef` referência a uma exibição que suporta a inserção de outras visualizações. `ViewContainerRef` contém mais métodos para gerenciar suas visualizações contidas.

Por meio da injeção de dependência, o construtor instancia uma instância do serviço `ComponentFactoryResolver` do Angular. Esse serviço extrai a função de fábrica (blueprint de exibição de host) de AnotherComponent.

O argumento único de `createComponent` requer uma fábrica. A função `createComponent` deriva de `ViewContainerRef` . Instancia o AnotherComponent sob uma exibição de host derivada da fábrica do componente.

A exibição do host é inserida no contêiner de exibição. `<ng-component></ng-component>` envolve o componente dentro do contêiner de exibição. Ele anexou a visualização de host acima mencionada. `ng-component` é a conexão da visão do host com o DOM.

Existem outras maneiras de criar uma exibição de host dinamicamente a partir de um componente. Outras maneiras geralmente se [concentram na otimização](https://blog.angularindepth.com/working-with-dom-in-angular-unexpected-consequences-and-optimization-techniques-682ac09f6866) .

O `ViewContainerRef` contém uma API poderosa. Ele pode gerenciar qualquer quantidade de exibições hospedadas ou incorporadas em sua visualização. A API inclui operações de visualização, como inserir, mover e excluir. Isso permite manipular o DOM por meio do modelo de visualização do Angular. Essa é uma prática recomendada para que o Angular e o DOM correspondam um ao outro.

#### Visualizações incorporadas

Nota: as visualizações incorporadas anexam a outras visualizações nenhuma entrada adicionada. As visualizações do host são anexadas a um elemento DOM com dados de entrada de sua exibição de host, descrevendo-o como um componente.

Diretivas estruturais criam um [`ng-template` torno de uma parte do conteúdo HTML](https://angular.io/guide/structural-directives#the-asterisk--prefix) . O elemento host da diretiva possui um contêiner de exibição anexado. Isso faz com que o conteúdo possa renderizar condicionalmente no layout pretendido.

O `ng-template` contém os nós de visualização incorporados que representam cada elemento dentro de seu innerHTML. `ng-template` é de forma alguma um elemento DOM. Comenta-se. As tags definem a extensão de sua visão incorporada.

#### Exibições incorporadas continuadas

Instanciar uma visão incorporada não requer recursos externos além de sua própria referência. A consulta `@ViewChild` pode buscar isso.

Com a referência do modelo, chamar o `createEmbeddedView` dele faz o truque. O innerHTML da referência se torna sua própria instância de visualização incorporada.

No próximo exemplo, `<ng-container></ng-container>` é um contêiner de exibição. `ng-container` é comentado durante a compilação, assim como o `ng-template` . Assim, ele fornece uma saída para inserir a visualização incorporada, mantendo o DOM enxuto.

O modelo de visualização incorporado é inserido no local de layout do `ng-container` . Essa visualização recém-inserida não tem nenhum encapsulamento de exibição adicional além do contêiner de exibição. Lembre-se de como isso difere das exibições de host (visualizações de host anexadas ao wrapper de elemento `ng-component` ).

```typescript
import { Component, AfterViewInit, ViewChild, 
 ViewContainerRef, TemplateRef } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-example', 
  template: ` 
  <h1>Application Content</h1> 
  <ng-container #container></ng-container> <!-- embed view here --> 
  <h3>End of Application</h3> 
 
  <ng-template #template> 
    <h1>Template Content</h1> 
    <h3>Dynamically Generated!</h3> 
  </ng-template> 
  ` 
 }) 
 export class ExampleComponent implements AfterViewInit { 
  @ViewChild("template", { read: TemplateRef }) tpl: TemplateRef<any>; 
  @ViewChild("container", { read: ViewContainerRef }) ctr: ViewContainerRef; 
 
  constructor() { } 
 
  ngAfterViewInit() { 
    const view =  this.tpl.createEmbeddedView(null); 
    this.ctr.insert(view); 
  } 
 } 
```

Consultas `@ViewChild` para a _variável de referência_ do _modelo_ `#template` . Isso fornece uma referência de modelo do tipo `TemplateRef` . `TemplateRef` contém a função `createEmbeddedView` . Instancia o modelo como uma visão incorporada.

O único argumento de `createEmbeddedView` é para o contexto. Se você quisesse passar metadados adicionais, poderia fazê-lo aqui como um objeto. Os campos devem corresponder aos atributos `ng-template` ( `let-[context-field-key-name]=“value”` ). Passar `null` indica que nenhum metadado extra é necessário.

Uma segunda consulta `@ViewChild` fornece uma referência ao `ng-container` como um `ViewContainerRef` . As visualizações incorporadas só se anexam a outras visualizações, nunca ao DOM. O `ViewContainerRef` referência à visão que leva na visão incorporada.

Uma visualização incorporada também pode ser inserida na exibição de componente de `<app-example></app-example>` . Essa abordagem posiciona a exibição no final da exibição do ExampleComponent. Neste exemplo, no entanto, queremos que o conteúdo apareça no meio onde o `ng-container` está.

A função de `insert` `ViewContainerRef` _insere_ a visão incorporada no `ng-container` . O conteúdo da visualização mostra ups no local pretendido bem no meio da visualização do ExampleComponent.

#### Conclusão

Manipular o DOM com métodos específicos da plataforma não é recomendado. Criar e gerenciar um conjunto restrito de visualizações mantém o Angular e o DOM na mesma página. A atualização das visualizações informa o Angular sobre o estado atual do DOM. Atualizações para as exibições também são transferidas para o que o DOM exibe.

Angular fornece uma API flexível para interação de visualização. O desenvolvimento de aplicativos independentes de plataforma é possível graças a esse nível de abstração. Evidentemente, a tentação de recuar em estratégias dependentes de plataforma persiste. A menos que você tenha uma boa razão para não tentar manter as visualizações que a Angular fornece. Isso produzirá resultados previsíveis em todas as plataformas.

Confira os recursos abaixo também! Este artigo apenas arranha a superfície. As exibições têm muitos outros casos de uso muito grandes para um artigo.

## Fontes

*   [AngularInDepth.com. “Vista de Componente, Visualização de Host, Visualização Incorporada”, # 40423772. 11 de julho de 2017. "Qual é a diferença entre uma exibição, uma exibição de host e uma exibição incorporada"](https://stackoverflow.com/questions/40423772/what-is-the-difference-between-a-view-a-host-view-and-an-embedded-view)
    
*   [Equipa Angular “Diretivas Estruturais”. _Google_ . Acessado em 31 de maio de 2018](https://angular.io/guide/structural-directives)
    
*   [Koretskyi, Maxim. “Explorando técnicas de manipulação de DOM Angular usando ViewContainerRef”. _Angular Em Profundidade_ , 4 Mar. 2017. Acessado em 30 de maio de 2018.](https://blog.angularindepth.com/exploring-angular-dom-abstractions-80b3ebcfc02)
    
*   [Koretskyi, Maxim. “Implementando cenários avançados de manipulação de DOM”. _Youtube_ , carregado por ng-conf, 19 de abril de 2018. Acessado em 30 de maio de 2018](https://www.youtube.com/watch?v=vz9cNCkaPsY)
    
*   [Koretskyi, Maxim. “Trabalhando com DOM em Angular: conseqüências inesperadas e técnicas de otimização”. _Angular em profundidade_ , 3 de maio de 2017. Acessado em 31 de maio de 2018](https://blog.angularindepth.com/working-with-dom-in-angular-unexpected-consequences-and-optimization-techniques-682ac09f6866)
    

## Recursos

*   [Documentação Angular](https://angular.io/guide/pipes)
    
*   [Angular em Profundidade](https://blog.angularindepth.com)
    
*   [ViewContainerRef](https://angular.io/api/core/ViewContainerRef)
    
*   [TemplateRef](https://angular.io/api/core/TemplateRef)
    
*   [Repositório Angular GitHub](https://github.com/angular/angular)
    
*   [CLI Angular](https://cli.angular.io)