---
title: Components
localeTitle: Componentes
---
# Componentes

#### Motivação

Angular contém muitos _esquemas_ para criação de aplicativos. Componentes são um desses esquemas. Eles abrangem uma única unidade de lógica relacionada a uma única parte do aplicativo. Os componentes costumam se associar a outros esquemas para operar com mais eficiência.

Entre todos os esquemas, os componentes tendem a consumir mais do que os fornecidos. Enquanto outros esquemas como diretivas, canais e serviços oferecem utilidade, os componentes utilizam. Eles são responsáveis ​​pela interface do aplicativo, portanto, faz sentido porque o utilitário consumir.

Componentes simplificam o aplicativo. A lógica de afunilamento em uma única seção da interface visível é seu objetivo principal. Para criar aplicativos passo a passo, você deve criar componente por componente. Componentes agem como blocos de construção angular afinal.

#### Introdução aos componentes

Como mencionado, os componentes consomem utilidade (serviços / recursos). Eles estão entre lógica de negócios e apresentação para produzir uma unidade coesa. Angular atribui vários mecanismos para cada componente. Esses anexos identificam uma classe como um componente e definem seus recursos padrão.

Angular deve reconhecer componentes quando se deparar com eles. Para fazer isso, `@Component` deve decorar todas as classes destinadas a ser um componente. Os decoradores indicam ao Angular o que é a classe.

No caso de um componente, ele deve saber como interagir com seu injetor, conectar-se com um modelo, puxar de uma lista de estilos, encapsular seus estilos e assim por diante. Angular cuida da maioria dos requisitos de baixo nível. Os desenvolvedores ainda precisam configurar o comportamento de um componente, importar suas dependências e estender sua lógica.

Para todas essas coisas, temos a classe do componente. A turma mantém tudo relativamente uniforme. Ele encapsula a lógica de negócios do componente.

#### Classe de componente e metadados

