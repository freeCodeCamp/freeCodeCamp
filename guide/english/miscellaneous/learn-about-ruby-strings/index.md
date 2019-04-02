---
title: Learn About Ruby Strings
---
### Basics:

*   Strings are a series of characters 'strung' together between quotes.
*   Single or double quotes can be used to create strings in Ruby.
*   Ruby does some extra evaluation on strings that are created with double quotes, such as:
    *   Escaping characters: `\n`, `\t`, `\s`

    *   Using variables and expressions inside: `#{variable or expression}`
*   Strings with single quotes are rendered as they are, without any special considerations.

## Examples:

    "Hello World"
    # is equivalent to:
    'Hello World'

    "This is line 1.\nAnd this is line 2."
    # returns:
    This is line 1.
    And this is line 2.

    name = "Batman"
    "Hello, my name is #{name}!"
    # returns:
    Hello, my name is Batman!

    # Note that for single quotes, ruby doesn't take special consideration for variables or backslashes:
    'This is your name:\n#{name}'
    # returns:
    This is your name:\n#{name}

## References:

*   <a href='http://ruby-doc.org/core-2.2.0/String.html' target='_blank' rel='nofollow'>The official Ruby documentation for strings</a>.