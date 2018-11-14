---
title: Lifecycle Hooks
localeTitle: Ganchos do Ciclo de Vida
---
# Ganchos do Ciclo de Vida

#### Motivação

Estruturas front-end modernas movem o aplicativo de estado para estado. Os dados alimentam essas atualizações. Essas tecnologias interagem com os dados que, por sua vez, transicionam o estado. Com cada mudança de estado, há muitos momentos específicos em que certos ativos ficam disponíveis.

Em um exemplo, o modelo pode estar pronto, em outro dado será concluído o upload. A codificação para cada instância requer um meio de detecção. Os ganchos do ciclo de vida respondem a essa necessidade. Estruturas front-end modernas empacotam-se com uma variedade de ganchos do ciclo de vida. Angular não é excepção

#### Ganchos do ciclo de vida explicados

Os ganchos do ciclo de vida são métodos cronometrados. Eles diferem em quando e por que eles executam. A detecção de alterações aciona esses métodos. Eles executam dependendo das condições do ciclo atual. O Angular executa a detecção de alterações constantemente em seus dados. Os ganchos do ciclo de vida ajudam a gerenciar seus efeitos.

Um aspecto importante desses ganchos é sua ordem de execução. Isso nunca se desvia. Eles são executados com base em uma série previsível de eventos de carga produzidos a partir de um ciclo de detecção. Isso os torna previsíveis. Alguns ativos só estão disponíveis depois que um certo gancho é executado. Naturalmente, um gancho só é executado sob certas condições definidas no ciclo de detecção de alteração atual.

Este artigo apresenta os ganchos do ciclo de vida na ordem de sua execução (se todos eles forem executados). Certas condições merecem a ativação de um gancho. Existem alguns que só executam uma vez após a inicialização do componente.

