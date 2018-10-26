---
title: Learn About Ruby Hashes
---
### Basics:

*   Ruby hashes are comparable to Javascript objects or dictionaries in languages like Python.
*   Hashes contain items that are stored by `key: value` pairs.
*   Ruby hashes can be created using the following methods:
    *   `my_hash = {}`
    *   `my_hash = Hash.new`
*   There are many methods built into Ruby to find information from and update hashes.

## Examples:

    my_hash = {'name' => 'Batman', 'age' => 25}
    # is equivalent to:
    my_hash = Hash.new
    my_hash<a href='http://www.randomhacks.net/2007/01/20/13-ways-of-looking-at-a-ruby-symbol/' target='_blank' rel='nofollow'>'name'] = 'Batman'
    my_hash['age'] = 25
    # Both of these examples return:
    {"name"=>"Batman", "age"=>25}

    # here is an alternative way to create the array:
    {name: 'Batman', age: 25}
    # this example return:
    {:name=>"Batman", :age=>25}
    # learn more about [symbols here</a>

## References:

*   <a href='http://ruby-doc.org/core-2.2.0/Hash.html' target='_blank' rel='nofollow'>The official Ruby documentation for hashes</a>.