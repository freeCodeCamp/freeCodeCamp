---
title: Angular 2 Starter Project
localeTitle: الزاوي 2 كاتب المشروع
---
هذا البرنامج التعليمي سوف يبني مشروع بذور بسيط للغاية مع Angular2. سنبدأ مع أبسط التطبيقات الممكنة ثم نضيف المزيد من الوظائف.

## نظرة عامة

يتم إنشاء تطبيقات Angular 2 من خلال إنشاء قوالب HTML التي تحتوي على ترميز معين زاوي. ثم يتم إنشاء فئات لإدارة القوالب ويتم تغليف كل شيء في وحدة نمطية ، والتي قمت بتجميعها معاً لإنشاء التطبيق الخاص بك. يشار إلى هذه الوحدات على أنها **مكونات** .

يفسر الزاوي هذه الوحدات ويستخدمها لتقديم طلبك في المتصفح.

## تطبيق المبتدئين

دعونا نبدأ مع تطبيق الحد الأدنى. سنبدأ بتطبيق يحتوي على وحدة نمطية واحدة تتمثل مهمتها الوحيدة في عرض بعض النصوص.

سنبدأ بإنشاء مجلد جديد باسم "app".

 `$ mkdir app 
` 

كما ذكرنا أعلاه ، سيبدأ تطبيقنا بوحدة نمطية واحدة ، أو **مكون** ، سيعرض بعض النص على الشاشة. يمكننا استخدام كل من جافا سكريبت الخالص أو TypeScript لعمل تطبيق زاوي 2. باستخدام TypeScript ، يكون من الأسهل والأكثر ملاءمة للمبرمج ![:wink:](//forum.freecodecamp.com/images/emoji/emoji_one/wink.png?v=2 ":غمزة:")

دعونا نتعلم كيفية إنشاء مكون باستخدام TypeScript.

أنشئ ملفًا باسم _`app.component.ts`_ كما هو موضح:

 ``    // app.component.ts 
 
    import { Component } from '@angular/core'; 
    @Component({ 
      selector: 'my-app', 
      template: '<h1>Free Code Camp Rocks!</h1>', 
      styles: <a href='http://plnkr.co/edit/BdvNONEmO3Jwg0EavX22' target='_blank' rel='nofollow'>` 
        h1 { color: darkgreen; font-family: Arial, Helvetica, sans-serif;} 
      `] 
    }) 
    export class AppComponent { } 
`` 

يحتوي كل تطبيق Angular 2 على مكون واحد على الأقل يسمى عادة **AppComponent** . يدير أحد المكونات جزءًا من الصفحة باستخدام القالب بداخله.

يوضح المكون لدينا البنية الأساسية لأي مكون ستكتبه. أنه يحتوي على:

*   **بيانات الاستيراد** لسحب المكونات الأخرى التي سنحتاج إليها
*   **مصمم عنصر** يتيح لك معرفة الزاوية التي تستخدم القالب وكيف سيتم إنشاء المكون. أساسا ، أي بيانات التعريف المتعلقة بالمكون.
*   **فئة المكون** التي تتحكم في مظهر وسلوك المكوِّن

دعونا نلقي نظرة فاحصة على كل سطر في المكون لدينا.

## استيراد

 `import { Component } from '@angular/core'; 
` 

نظرًا لأن التطبيقات الزاويّة معيارية ، يمكننا استيراد أي وحدات أو مكتبات أخرى قد نحتاجها. هنا ، نحن `@Component` الوحدة النمطية الأساسية Angular 2 لإعطاء الوصول إلى المكون الخاص بنا إلى مصمم `@Component` . سيحتاج كل تطبيق إلى هذا الاستيراد للبدء.

نظرًا لأننا استوردنا وظيفة `Component` أعلاه ، فيمكننا الآن استخدامها لربط البيانات الوصفية بفئة المكونات التي ستخبر Angular بكيفية إنشاء مكوننا والإجراءات التي سيوفرها.

## ديكور مكون

 ``    @Component({ 
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
`` 

وأخيرًا ، نضيف العلامة التي يتصل بها المكون في النموذج. لذلك ، سيتطابق المحدد في مكون `IncrementClicker` مع العلامة التي نريد أن يظهر فيها.  
`js template:`

# رمز معسكر الصخور!

`,`  
يتم تضمين لدينا الآن في التطبيق لدينا!  
\[قانون تحديث  
[عرض التطبيق الكامل](http://run.plnkr.co/plunks/BdvNONEmO3Jwg0EavX22/)