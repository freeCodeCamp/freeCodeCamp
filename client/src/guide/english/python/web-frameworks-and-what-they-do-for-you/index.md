---
title: Python Web Frameworks and What They Do 
---
We have used the word `framework` quite liberally in the earlier articles. You may or may not be familiar with what that is. Nonetheless, we will discuss what Python Web Frameworks do for you, out-of-the-box.

Web Frameworks, to put it informally, do for you what would be doing _repeatedly_ if you were to build a lot of websites with different functionalities. 

Let's take an extremely crude example and attempt to make a simple analogy. Say, you go to dinner, and it's a fancy restaurant. It could be any type of restaurant - Italian, Mexican, Indian, Korean, Pan-Asian.

Try to think of the common things that happen in a restaurant when a customer walks in. A valet might take your car and validate parking. You might be asked at the reception if you had booking; and how many of your friends are with you. You would probably be shown to your table, or asked to wait - depending on the crowd inside.

Once seated, you would be asked if you wanted regular or bottled water. Then someone would ask if you prefer drinks. You might order some starters, followed by main-course; and finally, some dessert. You have to pay the bill.

I understand if you would like to take a moment to take a trip down memory lane, enjoying a delicious toothsome. Once you are done, you need to put yourself in the position of the person who is running the business.

If you notice, there are some activities that you are doing repeatedly for every customer. And based on the type of restaurant and time of day, there are some things that would be different. For instance, the menu and food prices.

Say, you are running the business; you would also need to handle other aspects of this business that a customer would be oblivious to. For instance; the salary of the staff, managing books, paying rent and tax on the property, printing new menu cards etc.

You are wondering where this conversation is headed. Calm down! We are getting back to Python Web Development ASAP.

A Web Framework does these repeating activities for you - that you would do when you build a web application using only a programming language and some networking libraries. Like Request Handling, URL Routing, Template Compilation, Context Setting, CSRF Protection, Logging, Database Interaction via ORM, Authentication, Response Rendering etc.

You are probably wondering what, then, is left for the developer to do? Based on the application, you have to use the framework APIs and write your application-specific logic.

Your code will fill the gaps _intentionally_ left in the framework code - and combining your code with the framework; your web application would have life breathed into it!

Two of the most popular web frameworks in Python are Django and Flask. Django is probably the most-used Python framework out there. Django helps you to build websites where you're interacting with both your client (user) and your database, often simultaneously. Flask is a micro-framework, which can also do much of the tasks that Django does, but by using extensions made by the community. Other frameworks worth mentioning are Pylons and Tornado.

### Django 

Django (/ˈdʒæŋɡoʊ/ JANG-goh) is a free and open-source web framework, written in Python, which follows the model-view-template (MVT) architectural pattern. It is maintained by the Django Software Foundation (DSF), an independent organization established as a 501(c)(3) non-profit.

Django's primary goal is to ease the creation of complex, database-driven websites. Django emphasizes reusability and "pluggability" of components, rapid development, and the principle of don't repeat yourself. Python is used throughout, even for settings files and data models. Django also provides an optional administrative create, read, update and delete interface that is generated dynamically through introspection and configured via admin models.

Some well-known sites that use Django include the Public Broadcasting Service, Instagram, Mozilla, The Washington Times, Disqus, Bitbucket, and Nextdoor. It was used on Pinterest, but later the site moved to a framework built over Flask.


### Flask

Flask is a lightweight WSGI web application and a micro framework which it's classified as a microframework because it does not require particular tools or libraries. It is designed to make getting started quick and easy, with the ability to scale up to complex applications. However, Flask supports extensions that can add application features as if they were implemented in Flask itself. Extensions exist for object-relational mappers, form validation, upload handling, various open authentication technologies and several common framework related tools. Extensions are updated far more regularly than the core Flask program. Flask is commonly used with MongoDB (NOSQL DataBase) which allows it more control over databases and history.

It began as a simple wrapper around Werkzeug and Jinja and has become one of the most popular Python web application frameworks.

Flask offers suggestions, but doesn't enforce any dependencies or project layout. It is up to the developer to choose the tools and libraries they want to use. There are many extensions provided by the community that make adding new functionality easy.

Flask was made in 2004 by an international group of Pythonists called 'Pocoo', as an April Fools joke which was later made into a 'real' thing. According to Wikpedia, it was the most used Python web framework on Github. It is a free and open-source micro-framework written in Python ([view on GitHub](https://github.com/freeCodeCamp/guide/tree/master/src/pages/javascript)). As the Wikipedia states, 

Flask is classified as a microframework because it does not require particular tools or libraries. It has no database abstraction layer, form validation, or any other components where pre-existing third-party libraries provide common functions.

Flask is very much a 'batteries not included' framework, compared to something like Django. This means you need to install modules such as user authentication, forms, and other things yourself. It's not to say that Flask isn't made for those things, simply that they aren't included and those modules are made by the community. Flask also has extensive, detailed documentation available at http://flask.pocoo.org/docs/. It provides simplicity and more control over smaller things. You won't have functionality that isn't being used, as you can choose what is added and what isn't. 

Sites that use Flask include Pinterest! (which moved from Django), Twilio's private API's (they even made an extension called Flask-RESTful for API's), and Netflix (which uses ScriptFlask, a tool based on Flask)

### Bottle

Bottle is a Python micro framework that allows users to quickly get up and running with a Python web application.  It is a lot more lightweight than something more fully featured such as Django, and has no third-party dependencies relying only on the Python standard library.

This makes it perfect for small web applications where some of the more advanced features of Django such as authentication, or database access would not be required.