---
title: Reactive Extensions
localeTitle: Extensões reativas
---
# Extensões reativas em angular

#### Motivação

Extensões reativas para JavaScript (RxJS) é uma biblioteca para fluxos de dados _observáveis_ . O RxJS é instalado com o Angular após a execução da linha de comando do `ng new [name-of-application]` . Isso usa a interface de linha de comando (CLI) Angular. O RxJS suplementa como os dados são dinamizados por meio de um `Observable` . O objeto `Observable` facilita o fluxo de dados _iteráveis_ .

Fluxos de dados não são o caso de uso principal. Afinal, os fluxos de dados são fluxos de eventos paralelos. Os eventos são emitidos para que um aplicativo saiba quando os dados chegam. Enquanto os fluxos de eventos formam o núcleo do que o RxJS complementa, este artigo também se refere a eles como fluxos de dados.

Os fluxos são executados de forma síncrona (imediata) ou assincronamente (hora extra). O RxJS manipula ambos os casos com facilidade através do fluxo de dados `Observable` . Assincronia estrita é toggleable embora. Trabalhando com memória, os dados _iteráveis_ acontecem imediatamente enquanto a busca de dados externos leva tempo. O Angular suporta a biblioteca RxJS para que possa lidar com ambos os casos de uso com fluxos de dados.

#### Programação reativa

Antes de mergulhar, é importante entender o paradigma que sustenta a biblioteca RxJS. Como mencionado, ele funciona através do objeto `Observable` que simplifica os dados emissores de eventos.

Funções RxJS ao redor da base `Observable` . Sua biblioteca inteira complementa o que pode fazer. O RxJS inclui até mesmo outros objetos, incluindo `Subject` , `Subscription` e `Observer` . Cada um é sua própria variante personalizada da base `Observable` .

O RxJS surgiu do paradigma da Programação Reativa. Este paradigma introduziu o padrão _observável_ . Nela existe essa idéia chave: um único `Observable` emite enquanto todos os seus `Observer` são notificados. `Observer` _assinam os_ `Observable` para receber notificação. Esta notificação pode significar várias coisas.

Pode indicar mudança de dados ou chegada de dados, conforme comumente descrito neste artigo. Pode sinalizar uma mudança em alguma parte do aplicativo que afeta os `Observer` .

Esse padrão _observável_ também se esforça para desacoplar conceitos. Um `Observable` deve poder funcionar sem qualquer `Observer` e vice-versa. Isso geralmente significa que eles podem ser autônomos em vez de funcionar totalmente sem o outro.

