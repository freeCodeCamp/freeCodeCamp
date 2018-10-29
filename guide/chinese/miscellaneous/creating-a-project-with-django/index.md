---
title: Creating a Project with Django
localeTitle: 使用Django创建项目
---
既然我们知道如何创建虚拟环境并使用pip，我们就可以开始构建我们的项目了。在本文中，我们将创建我们的第一个Django项目，编写测试，并启动我们的开发服务器。

## 创建虚拟环境

首先，让我们为这个项目创建一个新的虚拟环境。 （如果您还没有，请通过在终端中键入`deactivate`来`deactivate`以前的virtualenv）。有关虚拟环境以及如何使用它们的更多信息，请访问此页面 。

导航到您想要Django项目的目录，并在终端中键入以下内容：
```
mkvirtualenv taskplanner --python=/usr/bin/python3 
```

如果它看起来与上面的路径不同，您可能必须更改Python路径。

现在，命令行shell应如下所示，表明您处于虚拟环境中。
```
(taskplanner)<a href='https://sites.google.com/a/chromium.org/chromedriver/downloads' target='_blank' rel='nofollow'>munsterberg@Lenovo ~/workspace] $ 
```

如果它看起来不像那样，只需输入：
```
workon taskplanner 
```

我们现在可以安装Django了：
```
pip install Django 
```

## 创建我们的Django项目

安装Django后，我们可以创建我们的项目：
```
django-admin.py startproject taskplanner 
```

接下来，键入以下内容导航到我们的新项目：
```
cd taskplanner 
```

在我们做任何事情之前，让我们使用virtualenvwrapper将此目录设置为我们的工作目录：
```
setvirtualenvproject 
```

**旁注** ：有关virtualenvwrapper命令的列表，请在终端中键入`virtualenvwrapper` 。

现在，当我们处于虚拟环境中时，我们可以输入`cdproject`直接导航到我们的工作目录。

您的项目目录应如下所示：
```
taskplanner // our main working directory 
 |--- manage.py // similar to the django-admin script, you will see this used a 
               // lot throughout our project 
 |--- taskplanner 
    |--- __init__.py // this just tells python to treat this directory as a package 
    |--- settings.py // main configuration file for our project 
    |--- urls.py // we will use this to configure urls 
    |--- wsgi.py // this is used for deploying our project to a production server 
```

## 功能测试

测试驱动开发是开发软件中广泛使用的最佳实践。基本上，我们希望首先编写一个必然会失败的测试，然后编写尽可能少的代码来通过该测试。使用Django，我们的目标是在整个开发过程中编写功能测试（也称为集成测试，端到端测试等）和单元测试。不要出汗，测试并不像看起来那么困难！

但首先，我们需要创建一个专门用于测试的新虚拟环境。在终端中打开一个新选项卡，导航到您的任务计划项目目录并键入：
```
mkvirtualenv taskplanner_test --python=/usr/bin/python3 
```

现在，您应该在终端中打开2个选项卡，一个位于（taskplanner）虚拟环境中，另一个位于（taskplanner\_test）虚拟环境中。

如果在我们的新测试环境（taskplanner\_test）中键入`pip freeze` ，您将看不到任何内容。这是因为我们还没有在新环境中安装任何东西。

所以让我们先将Django安装到我们的测试环境中（taskplanner\_test）：
```
pip install Django 
```

要创建我们的功能测试，我们需要一些东西。首先，我们需要在我们的机器上安装Firefox Web浏览器。如果您没有Firefox，请立即安装。

