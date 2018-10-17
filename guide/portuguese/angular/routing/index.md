---
title: Routing
localeTitle: Roteamento
---
# Roteamento

#### Motivação

Roteamento é essencial. Muitos aplicativos da web modernos hospedam informações demais para uma página. Os usuários não devem ter que percorrer todo o conteúdo do aplicativo inteiro. Um aplicativo precisa se dividir em seções distinguíveis.

Os usuários priorizam as informações necessárias. O roteamento os ajuda a encontrar a seção do aplicativo com essas informações. Qualquer outra informação útil para outros usuários pode existir em uma rota totalmente separada. Com o roteamento, os dois usuários podem encontrar rapidamente o que precisam. Detalhes irrelevantes ficam obscurecidos por rotas irrelevantes.

O roteamento se destaca na classificação e na restrição do acesso aos dados do aplicativo. Dados confidenciais nunca devem ser exibidos para usuários não autorizados. Entre cada rota, o aplicativo pode intervir. Pode examinar a sessão de um usuário para fins de autenticação. Este exame determina o que a rota processa se deve renderizar de todo. O roteamento oferece aos desenvolvedores a oportunidade perfeita de verificar um usuário antes de prosseguir.

Criar uma lista de rotas também promove a organização. Em termos de desenvolvimento, ele mantém o desenvolvedor pensando em seções distintas. Os usuários também se beneficiam disso, mas são mais desenvolvedores quando navegam no código do aplicativo. Uma lista de roteadores programáticos mostra um modelo preciso do front-end do aplicativo.

Quanto ao Angular, o roteamento ocupa sua própria biblioteca inteira dentro da estrutura. Todas as estruturas front-end modernas suportam roteamento e Angular não é diferente. O roteamento acontece do lado do cliente usando o hash ou o roteamento de localização. Ambos os estilos permitem que o cliente gerencie suas próprias rotas. Nenhuma assistência adicional do servidor é necessária após a solicitação inicial.

O navegador da Web raramente é atualizado usando o roteamento no lado do cliente. Os utilitários do navegador da Web, como marcadores, histórico e a barra de endereços ainda funcionam, apesar de não serem refrescantes. Isso contribui para uma experiência de roteamento que não atrapalha o navegador. Não é mais recarregada a página quando o roteamento é feito para uma página diferente.

Angular adiciona uma camada de abstração sobre as principais tecnologias usadas para roteamento. Este artigo pretende explicar essa abstração. Existem duas estratégias de roteamento em Angular: localização do caminho e hash. Este artigo enfoca a estratégia de localização do caminho, já que é a opção padrão.

