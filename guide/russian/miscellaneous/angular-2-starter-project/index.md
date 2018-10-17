---
title: Angular 2 Starter Project
localeTitle: Угловой 2 стартовый проект
---
В этом учебнике будет создан чрезвычайно простой проект семян с Angular2. Мы начнем с самого базового приложения, а затем добавим немного больше функциональности.

## обзор

Угловые 2 приложения создаются путем создания HTML-шаблонов, содержащих угловую специфическую разметку. Классы затем создаются для управления шаблонами, и все обернуто в модуль, который вы объединяете для создания своего приложения. Эти модули называются **компонентами** .

Угловой интерпретирует эти модули и использует их для представления вашего приложения в браузере.

## Применение для начинающих

Давайте начнем с минимального приложения. Мы начнем с приложения, содержащего единственный модуль, единственное задание которого - отобразить некоторый текст.

Начнем с создания новой папки под названием «приложение».
```
$ mkdir app 
```

Как уже упоминалось выше, наше приложение будет начинаться с одного модуля или **компонента** , который отобразит текст на экране. Мы можем использовать как чистый JavaScript, так и TypeScript для создания углового приложения 2. Используя TypeScript, он проще и удобнее в программировании. ![:wink:](//forum.freecodecamp.com/images/emoji/emoji_one/wink.png?v=2 ": Подмигивать:")

Давайте узнаем, как создать компонент с помощью TypeScript.

Создайте файл _`app.component.ts`_ как показано:
```
    // app.component.ts 
 
    import { Component } from '@angular/core'; 
    @Component({ 
      selector: 'my-app', 
      template: '<h1>Free Code Camp Rocks!</h1>', 
      styles: <a href='http://plnkr.co/edit/BdvNONEmO3Jwg0EavX22' target='_blank' rel='nofollow'>` 
        h1 { color: darkgreen; font-family: Arial, Helvetica, sans-serif;} 
      `] 
    }) 
    export class AppComponent { } 
```

Каждое приложение Angular 2 имеет по крайней мере один компонент, который обычно называется **AppComponent** . Компонент управляет частью страницы, используя шаблон внутри нее.

Наш компонент демонстрирует основную структуру любого компонента, который вы когда-либо пишете. Это содержит:

*   **импортировать заявления** для привлечения других компонентов, которые нам понадобятся
*   **компонент декоратор** , который позволяет угловым знать , какой шаблон для использования и как будет создан компонент. В принципе, любые метаданные, относящиеся к компоненту.
*   **класс компонента,** который контролирует внешний вид и поведение компонента

Давайте подробнее рассмотрим каждую строку в нашем компоненте.

## Импортировать
```
import { Component } from '@angular/core'; 
```

Поскольку угловые приложения являются модульными, мы можем импортировать любые другие модули или библиотеки, которые могут нам понадобиться. Здесь мы импортируем модуль Angular 2 core, чтобы предоставить нашему компоненту доступ к декоратору `@Component` . Для начала каждого приложения потребуется этот импорт.

Поскольку мы импортировали функцию `Component` выше, теперь мы можем использовать ее для связывания метаданных с нашим классом компонентов, которые будут сообщать Angular, как должен быть создан наш компонент и какие действия он будет предоставлять.

## Декораторы компонентов
```
    @Component({ 
      selector: 'my-app', 
      template: '<h1>Free Code Camp Rocks!</h1>' 
    }) 
 ``` 
 Our metadata object has selector and template fields. 
 * The `selector` specifies a CSS selector that indicates which HTML element will represent this component. The element we will use will be named "`my-app`". Angular will use this to create an instance of our component where it finds this element. 
 * The `template` tells angular what template it will use for this component. This can refer to other Components or just a form of HTML that tells how to display the view for our component. Our template is just displaying an `h1` element containing the text "`Free Code Camp Rocks!`". 
 
 ## Component Class 
 Our final line provides an empty class named ***AppComponent*** 
 ```js 
 export class AppComponent { } 
 ``` 
 If we want to build a more complex component we can add logic and properties to the class. This component is extremely basic and simply displays some html, so its class will remain empty. 
 
 We export our class so we can use it in other components in our application. 
 
 Next, we need to connect our root component to Angular. To do this we create another file in our app folder called *`main.ts`* that will have the following code: 
 ```js 
    import { bootstrap }    from '@angular/platform-browser-dynamic'; 
    import { AppComponent } from './app.component'; 
    bootstrap(AppComponent); 
 ``` 
 This file imports the two items we need to start our app. 
 * **`bootstrap`** - Angular's built in method that connects to the browser 
 * **`AppComponent`** - Our component we created above (which is why we exported it) 
 We then call `bootstrap` method with `AppComponent` 
 
 **Finally, create index.html** 
 
 ```html 
    <html> 
      <head> 
        <title>Free Code Camp - Angular 2 Tutorial</title> 
        <meta charset="UTF-8"> 
        <meta name="viewport" content="width=device-width, initial-scale=1"> 
        <link rel="stylesheet" href="styles.css"> 
        <!-- 1\. Load libraries --> 
        <script src="https://npmcdn.com/core-js/client/shim.min.js"></script> 
 
        <script src="https://npmcdn.com/zone.js@0.6.12?main=browser"></script> 
        <script src="https://npmcdn.com/reflect-metadata@0.1.3"></script> 
        <script src="https://npmcdn.com/systemjs@0.19.27/dist/system.src.js"></script> 
 
        <!-- 2\. Configure SystemJS --> 
        <script src="systemjs.config.js"></script> 
        <script> 
          System.import('app').catch(function(err){ console.error(err); }); 
        </script> 
      </head> 
 
      <!-- Display app in my-app element --> 
      <body> 
        <my-app>Loading Your App...</my-app> 
      </body> 
    </html> 
 ``` 
 In commented section 1, we loaded several libraries that improve the compatibility of this tutorial with different browsers/versions. It also imports `system.src.js` which is used as module loader to import the app. 
 
 In section 2, SystemJS is used to load our application and our various modules. In a production example we may want to use something else such as webpack. It was chosen here since we can use it with plunker. 
 
 This is all that is required to get our simple application running. <a href="http://plnkr.co/edit/2i7Wjwd2JGj4NZtKvGD2" target="_blank">Here is a link to a plunker</a> that contains our working application. You can fork it into your own version and change whatever you'd like. 
 
 <a target="_blank" href="http://plnkr.co/edit/2i7Wjwd2JGj4NZtKvGD2">VIEW APP</a> 
 
 ## Add Functionality and Another Component 
 
 Now let's add a bit more functionality to our program. We will create a counter that let's you increment it by clicking a button. 
 
 Our increment component will be its own module so that we can reuse it in later applications. 
 
 Let's name our file: `app/increment-clicker.component.ts` and set it up. 
 ```js 
 // app/increment-clicker.component.ts 
 import { Component } from '@angular/core'; 
 
 @Component({ 
    selector: 'increment-clicker', 
    template: ` 
      <div className="counter"> 
        <h1>{{curClicks}} clicks</h1> 
        <button type="button" (click)="incrementClicks()">Increment</button> 
      </div> 
    `, 
    styles: [` 
        .counter { 
          width: 100%; 
          margin: auto; 
          background: darkgreen; 
          border-radius: 5px; 
          color: white; 
          padding: 20px; 
          text-align: center; 
        } 
        .counter h1 { 
          margin: 0; 
          padding: 20px; 
          font-size: 36px; 
        } 
        .counter button { 
          background: #f1c40f; 
          border: 0; 
          box-shadow: 0px 5px 0px #927608; 
          padding: 20px; 
          width: 100%; 
          outline: none; 
          border-radius: 5px; 
          color: darkgreen; 
          font-weight: bold; 
        } 
 
        .counter button:hover { 
          background: #a9890a; 
          cursor: pointer; 
        } 
    `] 
 }) 
 
 export class IncrementClicker { 
  curClicks = 0; 
 
  incrementClicks() { 
    this.curClicks++; 
  } 
 } 
 ``` 
 Our component structure is similar to our previous one, but we've added a bit of functionality here. You will notice our class is no longer empty. We've added a variable to track the clicks as well as a function to increment them when the user clicks the button. 
 
 You can display properties from your class in your template using double braces such as: `{{ variableName }}` 
 
 We bind the button click event to our class function using Angulars Event Bindings. 
 ```html 
 <button type="button" (click)="incrementClicks()">Increment</button> 
 ``` 
 
 Notice that we've also added some styling to our components. This way everything is self-contained in this module. You may also include a `templateUrl` and/or `styleUrls` properties instead to extract the template and style rules to an external file and link them here. 
 
 Now we just need to update our `AppComponent` to include our new component: 
 ```js 
 // app/app.component.ts 
 
 import { Component } from '@angular/core'; 
 
 /* Nested Component */ 
 import { IncrementClicker } from 'app/increment-clicker.component'; 
 
 @Component({ 
  selector: 'my-app', 
  directives: [IncrementClicker], 
  template: ` 
    <h1>Free Code Camp Rocks!</h1> 
    <increment-clicker></increment-clicker> 
  `, 
  styles: [` 
    h1 { color: darkgreen; font-family: Arial, Helvetica, sans-serif;} 
  `] 
 }) 
 
 export class AppComponent { } 
 ``` 
 To pull in our new `IncrementClicker` component we need to import it by including the class name as well as the location of the typescript file as we did on this line: 
 ```js 
 import { IncrementClicker } from 'app/increment-clicker.component'; 
 ``` 
 We then add the `IncrementClicker` *component* as a directive to the `AppComponent` module using: 
 ```js 
 directives: [IncrementClicker], 
```

Наконец, мы просто добавляем тег, к которому подключается наш компонент в шаблоне. Таким образом, селектор в нашем компоненте `IncrementClicker` будет соответствовать тегу, где мы хотим, чтобы он отображался.  
`js template:`

# Бесплатные кодовые камни!

`,`  
Наш компонент теперь включен в наше приложение!  
\[Обновленный код  
[ПРОСМОТРЕТЬ ПОЛНОЕ ПРИМЕНЕНИЕ](http://run.plnkr.co/plunks/BdvNONEmO3Jwg0EavX22/)