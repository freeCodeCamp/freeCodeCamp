---
title: Acceptance Criteria
---
## Acceptance Criteria

The User Story, as an item in your backlog, is a placeholder for a conversation. In this conversation,
the Product Owner and the Delivery Team reach a shared understanding of **"Who"** wants the change, **"What"** they need to be able to do (in business terms, not 'clicks' and boxes, etc.) and **"Why"** they want it.

Acceptance Criteria tells the Delivery Team how the code should behave. Avoid writing the **"How"** of the User Story, keep to the **"What"**. 

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
The Acceptance Criteria will be the beginnings of the test plan for the QA team.

Most importantly, if the story does not meet each of the Acceptance Criteria, then the Product Owner should not be accepting the story at the end of the iteration.

Acceptance criteria can be viewed as an instrument to protect the Delivery Team. When the Delivery Team commits to a fixed set of stories in the Sprint planning, they commit to a fixed set of acceptance criteria as well. This helps to avoid scope creep.

Consider the following situation: when accepting the user story, the Product Owner suggests adding something that was not in the scope of the User story. In this case the Delivery team is in the position to reject this request (however small it might be) and ask the Product owner to create a new User story that can be taken care of in another Sprint. 

#### More Information

Nomad8 provides a [FAQ on Acceptance Criteria](https://nomad8.com/acceptance_criteria/)

Leading Agile on [Acceptance Criteria](https://www.leadingagile.com/2014/09/acceptance-criteria/)

Ruby Garage on [Writing Acceptance Criteria with Gherkin Syntax](https://rubygarage.org/blog/clear-acceptance-criteria-and-why-its-important)

Elijah Valenciano [The Acceptance Criteria for Writing Acceptance Criteria](https://medium.freecodecamp.org/the-acceptance-criteria-for-writing-acceptance-criteria-6eae9d497814)
