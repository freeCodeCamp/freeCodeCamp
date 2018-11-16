---
title: Acceptance Testing
---

## Acceptance Testing

Acceptance Testing, a Testing technique performed to determine whether or not the software system has met the requirement specifications. The main purpose of this test is to evaluate the system's compliance with the business requirements and verify if it is has met the required criteria for delivery to end users.

In software development, User Acceptance Testing (UAT) - also called beta testing, application testing, and end user testing - is a phase of software development in which the software is tested in the "real world" by the intended audience.In engineering and its various subdisciplines acceptance testing is a test conducted to determine if the requirements of a specification or contract are met. 

There are various forms of acceptance testing:

> - User Acceptance Testing
>
> - Business Acceptance Testing
>
> - Alpha Testing
>
> - Beta Testing

## Acceptance Criteria
Acceptance criteria are defined on the basis of the following attributes:

> - Functional Correctness and Completeness
>
> - Data Integrity
>
> - Data Conversion
>
> - Usability
>
> - Performance
>
> - Timeliness
>
> - Confidentiality and Availability
>
> - Installability and Upgradability
>
> - Scalability
>
> - Documentation

## Acceptance Test Plan - Attributes
The acceptance test activities are carried out in phases. Firstly, the basic tests are executed, and if the test results are satisfactory then the execution of more complex scenarios are carried out.

The Acceptance test plan has the following attributes:

> - Introduction
>
> - Acceptance Test Category
>
> - Operation Environment
>
> - Approach
>
> - Feature to be tested
>
> - Feature not to be tested
>
> - Responsibilities
>
> - Test case ID
>
> - Test Title
>
> - Test Objective
>
> - Test Procedure
>
> - Test Schedule
>
> - Resources

The acceptance test activities are designed to reach at one of the conclusions:

- Accept the system as delivered

- Accept the system after the requested modifications have been made

- Do not accept the system

## Acceptance Test Report - Attributes
The Acceptance test Report has the following attributes:

> - Report Identifier
>
> - Summary of Results
>
> - Variations
>
> - Recommendations
>
> - Summary of To-DO List
>
> - Approval Decision

Acceptance Testing focuses on checking if the developed software meets all the requirements. Its main purpose is to check if the solution developed meets the user expectations.

Acceptance Testing is a well-established practice in software development. Acceptance Testing is a major part of Functional Testing of your code.

An Acceptance Test tests that the code performs as expected i.e. produces the expected output, given the expected inputs.

An Acceptance Test are used to test relatively bigger functional blocks of software aka Features.

### Example
You have created a page that requires the user to first enter their name in a dialog box before they can see the content. You have a list of invited users, so any other users will be returned an error.

There are multiple scenarios here such as: 
- Every time you load the page, you need to enter your name.
- If your name is in the list, the dialog will disappear and you will see the article.
- If your name is not in the list, the dialog box will show an error.

You can write Acceptance Tests for each of these sub-features of the bigger dialog box feature. Aside from the code that handles the infrastructure of how the test will be executed, your test for the first scenario could look like (in pseudocode):

- Given that the page is opened
   - The dialog box should be visible
   - And The dialog box should contain an input box
   - And The input box should have placeholder text "Your name, please!"

### Notes

- Acceptance Tests can be written in any language and run using various tools available that would take care of the infrastructure mentioned above e.g. Opening a browser, loading a page, providing the methods to access elements on the page, assertion libraries and so on.

- Every time you write a piece of software that will be used again (even by yourself), it helps to write a test for it. When you yourself or another makes changes to this code, running the tests will ensure that you have not broken existing functionality.

- It is usually performed by the users or the Subject Matter Experts. It is also called User Acceptance Testing (UAT). UAT involves most common real life scenarios. Unlike system testing, it does not focus on the errors or crashes, but on the functionality. UAT is done at the end of the testing life-cycle and will decide if the software is moved to the next environment or not.

- A good way of defining which acceptance tests should be written is to add acceptance criteria to a user story. With acceptance criteria, you can define when a user story is ready to deploy and the issue completed to your wishes.

- In an Agile project it is important for the team to have acceptance criteria defined for all user stories. The Acceptance Testing work will use the defined criteria for evaluating the delivered functionality. When a story can pass all acceptance criteria it is complete. 

- Acceptance testing can also validate if a completed epic/story/task fulfills the defined acceptance criteria. In contrast to definition of done, this criteria can cover specific business cases that the team wants to solve. This provides a good measurement of work quality.

#### More Information:
- [International Software Testing Qualifications Board](http://www.istqb.org/)
