---
title: Services and Injectors
localeTitle: Serviços e Injetores
---
# Serviços e Injetores

#### Motivação

Os componentes são responsáveis ​​pelos dados que são renderizados no modelo. Ter _serviços_ externos para atrair pode simplificar essa responsabilidade. Além disso, o encapsulamento externo é muito mais fácil de manter.

A delegação de muitas responsabilidades em um único componente pode complicar a classe do componente. E se essas responsabilidades se aplicassem a vários componentes? Copiar e colar essa lógica é uma prática extremamente deficiente. Quaisquer alterações futuras na lógica seriam mais difíceis de implementar e testar.

Angular destinado a reduzir esse problema com serviços e injeção de dependência. Ambos os conceitos trabalham juntos para fornecer funcionalidade _modular_ .

Os componentes não precisam fornecer nenhuma informação irrelevante. Um serviço importa o que ele precisa para funcionar em nome dos componentes que ele _atende_ . Os componentes precisam apenas instanciar o serviço. De lá eles _atendem_ suas próprias necessidades com a instância de serviço instanciada.

Quanto aos testes e futuras modificações, toda a lógica está em um só lugar. O serviço instancia de sua origem. Testes e modificações na fonte se aplicam em qualquer lugar em que o serviço é injetado.

#### Introdução aos Serviços

Um serviço é um tipo de _esquema_ disponível em Angular. É gerável pela interface da linha de comandos (CLI): `ng generate service [name-of-service]` . Substitua `[name-of-service]` por um nome preferível. O comando da CLI produz o seguinte.

```typescript
import { Injectable } from '@angular/core'; 
 
 @Injectable({ 
  providedIn: 'root' 
 }) 
 export class LoggerService { 
  constructor() { } 
 } 
```

A lógica de um serviço é distinta dentro de sua classe. Angular interpreta uma classe como um serviço _injetável_ baseado no decorador `@Injectable` . Serviços injetáveis ​​devem se _registrar_ com um injetor.

O componente instancia um serviço enquanto o injetor fornece essa instância. Continue lendo na próxima seção para mais informações sobre injetores.

O campo de metadados `@Injectable` `providedIn: 'root'` tem como alvo o módulo raiz do aplicativo atual ( `app.module.ts` ). Ele registra o serviço com o injetor do módulo para que ele possa _injetar_ esse serviço em qualquer um de seus filhos.

Os injetores são os blocos de construção do sistema de injeção de dependência da Angular. Os injetores são um bom lugar para concentrar sua atenção antes de continuar com os serviços.

#### Injetores

Um aplicativo, começando com `app.module.ts` , contém uma hierarquia de injetores. Eles existem ao lado de cada módulo e componente na árvore de aplicativos.

