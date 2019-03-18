---
title: Acceptance Testing
---

# Acceptance Testing

## Table of Contents
- [Acceptance Testing](#acceptance-testing)
- [Acceptance Criteria](#acceptance-criteria)
- [Acceptance Test Plan - Attributes](#acceptance-test-plan---attributes)
- [Acceptance Test Report - Attributes](#acceptance-test-report---attributes)
  - [Example](#example)
- [Additional Notes](#additional-notes)
- [List of Acceptance Testing Frameworks](#list-of-acceptance-testing-frameworks)
- [More Information](#more-information)

## Acceptance Testing
Acceptance testing is a testing technique which determines whether or not the software system has met the requirement specifications. The main purpose of this testing technique is to evaluate the system's compliance with business requirements and verify it has met the required criteria for delivery to end users.

In software development, user acceptance testing (UAT) - also called beta testing, application testing, and end user testing - is a phase of software development in which the software is tested in the "real world" by the intended audience. In engineering and its various subdisciplines, acceptance testing is a test conducted to determine if the requirements of a specification or contract are met. 

There are various forms of acceptance testing:
- User Acceptance Testing
- Business Acceptance Testing
- Alpha Testing
- Beta Testing

## Acceptance Criteria
Acceptance criteria are defined on the basis of the following attributes:
- Functional Correctness and Completeness
- Data Integrity
- Data Conversion
- Usability
- Performance
- Timeliness
- Confidentiality and Availability
- Installability and Upgradability
- Scalability
- Documentation
- Service

## Acceptance Test Plan - Attributes
Acceptance test activities are carried out in phases. First, the basic tests are executed and, if the test results are satisfactory, then the execution of more complex scenarios are carried out.

The acceptance test plan has the following attributes:
- Introduction
- Acceptance Test Category
- Operation Environment
- Approach
- Feature To Be Tested
- Feature Not To Be Tested
- Responsibilities
- Test Case ID
- Test Title
- Test Objective
- Test Procedure
- Test Schedule
- Resources

Acceptance test activities are designed to reach one of the following conclusions:
- Accept the system as delivered
- Accept the system after the requested modifications have been made
- Do not accept the system

## Acceptance Test Report - Attributes
The acceptance test report has the following attributes:
- Report Identifier
- Summary of Results
- Variations
- Recommendations
- Summary of To-Do List
- Approval Decision

Acceptance testing focuses on checking if the developed software meets all the requirements. Its main purpose is to check if the solution developed meets user expectations.

Acceptance testing is a well-established practice in software development. Acceptance testing is a major part of the Functional Testing of your code.

An Acceptance Test tests that the code performs as expected (i.e., produces the expected output, given the expected inputs).

Acceptance Tests are used to test relatively large functional blocks of software (i.e., features).

### Example
You have created a page that requires the user to first enter their name in a dialog box before they can see the content. You have a list of invited users, so any other user will be returned an error.

There are multiple scenarios here: 
- Every time a page is loaded, the user is required to enter their name
- If their name is in the list, the dialog will disappear and they will see the article
- If their name is not in the list, the dialog box will show an error

You can write Acceptance Tests for each of the sub-features of the bigger dialog box feature. Aside from the code that handles the infrastructure of how the test will be executed, your test for the first scenario may look like the following:
- Given that the page is opened
  - The dialog box should be visible
  - The dialog box should contain an input box
  - The input box should have the placeholder text "Enter your name, please!"
  - The dialog box should contain a "Submit" button

## Additional Notes
Acceptance Tests can be written in any language and run using various tools available that would take care of the infrastructure mentioned above (e.g., opening a browser, loading a page, providing the methods to access elements on the page, assertion libraries, and more).

Every time you write a piece of software that will be used again (even by yourself), it helps to write a test for it. When you or another person make changes to this code, running the tests will ensure that you have not broken existing functionality.

Testing is usually performed by the users or the Subject Matter Experts. This is also called User Acceptance Testing (UAT). UAT involves the most common real-life scenarios. Unlike system testing, it does not focus on the errors or crashes, but on functionality. UAT is done at the end of the testing life cycle and will decide if the software is moved to the next environment or not.

A good way of defining which acceptance tests should be written is to add acceptance criteria to a user story. With acceptance criteria, you can define when a user story is ready to deploy, and the issue completed to your specifications.

In an Agile project, it is important for the team to have acceptance criteria defined for all user stories. The acceptance testing work will use the defined criteria for evaluating the delivered functionality. When a story can pass all acceptance criteria, it is complete. 

Acceptance testing can also validate if a completed epic/story/task fulfills the defined acceptance criteria. In contrast to the definition of done, this criteria can cover specific business cases that the team wants to solve. This provides a good measurement of work quality.

## List of Acceptance Testing Frameworks
- Concordion, Specification by example (SbE) framework
  - Concordion.NET, acceptance testing in .NET
- Cucumber, a behavior-driven development (BDD) acceptance test framework
- Capybara, Acceptance test framework for Ruby web applications
- Behat, BDD acceptance framework for PHP
- Lettuce, BDD acceptance framework for Python
- Fabasoft app.test for automated acceptance tests
- Framework for Integrated Test (Fit)
  - FitNesse, a fork of Fit
- iMacros
- ItsNat Java Ajax web framework with built-in, server based, functional web testing capabilities.
- Mocha, a popular web acceptance test framework based on Javascript and Node.js
- Ranorex
- Robot Framework
- Selenium
- Specification by example (Specs2)
- Watir
- Gauge (software)

## More Information:
- [International Software Testing Qualifications Board](http://www.istqb.org/)
