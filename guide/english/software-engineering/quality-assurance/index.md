---
title: Quality Assurance
---

## Quality Assurance

Quality Assurance (commonly known as QA) is the means by which a product in development is checked to make sure it works as it's supposed to. The actual methods used in QA processes vary hugely depending on the size and nature of the product.

For a personal project you will probably just test as you go, asking others to provide feedback at appropriate stages. By contrast, a banking application must have every aspect of every feature exhaustively checked and documented to ensure it is both functional and safe.

Regardless of how formal or detailed a QA process is, its aim is to identify bugs so they can be resolved before the product is released.

### Methodologies

#### Agile

In an Agile approach to development, the aim is that each cycle of work ('sprint') produces working software that can be added to and improved upon iteratively. This makes QA processes an intrinsic part of the development cycle. By testing software components at each stage of their production you reduce the risk of bugs being present at release.

### Terminology

#### Automation Testing

Testing done with pre-written scripts designed to control the execution of tests.

#### Black Box

These test do not look inside the system under test, but treat it as 'closed' in the same way that the end user will experience it.

#### Defect

Any deviation from an application's specifications; often referred to as a &ldquo;bug&rdquo;.

#### Exploratory Testing

An unscripted approach to testing, which relies on the tester's unique creativity in an effort to find unknown bugs and identify regressions.

#### Integration Testing

Testing individual components/modules together to ensure they connect and interact well with one another.

#### Negative Path Testing

A testing scenario designed to produce an error state in a feature/application and verify that the error is handled gracefully. An example of this is inputing a series of numbers in the email field in a user registration form and checking to make sure the registration is not accepted until an actual email address is provided.

#### Regression Testing

Testing done on a new build to ensure that new functionality has not unintentionally broken previously tested functionality.

#### Smoke Tests

A minimalistic approach to testing intended to ensure basic functionality is working before more in-depth testing takes place. Typically occurs at the beginning of the testing process.

#### Test Case

Specified preconditions, steps, and expected results referred to by a QA tester/engineer to determine whether or not a feature performs its task as expected.

#### White Box

Refers to tests performed at a structural level, within the codebase. Programmers checking that the inputs to and outputs from specific functions or components would be white box testing.

Also known as 'Glass Box', 'Clear Box', 'Transparent Box' because the tester can 'see inside' the system under test.

Main categories are:

* **Unit tests** (individual units of code do what they should)
* **Integration tests** (units/components interact with each other properly)
* **Regression tests** (re-applying tests at later stages of development to ensure they still work)


There are three main techniques:
* **Equivalence partitioning** (the tested input values are representative of larger input datasets)
* **Boundary Value Analysis** (the system is tested with chosen inputs where behaviour and therefore output should change)
* **Cause-Effect Graphing** (tests are designed from a visualization of the input-output relations)


### Other Resources

<a href='https://guide.freecodecamp.org/agile/test-driven-development' target='_blank' rel='nofollow'>Test Driven Development (freeCodeCamp Guide)</a>

<a href='https://guide.freecodecamp.org/software-engineering/unit-tests/' target='_blank' rel='nofollow'>Unit tests (freeCodeCamp Guide)</a>

[Software Testing Fundamentals](http://softwaretestingfundamentals.com/)



