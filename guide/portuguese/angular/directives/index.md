---
title: Directives
localeTitle: Diretivas
---
# Diretivas

#### Motivação

As diretivas são essenciais para o HTML do modelo do Angular. Componentes são o exemplo mais significativo. Cada vista de componente é apresentada abaixo de uma vista de componente de raiz. Isso pode resultar em uma árvore de visualizações que define um único aplicativo. Uma visão constitui uma classe ( `component.ts` ) e seu template ( `component.html` ).

Outras diretivas, embora não tão críticas, fornecem flexibilidade muito necessária. Uma diretiva posicionada em um elemento tem controle total sobre ela. O uso do `<ng-template></ng-template>` permite a criação e remoção dinâmica de conteúdo HTML. A Microsyntax oferece aos desenvolvedores a liberdade de personalizar ainda mais o comportamento da diretiva.

#### A directiva

Diretivas são elementos e atributos de componentes criados e reconhecidos pelo Angular. Angular associa o elemento ou atributo à sua definição de classe correspondente. `@Directive` ou `@Component` decora essas classes. Ambos são indicativos de Angular que a classe executa como diretiva.

Algumas diretivas modificam o estilo do elemento host. Outras diretivas exibem exibições ou inserem as existentes como exibições incorporadas. Em outras palavras, eles alteram o layout HTML.

Em qualquer caso, diretivas sinalizam o compilador Angular. Eles marcam componentes para modificação, dependendo da lógica de classe da diretiva.

#### Diretiva de Componentes

As diretivas de componente diferem fundamentalmente dos outros tipos de diretiva. Eles são geralmente chamados de componentes. Eles formam sua própria tag HTML exclusiva. Para cada componente, há uma certa quantidade de modelos HTML. Isso é diferente das outras duas diretivas. Suas classes são pura lógica operando no que é pré-definido no template HTML.

#### Criação de Componentes

Crie um componente com `ng generate component [name-of-component]` ; substitua `[name-of-component]` por um nome preferível. O comando gera quatro arquivos diferentes que pertencem a um componente.

O `component.css` e o `component.spec.ts` estão além do escopo deste artigo. O aspecto _diretivo_ do componente envolve os outros dois arquivos. Dê uma olhada nas geradas `component.ts` e `component.html` .

```typescript
// example.component.ts 
 import { Component } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-example', 
  templateUrl: './example.component.html' 
 }) 
 export class ExampleComponent { 
  constructor() { } 
 } 
```

Alguns detalhes irrelevantes foram cortados da geração padrão de `component.ts` . Dessa forma, o foco está no próprio componente.

```html

<!-- example.component.html --> 
 
 <p>example works!</p> 
```

Inserir ExampleComponent como o filho de outro componente seria semelhante ao seguinte.

```html

<!-- another.component.html --> 
 
 <h1>Welcome to AnotherComponent.</h1> 
 <h3>Check out ExampleComponent!</h3> 
 
 <!-- Outputs “<p>example works!</p>” --> 
 <app-example></app-example> 
 
 <h6>This is the end of the AnotherComponent template HTML.</h6> 
```

Preste atenção em `<app-example></app-example>` . O `app-example` corresponde ao seletor do decorador `@Component` do ExampleComponent. Esta é uma diretiva de componentes. O Angular reconhece o `app-example` e _direciona_ sua renderização para a classe ExampleComponent.

#### Directiva Estrutural

Pense nas instruções `if` , `for` loops e nas instruções `switch` na lógica de programação. Essas construções lógicas determinam a execução de código. O código será executado ( `if` ), quantas vezes ele será executado ( `for` ) e qual bloco de código será executado ( `switch` ).

Esse padrão continua com diretrizes estruturais. Eles determinam a estrutura HTML resultante de um modelo. Eles sempre envolvem algum uso de `ng-template` sob o capô. `ng-template` fornece um mecanismo para criar HTML processado condicionalmente.

Aqui estão três exemplos de diretivas estruturais. Cada um tem uma contrapartida lógica ( `if` , `for` e `switch` ).

*   \* ngIf
    
*   \* ngFor
    
*   \* ngSwitchCase e \* ngSwitchDefault
    

**Nota importante:** todos os três estão disponíveis através da importação `CommonModule` . Está disponível em `@angular/common` para importação no módulo raiz do aplicativo.

##### \* ngIf

`*ngIf` testa um determinado valor para ver se ele é _truthy_ ou _Falsas_ baseado fora avaliação boolean geral em JavaScript. Se for verdade, o elemento e seu innerHTML aparecerão. Caso contrário, eles nunca renderizam para o Modelo de Objeto de Domínio (DOM).

```html

<!-- renders “<h1>Hello!</h1>” --> 
 <div *ngIf="true"> 
  <h1>Hello!</h1> 
 </div> 
 
 <!-- does not render --> 
 <div *ngIf="false"> 
  <h1>Hi!</h1> 
 </div> 
```

Este é um exemplo artificial. Qualquer valor de membro da classe de componente do modelo pode ser substituído por `true` ou `false` .

NOTA: Você também pode fazer o seguinte com \* ngIf para obter acesso ao valor observalbe

