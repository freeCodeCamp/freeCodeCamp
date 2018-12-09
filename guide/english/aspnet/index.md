---
title: ASPNET
---
## ASP.NET

# Overview

ASP.Net is a web development platform provided by Microsoft. It is used for creating web-based applications and websites using HTML, CSS, and JavaScript as front end. 
Server-side programming languages like C# and VB .NET may be used to code the back end.

ASP.NET offers different frameworks for creating web applications: For e.g ASP.NET Web Forms, ASP.NET Web Pages, ASP.NET MVC.

#### ASP.NET Web Forms
ASP.NET Web Forms is the oldest part of ASP.NET for building websites. The workflow is based on events and the pages are created using large number of components that are available for rapid application development, HTML language and any server-side language supported by the .NET common language runtime, such as Microsoft Visual Basic and Microsoft Visual C#. Websites are compiled on the server side and the HTML code is send to the browser.

Advantages of Web Forms:
- separation of user interface from application logic
- large number of components that are available for rapid application development (drag and drop)
- ensures fast implementation of small projects
- easy to learn

Disadvantages of Web Forms:
- poor performance in large projects because of state control of components
- no support for unit tests
- poor search enginge optimization
- low reusability of code
- no support for Separation of Concern

#### ASP.NET Web Pages
ASP.NET Web Pages is a framework for creating small and simple websites. Web Pages can be created using free WebMatrix editor. WebMatrix is an application containing text editor, tools for managing databases and application test server. In Web Pages views are created using Razor language (just like in ASP.NET MVC).

#### ASP.NET MVC
ASP.NET MVC is a framework for building web applications based on MVC pattern (model-view-controller). ASP.NET MVC is a great solution for creating large web applications as it support Separation of Concern, unit tests, has modular constuction and make it easy to maintain even large applications. With MVC pattern there is a clear separation between business logic and views. For creating views razor language is used and for business logic can be used any language supported by the .NET common language runtime (ex. C#, VB).  

#### More Information:
- [ASP .NET Tutorials](https://www.tutorialspoint.com/asp.net/)
- [ASP .NET Site](https://www.asp.net/)
- [ASP .NET Microsoft Documentation](https://docs.microsoft.com/en-us/aspnet/#pivot=aspnet/)
- [ASP .NET MVC Site](https://www.asp.net/mvc/)
- [ASP .NET MVC Tutorials](https://www.tutorialspoint.com/asp.net_mvc/)
- [ASP .NET MVC Interview Questions](https://medium.com/dot-net-tutorial/top-50-asp-net-mvc-interview-questions-with-answers-1fd9b1638c61)

ASP.Net development is now available on Mac and Linux, Checkout more here:
- [ASP .NET Core](https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-mvc-app-xplat/start-mvc?view=aspnetcore-2.1)
