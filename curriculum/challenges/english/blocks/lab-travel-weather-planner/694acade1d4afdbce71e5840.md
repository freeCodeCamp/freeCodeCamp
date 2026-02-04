---
id: 694acade1d4afdbce71e5840
title: Build a Travel Weather Planner
challengeType: 27
dashedName: build-a-travel-weather-planner
---

# --description--

**Objective:** Fulfil the user stories below and get all the tests to pass to complete the lab.

1. You should create the following variables:
   * `distance_mi` (a number representing the distance to travel in miles)
   * `is_raining` (a boolean representing if the user is currently experiencing rainy weather)
   * `has_bike` (a boolean representing if the user has a bicycle)
   * `has_car` (a boolean representing if the user is has a car)
   * `has_ride_share_app` (a boolean representing if the user is has an app that allows them to request a ride)
2. You should use conditional statements to determine whether commuting is possible based on the values of these variables.
3. If `distance_mi` is a falsy value:
   * You should print `False`.
4. If the distance is **less than or equal to 1 mile**:
   * You should print `True` only if it is **not raining**.
   * Otherwise, you should print `False`.
5. If the distance is **greater than 1 mile and less than or equal to 6 miles**:
   * You should print `True` only if the person has a bike **and** it is not raining.
   * Otherwise, you should print `False`.
6. If the distance is **greater than 6 miles**:
   * You should print `True` if the person has a car **or** has a ride-share app.
   * Otherwise, you should print `False`.
7. You should use `if`, `elif`, and `else` statements to evaluate the distance categories in ascending order.

# --hints--

You should have a variable named `distance_mi`.

```js
({ test: () => runPython(`assert _Node(_code).has_variable("distance_mi")`) })
```

You should assign a number to your `distance_mi` variable.

```js
({ test: () => runPython(`assert isinstance(distance_mi, (int, float))`) })
```

You should have a variable named `is_raining`.

```js
({ test: () => runPython(`assert _Node(_code).has_variable("is_raining")`) })
```

You should assign a boolean to your `is_raining` variable.

```js
({ test: () => runPython(`assert isinstance(is_raining, bool)`) })
```

You should have a variable named `has_bike`.

```js
({ test: () => runPython(`assert _Node(_code).has_variable("has_bike")`) })
```

You should assign a boolean to your `has_bike` variable.

```js
({ test: () => runPython(`assert isinstance(has_bike, bool)`) })
```

You should have a variable named `has_car`.

```js
({ test: () => runPython(`assert _Node(_code).has_variable("has_car")`) })
```

You should assign a boolean to your `has_car` variable.

```js
({ test: () => runPython(`assert isinstance(has_car, bool)`) })
```

You should have a variable named `has_ride_share_app`.

```js
({ test: () => runPython(`assert _Node(_code).has_variable("has_ride_share_app")`) })
```

You should assign a boolean to your `has_ride_share_app` variable.

```js
({ test: () => runPython(`assert isinstance(has_ride_share_app, bool)`) })
```

You should use at least one `if` statement.

```js
({ test: () => runPython(`
import ast

tree = ast.parse(_code)
ifs = [node for node in ast.walk(tree) if isinstance(node, ast.If)]
assert len(ifs) >= 1
`) })
```

You should use at least one `elif` branch in your program.

```js
({ test: () => runPython(`
import ast

tree = ast.parse(_code)
elifs = []

for node in ast.walk(tree):
    if isinstance(node, ast.If) and node.orelse:
        if isinstance(node.orelse[0], ast.If):
            elifs.append(node)

assert len(elifs) >= 1
`) })
```

You should use at least one boolean operator (`and`, `or`, or `not`) in a condition.

```js
({ test: () => runPython(`
import ast

tree = ast.parse(_code)

bool_ops = [
    node for node in ast.walk(tree)
    if isinstance(node, (ast.BoolOp, ast.UnaryOp))
]

assert len(bool_ops) >= 1
`) })
```

You should use the `print()` function to display the result.

```js
({ test: () => runPython(`assert _Node(_code).block_has_call("print")`) })
```

When the distance is `1` mile or less and it is not raining, the program should print `True`.

```js
({ test: () => runPython(`
import ast, io, contextlib

VARIABLES = {
    "distance_mi",
    "is_raining",
    "has_bike",
    "has_car",
    "has_ride_share_app"
}

def run_case(env, expected):
    tree = ast.parse(_code)

    tree.body = [
        node for node in tree.body
        if not (
            isinstance(node, ast.Assign)
            and isinstance(node.targets[0], ast.Name)
            and node.targets[0].id in VARIABLES
        )
    ]

    clean_code = compile(tree, "<ast>", "exec")

    buffer = io.StringIO()
    with contextlib.redirect_stdout(buffer):
        exec(clean_code, env)

    assert buffer.getvalue().strip() == expected


run_case(
    {
        "distance_mi": 0.5,
        "is_raining": False,
        "has_bike": False,
        "has_car": False,
        "has_ride_share_app": False
    },
    "True"
)
`) })
```

When the distance is between `1` mile (excluded) and `6` miles (included), and it is raining with no bike, the program should print `False`.

```js
({ test: () => runPython(`
import ast, io, contextlib

VARIABLES = {
    "distance_mi",
    "is_raining",
    "has_bike",
    "has_car",
    "has_ride_share_app"
}

def run_case(env, expected):
    tree = ast.parse(_code)

    tree.body = [
        node for node in tree.body
        if not (
            isinstance(node, ast.Assign)
            and isinstance(node.targets[0], ast.Name)
            and node.targets[0].id in VARIABLES
        )
    ]

    clean_code = compile(tree, "<ast>", "exec")

    buffer = io.StringIO()
    with contextlib.redirect_stdout(buffer):
        exec(clean_code, env)

    assert buffer.getvalue().strip() == expected


