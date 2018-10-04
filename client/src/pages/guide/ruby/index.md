---
title: Ruby
---

## What is Ruby?

Ruby was created by Yukihiro "Matz" Matsumoto and is an <a href='https://github.com/ruby/ruby' target='_blank' rel='nofollow'>open source</a>, dynamic and interpreted scripting language for quick and easy object-oriented programming. Which means:

It's also known to have one of the <a href="https://www.ruby-lang.org/en/community/">largest and friendly community</a> among programming languages. 

*   Ability to make operating system calls directly
*   Immediate feedback during development
*   Variable declarations are unnecessary
*   Memory management is automatic
*   Everything is an object
*   Has "mixin" functionality by module
*   Iterators and closures

If you are unfamiliar with some of the concepts above, read on, and don't worry. Ruby focus on simplicity and productivity with an elegant syntax that is natural to read and easy to write, like:
```ruby
# Quick example of Ruby with Object Oriented Programming
class Greeter
  def initialize(name)
    @name = name.capitalize
  end

  def salute
    puts "Hello #{@name}!"
  end
end

# Create a new object
g = Greeter.new("world")

# Output "Hello World!"
g.salute
```
## Version

The current stable version is 2.4.2\. It contains security improvements from its predecessor, ruby v2.3.5.

## Installation

Mac OS X and many Linux distributions come pre-installed with Ruby. To check if ruby is pre-installed in your system, just run `ruby -v` on your shell. There are several ways to install Ruby:

*   When you are on a UNIX-like operating system, using your system’s package manager is the easiest way of getting started. However, the packaged Ruby version usually is not the newest one.
*   Installers can be used to install a specific or multiple Ruby versions. There is also an installer for Windows.
*   Managers help you to switch between multiple Ruby installations on your system.
*   And finally, you can also build Ruby from source.

To know about how to install Ruby through package managers, installers and source, click <a href='https://www.ruby-lang.org/en/documentation/installation/' target='_blank' rel='nofollow'>here</a>. RVM (Ruby Version Manager) and rbenv are the most popular Ruby managers to manage multiple Rubies. If you get stuck anywhere, don't worry, just head over to our <a href='https://gitter.im/FreeCodeCamp/ruby' target='_blank' rel='nofollow'>Gitter chat room</a> and ask us anything.

## IRB

IRB stands for Interactive Ruby Shell. The abbreviation irb comes from the fact that the filename extension for Ruby is ".rb", although interactive Ruby files do not have an extension of ".irb". The program is launched from a command line and allows the execution of Ruby commands with an immediate response, experimenting in real-time. It features command history, line editing capabilities, and job control, and is able to communicate directly as a shell script over the Internet and interact with a live server. It was developed by Keiju Ishitsuka.

```shell
    irb
    2.3.0 :001 > print "Hello World"
    Hello World! => nil
```

## Ruby Interpreter

The Ruby interpreter is what is used to run Ruby scripts. If it is available and in Unix shell’s search path makes it possible to start it by typing the command `ruby` followed by the script name will invoke the interpreter and run the script.

`hello_campers.rb`

```ruby
    if 'welcome' == 'welcome'
        print('Hello campers!')
    end
```
From command-line:
```shell
    $ ruby hello_campers.rb
    Hello campers!
```
## Documentation

Ruby is well <a href='https://www.ruby-lang.org/en/documentation/' target='_blank' rel='nofollow'>documented</a>. These docs include tutorials, guides, references and meta information for language.  
Another important resouce for documentation is <a href='http://ruby-doc.org/core-2.3.0/' target='_blank' rel='nofollow'>Ruby Doc</a>. You should visit this <a href='https://github.com/airbnb/ruby' target='_blank' rel='nofollow'>link</a> to know more about Ruby style guide, written by developers of AirBnB.

A recommended read for beginners in Ruby is <a href='https://poignant.guide/' target='_blank' rel='nofollow'>Why's (Poignant) Guide to Ruby</a>
This book is unusual among programming books. With quite a lot of strange humor and narrative side tracks which are sometimes completely unrelated to the topic, this one manages to keep the readers entertained while they learn Ruby basics. 

## Debugging

Inline `print` statements can be used for simple debugging:
```ruby
    print some_variable # prints to console
```
> **... often the quickest way to debug a program is to add a few print statements to the source: the fast edit-test-debug cycle makes this simple approach very effective.**

Ruby also includes more powerful tools for debugging, such as:  
* <a href='https://github.com/nixme/pry-debugger' target='_blank' rel='nofollow'>_pry-debugger_</a>

## Hello World!

Going back to the docs, we can read about the <a href='http://ruby-doc.org/core-2.3.0/Kernel.html#method-i-print' target='_blank' rel='nofollow'>`print`</a> method, one of the built-in methods of the <a href='http://ruby-doc.org/core-2.3.0/Kernel.html' target='_blank' rel='nofollow'>the Kernel module</a>.  
```ruby
    print(obj, ...) → nil
```
Prints each object to $stdout. Objects that aren’t strings will be converted by calling their `to_s` method. The return value of print is `nil`. So when you run `print "Hello World!` in your IRB. The output is:
```shell
    2.3.0 :001 > print "Hello World!"
    Hello World!
     => nil
```
## Frameworks(gems)

Ruby has several frameworks(gems) for quickly scaffolding applications. The most popular by far is <a href='http://rubyonrails.org/' target='_blank' rel='nofollow'>Rails</a> which was initially released in 2004\. Other frameworks(gems) for Ruby include <a href='http://www.sinatrarb.com/' target='_blank' rel='nofollow'>Sinatra</a>, <a href='http://lotusrb.org/' target='_blank' rel='nofollow'>Lotus</a>, and <a href='http://voltframework.com/' target='_blank' rel='nofollow'>Volt</a>. Each of these options has their pros and cons for development and cater to a variety needs.


## Ruby Framework for mobile development
To write cross-platform native apps in Ruby, RUBY MOTION is used to develop cross-platform native apps for iOS, Android and OS X using the Ruby programming langauge.
More resources here: http://www.rubymotion.com/
