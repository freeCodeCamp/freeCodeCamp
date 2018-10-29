---
title: NgModules
localeTitle: iModules
---
# NgModules

#### Motivação

Aplicativos angulares começam a partir do NgModule raiz. Angular gerencia as dependências de um aplicativo através de seu sistema de módulos composto por NgModules. Juntamente com os módulos JavaScript simples, o NgModules garante a modularidade e o encapsulamento do código.

Os módulos também fornecem um nível mais alto de código de organização. Cada NgModule separa seu próprio bloco de código como a raiz. Este módulo fornece encapsulamento de cima para baixo para seu código. O bloco inteiro de código pode exportar para qualquer outro módulo. Nesse sentido, os NgModules atuam como gatekeepers para seus próprios blocos de código.

Os utilitários documentados da Angular vêm de NgModules, de autoria da Angular. Nenhum utilitário está disponível, a menos que o NgModule que declara que seja incluído na raiz. Esses utilitários também devem exportar de seu módulo host para que os importadores possam usá-los. Essa forma de encapsulamento permite que o desenvolvedor produza seus próprios NgModules dentro do mesmo sistema de arquivos.

Além disso, faz sentido saber por que o CLI Angular (interface de linha de comando) importa o `BrowserModule` de `@angular/core` . Isso acontece sempre que um novo aplicativo é gerado usando o comando da CLI: `ng new [name-of-app]` .

Entender o ponto da implementação pode ser suficiente na maioria dos casos. No entanto, entender como a implementação se conecta à raiz é ainda melhor. Tudo acontece automaticamente importando o `BrowserModule` na raiz.

#### NgModule Decorator

Angular define seus módulos decorando uma classe genérica. O decorador `@NgModule` indica o propósito modular da classe para Angular. Uma classe NgModule consolida as dependências raiz acessíveis / instanciáveis ​​do escopo do módulo. 'Escopo' significa qualquer coisa originada dos metadados do módulo.

```typescript
import { NgModule } from '@angular/core'; 
 
 @NgModule({ 
  // … metadata … 
 }) 
 export class AppModule { } 
```

#### Metadados NgModule

A raiz gerada pela CLI NgModule inclui os seguintes campos de metadados. Esses campos fornecem configuração para o bloco de código no qual o NgModule preside.

*   `declarations: []`
*   `imports: []`
*   `providers: []`
*   `bootstrap: []`

##### Declarações

A matriz de declarações inclui todos os componentes, diretivas ou pipes hospedados por um NgModule. Eles são privados para o módulo, a menos que sejam explicitamente exportados dentro de seus metadados. Dado este caso de uso, componentes, diretivas e pipes são apelidados de 'declaráveis'. Um NgModule deve declarar um declarable uniquely. O declarável não pode declarar duas vezes em NgModules separados. Um erro é acionado de outra forma. Veja o exemplo abaixo.

```typescript
import { NgModule } from '@angular/core'; 
 import { TwoComponent } from './components/two.component.ts'; 
 
 @NgModule({ 
  declarations: [ TwoComponent ] 
 }) 
 export class TwoModule { } 
 
 @NgModule({ 
  imports: [ TwoModule ], 
  declarations: [ TwoComponent ] 
 }) 
 export class OneModule { } 
```

Angular lança um erro por causa do encapsulamento do NgModule. Declarables são privados para o NgModule que os declara por padrão. Se vários NgModules precisarem de um determinado declarável, eles devem importar o NgModule declarante. Este NgModule deve então exportar o declarável desejado para que os outros NgModule possam usá-lo.

```typescript
import { NgModule } from '@angular/core'; 
 import { TwoComponent } from './components/two.component.ts'; 
 
 @NgModule({ 
  declarations: [ TwoComponent ], 
  exports: [ TwoComponent ] 
 }) 
 export class TwoModule { } 
 
 @NgModule({ 
  imports: [ TwoModule ] // this module can now use TwoComponent 
 }) 
 export class OneModule { } 
```

