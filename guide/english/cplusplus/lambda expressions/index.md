---
title: Lambda expressions
---

## Lambda expressions

[cppreference page](https://en.cppreference.com/w/cpp/language/lambda)

### What is a lambda expression?

Lambda Expressions are nameless functions given as constant values. They can appear anywhere that any other constant may, but are typically written as a parameter to some other function. The canonical example is that you'll pass a comparison function to a generic "sort" routine, and instead of going to the trouble of defining a whole function (and incurring the lexical discontinuity and namespace pollution) to describe this comparison, you can just pass a lambda expression describing the comparison.

### What is a lamda expression in C++11 (or above)?

C++ includes useful generic funtions like [std::for_each](https://en.cppreference.com/w/cpp/algorithm/for_each) and [std::transform](https://en.cppreference.com/w/cpp/algorithm/transform), which can be very handy. Unfortunately they can also be quite cumbersome to use, particularly if the functor you would like to apply is unique to the particular function.

```c++
#include <algorithm>
#include <vector>

namespace {
  struct f {
    void operator()(int) {
      // do something
    }
  };
}

void func(std::vector<int>& v) {
  f f;
  std::for_each(v.begin(), v.end(), f);
}
```

If you only use ```f``` once and in that specific place it semmes overkill to be writing a whole class just to do something trivial and one off.

In C++03 you might be tempted to write something like following, to keep functor local:

```c++
void func2(std::vector<int>& v) {
  struct {
    void operator()(int) {
       // do something
    }
  } f;
  std::for_each(v.begin(), v.end(), f);
}
```
however this not allowed, ```f``` can not be passed to a [template](https://en.cppreference.com/w/cpp/language/templates) function in C++03

#### The new solution

C++11 introduces lamdas allow tou to write an inline, anonymus functor to replace the ```struct f```. For small simple examples this can be cleaner to read (it keeps everything in one place) and potentially simpler to maintain, for example in the simplest form:
```c++
void func3(std::vector<int>& v) {
  std::for_each(v.begin(), v.end(), [](int) { /* do something here*/ });
}
```
Lambda functions are just syntactic sugar for anonymus functors.

#### Return types

In simple cases the return type of lambda is deduced for you, e.g.:
```c++
void func4(std::vector<double>& v) {
  std::transform(v.begin(), v.end(), v.begin(),
                 [](double d) { return d < 0.00001 ? 0 : d; }
                 );
}
```
however when you start to write more complex lambdas you will quickly encounter cases where the return type cannot be deduced by the compiler, e.g.:
```c++
void func4(std::vector<double>& v) {
    std::transform(v.begin(), v.end(), v.begin(),
        [](double d) {
            if (d < 0.0001) {
                return 0;
            } else {
                return d;
            }
        });
}
```
To resolve this you are allowed to explicitly specify a return type for a lambda function, using ``` -> T ```:
```c++
void func4(std::vector<double>& v) {
    std::transform(v.begin(), v.end(), v.begin(),
        [](double d) -> double {
            if (d < 0.0001) {
                return 0;
            } else {
                return d;
            }
        });
}
```

#### Capturing variables
So far we've not used anything other than what was passed to the lambda within it, but we can also use other variables, within the lambda. If you want to access other variables you can use the capture clause (the ```[]``` of the expression), which has so far been unused in these examples, e.g.:
```c++
void func5(std::vector<double>& v, const double& epsilon) {
    std::transform(v.begin(), v.end(), v.begin(),
        [epsilon](double d) -> double {
            if (d < epsilon) {
                return 0;
            } else {
                return d;
            }
        });
}
```

You can capture by both reference and value, which you can specift using ```&``` and ```=``` respectively:
..*```[&epsilon]``` capture by reference
..*```[&]``` captures all variables used in the lambda by reference
..*```[=]``` captures all variables used in the lambda by value
..*```[&, epsilon]``` captures variables like with ```[&]```, but epsilon by value
..*```[=, &epsilon]``` captures variables like with ```[=]```, but epsilon by reference

The generated ```operator()``` is ```const``` by default, with the implication that captures will be ```const``` when you access them by default. This has the effect that each call with the same input would produce the same result, however you can mark the lambda as ```muteable``` to request that the ```operator()``` that is produced is not ```const```.
