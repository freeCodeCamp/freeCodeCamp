---
title: Acceptance Criteria
---
## Acceptance Criteria


The User Story is an item in your backlog that is a placeholder for a conversation. In this conversation,
the Product Owner and the Delivery Team reach an understanding on the desired outcome.

The Acceptance Criteria tells the Delivery Team how the product is expected to behave. The Acceptance Criteria answers the question for the Delivery Team, "How will we know when it's done?"

An example might be:
- "Given a record needs to be reviewed, 
- When the user approves the record, 
- Then the status changes to reflect the decision made by the user."

In contrast:
- "Given the record has a staus code of 2 which means it needs reviewed
- When the user marks the checkbox with the label 'I approve this change'
- Then the database field of need review gets set to false and the field of approved gets set to true and the screen displays that the record is approved and an email is sent to Bill letting him know that June approved the record."

The second example is describing to solution, whereas the first example is more focused on what are the needs, not how those needs will be met by the solution.

If the team is following Test Driven Development (TDD), Acceptance Criteria may provide the framework for the automated tests.

The Acceptance Criteria will be the beginning of the test plan for the QA team. It is what is required for the story to go live, the QA team may still apply exploratory testing to pick up potential defects. Regardless of the team's test methodology, it should have a pass-fail definition of what it means to complete this increment of work.

From the Customer's perspective the Acceptance criteria defines the behavior the customer expects. From a Software Engineer's perspective the Acceptance Criteria tells the Delivery Team how the code should behave. Avoid writing the **"How"** of the User Story; keep to the **"What"**. In short the Delivery Team defines a set of criteria which when met allows a story to be marked as "Done" or "Accepted".

If the team is following Test Driven Development (TDD), it may provide the framework for the automated tests.
The Acceptance Criteria may be the beginnings of the test plan for the QA team.

Most importantly, if the User Story does not meet each of the Acceptance Criteria, then the Product Owner should not accept the User Story as delivered at the end of the iteration.

Acceptance Criteria can be viewed as an instrument to protect the Delivery Team. When the Delivery Team forecasts which User Stories the will focus on delivering in Sprint planning, they need to understand the Acceptance Criteria for those User Stories as well. This helps to avoid scope creep.

Consider the following situation: when accepting the User Story, the Product Owner suggests adding something that was not in the original scope of that User Story. In this case, the Delivery Team is in the position to reject this request (however small it might be), and ask the Product Owner to create a new User Story that can be considered for a future Sprint. 


In the agile approach, the aim is to focus more on people and communication rather than process and tools.


Nomad8 provides a [FAQ on Acceptance Criteria](https://nomad8.com/acceptance_criteria/)

Leading Agile on [Acceptance Criteria](https://www.leadingagile.com/2014/09/acceptance-criteria/)

Ruby Garage on [Writing Acceptance Criteria with Gherkin Syntax](https://rubygarage.org/blog/clear-acceptance-criteria-and-why-its-important)

Elijah Valenciano [The Acceptance Criteria for Writing Acceptance Criteria](https://medium.freecodecamp.org/the-acceptance-criteria-for-writing-acceptance-criteria-6eae9d497814)

[Agile Manifesto](http://agilemanifesto.org/)