O exemplo acima não apresentará um erro. TwoComponent foi declarado com exclusividade entre os dois NgModules. O OneModule também tem acesso ao TwoComponent, pois importa o TwoModule. O TwoModule, por sua vez, exporta o TwoComponent para uso externo.

##### Importações

O array de importações só aceita NgModules. Esta matriz não aceita declaráveis, serviços ou qualquer outra coisa além de outros NgModules. Importar um módulo fornece acesso ao que declarável o módulo publiciza.

Isso explica por que importar o `BrowserModule` fornece acesso a vários utilitários. Cada utilitário declarável declarado no `BrowserModule` exporta de seus metadados. Ao importar o `BrowserModule` , os declaráveis ​​exportados ficam disponíveis para o NgModule de importação. Os serviços não exportam, pois não possuem o mesmo encapsulamento.

##### Provedores

A falta de encapsulamento de serviços pode parecer estranha, dado o encapsulamento de declaráveis. Lembre-se de que os serviços entram na matriz de provedores separados das declarações ou exportações.

Quando o Angular compila, nivela a raiz do NgModule e suas importações em um módulo. Os serviços agrupam-se em uma única matriz de provedores hospedada pelo NgModule mesclado. Declaráveis ​​mantêm seu encapsulamento por meio de um conjunto de sinalizadores de tempo de compilação.

Se os provedores NgModule contiverem valores de token correspondentes, o módulo raiz de importação terá precedência. Depois disso, o último NgModule importado tem precedência. Veja o próximo exemplo. Preste atenção especial ao NgModule que importa os outros dois. Reconhecer como isso afeta a precedência do serviço fornecido.

```typescript
import { NgModule } from '@angular/core'; 
 
 @NgModule({ 
  providers: [ AwesomeService ], // 1st precedence + importing module 
  imports: [ 
    BModule, 
    CModule 
  ] 
 }) 
 export class AModule { } 
 
 @NgModule({ 
  providers: [ AwesomeService ]  // 3rd precedence + first import 
 }) 
 export class BModule { } 
 
 @NgModule({ 
  providers: [ AwesomeService ]  // 2nd precedence + last import 
 }) 
 export class CModule { } 
```

Instanciando AwesomeService de dentro do escopo do AModule resulta em uma instância AwesomeService como fornecida nos metadados do AModule. Se os provedores do AModule omitissem este serviço, o AwesomeService do CModule teria precedência. Assim e assim por diante, para o BModule, se os provedores do CModule omitissem o AwesomeService.

##### Bootstrap

A matriz de bootstrap aceita componentes. Para cada componente do Array, o Angular insere o componente como sua própria raiz do arquivo `index.html` . O NgModule raiz gerada pelo CLI de um aplicativo sempre terá esse campo.

```typescript
import { BrowserModule } from '@angular/platform-browser'; 
 import { NgModule } from '@angular/core'; 
 import { AppComponent } from './app.component'; 
 
 @NgModule({ 
  declarations: [ AppComponent ], 
  imports: [ BrowserModule ], 
  providers: [], 
  bootstrap: [ AppComponent ] 
 }) 
 export class AppModule { } 
```

O elemento do AppComponent injetará no HTML de nível básico do aplicativo ( `index.html` ). O restante da árvore de componentes se desdobra a partir daí. O escopo do NgModule abrangente cobre toda essa árvore, além de quaisquer outros injetados a partir da matriz de inicialização. A matriz geralmente contém apenas um elemento. Esse componente representa o módulo como um único elemento e sua árvore subjacente.

#### Módulos NgModules vs JavaScript

Você viu os módulos Angular e JavaScript trabalhando juntos nos exemplos anteriores. As principais instruções `import..from` constituem o sistema de módulos JavaScript. Os locais de arquivo do destino de cada instrução devem exportar uma classe, variável ou função correspondente à solicitação. `import { TARGET } from './path/to/exported/target'` .

