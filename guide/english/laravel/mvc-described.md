Laravel follows *MVC* pattern. 
If you do not familiar with *MVC*, 
M for Model
V for View
C for Controller

#Model 
This is where you will define model of any entity in your system. In laravel, a model is the representative of a database-table. You can access and interact to that table, using model.

By default laravel creates models in *app* directory. But it is a good practise to keep your models in a directory like *app/Models* or *app/Entities*. 

What a model contains?
As a representative of table, it has all the fields ( columns ) in that table.
In adition to fields, you can define relationships with other models. Also You can write accessors, mutators. We will see accessors and mutators in future.

#Controller
This is the part where we need to write all the business logics. When a user requests any url, laravel will take that request to a controller method - you defined in routes. It will fetch data using models if needed and provide data to views to serve.

Nowadays there are well known design patterns which breakdown business logics in sevaral parts. But as a learner, it is good to write business logics only in controllers.

Laravel has a controller directory *app/Http/Controllers*. All your controllers will go there. You can create subdirectory inside it to organise your controllers

#View
Views are the responsible for showing responses. In views, you will define how the response will be shown. *blade* is the templating engine of laravel.

You need to create all your views in *resources/views* directory. You can create subdirectory inside it to organise your views.