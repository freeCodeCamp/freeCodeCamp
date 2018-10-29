---
title: Dependency Injection
localeTitle: Injeção de dependência
---
# Injeção de dependência

#### Motivação

Injeção de dependência é muitas vezes mais simplesmente referida como DI. O paradigma existe em todo o Angular. Ele mantém o código flexível, testável e mutável. As classes podem herdar a lógica externa sem saber como criá-la. Qualquer consumidor dessas classes também não precisa saber de nada.

O DI evita que as classes e os consumidores tenham que saber mais do que o necessário. No entanto, o código é tão modular como era antes graças aos mecanismos de apoio ao DI em Angular.

Os serviços são um dos principais benfeitores do DI. Eles confiam no paradigma de _injeção_ em vários consumidores. Esses consumidores podem então aproveitar esse serviço e / ou enviá-lo para outro lugar.

Serviço não está sozinho. Diretivas, tubulações, componentes e assim por diante: todo esquema em Angular se beneficia de DI de uma forma ou de outra.

#### Injetores

Injetores são estruturas de dados que armazenam instruções detalhando onde e como os serviços se formam. Eles atuam como intermediários dentro do sistema Angular DI.

Módulo, diretiva e classes de componentes contêm metadados específicos para injetores. Uma nova instância do injetor acompanha cada uma dessas classes. Dessa forma, a árvore de aplicativos espelha sua hierarquia de injetores.

Os `providers: []` metadados aceitam serviços que se registram no injetor da classe. Este campo provedor adiciona as instruções necessárias para um injetor funcionar. Uma classe (supondo que tenha dependências) instancia um serviço assumindo sua classe como seu tipo de dados. O injetor alinha esse tipo a cria uma instância desse serviço em nome da classe.

É claro que a turma só pode instanciar o que o injetor tem instruções. Se o próprio injetor da classe não tiver o serviço registrado, ele consultará seu pai. Então, e assim por diante, até chegar a um injetor com o serviço ou a raiz do aplicativo.

Os serviços podem se registrar em qualquer injetor dentro do aplicativo. Os serviços vão no campo de metadados `providers: []` de módulos de classe, diretivas ou componentes. Os filhos da turma podem instanciar um serviço registrado no injetor de classe. Os injetores de crianças fazem fallback nos injetores pais, afinal.

#### Injeção de dependência

Dê uma olhada nos esqueletos de cada classe: serviço, módulo, diretiva e componente.

```typescript
// service 
 
 import { Injectable } from '@angular/core'; 
 
 @Injectable({ 
  providedIn: /* injector goes here */ 
 }) 
 export class TemplateService { 
  constructor() { } 
 } 
```

```typescript
// module 
 
 import { NgModule } from '@angular/core'; 
 import { CommonModule } from '@angular/common'; 
 
 @NgModule({ 
  imports: [ 
    CommonModule 
  ], 
  declarations: [], 
  providers: [ /* services go here */ ] 
 }) 
 export class TemplateModule { } 
```

```typescript
// directive 
 
 import { Directive } from '@angular/core'; 
 
 @Directive({ 
  selector: '[appTemplate]', 
  providers: [ /* services go here */ ] 
 }) 
 export class TemplateDirective { 
  constructor() { } 
 } 
```

```typescript
//component 
 
 import { Component } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-template', 
  templateUrl: './template.component.html', 
  styleUrls: ['./template.component.css'], 
  providers: [ /* services go here */ ] 
 }) 
 export class TemplateComponent { 
  // class logic ... 
 } 
```

Cada esqueleto pode registrar serviços em um injetor. Na verdade, o TemplateService _é_ um serviço. A partir do Angular 6, os serviços agora podem se registrar com injetores usando metadados do `@Injectable` .

##### Em qualquer caso

Observe os `@Injectable` `providedIn: string` ( `@Injectable` ) e `providers: []` ( `@Directive` , `@Componet` e `@Module` ). Eles dizem aos injetores onde e como criar um serviço. Caso contrário, os injetores não saberiam como instanciar.

E se um serviço tiver dependências? Para onde iriam os resultados? Os provedores respondem a essas perguntas para que os injetores possam instanciar corretamente.

