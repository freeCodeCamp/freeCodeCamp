---
title: Routing
localeTitle: маршрутизация
---
# маршрутизация

#### мотивация

Маршрутизация имеет важное значение. Многие современные веб-приложения содержат слишком много информации для одной страницы. Пользователям также не нужно прокручивать всю ценность контента приложения. Приложение должно разбивать себя на разделяемые разделы.

Пользователи определяют приоритетность необходимой информации. Маршрутизация помогает найти раздел приложения с такой информацией. Любая другая информация, полезная для других пользователей, может существовать на совершенно отдельном маршруте. С маршрутизацией оба пользователя могут быстро найти то, что им нужно. Нерелевантные детали остаются скрытыми за нерелевантными маршрутами.

Маршрутизация превосходит при сортировке и ограничении доступа к данным приложения. Чувствительные данные никогда не должны отображаться для неавторизованных пользователей. Между каждым маршрутом приложение может вмешиваться. Он может проверять сеанс пользователя для целей аутентификации. Этот экзамен определяет, что делает маршрут, если он вообще должен отображаться. Маршрутизация дает разработчикам отличную возможность проверить пользователя перед продолжением.

Создание списка маршрутов также способствует организации. Что касается развития, он заставляет разработчика мыслить в различимых разделах. Пользователям это тоже полезно, но тем более разработчикам при навигации по коду приложения. Список программных маршрутизаторов рисует точную модель интерфейса приложения.

Что касается Angular, маршрутизация берет свою собственную библиотеку в рамках. Все современные интерфейсные платформы поддерживают маршрутизацию, а Angular не отличается. Маршрутизация происходит с клиентской стороны, используя либо хэш, либо маршрутизацию местоположения. Оба стиля позволяют клиенту управлять собственными маршрутами. После первоначального запроса дополнительная помощь с сервера не требуется.

Веб-браузер редко обновляется с использованием маршрутизации на стороне клиента. Утилиты веб-браузера, такие как закладки, история и адресная строка, по-прежнему работают, несмотря на отсутствие обновлений. Это позволяет использовать гладкую маршрутизацию, которая не испортит браузер. При переходе на другую страницу больше нет перегруженных страниц.

Угловая добавляет слой абстракции по основным технологиям, используемым для маршрутизации. Эта статья намеревается объяснить эту абстракцию. Существует две стратегии маршрутизации в Угловом: расположение пути и хеш. В этой статье основное внимание уделяется стратегии определения местоположения пути с момента ее использования по умолчанию.