```html

<div *ngIf="observable$ | async as anyNameYouWant"> 
  {{  anyNameYouWant }} 
 </div> 
```

##### \* ngFor

`*ngFor` loops baseados em uma expressão _microssatática_ designada à _direita_ . Microsyntax se move além do escopo deste artigo. Saiba que a microsyntax é uma forma abreviada de expressão lógica. Ocorre como uma única string capaz de referenciar os valores dos membros da classe. Pode fazer loop de valores iteráveis, o que o torna útil para `*ngFor` .

```html

<ul> 
  <li *ngFor=“let potato of ['Russet', 'Sweet', 'Laura']; let i=index”> 
      Potato {{ i + 1 }}: {{ potato }} 
  </li> 
  <!-- Outputs 
  <li> 
      Potato 1: Russet 
  </li> 
  <li> 
      Potato 2: Sweet 
  </li> 
  <li> 
      Potato 3: Laura 
  </li> 
  --> 
 </ul> 
```

`['Russet', 'Sweet', 'Laura']` é um valor iterável. Matrizes são um dos iteráveis ​​mais comuns. O `*ngFor` um novo `<li></li>` por elemento de matriz. Cada elemento da matriz é atribuído à variável `potato` . Tudo isso é feito utilizando microsyntax. O `*ngFor` define o conteúdo estrutural do elemento `ul` . Isso é característico de uma diretiva estrutural.

NOTA: Você também pode fazer o seguinte com a diretiva \* ngFor para obter acesso ao valor observalbe (hacky)

```html

<div *ngFor="let anyNameYouWant of [(observable$ | async)]"> 
  {{  anyNameYouWant }} 
 </div> 
```

##### \* ngSwitchCase e \* ngSwitchDefault

Essas duas diretivas estruturais funcionam juntas para fornecer funcionalidade de `switch` para HTML de modelo.

```html

<div [ngSwitch]=“potato”> 
  <h1 *ngSwitchCase=“'Russet'”>{{ potato }} is a Russet Potato.</h1> 
  <h1 *ngSwitchCase=“'Sweet'”>{{ potato }} is a Sweet Potato.</h1> 
  <h1 *ngSwitchCase=“'Laura'”>{{ potato }} is a Laura Potato.</h1> 
  <h1 *ngSwitchDefault>{{ potato }} is not a Russet, Sweet, nor Laura Potato.</h1> 
 </div> 
```

Apenas uma das expressões `*ngSwitch…` renderizada. Observe o atributo `[ngSwitch]` dentro do elemento `div` que envolve o comutador. Isso passa o valor de `potato` ao longo da cadeia `*ngSwitch...` Essa cadeia de diretivas estruturais determina qual elemento `h1` renderiza.

Como tal, `[ngSwitch]` não é uma diretiva estrutural ao contrário das `*ngSwitch…` . Ele passa o valor enquanto o bloco de switches determina o layout final do HTML.

Lembre-se de que a estilização e a passagem de valores não são responsabilidade de diretivas estruturais. Isso diz respeito às diretivas de atributo. Diretivas estruturais determinam apenas o layout.

#### Criação Diretiva Estrutural [1](https://angular.io/guide/structural-directives)

Há algo importante para entender sobre os exemplos anteriores. Eles são todos abreviados pelo asterisco inicial ( `*` ). `ng-template` é usado sob o capô com cada aplicação do asterisco.

`ng-template` define diretivas estruturais. Explica como eles podem configurar HTML de modelo para produzir HTML real. Comece criando uma diretiva com `ng generate directive [name-of-directive]` . Substitua `[name-of-directive]` por um nome preferível. O comando produz o seguinte.

```typescript
import { Directive } from '@angular/core'; 
 
 @Directive({ 
  selector: '[appExample]' 
 }) 
 export class ExampleDirective { 
  constructor() { } 
 } 
```

Este esqueleto da diretiva está bem nu. Ele ainda não sabe se estamos construindo uma diretiva estrutural ou de atributos. O `selector: '[appExample]'` diz ao Angular para qual atributo a diretiva mapeia. Como você está criando uma diretiva estrutural, modifique o esqueleto da seguinte maneira.

```typescript
Import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core'; 
 
 @Directive({ 
  selector: '[appExample]' 
 }) 
 export class ExampleDirective { 
  @Input() set appExample(booleanValue: boolean) { 
      if (booleanValue) { 
          this.ngTemplate.createEmbeddedView(this.innerHTMLOfTemplateScope); 
      } 
      else { 
          this.ngTemplate.clear(); 
      } 
  } 
 
  constructor( 
      private innerHTMLOfTemplateScope:TemplateRef<any>, 
      private ngTemplate:ViewContainerRef 
  ) { } 
 } 
```

A inclusão de um elemento arbitrário com o atributo `appExample` serve como um bom exemplo.

```html

<div *appExample=“value”>innerHTML content</div> 
 <!-- This is shorthand for: 
 <ng-template> 
  <div>innerHTML content</div> 
 </ng-template> 
 --> 
```

