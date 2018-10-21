---
title: Rubocop
---
[Rubocop](https://github.com/bbatsov/rubocop) is a static analyis tool for
[Ruby](https://www.ruby-lang.org/en/). What does this mean? It means Rubocop
will to 'read' your code (as opposed to running it, hence the 'static' part
of the name), and analyse it. The analysis rules Rubocop uses are from the
[Ruby community style guide](https://github.com/bbatsov/ruby-style-guide).

The style guide is a set of specific suggestions about how to write code which
is more readable, more expressive, and more conventional. As a community, it
would be terrific if we could read anyone else's code easily, and they could
read ours easily. This is what Rubocop helps us to do. This sort of tool is
always valuable, but it's particularly useful when you're learning Ruby, and
you may code which is _correct_, but which doesn't stick to Ruby conventions,
or doesn't take advantage of some of Ruby's more powerful features.

Most usefully, Rubocop can automatically fix many of the minor warnings - like
incorrect spacing. This is very helpful before code review as it means your
fellow developers can focus on higher level concerns, and not have to waste
time on syntax issues.

## Using Rubocop

### Installation

Rubocop is delivered as a Gem, so on a typical project which uses Bundler you
would add it to the development section of your `Gemfile`:

```
group :development do
  gem rubocop
end
```

This means anyone using your project will have the same version of Rubocop, and
everyone will agree on what the current best practice is.

### Usage

Before every commit, I like to check that my newly modified code complies with
the commmunity standard, simply by running:
```
rubocop
```

This will output a list of warnings about your code.

It can be helpful to ask Rubocop for more help:
```
rubocop --extra-details --display-cop-names
```
(You might add these to a `.rubocop` file to make them default.)

Many editors will allow you to integrate Rubocop, which can give immediate
feedback when you're writing code.

### Fixing issues

Let's say I've written some new code; before I commit it, I might decide to
check it sticks to the guidelines:
```shell
rubocop <my new file>
```

I can edit make the suggested changes manually, or I can ask Rubocop to fix
minor issues automatically:
```
rubocop --auto-correct
```

### Running only certain Cops

Each community guideline is implemented in a Rubocop 'cop'. When working on a
legacy codebase you might be swamped with warnings when introducing Rubocop.
In this case it can often be useful to run only a single cop across the
codebase, and check those changes in before moving on to the next guideline, for
example:

```
rubocop --auto-correct --only 'Layout/EmptyLineAfterMagicComment'
```

### Text Editor Integration

Rubocop can be integrated with Vim, Visual Studio Code, Atom, and other text editors. A full list can be found [here](https://rubocop.readthedocs.io/en/latest/integration_with_other_tools/).