Em JavaScript, os módulos são separados por arquivos. Os arquivos são importados usando a `import..from` palavras-chave mencionadas. NgModules, por outro lado, são separados por classe e decorados com `@NgModule` . E assim, muitos módulos angulares podem existir em um único arquivo. Isso não pode acontecer com JavaScript, pois um arquivo define um módulo.

Concedido, as convenções dizem que cada classe decorada `@NgModule` deve ter seu próprio arquivo. Mesmo assim, saiba que os arquivos não constituem seus próprios módulos no Angular. Classes decoradas com `@NgModule` criam essa distinção.

Os módulos JavaScript fornecem referências de token para os metadados `@NgModule` . Isso acontece no topo de um arquivo que hospeda uma classe NgModule. O NgModule usa esses tokens dentro de seus campos de metadados (declaráveis, importações, provedores, etc). A única razão `@NgModule` qual `@NgModule` pode decorar uma classe é porque o JavaScript a importa do topo do arquivo.

```typescript
// JavaScript module system provides tokens 
 import { BrowserModule } from '@angular/platform-browser'; 
 import { NgModule } from '@angular/core'; 
 import { AppComponent } from './app.component'; 
 import { AppService } from './app.service'; 
 // Javascript module system is strict about where it imports. It can only import at the top of files. 
 
 // Angular NgModule uses those tokens in its metadata settings 
 @NgModule({ // import { NgModule } from '@angular/core'; 
  declarations: [ 
    AppComponent // import { AppComponent } from './app.component'; 
  ], 
  imports: [ 
    BrowserModule // import { BrowserModule } from '@angular/platform-browser'; 
  ], 
  providers: [ 
    AppService // import { AppService } from './app.service'; 
  ], 
  bootstrap: [ 
    AppComponent // import { AppComponent } from './app.component'; 
  ] 
 }) 
 export class AppModule { } 
 // JavaScript module system exports the class. Other modules can now import AppModule. 
```

O exemplo acima não introduz nada de novo. O foco aqui é nos comentários explicando como os dois sistemas modulares trabalham juntos. O JavaScript fornece referências de token, enquanto o NgModule usa esse token para encapsular e configurar seu bloco de código subjacente.

#### Módulos de recursos

Aplicativos aumentam ao longo do tempo. Escalá-los corretamente requer organização de aplicativos. Um sistema sólido para isso facilitará ainda mais o desenvolvimento.

Em Angular, os esquemas garantem que seções de código orientadas por objetivos permaneçam distinguíveis. Além dos esquemas do sub-NgModule, existem os próprios NgModules. Eles são um tipo de esquema também. Eles estão acima do resto na lista de esquemas excluindo o próprio aplicativo.

O módulo raiz não deve ficar sozinho assim que um aplicativo começar a escalar. Os módulos de recursos incluem qualquer NgModule usado ao lado do NgModule raiz. Você pode pensar no módulo raiz como tendo o campo de metadados `bootstrap: []` . Aplicativo de recurso garante que o módulo raiz não sature excessivamente seus metadados.

Os módulos de recursos isolam uma seção de código em nome de qualquer módulo de importação. Eles podem lidar com seções inteiras de aplicativos independentemente. Isso significa que ele pode ser usado em qualquer aplicativo cujo módulo raiz importe o módulo de recurso. Essa tática economiza tempo e esforço dos desenvolvedores ao longo de vários aplicativos! Ele também mantém a raiz do aplicativo, NgModule, enxuta.

Na raiz NgModule de um aplicativo, adicionar o token de um módulo de recurso à matriz de `imports` da raiz faz o truque. O que quer que o módulo de recursos exporte ou forneça fica disponível para a raiz.

```typescript
// ./awesome.module.ts 
 
 import { NgModule } from '@angular/core'; 
 import { AwesomePipe } from './awesome/pipes/awesome.pipe'; 
 import { AwesomeComponent } from './awesome/components/awesome.component'; 
 import { AwesomeDirective } from './awesome/directives/awesome.directive'; 
 
 @NgModule({ 
  exports: [ 
    AwesomePipe, 
    AwesomeComponent, 
    AwesomeDirective 
  ] 
  declarations: [ 
    AwesomePipe, 
    AwesomeComponent, 
    AwesomeDirective 
  ] 
 }) 
 export class AwesomeModule { } 
```