Além disso, a localização do caminho pode descartar o roteamento de hash após a liberação completa do [Angular Universal](https://universal.angular.io) . Independentemente disso, as duas estratégias são muito semelhantes na implementação. Aprender um aprende o outro. Hora de começar!

#### Configuração do RouterModule

Utilitários de roteamento exportam com o `RouterModule` disponível a partir de `@angular/router` . Não faz parte da biblioteca principal, pois nem todos os aplicativos exigem roteamento. A maneira mais convencional de introduzir o roteamento é como seu próprio [módulo de recurso](https://angular.io/guide/feature-modules) .

À medida que a complexidade da rota cresce, tê-la como seu próprio módulo promoverá a simplicidade do módulo raiz. Manter a simplicidade estúpida sem comprometer a funcionalidade constitui um bom design para os módulos.

```typescript
import { NgModule } from '@angular/core'; 
 import { RouterModule, Routes } from '@angular/router'; 
 
 import { AComponent } from '../../components/a/a.component'; 
 import { BComponent } from '../../components/b/b.component'; 
 
 // an array of soon-to-be routes! 
 const routes: Routes = []; 
 
 @NgModule({ 
  imports: [ RouterModule.forRoot(routes) ], 
  exports: [ RouterModule ] 
 }) 
 export class AppRoutingModule { } 
```

`.forRoot(...)` é uma função de classe disponível na classe RouterModule. A função aceita uma matriz de objetos de `Route` como `Routes` . `.forRoot(...)` configura rotas para carregamento `.forChild(...)` enquanto sua alternativa `.forChild(...)` configura para carregamento lento.

Carregamento rápido significa que as rotas carregam seu conteúdo no aplicativo desde o início. O carregamento lento acontece por demanda. O foco deste artigo é o carregamento rápido. É a abordagem padrão para carregar em um aplicativo. A definição da classe RouterModule é semelhante ao próximo bloco de código.

```typescript
@NgModule({ 
  // … lots of metadata ... 
 }) 
 export class RouterModule { 
  forRoot(routes: Routes) { 
    // … configuration for eagerly loaded routes … 
  } 
 
  forChild(routes: Routes) { 
    // … configuration for lazily loaded routes … 
  } 
 } 
```

Não se preocupe com os detalhes de configuração que o exemplo omite com comentários. Ter uma compreensão geral fará por agora.

Observe como o AppRoutingModule importa o RouterModule enquanto também o exporta. Isso faz sentido, já que o AppRoutingModule é um módulo de recurso. Ele importa para o módulo raiz como um módulo de recurso. Ele expõe as diretrizes, interfaces e serviços RouterModule para a árvore de componentes raiz.

Isso explica por que o AppRoutingModule deve exportar o RouterModule. Ele faz isso por causa da árvore de componentes subjacente do módulo raiz. Precisa de acesso a esses utilitários de roteamento!

```typescript
import { BrowserModule } from '@angular/platform-browser'; 
 import { NgModule } from '@angular/core'; 
 
 import { AppComponent } from './app.component'; 
 import { AComponent } from './components/a/a.component'; 
 import { BComponent } from './components/b/b.component'; 
 import { AppRoutingModule } from './modules/app-routing/app-routing.module'; 
 
 @NgModule({ 
  declarations: [ 
    AppComponent, 
    AComponent, 
    BComponent 
  ], 
  imports: [ 
    AppRoutingModule, // routing feature module 
    BrowserModule 
  ], 
  providers: [], 
  bootstrap: [ AppComponent ] 
 }) 
 export class AppModule { } 
```

O token AppRoutingModule importa do topo. Seu token é inserido na matriz de importações do módulo raiz. A árvore de componentes raiz pode agora utilizar a biblioteca RouterModule. Isso inclui suas diretivas, interfaces e serviços, como já mencionado. Muito obrigado ao AppRoutingModule por exportar o RouterModule!

Os utilitários do RouterModule serão úteis para os componentes da raiz. O HTML básico para o AppComponent faz uso de uma diretiva: `router-outlet` .

```html

<!-- app.component.html --> 
 
 <ul> 
  <!-- routerLink(s) here --> 
 </ul> 
 <router-outlet></router-outlet> 
 <!-- routed content appends here (AFTER THE ELEMENT, NOT IN IT!) --> 
```

`routerLink` é uma diretiva de atributo do RouterModule. Ele será anexado a cada elemento de `<ul></ul>` assim que as rotas forem configuradas. `router-outlet` é uma diretiva de componente com comportamento interessante. Ele age mais como um marcador para exibir o conteúdo roteado. O conteúdo roteado resulta da navegação para uma rota específica. Geralmente isso significa um único componente conforme configurado no AppRoutingModule

O conteúdo roteado renderiza logo após `<router-outlet></router-outlet>` . Nada aparece dentro dele. Isso não faz muita diferença considerável. Dito isso, não espere que `router-outlet` se comporte como um contêiner para o conteúdo roteado. É apenas um marcador para anexar conteúdo roteado ao Document Object Model (DOM).

#### Roteamento Básico

A seção anterior estabelece a configuração básica do roteamento. Antes que o roteamento real possa acontecer, mais algumas coisas devem ser abordadas

A primeira pergunta a ser abordada é quais rotas esse aplicativo consumirá? Bem, existem dois componentes: AComponent e BComponent. Cada um deve ter seu próprio caminho. Eles podem renderizar a partir da saída do `router-outlet` do AppComponent dependendo do local atual da rota.

O local da rota (ou caminho) define o que é anexado à [origem de](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin) um [site](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin) (por exemplo, http: // localhost: 4200) por meio de uma série de barras ( `/` ).

```typescript
// … same imports from before … 
 
 const routes: Routes = [ 
  { 
    path: 'A', 
    component: AComponent 
  }, 
  { 
    path: 'B', 
    component: BComponent 
  } 
 ]; 
 
 @NgModule({ 
  imports: [ RouterModule.forRoot(routes) ], 
  exports: [ RouterModule ] 
 }) 
 export class AppRoutingModule { } 
```

`http://localhost:4200/A` processa AComponent da `router-outlet` do `router-outlet` do AppComponent. `http://localhost:4200/B` processa BComponent. Você precisa de uma maneira de direcionar para esses locais sem usar a barra de endereços. Um aplicativo não deve depender da barra de endereços do navegador da Web para navegação.

_O CSS global (Cascading Style-sheets) complementa o HTML abaixo dele. O link do roteador de um aplicativo deve ter uma aparência agradável. Este CSS também se aplica a todos os outros exemplos._

```css
/* global styles.css */ 
 
 ul li { 
  cursor: pointer; 
  display: inline-block; 
  padding: 20px; 
  margin: 5px; 
  background-color: whitesmoke; 
  border-radius: 5px; 
  border: 1px solid black; 
 } 
 
 ul li:hover { 
  background-color: lightgrey; 
 } 
```

```html

<!-- app.component.html --> 
 
 <ul> 
  <li routerLink="/A">Go to A!</li> 
  <li routerLink="/B">Go to B!</li> 
 </ul> 
 <router-outlet></router-outlet> 
```

Isso é roteamento básico! Clicar em qualquer das rotas routerLink direciona o endereço da web. Ele reatribui sem atualizar o navegador da web. O Angular's `Router` mapeia o endereço roteado para as `Routes` configuradas no AppRoutingModule. Ele corresponde ao endereço da propriedade `path` de um único objeto `Route` dentro da matriz. A primeira partida sempre vence, portanto, todas as rotas devem estar no final da matriz de `Routes` .

Rotas correspondentes a todos evitam que o aplicativo trave se não puder corresponder à rota atual. Isso pode acontecer na barra de endereços onde o usuário pode digitar em qualquer rota. Para isso, o Angular fornece um valor de caminho curinga `**` que aceita todas as rotas. Essa rota geralmente renderiza um componente PageNotFoundComponent exibindo “Erro 404: página não encontrada”.

```typescript
// … PageNotFoundComponent imported along with everything else … 
 
 const routes: Routes = [ 
  { 
    path: 'A', 
    component: AComponent 
  }, 
  { 
    path: 'B', 
    component: BComponent 
  }, 
  { 
    path: '', 
    redirectTo: 'A', 
    pathMatch: 'full' 
  }, 
  { 
    path: '**', 
    component: PageNotFoundComponent 
  } 
 ]; 
```

O objeto `Route` contendo `redirectTo` impede que o PageNotFoundComponent seja renderizado como resultado de `http://localhost:4200` . Esta é a rota inicial das aplicações. Para corrigir isso, `redirectTo` a rota inicial para `http://localhost:4200/A` `http://localhost:4200/A` indiretamente se torna a nova rota inicial do aplicativo.

O `pathMatch: 'full'` informa ao objeto `Route` para corresponder à rota inicial ( `http://localhost:4200` ). Corresponde ao caminho vazio.

Estes dois novos objetos `Route` vão no final do array desde que o primeiro match vence. O último elemento da matriz ( `path: '**'` ) sempre coincide, então é o último.

Há uma última coisa que vale a pena abordar antes de prosseguir. Como o usuário sabe onde ele está no aplicativo em relação à rota atual? Claro que pode haver conteúdo específico para a rota, mas como o usuário deve fazer essa conexão? Deve haver algum tipo de destaque aplicado aos links do roteador. Dessa forma, o usuário saberá qual rota está ativa para a página da Web especificada.

Essa é uma correção fácil. Quando você clica em um elemento `routerLink` , o Angular's `Router` atribui o _foco_ a ele. Esse foco pode acionar determinados estilos que fornecem um feedback útil ao usuário. A diretiva `routerLinkActive` pode rastrear esse foco para o desenvolvedor.

```html

<!-- app.component.html --> 
 
 <ul> 
  <li routerLink="/A" routerLinkActive="active">Go to A!</li> 
  <li routerLink="/B" routerLinkActive="active">Go to B!</li> 
 </ul> 
 <router-outlet></router-outlet> 
```

A atribuição correta de `routerLinkActive` representa uma string de classes. Este exemplo retrata apenas uma classe ( `.active` ), mas qualquer número de classes delimitadas por espaço pode ser aplicado. Quando o `Router` atribui o _foco_ a um routerLink, as classes delimitadas por espaço se aplicam ao elemento host. Quando o foco se afasta, as classes são removidas automaticamente.

```css
/* global styles.css */ 
 
 .active { 
  background-color: lightgrey !important; 
 } 
```

Os usuários agora podem reconhecer facilmente como a rota atual e o conteúdo da página coincidem. `lightgrey` destaque do `lightgrey` aplica-se ao routerLink que corresponde à rota atual. `!important` garante que o destaque substitua os estilos inline.

#### Rotas parametrizadas

Rotas não precisam ser completamente codificadas. Eles podem conter variáveis ​​dinâmicas referenciáveis ​​do componente correspondente ao objeto `Route` . Essas variáveis ​​são declaradas como parâmetros ao gravar o caminho da rota.

Os parâmetros de rota são opcionais ou obrigatórios para corresponder a uma `Route` específica. Depende de como uma rota grava seus parâmetros. Existem duas estratégias: parametrização matricial e tradicional.

A parametrização tradicional começa no array `Routes` configurado no AppRoutingModule.

```typescript
const routes: Routes = [ 
  // … other routes … 
  { 
    path: 'B', 
    component: BComponent 
  }, 
  { 
    path: 'B/:parameter', 
    component: BComponent 
  }, 
  // … other routes … 
 ]; 
```

Concentre-se nas duas rotas BComponent. Parametrização acabará por ocorrer em ambas as rotas.

A parametrização tradicional ocorre no segundo BComponent `Route` . `B/:parameter` contém o `parameter` parâmetro conforme indicado com `:` O que quer que segue, o cólon marca o nome do parâmetro. O `parameter` parâmetro é necessário para que o segundo BComponent `Route` coincida.

`parameter` lê o valor de tudo o que é passado para a rota. Roteamento para `http://localhost:4200/B/randomValue` atribuirá `parameter` o valor de `randomValue` . Este valor pode incluir qualquer coisa além de outro `/` . Por exemplo, `http://localhost:4200/B/randomValue/blahBlah` não acionará o segundo BComponent `Route` . O PageNotFoundComponent processa em vez disso.

O BComponent pode referenciar parâmetros de rota de sua classe de componentes. Ambas as abordagens de parametrização (matricial e tradicional) produzem os mesmos resultados no BComponent. Antes de ver o BComponent, examine a forma da matriz de parametrização abaixo.

```typescript
// app.component.ts 
 
 import { Component } from '@angular/core'; 
 import { Router } from '@angular/router'; 
 
 @Component({ 
  selector: 'app-root', 
  templateUrl: './app.component.html' 
 }) 
 export class AppComponent { 
  constructor(private router: Router) { } 
 
  routeMatrixParam(value: string) { 
    if (value) 
      this.router.navigate(['B', { parameter: value }]); // matrix parameter 
    else 
      this.router.navigate(['B']); 
  } 
 
  routeAddressParam(value: string) { 
    this.router.navigate(['B', value]); 
  } 
 } 
```

O sistema de injeção de dependência do Angular fornece uma instanciação do `Router` . Isso permite que o componente seja roteado programaticamente. A função `.navigate(...)` aceita uma matriz de valores que é resolvida para um caminho _roteável_ . Algo como `.navigate(['path', 'to', 'something'])` resolve para `http://localhost:4200/path/to/something` . `.navigate(...)` adiciona marcas `/` delimitações de caminho ao normalizar a matriz em um caminho _roteável_ .

A segunda forma de parametrização ocorre em `routeMatrixParam(...)` . Veja esta linha de código: `this.router.navigate(['B', { parameter: value }])` . Esta forma de `parameter` é um parâmetro da matriz. Seu valor é opcional para o primeiro BComponent `Route` corresponder ( `/B` ). A `Route` corresponde independentemente da presença do parâmetro no caminho.

O `routeAddressParam(...)` resolve uma rota que corresponde à abordagem de parametrização `http://localhost:4200/B/randomValue` . Essa estratégia tradicional precisa de um parâmetro para corresponder à segunda rota BComponent ( `B/:parameter` :).

A estratégia de matriz diz respeito a `routeMatrixParam(...)` . Com ou sem um parâmetro de matriz em seu caminho, a primeira rota BComponent ainda corresponde. O `parameter` parâmetro passa para o BComponent como na abordagem tradicional.

Para ter total noção do código acima, aqui está o modelo HTML correspondente.

```html

// app.component.html 
 
 <ul> 
  <li routerLink="/A">Go to A!</li> 
  <li> 
    <input #matrixInput> 
    <button (click)="routeMatrixParam(matrixInput.value)">Matrix!</button> 
  </li> 
  <li> 
    <input #paramInput> 
    <button (click)="routeAddressParam(paramInput.value)">Param!</button> 
  </li> 
 </ul> 
 <router-outlet></router-outlet> 
```

No modelo, os valores são aceitos como entrada de texto. A entrada injeta no caminho da rota como um parâmetro. Dois conjuntos separados de caixas existem para cada estratégia de parametrização (tradicional e matriz). Com todas as peças juntas, é hora de examinar a classe de componentes BComponent.

```typescript
// b.component.ts 
 
 import { Component, OnInit } from '@angular/core'; 
 import { ActivatedRoute, ParamMap } from '@angular/router'; 
 
 @Component({ 
  selector: 'app-b', 
  template: ` 
  <p>Route param: {{ currParam }}</p> 
  ` 
 }) 
 export class BComponent implements OnInit { 
  currParam: string = ""; 
 
  constructor(private route: ActivatedRoute) { } 
 
  ngOnInit() { 
    this.route.params.subscribe((param: ParamMap) => { 
      this.currParam = param['parameter']; 
    }); 
  } 
 } 
```

BComponent resulta de uma das duas rotas BComponent no AppRoutingModule. `ActivatedRoute` instancia em um conjunto de informações úteis relacionadas à rota atual. Ou seja, a rota que causou a renderização do BComponent. `ActivatedRoute` instancia via injeção de dependência visando o construtor da classe.

O campo `.params` de `ActivatedRoute.params` retorna um `Observable` que emite os parâmetros da rota. Observe como as duas abordagens de parametrização diferentes resultam no `parameter` parameter. O `Observable` retornado o emite como um par de valores-chave dentro de um objeto `ParamMap` .

Entre as duas abordagens de parametrização, o `parameter` parâmetro foi resolvido de forma idêntica. O valor emite de `ActivatedRoute.params` apesar da abordagem para parametrização.

A barra de endereço distingue os resultados finais de cada abordagem. A parametrização de matriz (opcional para correspondência de `Route` ) produz o endereço: `http://localhost:4200/B;parameter=randomValue` . A parametrização tradicional (necessária para correspondência de `Route` ) resulta em: `http://localhost:4200/B/randomValue` .

De qualquer forma, os mesmos resultados do BComponent. A diferença real: uma correspondência diferente de BComponent `Route` . Isso depende inteiramente da estratégia de parametrização. A abordagem matricial garante que os parâmetros sejam opcionais para a correspondência de `Route` . A abordagem tradicional requer deles.

#### Rotas Aninhadas

`Routes` podem formar uma hierarquia. No DOM, isso envolve uma `router-outlet` mãe que processa pelo menos uma `router-outlet` . Na barra de endereços, parece com isso: `http://localhost/parentRoutes/childRoutes` . Na configuração `Routes` , a propriedade `children: []` indica um objeto `Route` como tendo rotas aninhadas (filho).

```typescript
import { NgModule } from '@angular/core'; 
 import { RouterModule, Routes } from '@angular/router'; 
 
 import { NestComponent } from '../../components/nest/nest.component'; 
 import { AComponent } from '../../components/nest/a/a.component'; 
 import { BComponent } from '../../components/nest/b/b.component'; 
 
 const routes: Routes = [ 
  { 
    path: 'nest', 
    component: NestComponent, 
    children: [ 
      { path: 'A', component: AComponent }, 
      { path: 'B', component: BComponent } 
    ] 
  } 
 ]; 
 
 @NgModule({ 
  imports: [ RouterModule.forRoot(routes) ], 
  exports: [ RouterModule ] 
 }) 
 export class AppRoutingModule { } 
```

```typescript
// nest.component.ts 
 
 import { Component } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-nest', 
  template: ` 
  <ul> 
    <li routerLink="./A">Go to A!</li> 
    <li routerLink="./B">Go to B!</li> 
  </ul> 
  <router-outlet></router-outlet> 
  ` 
 }) 
 export class NestComponent { } 
```

O NestComponent renderiza uma `router-outlet` depois de renderizar a si mesmo a partir de outra `router-outlet` nível raiz no AppComponent. A `router-outlet` do roteador do modelo NestComponent pode renderizar um componente ( `/nest/A` ) ou BComponent ( `/nest/B` ).

O AppRoutingModule reflete esse aninhamento no objeto `Route` do NestComponent. O campo `children: []` contém uma matriz de objetos `Route` . Esse objeto `Route` também pode aninhar rotas em seus `children: []` campos. Isso pode continuar para quantas camadas de rotas aninhadas. O exemplo acima mostra duas camadas de aninhamento.

Cada `routerLink` contém um `./` em comparação com `/` . A `.` garante que o routerLink seja anexado ao caminho da rota. O routerLink substitui completamente o caminho de outra forma. Depois de rotear para `/nest` `.` expande para `/nest` .

Isso é útil para rotear para `/nest/A` ou `/nest/B` partir da rota `.nest` . `A` e `B` constituem rotas aninhadas de `/nest` . Roteamento para `/A` ou `/B` retorna PageNotFound. `/nest` deve prefixar as duas rotas.

Dê uma olhada no AppComponent que contém a `router-outlet` nível raiz em seu modelo. O AppComponent é a primeira camada de aninhamento, enquanto o NestComponent é o segundo.

```typescript
import { Component } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-root', 
  template: ` 
  <ul> 
    <li routerLink="/nest">Go to nested routes!</li> 
    <li routerLink="/">Back out of the nested routes!</li> 
  </ul> 
  <router-outlet></router-outlet> 
  ` 
 }) 
 export class AppComponent { } 
```

Dentro do objeto `Route` , o `children: []` contém mais duas rotas aninhadas. Eles resultam em ACcomponent e BComponent ao rotear de `/nest` como discutido anteriormente. Esses componentes são muito simples para demonstração. `<li routerLink="/">...</li>` permite que você navegue pelas rotas de aninhamento para redefinir o exemplo, navegando até a rota de origem.

```typescript
import { Component } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-a', 
  template: ` 
  <p>a works!</p> 
  ` 
 }) 
 export class AComponent { } 
```

```typescript
import { Component } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-b', 
  template: ` 
  <p>b works!</p> 
  ` 
 }) 
 export class BComponent { } 
```

A matriz `children: []` aceita o objeto `Route` como elementos. `children: []` pode se aplicar a qualquer um desses elementos também. Os filhos desses elementos podem continuar aninhando-se. Esse padrão pode continuar por quantas camadas de aninhamento. Insira uma `router-outlet` no modelo para cada camada de roteamento aninhado.

As técnicas de roteamento se aplicam independentemente do nível de aninhamento do objeto `Route` . As técnicas de parametrização diferem em apenas um aspecto. As rotas secundárias só podem acessar os parâmetros de seus pais por meio de `ActivatedRoute.parent.params` . `ActivatedRoute.params` tem como alvo o mesmo nível de rotas aninhadas. Isso exclui rotas no nível dos pais e seus parâmetros.

`Route` proteções de `Route` são especialmente adequadas para roteamento aninhado. Um objeto `Route` pode restringir o acesso a todas as suas rotas aninhadas (filho).

#### Rotas Guardadas

Aplicativos da Web geralmente consistem em dados públicos e privados. Ambos os tipos de dados tendem a ter suas próprias páginas com rotas _protegidas_ . Essas rotas permitem / restringem o acesso, dependendo dos privilégios do usuário. Usuários não autorizados podem interagir com uma rota vigiada. A rota deve bloquear o usuário se ele tentar acessar seu conteúdo roteado.

Angular fornece um conjunto de proteções de autenticação que podem ser anexadas a qualquer rota. Esses métodos são acionados automaticamente dependendo de como o usuário interage com a rota protegida.

*   `canActivate(...)` - dispara quando o usuário tenta acessar uma rota
    
*   `canActivateChild(...)` - dispara quando o usuário tenta acessar as rotas aninhadas (rota) de uma rota
    
*   `canDeactivate(...)` - dispara quando o usuário tenta sair de uma rota
    

Os métodos de guarda angular estão disponíveis em `@angular/router` . Para ajudá-los a autenticar, eles podem, opcionalmente, receber alguns parâmetros. Tais parâmetros não são injetados via injeção de dependência. Sob o capô, cada valor é passado como um argumento para o método de guarda invocado.

*   `ActivatedRouteSnapshot` - disponível para todos os três
    
*   `RouterStateSnapshot` - disponível para todos os três
    
*   `Component` - disponível para `canDeactivate(...)`
    

`ActivatedRouteSnapshot` fornece acesso aos parâmetros de rota da rota vigiada. `RouterStateSnapshot` expõe o endereço da `RouterStateSnapshot` da URL (localizador uniforme de recursos) correspondente à rota. `Component` referência ao componente renderizado pela rota.

Para proteger uma rota, uma classe que implemente os métodos de proteção precisa primeiro existir como um serviço. O serviço pode ser injetado no AppRoutingModule para proteger suas `Routes` . O valor do token para o serviço pode ser injetado em qualquer objeto de `Route` .

```typescript
import { NgModule } from '@angular/core'; 
 import { RouterModule, Routes } from '@angular/router'; 
 
 import { AuthService } from '../../services/auth.service'; 
 import { UserService } from '../../services/user.service'; 
 
 import { PrivateNestComponent } from '../../components/private-nest/private-nest.component'; 
 import { PrivateAComponent } from '../../components/private-nest/private-a/private-a.component'; 
 import { PrivateBComponent } from '../../components/private-nest/private-b/private-b.component'; 
 
 const routes: Routes = [ 
  { 
    path: 'private-nest', 
    component: PrivateNestComponent, 
    canActivate: [ AuthService ], // !!! 
    canActivateChild: [ AuthService ], // !!! 
    canDeactivate: [ AuthService ], // !!! 
    children: [ 
      { path: 'private-A', component: PrivateAComponent }, 
      { path: 'private-B', component: PrivateBComponent } 
    ] 
  } 
 ]; 
 
 @NgModule({ 
  imports: [ RouterModule.forRoot(routes) ], 
  exports: [ RouterModule ], 
  providers: [ 
    AuthService, 
    UserService 
  ] 
 }) 
 export class AppRoutingModule { } 
```

`canActivate` , `canActivateChild` e `canDeactivate` implement from AuthService. A implementação do serviço será mostrada em breve ao lado da implementação do UserService.

UserService fornece as informações necessárias para autenticar um usuário. As implementações do método de proteção AuthService executam a autenticação. O AppRoutingModule deve incluir os dois serviços em sua matriz de provedores. Isso é para que o injetor do módulo saiba como instanciá-los.

Rotas aninhadas existem fora do caminho `/private-nest` . O objeto `Route` para `/private-nest` contém mais alguns novos campos. Seus nomes devem parecer familiares enquanto refletem seus métodos de guarda correspondentes.

Cada campo dispara a implementação do método do seu homônimo dentro do serviço quando acionado. Qualquer número de serviços pode preencher essa matriz também. A implementação do método de cada serviço é testada. Eles devem retornar um valor booleano ou um `Observable` que emite um valor booleano.

Veja as implementações AuthService e UserService abaixo.

```typescript
// user.service.ts 
 
 import { Injectable } from '@angular/core'; 
 import { Router } from '@angular/router'; 
 
 class TheUser { 
  constructor(public isLoggedIn: boolean = false) { } 
 
  toggleLogin() { 
    this.isLoggedIn = true; 
  } 
 
  toggleLogout() { 
    this.isLoggedIn = false; 
  } 
 } 
 
 const globalUser = new TheUser(); 
 
 @Injectable({ 
  providedIn: 'root' 
 }) 
 export class UserService { 
  theUser: TheUser = globalUser; 
 
  constructor(private router: Router) { } 
 
  get isLoggedIn() { 
    return this.theUser.isLoggedIn; 
  } 
 
  login() { 
    this.theUser.toggleLogin(); 
  } 
 
  logout() { 
    this.theUser.toggleLogout(); 
    this.router.navigate(['/']); 
  } 
 } 
```

A mesma instância de `TheUser` é passada a cada instanciação do UserService. `TheUser` fornece acesso a `isLoggedIn` para determinar o status de login do usuário. Dois outros métodos públicos permitem que o UserService alterne o valor de `isLoggedIn` . Isso é para que o usuário possa efetuar login e logout.

Você pode pensar em `TheUser` como uma instância global. `UserService` é uma interface instantânea que configura este global. As alterações no `TheUser` partir de uma instanciação do `UserService` aplicam-se a todas as outras instâncias do `UserService` . `UserService` implementa no AuthService para fornecer acesso a `isLoggedIn` de `TheUser` para autenticação.

```typescript
import { Component, Injectable } from '@angular/core'; 
 import { CanActivate, CanActivateChild, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'; 
 
 import { UserService } from './user.service'; 
 
 @Injectable({ 
  providedIn: 'root' 
 }) 
 export class AuthService implements CanActivate, CanActivateChild, CanDeactivate<Component> { 
  constructor(private user: UserService) {} 
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) { 
    if (this.user.isLoggedIn) 
      return true; 
    else 
      return false; 
  } 
 
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) { 
    return this.canActivate(route, state); 
  } 
 
  canDeactivate(component: Component, route: ActivatedRouteSnapshot, state: RouterStateSnapshot) { 
    if (!this.user.isLoggedIn || window.confirm('Leave the nest?')) 
      return true; 
    else 
      return false; 
  } 
 } 
```

AuthService implementa todo método de guarda importado de `@angular/router` . Cada método de guarda é mapeado para um campo correspondente no objeto `Route` do PrivateNestComponent. Uma instância do UserService instancia do construtor AuthService. AuthService determina se um usuário pode continuar usando `isLoggedIn` exposto pelo UserService.

Retornando `false` de um guarda instrui a rota para bloquear o usuário do roteamento. Um valor de retorno de `true` permite que o usuário prossiga para o destino da rota. Se mais de um serviço autenticar, todos eles deverão retornar true para permitir o acesso. `canActivateChild` protege as rotas secundárias de PrivateNestComponent. Esse método de proteção é considerado para usuários que ignoram PrivateNestComponent por meio da barra de endereços.

Os parâmetros do método Guard passam automaticamente após a chamada. Embora o exemplo não faça uso deles, eles fornecem informações úteis da rota. O desenvolvedor pode usar essas informações para ajudar a autenticar o usuário.

O AppComponent também instancia o UserService para uso direto em seu modelo. A instanciação UserService de AppComponent e AuthService referencia a mesma classe de usuário ( `TheUser` ).

```typescript
import { Component } from '@angular/core'; 
 
 import { UserService } from './services/user.service'; 
 
 @Component({ 
  selector: 'app-root', 
  template: ` 
  <ul> 
    <li routerLink="/private-nest">Enter the secret nest!</li> 
    <li routerLink="/">Leave the secret nest!</li> 
    <li *ngIf="user.isLoggedIn"><button (click)="user.logout()">LOGOUT</button></li> 
    <li *ngIf="!user.isLoggedIn"><button (click)="user.login()">LOGIN</button></li> 
  </ul> 
  <router-outlet></router-outlet> 
  ` 
 }) 
 export class AppComponent { 
  constructor(private user: UserService) { } 
 } 
```

O UserService lida com toda a lógica do AppComponent. O AppComponent diz respeito principalmente ao seu modelo. Um UserService instancia como `user` do construtor de classe. `user` dados do `user` determinam a funcionalidade do modelo.

#### Conclusão

O roteamento consegue um bom equilíbrio entre organizar e restringir seções do aplicativo. Um aplicativo menor, como um blog ou uma página de tributo, pode não exigir nenhum roteamento. Mesmo assim, incluindo um pouco de roteamento hash não poderia ferir. Um usuário só pode querer referenciar parte da página depois de tudo.

O Angular aplica sua própria biblioteca de roteamento construída sobre a [API de histórico](https://developer.mozilla.org/en-US/docs/Web/API/History_API) do HTML5. Essa API omite o roteamento hash para usar os `pushState(...)` e `replaceState(...)` . Eles alteram o URL do endereço da web sem atualizar a página. A estratégia de roteamento de localização de caminho padrão no Angular funciona dessa maneira. A definição de `RouterModule.forRoot(routes, { useHash: true })` habilita o roteamento de hash, se preferir.

Este artigo enfocou a estratégia de localização de caminho padrão. Independentemente da estratégia, muitos utilitários de roteamento estão disponíveis para rotear um aplicativo. O `RouterModule` expõe esses utilitários através de suas exportações. Rotas básicas, parametrizadas, aninhadas e protegidas são todas possíveis utilizando o RouterModule. Para implementações mais avançadas, incluindo rotas carregadas de forma lenta, veja os links abaixo.

## Fontes

*   [Equipa Angular “Roteamento e Navegação”. _Google_ . Acessado em 8 de junho de 2018.](https://angular.io/guide/router)
*   [Hussain, Asim. "Angular 5: Roteamento". _codecraft.tv_ . Acessado em 8 de junho de 2018.](https://codecraft.tv/courses/angular/routing)
*   [Smith, Peter. "3 Tipos de Carregamento de Rota em Angular, Explicados em 500 palavras". _Upstate Interactive_ , 3 de maio de 2017. Acessado em 8 de junho de 2018.](https://blog.upstate.agency/3-types-of-route-loading-in-angular-explained-in-500ish-words-f22976e1f60b)
*   [Koretskyi, Maxim. “Evitando confusões comuns com módulos em Angular”. _Angular em profundidade_ , 10 de agosto de 2017. Acessado em 8 de junho de 2018.](https://blog.angularindepth.com/avoiding-common-confusions-with-modules-in-angular-ada070e6891f)

## Recursos

*   [Documentação Angular](https://angular.io/guide)
*   [Roteamento e Navegação](https://angular.io/guide/router)
*   [Angular 5: Roteiro de Tutorial de Asim Hussain](https://codecraft.tv/courses/angular/routing/overview)
*   [Angular em Profundidade](https://blog.angularindepth.com)
*   [Repositório Angular GitHub](https://github.com/angular/angular)
*   [CLI Angular](https://cli.angular.io)