Injetores formam a espinha dorsal da estrutura de DI. Eles armazenam instruções para instanciar serviços para que os consumidores não precisem. Eles recebem instâncias de serviço sem precisar saber nada sobre a dependência de origem!

Também devo observar que outros esquemas sem injetores ainda podem utilizar a injeção de dependência. Eles não podem registrar serviços adicionais, mas eles ainda podem instanciar de injetores.

##### Serviço

Os metadados `providedIn: string` de `@Injectable` especificam em qual injetor se registrar. Usando este método, e dependendo se o serviço é usado, o serviço pode ou não se registrar no injetor. Angular chama isso _de tremer de árvore_ .

Por padrão, o valor é definido como `'root'` . Isso se traduz no injetor de raiz do aplicativo. Basicamente, definir o campo como `'root'` torna o serviço disponível em qualquer lugar.

##### Nota rápida

Como mencionado anteriormente, as crianças injetadas recorrem a seus pais. Essa estratégia de recuperação garante que os pais não precisem se registrar novamente para cada injetor. Consulte este artigo sobre [Serviços e Injetores](https://guide.freecodecamp.org/angular/services-and-injectors) para uma ilustração desse conceito.

Serviços registrados são _singletons_ . Ou seja, as instruções para instanciar o serviço existem em apenas um injetor. Isso pressupõe que não tenha sido explicitamente registrado em outro lugar.

##### Módulo, Diretiva e Componente

Módulos e componentes têm sua própria instância de injetor. Isso é evidente, considerando os `providers: []` campo de metadados. Este campo recebe uma série de serviços e registra-os com o injetor do módulo ou classe de componentes. Essa abordagem ocorre nos `@NgModule` , `@Directive` ou `@Component` .

Essa estratégia omite o _abalo de árvores_ ou a remoção opcional de serviços não utilizados dos injetores. Instâncias de serviço vivem em seus injetores durante a vida útil do módulo ou componente.

#### Referências Instantiating

Referências ao DOM podem instanciar de qualquer classe. Tenha em mente que as referências ainda são serviços. Eles diferem dos serviços tradicionais em representar o estado de outra coisa. Esses serviços incluem funções para interagir com sua referência.

Diretivas estão em constante necessidade de referências DOM. Diretivas executam mutações em seus elementos de host por meio dessas referências. Veja o exemplo a seguir. O injetor da diretiva instancia uma referência do elemento host no construtor da classe.

```typescript
// directives/highlight.directive.ts 
 
 import { Directive, ElementRef, Renderer2, Input } from '@angular/core'; 
 
 @Directive({ 
  selector: '[appHighlight]' 
 }) 
 export class HighlightDirective { 
  constructor( 
    private renderer: Renderer2, 
    private host: ElementRef 
  ) { } 
 
  @Input() set appHighlight (color: string) { 
    this.renderer.setStyle(this.host.nativeElement, 'background-color', color); 
  } 
 } 
```

```html

// app.component.html 
 
 <p [appHighlight]="'yellow'">Highlighted Text!</p> 
```

`Renderer2` também é instanciado. De quais injetores esses serviços vêm? Bem, o código fonte de cada serviço vem de `@angular/core` . Esses serviços devem, então, registrar-se no injetor de raiz do aplicativo.

```typescript
import { BrowserModule } from '@angular/platform-browser'; 
 import { NgModule } from '@angular/core'; 
 import { AppComponent } from './app.component'; 
 import { HighlightDirective } from './directives/highlight.directive'; 
 
 @NgModule({ 
  declarations: [ 
    AppComponent, 
    HighlightDirective 
  ], 
  imports: [ 
    BrowserModule 
  ], 
  providers: [], 
  bootstrap: [ 
    AppComponent 
  ] 
 }) 
 export class AppModule { } 
```

Uma matriz de provedores vazia! Não temer. Angular registra muitos serviços com o injetor de raiz automaticamente. Isso inclui `ElementRef` e `Renderer2` . Neste exemplo, estamos gerenciando o elemento host por meio de sua interface a partir da instanciação de `ElementRef` . `Renderer2` nos permite atualizar o DOM através do modelo de visualização do Angular.

Você pode ler mais sobre as visualizações [deste artigo](https://guide.freecodecamp.org/angular/views) . Eles são o método preferido para atualizações DOM / view em aplicativos Angular.

É importante reconhecer o papel que os injetores desempenham no exemplo acima. Ao declarar os tipos de variáveis ​​no construtor, a classe obtém serviços valiosos. O tipo de dados de cada parâmetro é mapeado para um conjunto de instruções dentro do injetor. Se o injetor tiver esse tipo, ele retornará uma instância desse tipo.

#### Instanciando Serviços

O artigo [Serviços e Injetores](https://guide.freecodecamp.org/angular/services-and-injectors) explica essa seção até certo ponto. Embora, esta seção refaça a seção anterior ou a maior parte. Os serviços geralmente fornecem referências a outra coisa. Eles podem também fornecer uma interface estendendo as capacidades de uma classe.

O próximo exemplo definirá um serviço de registro que é adicionado ao injetor de um componente por meio de seus `providers: []` metadata.

```typescript
// services/logger.service.ts 
 
 import { Injectable } from '@angular/core'; 
 
 @Injectable() 
 export class LoggerService { 
  callStack: string[] = []; 
 
  addLog(message: string): void { 
    this.callStack = [message].concat(this.callStack); 
    this.printHead(); 
  } 
 
  clear(): void { 
    this.printLog(); 
    this.callStack = []; 
    console.log(“DELETED LOG”); 
  } 
 
  private printHead(): void { 
    console.log(this.callStack[0] || null); 
  } 
 
  private printLog(): void { 
    this.callStack.reverse().forEach((log) => console.log(message)); 
  } 
 } 
```

```typescript
// app.component.ts 
 
 import { Component } from '@angular/core'; 
 import { LoggerService } from './services/logger.service'; 
 
 @Component({ 
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  providers: [LoggerService] 
 }) 
 export class AppComponent { 
  constructor(private logger: LoggerService) { } 
 
  logMessage(event: any, message: string): void { 
    event.preventDefault(); 
    this.logger.addLog(`Message: ${message}`); 
  } 
 
  clearLog(): void { 
    this.logger.clear(); 
  } 
 } 
```

```html

// app.component.html 
 
 <h1>Log Example</h1> 
 <form (submit)="logMessage($event, userInput.value)"> 
  <input #userInput placeholder="Type a message..."> 
  <button type="submit">SUBMIT</button> 
 </form> 
 
 <h3>Delete Logged Messages</h3> 
 <button type="button" (click)="clearLog()">CLEAR</button> 
```

Concentre-se no construtor e nos metadados do AppComponent. O injetor de componentes recebe instruções do campo de metadados do provedor que contém o LoggerService. O injetor então sabe o que instanciar o LoggerService de requisitado no construtor.

O parâmetro de construtor `loggerService` tem o tipo `LoggerService` que o injetor reconhece. O injetor segue com a instanciação como mencionado.

#### Conclusão

Injeção de dependência (DI) é um paradigma. A maneira como funciona em Angular é através de uma hierarquia de injetores. Uma turma recebe seus recursos sem ter que criar ou saber sobre eles. Os injetores recebem instruções e instanciam um serviço, dependendo de qual deles foi solicitado.

DI aparece muito em Angular. A documentação oficial Angular explica porque o paradigma é tão prevalente. Eles também descrevem os numerosos casos de uso do DI em Angular além do que foi discutido neste artigo. Confira clicando abaixo!

## Fontes

*   [Equipa Angular “Padrão de Injeção de Dependência”. _Google_ . Acesso em 1 de junho de 2018](https://angular.io/guide/dependency-injection-pattern)
    
*   [Zuev, Alexey. “O que você sempre quis saber sobre a árvore de injeção de dependência angular”. _Angular em profundidade_ , 21 de março de 2018. Acessado em 1 de junho de 2018](https://blog.angularindepth.com/angular-dependency-injection-and-tree-shakeable-tokens-4588a8f70d5d)
    

## Recursos

*   [Documentação Angular](https://angular.io/guide/pipes)
    
*   [Repositório Angular GitHub](https://github.com/angular/angular)
    
*   [Introdução à Injeção de Dependência](https://angular.io/guide/architecture-services)
    
*   [Injeção de Dependência Avançada](https://angular.io/guide/dependency-injection-pattern)