Кроме того, местоположение пути может испортить хэш-маршрутизацию после полной версии [Angular Universal](https://universal.angular.io) . Несмотря на это, обе стратегии очень похожи в реализации. Изучение учит другого. Время для начала!

#### Настройка RouterModule

Экспорт маршрутизации маршрутизации с помощью `RouterModule` доступен из `@angular/router` . Он не является частью основной библиотеки, поскольку не все приложения требуют маршрутизации. Наиболее обычным способом введения маршрутизации является его собственный [функциональный модуль](https://angular.io/guide/feature-modules) .

По мере того как сложность маршрута возрастает, использование его в качестве собственного модуля будет способствовать простоте корневого модуля. Хранение этого глупого простого без ущерба для функциональности представляет собой хороший дизайн для модулей.

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

`.forRoot(...)` - это функция класса, доступная из класса RouterModule. Функция принимает массив объектов `Route` как `Routes` . `.forRoot(...)` настраивает маршруты для `.forChild(...)` загрузки, в то время как альтернатива `.forChild(...)` настраивается для ленивой загрузки.

Eager-load означает, что маршруты загружают свой контент в приложение из get-go. Ленивая загрузка происходит по требованию. Основное внимание в этой статье уделяется интенсивной загрузке. Это метод по умолчанию для загрузки в приложение. Определение класса RouterModule выглядит как следующий блок кода.

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

Не беспокойтесь о деталях конфигурации, в примере опускает комментарии. На данный момент общее понимание будет сделано.

Обратите внимание, что AppRoutingModule импортирует RouterModule, а также экспортирует его. Это имеет смысл, учитывая, что AppRoutingModule является функциональным модулем. Он импортирует в корневой модуль как функциональный модуль. Он предоставляет директивы, интерфейсы и службы RouterModule для корневого дерева компонентов.

Это объясняет, почему AppRoutingModule должен экспортировать RouterModule. Это делается для базового дерева компонентов корневого модуля. Он нуждается в доступе к этим утилитам маршрутизации!

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

Импорт токенов AppRoutingModule с самого верха. Его токен вставляет в массив импорта корневого модуля. Теперь дерево корневых компонентов может использовать библиотеку RouterModule. Это включает в себя его директивы, интерфейсы и услуги, как уже упоминалось. Большое спасибо AppRoutingModule для экспорта RouterModule!

Утилиты RouterModule пригодится для компонентов корня. В базовом HTML для AppComponent используется одна директива: `router-outlet` .

```html

<!-- app.component.html --> 
 
 <ul> 
  <!-- routerLink(s) here --> 
 </ul> 
 <router-outlet></router-outlet> 
 <!-- routed content appends here (AFTER THE ELEMENT, NOT IN IT!) --> 
```

`routerLink` является директивой атрибута RouterModule. Он будет прикрепляться к каждому элементу `<ul></ul>` после настройки маршрутов. `router-outlet` - это компонентная директива с интересным поведением. Он действует скорее как маркер для отображения маршрутизируемого контента. Маршрутизируемый контент выводится из навигации по определенному маршруту. Обычно это означает, что один компонент настроен в AppRoutingModule

Развернутый контент отображается сразу после `<router-outlet></router-outlet>` . Внутри ничего нет. Это не слишком сильно отличается. Тем не менее, не ожидайте, что `router-outlet` будет вести себя как контейнер для маршрутизируемого контента. Это всего лишь маркер для добавления маршрутизируемого контента в Document Object Model (DOM).

#### Основная маршрутизация

В предыдущем разделе описывается базовая настройка маршрутизации. До того, как произойдет реальная маршрутизация, необходимо еще несколько вещей

Первый вопрос для решения - какие маршруты будут потреблять это приложение? Ну, есть два компонента: AComponent и BComponent. Каждый должен иметь свой собственный маршрут. Они могут отображать от `router-outlet` AppComponent в зависимости от текущего местоположения маршрута.

Место (или путь) маршрута определяет, что добавляет к [происхождению веб-сайта](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin) (например, http: // localhost: 4200) через серию косых черт ( `/` ).

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

`http://localhost:4200/A` отображает AComponent с `router-outlet` AppComponent. `http://localhost:4200/B` отображает BComponent. Вам нужен способ маршрутизации в эти места без использования адресной строки. Приложение не должно полагаться на адресную строку веб-браузера для навигации.

_Глобальный CSS (каскадные таблицы стилей) дополняет HTML под ним. Ссылка на маршрутизатор приложения должна иметь приятный внешний вид. Этот CSS применяется ко всем другим примерам._

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

Это базовая маршрутизация! Щелчок по любому из эльюсов routerLink направляет веб-адрес. Он переназначает его, не обновляя веб-браузер. Угловой `Router` сопоставляет маршрутизированный адрес `Routes` настроенным в AppRoutingModule. Он соответствует адресу к свойству `path` для одного объекта `Route` в массиве. Первый матч всегда выигрывает, поэтому все маршруты должны находиться в самом конце массива `Routes` .

Маршруты «все равно» предотвращают сбой приложения, если он не может соответствовать текущему маршруту. Это может произойти из адресной строки, где пользователь может ввести любой маршрут. Для этого, Угловое значение имеет значение подстановочного знака `**` которое принимает все маршруты. Этот маршрут обычно отображает компонент PageNotFoundComponent, отображающий «Ошибка 404: Страница не найдена».

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

Объект `Route` содержащий `redirectTo` сохраняет рендеринг PageNotFoundComponent в результате `http://localhost:4200` . Это домашний маршрут приложений. Чтобы исправить это, `redirectTo` домашний маршрут на `http://localhost:4200/A` `http://localhost:4200/A` Косвенно становится новым домашним маршрутом приложения.

`pathMatch: 'full'` указывает, что объект `Route` соответствует `pathMatch: 'full'` маршруту ( `http://localhost:4200` ). Он соответствует пустым путям.

Эти два новых объекта `Route` идут в конце массива с момента победы первого матча. Последний элемент массива ( `path: '**'` ) всегда совпадает, поэтому он идет последним.

Перед тем, как двигаться дальше, нужно обратить внимание на последнее. Как пользователь знает, где он или она находится в приложении относительно текущего маршрута? Конечно, может быть контент, специфичный для маршрута, но как пользователь должен сделать это соединение? Должна быть какая-то форма подсветки, применяемая к routerLinks. Таким образом, пользователь узнает, какой маршрут активен для данной веб-страницы.

Это простое решение. Когда вы нажимаете элемент `routerLink` , Angular's `Router` назначает _фокус_ на него. Этот фокус может вызывать определенные стили, которые обеспечивают полезную обратную связь с пользователем. Директива `routerLinkActive` может отслеживать этот фокус для разработчика.

```html

<!-- app.component.html --> 
 
 <ul> 
  <li routerLink="/A" routerLinkActive="active">Go to A!</li> 
  <li routerLink="/B" routerLinkActive="active">Go to B!</li> 
 </ul> 
 <router-outlet></router-outlet> 
```

Правильное назначение `routerLinkActive` представляет собой строку классов. В этом примере отображается только один класс ( `.active` ), но может применяться любое число классов с разделителями. Когда `Router` назначает _фокус_ на routerLink, классы, разделенные пробелами, относятся к элементу host. Когда фокус смещается, классы автоматически удаляются.

```css
/* global styles.css */ 
 
 .active { 
  background-color: lightgrey !important; 
 } 
```

Теперь пользователи могут легко узнать, как текущий маршрут и содержимое страницы совпадают. `lightgrey` - `lightgrey` подсветка относится к routerLink соответствия текущего маршрута. `!important` гарантирует, что подсветка отменяет встроенные стили.

#### Параметрированные маршруты

Маршруты не обязательно должны быть полностью жестко закодированы. Они могут содержать динамические переменные, ссылающиеся на компонент, соответствующий объекту `Route` . Эти переменные объявляются как параметры при записи пути маршрута.

Параметры маршрута являются необязательными или обязательными для соответствия определенному `Route` . Это зависит от того, как маршрут записывает свои параметры. Существуют две стратегии: матрица и традиционная параметризация.

Традиционная параметризация начинается с массива `Routes` настроенного в AppRoutingModule.

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

Сосредоточьтесь на двух маршрутах BComponent. Параметризация в конечном итоге произойдет на обоих маршрутах.

Традиционная параметризация происходит во втором BComponent `Route` . `B/:parameter` содержит `parameter` параметра, обозначенный символом `:` Что бы ни следует, двоеточие обозначает имя параметра. `parameter` параметр необходим для соответствия второго BComponent `Route` .

`parameter` считывает значение того, что передается в маршрут. Маршрутизация в `http://localhost:4200/B/randomValue` присваивает `parameter` значение `randomValue` . Это значение может включать в себя все, кроме другого `/` . Например, `http://localhost:4200/B/randomValue/blahBlah` не будет запускать второй BComponent `Route` . Вместо этого отображается PageNotFoundComponent.

BComponent может ссылаться на параметры маршрута из своего класса компонентов. Оба подхода к параметризации (матричный и традиционный) дают те же результаты в BComponent. Прежде чем рассматривать BComponent, рассмотрите матричную форму параметризации ниже.

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

Угловая система впрыска зависимостей обеспечивает создание экземпляра `Router` . Это позволяет компоненту программно маршрутизировать. Функция `.navigate(...)` принимает массив значений, который разрешает _маршрутизируемый_ путь. Что-то вроде `.navigate(['path', 'to', 'something'])` разрешает `http://localhost:4200/path/to/something` . `.navigate(...)` добавляет разграничение пути `/` метки при нормализации массива в _маршрутизируемый_ путь.

Вторая форма параметризации происходит в `routeMatrixParam(...)` . См. Эту строку кода: `this.router.navigate(['B', { parameter: value }])` . Эта форма `parameter` является матричным параметром. Его значение необязательно для первого BComponent `Route` для соответствия ( `/B` ). `Route` соответствует независимо от наличия параметра в пути.

`routeAddressParam(...)` разрешает маршрут, который соответствует подходу `http://localhost:4200/B/randomValue` . Для этой традиционной стратегии требуется параметр, соответствующий второму маршруту BComponent (параметр `B/:parameter` :).

Матричная стратегия касается `routeMatrixParam(...)` . С или без параметра матрицы на своем пути по-прежнему соответствует первый маршрут BComponent. `parameter` параметра переходит к BComponent точно так же, как и к традиционному подходу.

Чтобы полностью понять приведенный выше код, вот соответствующий шаблон HTML.

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

В шаблоне значения принимаются как текстовый ввод. Вход вводит его в маршрут маршрута в качестве параметра. Для каждой стратегии параметризации (традиционная и матричная) существуют два отдельных набора блоков. Когда все части собираются вместе, настало время изучить класс компонентов BComponent.

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

BComponent получается из любого из двух маршрутов BComponent в AppRoutingModule. `ActivatedRoute` создает экземпляр полезной информации, относящейся к текущему маршруту. То есть маршрут, который вызвал визуализацию BComponent. `ActivatedRoute` создает экземпляры зависимостей, нацеленные на конструктор классов.

Поле `.params` в `ActivatedRoute.params` возвращает `Observable` который испускает параметры маршрута. Обратите внимание, как два разных подхода к параметризации приводят к `parameter` параметра. Возвращаемый `Observable` испускает его как пару ключ-значение внутри объекта `ParamMap` .

Между двумя подходами `parameter` параметр параметра разрешен одинаково. Значение исходит из `ActivatedRoute.params` несмотря на подход к параметризации.

Адресная строка отличает конечные результаты каждого подхода. Матричная параметризация (необязательно для соответствия `Route` ) дает адрес: `http://localhost:4200/B;parameter=randomValue` . Традиционная параметризация (требуется для соответствия `Route` ) дает: `http://localhost:4200/B/randomValue` .

В любом случае, тот же результат BComponent. Фактическое различие: соответствует другой `Route` BComponent. Это полностью зависит от стратегии параметризации. Матричный подход гарантирует, что параметры являются необязательными для сопоставления `Route` . Для этого требуется традиционный подход.

#### Вложенные маршруты

`Routes` могут формировать иерархию. В DOM это включает в себя один родительский `router-outlet` отображающий хотя бы один дочерний `router-outlet` . В адресной строке это выглядит так: `http://localhost/parentRoutes/childRoutes` . В конфигурации « `Routes` свойство `children: []` означает, что объект `Route` имеет вложенные (дочерние) маршруты.

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

NestComponent предоставляет `router-outlet` после рендеринга с другого `router-outlet` корневом уровне в AppComponent. `router-outlet` шаблона NestComponent может отображать либо AComponent ( `/nest/A` ), либо BComponent ( `/nest/B` ).

Модуль AppRoutingModule отражает это вложенность в объекте `Route` NestComponent. Поле `children: []` содержит массив объектов `Route` . Этот объект `Route` также может устанавливать маршруты в своих `children: []` областях `children: []` . Это может продолжаться для скольких слоев вложенных маршрутов. В приведенном выше примере показаны два слоя вложенности.

Каждый `routerLink` содержит `./` по сравнению с `/` . `.` гарантирует, что routerLink присоединяется к маршруту маршрута. В противном случае маршрутизаторLink полностью заменит путь. После маршрутизации `/nest` , `.` расширяется в `/nest` .

Это полезно для маршрутизации в `/nest/A` или `/nest/B` из маршрута `.nest` . `A` и `B` составляют вложенные маршруты `/nest` . Маршрутизация в `/A` или `/B` возвращает PageNotFound. `/nest` должен добавить два маршрута.

Взгляните на AppComponent, содержащий корневой уровень `router-outlet` в своем шаблоне. AppComponent - это первый слой вложенности, а NestComponent - второй.

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

Внутри объекта « `Route` гнезда» `children: []` содержат еще два вложенных маршрута. Они приводят к AComponent и BComponent при маршрутизации из `/nest` как обсуждалось ранее. Эти компоненты очень просты для демонстрации. `<li routerLink="/">...</li>` позволяет перейти от маршрутов гнезд, чтобы сбросить пример, перейдя по домашнему маршруту.

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

Массив `children: []` принимает объект `Route` как элементы. `children: []` могут применяться и к любому из этих элементов. Дети этих элементов могут продолжать гнездование. Этот шаблон может продолжаться и для многих слоев гнездования. Вставьте `router-outlet` в шаблон для каждого слоя вложенной маршрутизации.

Методы маршрутизации применяются независимо от уровня вложенности объекта `Route` . Методы параметризации отличаются только одним аспектом. Детские маршруты могут получить доступ только к параметрам родителя с помощью `ActivatedRoute.parent.params` . `ActivatedRoute.params` нацелен на один и тот же уровень вложенных маршрутов. Это исключает маршруты родительского уровня и их параметры.

`Route` охранники особенно подходят для вложенной маршрутизации. Один объект `Route` может ограничить доступ ко всем его вложенным (дочерним) маршрутам.

#### Охраняемые маршруты

Веб-приложения часто состоят из публичных и частных данных. Оба типа данных имеют свои собственные страницы с _охраняемыми_ маршрутами. Эти маршруты позволяют / ограничивают доступ в зависимости от привилегий пользователя. Несанкционированные пользователи могут взаимодействовать с охраняемым маршрутом. Маршрут должен блокировать пользователя, если он пытается получить доступ к его маршрутизируемому контенту.

Угловое устройство представляет собой набор защитных устройств для проверки подлинности, которые могут подключаться к любому маршруту. Эти методы запускаются автоматически в зависимости от того, как пользователь взаимодействует с охраняемым маршрутом.

*   `canActivate(...)` - срабатывает, когда пользователь пытается получить доступ к маршруту
    
*   `canActivateChild(...)` - срабатывает, когда пользователь пытается получить доступ к маршрутам вложенных (дочерних) маршрутов
    
*   `canDeactivate(...)` - срабатывает, когда пользователь пытается покинуть маршрут
    

Угловые методы защиты доступны от `@angular/router` . Чтобы помочь им аутентифицироваться, они могут по желанию получить несколько параметров. Такие параметры не вводят через инъекцию зависимостей. Под капотом каждое значение передается в качестве аргумента вызываемому методу защиты.

*   `ActivatedRouteSnapshot` - доступен для всех трех
    
*   `RouterStateSnapshot` - доступен для всех трех
    
*   `Component` - доступен для `canDeactivate(...)`
    

`ActivatedRouteSnapshot` обеспечивает доступ к параметрам маршрута охраняемого маршрута. `RouterStateSnapshot` предоставляет URL-адрес (единый `RouterStateSnapshot` ресурсов), соответствующий маршруту. `Component` ссылается на компонент, обработанный маршрутом.

Чтобы защитить маршрут, класс, реализующий методы защиты, должен сначала существовать как служба. Услуга может вводить в AppRoutingModule для защиты своих `Routes` . Значение токена для услуги может вводиться в любой объект `Route` .

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

`canActivate` , `canActivateChild` и `canDeactivate` реализовать из AuthService. Реализация сервиса будет показана вскоре после реализации UserService.

UserService предоставляет информацию, необходимую для аутентификации пользователя. Реализации метода защиты AuthService выполняют аутентификацию. AppRoutingModule должен включать две службы в свой массив поставщиков. Это значит, что инжектор модуля знает, как их создавать.

Вложенные маршруты существуют из пути `/private-nest` . Объект `Route` для `/private-nest` содержит еще несколько новых полей. Их имена должны выглядеть знакомыми, поскольку они отражают их соответствующие методы защиты.

Каждое поле запускает реализацию метода тезки внутри службы при срабатывании. Любое количество сервисов может также заполнить этот массив. Выполняется тестирование метода каждой службы. Они должны возвращать логическое значение или `Observable` которое испускает логическое значение.

См. Реализации AuthService и UserService ниже.

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

Тот же экземпляр `TheUser` передается с каждым экземпляром UserService. `TheUser` предоставляет доступ к `isLoggedIn` определяющему статус входа пользователя. Два других общедоступных метода позволяют UserService переключать значение `isLoggedIn` . Это значит, что пользователь может войти в систему и выйти из нее.

Вы можете думать о `TheUser` как о глобальном экземпляре. `UserService` - это настраиваемый интерфейс, который настраивает этот глобальный. Изменения в `TheUser` из одного экземпляра `UserService` применяются ко всем другим экземплярам `UserService` . `UserService` реализует в AuthService доступ к `isLoggedIn` из `TheUser` для аутентификации.

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

AuthService реализует каждый метод защиты, импортированный из `@angular/router` . Каждый метод защиты сопоставляется с соответствующим полем в объекте `Route` объекта PrivateNestComponent. Экземпляр UserService создается из конструктора AuthService. AuthService определяет, может ли пользователь продолжать использовать `isLoggedIn` выставленный UserService.

Возврат `false` от охранника указывает маршрут, чтобы заблокировать пользователя от маршрутизации. Возвращаемое значение `true` позволяет пользователю перейти к своему назначению маршрута. Если аутентифицируется несколько сервисов, все они должны возвращать true для разрешения доступа. `canActivateChild` защищает дочерние маршруты PrivateNestComponent. Этот метод защиты позволяет пользователям обходить PrivateNestComponent через адресную строку.

Параметры защитного метода передаются автоматически при вызове. Хотя этот пример не использует их, они предоставляют полезную информацию с маршрута. Разработчик может использовать эту информацию для аутентификации пользователя.

AppComponent также создает экземпляр UserService для непосредственного использования в своем шаблоне. Создание экземпляра UserService для AppComponent и AuthService относится к одному и тому же классу пользователей ( `TheUser` ).

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

UserService обрабатывает всю логику для AppComponent. AppComponent в основном касается своего шаблона. UserService создает экземпляр как `user` из конструктора класса. `user` данные определяют функциональность шаблона.

#### Вывод

Маршрутизация обеспечивает прекрасный баланс между организацией и ограничением разделов приложения. Меньшее приложение, такое как блог или страница с датой, может не требовать какой-либо маршрутизации. Даже тогда, включая немного хэш-маршрутизации, это не повредило бы. Пользователь может только захотеть ссылаться на часть страницы в конце концов.

Угловая применяет собственную библиотеку маршрутизации, построенную поверх [API истории](https://developer.mozilla.org/en-US/docs/Web/API/History_API) HTML5. Этот API опускает хэш-маршрутизацию вместо использования `pushState(...)` и `replaceState(...)` . Они изменяют URL-адрес веб-адреса без обновления страницы. Стратегия маршрутизации местоположения по умолчанию в Angular работает таким образом. Настройка `RouterModule.forRoot(routes, { useHash: true })` позволяет использовать хэш-маршрутизацию, если это необходимо.

В этой статье основное внимание было уделено стратегии определения местоположения по умолчанию. Независимо от стратегии, для маршрутизации приложения доступно множество утилит маршрутизации. `RouterModule` предоставляет эти утилиты через свой экспорт. Базовые, параметризованные, вложенные и защищенные маршруты являются все возможными, используя RouterModule. Для более продвинутых реализаций, включая лениво загруженные маршруты, см. Ссылки ниже.

## источники

*   [Угловая команда. «Маршрутизация и навигация». _Google_ . Доступ к 8 июня 2018 года.](https://angular.io/guide/router)
*   [Хуссейн, Асим. «Угловая 5: Маршрутизация». _codecraft.tv_ . Доступ к 8 июня 2018 года.](https://codecraft.tv/courses/angular/routing)
*   [Смит, Питер. «3 типа загрузки маршрута в угловом выражении, выраженные в 500 словах». _Upstate Interactive_ , 3 мая 2017 года. Доступ к 8 июня 2018 года.](https://blog.upstate.agency/3-types-of-route-loading-in-angular-explained-in-500ish-words-f22976e1f60b)
*   [Корецкий, Максим. «Избегайте общих путаниц с модулями в угловом». _Угловая глубина_ , 10 августа 2017. Доступ к 8 июня 2018 года.](https://blog.angularindepth.com/avoiding-common-confusions-with-modules-in-angular-ada070e6891f)

## Ресурсы

*   [Угловая документация](https://angular.io/guide)
*   [Маршрутизация и навигация](https://angular.io/guide/router)
*   [Угловое 5: Учебное пособие по маршрутизации Асим Хуссейн](https://codecraft.tv/courses/angular/routing/overview)
*   [Угловая глубина](https://blog.angularindepth.com)
*   [Угловой репозиторий GitHub](https://github.com/angular/angular)
*   [Угловая CLI](https://cli.angular.io)