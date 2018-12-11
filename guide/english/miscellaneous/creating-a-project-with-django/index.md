---
title: Creating a Project with Django
---
Now that we know how to create virtual environments and use pip, we can begin building our project. In this article, we will create our first Django project, write tests, and start our development server.

## Creating the Virtual Environment

First, let's create a new virtual environment for this project. (If you haven't already, deactivate the previous virtualenv by typing `deactivate` in the terminal). For more info on virtual environments and how to use them, visit <a>this page</a>.

Navigate to the directory where you want the Django project and type the following into the terminal:

    mkvirtualenv taskplanner --python=/usr/bin/python3

You may have to change your Python path if it looks different than the one above.

The command line shell should now look like below, indicating you are in a virtual environment.

    (taskplanner)<a href='https://sites.google.com/a/chromium.org/chromedriver/downloads' target='_blank' rel='nofollow'>munsterberg@Lenovo ~/workspace] $

If it doesn't look like that, just type:

    workon taskplanner

We can now install Django:

    pip install Django

## Create our Django Project

With Django installed we can create our project:

    django-admin.py startproject taskplanner

Next, navigate into our new project by typing:

    cd taskplanner

Before we do anything, let's set this directory as our working directory using virtualenvwrapper:

    setvirtualenvproject

**Sidenote**: For a list of virtualenvwrapper commands, type `virtualenvwrapper` into your terminal.

Now, when we are in our virtual environment, we can type `cdproject` to navigate straight to our working directory.

Your project directory should look something like this:

    taskplanner // our main working directory
    |--- manage.py // similar to the django-admin script, you will see this used a
                   // lot throughout our project
    |--- taskplanner
        |--- __init__.py // this just tells python to treat this directory as a package
        |--- settings.py // main configuration file for our project
        |--- urls.py // we will use this to configure urls
        |--- wsgi.py // this is used for deploying our project to a production server

## Functional Testing

Test-driven development is a widely used best practice in developing software. Bascially, we want to write a test first that is bound to fail, and then write the least amount of code possible to pass that test. With Django, our goal is to write both functional tests (also known as; integration tests, end-to-end tests, etc.), and unit tests throughout development. Don't sweat it, testing isn't as difficult as it seems!

But first, we need to create a new virtual environment dedicated to testing. Open a new tab in your terminal, navigate to your taskplanner project directory and type:

    mkvirtualenv taskplanner_test --python=/usr/bin/python3

Now you should have 2 tabs open in your terminal, one in the (taskplanner) virtual environment, and the other in the (taskplanner_test) virtual environment.

If you type `pip freeze` in our new testing environment (taskplanner_test), you will notice nothing appears. This is because we have yet to install anything in our new environment.

So let's go ahead and install Django first into our testing environment (taskplanner_test):

    pip install Django

To create our functional tests we are going to need a few things. First, we need to have the Firefox web browser installed in our machine. If you don't have Firefox, install that now.