```typescript
// ./app.module.ts 
 
 import { AwesomeModule } from './awesome.module'; 
 import { BrowserModule } from '@angular/platform-browser'; 
 import { NgModule } from '@angular/core'; 
 import { AppComponent } from './app.component'; 
 
 @NgModule({ 
  declarations: [ 
    AppComponent 
  ], 
  imports: [ 
    AwesomeModule, 
    BrowserModule 
  ], 
  providers: [], 
  bootstrap: [ 
    AppComponent 
  ] 
 }) 
 export class AppModule { } 
```

```typescript
// ./app.component.ts 
 
 import { Component } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-root', 
  template: ` 
  <!-- AwesomeDirective --> 
  <h1 appAwesome>This element mutates as per the directive logic of appAwesome.</h1> 
 
  <!-- AwesomePipe --> 
  <p>Generic output: {{ componentData | awesome }}</p> 
 
  <section> 
    <!-- AwesomeComponent --> 
    <app-awesome></app-awesome> 
  </section> 
  ` 
 }) 
 export class AppComponent { 
  componentData: string = "Lots of transformable data!"; 
 } 
```

`<app-awesome></app-awesome>` (componente), `awesome` (pipe) e `appAwesome` (diretiva) são exclusivos do AwesomeModule. Se ele não tivesse exportado esses declaráveis ​​ou o AppModule tivesse negligenciado a inclusão do AwesomeModule em suas importações, então os declaráveis ​​do AwesomeModule não seriam utilizáveis ​​pelo modelo do AppComponent. O AwesomeModule é um módulo de recurso para o NgModule AppModule raiz.

A Angular fornece alguns módulos próprios que complementam a raiz em sua importação. Isso se deve a esses módulos de recursos que exportam o que eles criam.

#### Métodos de módulo estático

Às vezes, os módulos fornecem a opção de serem configurados com um objeto de configuração personalizado. Isso é obtido aproveitando métodos estáticos dentro da classe do módulo.

Um exemplo dessa abordagem é o `RoutingModule` que fornece um `.forRoot(...)` diretamente no módulo.

Para definir seu próprio método de módulo estático, adicione-o à classe de módulo usando a palavra-chave `static` . O tipo de retorno deve ser `ModuleWithProviders` .

```ts
// configureable.module.ts 
 
 import { AwesomeModule } from './awesome.module'; 
 import { ConfigureableService, CUSTOM_CONFIG_TOKEN, Config } from './configurable.service'; 
 import { BrowserModule } from '@angular/platform-browser'; 
 import { NgModule } from '@angular/core'; 
 
 
 @NgModule({ 
  imports: [ 
    AwesomeModule, 
    BrowserModule 
  ], 
  providers: [ 
    ConfigureableService 
  ] 
 }) 
 export class ConfigureableModule { 
  static forRoot(config: Config): ModuleWithProviders { 
    return { 
        ngModule: ConfigureableModule, 
        providers: [ 
            ConfigureableService, 
            { 
                provide: CUSTOM_CONFIG_TOKEN, 
                useValue: config 
            } 
        ] 
    }; 
  } 
 } 
```

```ts
// configureable.service.ts 
 
 import { Inject, Injectable, InjectionToken } from '@angular/core'; 
 
 export const CUSTOM_CONFIG_TOKEN: InjectionToken<string> = new InjectionToken('customConfig'); 
 
 export interface Config { 
  url: string 
 } 
 
 @Injectable() 
 export class ConfigureableService { 
  constructor( 
    @Inject(CUSTOM_CONFIG_TOKEN) private config: Config 
  ) 
 } 
```

Observe que o objeto que o `forRoot(...)` retorna é quase idêntico à configuração do `NgModule` .