Vá em frente e instale a [interface de linha de comando (CLI) Angular](https://cli.angular.io) . Você pode aprender mais sobre isso [neste artigo](https://guide.freecodecamp.org/angular/command-line-interface) . O comando CLI `ng generate component [name-of-component]` produz o seguinte.

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

Este é o esqueleto básico do qual todos os grandes componentes se originam. O decorador `@Component` é a parte mais importante. Sem isso, o exemplo acima se torna uma classe genérica. Angular confia em decoradores para discernir o tipo esquemático de uma classe.

`@Component` recebe metadados como um único objeto. Decoradores são apenas funções JavaScript sob o capô. Eles aceitam argumentos como o objeto de metadados. O objeto de metadados configura as dependências básicas de um componente. Cada campo desempenha um papel.

*   `selector:` informa ao Angular para associar o componente a um determinado elemento no HTML do modelo do aplicativo.
    
*   `templateUrl:` aceita a localização do arquivo HTML do modelo do componente (é onde os dados são exibidos).
    
*   `styleUrls:` aceita uma matriz de locais de arquivo de folha de estilo (strings). Essas folhas de estilo têm como alvo o modelo atribuído ao componente.
    

Pense nos metadados como uma grande bolha de configuração. O decorador faz isso para gerar os dados específicos do componente. O decorador _decora_ a classe subjacente com dados necessários para o comportamento de sua classe. Uma classe de _componente_ que é.

A assinatura da classe exporta por padrão para que o componente possa ser importado. `ngOnInit` também é implementado. `implements` diz à classe para definir certos métodos de acordo com a definição da interface. `ngOnInit` é um gancho do ciclo de vida.

#### Ciclo de Vida do Componente e Detecção de Alterações

Os componentes usam todos os tipos de ferramentas, serviços e recursos. Um dos principais recursos disponíveis para os componentes são os ganchos do ciclo de vida. Uma explicação para cada gancho existe [neste artigo](https://guide.freecodecamp.org/angular/lifecycle-hooks) .

Há oito no total e todos servem como funções de temporização. Eles executam condicionalmente à medida que o componente transita de estado para estado via [detecção de mudança](https://blog.angularindepth.com/everything-you-need-to-know-about-change-detection-in-angular-8006c51d206f) . Esse processo acontece constantemente na árvore de componentes. Ele procura por alterações nos dados que merecem uma nova renderização do modelo.

Hora de seguir em frente. Por favor, consulte os artigos acima mencionados para obter mais informações sobre o ciclo de vida do componente. Isso merece muito mais explicações.

#### Dados de componentes

Dados conduz tudo. Componentes não são exceção. Componentes encapsulam todos os seus dados. Para receber dados externamente, um componente deve declará-lo explicitamente. Essa forma de privacidade impede que as informações entrem em conflito na árvore de componentes.

Os dados determinam o que é exibido da classe do componente para o modelo. Quaisquer atualizações nos dados da classe irão (ou pelo menos devem) atualizar a exibição do modelo.

Os componentes geralmente inicializam um conjunto de membros (ou variáveis) que armazenam dados. Eles são usados ​​em toda a lógica da classe de componentes por conveniência. Essa informação alimenta a lógica resultante do modelo e seu comportamento. Veja o exemplo a seguir.

```typescript
// ./components/example/example.component.ts 
 
 import { Component, OnInit } from '@angular/core'; 
 import { Post, DATA } from '../../data/posts.data'; 
 
 @Component({ 
  selector: 'app-example', 
  templateUrl: './example.component.html' 
 }) 
 export class ExampleComponent implements OnInit { 
  username: string; 
  totalPosts: number; 
  allPosts: Post[]; 
 
  deletePost(index: number): void { 
    this.allPosts.splice(index, 1); 
    this.totalPosts = this.allPosts.length; 
  } 
 
  ngOnInit(): void { 
    this.username = DATA.author; 
    this.totalPosts = DATA.thePosts.length; 
    this.allPosts = DATA.thePosts; 
  } 
 } 
```

```html

<!-- ./components/example/example.component.html --> 
 
 <h1>{{ username }}</h1> 
 <span>Change Name: </span><input [(ngModel)]="username"> 
 <h3>Posts: {{ totalPosts }}</h3> 
 <ul> 
 <hr/> 
 <div *ngFor="let post of allPosts; let i=index"> 
  <button (click)="deletePost(i)">DELETE</button> 
  <h6>{{ post.title }}</h6> 
  <p>{{ post.body }}</p> 
  <hr/> 
 </div> 
 </ul> 
```

Observe as formas como o componente interage com seus dados. Primeiro, ele busca de `../../data/posts.data` antes de começar a encaminhá-lo ao modelo para exibição.

Os dados aparecem em todo o modelo. Dentro das chaves duplas, o valor de uma variável é mapeado da classe do componente para as chaves. O `*ngFor` loop no array de classes `allPosts` . Clicar no botão remove um elemento específico de `allPosts` por seu índice. Você pode até mudar o `username` de `username` mais alto, digitando na caixa de entrada.

As interações acima alteram os dados da classe do componente, o que, por sua vez, atualiza o HTML do modelo do componente. Os componentes fornecem a lógica de backbone que facilita o fluxo de dados. O modelo HTML torna esses dados legíveis para o usuário.

#### Modelo de componente

O HTML do modelo do exemplo anterior apresentava uma sintaxe interessante. A sintaxe não era HTML real. Foi o template HTML de Angular. Algumas vezes referem-se a ele que tem o HTML _Plus_ reconhecível apenas pelo compilador da Angular. O compilador suporta uma sintaxe que resulta na manipulação dinâmica de HTML. Este artigo geralmente se refere a ele como "modelo HTML" ou "modelo".

A sintaxe permite que os componentes injetem dados diretamente no modelo HTML. A injeção é dinâmica. Ou seja, os dados podem se iterar e se exibir como HTML sem precisar de ajuda externa. O compilador Angular compila em HTML real no momento em que atinge o navegador da web.

Para saber mais sobre algumas formas de [vinculação de dados](https://guide.freecodecamp.org/angular/data-binding) ao modelo, leia sobre [vinculação de dados no Angular](https://guide.freecodecamp.org/angular/data-binding) . Alguns exemplos de ligação de dados ocorreram no exemplo anterior ( `{{ ... }}` ). Para este artigo, basta reconhecer que as interações de dados estavam acontecendo entre a classe do componente e seu modelo.

#### Consultando o modelo

Os dados que gerenciam o estado do modelo funcionam imperativamente OK. No entanto, os dados puros nem sempre preenchem o design pretendido de um aplicativo. Interagir mais diretamente com o Document Object Model (DOM) pode ser necessário.

Para fazer isso, o componente deve ter referência aos elementos do modelo. Quando os dados são alterados, o componente pode manipular o DOM explicitamente. Esta é uma abordagem mais declarativa.

Os componentes podem capturar referências usando a interface de programação de aplicativos DOM (API) do navegador da web. Má idéia embora. Angular prefere compatibilidade entre plataformas. Para que um componente funcione fora do navegador da Web, ele precisa usar a API do Angular em vez do DOM.

Os componentes podem consultar seus modelos usando os decoradores `@ViewChild` e `ContentChild` . Eles pegam referências a elementos de modelo em nome da classe de componentes.

```typescript
import { Component, ViewChild, ContentChild, ElementRef, Renderer2, AfterContentChecked, AfterViewChecked } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-child', 
  template: ` 
  <button (click)="toggleEnlarge()">Toggle Enlarge</button> 
  <ng-content></ng-content> 
  ` 
 }) 
 export class ChildComponent implements AfterContentChecked { 
  @ContentChild("pReference", { read: ElementRef }) pElement: ElementRef; 
  textEnlarge: boolean = false; 
 
  constructor(private renderer: Renderer2) { } 
 
  toggleEnlarge() { 
    this.textEnlarge = !this.textEnlarge; 
  } 
 
  ngAfterContentChecked() { 
    if (this.textEnlarge) 
      this.renderer.setStyle(this.pElement.nativeElement, 'font-size', '25px'); 
      else 
      this.renderer.setStyle(this.pElement.nativeElement, 'font-size', 'initial'); 
    } 
 } 
 
 @Component({ 
  selector: 'app-parent', 
  template: ` 
  <button (click)="toggleHighlight()">Toggle Highlight</button> 
  <h1 #hOneRefereance>View Child</h1> 
  <app-child> 
    <p #pReference>Content Child</p> 
  </app-child> 
  ` 
 }) 
 export class ParentComponent implements AfterViewChecked { 
  @ViewChild("hOneRefereance", { read: ElementRef }) hOneElement: ElementRef; 
  textHighlight: boolean = false; 
 
  constructor(private renderer: Renderer2) { } 
 
  toggleHighlight() { 
    this.textHighlight = !this.textHighlight; 
  } 
 
  ngAfterViewChecked() { 
    if (this.textHighlight) 
      this.renderer.setStyle(this.hOneElement.nativeElement, 'background-color', 'yellow'); 
    else 
      this.renderer.setStyle(this.hOneElement.nativeElement, 'background-color', 'initial'); 
  } 
 } 
```

O exemplo acima contém dois botões que alternam um determinado estilo para cada elemento. Clicar nos botões alterna os valores true / false exclusivos para cada componente. Esses booleanos determinam se os estilos personalizados se aplicam. Em vez de esses valores causarem alterações imperativas, os ganchos do ciclo de vida ( `ngAfterViewChecked` e `ngAfterContentChecked` ) alteram declarativamente o DOM.

A abordagem declarativa altera explicitamente o estilo por meio da referência do elemento. Na programação imperativa, as alterações nos dados baseados em DOM são implícitas. Confira este artigo sobre programação [imperativa e declarativa](https://codeburst.io/declarative-vs-imperative-programming-a8a7c93d9ad2) para aprender mais.

A principal coisa a notar é como essas referências são extraídas do modelo. No exemplo, há duas seções do modelo consultadas usando dois decoradores: `@ViewChild` e `@ContentChild` .

Eles diferem em onde eles olham para a referência de um elemento, seja no conteúdo DOM ou no modo DOM. Esses dois DOMs existem no modelo do ParentComponent. Diferenciar entre eles é importante porque eles terminam a renderização em momentos separados.

É por isso que `@ViewChild` e `@ContentChild` existem. Eles trabalham em conjunto com seus ganchos de ciclo de vida complementares `ngAfterViewChecked` e `ngAfterContentChecked` . Esses ganchos do ciclo de vida aguardam que suas respectivas consultas sejam resolvidas antes da execução.

Uma vez resolvido, `@ViewChild` e `@ContentChild` fornecem referências a dois elementos. Ambos existem em partes separadas do DOM. Os dados booleanos ainda determinam o resultado. Como esse resultado se traduz no DOM é a principal diferença de antes. O DOM é atualizado através da manipulação direta do `Renderer2` .

#### Projeção de Conteúdo

O DOM de conteúdo existe no elemento innerHTML of ChildComponent `<app-child></app-child>` . Está tudo posicionado no modelo do ParentComponent. O innerHTML de _projetos_ `app-child` no template do ChildComponent através de `<ng-content></ng-content>` .

Isso exemplifica a projeção de conteúdo. Exibição de conteúdo de `one` componente para outro usando o innerHTML das tags de `another` em `one` modelo, para que `another` componente possa extrair esse innerHTML em seu próprio modelo via `<ng-content></ng-content>` . _Obrigado por ler essa frase._

Portanto, por que ChildComponent referencia seu elemento `<p></p>` usando `@ContentChild` . O conteúdo contido em `<app-child></app-child>` no modelo do ParentComponent compõe o conteúdo DOM. ChildComponent faz referência ao elemento com uma consulta `@ContentChild` .

Visão do ParentComponent O DOM consiste em tudo que pode ser acessado a partir da visão do componente. Isso não inclui necessariamente o modelo inteiro dado o innerHTML de `<app-child></app-child>` . Novamente, essa parte do DOM é consultada a partir do ChildComponent usando `@ContentChild` . Tudo o mais é consultado usando `@ViewChild` da classe ParentComponent.

Essa é uma ótima maneira de os componentes trocarem conteúdo e consultar seu próprio conteúdo, independentemente de seu tipo de DOM. Os componentes podem se comunicar com eles mesmos e outros usando a vinculação de dados também. Leia mais sobre isso [neste artigo](https://guide.freecodecamp.org/angular/data-binding) .

#### Estilos de componentes

Estilos são críticos para a legibilidade e interatividade de um componente. Cada componente encapsula suas dependências de folha de estilos. Dessa forma, eles só se aplicam ao HTML do modelo do componente. Uma técnica especial introduzida pelo DOM de sombra do HTML torna isso possível.

Um ramo DOM de sombra pode existir em qualquer elemento. Esta parte do DOM não pode ser vista a partir do código-fonte do HTML. Elementos HTML padrão aproveitam o DOM de sombra para fornecer suas aparências de marca registrada. Uma ramificação DOM de sombra deve se ancorar em um componente visível para que possa estilizá-lo e personalizá-lo.

O aspecto exclusivo de uma ramificação DOM de sombra é seu encapsulamento. Tudo o que é usado para estilizar um elemento-raiz da ramificação do DOM de sombra é particular para ele. Nenhum outro elemento pode acessá-lo.

Angular abrange essa forma de encapsulamento com componentes. A folha de estilo e o modelo de um componente são encapsulados juntos. Nenhum outro componente tem acesso a eles. Conflitos de folha de estilo não podem ocorrer.

Angular não usa a sombra DOM por padrão. Ele usa um sistema de emulação que imita o comportamento do DOM de sombra. Essa é uma medida temporária, pois alguns navegadores da Web ainda não suportam a API DOM shadow.

Os metadados do `@Component` contêm o campo de `encapsulation` . Isso permite que os desenvolvedores alternem entre sombra DOM emulada, sombra DOM real ou nenhuma. Aqui estão as opções em sua respectiva ordem:

*   `ViewEncapsulation.Emulated` - DOM falso de sombra (padrão)
    
*   `ViewEncapsulation.Native` - DOM real de sombra (agora obsoleto desde o Angular 6.0.8)
    
*   `ViewEncapsulation.None` - nenhum
    

`ViewEncapsulation.None` significa que as folhas de estilo do componente são elevadas para o escopo global. Não é recomendado considerar que os componentes devem formar sua própria unidade privada (encapsulamento). Angular ainda fornece como uma escotilha de escape para situações extremas.

#### Conclusão

Componentes constroem aplicativos. Eles são escopo privado e separadamente uniformes uns dos outros, a menos que configurado de outra forma. Os aplicativos tendem a começar do módulo raiz. Depois disso, os componentes formam uma árvore alongada que define o restante do aplicativo.

Um componente cobre uma unidade designada da interface do aplicativo. Isso inclui seus estilos, lógica e layout. Outros esquemas, como pipes, serviços e diretivas, são usados ​​com freqüência no código do componente. Você pode aprender mais sobre essas interações em alguns dos outros artigos sobre guias angulares.

Não se esqueça de que os componentes devem ser [inicializados](https://angular.io/guide/bootstrapping) . Isso pode acontecer no módulo raiz ou nos metadados do componente. Isso é tão Angular reconhece o componente onde quer que apareça no aplicativo.

Você sempre pode aprender mais explorando os links abaixo. Componente transportar muito mais profundidade do que aquilo que este artigo poderia transmitir.

## Fontes

*   [Equipa Angular "Angular Docs". _Google_ . Acessado em 3 de junho de 2018](https://angular.io/guide)
*   [Comunidade Mozilla MDN. “Usando DOM Shadow”. _Mozilla_ , atualizado em 30 de maio de 2018. Acessado em 3 de junho de 2018](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
*   [Mundy, Ian. “Programação declarativa vs imperativa”. _codeburst.io_ , 20 fev. 2017. Acessado em 3 de junho de 2018](https://codeburst.io/declarative-vs-imperative-programming-a8a7c93d9ad2)

## Recursos

*   [Documentação Angular](https://angular.io/guide)
*   [Repositório Angular GitHub](https://github.com/angular/angular)
*   [Introdução aos componentes](https://angular.io/guide/architecture-components)
*   [Componentes em Profundidade](https://angular.io/guide/displaying-data)
*   [DOM da Sombra](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)