**旁注** ：您可以使用Chrome进行集成测试，但是您必须在[此处](https://sites.google.com/a/chromium.org/chromedriver/downloads)下载驱动程序并遵循[此堆栈溢出问题](http://stackoverflow.com/questions/13724778/how-to-run-selenium-webdriver-test-cases-in-chrome) 。在运行集成测试时，Firefox的性能始终优于chrome，这是一个非常重要的考虑因素，因为与单元测试相比，集成测试非常慢。

这是因为集成测试正在测试**整个**系统，而不是“单元”（小组件）。在现实世界中，有时最好避免集成测试，因为创建它们需要很长的开发时间，运行时间慢，模糊错误以及您及时发现的其他原因。

但是，在开发真实世界的应用程序时，它们仍然值得我们考虑，尽管性能下降，但在可靠性方面仍然非常有用。

接下来，我们需要安装一个名为[Selenium](http://selenium.googlecode.com/svn/trunk/docs/api/py/index.html)的软件包。这个包将为我们提供一个WebDriver，以便我们可以使用我们的测试来控制浏览器。 Selenium通常用于自动化您的浏览器。
```
pip install selenium 
```

现在我们已经安装了，我们需要一个目录来创建我们的测试：
```
mkdir functional_tests 
```

在`taskplanner`目录中，您现在应该看到以下内容：
```
taskplanner 
 |-- functional_tests 
 |--- manage.py 
 |--- taskplanner 
    ... 
```

我们现在需要在`functional_tests`文件夹中创建一些文件。我们将创建一个`__init__.py`文件（这将告诉python将`functional_tests`视为一个包），以及一个`test_all_users.py`文件来包含我们的测试。

我们现在就这样做：
```
touch functional_tests/__init__.py 
 touch functional_tests/test_all_users.py 
```

**旁注** ： `__init__.py`几乎总是一个空文件。有关它的用途的更多信息，请参阅[此stackoverflow答案。](http://stackoverflow.com/questions/448271/what-is-init-py-for)

我们终于可以开始编写第一个功能测试！功能测试用于在我们的Web应用程序中测试功能块。使用Python的TDD将功能测试描述为“应用程序如何从用户的角度运行”。

那么让我们在文本编辑器中打开`test_all_users.py`文件。首先，我们想要导入selenium的webdriver，为了使这更容易，Django提供了一些名为StaticLiveServerTestCase的实时测试。我们现在导入这两个：
```
from selenium import webdriver 
 from django.contrib.staticfiles.testing import StaticLiveServerTestCase 
```

由于我们是从用户角度进行测试，因此我们将这些测试命名为NewVisitorTest。添加以下内容：
```
class NewVisitorTest(StaticLiveServerTestCase): 
    def setUp(self): 
        self.browser = webdriver.Firefox() 
        self.browser.implicitly_wait(2) 
 
    def tearDown(self): 
        self.browser.quit() 
```

首先，我们创建一个名为NewVisitorTest的StaticLiveServerTestCase类，它将包含我们要为新访问者运行的测试。然后，我们有两个名为setUp和tearDown的方法。我们运行测试时初始化setUp方法。因此，对于我们运行的每个测试，我们打开Firefox并等待2秒钟以加载页面。 tearDown在每次测试完成后运行，此方法在每次测试后为我们关闭浏览器。

现在我们可以编写第一个测试，让Firefox自动打开和关闭。我们现在在tearDown方法下面编写我们的测试。
```
    def test_home_title(self): 
        self.browser.get('http://localhost:8000') 
        self.assertIn('Welcome to Django', self.browser.title) 
```

我们第一次测试，多么令人兴奋让我们来看看吧。我们要创建的每个测试都必须以'test'开头。例如，如果我想为我的css创建一个测试，我会调用方法`test_h2_css` 。所以在这里，我们将测试命名为`test_home_title` 。这是非常不言自明的，这正是我们对测试的要求。该方法首先将Firefox引入URL `http://localhost:8000` ，然后检查“欢迎使用Django”是否在html head标签中。

我们现在运行此测试，看看会发生什么：
```
python manage.py test functional_tests 
```

首先，我们究竟在这里输入什么？ manage.py脚本为我们提供了一个名为'test'的东西，我们将使用它来运行我们所有的测试。这里我们在我们使用`__init__.py`文件创建的`functional_tests`包上运行它。

运行此之后，您应该在终端中看到以下内容：
```
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
```

所以它失败了，但它给了我们一些方便的建议。首先是AssertionError。 “问题加载页面”中未找到“欢迎使用Django”。这意味着`http://localhost:8000`的标题是“问题加载页面”。如果您导航到该网址，您将看到该网页不可用。

让我们尝试运行我们的Django服务器以通过测试。切换回`taskplanner`虚拟环境中的终端选项卡并运行我们的服务器。
```
python manage.py runserver 
```

您应该看到如下内容：
```
Performing system checks... 
 
 System check identified no issues (0 silenced). 
 
 You have unapplied migrations; your app may not work properly until they are applied. 
 Run 'python manage.py migrate' to apply them. 
 
 March 06, 2016 - 20:53:38 
 Django version 1.9.4, using settings 'taskplanner.settings' 
 Starting development server at http://127.0.0.1:8000/ 
 Quit the server with CONTROL-C. 
```

不要担心未应用的迁移消息。

现在我们在`http://localhost:8000`运行了一个服务器，让我们再次运行我们的测试。

返回`taskplanner_test`虚拟环境中的另一个终端选项卡，再次运行以下命令：
```
python manage.py test functional_tests 
```

您应该看到以下内容。
```
Creating test database for alias 'default'... 
 . 
 ---------------------------------------------------------------------- 
 Ran 1 test in 4.033s 
 
 OK 
 Destroying test database for alias 'default'... 
```

## 我们做了什么

我们第一次通过测试！

我们在本文中已经介绍了很多内容。我们创建了我们的第一个项目，为开发和测试目的设置虚拟环境，编写了我们的第一个功能测试，并通过编写失败的测试，然后使其通过，遵循测试驱动的开发过程。

## 使用入门模板

使用django入门模板启动项目，可以节省大量时间。这些项目使用最佳实践，以便在项目增长后节省您的麻烦。 一些比较受欢迎的项目是

*   [18.11](https://github.com/pydanny/cookiecutter-django)
*   [黑客马拉松首发](https://github.com/DrkSephy/django-hackathon-starter)
*   [边缘](https://github.com/arocks/edge)