![Hierarquia de Aplicativos](https://raw.githubusercontent.com/sosmaniac-FCC/designatedata/master/image5.png)

Os círculos verdes indicam injetores. Eles fornecem instâncias de serviço para instanciar componentes. Dependendo de qual injetor um serviço está registrado, ele pode ou não estar disponível para um componente.

Os serviços registrados na raiz do aplicativo ( `app.module.ts` ) estão disponíveis para todos os componentes. Um injetor para um componente pode não ter um certo serviço registrado. Se esse for o caso e o componente solicitar sua instanciação, o injetor irá adiar para seu pai. Esta tendência continua até chegar ao injetor de raiz ou o serviço é encontrado.

Olhando para o diagrama, diga que um serviço é registrado no injetor do ponto B. Todos os componentes no ponto C e abaixo não poderão acessar o serviço registrado no injetor de B. Os injetores nunca adiarão seus filhos para uma instância de serviço.

#### Injeção de dependência

Existem várias maneiras de registrar um serviço com os injetores de um aplicativo.

O campo de metadados `providedIn: 'root'` de `@Injectable` fornece a abordagem mais recomendada. Este campo de metadados lançado com o Angular 6.

Como mencionado anteriormente, `providedIn: 'root'` registra um serviço com o injetor do módulo raiz. É instanciável em todo o aplicativo como resultado.

A novidade do `providedIn: 'root'` é _arborizar_ . Se o serviço não for utilizado, apesar de seu registro, ele será _abalado a_ partir do aplicativo em tempo de execução. Dessa forma, não consome recursos.

As outras duas formas são mais diretas e tradicionais. Concedido, eles não oferecem arborismo.

Um serviço pode se registrar com qualquer injetor ao longo da árvore de componentes. Você insere o serviço como um provedor no campo de metadados `@Component` : `providers: []` . O serviço está disponível para o componente e seus filhos

Na terceira estratégia de registro, os metadados `providers: []` existem como seu próprio campo no decorador `@NgModule` . O serviço é instanciável do módulo para a árvore de componentes subjacente.

Lembre-se que, ao contrário de `providedIn: 'root'` , o registro `@NgModule` não oferece agitações na árvore. Ambas as estratégias são idênticas. Uma vez que um serviço se registra com `@NgModule` , ele consome recursos mesmo se não for usado pelo aplicativo.

#### Serviços Continuados

Escrevendo um serviço real vem em seguida. Para recapitular, os serviços manipulam determinadas funções em nome dos componentes de um aplicativo.

Os serviços são excelentes no manuseio de operações comuns. Eles poupam componentes da responsabilidade ao fazê-lo. Economiza tempo sem precisar reescrever operações comuns em vários componentes. Também é mais testável porque o código está em um só lugar. Mudanças só precisam acontecer em um lugar sem ter que procurar em outro lugar.

#### Casos de Uso

Alguns exemplos são um longo caminho para uma compreensão completa dos serviços.

*   logs do console
    
*   Solicitações de API
    

Ambos são comuns na maioria dos aplicativos. Ter serviços para lidar com essas operações reduzirá a complexidade dos componentes.

##### Logs do console

Este exemplo é construído a partir do esqueleto base do `@Injectable` . O esqueleto está disponível através da execução do CLI ( `ng generate service [name-of-service]]` ).

```typescript
// services/logger.service.ts 
 
 import { Injectable } from '@angular/core'; 
 
 interface LogMessage { 
  message:string; 
  timestamp:Date; 
 } 
 
 @Injectable({ 
  providedIn: 'root' 
 }) 
 export class LoggerService { 
  callStack:LogMessage[] = []; 
 
  constructor() { } 
 
  addLog(message:string):void { 
      // prepend new log to bottom of stack 
      this.callStack = [{ message, timestamp: new Date() }].concat(this.callStack); 
  } 
 
  clear():void { 
      // clear stack 
      this.callStack = []; 
  } 
 
  printHead():void { 
      // print bottom of stack 
      console.log(this.callStack[0] || null); 
  } 
 
  printLog():void { 
      // print bottom to top of stack on screen 
      this.callStack.reverse().forEach((logMessage) => console.log(logMessage)); 
  } 
 
  getLog():LogMessage[] { 
      // return the entire log as an array 
      return this.callStack.reverse(); 
  } 
 } 
```

LoggerService registra com o módulo raiz através dos metadados `@Injectable` . Assim, pode instanciar no `app.component.html` .

```typescript
// app.component.ts 
 
 import { Component, OnInit } from '@angular/core'; 
 import { LoggerService } from './services/logger.service'; 
 
 @Component({ 
  selector: 'app-root', 
  templateUrl: './app.component.html' 
 }) 
 export class AppComponent implements OnInit { 
  logs:object[] = []; 
 
  constructor(private logger:LoggerService) { } 
 
  updateLog():void { 
      this.logger.printHead(); 
      this.logs = this.logger.getLog(); 
  } 
 
  logMessage(event:any, message:string):void { 
      event.preventDefault(); 
 
      this.logger.addLog(`Message: ${message}`); 
      this.updateLog(); 
  } 
 
  clearLog():void { 
      this.logger.clear(); 
      this.logs = []; 
  } 
 
  ngOnInit():void { 
      this.logger.addLog(“View Initialized”); 
      this.updateLog(); 
  } 
 } 
```

O modelo HTML fornece mais informações sobre o uso do LoggerService pelo componente.

```html

<!-- app.component.html --> 
 
 <h1>Log Example</h1> 
 
 <form (submit)="logMessage($event, userInput.value)"> 
  <input #userInput placeholder="Type a message..."> 
  <button type="submit">SUBMIT</button> 
 </form> 
 
 <h3>Complete Log</h3> 
 <button type="button" (click)="clearLog()">CLEAR</button> 
 <ul> 
  <li *ngFor="let log of logs; let i=index">{{ logs.length - i }} > {{ log.message }} @ {{ log.timestamp }}</li> 
 </ul> 
```

Isso tem a sensação de um aplicativo ToDo. Você pode registrar mensagens e limpar o registro de mensagens. Imagine se toda a lógica do serviço fosse colocada no AppComponent! Isso complicaria o código. O LoggerService mantém o código relacionado ao log encapsulado da classe principal AppComponent.

##### Buscar solicitações

Aqui está mais um exemplo que vale a pena brincar. Este exemplo é possível graças ao [JSONPlaceholder 1 do typicode](https://jsonplaceholder.typicode.com) . A API é pública e gratuita para uso.

```typescript
import { Injectable } from '@angular/core'; 
 import { HttpClient } from '@angular/common/http'; 
 import { Observable } from 'rxjs'; 
 
 // https://jsonplaceholder.typicode.com 
 // public API created by typicode @ https://github.com/typicode 
 
 interface Post { 
  userId:number; 
  id:number; 
  title:string; 
  body:string; 
 } 
 
 @Injectable({ 
  providedIn: 'root' 
 }) 
 export class PlaceholderService { 
  constructor(private http:HttpClient) { } 
 
  getPosts():Observable<Post[]> { 
      return this.http.get('https://jsonplaceholder.typicode.com/posts'); 
  } 
 
  getPost(id:number):Observable<Post> { 
      return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`); 
  } 
 } 
```

Esta é mais uma peça autônoma do que um exemplo totalmente desenvolvido. As solicitações de busca tendem a funcionar melhor como um serviço injetável. A alternativa é um componente complicado demais. A classe injetada se inscreve no que o PlaceholderService pré-configura.

#### Conclusão

Serviços e injeção de dependência são muito úteis juntos. Eles permitem que os desenvolvedores encapsulem a lógica comum e injetem em vários componentes diferentes. Isso por si só é uma enorme conveniência para qualquer manutenção futura.

Injetores funcionam como intermediários. Eles mediam entre instanciar componentes e um reservatório de serviços registrados. Os injetores oferecem esses serviços instantâneos aos filhos de seus ramos.

Veja os links a seguir para mais informações sobre serviços e injeção de dependência.

## Fontes

1.  [Typicode, _JSONPlaceholder_ , https://jsonplaceholder.typicode.com, acessado em 29 de maio de 2018.](https://jsonplaceholder.typicode.com)

## Recursos

*   [Documentação Angular](https://angular.io/docs)
    
*   [Repositório Angular GitHub](https://github.com/angular/angular)
    
*   [Injeção de dependência](https://angular.io/guide/dependency-injection-pattern)
    
*   [Introdução aos Serviços e DI](https://angular.io/guide/architecture-services)