**Sidenote**: You can use Chrome for integration testing, but you have to download the driver [here](https://sites.google.com/a/chromium.org/chromedriver/downloads) and follow [this stack overflow question](http://stackoverflow.com/questions/13724778/how-to-run-selenium-webdriver-test-cases-in-chrome). Firefox has had historically better performance than chrome when running integration tests, which is a very important consideration since compared to unit tests, integration tests are extremely slow.

This is because integration tests are testing the **entire** system, rather than 'units' (small components). In the real world, sometimes it's best to avoid integration tests because of the long development time to create them, slow run time, ambiguous errors, and other reasons you would discover in time.

However, they are still worth our consideration when developing a real world app, and can be very useful in terms of reliability despite the performance downsides.

Next, we need to install a package called [Selenium](http://selenium.googlecode.com/svn/trunk/docs/api/py/index.html). This package will provide us with a WebDriver so we can control a browser with our tests. Selenium is usually used to automate your browser.

    pip install selenium

Now that we have that installed, we will need a directory to create our tests:

    mkdir functional_tests

In the `taskplanner` directory you should now see the following:

    taskplanner
    |-- functional_tests
    |--- manage.py
    |--- taskplanner
        ...

We now need to create a few files in our `functional_tests` folder. We will create an `__init__.py` file (this will tell python to treat `functional_tests` like a package), and a `test_all_users.py` file to contain our tests.

Let's do that now:

    touch functional_tests/__init__.py
    touch functional_tests/test_all_users.py

**Sidenote**: `__init__.py` is almost always an empty file. For more info on what it's used for, see <a href='http://stackoverflow.com/questions/448271/what-is-init-py-for' target='_blank' rel='nofollow'>this stackoverflow answer.</a>

We can finally start writing our first functional test! Functional tests are for testing chunks of functionality in our web application. TDD with Python describes functional tests as "how the application functions from the user's point of view".

So let's open the `test_all_users.py` file in our text editor. First, we want to import selenium's webdriver, and to make this a lot easier, Django provides something known as StaticLiveServerTestCase for live testing. Let's import both of those now:

    from selenium import webdriver
    from django.contrib.staticfiles.testing import StaticLiveServerTestCase

Since we are testing from the users perspective, let's name these tests NewVisitorTest. Add the following:

    class NewVisitorTest(StaticLiveServerTestCase):
        def setUp(self):
            self.browser = webdriver.Firefox()
            self.browser.implicitly_wait(2)

        def tearDown(self):
            self.browser.quit()

First, we create a StaticLiveServerTestCase class named NewVisitorTest, this will contain our tests that we want to run for a new visitor. Then, we have two methods named setUp and tearDown. The setUp method is initialized when we run our tests. So, for each test we run, we open Firefox and wait 2 seconds for the page to load. tearDown runs after each test is finished, this method closes the browser for us after each test.

Now we can write our first test, and have Firefox open and close automatically for us. Let's write our test now below the tearDown method.

        def test_home_title(self):
            self.browser.get('http://localhost:8000')
            self.assertIn('Welcome to Django', self.browser.title)

Our first test, how exciting! Let's walk through it. Every test we want to create must start with 'test'. For example, if I wanted to create a test for my css, I would call the method `test_h2_css`. So here, we named the test `test_home_title`. That's pretty self-explanatory, which is exactly what we want for our tests. The method first brings Firefox to the url `http://localhost:8000`, and then it checks if 'Welcome to Django' is in the html head tags title.

Let's run this test now and see what happens:

    python manage.py test functional_tests

First, what exactly are we typing here? The manage.py script provides us with something called 'test', we will use this to run all of our tests. Here we are running it on our `functional_tests` package that we created with the `__init__.py` file.

After running this you should see something like the following in your terminal:

    F
    ======================================================================
    FAIL: test_home_title (functional_tests.test_all_users.NewVisitorTest)
    ----------------------------------------------------------------------
    Traceback (most recent call last):
      File "/Users/username/url/to/project/taskplanner/functional_tests/test_all_users.py", line 15, in test_home_title
        self.assertIn('Welcome to Django', self.browser.title)
    AssertionError: 'Welcome to Django' not found in 'Problem loading page'

    ----------------------------------------------------------------------
    Ran 1 test in 4.524s

    FAILED (failures=1)

So it failed, but it gave us some handy advice. First, the AssertionError. 'Welcome to Django' not found in 'Problem loading page'. So that means the title of `http://localhost:8000` was 'Problem loading page'. If you navigate to the url, you will see that the web page was not available.

Let's try running our Django server to get the test to pass. Switch back to the terminal tab that is in the `taskplanner` virtual environment and run our server.

    python manage.py runserver

You should see something like the following:

    Performing system checks...

    System check identified no issues (0 silenced).

    You have unapplied migrations; your app may not work properly until they are applied.
    Run 'python manage.py migrate' to apply them.

    March 06, 2016 - 20:53:38
    Django version 1.9.4, using settings 'taskplanner.settings'
    Starting development server at http://127.0.0.1:8000/
    Quit the server with CONTROL-C.

Don't worry about the unapplied migrations message yet.

Now that we have a server running on `http://localhost:8000`, lets run our test again.

Go back to the other terminal tab that is in the `taskplanner_test` virtual environment and run the following once more:

    python manage.py test functional_tests

You should see the following.

    Creating test database for alias 'default'...
    .
    ----------------------------------------------------------------------
    Ran 1 test in 4.033s

    OK
    Destroying test database for alias 'default'...

## What We've Done So Far

Our first passing test!

We've covered a lot in this article. We created our first project, set up virtual environments for both development and testing purposes, wrote our first functional test, and followed the Test-driven development process by writing a failing test, and then making it making it pass.

## Using starter templates
You can save yourself a lot of time by kickstarting your project with a django starter template. These projects use best practices that will save you headaches later when your project grows.
Some of the more popular projects are
- [Cookiecutter](https://github.com/pydanny/cookiecutter-django)
- [Hackathon starter](https://github.com/DrkSephy/django-hackathon-starter)
- [Edge](https://github.com/arocks/edge)
