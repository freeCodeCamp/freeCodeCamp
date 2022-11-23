---
id: 5e46f979ac417301a38fb932
title: Сканер портів
challengeType: 10
forumTopicId: 462372
helpCategory: Python
dashedName: port-scanner
---

# --description--

Ви будете <a href="https://replit.com/github/freeCodeCamp/boilerplate-port-scanner" target="_blank" rel="noopener noreferrer nofollow">працювати над цим проєктом з нашим стартовим кодом Replit</a>.

Ми й досі в процесі розробки інтерактивної складової навчального курсу Python. Наразі можете ознайомитись із наступними відео на YouTube каналі freeCodeCamp.org. У них ви знайдете все необхідне для завершення цього проєкту:

- <a href="https://www.freecodecamp.org/news/python-for-everybody/" target="_blank" rel="noopener noreferrer nofollow">Python for Everybody Video Course</a> (14 hours)

- <a href="https://www.freecodecamp.org/news/learn-python-basics-in-depth-video-course/" target="_blank" rel="noopener noreferrer nofollow">Learn Python Basics in Depth</a> (4 hours)

- <a href="https://www.freecodecamp.org/news/intermediate-python-course/" target="_blank" rel="noopener noreferrer nofollow">Intermediate Python Course</a> (6 hours)

# --instructions--

Створення сканера портів за допомогою Python.

In the `port_scanner.py` file, create a function called `get_open_ports` that takes a `target` argument and a `port_range` argument. `target` can be a URL or IP address. `port_range` is a list of two numbers indicating the first and last numbers of the range of ports to check.

Here are examples of how the function may be called:

```py
get_open_ports("209.216.230.240", [440, 445])
get_open_ports("www.stackoverflow.com", [79, 82])
```

The function should return a list of open ports in the given range.

The `get_open_ports` function should also take an optional third argument of `True` to indicate "Verbose" mode. If this is set to true, the function should return a descriptive string instead of a list of ports.

Here is the format of the string that should be returned in verbose mode (text inside `{}` indicates the information that should appear):

```bash
Open ports for {URL} ({IP address})
PORT     SERVICE
{port}   {service name}
{port}   {service name}
```

You can use the dictionary in `common_ports.py` to get the correct service name for each port.

For example, if the function is called like this:

```py
port_scanner.get_open_ports("scanme.nmap.org", [20, 80], True)
```

It should return the following:

```bash
Open ports for scanme.nmap.org (45.33.32.156)
PORT     SERVICE
22       ssh
80       http
```

Make sure to include proper spacing and new line characters.

If the URL passed into the `get_open_ports` function is invalid, the function should return the string: "Error: Invalid hostname".

If the IP address passed into the `get_open_ports` function is invalid, the function should return the string: "Error:  Invalid IP address".

## Розробка

Запишіть свій код у `port_scanner.py`. Для розробки ви можете використати `main.py`, щоб протестувати свій код. Натисніть кнопку «run» і `main.py` запуститься.

## Тестування

Модульні тести для цього проєкту знаходяться в `test_module.py`. Ми імпортували тести з `test_module.py` до `main.py` для вашої зручності. Тести запустяться автоматично, коли ви натиснете на кнопку «run».

## Надсилання

Скопіюйте URL-адресу свого проєкту та відправте її до freeCodeCamp.

# --hints--

Він повинен пройти усі тести Python.

```js

```

# --solutions--

```py
  # Python challenges don't need solutions,
  # because they would need to be tested against a full working project.
  # Please check our contributing guidelines to learn more.
```
