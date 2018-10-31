There are sevaral ways to start a new project. You can just download a quick start project from github. Or you can use composer - a powerful tool for php package management.
If you are not familier with composer, downloading project is simpler but using composer is recomended as today or tomorrow you are going to find cause by yourself. Here we will use composer. We are using linux mint as OS.

#Step-1
Let's create a todo project. Run the following command in terminal:

`composer create-project --prefer-dist laravel/laravel todo`

Then composer will create a new folder named "todo" and create a project using laravel inside it.

It is not ready to run yet.

#Step-2
Run in terminal: 

`cd todo`

Now we need to create a .env file. For this we will copy the .env.example file which you will find in the todo folder. To copy, run

`cp .env.example .env`

#Step-3
Need to install laravel dependency. Run 
`composer update`

#Step-4
`php artisan key:generate`

Congratulations, you have set up your project. Now again run

`php artisan serve`

Your first laravel website is running locally.
You can check in your favorite browser. Goto localhost:8000.