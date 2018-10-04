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