Todos os métodos de ciclo de vida estão disponíveis em `@angular/core` . Embora não seja obrigatório, a Angular [recomenda implementar todos os ganchos](https://angular.io/guide/lifecycle-hooks#interfaces-are-optional-technically) . Essa prática leva a melhores mensagens de erro em relação ao componente.

### Em ordem de execução ...

#### ngOnChanges

`ngOnChanges` acionado após a modificação dos membros da classe ligada `@Input` . Dados ligados pelo decorador `@Input()` vêm de uma fonte externa. Quando a fonte externa altera esses dados de uma maneira detectável, ela passa pela propriedade `@Input` novamente.

Com essa atualização, `ngOnChanges` acionado imediatamente. Também é acionado na inicialização dos dados de entrada. O gancho recebe um parâmetro opcional do tipo `SimpleChanges` . Este valor contém informações sobre as propriedades alteradas de entrada alteradas.

```typescript
import { Component, Input, OnChanges } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-child', 
  template: ` 
  <h3>Child Component</h3> 
  <p>TICKS: {{ lifecycleTicks }}</p> 
  <p>DATA: {{ data }}</p> 
  ` 
 }) 
 export class ChildComponent implements OnChanges { 
  @Input() data: string; 
  lifecycleTicks: number = 0; 
 
  ngOnChanges() { 
    this.lifecycleTicks++; 
  } 
 } 
 
 @Component({ 
  selector: 'app-parent', 
  template: ` 
  <h1>ngOnChanges Example</h1> 
  <app-child [data]="arbitraryData"></app-child> 
  ` 
 }) 
 export class ParentComponent { 
  arbitraryData: string = 'initial'; 
 
  constructor() { 
    setTimeout(() => { 
      this.arbitraryData = 'final'; 
    }, 5000); 
  } 
 } 
```

**Resumo:** ParentComponent associa dados de entrada ao ChildComponent. O componente recebe esses dados por meio de sua propriedade `@Input` . `ngOnChanges` acionado. Após cinco segundos, o retorno de chamada `setTimeout` acionado. ParentComponent modifica a fonte de dados da propriedade vinculada a entrada do ChildComponent. Os novos dados fluem através da propriedade de entrada. `ngOnChanges` acionado novamente.

#### ngOnInit

`ngOnInit` acionado uma vez na inicialização das propriedades de entrada de dados ( `@Input` ) de um componente. O próximo exemplo será semelhante ao último. O gancho não dispara quando o ChildComponent recebe os dados de entrada. Em vez disso, ele é acionado logo após o processamento dos dados no modelo ChildComponent.

```typescript
import { Component, Input, OnInit } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-child', 
  template: ` 
  <h3>Child Component</h3> 
  <p>TICKS: {{ lifecycleTicks }}</p> 
  <p>DATA: {{ data }}</p> 
  ` 
 }) 
 export class ChildComponent implements OnInit { 
  @Input() data: string; 
  lifecycleTicks: number = 0; 
 
  ngOnInit() { 
    this.lifecycleTicks++; 
  } 
 } 
 
 @Component({ 
  selector: 'app-parent', 
  template: ` 
  <h1>ngOnInit Example</h1> 
  <app-child [data]="arbitraryData"></app-child> 
  ` 
 }) 
 export class ParentComponent { 
  arbitraryData: string = 'initial'; 
 
  constructor() { 
    setTimeout(() => { 
      this.arbitraryData = 'final'; 
    }, 5000); 
  } 
 } 
```

**Resumo:** ParentComponent associa dados de entrada ao ChildComponent. ChildComponent recebe esses dados por meio de sua propriedade `@Input` . Os dados são renderizados no modelo. `ngOnInit` acionado. Após cinco segundos, o retorno de chamada `setTimeout` acionado. ParentComponent modifica a fonte de dados da propriedade vinculada a entrada do ChildComponent. ngOnInit **NÃO FOGO** .

`ngOnInit` é um gancho de um e pronto. Inicialização é sua única preocupação.

#### ngDoCheck

`ngDoCheck` acionado a cada ciclo de detecção de alterações. Angular executa a detecção de alterações com freqüência. Realizar qualquer ação fará com que ela faça o ciclo. `ngDoCheck` dispara com esses ciclos. Use com cautela. Pode criar problemas de desempenho quando implementado incorretamente.

`ngDoCheck` permite que os desenvolvedores verifiquem seus dados manualmente. Eles podem acionar uma nova data de aplicação condicionalmente. Em conjunto com o `ChangeDetectorRef` , os desenvolvedores podem criar suas próprias verificações para detecção de alterações.

```typescript
import { Component, DoCheck, ChangeDetectorRef } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-example', 
  template: ` 
  <h1>ngDoCheck Example</h1> 
  <p>DATA: {{ data[data.length - 1] }}</p> 
  ` 
 }) 
 export class ExampleComponent implements DoCheck { 
  lifecycleTicks: number = 0; 
  oldTheData: string; 
  data: string[] = ['initial']; 
 
  constructor(private changeDetector: ChangeDetectorRef) { 
    this.changeDetector.detach(); // lets the class perform its own change detection 
 
    setTimeout(() => { 
      this.oldTheData = 'final'; // intentional error 
      this.data.push('intermediate'); 
    }, 3000); 
 
    setTimeout(() => { 
      this.data.push('final'); 
      this.changeDetector.markForCheck(); 
    }, 6000); 
  } 
 
  ngDoCheck() { 
    console.log(++this.lifecycleTicks); 
 
    if (this.data[this.data.length - 1] !== this.oldTheData) { 
      this.changeDetector.detectChanges(); 
    } 
  } 
 } 
```

Preste atenção ao console versus o display. Os dados progridem até 'intermediário' antes do congelamento. Três rodadas de detecção de alterações ocorrem durante esse período, conforme indicado no console. Mais uma rodada de detecção de mudanças ocorre quando a 'final' é empurrada para o final desse `this.data` . Uma última rodada de detecção de alterações ocorre. A avaliação da instrução if determina que não são necessárias atualizações na visualização.

**Resumo: A** classe instancia após dois ciclos de detecção de alterações. O construtor de classe inicia o `setTimeout` duas vezes. Após três segundos, o primeiro `setTimeout` aciona a detecção de alterações. `ngDoCheck` marca a exibição de uma atualização. Três segundos depois, o segundo `setTimeout` aciona a detecção de alterações. Nenhuma atualização de vista é necessária de acordo com a avaliação do `ngDoCheck` .

##### Aviso

Antes de prosseguir, aprenda a diferença entre o conteúdo DOM e o DOM (DOM significa Document Object Model).

O conteúdo DOM define o innerHTML dos elementos da diretiva. Por outro lado, a exibição DOM é um modelo de componente, excluindo qualquer modelo HTML aninhado em uma diretiva. Para um melhor entendimento, consulte [este post no blog](http://blog.mgechev.com/2016/01/23/angular2-viewchildren-contentchildren-difference-viewproviders) .

#### ngAfterContentInit

`ngAfterContentInit` acionado depois que o DOM do conteúdo do componente é inicializado (carrega pela primeira vez). Esperar em `@ContentChild(ren)` é o caso de uso principal do gancho.

`@ContentChild(ren)` produzem referências de elemento para o conteúdo DOM. Como tal, eles não estão disponíveis até depois do carregamento do conteúdo DOM. Daí porque `ngAfterContentInit` e sua contraparte `ngAfterContentChecked` são usados.

```typescript
import { Component, ContentChild, AfterContentInit, ElementRef, Renderer2 } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-c', 
  template: ` 
  <p>I am C.</p> 
  <p>Hello World!</p> 
  ` 
 }) 
 export class CComponent { } 
 
 @Component({ 
  selector: 'app-b', 
  template: ` 
  <p>I am B.</p> 
  <ng-content></ng-content> 
  ` 
 }) 
 export class BComponent implements AfterContentInit { 
  @ContentChild("BHeader", { read: ElementRef }) hRef: ElementRef; 
  @ContentChild(CComponent, { read: ElementRef }) cRef: ElementRef; 
 
  constructor(private renderer: Renderer2) { } 
 
  ngAfterContentInit() { 
    this.renderer.setStyle(this.hRef.nativeElement, 'background-color', 'yellow') 
 
    this.renderer.setStyle(this.cRef.nativeElement.children.item(0), 'background-color', 'pink'); 
    this.renderer.setStyle(this.cRef.nativeElement.children.item(1), 'background-color', 'red'); 
  } 
 } 
 
 @Component({ 
  selector: 'app-a', 
  template: ` 
  <h1>ngAfterContentInit Example</h1> 
  <p>I am A.</p> 
  <app-b> 
    <h3 #BHeader>BComponent Content DOM</h3> 
    <app-c></app-c> 
  </app-b> 
  ` 
 }) 
 export class AComponent { } 
```

Os resultados da consulta `@ContentChild` estão disponíveis em `ngAfterContentInit` . `Renderer2` atualiza o conteúdo DOM de BComponent contendo uma tag `h3` e CComponent. Este é um exemplo comum de [projeção](https://alligator.io/angular/content-projection-angular) de [conteúdo](https://alligator.io/angular/content-projection-angular) .

**Resumo: a** renderização começa com AComponent. Para terminar, AComponent deve renderizar o BComponent. BComponent projeta conteúdo aninhado em seu elemento através do elemento `<ng-content></ng-content>` . CComponent faz parte do conteúdo projetado. O conteúdo projetado termina a renderização. `ngAfterContentInit` acionado. O BComponent finaliza a renderização. AComponent finaliza a renderização. `ngAfterContentInit` não será disparado novamente.

#### ngAfterContentChecked

`ngAfterContentChecked` acionado após cada ciclo de detecção de alterações visando o conteúdo DOM. Isso permite que os desenvolvedores facilitem como o conteúdo DOM reage para alterar a detecção. `ngAfterContentChecked` pode disparar com freqüência e causar problemas de desempenho se for mal implementado.

`ngAfterContentChecked` acionado durante os estágios de inicialização de um componente também. Ele vem logo após o `ngAfterContentInit` .

```typescript
import { Component, ContentChild, AfterContentChecked, ElementRef, Renderer2 } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-c', 
  template: ` 
  <p>I am C.</p> 
  <p>Hello World!</p> 
  ` 
 }) 
 export class CComponent { } 
 
 @Component({ 
  selector: 'app-b', 
  template: ` 
  <p>I am B.</p> 
  <button (click)="$event">CLICK</button> 
  <ng-content></ng-content> 
  ` 
 }) 
 export class BComponent implements AfterContentChecked { 
  @ContentChild("BHeader", { read: ElementRef }) hRef: ElementRef; 
  @ContentChild(CComponent, { read: ElementRef }) cRef: ElementRef; 
 
  constructor(private renderer: Renderer2) { } 
 
  randomRGB(): string { 
    return `rgb(${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)})`; 
  } 
 
  ngAfterContentChecked() { 
    this.renderer.setStyle(this.hRef.nativeElement, 'background-color', this.randomRGB()); 
    this.renderer.setStyle(this.cRef.nativeElement.children.item(0), 'background-color', this.randomRGB()); 
    this.renderer.setStyle(this.cRef.nativeElement.children.item(1), 'background-color', this.randomRGB()); 
  } 
 } 
 
 @Component({ 
  selector: 'app-a', 
  template: ` 
  <h1>ngAfterContentChecked Example</h1> 
  <p>I am A.</p> 
  <app-b> 
    <h3 #BHeader>BComponent Content DOM</h3> 
    <app-c></app-c> 
  </app-b> 
  ` 
 }) 
 export class AComponent { } 
```

Isso dificilmente difere de `ngAfterContentInit` . Um mero `<button></button>` foi adicionado ao BComponent. Clicar nele causa um loop de detecção de alteração. Isso ativa o gancho, conforme indicado pela aleatorização da `background-color` de `background-color` .

**Resumo: a** renderização começa com AComponent. Para terminar, AComponent deve renderizar o BComponent. BComponent projeta conteúdo aninhado em seu elemento através do elemento `<ng-content></ng-content>` . CComponent faz parte do conteúdo projetado. O conteúdo projetado termina a renderização. `ngAfterContentChecked` acionado. O BComponent finaliza a renderização. AComponent finaliza a renderização. `ngAfterContentChecked` pode disparar novamente por meio da detecção de alterações.

#### ngAfterViewInit

`ngAfterViewInit` acionado uma vez após o DOM da visualização terminar de inicializar. A vista sempre é carregada logo após o conteúdo. `ngAfterViewInit` aguarda em `@ViewChild(ren)` para resolver. Esses elementos são consultados dentro da mesma exibição do componente.

No exemplo abaixo, o cabeçalho `h3` do BComponent é consultado. `ngAfterViewInit` executado assim que os resultados da consulta estiverem disponíveis.

```typescript
import { Component, ViewChild, AfterViewInit, ElementRef, Renderer2 } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-c', 
  template: ` 
  <p>I am C.</p> 
  <p>Hello World!</p> 
  ` 
 }) 
 export class CComponent { } 
 
 @Component({ 
  selector: 'app-b', 
  template: ` 
  <p #BStatement>I am B.</p> 
  <ng-content></ng-content> 
  ` 
 }) 
 export class BComponent implements AfterViewInit { 
  @ViewChild("BStatement", { read: ElementRef }) pStmt: ElementRef; 
 
  constructor(private renderer: Renderer2) { } 
 
  ngAfterViewInit() { 
    this.renderer.setStyle(this.pStmt.nativeElement, 'background-color', 'yellow'); 
  } 
 } 
 
 @Component({ 
  selector: 'app-a', 
  template: ` 
  <h1>ngAfterViewInit Example</h1> 
  <p>I am A.</p> 
  <app-b> 
    <h3>BComponent Content DOM</h3> 
    <app-c></app-c> 
  </app-b> 
  ` 
 }) 
 export class AComponent { } 
```

`Renderer2` altera a cor do plano de fundo do cabeçalho do BComponent. Isso indica que o elemento view foi consultado com sucesso graças ao `ngAfterViewInit` .

**Resumo: a** renderização começa com AComponent. Para terminar, AComponent deve renderizar o BComponent. BComponent projeta conteúdo aninhado em seu elemento através do elemento `<ng-content></ng-content>` . CComponent faz parte do conteúdo projetado. O conteúdo projetado termina a renderização. O BComponent finaliza a renderização. `ngAfterViewInit` acionado. AComponent finaliza a renderização. `ngAfterViewInit` não será disparado novamente.

#### ngAfterViewChecked

`ngAfterViewChecked` acionado após qualquer ciclo de detecção de mudança que tenha como alvo a exibição do componente. O gancho `ngAfterViewChecked` permite que os desenvolvedores facilitem como a detecção de alterações afeta a visão DOM.

```typescript
import { Component, ViewChild, AfterViewChecked, ElementRef, Renderer2 } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-c', 
  template: ` 
  <p>I am C.</p> 
  <p>Hello World!</p> 
  ` 
 }) 
 export class CComponent { } 
 
 @Component({ 
  selector: 'app-b', 
  template: ` 
  <p #BStatement>I am B.</p> 
  <button (click)="$event">CLICK</button> 
  <ng-content></ng-content> 
  ` 
 }) 
 export class BComponent implements AfterViewChecked { 
  @ViewChild("BStatement", { read: ElementRef }) pStmt: ElementRef; 
 
  constructor(private renderer: Renderer2) { } 
 
  randomRGB(): string { 
    return `rgb(${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)})`; 
  } 
 
  ngAfterViewChecked() { 
    this.renderer.setStyle(this.pStmt.nativeElement, 'background-color', this.randomRGB()); 
  } 
 } 
 
 @Component({ 
  selector: 'app-a', 
  template: ` 
  <h1>ngAfterViewChecked Example</h1> 
  <p>I am A.</p> 
  <app-b> 
    <h3>BComponent Content DOM</h3> 
    <app-c></app-c> 
  </app-b> 
  ` 
 }) 
 export class AComponent { } 
```

**Resumo: a** renderização começa com AComponent. Para terminar, AComponent deve renderizar o BComponent. BComponent projeta conteúdo aninhado em seu elemento através do elemento `<ng-content></ng-content>` . CComponent faz parte do conteúdo projetado. O conteúdo projetado termina a renderização. O BComponent finaliza a renderização. `ngAfterViewChecked` acionado. AComponent finaliza a renderização. `ngAfterViewChecked` pode disparar novamente por meio da detecção de alterações.

Clicar no elemento `<button></button>` inicia uma rodada de detecção de alterações. `ngAfterContentChecked` dispara e randomiza a `background-color` de `background-color` dos elementos consultados em cada clique de botão.

#### ngOnDestroy

`ngOnDestroy` acionado na remoção de um componente da view e do DOM subseqüente. Esse gancho fornece uma chance de limpar qualquer extremidade solta antes da exclusão de um componente.

```typescript
import { Directive, Component, OnDestroy } from '@angular/core'; 
 
 @Directive({ 
  selector: '[appDestroyListener]' 
 }) 
 export class DestroyListenerDirective implements OnDestroy { 
  ngOnDestroy() { 
    console.log("Goodbye World!"); 
  } 
 } 
 
 @Component({ 
  selector: 'app-example', 
  template: ` 
  <h1>ngOnDestroy Example</h1> 
  <button (click)="toggleDestroy()">TOGGLE DESTROY</button> 
  <p appDestroyListener *ngIf="destroy">I can be destroyed!</p> 
  ` 
 }) 
 export class ExampleComponent { 
  destroy: boolean = true; 
 
  toggleDestroy() { 
    this.destroy = !this.destroy; 
  } 
 } 
```

**Resumo:** o botão é clicado. O membro `destroy` do ExampleComponent alterna false. A diretiva estrutural `*ngIf` avaliada como falsa. `ngOnDestroy` acionado. `*ngIf` remove seu host `<p></p>` . Esse processo é repetido várias vezes clicando no botão para alternar o `destroy` para false.

#### Conclusão

Lembre-se de que certas condições devem ser atendidas para cada gancho. Eles sempre serão executados em ordem um do outro independentemente. Isso torna os ganchos previsíveis o suficiente para trabalhar, mesmo que alguns não sejam executados.

Com os ganchos do ciclo de vida, é fácil sincronizar a execução de uma classe. Eles permitem que os desenvolvedores rastreiem onde a detecção de alterações está ocorrendo e como o aplicativo deve reagir. Eles empacam para código que requer dependências baseadas em carga disponíveis somente depois de algum tempo.

O ciclo de vida do componente caracteriza as estruturas modernas de front end. Angular apresenta o seu ciclo de vida, fornecendo os ganchos acima mencionados.

## Fontes

*   [Equipa Angular "Ganchos do ciclo de vida". _Google_ . Acesso em 2 de junho de 2018](https://angular.io/guide/lifecycle-hooks)
*   [Gechev, Minko. “ViewChildren e ContentChildren in Angular”. Acesso em 2 de junho de 2018](http://blog.mgechev.com/2016/01/23/angular2-viewchildren-contentchildren-difference-viewproviders)

## Recursos

*   [Documentação Angular](https://angular.io/docs)
*   [Repositório Angular GitHub](https://github.com/angular/angular)
*   [Ganchos do Ciclo de Vida em Profundidade](https://angular.io/guide/lifecycle-hooks)