Isso é muito para receber. `@Input() set ...` é uma declaração de membro setter. Ele é executado sempre que o atributo `appExample` aparece dentro de um elemento e recebe um valor booleano. A função setter recebe esse valor booleano como parâmetro para execução.

`TemplateRef<any>` referência ao innerHTML de `<ng-template></ng-template>` . O asterisco usado nos exemplos anteriores é um atalho para o comentário no bloco de código acima. `ng-template` atua como o _molho secreto_ para as diretrizes estruturais.

`ViewContainerRef` referencia o escopo de encapsulamento de `<ng-template></ng-template>` . `ng-template` não é um elemento real. É um marcador para o compilador Angular que eventualmente é comentado.

`ViewContainerRef` tem dois métodos: `clear()` e `createEmbeddedView()` . Você pode pensar em visualizações incorporadas como o HTML com escopo dentro de um elemento `ng-template` .

`clear()` remove qualquer HTML existente com escopo dentro do `ng-template` da exibição de HTML. `createEmbeddedView()` tem como alvo o HTML dentro do `ng-template` como HTML exibível.

Se entender o exemplo de código mais recente, então você tem um sólido aperto `*ngIf` , `*ngFor` , `*ngSwitchCase` e `*ngSwitchDefault` . Todos eles determinam o layout com referência ao `TemplateRef<any>` e `ViewContainerRef` .

De fato, o ExampleDirective acima imita a funcionalidade de `*ngIf` !

```html

<!-- renders “<h1>Hello!</h1>” --> 
 <div *ngExample="true"> 
  <h1>Hello!</h1> 
 </div> 
 
 <!-- does not render --> 
 <div *appExample="false"> 
  <h1>Hi!</h1> 
 </div> 
```

Nunca esqueça o asterisco ( `*` ). É uma abreviação do elemento `ng-template` que nossa classe diretiva faz referência.

#### Diretiva de Atributos

As diretivas de atributo são semelhantes às estruturais. Exceto, as diretivas de atributo não afetam o layout HTML. Eles não implementam `<ng-template></ng-template>` . Eles são atributos que fazem referência a seu elemento host para mudanças estilísticas.

Um exemplo melhor explica seu propósito.

#### Criação da Diretiva de Atributos [2](https://angular.io/guide/attribute-directives)

Gere outra diretiva: `ng generate directive [name-of-directive]` . Substitua `[name-of-directive]` por um nome preferível.

```typescript
import { Directive } from '@angular/core'; 
 
 @Directive({ 
  selector: '[appExample]' 
 }) 
 export class ExampleDirective { 
  constructor() { } 
 } 
```

Atributos e diretrizes estruturais começam com o mesmo esqueleto. Mais algumas adições distinguirão a diretiva de atributos.

```typescript
import { Directive, Input, ElementRef } from '@angular/core'; 
 
 @Directive({ 
  selector: '[appExample]' 
 }) 
 export class ExampleDirective { 
  @Input() set appExample(color:string) { 
      this.host.nativeElement.style.color = color; 
  } 
 
  constructor(private host:ElementRef) { } 
 } 
```

Alguns elementos para testar ajudarão.

```html

<!-- the intended results are self-explanatory --> 
 <div appExample=“purple”>This text is purple!</div> 
 <div appExample=“blue”>This text is blue!</div> 
 <div appExample=“red”>This text is red!</div> 
```

`ElementRef` fornece uma referência direta ao elemento host. `ElementRef.nativeElement` agarra o nó DOM. Com o nó, estilizar o componente é tão simples quanto `this.host.nativeElement.style.color = color` .

`@Input() set ...` é outra função setter que lê o valor que é atribuído na sua implementação como um atributo. Ele reatribui a propriedade color da folha de estilo de cada elemento.

#### Conclusão

As diretivas são uma ferramenta poderosa disponível no HTML do modelo do Angular. Eles são como os componentes se conectam entre si. Dentro de cada componente, eles fornecem um meio de estilo e layout.

Existem muitas outras opções para construir cada tipo de diretiva. Infelizmente, cobrir cada um é demais para um artigo. Ter um conhecimento básico de diretivas é suficiente para avançar com recursos mais avançados.

Confira os recursos abaixo para mergulhar mais fundo. Existem links para cada tipo de diretiva. Cada link faz parte da mesma documentação, portanto não é necessário voltar aqui depois de visitar o primeiro link!

## Fontes

1.  [Equipa Angular _Directivas Estruturais_ . Google. Acessado em 28 de maio de 2018](https://angular.io/guide/structural-directives)
    
2.  [Equipa Angular _Diretivas de Atributos_ . Google. Acessado em 28 de maio de 2018](https://angular.io/guide/attribute-directives)
    

## Recursos

*   [Documentação Angular](https://angular.io/guide/pipes)
    
*   [Repositório Angular GitHub](https://github.com/angular/angular)
    
*   [Componentes angulares](https://angular.io/guide/architecture-components)
    
*   [Diretrizes Estruturais Angulares](https://angular.io/guide/structural-directives)
    
*   [Diretrizes de Atributos Angulares](https://angular.io/guide/attribute-directives)
    
*   [CLI Angular](https://cli.angular.io)