run_case(
    {
        "distance_mi": 4,
        "is_raining": True,
        "has_bike": False,
        "has_car": False,
        "has_ride_share_app": False
    },
    "False"
)
`) })
```

When the distance is greater than `6` miles and a ride share app is available, the program should print `True`.

```js
({ test: () => runPython(`
import ast, io, contextlib

VARIABLES = {
    "distance_mi",
    "is_raining",
    "has_bike",
    "has_car",
    "has_ride_share_app"
}

def run_case(env, expected):
    tree = ast.parse(_code)

    tree.body = [
        node for node in tree.body
        if not (
            isinstance(node, ast.Assign)
            and isinstance(node.targets[0], ast.Name)
            and node.targets[0].id in VARIABLES
        )
    ]

    clean_code = compile(tree, "<ast>", "exec")

    buffer = io.StringIO()
    with contextlib.redirect_stdout(buffer):
        exec(clean_code, env)

    assert buffer.getvalue().strip() == expected


run_case(
    {
        "distance_mi": 12,
        "is_raining": True,
        "has_bike": False,
        "has_car": False,
        "has_ride_share_app": True
    },
    "True"
)
`) })
```

When the distance is greater than `6` miles and a car is available, the program should print `True`.

```js
({ test: () => runPython(`
import ast, io, contextlib

VARIABLES = {
    "distance_mi",
    "is_raining",
    "has_bike",
    "has_car",
    "has_ride_share_app"
}

def run_case(env, expected):
    tree = ast.parse(_code)

    tree.body = [
        node for node in tree.body
        if not (
            isinstance(node, ast.Assign)
            and isinstance(node.targets[0], ast.Name)
            and node.targets[0].id in VARIABLES
        )
    ]

    clean_code = compile(tree, "<ast>", "exec")

    buffer = io.StringIO()
    with contextlib.redirect_stdout(buffer):
        exec(clean_code, env)

    assert buffer.getvalue().strip() == expected


run_case(
    {
        "distance_mi": 12,
        "is_raining": True,
        "has_bike": False,
        "has_car": True,
        "has_ride_share_app": False
    },
    "True"
)
`) })
```

When the distance is between `1` mile (excluded) and `6` miles (included), a bike is available, and it is not raining, the program should print `True`.

```js
({ test: () => runPython(`
import ast, io, contextlib

VARIABLES = {
    "distance_mi",
    "is_raining",
    "has_bike",
    "has_car",
    "has_ride_share_app"
}

def run_case(env, expected):
    tree = ast.parse(_code)

    tree.body = [
        node for node in tree.body
        if not (
            isinstance(node, ast.Assign)
            and isinstance(node.targets[0], ast.Name)
            and node.targets[0].id in VARIABLES
        )
    ]

    clean_code = compile(tree, "<ast>", "exec")

    buffer = io.StringIO()
    with contextlib.redirect_stdout(buffer):
        exec(clean_code, env)

    assert buffer.getvalue().strip() == expected


run_case(
    {
        "distance_mi": 5,
        "is_raining": False,
        "has_bike": True,
        "has_car": False,
        "has_ride_share_app": False
    },
    "True"
)
`) })
```

When the distance is exactly `1` mile and it is raining, the program should print `False`.

```js
({ test: () => runPython(`
import ast, io, contextlib

VARIABLES = {
    "distance_mi",
    "is_raining",
    "has_bike",
    "has_car",
    "has_ride_share_app"
}

def run_case(env, expected):
    tree = ast.parse(_code)

    tree.body = [
        node for node in tree.body
        if not (
            isinstance(node, ast.Assign)
            and isinstance(node.targets[0], ast.Name)
            and node.targets[0].id in VARIABLES
        )
    ]

    clean_code = compile(tree, "<ast>", "exec")

    buffer = io.StringIO()
    with contextlib.redirect_stdout(buffer):
        exec(clean_code, env)

    assert buffer.getvalue().strip() == expected


run_case(
    {
        "distance_mi": 1,
        "is_raining": True,
        "has_bike": True,
        "has_car": True,
        "has_ride_share_app": True
    },
    "False"
)
`) })
```

When the distance is exactly `6` miles and a bike is available but it is raining, the program should print `False`.

```js
({ test: () => runPython(`
import ast, io, contextlib

VARIABLES = {
    "distance_mi",
    "is_raining",
    "has_bike",
    "has_car",
    "has_ride_share_app"
}

def run_case(env, expected):
    tree = ast.parse(_code)

    tree.body = [
        node for node in tree.body
        if not (
            isinstance(node, ast.Assign)
            and isinstance(node.targets[0], ast.Name)
            and node.targets[0].id in VARIABLES
        )
    ]

    clean_code = compile(tree, "<ast>", "exec")

    buffer = io.StringIO()
    with contextlib.redirect_stdout(buffer):
        exec(clean_code, env)

    assert buffer.getvalue().strip() == expected


run_case(
    {
        "distance_mi": 6,
        "is_raining": True,
        "has_bike": True,
        "has_car": False,
        "has_ride_share_app": False
    },
    "False"
)
`) })
```

# --seed--

## --seed-contents--

```py

```

# --solutions--

```py
distance_mi = 12
is_raining = False
has_bike = False
has_car = False
has_ride_share_app = True

if not distance_mi:
    print(False)

elif distance_mi <= 1:
    print(not is_raining)

elif distance_mi <= 6:
    print(has_bike and not is_raining)

else:
    print(has_car or has_ride_share_app)
```