Se curioso, você pode aprender mais sobre os fundamentos da Programação Reativa lendo [este artigo da Wikipedia](https://en.wikipedia.org/wiki/Reactive_programming) . Esta seção aborda o que é necessário para o restante do artigo.

#### Observáveis

Para reiterar rapidamente, os `Observable` podem ser _observados_ . Isso para que um `Observable` forneça feedback para suas dependências com base em um fluxo de dados. Em RxJS, o `Observable` é sua própria função de fábrica usada para criar objetos `Observable` . Seu plano básico é o seguinte.

```typescript
import { Observable } from 'rxjs'; 
 
 const observable = Observable.create((source) => { 
  source.next(data); 
 }); 
```

`.next` passa dados enquanto emite um evento a seus observadores. Um `Observable` emite dados de dentro de seu retorno de chamada `.create` usando `.next` . Aceita um argumento representando os dados a serem emitidos. O `Observable` ainda não foi implementado no JavaScript. O RxJS fornece uma substituição da sua biblioteca.

O próximo passo é os observadores. Para dizer a uma função ou objeto para _observar_ um `Observable` , a seguinte sintaxe é usada: `observable.subscribe(observer)` . Outra maneira de ver isso é o `producer.subscribe(consumer)` . Observables _produzem_ dados chamando `.next` . Os consumidores são então notificados enquanto recebem os dados.

```typescript
import { Observable } from 'rxjs'; 
 
 const observable = Observable.create((source) => { 
  source.next("Hello"); 
  source.next("World!"); 
 }); 
 
 observable.subscribe((word) => console.log(word)); 
 // console output 
 /* 
 Hello 
 World! 
 */ 
```

Duas invocações de `.next` ocorrem dentro do callback `.create` do `Observable` (produtor de dados). Isso resulta em duas saídas de console separadas do observador (consumidor de dados).

As duas invocações de `.next` representam um fluxo síncrono de dados. Os fluxos conceituam os dados como um fluxo linear em ordem. Ele é resolvido de forma síncrona ou assíncrona, dependendo da disponibilidade dos dados.

Se os dados que compõem um fluxo estiverem prontamente disponíveis, serão executados de forma síncrona. Caso contrário, o fluxo é resolvido de forma assíncrona ao longo do tempo. A ordem dos dados em cada caso é sempre a mesma, dependendo da invocação de `.next` dentro do observável.

Um `Observable` opera como uma fila. Chamar `.next` em um dado de dados o empurra para o final da fila. Os dados aparecem na frente, uma vez resolvidos.

Fluxos de dados `Observable` têm grande apelo. Eles são deterministas em sua ordem e executam sensatamente, dependendo da disponibilidade de dados. Além disso, qualquer número de observadores pode _observar_ a fonte de dados `Observable` . Isso significa que os dados podem produzir uma vez e emitem em qualquer lugar, tudo em uma operação.

As funções de retorno de chamada não são a única maneira de consumir dados. Observáveis ​​podem encadear uns aos outros como produtores e consumidores.

```typescript
const observableI = Observable.create((source) => { 
  source.next("Hello World!"); 
 }); 
 
 const observableII = new Observable().subscribe((v) => console.log(v)); 
 
 observableI.subscribe(observableII); 
 // console output 
 /* 
 Hello World! 
 */ 
```

`.subscribe` está no objeto `Observable` . Você pode chamá-lo com um `Observable` como sua fonte (produtor) e outro observável como argumento (consumidor). Os dados podem fluir (emitir) através de qualquer número de observáveis.

#### Extensões reativas para JavaScript (RxJS)

Streaming de dados é bom, mas qual é o ponto se os observáveis ​​não podem editar o fluxo? Isto onde a biblioteca RxJS entra em jogo. Ele fornece operadores que executam várias mutações no fluxo de dados.

Angular alavanca esses operadores para transformar os dados recebidos. Os desenvolvedores podem reduzir os dados desnecessários de um fluxo de entrada usando os operadores RxJS. Isso economiza memória e alivia a necessidade de lógica de transformação adicional.

RxJS oferece desvios do padrão `Observable` como `Subject` , `Subscription` e `Observer` . Pense nesses desvios como sabores especiais do `Observable` tradicional. Eles não são necessários para fazer uso da biblioteca. Dito isso, variantes como `Subject` têm casos de uso incríveis que ultrapassam o padrão `Observable` .

Este artigo fica com o padrão `Observable` . Todos os operadores de fluxo de dados do RxJS trabalham através do `Observable` .

Muitos operadores RxJS principais originaram-se do Array Extras do JavaScript. O protótipo do objeto Array contém muitos paralelos com a biblioteca RxJS. Estes são também conhecidos como 'Extras'. Matrizes são estruturas similares a fluxos semelhantes aos fluxos de dados observáveis.

Para entender melhor os operadores do RxJS, este artigo abordará brevemente os Array Extras do JavaScript. Cada um funciona de forma quase idêntica à sua contraparte RxJS. A diferença é simplesmente o formato dos dados (array iterável vs fluxo iterável).

#### Extras de matriz

Arrays contêm muitos métodos de utilidade. Esses métodos são chamados de Extras de Matriz. Todos eles existem no protótipo do objeto Array. A lista abaixo contém cinco paralelos Extras com RxJS.

*   `.reduce`
*   `.filter`
*   `.map`
*   `.every`
*   `.forEach`

Para cada exemplo, o array itera-se para produzir um resultado final.

`.reduce` minimiza uma matriz em um único valor. `.filter` apara um array com avaliação booleana. `.map` transforma uma matriz elemento por elemento. `.every` avalia true ou false para o array inteiro, dependendo de uma condição booleana. `.forEach` itera através de elementos de uma matriz.

Arrays model streams. Estão em ordem um do outro e iteram um por um. Os observáveis ​​simplificam os elementos de dados para seus observadores de maneira semelhante. É por isso que o RxJS inclui uma contraparte lógica para cada Array Extra em sua biblioteca. Concedido, o RxJS fornece muito mais de seus próprios operadores do que o Array Extras.

#### Operadores básicos de RxJS

Há, literalmente, um conjunto inteiro de operadores de RxJS. Este artigo enfoca os listados abaixo que o Array Extras inspirou.

*   `.reduce`
*   `.filter`
*   `.map`
*   `.every`
*   `.forEach`

Nada mudou da lista anterior. Sua compreensão do Array Extras se aplica aos operadores RxJS. O único problema é uma função chamada `.pipe` que será usada nos próximos exemplos. `.pipe` correntes RxJS operadores juntos. Os resultados do operador anterior seguem para o próximo até o operador final. Os dados resultantes são então emitidos a partir do fluxo observável.

Observe o exemplo padrão abaixo. Use-o para comparação para o impacto de cada operador no fluxo de dados emitido.

```typescript
import { Observable, from } from 'rxjs'; 
 
 const stream: number[] = [1, 2, 3, 4, 5]; 
 
 const observable: Observable<number> = from(stream); 
 observable.subscribe((val: number) => console.log(val)); 
 
 // console output 
 /* 
 1 
 2 
 3 
 4 
 5 
 */ 
```

`.from` converte uma matriz em uma `Observable` objeto que chama `.next` em cada elemento da matriz. A função `.pipe` aceita qualquer número de argumentos como operadores de matriz. É onde todos os operadores são implementados. Os operadores executam dados simplificados em ordem de implementação como argumentos para `.pipe` .

##### Reduzir

`.reduce` minimiza o fluxo de dados em um único valor antes de emitir.

```typescript
import { reduce } from 'rxjs/operators'; 
 
 const stream: number[] = [1, 2, 3, 4, 5]; 
 
 const observable: Observable<number> = from(stream).pipe( 
  reduce((accum, val) => (accum + val)) 
 ); 
 observable.subscribe((val: number) => console.log(val)); 
 
 // console output 
 /* 
 15 
 */ 
```

##### Filtro

`.filter` um fluxo, eliminando valores de fluxo que não satisfazem sua condição.

```typescript
import { filter } from 'rxjs/operators'; 
 
 const stream: number[] = [1, 2, 3, 4, 5]; 
 
 const observable: Observable<number> = from(stream).pipe( 
  filter((val) => (val % 2 === 0)) // filters out odd numbers 
 ); 
 observable.subscribe((val: number) => console.log(val)); 
 
 // console output 
 /* 
 2 
 4 
 */ 
```

##### Mapa

`.map` segmenta e transforma cada valor de fluxo em andamento.

```typescript
const stream: number[] = [1, 2, 3, 4, 5]; 
 
 const observable: Observable<number> = from(stream).pipe( 
    map((val) => (val + 1)) 
 ); 
 observable.subscribe((val: number) => console.log(val)); 
 
 // console output 
 /* 
 2 
 3 
 4 
 5 
 6 
 */ 
```

##### Desafio: todos e para cada

Com o conhecimento de `.every` e `.forEach` Array Extras, tente implementá-los como operadores RxJS. Sinta-se à vontade para usar os exemplos anteriores para orientação. Um pouco de prática vai um longo caminho depois de muita leitura!

#### HTTP em Angular

Esta seção traz RxJS e Angular juntos para mostrar como eles interagem. Normalmente, um serviço fornecido pela Angular fornecerá o `Observable` . O fluxo de dados do `Observable` pode então sofrer mutação usando operadores `.pipe` com `.pipe` .

Angular fornece um serviço `HttpClient` através de `@angular/common/http` . `HttpClientModule` também é de `@angular/common/http` e exporta o serviço `HttpClient` . O módulo raiz do aplicativo deve importar o `HttpClientModule` . Isso torna o `HttpClientModule` _injetável_ de qualquer lugar no aplicativo.

O serviço `HttpClientModule` faz solicitações HTTP. Essas solicitações são assíncronas. O que os torna interessantes para o Angular é como o pedido é tratado. Um `Observable` é retornado com cada solicitação. O RxJS pode tirar isso de lá.

O próximo exemplo usa uma API pública criada pelo [Typicode](https://jsonplaceholder.typicode.com) . A API fornece uma matriz de 100 elementos por solicitação `GET` assíncrona.

```typescript
// ./models/post.model.ts 
 
 export interface Post { 
  userId: number; 
  id: number; 
  title: string; 
  body: string; 
 } 
```

```typescript
// ./services/json.service.ts 
 
 import { HttpClient } from '@angular/common/http'; 
 import { Injectable } from '@angular/core'; 
 
 import { Observable, from } from 'rxjs'; 
 import { switchMap, map, filter, reduce } from 'rxjs/operators'; 
 
 import { Post } from '../models/post.model'; 
 
 @Injectable({ 
  providedIn: 'root' 
 }) 
 export class JsonService { 
  constructor(private http: HttpClient) { } 
 
  getPostsByUserId(id: number): Observable<any> { 
    const trim$ = (stream) => from(stream) 
      .pipe( 
        filter((post: Post) => +post.userId === +id), 
        map((post: Post) => ({ title: post.title, body: post.body })), 
        reduce((accum: Post[], post: Post) => accum.concat([post]), []) 
      ); 
 
    return this.http.get("https://jsonplaceholder.typicode.com/posts") 
      .pipe( 
        switchMap((value) => trim$(value)) 
      ); 
  } 
 } 
```

```typescript
// ./components/example/example.component.ts 
 
 import { Component } from '@angular/core'; 
 
 import { JsonService } from '../../services/json.service'; 
 import { Post } from '../../models/post.model'; 
 
 @Component({ 
  selector: 'app-example', 
  template: ` 
  <h1>Request User Posts</h1> 
  <span>User: </span><input #userInput> 
  <button (click)="requestForPosts(userInput.value)">REQUEST</button> 
  <hr> 
  <ul> 
    <div *ngIf="userPosts"> 
      <div *ngFor="let post of userPosts"> 
        <h3>{{ post.title }}</h3> 
        <p>{{ post.body }}</p> 
      </div> 
    </div> 
    <h3 *ngIf="!userPosts">No posts shown...</h3> 
  </ul> 
  ` 
 }) 
 export class ExampleComponent { 
  userPosts: Post[]; 
 
  constructor(private json: JsonService) { } 
 
  requestForPosts(id: number): void { 
    this.json.getPostsByUserId(id) 
      .subscribe((posts: Post[]) => { this.userPosts = posts.length > 0 ? posts : null; }); 
  } 
 } 
```

`json.service.ts` cria um `Observable` em nome de `component.example.ts` . O componente pode se inscrever no `Observable` retornado. Apenas um valor é emitido no momento em que o `Observable` resolve o fluxo de dados.

O pedido para `jsonplaceholder.typicode.com` produz uma única matriz de 100 posts. A solicitação via `HttpClient` produz um `Observable` . O operador `switchMap` retorna outro `Observable` que sobrescreve o fluxo atual. A variável `trim$` armazena o `Observable` como seu valor. Acrescentar um `$` a uma variável usada para armazenar o s `Observable` é uma convenção.

`from` converte o array de `jsonplaceholder.typicode.com` em um `Observable` 100 valores. Operadores RxJS então filtram cada parte dos dados no fluxo. Eles removem os valores de fluxo irrelevantes para a solicitação. O corte de dados ocorre para que os valores de fluxo permaneçam enxutos em informações desnecessárias. Os resultados finais se juntam mais uma vez como um único array que emite um para seus observadores.

Em `component.example.ts` , o JsonService faz referência ao método que retorna o `Observable` recém-descrito. Este método invoca o clique do botão no modelo do componente. A caixa de entrada também no modelo fornece o argumento `id` único.

Com o botão pressionado, o JsonService retorna um `Observable` que emite um único array. `.subscribe` invoca no `Observable` retornado. O componente então define o valor de `userPosts` igual ao array emitido.

A Detecção de Mudança Angular seleciona a mudança nos dados da classe. As atualizações de modelo e `*ngFor` garantem que cada elemento da matriz de `userPosts` renderize seu próprio elemento de modelo.

#### Conclusão

O RxJS fornece o núcleo `Observable` junto com seus operadores. A biblioteca é instalada automaticamente a partir da linha de comando, usando `ng new [name-of-app]` (Angular CLI). Os tipos de núcleo e operadores `rxjs` baixados para `rxjs` e `rxjs/operators` , respectivamente.

Mesmo se você não usar o CLI, serviços como o `HttpClient` ainda `HttpClient` ser usados. O serviço retorna um `Promise` vez de um `Observable` se o RxJS não estiver disponível. O objeto `Promise` é nativo ao JavaScript, ao contrário do `Observable` . Isso provavelmente mudará na próxima versão oficial do JavaScript.

Dito isto, aproveite ao máximo o RxJS! Qualquer estrutura iterável pode acomodar o `Observable` . Com isso, toda a biblioteca RxJS se torna utilizável. Seus operadores transformam com eficiência os dados de um fluxo em resultados. Além disso, os observadores podem assinar resultados, aumentando a portabilidade geral dos dados.

## Fontes

*   [Equipa Angular "A biblioteca RxJS". _Google_ . Acessado em 5 de junho de 2018.](https://angular.io/guide/rx-library)
*   [Forbes, Elliot. “Criando um aplicativo em tempo real com o tutorial Angular e Socket.io”. _TutorialEdge.net_ , 10 de janeiro de 2017. Acessado em 5 de junho de 2018.](https://tutorialedge.net/typescript/angular/angular-socket-io-tutorial)
*   [Equipe RxJS. “Documentação RxJS”. _RxJS_ . Acessado em 5 de junho de 2018.](https://rxjs-dev.firebaseapp.com)
*   [Sukale, Ryan. “Diferença entre Rxjs Subject and Observable”. _TutorialHorizon_ , 23 de março de 2017. Acessado em 5 de junho de 2018.](https://javascript.tutorialhorizon.com/2017/03/23/rxjs-subject-vs-observable)
*   [Comunidade da Wikipédia. “Programação reativa”. _Wikipedia_ , 2 de junho de 2018. Acessado em 5 de junho de 2018.](https://en.wikipedia.org/wiki/Reactive_programming)

## Recursos

*   [Documentação Angular](https://angular.io/guide)
*   [Angular no GitHub](https://github.com/angular/angular)
*   [CLI Angular](https://cli.angular.io)
*   [RxJS e Angular](https://angular.io/guide/rx-library)
*   [Programação reativa](https://en.wikipedia.org/wiki/Reactive_programming)
*   [Extensões reativas para JavaScript](https://rxjs-dev.firebaseapp.com)