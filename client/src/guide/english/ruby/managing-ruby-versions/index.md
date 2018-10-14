---
title: Managing Ruby versions
---

## Ruby has changed over time

Ruby was been in constant development since the 1990s, and like many languages,
there have been syntax changes across versions, so it is important to be clear
about which Ruby version your code expects.

Probably the most visible change came with Ruby 1.9; previously, we wrote
hashes like this:

```ruby
  { :one => 1, :two => 2, :three => 3 }
```

This use of the 'hashrocket' operator (`=>`) was so common, that Ruby 1.9
provided a shorthand:

```
  { one: 1, two: 2, three: 3 }
```

This older code run on any version, but the newer syntax will only run on Ruby 1.9+.

## How does this cause problems?

For example, you might have decided to use a Gem which internally relies on
Ruby 1.9 features; this means that your project now also relies on Ruby 1.9
features.

If you don't specify which version of Ruby your project needs, it can be very
confusing when code works on one machine, but not another.

As with most languages, it's considered good practice to specify the version of
Ruby that your code expects. This makes it much easier to manage multiple
projects on your development machine, each expecting a different version of
Ruby.

## How do I specify my Ruby version?

There are a couple of tools which are popular for this, but both have agreed to
share a common file. Many Ruby (or Rails) projects will include a simple
`.ruby-version` file, which simply specifies a version number, _eg_:

```
2.4.2
```

Popular tools to help you manage your Ruby version are:

* [Ruby Version Manager (RVM)](https://rvm.io)
* [rbenv](https://github.com/rbenv/rbenv)

Let's look at RVM.

### Using RVM

RVM is typically installed ([link](https://rvm.io)) on a Linux, Unix or MacOS
machine, and is very convenient as it hooks into the `cd` (`c`hange `d`irectory)
command so when you move to a new project, your `.ruby-version` is read
automatically, and you're automatically switched to the correct version of Ruby
before you start working.

For example, you might have this sequence:

```shell
% cd ~/projects/older-project
% ruby --version

ruby 2.3.5p376 (2017-09-14 revision 59905) [x86_64-darwin16]

% cd ~/projects/newer-project
% ruby --version

ruby 2.4.2p198 (2017-09-14 revision 59899) [x86_64-darwin16]
```
(These examples are from a MacOS machine)