O `forRoot(...)` aceita um objeto de configuração customizado que o usuário pode fornecer ao importar o módulo.

```ts
imports: [ 
  ... 
  ConfigureableModule.forRoot({ url: 'http://localhost' }), 
  ... 
 ] 
```

A configuração é então fornecida usando um `InjectionToken` personalizado chamado `CUSTOM_CONFIG_TOKEN` e injetado no `ConfigureableService` . O `ConfigureableModule` deve ser importado apenas uma vez usando o método `forRoot(...)` . Isso fornece o `CUSTOM_CONFIG_TOKEN` com a configuração personalizada. Todos os outros módulos devem importar o `ConfigureableModule` sem o `forRoot(...)` .

#### NgModule Exemplos from Angular

Angular fornece uma variedade de módulos importáveis ​​de `@angular` . Dois dos módulos mais comumente importados são `CommonModule` e `HttpClientModule` .

`CommonModule` é na verdade um subconjunto do `BrowserModule` . Ambos fornecem acesso às diretivas estruturais `*ngIf` e `*ngFor` . `BrowserModule` inclui uma instalação específica da plataforma para o navegador da web. `CommonModule` omite esta instalação. O `BrowserModule` deve importar para o NgModule raiz de um aplicativo da web. `CommonModule` fornece `*ngIf` e `*ngFor` para módulos de recursos que não exigem uma instalação de plataforma.

`HttpClientModule` fornece o serviço `HttpClient` . Lembre-se de que os serviços vão na matriz de provedores dos metadados `@NgModule` . Eles não são declaráveis. Durante a compilação, cada NgModule é consolidado em um único módulo. Os serviços não são encapsulados ao contrário de declaráveis. Eles são todos instanciáveis ​​através do injetor de raiz localizado ao lado do NgModule mesclado.

De volta ao ponto Como qualquer outro serviço, o `HttpClient` instancia em uma classe através de seu construtor via injeção de dependência (DI). Usando DI, o injetor de raiz injeta uma instância de `HttpClient` no construtor. Este serviço permite que os desenvolvedores façam solicitações HTTP com a implementação do serviço.

A implementação do `HttpClient` inclui na matriz de provedores `HttpClientModule` . Contanto que o root NgModule importe o `HttpClientModule` , o `HttpClient` irá instanciar de dentro do escopo da raiz conforme o esperado.

#### Conclusão

É provável que você já tenha aproveitado os NgModules da Angular. Angular torna muito fácil lançar um módulo na matriz de importações do root NgModule. Os utilitários geralmente são exportados dos metadados do módulo importado. Daí porque seus utilitários subitamente se tornam disponíveis na importação dentro do NgModule raiz.

NgModules trabalha em estreita colaboração com módulos JavaScript simples. Um fornece token enquanto um usa para configuração. Seu trabalho em equipe resulta em um sistema robusto e modular exclusivo da estrutura Angular. Ele fornece uma nova camada de organização acima de todos os outros esquemas, excluindo o aplicativo.

Espero que este artigo aprofunde sua compreensão do NgModules. Angular pode alavancar ainda mais esse sistema para alguns dos casos de uso mais exóticos. Este artigo aborda o básico para que você possa aprender mais usando os links abaixo.

## Fontes

*   [Equipa Angular "NgModules". _Google_ . Acessado em 6 de junho de 2018.](https://angular.io/guide/ngmodules)
*   [Koretskyi, Maxim. “Evitando confusões comuns com módulos em Angular”. _Angular em profundidade_ , 10 de agosto de 2017. Acessado em 6 de junho de 2018.](https://blog.angularindepth.com/avoiding-common-confusions-with-modules-in-angular-ada070e6891f)

## Recursos

*   [Documentação Angular](https://angular.io/guide)
*   [Angular em Profundidade](https://blog.angularindepth.com)
*   [Repositório Angular GitHub](https://github.com/angular/angular)
*   [CLI Angular](https://cli.angular.io)