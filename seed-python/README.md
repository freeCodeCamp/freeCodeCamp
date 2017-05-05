# Free Code Camp - Python Curriculum
This repo is for the Free Code Camp Python curriculum. Everything here is a
reference to [this issue](https://github.com/freeCodeCamp/freeCodeCamp/issues/14588) on
the FCC repo.  Currently, how the lessons and tests will be implemented is up
in the air a little. This repo contains the basic lesson plan for each section.
Once the implementation is figured out we can get everything re-jiggered to the
correct layout.

There is no particular order to the lessons as of yet. Each lesson is a separate
module and should be treated as independent of each other. Currently each
module contains a `lesson.md` and a `tests.py`. `lesson.md` is a markdown file
to allow for easier development and to lower the bar for contributors. When
pasting into `repl.it` the file can be contained within `'''` to make it one
large, module-level docstring which will contain no syntax errors.


## Outline
### Intro to Python
- [X] What and Whys of Python
- [X] Legacy Python vs Python 3.6
- [ ] Getting Started
    - What is an interpretter/REPL?
    - [ ] repl.it
    - [ ] Installing
        - [ ] virtualenvs
    - [X] PEP 20
        - [X] `import this`
- [ ] JavaScript vs Python Gotcha's
### Beginner Python
- [ ] Basics
    - [ ] print()
    - [ ] variables
    - [ ] comments
        - [ ] `#`
        - [ ] `"""`
        - [ ] mention documentation
    - [ ] basic maths
        - skip over explaining types here..."we'll get to that next."
- [ ] Primitive Types
    - [X] `type()`
    - [X] `int`
    - [X] `float`
    - [ ] `str`
        - [ ] mention unicode
        - [ ] single vs double quotes
        - [ ] string concat and interperlation
        - [ ] str.methods()
            - [ ] `lower()`, `upper()`
            - [ ] `strip()`
            - [ ] `isalpha()`, `isdigit()`, `isspace()`
            - [ ] `startswith()`, `endswith()`
            - [ ] `split()`, `join()`
            - [ ] `find()`, `replace()`
        - [ ] string formatting  # `.format()`, `%s`, `f'string'`
    - [ ] `list`
        - [ ] index / 0 index
        - [ ] `len()`
        - [ ] `append()`, `remove()`
        - [ ] slice
        - [ ] `insert()`, `extend()`, `index()`
        - [ ] `sort()`, `reverse()`, `pop()`
    - [ ] `tuple`
        - [ ] immutable vs mutable
        - [ ] tuple unpacking
    - [ ] `dict`
        - [ ] mention 'hash table'
        - [ ] key/value pair
        - [ ] `get()`
        - [ ] `del`
        - [ ] `keys()`, `values()`, `items()`
            - [ ] Legacy vs Python 3.6
    - [ ] `set()` # are these needed in an intro?
        - [ ] same as list, but no duplicats
        - [ ] `add()`
    - [ ] `bool`
        - [ ] truthy/falsey
- [ ] Operators
    - [ ] +, -, *, /, //, %, **
    - [ ] +=, -=, *=, /=
    - [ ] <, >, <=, =>, ==, !=
    - [ ] <<, >>, &, |, ~, ^
    - [ ] `is`, `not`
- [ ] Math
    - [ ] add, subtract, multiply, divide
    - [ ] `pow()`, `sqrt()`, `abs()`, `round()`, `sum()`, `max()`, `min()`
    - [ ] `random.random()`, `random.choice()`
- [ ] Conditionals
    - [ ] `if`
    - [ ] `else`
    - [ ] `elif`
- [ ] Loops
    - [ ] `while`
    - [ ] `for .. in ...`
        - [ ] `in` can check for membership too (`if thing in things:`)
    - [ ] `range()`
        - [ ] note `xrange()`
    - [ ] `enumerate()`
- [ ] Functions
    - [ ] `pass`
    - [ ] `return`
        - [ ] multiple items
        - [ ] tuple unpacking
    - [ ] arugments
    - [ ] keyword arguments
    - [ ] default arguments
    - [ ] `*args`, `**kwargs`

### Intermediate Python
- [ ] PEP 8 / PEP 20
- [ ] File I/O
    - [ ] `with`
    - [ ] reading
    - [ ] writing
- [ ] Exceptions
    - try/catch
    - logging
- [ ] Classes / OOP
    - [ ] `__init__`
        - note about dunder
    - [ ] `self`
    - [ ] methods
- [ ] Modules / Libraries, Packages
    - [ ] std lib
        - [ ] using csv to read a CSV file
        - [ ] collections
            - [ ] namedtuple
        - [ ] itertools
        - [ ] `os`, `sys`
    - [ ] installing/virtualenvs
    - [ ] pip / pypi
    - [ ] 3rd Party
        - [ ] requests
        - [ ] scrapy
- [ ] Iterators
- [ ] Generators
- [ ] Comprehensions
    - [ ] list
    - [ ] generator
    - [ ] dict
- [ ] lambda
- [ ] Decorators
- [ ] testing

### Advanced Python
- [ ] Context Managers
- [ ] asyncio

### Projects
- [ ] Machine Learning
- [ ] Data Science
    - [ ] Pandas
    - [ ] Numpy
    - [ ] Data Visualization
        - [ ] IPython/Jupyter
        - [ ] bokeh
- [ ] Webscraping
    - [ ] BeautifulSoup
    - [ ] Scrapy
- [ ] GIS
    - [ ] Leaflet
    - [ ] Folium
    - [ ] geopy
- [ ] Web Frameworks (Flask or Django)
    - [ ] Flask
    - [ ] Django
    - [ ] can probably only focus on one
- [ ] GUI
    - [ ] tkinter
- [ ] Natural Language Toolkit (NLTK)
