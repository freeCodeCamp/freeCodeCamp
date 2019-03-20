---
title: Angularjs Interview Questions
---
# Angularjs Interview Questions

Here's a list of the concepts that are frequently asked about in Angularjs interviews.

* What is AngularJS?
* What is the Model View Controller (MVC)?
* Two way data binding
* What is dependency injection and how does it work?
* What is $scope in AngularJS?
* What is $rootScope in AngularJS?
* How to implement routing in Angular?
* Explain directives
* How can we create a custom directive in Angular?
* Explain difference bewteen service and factory
* Explain $q service, deferred and promises

# Example Questions and Answers
Question: List out the Directives in AngularJS?\
Answer: ngBind, ngModel, ngClass, ngApp, ngInit, ngRepeat

Question : What is $scope in AngularJS?\
Answer: $scope in AngularJS is an object which refers to an application model. It is an object that binds view (DOM element) with the controller. In controller, model data is accessed via $scope object. As we know, AngularJS supports MV* pattern, $scope object becomes the model of MV*. 

Question: What is SPA (Single page application) in AngularJS?\
Answer: Single-Page Applications (SPAs) are web applications that load a single HTML page and dynamically update that page as the user interacts with the app. SPAs use AJAX and HTML to create fluid and responsive web apps, without constant page reloads. However, this means much of the work happens on the client side, in JavaScript.
A single HTML page here means UI response page from the server. The source can be ASP, ASP.NET, ASP.NET MVC, JSP and so on.
A single-page web application, however, is delivered as one page to the browser and typically does not require the page to be reloaded as the user navigates to various parts of the application. This results in faster navigation, more efficient network transfers, and better overall performance for the end user.

Question: What is routing in AngularJS?\
Answer: Routing is a core feature in AngularJS. This feature is useful in building SPA (Single Page Application) with multiple views. In SPA application, all views are different Html files and we use Routing to load different parts of the application and it's helpful to divide the application logically and make it manageable. In other words, Routing helps us to divide our application in logical views and bind them with different controllers.

Question: Explain ng-repeat directive.\
Answer: The ng-repeat directive is the most used and very useful AngularJS Directive feature. It iterates over a collection of items and creates DOM elements. It constantly monitors the source of data to re-render a template in response to change.

Question: What is the difference between ng-If and ng-show/ng-hide.
Answer: The ng-If directive only render DOM element if condition is true. where ng-show/ng-hide directive render the DOM element but it changes class of ng-hide/ng-show to maintain visibility of the element on the page.

Question: How do you cancel a timeout with AngularJs?\
Answer: $timeout is AngularJs' wrapper for window.setTimeout, you cancel a timeout applying the function: 

    $timeout.cancel(function (){
      // write your code.
    });

Question: What is Dependency Injection?\
Answer: Dependency Injection (DI) is a software design pattern that deals with how components get hold of their dependencies.
The AngularJS injector subsystem is in charge of creating components, resolving their dependencies, and providing them to other components as requested.

Question : Explain ng-App directive.\
Answer : The ng-app directive starts an AngularJS Application. It defines the root element. It automatically initializes or bootstraps the application when web page containing AngularJS Application is loaded. It is also used to load various AngularJS modules in AngularJS Application. 

Question : Explain ng-init directive.\
Answer : The ng-init directive initializes an AngularJS Application data. It is used to put values to the variables to be used in the application. Eg:In the below example, we have initialized an array of countries,using JSON syntax to define array of countries.
```html
<div ng-app = "" ng-init = "countries = [{locale:'en-US',name:'United States'}, {locale:'en-GB',name:'United Kingdom'}, {locale:'en-FR',name:'France'}]">
   ...
</div>
```

Question: How do you share data between controllers?\
Answer: Create an AngularJS service that will hold the data and inject it inside of the controllers.
Using a service is the cleanest, fastest and easiest way to test. However, there are couple of other ways to implement data sharing between controllers, like:
– Using events
– Using $parent, nextSibling, controllerAs, etc. to directly access the controllers
– Using the $rootScope to add the data on (not a good practice)

Question: What is the difference between ng-if and ng-show/hide directives?\
Answer: ng-if will only create and display the DOM element when its condition is true, if the condition is false or changes to false it will not create or destroy the created one. 
ng-show/hide will always generate the DOM element but it will apply the css display property based on the evaluation of the condition.

#### More Information:

Here you can find other questions and answers:

* [AngularJS Interview Questions](https://www.tutorialspoint.com/angularjs/angularjs_interview_questions.htm)
* [10 AngularJS interview questions and answers](https://www.upwork.com/i/interview-questions/angularjs/)
* [50 Most Important AngularJS Interview Questions For 100% Success](http://www.techbeamers.com/latest-angularjs-interview-questions-answers/)
